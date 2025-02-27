import os

import fsspec
import pandas as pd
import scipy
from cirrocumulus.embedding_aggregator import get_basis
from cirrocumulus.parquet_dataset import ParquetDataset
from cirrocumulus.prepare_data import PrepareData


def read_and_diff(ds_reader, path, test_data, measures, dimensions, continuous_obs, basis):
    dataset = dict(id='')
    fs = fsspec.filesystem('file')
    prepared_df = ds_reader.read_dataset(file_system=fs, path=path, dataset=dataset,
                                         schema=ds_reader.schema(file_system=fs, path=path),
                                         keys=dict(X=measures, obs=dimensions + continuous_obs,
                                                   basis=[get_basis(basis, -1, '')]))

    if not scipy.sparse.issparse(test_data.X):
        test_data.X = scipy.sparse.csr_matrix(test_data.X)
    df = pd.DataFrame.sparse.from_spmatrix(test_data.X, columns=measures)

    for f in dimensions:
        df[f] = test_data.obs[f].values
        df[f] = df[f].astype('category')
    for f in continuous_obs:
        df[f] = test_data.obs[f].values
    embedding_data = test_data.obsm[basis]

    for i in range(embedding_data.shape[1]):
        df["{}_{}".format(basis, i + 1)] = embedding_data[:, i]
    prepared_df = prepared_df[df.columns]
    pd.testing.assert_frame_equal(df, prepared_df, check_names=False)


def test_prepare_cxg(test_data, measures, dimensions, continuous_obs, basis, tmp_path):
    try:
        from cirrocumulus.tiledb_dataset import TileDBDataset
        output_dir = str(tmp_path)
        test_data = test_data[:, measures]
        test_data.obs = test_data.obs[dimensions + continuous_obs]
        import subprocess
        output_cxg = os.path.join(output_dir, 'test.cxg')
        output_h5ad = os.path.join(output_dir, 'test.h5ad')
        test_data.write(output_h5ad)
        subprocess.check_call(['cellxgene', 'convert', '-o', output_cxg, '--disable-corpora-schema', output_h5ad])
        read_and_diff(TileDBDataset(), output_cxg, test_data, measures, dimensions, continuous_obs, basis)
    except:  # tiledb install is optional
        print("Skipping TileDB test")
        pass


def test_prepare_parquet(test_data, measures, dimensions, continuous_obs, basis, tmp_path):
    output_dir = str(tmp_path)
    test_data = test_data[:, measures]
    test_data.obs = test_data.obs[dimensions + continuous_obs]
    prepare_data = PrepareData(adata=test_data, output=output_dir)
    prepare_data.execute()
    read_and_diff(ParquetDataset(), output_dir, test_data, measures, dimensions, continuous_obs, basis)
