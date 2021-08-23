import React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';

import {
    getTraceKey,
    handleBrushFilterUpdated,
    handleCategoricalNameChange,
    handleColorChange,
    handleDimensionFilterUpdated,
    handleDomainChange,
    handleMeasureFilterUpdated,
    setChartOptions,
    setPrimaryChartSize
} from './actions';


class EmbeddingEpivizChart extends React.PureComponent {

    constructor(props) {
        super(props);
    }

    componentWillUnmount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    handleToggleLegend = (e) => {

    };

    render() {
        //console.log(setChartOptions);
        return (
            <div style={{ position: 'relative' }}>

                <epiviz-data-source provider-type="epiviz.data.WebServerDataProvider" provider-id="umd" provider-url="https://epiviz-dev.cbcb.umd.edu/api/"></epiviz-data-source>

                <epiviz-environment chr="chr6" start={40076201} end={45076201} no-logo measurements='{"affy1":{
                                    "id":"e070",
                                    "name":"Expression Brain Germinal Matrix",
                                    "type":"feature",
                                    "datasourceId":"roadmap_rnaseq",
                                    "datasourceGroup":"roadmap_rnaseq",
                                    "dataprovider":"umd",
                                    "formula":null,
                                    "defaultChartType":null,
                                    "annotation":null,
                                    "minValue":-3,
                                    "maxValue":20,
                                    "metadata":["probe"]
                                },
                                "affy2":{
                                    "id":"e071",
                                    "name":"Expression Brain Hippocampus Middle",
                                    "type":"feature",
                                    "datasourceId":"roadmap_rnaseq",
                                    "datasourceGroup":"roadmap_rnaseq",
                                    "dataprovider":"umd",
                                    "formula":null,
                                    "defaultChartType":null,
                                    "annotation":null,
                                    "minValue":-3,
                                    "maxValue":20,
                                    "metadata":["probe"]
                                },
                                "genes": {
                                    "id": "genes",
                                    "name": "Genes",
                                    "type": "range",
                                    "datasourceId": "genes",
                                    "datasourceGroup": "genes",
                                    "dataprovider": "umd",
                                    "formula": null,
                                    "defaultChartType": "Genes Track",
                                    "annotation": null,
                                    "minValue": null,
                                    "maxValue": null,
                                    "metadata": ["gene", "exon_starts","exon_ends"]
                                }
                            }'>
                    <epiviz-genes-track id="test" slot="charts" dim-s='["genes"]'></epiviz-genes-track>
                    <epiviz-scatter-plot slot="charts" dim-s='["affy1", "affy2"]'></epiviz-scatter-plot>
                </epiviz-environment>   

            </div>);

    }
}

const mapStateToProps = state => {
    return {

    };
};
const mapDispatchToProps = dispatch => {
    return {

    };
};

export default (connect(
    mapStateToProps, mapDispatchToProps,
)(EmbeddingEpivizChart));