sap.ui.define([
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/xml/XMLModel',
    'sap/ui/model/resource/ResourceModel'
], function(JSONModel, XMLModel, ResourceModel) {
    'use strict';
    return {
        createMyJsonModel: function(filePath){
            //Step 1: Create brand new model object
            var oModel = new JSONModel();
            //Step 2: set the data to the model
            oModel.loadData(filePath);
            //Stet 3: Send it out
            return oModel;
        },
        createMyXmlModel: function(){
            //TODO: Future classes
            var oXMLModel = new XMLModel();
            oXMLModel.loadData("model/mockdata/sample.xml");
            return oXMLModel;
        },
        createMyResourceModel: function(){
            //TODO: Future classes
            var oResourceModel = new ResourceModel({
                bundleUrl: 'i18n/i18n.properties'
            });
            return oResourceModel;
        }
    };
});