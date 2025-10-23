sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageBox'
], function(Controller, MessageBox) {
    'use strict';
    return Controller.extend("mickey.controller.BaseController",{
        //declared statically but any one can change its value @ runtime
        x: "anubhav",
        reuseFunction: function(){
            MessageBox.confirm("Welcome to reuse code");
        }
    });
});