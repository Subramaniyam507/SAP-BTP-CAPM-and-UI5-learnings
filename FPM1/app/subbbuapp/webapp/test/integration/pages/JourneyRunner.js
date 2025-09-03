sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/subbu/subbbuapp/test/integration/pages/TravelMain"
], function (JourneyRunner, TravelMain) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/subbu/subbbuapp') + '/index.html',
        pages: {
			onTheTravelMain: TravelMain
        },
        async: true
    });

    return runner;
});

