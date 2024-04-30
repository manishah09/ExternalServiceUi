sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/deloitte/salesterritoryui/test/integration/FirstJourney',
		'com/deloitte/salesterritoryui/test/integration/pages/SalesTerritoryCollectionList',
		'com/deloitte/salesterritoryui/test/integration/pages/SalesTerritoryCollectionObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesTerritoryCollectionList, SalesTerritoryCollectionObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/deloitte/salesterritoryui') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesTerritoryCollectionList: SalesTerritoryCollectionList,
					onTheSalesTerritoryCollectionObjectPage: SalesTerritoryCollectionObjectPage
                }
            },
            opaJourney.run
        );
    }
);