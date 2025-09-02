sap.ui.define([

     "sap/ui/model/json/JSONModel",
      "sap/ui/model/xml/XMLModel",
       "sap/ui/model/resource/ResourceModel"

], function(

    JSONModel,
    XMLModel,
    ResourceModel
) {
	"use strict";

	return  {

        createMyJsonModel:function(filePath){
             var oModel = new JSONModel();
             oModel.loadData(filePath);
             return oModel
    
        }
	};
});