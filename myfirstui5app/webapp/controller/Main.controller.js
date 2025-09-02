sap.ui.define(["sap/ui/core/mvc/Controller","mickey/model/models"], function (
  Controller,
	models) {

  return Controller.extend("mickey.controller.Main", {
    //    mycode: function(){
    //     var oInp = sap.ui.getCore().byId("idInp");
    //                     // $("#idSpidy").fadeOut(2000)
    //                     var svalue = oInp.getValue();
    //                     alert(svalue)
    //                     oInp.setValue("Hi ssss ")
    //                 },
    oview: null,
    onClickXmlButtonButtonPress: function () {

;
      var oInp = this.oview.byId("in1");
      alert(oInp.getValue())

    },

    onPrintData: function () {
     
      // var empid = this.oview.byId("idEmpid");
      // var empname = this.oview.byId("idEmpName");
      // var empSalr = this.oview.byId("idEmpSalary");
      // var empCurr = this.oview.byId("idEmpcurr");
      // var smoke = this.oview.byId("idSmoker");
      var oModel = sap.ui.getCore().getModel()
      console.log(oModel.getProperty('/empStr') , oModel.getProperty('/empTable') );
    },
    onMagic:function(){
var oModel = sap.ui.getCore().getModel()
if(oModel.getProperty("/empStr/minion") === true){
oModel.setProperty("/empStr/minion" , false)
}
else {
  oModel.setProperty("/empStr/minion" , true)
}
  
    },
    onInit: function () {
      this.oview = this.getView()
     var oModel = models.createMyJsonModel("model/mockdata/mydata.json")

      sap.ui.getCore().setModel(oModel)
      var oSal = this.oview.byId("idEmpSalary");
      oSal.bindValue("/empStr/salary")

      var currency = this.oview.byId("idEmpcurr");
      currency.bindProperty("value","/empStr/currency")
    }



  })
});