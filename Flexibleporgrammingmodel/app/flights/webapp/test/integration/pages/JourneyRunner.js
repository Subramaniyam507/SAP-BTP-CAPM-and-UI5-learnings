sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/flights/flights/test/integration/pages/TravelMain"
], function (JourneyRunner, TravelMain) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/flights/flights') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelMain: TravelMain
        },
        async: true
    });

    return runner;
});

