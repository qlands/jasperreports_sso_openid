(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[5570],{75570:(t,e,i)=>{"use strict";i.r(e);var a=i(17620),s=i(64155),n=i(32758),o=i(236),r=i(11129),_=i(52687),l=i(72157),c=i.n(l);const h={TYPE_ID:"analysisConnection\\.type",LABEL_ID:"connectionLabel",RESOURCE_ID_ID:"connectionName",DESCRIPTION_ID:"connectionDescription",RESOURCE_INPUT_ID:"resourceUri",BROWSE_BUTTON_ID:"browser_button",TREE_ID:"folderTreeRepoLocation",FOLDERS_TREE_DATA_PROVIDER_ID:"repositoryExplorerTreeFoldersProvider",XMLA_CATALOG_ID:"xmlaCatalog",XMLA_DATA_SOURCE_ID:"xmlaDatasource",XMLA_CONNECTION_URI_ID:"xmlaConnectionUri",TEST_BUTTON_ID:"testXMLAConnection",NEXT_BUTTON_ID:"next",DONE_BUTTON_ID:"done",CHANGE_TYPE_BUTTON_ID:"changeCombo",_canGenerateId:!0,initialize:function(t){this._form=c()(document.body).find("form")[0],this._type=c()("#"+this.TYPE_ID)[0],this._label=c()("#"+this.LABEL_ID)[0],this._resourceId=c()("#"+this.RESOURCE_ID_ID)[0],this._description=c()("#"+this.DESCRIPTION_ID)[0];var e=this._type.getValue();"olapXmlaCon"==e&&(this._xmlaCatalog=c()("#"+this.XMLA_CATALOG_ID)[0],this._xmlaDataSource=c()("#"+this.XMLA_DATA_SOURCE_ID)[0],this._xmlaConnectionUri=c()("#"+this.XMLA_CONNECTION_URI_ID)[0]),this._nextButton=c()("#"+this.NEXT_BUTTON_ID),this._doneButton=c()("#"+this.DONE_BUTTON_ID),this._testButton=c()("#"+this.TEST_BUTTON_ID)[0],this._changeTypeButton=c()("#"+this.CHANGE_TYPE_BUTTON_ID)[0],this._isEditMode=t.isEditMode,this._label.validator=a.Z.labelValidator.bind(this),this._resourceId.validator=a.Z.resourceIdValidator.bind(this),this._description.validator=a.Z.descriptionValidator.bind(this),"olapXmlaCon"==e&&(this._xmlaCatalog.validator=this._xmlaCatalogValidator.bind(this),this._xmlaDataSource.validator=this._xmlaDataSourceValidator.bind(this),this._xmlaConnectionUri.validator=this._xmlaConnectionUriValidator.bind(this)),this._initResourcePicker(),this._initEvents()},_initResourcePicker:function(){new n.Z.FileSelector({treeId:this.TREE_ID,providerId:this.FOLDERS_TREE_DATA_PROVIDER_ID,uriTextboxId:this.RESOURCE_INPUT_ID,browseButtonId:this.BROWSE_BUTTON_ID,title:a.Z.messages["resource.SaveToFolder.Title"]})},_initEvents:function(){c()(this._type).on("change",function(){this._changeTypeButton.click()}.bind(this));var t=function(t){this._isDataValid()||t.preventDefault()}.bindAsEventListener(this),e=function(t){this._isDataValid()?this.testXMLAConnection():t.preventDefault()}.bind(this);this._nextButton.on("click",t),this._doneButton.on("click",t),this._testButton&&c()(this._testButton).on("click",e),c()(this._form).on("keyup",function(t){var e=t.target;[this._label,this._resourceId,this._description,this._xmlaCatalog,this._xmlaDataSource,this._xmlaConnectionUri].include(e)&&(s.n4K.validate(a.Z.getValidationEntries([e])),e==this._resourceId&&this._resourceId.getValue()!=a.Z.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),e==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(a.Z.generateResourceId(this._label.getValue())),s.n4K.validate(a.Z.getValidationEntries([this._resourceId]))))}.bind(this))},testXMLAConnection:function(){var t=this._testButton,e=c()(this._form),i=e.serializeArray();i.push({name:"_eventId_testXMLAConnection",value:""}),(0,o.mc)(e.attr("action"),{postData:c().param(i),fillLocation:"ajaxbuffer",callback:function(e){var i=c()(e).text();try{var n=JSON.parse(i);"OK"==n.status?s.n4K.showSuccess(t,a.Z.messages.connectionStatePassed):s.n4K.showError(t,n.message,n.details)}catch(t){_.Z.systemConfirm.show(i)}},errorHandler:r.m0,hideLoader:!1})},_isDataValid:function(){var t=[this._label,this._resourceId,this._description];return"olapXmlaCon"==this._type.getValue()&&(t.push(this._xmlaCatalog),t.push(this._xmlaDataSource),t.push(this._xmlaConnectionUri)),s.n4K.validate(a.Z.getValidationEntries(t))},_xmlaCatalogValidator:function(t){var e=!0,i="";return t.blank()&&(i=a.Z.messages.catalogIsEmpty,e=!1),{isValid:e,errorMessage:i}},_xmlaDataSourceValidator:function(t){var e=!0,i="";return t.blank()&&(i=a.Z.messages.dataSourceIsEmpty,e=!1),{isValid:e,errorMessage:i}},_xmlaConnectionUriValidator:function(t){var e=!0,i="";return t.blank()&&(i=a.Z.messages.uriIsEmpty,e=!1),{isValid:e,errorMessage:i}}};var d=i(97836),u=i.n(d),I=i(71914),D=I.Z.connectionType.localContext.initOptions;u().extend(window.localContext,I.Z.connectionType.localContext),u().extend(a.Z.messages,I.Z.connectionType.resource.messages),h.initialize(D),(0,s.zcy)()&&a.Z.initSwipeScroll()}}]);
//# sourceMappingURL=chunk.5570.js.map