//Any JS file will follow this syntax
sap.ui.define( 
            //Hey UI5, this is not a normal class
            //rather its a controller class
            ["mickey/controller/BaseController",
             "mickey/model/models",
             "sap/m/MessageBox",
             'mickey/util/lifeSaver'
            ] , 
            function(BaseController, models, MessageBox, lifeSaver) {
                //In JS extend keyword indicates inheritence
                return BaseController.extend("mickey.controller.Main",{
                    //Creating a global variable @ controller class level
                    oMyView: null,
                    myReuse: lifeSaver,
                    //This is our processing logic
                    myCode: function(){
                        sap.ui.getCore().applyTheme("sap_horizon");
                        //jquery = automatically load jquery
                        //$("#idSpidy").fadeOut(2000);
                        //sap.ui.getCore().byId("idSpidy").setVisible(false);
                        //We can get a control object @ runtime which was created ina view
                        var oInp = sap.ui.getCore().byId("idInp");
                        //SAP provide us APIs (a function) to consume object of our elements on view
                        if(!oInp.getValue()){
                            alert("please enter a value");
                            return; 
                        }
                        var sVal = oInp.getValue();
                        alert(sVal);
                        oInp.setValue("Maza aavigiyo!!");

                        //always give us object of current view
                        var oView = this.getView();
                        //we should use getCore() to obtain view2 object
                        //make second view visible @ runtime - 
                        oView = sap.ui.getCore().byId("idXMLView");
                        oView.setVisible(true);
                    },
                    //here oEvent is the FREE object which we receive from the incoming event
                    onSelectRow: function(oEvent){
                        //debugger;
                        //Extract the event object information
                        //Step 1: we want to know the element address, extract that
                        var sPathElement = oEvent.getParameter("rowContext").getPath();
                        //Step 2: get the object of simple form
                        var oSimple = this.getView().byId("idSimple");
                        //Step 3: Bind the element with simple form so it gets data from
                        //        same memory where the table is getting it
                        oSimple.bindElement(sPathElement);

                        //Dynamically bind salary and currency with correct relative path of the element
                        //Syntax 3 : for property binding
                        var oSalField = this.getView().byId("idSal");
                        oSalField.bindValue("salary");
                        //Syntax 4: generic binding function
                        var oCurrField = this.getView().byId("idCurr");
                        oCurrField.bindProperty("value","currency");
                    },
                    flag: false,
                    onFlipFlop: function(){
                        //Get the model objects
                        var oModel = sap.ui.getCore().getModel();
                        var oModelG = sap.ui.getCore().getModel("got");
                        //Interchange
                        sap.ui.getCore().setModel(oModelG);
                        sap.ui.getCore().setModel(oModel, "got");
                        //get the table object
                        var oTable = this.getView().byId("myTable");

                        //Solution of exercise to change between xml and json model
                        if(this.flag === false){
                            //in case of xml model we have to add the repeating component name /row
                            oTable.bindAggregation("rows","/empTable");
                            this.flag = true;
                        }else{
                            //in case of xml model we have to add the repeating component name /row
                            oTable.bindAggregation("rows","/empTable/row");
                            this.flag = false;
                        }
                    },
                    onClickButton: function(){
                        //option 1: use get core to get control object
                        //sap.ui.getCore().byId("idXMLView--idXMLField");
                        //get the object of my xml view == since same controller used by
                        //multiple views, we are telling exactly which one to fetch
                        //var oView = this.getView();
                        //get the object of the field inside the view
                        var oInp = this.oMyView.byId("idXMLField")
                        //get the value
                        var sVal = oInp.getValue();
                        //print the value
                        alert(sVal);
                    },
                    onPrintData: function(){
                        // //Step 1: get the object of the view
                        // //var oView = this.getView();
                        // //Step 2: get The object of UI Controls
                        // var oEmpId = this.oMyView.byId("idEmpId");
                        // var oEmpName = this.oMyView.byId("idEmpName");
                        // var oSalary = this.oMyView.byId("idSal");
                        // var oCurrency = this.oMyView.byId("idCurr");
                        // ///checkbox
                        // var oSmoker = oView.byId("idSmoker");
                        // //Step 3: get the values
                        // var sEmpId = oEmpId.getValue();
                        // var sEmpName = oEmpName.getValue();
                        // var sSal = oSalary.getValue();
                        // var sCurr = oCurrency.getValue();
                        // var sSmoker = oSmoker.getSelected();
                        // //Step 4: print in console
                        // console.log(sEmpId + " " + sEmpName + " " + sSal + " " + sCurr + " " + sSmoker);

                        //Step 1: get The model object
                        var oModel = sap.ui.getCore().getModel();

                        //Step 2: get the value from the model
                        var sData = oModel.getProperty("/empStr");
                        console.log(sData);


                    },
                    onChangeData: function(){
                        var oModel = sap.ui.getCore().getModel();
                        //changing the data in the model
                        //if this data show on UI ===> OneWay
                        oModel.setProperty("/empStr/empName","The Rock is Cooking!");
                    },
                    itsMagic: function(){
                        //call my base controller function
                        this.reuseFunction();

                        var oModel = sap.ui.getCore().getModel();
                        //changing the data in the model
                        //if this data show on UI ===> OneWay
                        var minion = oModel.getProperty("/empStr/minion");
                        if(minion === true){
                            oModel.setProperty("/empStr/minion",false);
                        }else{
                            oModel.setProperty("/empStr/minion",true);
                        }
                        
                    },
                    onBeforeRendering: function(){
                        //Pre-processing code before the view is displayed to user
                        //like PBO in ABAP

                        //Step 1: get the employee salary
                        var sSal = sap.ui.getCore().getModel().getProperty("/empStr/salary");
                        //Step 2: check if its over 5000
                        if(sSal > 5000){
                            //Step 3: make the magic button hidden
                            this.getView().byId("idMagic").setVisible(false);
                        }
                        
                    },
                    Show: function(){
                        var oResource = sap.ui.getCore().getModel("i18n");
                        var sText = oResource.getResourceBundle().getText("XMSG_CONFIRM");
                        MessageBox.confirm(sText,{
                            title: 'Wow'
                        });
                    },
                    onAddCol: function(){
                        //Step 1: get the table object
                        var oTable = this.getView().byId("myTable");
                        //Step 2: Create a new column object
                        var oColumn = new sap.ui.table.Column({
                            label: "Ram's column",
                            template: new sap.m.Text({text: "{currency}"})
                        });
                        //Step 3: add column dynamically to table
                        oTable.addColumn(oColumn);
                        //Step 4: if needed do binding for column
                    },
                    onAfterRendering: function(){
                        //post processing
                        $("#idXMLView--idSimple--Form").fadeOut(2000, function(){
                            $("#idXMLView--idSimple--Form").fadeIn(2000);
                        });
                    },
                    //constructor of my controller class
                    //a method which will execute automatically when the object of this class
                    //was created by SAP UI5 @ time of start
                    onInit : function(){
                        //call my base controller function
                        this.reuseFunction();
                        //initialize global variable 
                        this.oMyView = this.getView();
                        
                        var oModel = models.createMyJsonModel("model/mockdata/mydata.json");

                        //create 2nd model with different data
                        var oModel2 = models.createMyJsonModel("model/mockdata/another.json");

                        //Create XML model and set it as default
                        var oXMLModel = models.createMyXmlModel();

                        //Create resource model and set @ App level
                        var oResourceModel = models.createMyResourceModel();

                        sap.ui.getCore().setModel(oResourceModel,"i18n");

                        //Step 3: Make the model aware to the application
                        //first model is now default
                        sap.ui.getCore().setModel(oXMLModel);

                        //to avoid overwriting of our previos model we use named model concept
                        //provide a unqiue name to the model got>xPath
                        sap.ui.getCore().setModel(oModel2, "got");

                        //Syntax 3 : for property binding
                        var oSalField = this.getView().byId("idSal");
                        oSalField.bindValue("/empStr/salary");
                        //Syntax 4: generic binding function
                        var oCurrField = this.getView().byId("idCurr");
                        oCurrField.bindProperty("value","/empStr/currency");
                        //Binding checkbox - binding
                        //this.getView().byId("idSmoker").bindProperty("selected", "/empStr/smoker");

                        //get the table object
                        var oTable = this.getView().byId("myTable");
                        //bind with the path - syntax 3
                        //oTable.bindRows("/empTable");
                        //syntax 4 for agg binding
                        //in case of xml model we have to add the repeating component name /row
                        oTable.bindAggregation("rows","/empTable/row");

                    }
                });
            }
);