(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[9518],{49518:(e,t,i)=>{"use strict";i.r(t);var n=i(72157),s=i.n(n),l=i(97836),r=i.n(l),o=i(17620),a=i(32758),c={CONTENT_REPOSITORY:"CONTENT_REPOSITORY",LOCAL:"LOCAL",NONE:"NONE",FILE_SYSTEM:"FILE_SYSTEM",LOCATE_EVENT:"resource:locate",ALLOWED_FILE_RESOURCE_EXTENSIONS:["css","ttf","jpg","jpeg","gif","bmp","png","jar","jrxml","properties","jrtx","xml","agxml","docx","doc","ppt","pptx","xls","xlsx","ods","odt","odp","pdf","rtf","html"],initialize:function(e){var t=function(e){return r().isObject(e)?e:s()("#"+e)[0]};this.resourceUri=t(e.resourceInput),this.browseButton=t(e.browseButton),this.filePath=t(e.fileUploadInput),this.fakeFilePath=t(e.fakeFileUploadInput),this.fakeFileInput=t(e.fakeFileUploadInputText),this.newResourceLink=t(e.newResourceLink);try{this._initFileSelector(e)}catch(e){}finally{this._initEvents(e)}return this},_initEvents:function(e){s()(document).on("click","#CONTENT_REPOSITORY, #FILE_SYSTEM, #NONE, #LOCAL",this._clickHandler),"fileResourceTreeDataProvider"===e.providerId&&(s()("#next").on("click",c._nextClickHandler),s()("#filePath").on("change",c._uploadChangeHandler))},_nextClickHandler:function(e){s()("#fileUpload").hasClass("error")&&e.preventDefault()},_uploadChangeHandler:function(e){s()("#fileUpload").removeClass("error");var t=!0;if(s()("#filePath")[0].value){var i=s()("#filePath")[0].value.match(/.*\.([^\.]+)$/);if(i){var n=i[1];r().indexOf(c.ALLOWED_FILE_RESOURCE_EXTENSIONS,n)<0&&(t=!1)}else t=!1}else t=!1;if(!t){var l=o.Z.messages["resource.report.unsupportedFileType.error"]+" "+c.ALLOWED_FILE_RESOURCE_EXTENSIONS.join(", ");s()("#fileUpload").addClass("error").find("span.warning").html(l)}},_clickHandler:function(e){c._updateResourceSelectorState(e.target.id)},_updateResourceSelectorState:function(e){o.Z.switchButtonState(this.filePath,e===this.FILE_SYSTEM),o.Z.switchButtonState(this.fakeFilePath,e===this.FILE_SYSTEM),o.Z.switchButtonState(this.fakeFileInput,e===this.FILE_SYSTEM),o.Z.switchButtonState(this.browseButton,e===this.CONTENT_REPOSITORY),o.Z.switchDisableState(this.resourceUri,e!==this.CONTENT_REPOSITORY);var t=e===this.LOCAL?["disabled","launcher"]:[];this._switchElementClasses(this.newResourceLink,t)},_initFileSelector:function(e){this.fileSelector=new a.Z.FileSelector(r().extend({},e,{uriTextboxId:this.resourceUri,browseButtonId:this.browseButton,title:e.dialogTitle}))},remove:function(e){this.fileSelector.remove()},_switchElementClasses:function(e,t){e&&t&&s()(e).removeClass(t[0]).addClass(t[1])}};const u=c;const h={initialize:function(e){u.initialize(e)}};var E=i(71914),S=i(64155),d=E.Z.locateDataSource.localContext.initOptions;r().extend(window.localContext,E.Z.locateDataSource.localContext),h.initialize(d),(0,S.zcy)()&&o.Z.initSwipeScroll()}}]);
//# sourceMappingURL=chunk.9518.js.map