sap.ui.jsview("mickey.view.Main",{
    //These are standard functions which every JS view will have 
    //this function will be used to return the name of the controller
    getControllerName: function(){
        return "mickey.controller.Main";
    },
    //here is where we create our control code
    //We will receive the object of controller class automatically here:
    //send them in return
    createContent: function(oSpiderman){
        //Step 1: create an input field object
        var oInp = new sap.m.Input("idInp",{
            width: "30%"
        });

        //Syntax to create a new control
        //Create a control class object
        var oSpidy = new sap.m.Button("idSpidy",{
            text: "Click Me!",
            icon: "sap-icon://vertical-grip",
            //this way we are explicitly passing the object of controller to event handler
            //so the controller object will be set into 'this' pointer
            press: [oSpiderman.myCode, oSpiderman]
        });

        return [oInp, oSpidy];

    }
});