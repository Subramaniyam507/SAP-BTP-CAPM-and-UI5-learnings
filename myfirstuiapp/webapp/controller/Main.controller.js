sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller,
	JSONModel) {
    "use strict";

    return Controller.extend("mickey.controller.Main", {
        oView: null,
          onInit:function(){
            this.oView = this.getView()
            var oModel = new sap.ui.model.json.JSONModel();
            const data = {
                "empStr":{
                    "empId":500,
                    "empName":"anubhav",
                    "salary":11000,
                    "currency":"USD",
                    "smoker": false
                },
                // "empTable":[
                //     {
                //     "empId":5010,
                //     "empName":"Bilal",
                //     "salary":1500,
                //     "currency":"EURO",
                //     "smoker": true
                // },
                // {
                //      "empId":50220,
                //     "empName":"Anany",
                //     "salary":112500,
                //     "currency":"EURO",
                //     "smoker": false
                // }
                // ]
            }
            oModel.setData(data);

            this.getView().setModel(oModel);
            console.log(this.getView().getModel().getData());
            console.log('View:', this.getView());
            console.log('Model:', this.getView().getModel());
             console.log('Model Data:', this.getView().getModel().getData());

          
        },
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
            
             var oInp = this.oView.byId("idXmlField");

             var sValue = oInp.getValue();
             alert(sValue)

        },
        onPrintData:function(){
          
            var oEmpid = this.oView.byId("idEmpId");
            var oEmpName = this.oView.byId("idEmpName");
            var oSalary = this.oView.byId("idSal");
            var oCurrency = this.oView.byId("idCurr");
            var oSmoker = this.oView.byId("idSmoker");
          
            var sEmpid = oEmpid.getValue()
            var sEmpName = oEmpName.getValue()
            var sSalary = oSalary.getValue()
            var sCurrency = oCurrency.getValue()
            var sSmoker = oSmoker.getSelected()

            alert(`${sEmpid} ${sEmpName} ${sSalary} ${sCurrency} ${sSmoker}`)
        }
      

    });
});