(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[574],{40574:(t,e,i)=>{"use strict";i.d(e,{Z:()=>h});var s=i(72157),o=i.n(s),n=i(64155),a=i(43852),l=i(7923);l.Z.initialize=function(t){l.Z.actionMap=t,o()(".toolbar").on("mouseup mouseover mouseout","button",(function(t){o()(this).prop("disabled")||l.Z["mouse"+t.type.substring(5,6).toUpperCase()+t.type.substring(6)+"Handler"](t,this)})),(0,n.vU$)()&&o()(".toolbar li").each((function(t,e){o()(e).css("padding","0 2px")}))},l.Z.mouseUpHandler=function(t,e){var i=e.className.indexOf("capsule")>=0?l.Z.actionMap[e.id]:null;i&&((0,n.qO$)(i)(t),t.stopPropagation())},l.Z.mouseOverHandler=function(t,e){e.className.indexOf("capsule")>=0&&e.className.indexOf("mutton")>=0&&!a.Z.isDisabled(e)&&l.Z.showButtonMenu(t.originalEvent,e)},l.Z.mouseOutHandler=function(t,e){};const h=l.Z},7923:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var s=i(72157),o=i.n(s),n=i(72086),a=i(43852);const l={UP:"up",DOWN:"down",OVER:"over",DISABLED:"disabled",PRESSED:"pressed",CONTENT_PREFIX:"toolbar_",MenuClass:"menu vertical dropDown",TOOLBAR_MENU_CLASS:"menu vertical dropDown fitable",ACTION_MODEL_TAG:"adhocActionModel",CAPSULE_PATTERN:"capsule",showButtonMenu:function(t,e){e=o()(e);var i=this.CONTENT_PREFIX+e.attr("id"),s="adhocActionModel"==this.ACTION_MODEL_TAG?this.actionModel:this.ACTION_MODEL_TAG;n.Z.showDropDownMenu(t,e,i,this.TOOLBAR_MENU_CLASS,s)},setActionModel:function(t){this.actionModel=t},isToolBarButton:function(t){return!!t&&o()(t).hasClass("capsule")},enable:function(t,e){a.Z.enable(t)},disable:function(t){a.Z.disable(t)},setButtonState:function(t,e){e?this.enable(t):this.disable(t)}}},84581:(t,e,i)=>{"use strict";i.d(e,{p:()=>u,k:()=>r});var s=i(97836),o=i.n(s),n=i(64155),a=i(72157),l=i.n(a),h=i(84612),d=i(51516);function u(t,e){if(t){if(this.srcElement=t,e&&(this.label=e.label,this.text=e.text,this.offsets=e.offsets,this.showBelow=!!e.showBelow,this.templateId=e.templateId,this.loadTextCallback=e.loadTextCallback,this.loadTextExecuted=!1),this.disabled=!1,this.removed=!1,this.templateId)this._toAttribute(this.TOOLTIP_TEMPLATE,this.templateId);else{var i=this._fromAttribute(this.TOOLTIP_TEMPLATE);this.templateId=i&&i.length>0?i:this.TOOLTIP_TEMPLATE_ID}this.label?this._toAttribute(this.TOOLTIP_LABEL,this.label):this.label=this._fromAttribute(this.TOOLTIP_LABEL),this.text?this._toAttribute(this.TOOLTIP_TEXT,this.text):this.text=this._fromAttribute(this.TOOLTIP_TEXT),this.label&&(this.label=this._escapeText(this.label)),this.text&&(this.text=this._escapeText(this.text)),this.srcElement.jsTooltip=this,r.tooltips.push(this)}}u.addVar("SEPARATOR","@@"),u.addVar("TOOLTIP_LABEL","tooltiplabel"),u.addVar("TOOLTIP_TEXT","tooltiptext"),u.addVar("TOOLTIP_TEMPLATE","tooltiptemplate"),u.addVar("TOOLTIP_TEMPLATE_ID","jsTooltip"),u.addVar("LABEL_PATTERN",".message.label"),u.addVar("TEXT_PATTERN",".message:not(.label)"),u.addMethod("_toAttribute",(function(t,e){this.srcElement&&(e=h.Z.hardEscape(e),this.srcElement.writeAttribute(t,(0,n.kJL)(e)?e.join(this.SEPARATOR):e))})),u.addMethod("_fromAttribute",(function(t){if(this.srcElement&&this.srcElement.hasAttribute(t)){var e=this.srcElement.readAttribute(t);return e.include(this.SEPARATOR)?e.split(this.SEPARATOR):e}return null})),u.addMethod("_setValues",(function(t,e){t.each((function(t,i){(o().isString(e[i])||o().isNumber(e[i]))&&t.update(h.Z.hardEscape(e[i]))}))})),u.addMethod("_calculateZIndex",(function(t){function e(t){return parseInt(l()(t).css("z-index"))}var i=e(t);o().isNumber(i)&&!o().isNaN(i)||(i=1e3);var s=o().flatten([this.srcElement,l()(this.srcElement).parents().toArray()]);return o().reduce(s,(function(t,i){var s=e(i);return o().isNumber(s)&&!o().isNaN(s)&&(t=Math.max(t,s)),t}),i)+1})),u.addMethod("_escapeText",(function(t){return o().isArray(t)?o().map(t,(function(t){return h.Z.hardEscape(t)})):h.Z.hardEscape(t)})),u.addMethod("show",(function(t){var e;t&&(this.offsets=t),this._element=l()("#"+this.templateId)[0],this.showBelow?(e=(0,n.Qyk)(this.srcElement))[1]+=this.srcElement.clientHeight+5:e=[(0,n.vjD)()+5,(0,n.cxm)()+5],this.offsets&&(e[0]+=this.offsets[0],e[1]+=this.offsets[1]),this._element.setStyle({position:"absolute",left:e[0]+"px",top:e[1]+"px",zIndex:this._calculateZIndex(this._element)});var i=this._element.select(this.LABEL_PATTERN),s=this._element.select(this.TEXT_PATTERN);if(this.label&&this._setValues(i,(0,n.kJL)(this.label)?this.label:[this.label]),this.text&&this._setValues(s,(0,n.kJL)(this.text)?this.text:[this.text]),l()(this._element).removeClass(d.Z.HIDDEN_CLASS),e[0]+this._element.clientWidth>l()(window).width()){var o=e[0]-this._element.clientWidth>0?e[0]-this._element.clientWidth:15;this._element.setStyle({left:o+"px"})}if(e[1]+this._element.clientHeight>l()(window).height()){var a=e[1]-this._element.clientHeight-10;this._element.setStyle({top:a+"px"})}return this.loadTextCallback&&!this.loadTextExecuted&&(this.loadTextExecuted=!0,this.loadTextCallback(this)),this})),u.addMethod("updateText",(function(t){if(this.text=this._escapeText(t),this._element){var e=this._element.select(this.TEXT_PATTERN);this._setValues(e,(0,n.kJL)(this.text)?this.text:[this.text])}})),u.addMethod("hide",(function(){this._element&&l()(this._element).addClass(d.Z.HIDDEN_CLASS)})),u.addMethod("disable",(function(){r.hideJSTooltip(this.srcElement),this.disabled=!0})),u.addMethod("enable",(function(){this.disabled=!1,r.showJSTooltip(this.srcElement,this.offsets)})),u.addMethod("remove",(function(){var t=r.tooltips.indexOf(this.srcElement.jsTooltip);-1!==t&&(r.hideJSTooltip(this.srcElement),r.tooltips.splice(t,1)),this.removed=!0})),u.addMethod("isRemoved",(function(){return this.removed}));var r={TOOLTIP_PATTERN:"*[tooltiptext] > *",ELEMENT_WITH_TOOLTIP_PATTERN:"*[tooltiptext]",actualX:0,actualY:0,tooltips:[],showJSTooltip:function(t,e){if(t.jsTooltip){if(!t.jsTooltip.disabled&&e){this.actualX=e[0],this.actualY=e[1],this.cleanUp();var i=l()(t).attr("tooltipappeardelay");i=i?parseInt(i):1e3,t.jsTooltip.timer&&clearTimeout(t.jsTooltip.timer),t.jsTooltip.timer=setTimeout((function(){t.jsTooltip.show([r.actualX,r.actualY])}),i),l()(t).on("mousemove",(function(t){r.actualX=t.clientX,r.actualY=t.clientY}))}}else t.jsTooltip=new u(t,{})},enableTooltips:function(){(this.tooltips||[]).forEach((function(t){t.enable()}))},disableTooltips:function(){(this.tooltips||[]).forEach((function(t){t.disable()}))},hideJSTooltip:function(t){t&&t.jsTooltip&&(t.jsTooltip.timer&&clearTimeout(t.jsTooltip.timer),t.jsTooltip.hide(),l()(t).off("mousemove"))},cleanUp:function(){if(this.tooltips&&this.tooltips.length>0){var t=[],e="fuigasuifdughaiadbvguaidbapvuwbev";this.tooltips.each((function(i){i.srcElement.id&&document.getElementById(i.srcElement.id)||(i.srcElement.setAttribute("id",e),document.getElementById(e)||(i.hide(),t.push(i)),i.srcElement.setAttribute("id",null))})),t.length>0&&(this.tooltips=this.tooltips.reject((function(e){return t.include(e)})))}}}},43852:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});var s=i(72157),o=i.n(s),n=i(64155),a=i(51516),l=i(11364),h=i(84581),d=i(72335),u=i(6899);document.observe((0,n.MEy)()?"drag:touchstart":"drag:mousedown",(function(t){var e=t.memo.targetEvent.element();if(!(0,n.MEy)()||!event.treeEvent&&!event.listEvent){var i=(0,n.Ua0)(e,a.Z.LIST_ITEM_PATTERN);i&&!e.match(a.Z.DISCLOSURE_BUTTON_PATTERN)&&u.Z.down(i,(function(t){return o()(t).children(a.Z.LIST_ITEM_WRAP_PATTERN)[0]})),e.match(a.Z.DISCLOSURE_BUTTON_PATTERN)&&u.Z.down(e)}})),document.observe("mouseup",(function(t){if((0,n.dOg)(t)){var e=t.element();document.fire(a.Z.ELEMENT_CONTEXTMENU,{targetEvent:t,node:e})}})),document.observe("contextmenu",(function(t){return Event.stop(t),!1})),document.observe("dom:loaded",(function(t){var e=function(t){return void 0===o()(t).data("globalEvents")};(0,n.w1q)()&&document.body.setAttribute("oncontextmenu","return false"),o()("body").on("mouseover",a.Z.BUTTON_PATTERN,(function(t){!(0,n.xYm)(this)&&e(this)&&u.Z.over(this)})),o()("body").on("mouseout",a.Z.BUTTON_PATTERN,(function(t){e(this)&&u.Z.out(this)})),o()("body").on("focus",a.Z.BUTTON_PATTERN,(function(t){!(0,n.xYm)(this)&&e(this)&&u.Z.over(this)})),o()("body").on("blur",a.Z.BUTTON_PATTERN+"."+a.Z.HOVERED_CLASS,(function(t){!(0,n.xYm)(this)&&e(this)&&u.Z.out(this)})),o()("body").on("mousedown mouseup touchstart touchend",[a.Z.BUTTON_PATTERN,a.Z.MENU_LIST_PATTERN,a.Z.DISCLOSURE_BUTTON_PATTERN,a.Z.META_LINKS_PATTERN].join(","),(function(t){"mousedown"==t.type||"touchstart"==t.type?!(0,n.xYm)(this)&&e(this)&&u.Z.down(this):!(0,n.xYm)(this)&&e(this)&&u.Z.up(this),"mouseup"!=t.type&&"touchend"!=t.type||(this.parentNode.id==a.Z.MAIN_NAVIGATION_HOME_ITEM_ID&&d.Z.navigationOption("home"),this.parentNode.id==a.Z.MAIN_NAVIGATION_LIBRARY_ITEM_ID&&d.Z.navigationOption("library"))})),o()("#frame").on("touchend mouseup",".minimize",(function(t){this.parentNode.className.indexOf("maximized")>=0?a.Z.minimize(this):a.Z.maximize(this),t.preventDefault()})),o()("#frame").on("touchend mouseup",a.Z.TABSET_TAB_PATTERN,(function(t){if(!(0,n.xYm)(this)&&e(this)&&"true"!==o()(this.parentNode).attr("disableCoreEvents")){o()(this).siblings().removeClass(a.Z.SELECTED_CLASS).each((function(t,e){o()(o()(this).attr("tabId")).addClass("hidden")})),o()(this).addClass(a.Z.SELECTED_CLASS),o()(o()(this).attr("tabId")).removeClass("hidden");var i=o()(this).closest(".tabs").find(".control.tabSet.anchor");"#attributesTab"===o()(this).attr("tabId")?i.addClass("attributesAnchor"):i.removeClass("attributesAnchor")}})),o()("#"+a.Z.META_LINK_LOGOUT_ID).on("mousedown touchstart",(function(t){t.preventDefault(),d.Z.navigationOption("logOut")})),o()("body").on("mouseover mouseout click","[tooltiptext]",(function(t){("mouseout"==t.type||"click"==t.type)&&h.k.hideJSTooltip(this),"mouseover"==t.type&&h.k.showJSTooltip(this,[t.clientX,t.clientY])})),o()("#mainNavigation").on("mouseover",a.Z.NAVIGATION_MUTTON_PATTERN,(function(t){d.Z.showNavButtonMenu(t,this)})),(0,n.MEy)()&&(document.body.addEventListener("touchstart",(function(t){window.calendar&&window.calendar.hide&&!window.calendar.hidden&&window.calendar.hide(),void 0!==l.Z&&(l.Z.element_scrolled=!1)}),!1),document.body.addEventListener("touchmove",(function(t){}),!1)),o()("#filePath").on("mouseenter mouseout",(function(){o()("#fake_upload_button").toggleClass("over")}))}));const r=u.Z}}]);
//# sourceMappingURL=chunk.574.js.map