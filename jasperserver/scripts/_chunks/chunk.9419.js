(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[9419,4277,4613,2602,9767,3039,70,9743,508,7578,73],{17335:(t,e,i)=>{var s,o,n;
/*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */o=[i(72157),i(91544)],void 0===(n="function"==typeof(s=function(t){return t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,n=this.parents().filter((function(){var e=t(this);return(!s||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))})).eq(0);return"fixed"!==i&&n.length?n:t(this[0].ownerDocument||document)}})?s.apply(e,o):s)||(t.exports=n)},406:(t,e,i)=>{"use strict";i.r(e);var s=i(52499),o=i(97836),n=i.n(o),l=i(236),r=i(11129);void 0===window.Administer&&(window.Administer={}),window.Administer=n().extend({_messages:{},urlContext:null,getMessage:function(t,e){var i=this._messages[t];return i?new s.Template(i).evaluate(e||{}):""},menuActions:{"p#navAnalysisOptions":function(){return window.Administer.urlContext+"/flow.html?_flowId=mondrianPropertiesFlow"},"p#navAnalysisOptionsCE":function(){return window.Administer.urlContext+"/olap/properties.html"},"p#navDesignerOptions":function(){return window.Administer.urlContext+"/flow.html?_flowId=designerOptionsFlow"},"p#navDesignerCache":function(){return window.Administer.urlContext+"/flow.html?_flowId=designerCacheFlow"},"p#navAwsSettings":function(){return window.Administer.urlContext+"/flow.html?_flowId=awsSettingsFlow"},"p#navLogSettings":function(){return window.Administer.urlContext+"/log_settings.html"},"p#logCollectors":function(){return window.Administer.urlContext+"/logCollectors.html"},"p#navImport":function(){return window.Administer.urlContext+"/adminImport.html"},"p#navExport":function(){return window.Administer.urlContext+"/adminExport.html"},"p#navCustomAttributes":function(){return window.Administer.urlContext+"/customAttributes.html"},"p#navResetSettings":function(){return window.Administer.urlContext+"/resetSettings.html"}},_sendRequest:function(t,e,i){(0,l.mc)(t,{postData:e,callback:i,mode:l.w8.prototype.EVAL_JSON,errorHandler:this._errorHandler})},_errorHandler:function(t){return t.getResponseHeader("LoginRequested")?(window.location="flow.html?_flowId=designerCacheFlow",!0):(0,r.m0)(t)}},window.Administer);const a=window.Administer;var h=i(51516),d=i(98223),u=i(64155),c=i(43852),m=i(52687),p=i(94277),f=i(72157),T=i.n(f),_={SAVE_PFX:"save",CANCEL_PFX:"cancel",ERROR_PFX:"error_",INPUT_PFX:"input_",BUTTON_FLASH:"flushOLAPCache",initialize:function(){T()("#serverSettingsMenu").length>0&&h.Z.resizeOnClient("serverSettingsMenu","settings"),d.Z.setCurrentContext("admin"),T()("#display").on("click",(function(t){var e=t.target;for(var i in a.menuActions)if((0,u.BwZ)(e,[i],!0)&&!T()((0,u.Ua0)(e.parentNode,"li")).hasClass("selected"))return void(document.location=a.menuActions[i]());if((0,u.BwZ)(e,["#"+_.BUTTON_FLASH],!0))return Event.stop(t),void _.flushCache();var s=(0,u.BwZ)(e,["#"+_.SAVE_PFX],!0);if(s){Event.stop(t);var o=s.name;_.saveValue(o)}else(s=(0,u.BwZ)(e,["#"+_.CANCEL_PFX],!0))&&(Event.stop(t),_.resetValue(s.name,s.value)),(0,u.BwZ)(e,[".checkBox > input","select"])&&_.switchButtons(e,!0)})),T()("#display").on("keydown",(function(t){var e=t.target;T()(e).is("input")&&_.switchButtons(e,!0)}))},saveValue:function(t){var e=document.getElementById(_.INPUT_PFX+t),i={name:t,value:"checkbox"==e.type?e.checked:e.value,_flowExecutionKey:a.flowExecutionKey,_eventId:"saveSingleProperty"},s="flow.html?"+Object.toQueryString(i);a._sendRequest(s,i,_._updateCallback)},resetValue:function(t,e){var i=document.getElementById(_.INPUT_PFX+t);"checkbox"==i.type?i.checked="true"==String(e):i.value=e,_.switchButtons(i,!1),T()(document.body).find('[for="'+_.INPUT_PFX+t+'"]').removeClass(h.Z.ERROR_CLASS)[0]},flushCache:function(){var t=(0,p.YT)()?"flow.html?_flowExecutionKey="+a.flowExecutionKey+"&_eventId=flushCache":"flush.html";a._sendRequest(t,null,_._flushCallback)},switchButtons:function(t,e){"string"==typeof t&&(t=document.getElementById(_.INPUT_PFX+t)),_._enableButton(T()((0,u.Ua0)(t,"li")).find("button")[0],e),_._enableButton(T()((0,u.Ua0)(t,"li")).find("button")[1],e)},_enableButton:function(t,e){e?c.Z.enable(t):c.Z.disable(t)},_updateCallback:function(t){t.error?(T()(document.body).find('[for="'+_.INPUT_PFX+t.optionName+'"]').addClass(h.Z.ERROR_CLASS)[0],T()("#"+_.ERROR_PFX+t.optionName).html(a.getMessage(t.error))[0]):(_.switchButtons(t.optionName,!1),m.Z.systemConfirm.show(a.getMessage(t.result)),T()(document.body).find('[for="'+_.INPUT_PFX+t.optionName+'"]').removeClass(h.Z.ERROR_CLASS)[0])},_flushCallback:function(t){t.error?m.Z.systemConfirm.show(a.getMessage("JAM_018_ERROR")+": "+t.error):m.Z.systemConfirm.show(a.getMessage(t.result))}};const v=_;var g=i(71914);n().extend(a._messages,g.Z.Administer._messages),a.urlContext=g.Z.urlContext,a.flowExecutionKey=g.Z.Administer.flowExecutionKey,v.initialize()},84581:(t,e,i)=>{"use strict";i.d(e,{p:()=>d,k:()=>u});var s=i(97836),o=i.n(s),n=i(64155),l=i(72157),r=i.n(l),a=i(84612),h=i(51516);function d(t,e){if(t){if(this.srcElement=t,e&&(this.label=e.label,this.text=e.text,this.offsets=e.offsets,this.showBelow=!!e.showBelow,this.templateId=e.templateId,this.loadTextCallback=e.loadTextCallback,this.loadTextExecuted=!1),this.disabled=!1,this.removed=!1,this.templateId)this._toAttribute(this.TOOLTIP_TEMPLATE,this.templateId);else{var i=this._fromAttribute(this.TOOLTIP_TEMPLATE);this.templateId=i&&i.length>0?i:this.TOOLTIP_TEMPLATE_ID}this.label?this._toAttribute(this.TOOLTIP_LABEL,this.label):this.label=this._fromAttribute(this.TOOLTIP_LABEL),this.text?this._toAttribute(this.TOOLTIP_TEXT,this.text):this.text=this._fromAttribute(this.TOOLTIP_TEXT),this.label&&(this.label=this._escapeText(this.label)),this.text&&(this.text=this._escapeText(this.text)),this.srcElement.jsTooltip=this,u.tooltips.push(this)}}d.addVar("SEPARATOR","@@"),d.addVar("TOOLTIP_LABEL","tooltiplabel"),d.addVar("TOOLTIP_TEXT","tooltiptext"),d.addVar("TOOLTIP_TEMPLATE","tooltiptemplate"),d.addVar("TOOLTIP_TEMPLATE_ID","jsTooltip"),d.addVar("LABEL_PATTERN",".message.label"),d.addVar("TEXT_PATTERN",".message:not(.label)"),d.addMethod("_toAttribute",(function(t,e){this.srcElement&&(e=a.Z.hardEscape(e),this.srcElement.writeAttribute(t,(0,n.kJL)(e)?e.join(this.SEPARATOR):e))})),d.addMethod("_fromAttribute",(function(t){if(this.srcElement&&this.srcElement.hasAttribute(t)){var e=this.srcElement.readAttribute(t);return e.include(this.SEPARATOR)?e.split(this.SEPARATOR):e}return null})),d.addMethod("_setValues",(function(t,e){t.each((function(t,i){(o().isString(e[i])||o().isNumber(e[i]))&&t.update(a.Z.hardEscape(e[i]))}))})),d.addMethod("_calculateZIndex",(function(t){function e(t){return parseInt(r()(t).css("z-index"))}var i=e(t);o().isNumber(i)&&!o().isNaN(i)||(i=1e3);var s=o().flatten([this.srcElement,r()(this.srcElement).parents().toArray()]);return o().reduce(s,(function(t,i){var s=e(i);return o().isNumber(s)&&!o().isNaN(s)&&(t=Math.max(t,s)),t}),i)+1})),d.addMethod("_escapeText",(function(t){return o().isArray(t)?o().map(t,(function(t){return a.Z.hardEscape(t)})):a.Z.hardEscape(t)})),d.addMethod("show",(function(t){var e;t&&(this.offsets=t),this._element=r()("#"+this.templateId)[0],this.showBelow?(e=(0,n.Qyk)(this.srcElement))[1]+=this.srcElement.clientHeight+5:e=[(0,n.vjD)()+5,(0,n.cxm)()+5],this.offsets&&(e[0]+=this.offsets[0],e[1]+=this.offsets[1]),this._element.setStyle({position:"absolute",left:e[0]+"px",top:e[1]+"px",zIndex:this._calculateZIndex(this._element)});var i=this._element.select(this.LABEL_PATTERN),s=this._element.select(this.TEXT_PATTERN);if(this.label&&this._setValues(i,(0,n.kJL)(this.label)?this.label:[this.label]),this.text&&this._setValues(s,(0,n.kJL)(this.text)?this.text:[this.text]),r()(this._element).removeClass(h.Z.HIDDEN_CLASS),e[0]+this._element.clientWidth>r()(window).width()){var o=e[0]-this._element.clientWidth>0?e[0]-this._element.clientWidth:15;this._element.setStyle({left:o+"px"})}if(e[1]+this._element.clientHeight>r()(window).height()){var l=e[1]-this._element.clientHeight-10;this._element.setStyle({top:l+"px"})}return this.loadTextCallback&&!this.loadTextExecuted&&(this.loadTextExecuted=!0,this.loadTextCallback(this)),this})),d.addMethod("updateText",(function(t){if(this.text=this._escapeText(t),this._element){var e=this._element.select(this.TEXT_PATTERN);this._setValues(e,(0,n.kJL)(this.text)?this.text:[this.text])}})),d.addMethod("hide",(function(){this._element&&r()(this._element).addClass(h.Z.HIDDEN_CLASS)})),d.addMethod("disable",(function(){u.hideJSTooltip(this.srcElement),this.disabled=!0})),d.addMethod("enable",(function(){this.disabled=!1,u.showJSTooltip(this.srcElement,this.offsets)})),d.addMethod("remove",(function(){var t=u.tooltips.indexOf(this.srcElement.jsTooltip);-1!==t&&(u.hideJSTooltip(this.srcElement),u.tooltips.splice(t,1)),this.removed=!0})),d.addMethod("isRemoved",(function(){return this.removed}));var u={TOOLTIP_PATTERN:"*[tooltiptext] > *",ELEMENT_WITH_TOOLTIP_PATTERN:"*[tooltiptext]",actualX:0,actualY:0,tooltips:[],showJSTooltip:function(t,e){if(t.jsTooltip){if(!t.jsTooltip.disabled&&e){this.actualX=e[0],this.actualY=e[1],this.cleanUp();var i=r()(t).attr("tooltipappeardelay");i=i?parseInt(i):1e3,t.jsTooltip.timer&&clearTimeout(t.jsTooltip.timer),t.jsTooltip.timer=setTimeout((function(){t.jsTooltip.show([u.actualX,u.actualY])}),i),r()(t).on("mousemove",(function(t){u.actualX=t.clientX,u.actualY=t.clientY}))}}else t.jsTooltip=new d(t,{})},enableTooltips:function(){(this.tooltips||[]).forEach((function(t){t.enable()}))},disableTooltips:function(){(this.tooltips||[]).forEach((function(t){t.disable()}))},hideJSTooltip:function(t){t&&t.jsTooltip&&(t.jsTooltip.timer&&clearTimeout(t.jsTooltip.timer),t.jsTooltip.hide(),r()(t).off("mousemove"))},cleanUp:function(){if(this.tooltips&&this.tooltips.length>0){var t=[],e="fuigasuifdughaiadbvguaidbapvuwbev";this.tooltips.each((function(i){i.srcElement.id&&document.getElementById(i.srcElement.id)||(i.srcElement.setAttribute("id",e),document.getElementById(e)||(i.hide(),t.push(i)),i.srcElement.setAttribute("id",null))})),t.length>0&&(this.tooltips=this.tooltips.reject((function(e){return t.include(e)})))}}}},98223:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var s=i(71914),o={currentContext:"default",displayWebHelp:function(){var t=s.Z.webHelpModuleState;if(t){var e=t.hostURL+"/"+t.pagePrefix+o.getPageForContext();window.name="",window.open(e,"MCWebHelp").focus()}},getPageForContext:function(){return s.Z.webHelpModuleState.contextMap[o.currentContext]},setCurrentContext:function(t){o.currentContext=t}};const n=o},43852:(t,e,i)=>{"use strict";i.d(e,{Z:()=>u});var s=i(72157),o=i.n(s),n=i(64155),l=i(51516),r=i(11364),a=i(84581),h=i(72335),d=i(6899);document.observe((0,n.MEy)()?"drag:touchstart":"drag:mousedown",(function(t){var e=t.memo.targetEvent.element();if(!(0,n.MEy)()||!event.treeEvent&&!event.listEvent){var i=(0,n.Ua0)(e,l.Z.LIST_ITEM_PATTERN);i&&!e.match(l.Z.DISCLOSURE_BUTTON_PATTERN)&&d.Z.down(i,(function(t){return o()(t).children(l.Z.LIST_ITEM_WRAP_PATTERN)[0]})),e.match(l.Z.DISCLOSURE_BUTTON_PATTERN)&&d.Z.down(e)}})),document.observe("mouseup",(function(t){if((0,n.dOg)(t)){var e=t.element();document.fire(l.Z.ELEMENT_CONTEXTMENU,{targetEvent:t,node:e})}})),document.observe("contextmenu",(function(t){return Event.stop(t),!1})),document.observe("dom:loaded",(function(t){var e=function(t){return void 0===o()(t).data("globalEvents")};(0,n.w1q)()&&document.body.setAttribute("oncontextmenu","return false"),o()("body").on("mouseover",l.Z.BUTTON_PATTERN,(function(t){!(0,n.xYm)(this)&&e(this)&&d.Z.over(this)})),o()("body").on("mouseout",l.Z.BUTTON_PATTERN,(function(t){e(this)&&d.Z.out(this)})),o()("body").on("focus",l.Z.BUTTON_PATTERN,(function(t){!(0,n.xYm)(this)&&e(this)&&d.Z.over(this)})),o()("body").on("blur",l.Z.BUTTON_PATTERN+"."+l.Z.HOVERED_CLASS,(function(t){!(0,n.xYm)(this)&&e(this)&&d.Z.out(this)})),o()("body").on("mousedown mouseup touchstart touchend",[l.Z.BUTTON_PATTERN,l.Z.MENU_LIST_PATTERN,l.Z.DISCLOSURE_BUTTON_PATTERN,l.Z.META_LINKS_PATTERN].join(","),(function(t){"mousedown"==t.type||"touchstart"==t.type?!(0,n.xYm)(this)&&e(this)&&d.Z.down(this):!(0,n.xYm)(this)&&e(this)&&d.Z.up(this),"mouseup"!=t.type&&"touchend"!=t.type||(this.parentNode.id==l.Z.MAIN_NAVIGATION_HOME_ITEM_ID&&h.Z.navigationOption("home"),this.parentNode.id==l.Z.MAIN_NAVIGATION_LIBRARY_ITEM_ID&&h.Z.navigationOption("library"))})),o()("#frame").on("touchend mouseup",".minimize",(function(t){this.parentNode.className.indexOf("maximized")>=0?l.Z.minimize(this):l.Z.maximize(this),t.preventDefault()})),o()("#frame").on("touchend mouseup",l.Z.TABSET_TAB_PATTERN,(function(t){if(!(0,n.xYm)(this)&&e(this)&&"true"!==o()(this.parentNode).attr("disableCoreEvents")){o()(this).siblings().removeClass(l.Z.SELECTED_CLASS).each((function(t,e){o()(o()(this).attr("tabId")).addClass("hidden")})),o()(this).addClass(l.Z.SELECTED_CLASS),o()(o()(this).attr("tabId")).removeClass("hidden");var i=o()(this).closest(".tabs").find(".control.tabSet.anchor");"#attributesTab"===o()(this).attr("tabId")?i.addClass("attributesAnchor"):i.removeClass("attributesAnchor")}})),o()("#"+l.Z.META_LINK_LOGOUT_ID).on("mousedown touchstart",(function(t){t.preventDefault(),h.Z.navigationOption("logOut")})),o()("body").on("mouseover mouseout click","[tooltiptext]",(function(t){("mouseout"==t.type||"click"==t.type)&&a.k.hideJSTooltip(this),"mouseover"==t.type&&a.k.showJSTooltip(this,[t.clientX,t.clientY])})),o()("#mainNavigation").on("mouseover",l.Z.NAVIGATION_MUTTON_PATTERN,(function(t){h.Z.showNavButtonMenu(t,this)})),(0,n.MEy)()&&(document.body.addEventListener("touchstart",(function(t){window.calendar&&window.calendar.hide&&!window.calendar.hidden&&window.calendar.hide(),void 0!==r.Z&&(r.Z.element_scrolled=!1)}),!1),document.body.addEventListener("touchmove",(function(t){}),!1)),o()("#filePath").on("mouseenter mouseout",(function(){o()("#fake_upload_button").toggleClass("over")}))}));const u=d.Z},94277:(t,e,i)=>{"use strict";i.d(e,{hl:()=>s,YT:()=>n});var s={vars:{element_scrolled:!1,ajax_in_progress:!1,current_flow:null,contextPath:__jrsConfigs__.contextPath},i18n:{}};if(void 0===o)var o=!1;function n(){return __jrsConfigs__.isProVersion}void 0===s&&(s={Mocks:{}}),void 0===s.vars&&(s.vars={element_scrolled:!1,ajax_in_progress:!1,current_flow:null}),void 0===s.Export&&(s.Export={i18n:{"file.name.empty":"export.file.name.empty","file.name.too.long":"export.file.name.too.long","file.name.not.valid":"export.file.name.not.valid","export.select.users":"export.select.users","export.select.roles":"export.select.roles","export.session.expired":"export.session.expired","error.timeout":"export.file.name.empty"},configs:{TIMEOUT:12e5,DELAY:3e3}}),void 0===window.localContext&&(window.localContext={}),__jrsConfigs__.calendar&&(s.i18n.bundledCalendarFormat=__jrsConfigs__.calendar.i18n.bundledCalendarFormat,s.i18n.bundledCalendarTimeFormat=__jrsConfigs__.calendar.i18n.bundledCalendarTimeFormat),window.JRS=s,window.jaspersoft={components:{},i18n:{}},window.isProVersion=n},72861:(t,e,i)=>{var s=i(72157),o=i(52499),n=o.$,l=(o.$$,o.$w,o.Prototype),r=o.Position,a=(o.Hash,o.$A,o.Template,o.Class),h=(o.$F,o.Form,o.$break,o.$H,o.Selector,o.Field,o.Enumerable,i(83114)),d=h.Droppables,u=h.Draggables,c=h.Draggable,m=h.Sortable;c.prototype.startDrag=function(t){if(c.isDragging=!0,this.dragging=!0,this.delta||(this.delta=this.currentDelta()),this.options.zindex&&(this.originalZ=parseInt(Element.getStyle(this.element,"z-index")||0),this.element.style.zIndex=this.options.zindex),this.options.ghosting&&(this._clone=this.element.cloneNode(!0),this._originallyAbsolute="absolute"==this.element.getStyle("position"),this._originallyAbsolute||r.absolutize(this.element),this.element.parentNode.insertBefore(this._clone,this.element),"TR"===this.element.parentNode.tagName&&document.body.appendChild(this.element)),this.options.superghosting){r.prepare();var e=[Event.pointerX(t),Event.pointerY(t)],i=document.getElementsByTagName("body")[0],s=this.element;this._clone=s.cloneNode(!0),l.Browser.IE&&(this._clone.clearAttributes(),this._clone.mergeAttributes(s.cloneNode(!1))),s.parentNode.insertBefore(this._clone,s),s.id="clone_"+s.id,s.hide(),r.absolutize(s),s.parentNode.removeChild(s),i.appendChild(s),"0px"!=s.style.width&&"0px"!=s.style.height||(s.style.width=Element.getWidth(this._clone)+"px",s.style.height=Element.getHeight(this._clone)+"px"),this.originalScrollTop=Element.getHeight(this._clone)/2,this.draw(e),s.show()}if(this.options.scroll)if(this.options.scroll==window){var o=this._getWindowScroll(this.options.scroll);this.originalScrollLeft=o.left,this.originalScrollTop=o.top}else this.originalScrollLeft=this.options.scroll.scrollLeft,this.originalScrollTop=this.options.scroll.scrollTop;u.notify("onStart",this,t),this.options.starteffect&&this.options.starteffect(this.element)},c.prototype.draw=function(t){var e=r.cumulativeOffset(this.element);if(this.options.ghosting){var i=r.realOffset(this.element);e[0]+=i[0]-r.deltaX,e[1]+=i[1]-r.deltaY}var s=this.currentDelta();e[0]-=s[0],e[1]-=s[1],this.options.scroll&&(e[0]-=this.options.scroll.scrollLeft,e[1]-=this.options.scroll.scrollTop),this.options.scroll&&this.options.scroll!=window&&this._isScrollChild&&(e[0]-=this.options.scroll.scrollLeft-this.originalScrollLeft,e[1]-=this.options.scroll.scrollTop-this.originalScrollTop);var o=[0,1].map(function(i){return t[i]-e[i]-(this.options.mouseOffset?-2:this.offset[i])}.bind(this));this.options.snap&&(o=Object.isFunction(this.options.snap)?this.options.snap(o[0],o[1],this):Object.isArray(this.options.snap)?o.map(function(t,e){return(t/this.options.snap[e]).round()*this.options.snap[e]}.bind(this)):o.map(function(t){return(t/this.options.snap).round()*this.options.snap}.bind(this))),this.options.superghosting&&("absolute"==this.element.getStyle("position")?o[1]=t[1]-this.originalScrollTop:o[1]-=this.originalScrollTop||10);var n=this.element.style;this.options.constraint&&"horizontal"!=this.options.constraint||(n.left=o[0]+"px"),this.options.constraint&&"vertical"!=this.options.constraint||(n.top=o[1]+"px"),"hidden"==n.visibility&&(n.visibility="")},c.prototype.initDrag=function(t){if((Object.isUndefined(c._dragging[this.element])||!c._dragging[this.element])&&(t.touches&&1==t.touches.length||Event.isLeftClick(t))){var e=Event.element(t).tagName.toUpperCase();if("INPUT"==e||"SELECT"==e||"OPTION"==e||"BUTTON"==e||"TEXTAREA"==e)return;if(s(this.element).parents("#sortDialog").length>0&&"B"==e)return;var i=[Event.pointerX(t),Event.pointerY(t)],o=r.cumulativeOffset(this.element);this.offset=[0,1].map((function(t){return i[t]-o[t]})),u.activate(this),this.countdown=u.DEFAULT_TOLERANCE,Event.stop(t),this.element.fire("drag:mousedown",{targetEvent:t})}},d.isAffected=function(t,e,i){var o=s(i.element),l=o.width(),r=o.height(),a=o.offset(),h=a.left+l,d=a.top+r,u=t[0]>a.left&&t[0]<h&&t[1]>a.top&&t[1]<d;return i.element!=e&&(e.parentNode===n(document.body)||!i._containers||this.isContained(e,i))&&(!i.accept||Element.classNames(e).detect((function(t){return i.accept.include(t)})))&&u},c.prototype.finishDrag=function(t,e){if(c.isDragging=!1,this.dragging=!1,isIE()&&(document.body.onmousemove=function(){}),this.options.quiet){r.prepare();var i=[Event.pointerX(t),Event.pointerY(t)];d.show(i,this.element)}this.options.ghosting&&(this._originallyAbsolute||(r.relativize(this.element),"TR"===this._clone.parentNode.tagName&&this._clone.parentNode.insertBefore(this.element,this._clone)),delete this._originallyAbsolute,Element.remove(this._clone),this._clone=null);var s=!1;e&&((s=d.fire(t,this.element))||(s=!1)),s&&this.options.onDropped&&this.options.onDropped(this.element),u.notify("onEnd",this,t);var o=this.options.revert;o&&Object.isFunction(o)&&(o=o(this.element));var l=this.currentDelta();o&&this.options.reverteffect?0!=s&&"failure"==o||this.options.reverteffect(this.element,l[1]-this.delta[1],l[0]-this.delta[0]):this.delta=l,this.options.zindex&&(this.element.style.zIndex=this.originalZ,this._clone&&(this._clone.style.zIndex=this.originalZ)),this.options.endeffect&&this.options.endeffect(this.element),this.options.superghosting&&(null==this.element.parentNode&&(Element.hide(this.element),n(document.body).appendChild(this.element)),Element.remove(this.element),new c(this._clone,this.options)),u.deactivate(this),d.reset()},m.defaultOnHover=m.onHover,m.onHover=function(t,e,i){t.hasClassName("dialog")||m.defaultOnHover(t,e,i)},m.defaultOnEmptyHover=m.onEmptyHover,m.onEmptyHover=function(t,e,i){t.hasClassName("dialog")||m.defaultOnEmptyHover(t,e,i)};var p=a.create({initialize:function(t,e){this.element=n(t),this.observer=e,this.lastValue=m.serialize(this.element)},onStart:function(){this.lastValue=m.serialize(this.element)},onEnd:function(t,e){m.unmark(),this.lastValue!=m.serialize(this.element)&&this.observer(this.element,e)}});m.getSortableObserverConstructor=function(){return p},d.show=function(t,e){if(this.drops.length){var i,s=[];this.drops.each((function(i){d.isAffected(t,e,i)&&((e.hasClassName("sortDialogAvailable")||e.hasClassName("sortDialogSortFields"))&&"sortDialogAvailable"!=i.element.id&&"sortDialogSortFields"!=i.element.id||s.push(i))})),s.length>0&&(i=d.findDeepestChild(s)),this.last_active&&this.last_active!=i&&this.deactivate(this.last_active),i&&(r.within(i.element,t[0],t[1]),i.onHover&&(e.classNames().include("wrap")&&(e.relativize(),e.classNames().include("measure")?e.classNames().set("draggable dragging measure"+(e.classNames().include("supportsFilter")?" supportsFilter":"")):e.classNames().set("draggable dragging dimension"+(e.classNames().include("supportsFilter")?" supportsFilter":"")),e.style.position="relative",e.style.display="inline-block",e.style.width="",e.style.height=""),i.onHover(e,i.element,r.overlap(i.overlap,i.element))),i!=this.last_active&&d.activate(i))}},e.m9=d,e.Mw=u,e._l=c}}]);
//# sourceMappingURL=chunk.9419.js.map