sap.ui.jsview("mickey.view.Main",{


    getControllerName:function(){
           return "mickey.controller.Main"
    },
    createContent:function(oController){
            var oInp = new sap.m.Input("idInp");
            var oSpidy = new sap.m.Button("idSpidy",{
                        text:'Click me',
                        press:oController.myCode
                    })

                    return [oInp,oSpidy]
    }
})