(function () { 
    if (!mstrmojo.plugins.XSLT_Viz) {
        mstrmojo.plugins.XSLT_Viz = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.editors.CustomVisEditorModel",
        "mstrmojo.array"
    );

    mstrmojo.plugins.XSLT_Viz.XSLT_VizEditorModel = mstrmojo.declare(
        mstrmojo.vi.models.editors.CustomVisEditorModel,
        null,
        {
            scriptClass: "mstrmojo.plugins.XSLT_Viz.XSLT_VizEditorModel",
            cssClass: "xslt_vizeditormodel",
            getCustomProperty: function getCustomProperty(){
var $WT = mstrmojo.vi.models.editors.CustomVisEditorModel.WIDGET_TYPE;

return [
    {
        name: "XLST Viz",
        value: [
            {
                style: $WT.EDITORGROUP,
                items: [
                    {
                        style: $WT.BUTTONBAR,
                        propertyName: "data_type",
                        items: [
                            {
                                labelText: "Data",
                                propertyName: "data"
                            },
                            {
                                labelText: "URL",
                                propertyName: "url"
                            }
                        ],
                        multiSelect: false
                    },
                    {
                        style: $WT.LABEL,
                        labelText: 'XSLT:'
                    },
                    {
                        style: $WT.TEXTBOX,
                        propertyName: 'XSLT'
                    },
                    {
                        style: $WT.CHECKBOXANDLABEL,
                        labelText: 'Output XML to console',
                        propertyName: 'Log_XML'
                    }
                ]
            }
        ]
    }
];}
})}());
//@ sourceURL=XSLT_VizEditorModel.js