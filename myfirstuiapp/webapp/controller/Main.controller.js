sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "mickey/model/model"
], function (Controller,
	JSONModel,
	model) {
    "use strict";

    return Controller.extend("mickey.controller.Main", {
        oView: null,
          onInit:function(){
            // this.oView = this.getView()
            // var oModel = new sap.ui.model.json.JSONModel();
            // const data = 
            // oModel.setData(data);
            let sURL = "model/mockdata/mydata.json"
            let sUrl2 =  "model/mockdata/another.json"
            var  oModel = model.createMyJsonModel(sURL);
            var oModel2 = model.createMyJsonModel(sUrl2) 
            // this.getView().setModel(oModel);
             sap.ui.getCore().setModel(oModel);
             sap.ui.getCore().setModel(oModel2,"got")
            
            

          
        },
        /**
         * @override
         * @returns {void|undefined}
         */


        // not working
        onBeforeRendering: function() {
           var oModel = sap.ui.getCore().getModel();
           var sSal = oModel.getProperty("/empStr/salary")
           if(sSal > 5000){
            this.getView().byId("idMagic").setVisible(false)
           }
            
        

        },
        itsMagic:function(){
            var oModel = sap.ui.getCore().getModel();
            var minion = oModel.getProperty("/empStr/minion")

            if(minion = true){
                oModel.setProperty("/empStr/minion",false)
            }
            else{
oModel.setProperty("/empStr/minion",true)
            }
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
          
            // var oEmpid = this.oView.byId("idEmpId");
            // var oEmpName = this.oView.byId("idEmpName");
            // var oSalary = this.oView.byId("idSal");
            // var oCurrency = this.oView.byId("idCurr");
            // var oSmoker = this.oView.byId("idSmoker");
          
            // var sEmpid = oEmpid.getValue()
            // var sEmpName = oEmpName.getValue()
            // var sSalary = oSalary.getValue()
            // var sCurrency = oCurrency.getValue()
            // var sSmoker = oSmoker.getSelected()

            var oModel = sap.ui.getCore().getModel();
            var sData = oModel.getProperty('/empStr') 

            console.log(`${sData}`)
        }
      

    });
});