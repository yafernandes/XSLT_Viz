(function () { 
    if (!mstrmojo.plugins.XSLT_Viz) {
        mstrmojo.plugins.XSLT_Viz = {};
    }

    mstrmojo.requiresCls(
        "mstrmojo.vi.models.CustomVisDropZones",
        "mstrmojo.array"
    );

    mstrmojo.plugins.XSLT_Viz.XSLT_VizDropZones = mstrmojo.declare(
        mstrmojo.vi.models.CustomVisDropZones,
        null,
        {
            scriptClass: "mstrmojo.plugins.XSLT_Viz.XSLT_VizDropZones",
            cssClass: "xslt_vizdropzones",
            getCustomDropZones: function getCustomDropZones(){
  return [ 
 
 ];},
            shouldAllowObjectsInDropZone: function shouldAllowObjectsInDropZone(zone, dragObjects, idx, edge, context) {
 
 
 
 
 
 
 
  








},
            getActionsForObjectsDropped: function getActionsForObjectsDropped(zone, droppedObjects, idx, replaceObject, extras) {
 
 
 
 
 
 
 
  








},
            getActionsForObjectsRemoved: function getActionsForObjectsRemoved(zone, objects) { 
  
  
  
  
  
  
  
  








},
            getDropZoneContextMenuItems: function getDropZoneContextMenuItems(cfg, zone, object, el) {
 
 
 
 
 
 
 
  








}
})}());
//@ sourceURL=XSLT_VizDropZones.js