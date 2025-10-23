sap.ui.define([
    "sap/ui/core/format/NumberFormat"
], function(NumberFormat) {
    'use strict';
    return {
        //a formatter function
        convertToLarge: function(inp){
            if(inp){
                return inp.toUpperCase();
            }                        
        },
        formatCurrency: function(amt,curr){
            var oCurrencyFormat = NumberFormat.getCurrencyInstance();
            return oCurrencyFormat.format(amt, curr); 
        },
        converge: function(inp){
            if(inp){
                return parseInt(inp);
            }
        }

    };
});