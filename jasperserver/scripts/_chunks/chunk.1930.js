(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[1930,4277,4613,2602],{47269:(e,t,i)=>{"use strict";i.d(t,{Z:()=>b});var r=i(72157),n=i.n(r),s=i(97836),o=i.n(s),a=i(81180),l=i(59772),d=i(12473),c=i(29562);let h;"RepositoryResourceBundle"!==c.t?(c.h.RepositoryResourceBundle=c.h.RepositoryResourceBundle||{},h=c.h.RepositoryResourceBundle):h=Object.keys(c.h).reduce(((e,t)=>({...e,...c.h[t]})),{});const u=h;var p=i(95992),f="index",m="keyValue",_=p.Z.extend({constructor:function(e){this.code=e,this.args=Array.prototype.slice.call(arguments,1)},bundle:{}});_.prototype.toString=function(){var e=this.bundle[this.code];if(!e)return this.code;var t=this._getArgsType(this.args);return t===f?e=this._interpolateIndexArgs(this.args,e):t===m&&(e=this._interpolateObjectArgs(this.args,e)),e},_.prototype._getArgsType=function(e){if(e&&e.length){var t=o().first(e);return o().isObject(t)?m:f}},_.prototype._interpolateObjectArgs=function(e,t){var i=e[0].separator||", ",r=e.reduce((function(e,t){var r=t.key,n=t.value;return e[r]?e[r]=e[r]+i:e[r]="",e[r]=e[r]+n,e}),{});return t=o().keys(r).reduce((function(e,t){var i=r[t],n="\\{"+t+"\\}";return e.replace(new RegExp(n,"g"),i)}),t)},_.prototype._interpolateIndexArgs=function(e,t){for(var i=0,r=e.length;i<r;i++){var n=e[i],s="\\{"+i+"\\}";t=t.replace(new RegExp(s,"g"),n)}return t},_.create=function(e){return function(t){var i=Object.create(_.prototype);return(i=o().extend(i,{bundle:e,code:t,args:Array.prototype.slice.call(arguments,1)})).toString(i)}};var T=_.extend({bundle:u}),v={LABEL_MAX_LENGTH:100,NAME_MAX_LENGTH:100,DESCRIPTION_MAX_LENGTH:250,NAME_NOT_SUPPORTED_SYMBOLS:"~!#\\$%^|\\s`@&*()\\-+={}\\[\\]:;\"'\\<\\>,?/\\|\\\\"},x=/application\/repository\.([^\+]+)\+json/;function E(e,t,i,r,n){return(0,d.Z)({type:t,dataType:"json",url:e.contextPath+"/rest_v2/resources"+i+"?overwrite="+r+"&createFolders="+n,headers:{Accept:"application/json","Content-Location":e.get("uri")}}).done((function(t){e.set("uri",t.uri)}))}var g=a.Z.extend({idAttribute:"uri",type:void 0,urlRoot:function(){return(this.contextPath||"")+"/rest_v2/resources"},defaults:{name:void 0,parentFolderUri:void 0,uri:void 0,label:void 0,description:void 0,permissionMask:void 0,creationDate:void 0,updateDate:void 0,version:void 0},validation:{name:function(e,t,i){return e&&e.length>v.NAME_MAX_LENGTH?new T("error.field.max.length","name",v.NAME_MAX_LENGTH):e&&new RegExp("["+v.NAME_NOT_SUPPORTED_SYMBOLS+"]","g").test(e)?new T("error.field.bad.symbols","name",v.NAME_NOT_SUPPORTED_SYMBOLS):void 0},label:function(e,t,i){return o().isEmpty(e)?new T("error.field.required","label"):e.length>v.LABEL_MAX_LENGTH?new T("error.field.max.length","label",v.LABEL_MAX_LENGTH):void 0},description:function(e,t,i){if(e&&e.length>v.DESCRIPTION_MAX_LENGTH)return new T("error.field.max.length","description",v.DESCRIPTION_MAX_LENGTH)},parentFolderUri:[{required:!0,msg:new T("error.field.required","parentFolderUri")}]},url:function(){return this.isNew()?this.urlRoot()+encodeURI(this.get("parentFolderUri")):this.urlRoot()+encodeURI(this.id)},constructor:function(e,t){t||(t={}),o().defaults(t,{parse:!0}),a.Z.call(this,e,t)},initialize:function(e,t){this.contextPath=t.contextPath,t.type&&(this.type=t.type),this.on("change:parentFolderUri change:name",this._updateUri),this.on("change:uri",this._updateNameAndParentFolderUri),a.Z.prototype.initialize.apply(this,arguments)},clone:function(){return new this.constructor(this.attributes,{contextPath:this.contextPath})},parse:function(e){return void 0!==e.uri?(e.name=g.getNameFromUri(e.uri),e.parentFolderUri=g.getParentFolderFromUri(e.uri)):e.parentFolderUri&&e.name&&(e.uri=g.constructUri(e.parentFolderUri,e.name)),e},toJSON:function(){var e=this.serialize();return delete e.name,delete e.parentFolderUri,e},_updateUri:function(){var e=this.get("name"),t=this.get("parentFolderUri"),i=g.constructUri(t,e);i&&this.set("uri",i)},_updateNameAndParentFolderUri:function(){var e=this.get("uri"),t=g.getNameFromUri(e),i=g.getParentFolderFromUri(e);this.set({name:t,parentFolderUri:i})},fetch:function(e){return o().defaults(e||(e={}),{headers:{Accept:"application/json"}}),e.url=this.url()+"?expanded="+(!0===e.expanded),delete e.expanded,a.Z.prototype.fetch.call(this,e)},sync:function(e,t,i){if("read"===e){var r=i.success,n=this;i.success=function(e,t,i){var s=i.getResponseHeader("Content-Type"),o=x.exec(s);if(!o||!o[1])throw new Error("Unsupported response content type: "+s);n.type=o[1],r&&r(e,t,i)}}return a.Z.prototype.sync.call(this,e,t,i)},save:function(e,t,i){var r;if(o().isUndefined(e)||o().isNull(e)||o().isObject(e)?(r=e||{},i=t):(r={})[e]=t,!this.type)throw new Error("Resource type is unspecified. It's not possible to save a resource without it's type specified");return o().defaults(i||(i={}),{headers:{Accept:"application/json","Content-Type":"application/repository."+this.type+"+json; charset=UTF-8"}}),i=this._getSaveUrlOptions(i),a.Z.prototype.save.call(this,r,i)},_getSaveUrlOptions:function(e){var t=this.url()+"?createFolders="+(!0===e.createFolders);return t+="&overwrite="+(!0===e.overwrite),t+="&expanded="+(!0===e.expanded),t+="&dry-run="+(!0===e.dryRun),e=o().omit(e,["createFolders","overwrite","expanded","dryRun"]),e=o().extend({},e,{url:t})},isWritable:function(){var e=this.get("permissionMask"),t=!1;return o().isUndefined(e)||(t=1===e||4&e),t},checkLabelExistenceOnServer:function(){var e=this.get("label"),t=this.get("parentFolderUri");return this.operationInProgress=n().Deferred(),(0,d.Z)({type:"GET",dataType:"json",url:this.contextPath+"/rest_v2/resources?folderUri="+encodeURIComponent(t)+"&q="+encodeURIComponent(e)+"&recursive=false",headers:{Accept:"application/json"}}).done(this._checkLabelExistenceOnServerDone.bind(this)).fail(this._checkLabelExistenceOnServerFail.bind(this)),this.operationInProgress},_checkLabelExistenceOnServerDone:function(e,t,i){var r=[];e&&e.resourceLookup&&e.resourceLookup.length>0&&(r=e.resourceLookup),this.operationInProgress.resolve({foundResources:r})},_checkLabelExistenceOnServerFail:function(e){404===e.status?this.operationInProgress.resolve({foundResources:[]}):this.operationInProgress.reject(e)},copyTo:function(e,t,i){return E(this,"POST",e,!!t,arguments.length<3||i)},moveTo:function(e,t,i){return E(this,"PUT",e,!!t,arguments.length<3||i)}},{settings:v,getNameFromUri:function(e){if(e){var t=e.split("/");return t[t.length-1]}},getParentFolderFromUri:function(e){if(e){var t=e.split("/");return 2===t.length&&""!==t[1]?"/":t.slice(0,t.length-1).join("/")}},constructUri:function(e,t){if(t&&e)return-1!==e.indexOf("/",e.length-1)?e+t:e+"/"+t},generateResourceName:function(e){var t="";return e&&(t=e.replace(new RegExp("["+g.settings.NAME_NOT_SUPPORTED_SYMBOLS+"]","g"),"_")),t}});o().extend(g.prototype,l.Z.mixin);const b=g},84581:(e,t,i)=>{"use strict";i.d(t,{p:()=>c,k:()=>h});var r=i(97836),n=i.n(r),s=i(64155),o=i(72157),a=i.n(o),l=i(84612),d=i(51516);function c(e,t){if(e){if(this.srcElement=e,t&&(this.label=t.label,this.text=t.text,this.offsets=t.offsets,this.showBelow=!!t.showBelow,this.templateId=t.templateId,this.loadTextCallback=t.loadTextCallback,this.loadTextExecuted=!1),this.disabled=!1,this.removed=!1,this.templateId)this._toAttribute(this.TOOLTIP_TEMPLATE,this.templateId);else{var i=this._fromAttribute(this.TOOLTIP_TEMPLATE);this.templateId=i&&i.length>0?i:this.TOOLTIP_TEMPLATE_ID}this.label?this._toAttribute(this.TOOLTIP_LABEL,this.label):this.label=this._fromAttribute(this.TOOLTIP_LABEL),this.text?this._toAttribute(this.TOOLTIP_TEXT,this.text):this.text=this._fromAttribute(this.TOOLTIP_TEXT),this.label&&(this.label=this._escapeText(this.label)),this.text&&(this.text=this._escapeText(this.text)),this.srcElement.jsTooltip=this,h.tooltips.push(this)}}c.addVar("SEPARATOR","@@"),c.addVar("TOOLTIP_LABEL","tooltiplabel"),c.addVar("TOOLTIP_TEXT","tooltiptext"),c.addVar("TOOLTIP_TEMPLATE","tooltiptemplate"),c.addVar("TOOLTIP_TEMPLATE_ID","jsTooltip"),c.addVar("LABEL_PATTERN",".message.label"),c.addVar("TEXT_PATTERN",".message:not(.label)"),c.addMethod("_toAttribute",(function(e,t){this.srcElement&&(t=l.Z.hardEscape(t),this.srcElement.writeAttribute(e,(0,s.kJL)(t)?t.join(this.SEPARATOR):t))})),c.addMethod("_fromAttribute",(function(e){if(this.srcElement&&this.srcElement.hasAttribute(e)){var t=this.srcElement.readAttribute(e);return t.include(this.SEPARATOR)?t.split(this.SEPARATOR):t}return null})),c.addMethod("_setValues",(function(e,t){e.each((function(e,i){(n().isString(t[i])||n().isNumber(t[i]))&&e.update(l.Z.hardEscape(t[i]))}))})),c.addMethod("_calculateZIndex",(function(e){function t(e){return parseInt(a()(e).css("z-index"))}var i=t(e);n().isNumber(i)&&!n().isNaN(i)||(i=1e3);var r=n().flatten([this.srcElement,a()(this.srcElement).parents().toArray()]);return n().reduce(r,(function(e,i){var r=t(i);return n().isNumber(r)&&!n().isNaN(r)&&(e=Math.max(e,r)),e}),i)+1})),c.addMethod("_escapeText",(function(e){return n().isArray(e)?n().map(e,(function(e){return l.Z.hardEscape(e)})):l.Z.hardEscape(e)})),c.addMethod("show",(function(e){var t;e&&(this.offsets=e),this._element=a()("#"+this.templateId)[0],this.showBelow?(t=(0,s.Qyk)(this.srcElement))[1]+=this.srcElement.clientHeight+5:t=[(0,s.vjD)()+5,(0,s.cxm)()+5],this.offsets&&(t[0]+=this.offsets[0],t[1]+=this.offsets[1]),this._element.setStyle({position:"absolute",left:t[0]+"px",top:t[1]+"px",zIndex:this._calculateZIndex(this._element)});var i=this._element.select(this.LABEL_PATTERN),r=this._element.select(this.TEXT_PATTERN);if(this.label&&this._setValues(i,(0,s.kJL)(this.label)?this.label:[this.label]),this.text&&this._setValues(r,(0,s.kJL)(this.text)?this.text:[this.text]),a()(this._element).removeClass(d.Z.HIDDEN_CLASS),t[0]+this._element.clientWidth>a()(window).width()){var n=t[0]-this._element.clientWidth>0?t[0]-this._element.clientWidth:15;this._element.setStyle({left:n+"px"})}if(t[1]+this._element.clientHeight>a()(window).height()){var o=t[1]-this._element.clientHeight-10;this._element.setStyle({top:o+"px"})}return this.loadTextCallback&&!this.loadTextExecuted&&(this.loadTextExecuted=!0,this.loadTextCallback(this)),this})),c.addMethod("updateText",(function(e){if(this.text=this._escapeText(e),this._element){var t=this._element.select(this.TEXT_PATTERN);this._setValues(t,(0,s.kJL)(this.text)?this.text:[this.text])}})),c.addMethod("hide",(function(){this._element&&a()(this._element).addClass(d.Z.HIDDEN_CLASS)})),c.addMethod("disable",(function(){h.hideJSTooltip(this.srcElement),this.disabled=!0})),c.addMethod("enable",(function(){this.disabled=!1,h.showJSTooltip(this.srcElement,this.offsets)})),c.addMethod("remove",(function(){var e=h.tooltips.indexOf(this.srcElement.jsTooltip);-1!==e&&(h.hideJSTooltip(this.srcElement),h.tooltips.splice(e,1)),this.removed=!0})),c.addMethod("isRemoved",(function(){return this.removed}));var h={TOOLTIP_PATTERN:"*[tooltiptext] > *",ELEMENT_WITH_TOOLTIP_PATTERN:"*[tooltiptext]",actualX:0,actualY:0,tooltips:[],showJSTooltip:function(e,t){if(e.jsTooltip){if(!e.jsTooltip.disabled&&t){this.actualX=t[0],this.actualY=t[1],this.cleanUp();var i=a()(e).attr("tooltipappeardelay");i=i?parseInt(i):1e3,e.jsTooltip.timer&&clearTimeout(e.jsTooltip.timer),e.jsTooltip.timer=setTimeout((function(){e.jsTooltip.show([h.actualX,h.actualY])}),i),a()(e).on("mousemove",(function(e){h.actualX=e.clientX,h.actualY=e.clientY}))}}else e.jsTooltip=new c(e,{})},enableTooltips:function(){(this.tooltips||[]).forEach((function(e){e.enable()}))},disableTooltips:function(){(this.tooltips||[]).forEach((function(e){e.disable()}))},hideJSTooltip:function(e){e&&e.jsTooltip&&(e.jsTooltip.timer&&clearTimeout(e.jsTooltip.timer),e.jsTooltip.hide(),a()(e).off("mousemove"))},cleanUp:function(){if(this.tooltips&&this.tooltips.length>0){var e=[],t="fuigasuifdughaiadbvguaidbapvuwbev";this.tooltips.each((function(i){i.srcElement.id&&document.getElementById(i.srcElement.id)||(i.srcElement.setAttribute("id",t),document.getElementById(t)||(i.hide(),e.push(i)),i.srcElement.setAttribute("id",null))})),e.length>0&&(this.tooltips=this.tooltips.reject((function(t){return e.include(t)})))}}}},94277:(e,t,i)=>{"use strict";i.d(t,{hl:()=>r,YT:()=>s});var r={vars:{element_scrolled:!1,ajax_in_progress:!1,current_flow:null,contextPath:__jrsConfigs__.contextPath},i18n:{}};if(void 0===n)var n=!1;function s(){return __jrsConfigs__.isProVersion}void 0===r&&(r={Mocks:{}}),void 0===r.vars&&(r.vars={element_scrolled:!1,ajax_in_progress:!1,current_flow:null}),void 0===r.Export&&(r.Export={i18n:{"file.name.empty":"export.file.name.empty","file.name.too.long":"export.file.name.too.long","file.name.not.valid":"export.file.name.not.valid","export.select.users":"export.select.users","export.select.roles":"export.select.roles","export.session.expired":"export.session.expired","error.timeout":"export.file.name.empty"},configs:{TIMEOUT:12e5,DELAY:3e3}}),void 0===window.localContext&&(window.localContext={}),__jrsConfigs__.calendar&&(r.i18n.bundledCalendarFormat=__jrsConfigs__.calendar.i18n.bundledCalendarFormat,r.i18n.bundledCalendarTimeFormat=__jrsConfigs__.calendar.i18n.bundledCalendarTimeFormat),window.JRS=r,window.jaspersoft={components:{},i18n:{}},window.isProVersion=s},99494:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(72157),n=i.n(r),s=i(97836),o=i.n(s),a=i(95002),l=i(59772);const d=a.Z.extend({events:o().extend({"keyup input[type=text], textarea, select":"updateModelProperty","change input[type=text], input:checkbox, textarea, select":"updateModelProperty"},a.Z.prototype.events),initialize:function(){this._bindEvents(),a.Z.prototype.initialize.apply(this,arguments)},_bindEvents:function(){},_unbindEvents:function(){},updateModelProperty:function(e){var t={},i=n()(e.target);"input"===i[0].tagName.toLowerCase()&&"text"===i.attr("type")||"select"===i[0].tagName.toLowerCase()&&"true"!==i.attr("multiple")||"textarea"===i[0].tagName.toLowerCase()?t[i.attr("name")]=n().trim(i.val()):"input"===i[0].tagName.toLowerCase()&&"checkbox"===i.attr("type")&&(t[i.attr("name")]=i.is(":checked")),this.beforeModelPropertySet&&this.beforeModelPropertySet(t),this.model.set(t),this.model.validate(t)},bindValidation:function(){l.Z.bind(this,{valid:this.fieldIsValid,invalid:this.fieldIsInvalid,forceUpdate:!0,selector:"name"})},unbindValidation:function(){l.Z.unbind(this)},fieldIsValid:function(e,t,i){var r=e.$("["+i+'="'+t+'"]').parent();r.removeClass("error"),r.find(".message.warning").text("")},fieldIsInvalid:function(e,t,i,r){var n=e.$("["+r+'="'+t+'"]').parent();n.addClass("error"),n.find(".message.warning").text(i.toString())},validField:function(e){var t=this.$(e).parent();t.removeClass("error"),t.find(".message.warning").text("")},invalidField:function(e,t){var i=this.$(e).parent();i.addClass("error"),i.find(".message.warning").text(t.toString())},clearValidationErrors:function(){this.$("label").removeClass("error"),this.$(".message.warning").text("")},remove:function(){this.unbindValidation(),this._unbindEvents(),a.Z.prototype.remove.apply(this,arguments)}})}}]);
//# sourceMappingURL=chunk.1930.js.map