sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/anubhav/travel/anubhavflexapp/test/integration/pages/TravelMain"
], function (JourneyRunner, TravelMain) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/anubhav/travel/anubhavflexapp') + '/index.html',
        pages: {
			onTheTravelMain: TravelMain
        },
        async: true
    });

    return runner;
});

