(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[2636],{82636:(e,t,r)=>{"use strict";r.r(t);var i=r(72157),n=r.n(i),o=r(52499),s=r(11364),a=r(64155),d=r(43852),l=r(46539),u={messages:{},resourceLabelMaxLength:100,resourceIdMaxLength:100,resourceDescriptionMaxLength:250,PROPAGATE_EVENT:"propagateEvent",STEP_DISPLAY_ID:"stepDisplay",FLOW_CONTROLS_ID:"flowControls",initSwipeScroll:function(){var e=n()("#"+u.STEP_DISPLAY_ID)[0];e&&new s.Z(e.parent(),e.parents().eq(2),{})},submitForm:function(e,t,r){if(t){var i=(0,a.nB6)(t);r&&r(),n()("#"+e).attr("method","post").attr("action",i),n()("#"+e)[0].submit()}},registerClickHandlers:function(e,t,r){if(u._bodyClickEventHandlers)(r?Array.prototype.unshift:Array.prototype.push).apply(u._bodyClickEventHandlers,e);else{u._bodyClickEventHandlers=e;var i=t||"body";n()(i).on("click",(function(e){u._bodyClickEventHandlers&&u._bodyClickEventHandlers.each((function(t){var r=t(e);if(r)throw r!==u.PROPAGATE_EVENT&&Event.stop(e),o.$break}))}))}},TreeWrapper:function(e){var t=this;if(this._treeId=e.treeId,this._resourceUriInput=n()("#"+e.resourceUriInput||0)[0],this._uri=this._resourceUriInput&&this._resourceUriInput.getValue()||e.uri||"/",!e.providerId)throw"There is no tree provider set for tree #{id}".interpolate({id:this._treeId});var r=["providerId","rootUri","organizationId","publicFolderUri","urlGetNode","urlGetChildren"].inject({},(function(t,r){return null!==e[r]&&(t[r]=e[r]),t}));return this._tree=new l.Z.createRepositoryTree(this._treeId,r),this._tree.observe("tree:loaded",(function(){t._tree.openAndSelectNode(n()("#"+t._resourceUriInput)[0].getValue())})),this._tree.observe("leaf:selected",(function(e){t._uri=e.memo.node.param.uri,t._resourceUriInput.setValue(t._uri)})),this._tree.observe("node:selected",(function(){t._resourceUriInput.setValue(t._uri="")})),{getTreeId:function(){return t._treeId},getTree:function(){return t._tree},selectFolder:function(e){t._tree.openAndSelectNode(e)},getSelectedFolderUri:function(){return t._uri}}},switchButtonState:function(e,t){d.Z[t?"enable":"disable"].call(d.Z,e)},switchDisableState:function(e,t){(e=n()(e)[0])&&e[t?"disable":"enable"].call(e)},generateResourceId:function(e){if(window.localContext&&window.localContext.initOptions&&window.localContext.initOptions.resourceIdNotSupportedSymbols)return e.replace(new RegExp(window.localContext.initOptions.resourceIdNotSupportedSymbols,"g"),"_");throw"There is no resourceIdNotSupportedSymbols property in init options."},testResourceId:function(e){if(window.localContext&&window.localContext.initOptions&&window.localContext.initOptions.resourceIdNotSupportedSymbols)return new RegExp(window.localContext.initOptions.resourceIdNotSupportedSymbols,"g").test(e);throw"There is no resourceIdNotSupportedSymbols property in init options."},labelValidator:function(e){var t=!0,r="";return e.blank()?(r=u.messages.labelIsEmpty,t=!1):e.length>u.resourceLabelMaxLength&&(r=u.messages.labelToLong,t=!1),{isValid:t,errorMessage:r}},getLabelValidationEntry:function(e){return{element:e,validators:[{method:"mandatory",messages:{mandatory:u.messages.labelIsEmpty}},{method:"minMaxLength",messages:{tooLong:u.messages.labelToLong},options:{maxLength:u.resourceLabelMaxLength}}]}},getIdValidationEntry:function(e){return{element:e,validators:[{method:"resourceIdChars",messages:u.messages},{method:"mandatory",messages:{mandatory:u.messages.resourceIdIsEmpty}},{method:"minMaxLength",messages:{tooLong:u.messages.resourceIdToLong},options:{maxLength:u.resourceIdMaxLength}}]}},resourceIdValidator:function(e){var t=!0,r="";return this._isEditMode||(e.blank()?(r=u.messages.resourceIdIsEmpty,t=!1):e.length>u.resourceIdMaxLength?(r=u.messages.resourceIdToLong,t=!1):u.testResourceId(e)&&(r=u.messages.resourceIdInvalidChars,t=!1)),{isValid:t,errorMessage:r}},getDescriptionValidationEntry:function(e){return{element:e,validators:[{method:"minMaxLength",messages:{tooLong:u.messages.descriptionToLong},options:{maxLength:u.resourceDescriptionMaxLength}}]}},descriptionValidator:function(e){var t=!0,r="";return e.length>u.resourceDescriptionMaxLength&&(r=u.messages.descriptionToLong,t=!1),{isValid:t,errorMessage:r}},dataSourceValidator:function(e){var t=!0,r="";return""===e.trim()&&(r=u.messages.dataSourceInvalid,t=!1),{isValid:t,errorMessage:r}},queryValidator:function(e){var t=!0,r="";return""===e.trim()&&(r=u.messages.queryInvalid,t=!1),{isValid:t,errorMessage:r}},getValidationEntries:function(e){return e.collect((function(e){return e.validationEntry?e.validationEntry:{validator:e.validator,element:e}}))}};const c=u;const h={LABEL_ID:"labelID",RESOURCE_ID_ID:"nameID",DESCRIPTION_ID:"addFileInputDescription",NEXT_BUTTON_ID:"next",_canGenerateId:!0,initialize:function(e){this._form=n()(document.body).find("form"),this._label=n()("#"+this.LABEL_ID)[0],this._resourceId=n()("#"+this.RESOURCE_ID_ID)[0],this._description=n()("#"+this.DESCRIPTION_ID)[0],this._nextButton=n()("#"+this.NEXT_BUTTON_ID),this._isEditMode=e.isEditMode,this._label.validator=c.labelValidator.bind(this),this._resourceId.validator=c.resourceIdValidator.bind(this),this._description.validator=c.descriptionValidator.bind(this),this._initEvents()},_initEvents:function(){this._nextButton.on("click",function(e){this._isDataValid()||e.stopPropagation()}.bindAsEventListener(this)),this._form.on("keyup",function(e){var t=e.target;[this._label,this._resourceId,this._description].include(t)&&(a.n4K.validate(c.getValidationEntries([t])),t==this._resourceId&&this._resourceId.getValue()!=c.generateResourceId(this._label.getValue())&&(this._canGenerateId=!1),t==this._label&&!this._isEditMode&&this._canGenerateId&&(this._resourceId.setValue(c.generateResourceId(this._label.getValue())),a.n4K.validate(c.getValidationEntries([this._resourceId]))))}.bind(this))},_isDataValid:function(){var e=[this._label,this._resourceId,this._description];return a.n4K.validate(c.getValidationEntries(e))}};var p=r(97836),_=r.n(p),g=r(71914),I=g.Z.addOLAPView.localContext.initOptions;_().extend(window.localContext,g.Z.addOLAPView.localContext),_().extend(c.messages,g.Z.addOLAPView.resource.messages),h.initialize(I),(0,a.zcy)()&&c.initSwipeScroll()}}]);
//# sourceMappingURL=chunk.2636.js.map