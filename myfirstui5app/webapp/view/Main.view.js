sap.ui.jsview("mickey",{
    getControllerName: function(){

    },
    createContent:function(){
         var oInp = new sap.m.Input("idInp")

          var oSpidy = new sap.m.Button("idSpidy",{
                        text:"Click Me!",  
                        press:function(){
                            $("#idSpidy").fadeOut(2000)
                        }
                    })

                    return [oSpidy,oInp]
    }
}
);