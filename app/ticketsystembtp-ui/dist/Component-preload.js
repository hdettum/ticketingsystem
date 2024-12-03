//@ui5-bundle ticketingsystem/Component-preload.js
sap.ui.require.preload({
	"ticketingsystem/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("ticketingsystem.Component",{metadata:{manifest:"json"}})});
},
	"ticketingsystem/i18n/i18n.properties":'# This is the resource bundle for ticketingsystem\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Ticketing System \n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"ticketingsystem/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"ticketingsystem","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.6","toolsId":"ad0f6955-357b-491f-bb12-5260808c839a"},"dataSources":{"mainService":{"uri":"/odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.131.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ticketingsystem.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"UserSetList","target":"UserSetList"},{"pattern":"UserSet({key}):?query:","name":"UserSetObjectPage","target":"UserSetObjectPage"}],"targets":{"UserSetList":{"type":"Component","id":"UserSetList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/UserSet","variantManagement":"Page","navigation":{"UserSet":{"detail":{"route":"UserSetObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"UserSetObjectPage":{"type":"Component","id":"UserSetObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/UserSet"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
});
//# sourceMappingURL=Component-preload.js.map
