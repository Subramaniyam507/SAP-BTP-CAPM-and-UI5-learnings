sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("mickey.controller.Main", {

        myCode:function(){

            var oInput = sap.ui.getCore().byId("idInp")
            if(!oInput.getValue()){
                alert("please enter a value");
            }
            var sVal = oInput.getValue();
            alert(sVal)
            oInput.setValue("Hellow world !!")
        },
        onClickButton:function(){
             var oView = this.getView();
             var oInp = oView.byId("idXmlField");

             var sValue = oInp.getValue();
             alert(sValue)

        }

    });
});