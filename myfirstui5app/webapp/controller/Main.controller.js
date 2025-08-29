sap.ui.define(["sap/ui/core/mvc/Controller"],function(
	Controller){
       
        return Controller.extend("mickey.controller.Main",{
        //    mycode: function(){
        //     var oInp = sap.ui.getCore().byId("idInp");
        //                     // $("#idSpidy").fadeOut(2000)
        //                     var svalue = oInp.getValue();
        //                     alert(svalue)
        //                     oInp.setValue("Hi ssss ")
        //                 },

          onClickXmlButtonButtonPress:function(){

              var  oView = this.getView();
              var oInp = oView.byId("in1");
              alert(oInp.getValue())

          }

        })
});