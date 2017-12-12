(function () { 
    if (!mstrmojo.plugins.XSLT_Viz) {
        mstrmojo.plugins.XSLT_Viz = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.CustomVisBase",
        "mstrmojo.models.template.DataInterface",
        "mstrmojo.vi.models.editors.CustomVisEditorModel"
    );

    mstrmojo.plugins.XSLT_Viz.XSLT_Viz = mstrmojo.declare(
        mstrmojo.CustomVisBase,
        null,
        {
            scriptClass: "mstrmojo.plugins.XSLT_Viz.XSLT_Viz",
            cssClass: "xslt_viz",
            errorMessage: "Either there is not enough data to display the visualization or the visualization configuration is incomplete.",
            errorDetails: "This visualization requires one or more attributes and one metric.",
            externalLibraries: [{url:"//code.jquery.com/jquery-latest.js"}],
            useRichTooltip: false,
            supportNEE: true,
            reuseDOMNode: false,
            plot:function(){
try {
    if (!HTMLElement.prototype.attachShadow) {
        alert("This browser does not support this visualization.  This visualization requires Shadow DOM v1 support.");
        return;
    }

    this.setDefaultPropertyValues(
    {
        data_type: {
        data: "true",
        url: "false"
        },
        Log_XML: "false"
    }
    );
    var myself = this;

    var di = this.dataInterface;
    var data = di.getRawData(mstrmojo.models.template.DataInterface.ENUM_RAW_DATA_FORMAT.TREE, { hasTitleName: true, hasThreshold: true });

    var prop = Object.assign({}, this.getDefaultProperties(), this.getProperties());

    var xml = document.implementation.createDocument(null, "Dataset");

    function appendChildren(node, children, gen, self) {
    for (var i = 0; i < children.length; i++) {
        var child = node.ownerDocument.createElement("Header");
        child.setAttribute("title", self.dataInterface.getRowTitles().titles[gen].n);
        child.setAttribute("value", children[i].name);
        node.appendChild(child);
        if (children[i].children) {
            appendChildren(child, children[i].children, gen + 1, self);
        }
        if (children[i].values) {
            for (var j = 0; j < children[i].values.length; j++) {
                var metricNode = node.ownerDocument.createElement("Metric");
                metricNode.setAttribute("title", children[i].values[j].name);
                metricNode.setAttribute("value", children[i].values[j].rv);
                metricNode.setAttribute("formattedValue", children[i].values[j].v);
                child.appendChild(metricNode);
            }
        }
    }
    }

    appendChildren(xml.firstElementChild, data.children, 0, this);

    function transform(data) {
        var xsltProcessor = new XSLTProcessor();
        xsltProcessor.importStylesheet(data);
        var resultDocument = xsltProcessor.transformToFragment(xml, document);
		var shadowRoot;
      if (!myself.domNode.shadowRoot) {
		shadowRoot = myself.domNode.attachShadow({mode: 'open'});
      } else {
        shadowRoot = myself.domNode.shadowRoot;
      }
      $(myself.domNode).css("overflow", "auto");
      shadowRoot.appendChild(resultDocument);
    }

    if (prop.Log_XML == "true") {
        var serializer = new XMLSerializer();
        console.log(serializer.serializeToString(xml));
    }
  
	if (prop.data_type.data == "true") {
        transform(new DOMParser().parseFromString(prop.XSLT, "text/xml"));
    } else {
        $.ajax(prop.XSLT).done(transform(data, error));
    }

} catch (e) {
    console.log(e);
}}})}());
//@ sourceURL=XSLT_Viz.js