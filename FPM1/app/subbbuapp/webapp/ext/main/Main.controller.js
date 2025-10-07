sap.ui.define(
    [
        'sap/fe/core/PageController',
        'sap/ui/model/json/JSONModel',
        'sap/m/MessageToast'
    ],
    function(PageController,JSONModel,MessageToast) {
        'use strict';

        return PageController.extend('com.subbu.subbbuapp.ext.main.Main', {
        

            	onAfterRendering: function (oEvent) {
				var oView = this.getView();
				var mFBConditions = new JSONModel({
					allFilters: "",
					expanded: false,
					filtersTextInfo: oView.byId("FilterBar").getActiveFiltersText()
				});
				oView.setModel(mFBConditions, "fbConditions");
			},
		          
			
				onFiltersChanged: function (oEvent) {
					var oView = this.getView();
					var filterBar = oView.byId("FilterBar");
					var allFilters = filterBar.getFilters();

					var oSource = oEvent.getSource();
					var mFBConditions = oSource.getModel("fbConditions");
					mFBConditions.setProperty("/allFilters", JSON.stringify(allFilters, null, "  "));

					if (Object.keys(allFilters).length > 0) {
						mFBConditions.setProperty("/expanded", true);
					}
					MessageToast.show("FilterBar filters are changed!");
					mFBConditions.setProperty("/filtersTextInfo", oSource.getActiveFiltersText());
				}
			,

	
        });
    }
);
