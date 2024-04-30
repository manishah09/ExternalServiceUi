//@ui5-bundle com/deloitte/salesterritoryui/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/deloitte/salesterritoryui/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("com.deloitte.salesterritoryui.Component",{metadata:{manifest:"json"}})});
},
	"com/deloitte/salesterritoryui/i18n/i18n.properties":'# This is the resource bundle for com.deloitte.salesterritoryui\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Sales Territory\n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"com/deloitte/salesterritoryui/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"com.deloitte.salesterritoryui","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.2","toolsId":"ae7704fa-a2a5-4f98-936a-742d10ea23e7"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.123.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.deloitte.salesterritoryui.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"SalesTerritoryCollectionList","target":"SalesTerritoryCollectionList"},{"pattern":"SalesTerritoryCollection({key}):?query:","name":"SalesTerritoryCollectionObjectPage","target":"SalesTerritoryCollectionObjectPage"}],"targets":{"SalesTerritoryCollectionList":{"type":"Component","id":"SalesTerritoryCollectionList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/SalesTerritoryCollection","variantManagement":"Page","navigation":{"SalesTerritoryCollection":{"detail":{"route":"SalesTerritoryCollectionObjectPage"}}}}}},"SalesTerritoryCollectionObjectPage":{"type":"Component","id":"SalesTerritoryCollectionObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/SalesTerritoryCollection"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"Day5UiApp"}}'
}});
