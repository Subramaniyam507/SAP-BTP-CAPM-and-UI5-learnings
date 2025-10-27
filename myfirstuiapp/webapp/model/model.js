

sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function(
	JSONModel
) {
	"use strict";

   return {
    createMyJsonModel: function(filePath){
        var oModel = new JSONModel()
        let sURL = "model/mockdata/mydata.json"
        oModel.loadData(filePath);
        return oModel
    }
   }
});