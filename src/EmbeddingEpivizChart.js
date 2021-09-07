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

        this.state = {
            loadEpivizComponent: false
          }

          this.handleAddSecondInput = this.handleAddSecondInput.bind(this);
    }

    componentDidMount() {
        console.log('I work,,', document.querySelector('#testDiv'));
        // document.querySelector('#testDiv').innerHTML = '<epiviz-navigation chr="chr2" start="126998023" end="127207154" genome="hg38"'
        //  + 'ms-api="https://gepiviz.science.roche.com/emd/api/v1/">'
        // + '<epiviz-genes-track slot="charts" dim-s=' + '["hg38"]' + '></epiviz-genes-track>'
        // + '<epiviz-stacked-blocks-track slot="charts"'
        // + 'dim-s=' + '["catlas-human-tissues::peaks::Bly", "catlas-human-tissues::peaks::Bas.1", "catlas-human-tissues::peaks::Bas.2"]' + '>'
        // + '</epiviz-stacked-blocks-track>';

        // document.querySelector('#testDiv').innerHTML = '<epiviz-navigation chr="chr2" start="126998023" end="127207154" genome="hg38"'
        //     + 'ms-api="https://gepiviz.science.roche.com/emd/api/v1/">'
        //     + '<epiviz-genes-track slot="charts" dim-s=' + '["hg38"]' + '></epiviz-genes-track>'
        //     + '<epiviz-stacked-blocks-track slot="charts" measurements=' + '['
        //     + '{'
        //     + '"id": "catlas-human-tissues::peaks::Bly",'
        //     + '"name": "catlas-human-tissues::peaks::Bly",'
        //     + '"type": "range",'
        //     + '"datasourceId": "catlas-human-tissues::peaks::Bly",'
        //     + '"datasourceGroup": "catlas-human-tissues::peaks::Bly",'
        //     + '"dataprovider": "umd",'
        //     + '"formula": null,'
        //     + '"defaultChartType": "Blocks Track",'
        //     + '"annotation": null,'
        //     + '"minValue": null,'
        //     + '"maxValue": null,'
        //     + '"metadata": []'
        //     + '},{'
        //     + '"id": "catlas-human-tissues::peaks::Bas.1",'
        //     + '"name": "catlas-human-tissues::peaks::Bas.1",'
        //     + '"type": "range",'
        //     + '"datasourceId": "catlas-human-tissues::peaks::Bas.1",'
        //     + '"datasourceGroup": "catlas-human-tissues::peaks::Bas.1",'
        //     + '"dataprovider": "umd",'
        //     + '"formula": null,'
        //     + '"defaultChartType": "Blocks Track",'
        //     + '"annotation": null,'
        //     + '"minValue": null,'
        //     + '"maxValue": null,'
        //     + '"metadata": []'
        //     + '},{'
        //     + '"id": "catlas-human-tissues::peaks::Bas.2",'
        //     + '"name": "catlas-human-tissues::peaks::Bas.2",'
        //     + '"type": "range",'
        //     + '"datasourceId": "catlas-human-tissues::peaks::Bas.2",'
        //     + '"datasourceGroup": "catlas-human-tissues::peaks::Bas.2",'
        //     + '"dataprovider": "umd",'
        //     + '"formula": null,'
        //     + '"defaultChartType": "Blocks Track",'
        //     + '"annotation": null,'
        //     + '"minValue": null,'
        //     + '"maxValue": null,'
        //     + '"metadata": []'
        //     + '}'
        //     + ']' + '>'
        //     + '</epiviz-stacked-blocks-track>'

        //     + '<epiviz-multistacked-line-track slot="charts" measurements=' + '['
        //     + '{'
        //     + '"id": "catlas-human-tissues::peaks::Bly",'
        //     + '"name": "catlas-human-tissues::peaks::Bly",'
        //     + '"type": "range",'
        //     + '"datasourceId": "catlas-human-tissues::peaks::Bly",'
        //     + '"datasourceGroup": "catlas-human-tissues::peaks::Bly",'
        //     + '"dataprovider": "umd",'
        //     + '"formula": null,'
        //     + '"defaultChartType": "Blocks Track",'
        //     + '"annotation": null,'
        //     + '"minValue": null,'
        //     + '"maxValue": null,'
        //     + '"metadata": []'
        //     + '},{'
        //     + '"id": "catlas-human-tissues::peaks::Bas.1",'
        //     + '"name": "catlas-human-tissues::peaks::Bas.1",'
        //     + '"type": "range",'
        //     + '"datasourceId": "catlas-human-tissues::peaks::Bas.1",'
        //     + '"datasourceGroup": "catlas-human-tissues::peaks::Bas.1",'
        //     + '"dataprovider": "umd",'
        //     + '"formula": null,'
        //     + '"defaultChartType": "Blocks Track",'
        //     + '"annotation": null,'
        //     + '"minValue": null,'
        //     + '"maxValue": null,'
        //     + '"metadata": []'
        //     + '},{'
        //     + '"id": "catlas-human-tissues::peaks::Bas.2",'
        //     + '"name": "catlas-human-tissues::peaks::Bas.2",'
        //     + '"type": "range",'
        //     + '"datasourceId": "catlas-human-tissues::peaks::Bas.2",'
        //     + '"datasourceGroup": "catlas-human-tissues::peaks::Bas.2",'
        //     + '"dataprovider": "umd",'
        //     + '"formula": null,'
        //     + '"defaultChartType": "Blocks Track",'
        //     + '"annotation": null,'
        //     + '"minValue": null,'
        //     + '"maxValue": null,'
        //     + '"metadata": []'
        //     + '}'
        //     + ']' + '></epiviz-multistacked-line-track>'

        //     + '</epiviz-navigation>';
    }

    handleAddSecondInput() {
        console.log(this);
        this.setState({loadEpivizComponent:  true});
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        
    }

    handleToggleLegend = (e) => {

    };

    render() {
        //console.log(setChartOptions);
        const myStyle = {
            position: 'relative',
            ':host #header': {
              color: '#000000'
            }
          };
        return (
            
            <div style={{ position: 'relative', color: 'black' }}>
                
                
                <button type="button"className="make-button-link" data-add-button="" href="#" onClick={this.handleAddSecondInput}>
                    Add component
                </button>

                {this.state.loadEpivizComponent ? 
                    <epiviz-navigation chr="chr2" start="126998023" end="127207154" genome="hg38"
                        ms-api="https://gepiviz.science.roche.com/emd/api/v1/">
                        <epiviz-genes-track slot="charts" dim-s='["hg38"]'></epiviz-genes-track>
                        <epiviz-stacked-blocks-track slot="charts" measurements='[
                        {
                            "id": "catlas-human-tissues::peaks::Bly",
                            "name": "catlas-human-tissues::peaks::Bly",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bly",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bly",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        },{
                            "id": "catlas-human-tissues::peaks::Bas.1",
                            "name": "catlas-human-tissues::peaks::Bas.1",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bas.1",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bas.1",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        },{
                            "id": "catlas-human-tissues::peaks::Bas.2",
                            "name": "catlas-human-tissues::peaks::Bas.2",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bas.2",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bas.2",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        }
                        ]'>
                        </epiviz-stacked-blocks-track>

                        <epiviz-multistacked-line-track slot="charts" measurements='[
                        {
                            "id": "catlas-human-tissues::peaks::Bly",
                            "name": "catlas-human-tissues::peaks::Bly",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bly",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bly",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        },{
                            "id": "catlas-human-tissues::peaks::Bas.1",
                            "name": "catlas-human-tissues::peaks::Bas.1",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bas.1",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bas.1",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        },{
                            "id": "catlas-human-tissues::peaks::Bas.2",
                            "name": "catlas-human-tissues::peaks::Bas.2",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bas.2",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bas.2",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        }
                        ]'></epiviz-multistacked-line-track>

                    </epiviz-navigation>
                : console.log('not loading..')}
    


                <epiviz-navigation chr="chr2" start="126998023" end="127207154" genome="hg38"
                        ms-api="https://gepiviz.science.roche.com/emd/api/v1/">
                        <epiviz-genes-track slot="charts" dim-s='["hg38"]'></epiviz-genes-track>
                        <epiviz-stacked-blocks-track slot="charts" measurements='[
                        {
                            "id": "catlas-human-tissues::peaks::Bly",
                            "name": "catlas-human-tissues::peaks::Bly",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bly",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bly",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        },{
                            "id": "catlas-human-tissues::peaks::Bas.1",
                            "name": "catlas-human-tissues::peaks::Bas.1",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bas.1",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bas.1",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        },{
                            "id": "catlas-human-tissues::peaks::Bas.2",
                            "name": "catlas-human-tissues::peaks::Bas.2",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bas.2",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bas.2",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        }
                        ]'>
                        </epiviz-stacked-blocks-track>

                        <epiviz-multistacked-line-track slot="charts" measurements='[
                        {
                            "id": "catlas-human-tissues::peaks::Bly",
                            "name": "catlas-human-tissues::peaks::Bly",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bly",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bly",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        },{
                            "id": "catlas-human-tissues::peaks::Bas.1",
                            "name": "catlas-human-tissues::peaks::Bas.1",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bas.1",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bas.1",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        },{
                            "id": "catlas-human-tissues::peaks::Bas.2",
                            "name": "catlas-human-tissues::peaks::Bas.2",
                            "type": "range",
                            "datasourceId": "catlas-human-tissues::peaks::Bas.2",
                            "datasourceGroup": "catlas-human-tissues::peaks::Bas.2",
                            "dataprovider": "umd",
                            "formula": null,
                            "defaultChartType": "Blocks Track",
                            "annotation": null,
                            "minValue": null,
                            "maxValue": null,
                            "metadata": []
                        }
                        ]'></epiviz-multistacked-line-track>

                    </epiviz-navigation>




                <div id="testDiv"></div>
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