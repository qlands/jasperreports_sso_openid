(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[1135],{91135:(e,t,i)=>{"use strict";i.r(t);var s=i(97836),r=i.n(s),o=i(71914),n=i(17620),a=i(72157),d=i.n(a),_=i(64155),l=i(32758);const c={LABEL_ID:"label",RESOURCE_ID_ID:"resourceID",DESCRIPTION_ID:"fileResource\\.description",FOLDER_TREE_DATA_PROVIDER:"repositoryExplorerTreeFoldersProvider",FOLDER_TREE_ID:"addFileTreeRepoLocation",FOLDER_RESOURCE_INPUT:"folderUri",NEXT_BUTTON_ID:"next",BROWSE_BUTTON_ID:"browser_button",_canGenerateId:!0,initialize:function(e){this._form=d()(document.body).find("form")[0],this._label=d()("#"+this.LABEL_ID)[0],this._resourceId=d()("#"+this.RESOURCE_ID_ID)[0],this._description=d()("#"+this.DESCRIPTION_ID)[0],this._nextButton=d()("#"+this.NEXT_BUTTON_ID),this._isEditMode=!!e&&e.isEditMode,this._label.validator=n.Z.labelValidator.bind(this),this._resourceId.validator=n.Z.resourceIdValidator.bind(this),this._description.validator=n.Z.descriptionValidator.bind(this),this._initEvents(),e.isBrowseActive&&this._initFileSelector()},_initFileSelector:function(e){new l.Z.FileSelector({treeId:this.FOLDER_TREE_ID,providerId:this.FOLDER_TREE_DATA_PROVIDER,uriTextboxId:this.FOLDER_RESOURCE_INPUT,browseButtonId:this.BROWSE_BUTTON_ID,title:n.Z.messages["resource.Report.Title"]})},_initEvents:function(){this._nextButton.on("click",function(e){this._isDataValid()||e.stopPropagation()}.bindAsEventListener(this)),d()(this._form).on("keyup",function(e){var t=e.target;[this._label,this._resourceId,this._description].include(t)&&(_.n4K.validate(n.Z.getValidationEntries([t])),t==this._resourceId&&this._resourceId.getValue()!=n.Z.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),t==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(n.Z.generateResourceId(this._label.getValue())),_.n4K.validate(n.Z.getValidationEntries([this._resourceId]))))}.bind(this))},_isDataValid:function(){var e=[this._label,this._resourceId,this._description];return _.n4K.validate(n.Z.getValidationEntries(e))}};var h;void 0!==o.Z.addJasperReport.localContext&&(h=o.Z.addJasperReport.localContext.initOptions,r().extend(window.localContext,o.Z.addJasperReport.localContext)),r().extend(n.Z.messages,o.Z.addJasperReport.resource.messages),c.initialize(h),(0,_.zcy)()&&n.Z.initSwipeScroll()}}]);
//# sourceMappingURL=chunk.1135.js.map