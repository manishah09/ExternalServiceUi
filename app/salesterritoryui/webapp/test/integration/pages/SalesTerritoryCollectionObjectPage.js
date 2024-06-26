sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.deloitte.salesterritoryui',
            componentId: 'SalesTerritoryCollectionObjectPage',
            contextPath: '/SalesTerritoryCollection'
        },
        CustomPageDefinitions
    );
});