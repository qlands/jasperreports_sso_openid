(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[6461],{56461:(t,e,s)=>{"use strict";s.d(e,{W:()=>v});var i=s(72861),n=s(52499),l=s(51516),o=s(43852),r=s(64155),d=s(11364),a=s(84581),m=s(97836),h=s.n(m),c=s(84612),u=s(72157),_=s.n(u),g=function(t){o.Z.disable(t)},E=function(t){o.Z.enable(t)},I=function(t){return o.Z.isDisabled(t)},p=function(t){_()(t).removeClass(l.Z.CLOSED_CLASS).addClass(l.Z.OPEN_CLASS)[0].isOpen=!0},L=function(t){return _()(t).hasClass(l.Z.OPEN_CLASS)||_()(t)[0].isOpen&&!_()(t).hasClass(l.Z.CLOSED_CLASS)},f=function(t){_()(t).removeClass(l.Z.OPEN_CLASS).addClass(l.Z.CLOSED_CLASS)[0].isOpen=!1},v={lists:{},activeListId:null,_templateHash:{},messages:{listNItemsSelected:"#{count} items selected"},getDynamicListForElement:function(t){var e=_()(t)[0];return _()(e).is("ul,ol")||0!==(e=_()(e).parent("ul,ol")).length?v.lists[e.id]:null},ListItem:function(t){this._itemId=void 0,this._list=void 0,this.first=!1,this.last=!1,t&&(this.isIconClicked=!0,this._value=t.value?t.value:{},this._label=t.label?t.label:"",this._subList=t.subList,this._cssClassName="cssClassName"in t?t.cssClassName:void 0,this._templateDomId="templateDomId"in t?t.templateDomId:void 0,this._respondOnItemEvents=!!Object.isUndefined(t.respondOnItemEvents)||t.respondOnItemEvents,this._excludeFromEventHandling="excludeFromEventHandling"in t?t.excludeFromEventHandling:void 0,this._excludeFromSelectionTriggers="excludeFromSelectionTriggers"in t?t.excludeFromSelectionTriggers:void 0,this.FAVORITE_ICON_PATTERN=t.favoriteIconPattern,this.SCHEDULE_ICON_PATTERN=t.scheduleIconPattern)}};v.ListItem.addVar("DEFAULT_TEMPLATE_DOM_ID","dynamicListItemTemplate"),v.ListItem.addVar("DEFAULT_ITEM_ID_PREFIX","item"),v.ListItem.addVar("DEFAULT_SUB_LIST_ID_SUFFIX","SubList"),v.ListItem.addMethod("getId",(function(){return this._itemId})),v.ListItem.addMethod("setList",(function(t){this._list=t,this.getList()&&(this._itemId=this.getList().getNextItemId())})),v.ListItem.addMethod("unsetList",(function(){this._list=null,this._itemId=void 0})),v.ListItem.addMethod("getList",(function(){return this._list})),v.ListItem.addMethod("setValue",(function(t){return this._value=t})),v.ListItem.addMethod("getValue",(function(){return this._value})),v.ListItem.addMethod("setLabel",(function(t){return this._label=t})),v.ListItem.addMethod("getLabel",(function(){return this._label})),v.ListItem.addMethod("setCssClassName",(function(t){this._cssClassName=t})).addMethod("getCssClassName",(function(){return this._cssClassName})),v.ListItem.addMethod("setTemplateDomId",(function(t){this._templateDomId=t})),v.ListItem.addMethod("getTemplateDomId",(function(){return this._templateDomId})),v.ListItem.addMethod("show",(function(t){if(t){this._element=this.processTemplate(this._getTemplate()),this._getElement().setAttribute("id",this._generateId()),this._getElement().setAttribute("tabindex",-1),this.first&&this.getList().tabindex&&_()(this._getElement()).attr("tabindex",this.getList().tabindex),this._getElement().listItem=this,this.refreshStyle();var e=t.childElements(),s=this.index()-1;s>-1&&s<e.length?this._getElement().insert({after:e[s]}):_()(t)[0].insert(this._getElement())}})),v.ListItem.addMethod("refresh",(function(){var t=!1;this._getElement()&&(this.getList()?(document.activeElement===this._getElement()&&(t=!0),this._element=this.processTemplate(this._getElement()),this.refreshStyle(),t&&_()(this._getElement()).focus()):(this._getElement().remove(),this._element=null))})),v.ListItem.addMethod("refreshStyle",(function(){var t=this._getElement();t&&(t.templateClassName&&(t.className=t.templateClassName),this.first&&_()(t).addClass(l.Z.FIRST_CLASS),this.last&&_()(t).addClass(l.Z.LAST_CLASS),this.isSelected()&&_()(t).addClass(l.Z.SELECTED_CLASS),this.isDisabled()&&_()(t).addClass(l.Z.DISABLED_CLASS),this.getCssClassName()&&_()(t).addClass(this.getCssClassName()),this.isComposite||this===this.getList().cursor&&_()(t).addClass("cursor"))})),v.ListItem.addMethod("isRendered",(function(){return(0,r.sDW)(this._getElement())})),v.ListItem.addMethod("disable",(function(){g(this._getElement())})).addMethod("enable",(function(){E(this._getElement())})).addMethod("isDisabled",(function(){return I(this._getElement())})),v.ListItem.addMethod("processTemplate",(function(t){var e=t.childElements()[0];e.cleanWhitespace();var s=e.childElements().length;return s==e.childNodes.length?e.insert(c.Z.hardEscape(this.getLabel())):e.childNodes[s].data=this.getLabel(),t})),v.ListItem.addMethod("focus",(function(){this._getElement().focus()})),v.ListItem.addMethod("remove",(function(){this.getList().removeItems([this])})),v.ListItem.addMethod("isSelected",(function(){return this.getList().isItemSelected(this)})),v.ListItem.addMethod("select",(function(){this.getList().selectItem(this,!0)})),v.ListItem.addMethod("deselect",(function(){this.getList().deselectItem(this)})),v.ListItem.addMethod("index",(function(){this.getList().getItems().indexOf(this)})),v.ListItem.addMethod("_getElement",(function(){if(!this._element){var t=_()("#"+this._generateId())[0];this._element=Object.isElement(t)?t:void 0}return this._element})),v.ListItem.addMethod("_getTemplate",(function(){var t=this._templateDomId;v._templateHash[t]||(v._templateHash[t]=t);var e=document.getElementById(v._templateHash[t]).clone(!0);return e.templateId=t,e.templateClassName=e.className,e})),v.ListItem.addMethod("_generateId",(function(){return this.getList()&&this.getList().getId()?this.getList().getId()+"_"+this.DEFAULT_ITEM_ID_PREFIX+this.getId():null})),v.ListItem.addMethod("_isElementInExcluded",(function(t,e){var s=t.element();return this._excludeFromEventHandling&&null!=(0,r.BwZ)(s,this._excludeFromEventHandling)})),v.ListItem.addMethod("_isExcludedFromSelectionTriggers",(function(t){var e=t.target;return this._excludeFromSelectionTriggers&&null!=(0,r.BwZ)(e,this._excludeFromSelectionTriggers)})),v.ListItem.addMethod("_isFavoriteHandler",(function(t){return _()(t).is(this.FAVORITE_ICON_PATTERN)})),v.ListItem.addMethod("_isScheduleHandler",(function(t){return _()(t).is(this.SCHEDULE_ICON_PATTERN)})),v.CompositeItem=function(t){v.ListItem.call(this,t),this.isComposite=!0,this._items=t.items,this._openUp=t.openUp,this._subList=null,this._subListOptions=t.listOptions?t.listOptions:{},this._listTagName="ul",this.FAVORITE_ICON_PATTERN=t.favoriteIconPattern,this.SCHEDULE_ICON_PATTERN=t.scheduleIconPattern,this.OPEN_HANDLER_PATTERN=t.openHandlerPattern?t.openHandlerPattern:this.OPEN_HANDLER_PATTERN,this.CLOSE_HANDLER_PATTERN=t.closeHandlerPattern?t.closeHandlerPattern:this.CLOSE_HANDLER_PATTERN},v.CompositeItem.prototype=(0,r.I8Q)(v.ListItem.prototype),v.CompositeItem.addVar("OPEN_HANDLER_PATTERN","[openHandler=openHandler]"),v.CompositeItem.addVar("CLOSE_HANDLER_PATTERN","[closeHandler=closeHandler]"),v.CompositeItem.addMethod("getItems",(function(){return this._items})),v.CompositeItem.addMethod("setItems",(function(t){this._items=t})),v.CompositeItem.addMethod("addItem",(function(t){this._items.push(t)})),v.CompositeItem.addMethod("removeItems",(function(t){this._items=this._items.reject((function(e){return t.include(e)})),this._subList.removeItems(t)})),v.CompositeItem.addMethod("show",(function(t){this._listTagName=t.tagName,v.ListItem.prototype.show.call(this,t),f(this._getElement()),this._items&&this._showSubList()})),v.CompositeItem.addMethod("_showSubList",(function(){var t=this._getSubListId(),e=new Element(this._listTagName,{id:t});this._getElement().insert(this._openUp?{top:e}:{bottom:e});var s=this._subListOptions;if(this._subList=new v.List(t,{allowSelections:"allowSelections"in s?s.allowSelections:this.getList()._allowSelections,responsive:"responsive"in s?s.responsive:this.getList()._responsive,selectionDefaultsToCursor:"selectionDefaultsToCursor"in s?s.selectionDefaultsToCursor:this.getList()._selectionDefaultsToCursor,collapsible:"collapsible"in s?s.collapsible:this.getList()._collapsible,multiSelect:"multiSelect"in s?s.multiSelect:this.getList()._multiSelect,cssClassName:"cssClassName"in s?s.cssClassName:this.getList()._cssClassName,listTemplateDomId:"listTemplateDomId"in s?s.listTemplateDomId:this.getList()._listTemplateDomId,itemTemplateDomId:"itemTemplateDomId"in s?s.itemTemplateDomId:this.getList()._itemTemplateDomId,itemCssClassName:"itemCssClassName"in s?s.itemCssClassName:this.getList()._itemCssClassName,comparator:"comparator"in s?s.comparator:this.getList()._comparator,items:this._items}),this._subList._initEvents=function(){},this._subList.show(),this._subList._parentList=this.getList(),this._subList.getItems().each(function(t){t.parentItem=this}.bind(this)),this===this.getList().cursor){var i=this.getFirstChild();if(i){if(this.deselect(),i.getList().setCursor(i),this._getElement()){var n=_()(this._getElement());n.removeClass("cursor"),n.addClass("supercursor")}i._getElement()&&window.setTimeout((function(){_()(i._getElement()).focus()}),0)}}})),v.CompositeItem.addMethod("refresh",(function(){v.ListItem.prototype.refresh.call(this),this._items&&(this._subList?this._subList.refresh():this._showSubList())})),v.CompositeItem.addMethod("getFirstChild",(function(){return this._subList.getItems().length<1?null:this._subList.getItems()[0]})),v.CompositeItem.addMethod("refreshStyle",(function(){v.ListItem.prototype.refreshStyle.call(this),this._getElement()&&(L(this._getElement())?(p(this._getElement()),this===this.getList().cursor&&(this._subList&&this._subList.cursor?_()(this._getElement()).addClass("supercursor"):_()(this._getElement()).addClass("cursor"))):(f(this._getElement()),this===this.getList().cursor&&_()(this._getElement()).addClass("cursor")),this._subList&&this._subList.refreshStyle())})),v.CompositeItem.addMethod("_isOpenHandler",(function(t){return _()(t).is(this.OPEN_HANDLER_PATTERN)})).addMethod("_isCloseHandler",(function(t){return _()(t).is(this.CLOSE_HANDLER_PATTERN)})).addMethod("_isFavoriteHandler",(function(t){return _()(t).is(this.FAVORITE_ICON_PATTERN)})).addMethod("_isScheduleHandler",(function(t){return _()(t).is(this.SCHEDULE_ICON_PATTERN)})),v.CompositeItem.addMethod("_getSubListId",(function(){return this._generateId()+"_"+this.DEFAULT_SUB_LIST_ID_SUFFIX})),v.TemplatedListItem=function(t){t&&(this.tooltipText="tooltipText"in t?t.tooltipText:null),v.ListItem.call(this,t)};var T=function(){};T.prototype=v.ListItem.prototype,v.TemplatedListItem.prototype=new T,v.TemplatedListItem.prototype.constructor=v.TemplatedListItem,v.TemplatedListItem.prototype.processTemplate=function(t){},v.UnderscoreTemplatedListItem=function(t){v.TemplatedListItem.call(this,t),t&&(this._template="template"in t?t.template:"")};var C=function(){};C.prototype=v.TemplatedListItem.prototype,v.UnderscoreTemplatedListItem.prototype=new C,v.UnderscoreTemplatedListItem.prototype.constructor=v.UnderscoreTemplatedListItem,v.UnderscoreTemplatedListItem.prototype._getTemplate=function(){return this._template},v.UnderscoreTemplatedListItem.prototype.processTemplate=function(){var t=_()(h().template(this._template,c.Z.hardEscape(this.getValue())))[0];return t.templateClassName=t.className,null!=this.tooltipText&&new a.p(t,{text:c.Z.hardEscape(this.tooltipText)}),t},v.List=function(t,e){this._id=t,this._items=[],this._selectedItems=[],this._lastSelectedItem=null,this.cursor=null,this._nextId=1,this.draggables=[],this._parentList=null,e&&(this._selectionDefaultsToCursor=!("selectionDefaultsToCursor"in e)||e.selectionDefaultsToCursor,this._allowSelections=!("allowSelections"in e)||e.allowSelections,this._cssClassName="cssClassName"in e?e.cssClassName:"",this._excludeFromEventHandling="excludeFromEventHandling"in e&&e.excludeFromEventHandling,this._excludeFromSelectionTriggers="excludeFromSelectionTriggers"in e&&e.excludeFromSelectionTriggers,this._multiSelect="multiSelect"in e&&e.multiSelect,this._selectOnMousedown=!("selectOnMousedown"in e)||e.selectOnMousedown,this._setCursorOnMousedown=!("setCursorOnMousedown"in e)||e.setCursorOnMousedown,this._listTemplateDomId=e.listTemplateDomId,this._itemTemplateDomId=e.itemTemplateDomId,this._itemCssClassName=e.itemCssClassName,this._comparator=e.comparator,this.dragPattern=e.dragPattern,this.scroll=e.scroll,this.setItems(e.items)),this._createFromTemplate(),this._registerCustomScroll(),v.activeListId=this.getId(),this._msgNItemsSelected=new n.Template(v.messages.listNItemsSelected),v.lists[this._id]=this},v.List.addVar("Event",{ITEM_SELECTED:"item:selected",ITEM_UNSELECTED:"item:unselected",ITEM_MOUSEUP:"item:mouseup",ITEM_MOUSEDOWN:"item:mousedown",ITEM_CLICK:"item:click",ITEM_DBLCLICK:"item:dblclick",ITEM_OPEN:"item:open",ITEM_CLOSED:"item:closed",ITEM_CONTEXTMENU:"item:contextmenu",ITEM_BEFORE_SELECT_OR_UNSELECT:"item:beforeSelectOrUnselect"}),v.List.addVar("DND_WRAPPER_TEMPLATE","column_two"),v.List.addVar("DND_ITEM_TEMPLATE","column_two:resourceName"),v.List.addMethod("getNextItemId",(function(){return this._nextId++})),v.List.addMethod("getId",(function(){return this._id})),v.List.addMethod("getItems",(function(){return this._items})),v.List.addMethod("setItems",(function(t){if(t){var e,s=this.cursor,i=this._getElement(),n=!1;i&&(i===document.activeElement||_().contains(i,document.activeElement))&&(n=!0),this._items=[],this.resetSelected(),this.addItems(t),s&&(e=this.getCursor()),n&&(e&&e._getElement()?_()(e._getElement()).focus():i&&_()(i).focus())}})),v.List.addMethod("addItems",(function(t){t&&((t=h().isArray(t)?t:[t]).compact().each(function(t){this._prepareListItem(t),this._items.push(t)}.bind(this)),this._comparator&&(this._items=this._items.sort(this._comparator)))})),v.List.addMethod("insertItems",(function(t,e){e&&((e=(e=h().isArray(e)?e:[e]).compact()).each(function(t){this._prepareListItem(t)}.bind(this)),this._items.splice.apply(this._items,[t,0].concat(e)),this._comparator&&(this._items=this._items.sort(this._comparator)))})),v.List.addMethod("_prepareListItem",(function(t){t&&(t.setList(this),this._itemTemplateDomId&&!t.getTemplateDomId()&&t.setTemplateDomId(this._itemTemplateDomId),this._itemCssClassName&&!t.getCssClassName()&&t.setCssClassName(this._itemCssClassName),this._excludeFromEventHandling&&!t._excludeFromEventHandling&&(t._excludeFromEventHandling=this._excludeFromEventHandling),this._excludeFromSelectionTriggers&&!t._excludeFromSelectionTriggers&&(t._excludeFromSelectionTriggers=this._excludeFromSelectionTriggers))})),v.List.addMethod("removeItems",(function(t){if(t&&(0,r.kJL)(t)){var e=this.getCursor();t.each(function(t){this._removeItemFromSelected(t),e===t&&((e=this.getNextItem(t))||(e=this.getPreviousItem(t)))}.bind(this)),this._items=this._items.reject((function(e){return t.include(e)})),t.each((function(t){t.unsetList(),t.refresh()})),e!==this.getCursor()&&this.setCursor(e)}})),v.List.addMethod("sort",(function(t){t&&(this._comparator=t),this._comparator&&this.getItems().sort(this._comparator)})),v.List.addMethod("setCursor",(function(t){var e=!1;document.activeElement&&_().contains(this._getElement(),document.activeElement)&&(e=!0),this.cursor&&this.cursor.getList()&&this.cursor._getElement()&&_()(this.cursor._getElement()).removeClass("cursor"),this.cursor=t,t&&t.getList()&&t._getElement()&&(this.scrollUpTo(t),this._allowSelections&&this._selectionDefaultsToCursor&&this.getSelectedItems().length<1&&this.selectItem(t),e&&_()(this.cursor._getElement()).focus(),_()(this.cursor._getElement()).addClass("cursor"))})),v.List.addMethod("getCursor",(function(){return this.cursor&&this.cursor.getList()&&this.cursor._getElement()&&_()(this.cursor._getElement()).closest("BODY").length>0||this._selectedItems.length>0&&this._selectedItems[this._selectedItems.length-1]._getElement()&&(this.setCursor(this._selectedItems[this._selectedItems.length-1]),_()(this.cursor._getElement()).closest("BODY").length>0)?this.cursor:this._items.length>0?(this.setCursor(this._items[0]),this.cursor):null})),v.List.addMethod("getCursorElement",(function(){return this.getCursor()?this.getCursor()._getElement():null})),v.List.addMethod("getSelectedItems",(function(){return this._selectedItems})),v.List.addMethod("isItemSelected",(function(t){return this.getSelectedItems().include(t)})),v.List.addMethod("selectItem",(function(t,e,s,i){if(!this.fire(this.Event.ITEM_BEFORE_SELECT_OR_UNSELECT,{item:t}).stopSelectOrUnselect&&(!(this._multiSelect&&this._selectedItems.length>1&&this.isItemSelected(t))||e||s||i)){var n=this.isItemSelected(t)&&i,l=!(this._multiSelect&&e||n),o=this.isItemSelected(t)&&e&&!n,d=this._multiSelect&&!o&&(0,r.sDW)(this._lastSelectedItem)&&s,a=!o&&!d;if(l&&this.resetSelected(),o&&!l&&this._removeItemFromSelected(t),d){var m=this._items.indexOf(this._lastSelectedItem),h=this._items.indexOf(t),c=Math.min(m,h),u=Math.max(m,h);if(c>-1)for(var _=c;_<=u;_++)this._addItemToSelected(this._items[_],!1);else this._addItemToSelected(this._items[u],!1)}a&&this._addItemToSelected(t,!(s&&this._multiSelect)),this.setCursor(t)}})),v.List.addMethod("deselectItem",(function(t){this._removeItemFromSelected(t),this.setCursor(t)})),v.List.addMethod("deselectOthers",(function(t,e,s,i){this.fire(this.Event.ITEM_BEFORE_SELECT_OR_UNSELECT,{item:t}).stopSelectOrUnselect||this._multiSelect&&this._selectedItems.length>1&&this.isItemSelected(t)&&!(e||s||i)&&this._selectedItems.findAll((function(e){return e!=t})).each(function(t){this._removeItemFromSelected(t)}.bind(this))})),v.List.addMethod("resetSelected",(function(t){var e=this._selectedItems;this._selectedItems=[],e.each(function(t){var e=t.getList();e&&e!==this&&e.resetSelected(!0),t.refreshStyle(),this.fire(this.Event.ITEM_UNSELECTED,{item:t})}.bind(this)),this._parentList&&!t&&this._parentList.resetSelected()})),v.List.addMethod("scrollDownTo",(function(t){var e=this._getElement().parentNode;if(e&&t&&t._getElement()){var s=e.scrollTop,i=e.offsetHeight,n=t._getElement().offsetTop+t._getElement().offsetHeight-(s+i);n>0&&(e.scrollTop+=n)}})),v.List.addMethod("scrollUpTo",(function(t){var e=this._getElement().parentNode;if(e&&t&&t._getElement()){var s=e.scrollTop,i=t._getElement().offsetTop,n=s+t._getElement().offsetHeight-i;n>0&&(e.scrollTop-=n)}})),v.List.addMethod("getNextItem",(function(t){var e=this.getItems().indexOf(t);return~e?this.getItems()[e+1]:null})),v.List.addMethod("getPreviousItem",(function(t){var e=this.getItems().indexOf(t);return~e?this.getItems()[e-1]:null})),v.List.addMethod("selectNext",(function(t){var e=t.memo.targetEvent,s=this.getCursor(),i=null,n=null;if(s._subList&&s._getElement()&&_()(s._getElement()).hasClass(l.Z.OPEN_CLASS)){if(!_()(s._getElement()).hasClass("supercursor")&&s._subList.getItems().length>0)return n=s._subList.getItems()[0],_()(s._getElement()).addClass("supercursor"),e.preventDefault(),e.stopPropagation(),s._subList.setCursor(n),void _()(s._subList.cursor._getElement()).focus();if(n=(i=s._subList.getCursor()).getList().getNextItem(i))return i.getList().selectNext(t)}_()(s._getElement()).removeClass("supercursor"),s._subList&&(s._subList.cursor=null),(n=s.getList().getNextItem(s))&&(this._multiSelect&&(0,r.LM1)(e)?this.isItemSelected(n)?s.getList().deselectItem(s):this._addItemToSelected(n,!1):(this.resetSelected(),s.getList().selectItem(n)),this.setCursor(n)),e.preventDefault(),e.stopPropagation()})),v.List.addMethod("selectPrevious",(function(t){var e=t.memo.targetEvent,s=this.getCursor(),i=null,n=null;if(_()(s._getElement()).hasClass("supercursor")){if(n=(i=s._subList.getCursor()).getList().getPreviousItem(i))return i.getList().selectPrevious(t);s._subList.cursor&&(s._subList.cursor._element&&_()(s._subList.cursor._element).removeClass("cursor"),s._subList.cursor=null),(0,r.LM1)(e)&&this._multiSelect||s._subList.resetSelected(),_()(s._getElement()).removeClass("supercursor"),this.setCursor(s),_()(s._getElement()).focus()}else(n=s.getList().getPreviousItem(s))&&(this._multiSelect&&(0,r.LM1)(e)?this.isItemSelected(n)?s.getList().deselectItem(s):this._addItemToSelected(n,!1):(this.resetSelected(),s.getList().selectItem(n)),this.setCursor(n));e.preventDefault(),e.stopPropagation()})),v.List.addMethod("selectPageDown",(function(t){var e=t.memo.targetEvent;e.preventDefault(),e.stopPropagation();var s=this.getCursor(),i=s._getElement().offsetHeight,n=this._getElement().parentNode,l=n.scrollTop+(n.offsetHeight-i);l>n.offsetHeight&&(l=n.offsetHeight),n.scrollTop=l;for(var o=s,d=null;o&&o._getElement().offsetTop+o._getElement().offsetHeight<n.scrollTop+n.offsetHeight;)d=o,(0,r.LM1)(e)&&(this.isItemSelected(d)?s.getList().deselectItem(s):this._addItemToSelected(d,!1)),o=d.getList().getNextItem(d);d&&(this._multiSelect&&(0,r.LM1)(e)||(this.resetSelected(),s.getList().selectItem(d)),this.setCursor(d))})),v.List.addMethod("selectPageUp",(function(t){var e=t.memo.targetEvent;e.preventDefault(),e.stopPropagation();var s=this.getCursor(),i=s._getElement().offsetHeight,n=this._getElement().parentNode,l=n.scrollTop+(n.offsetHeight-i);l>n.offsetHeight&&(l=n.offsetHeight),n.scrollTop=l;for(var o=s,d=null;o&&o._getElement().offsetTop>n.scrollTop-n.offsetHeight;)d=o,this._multiSelect&&(0,r.LM1)(e)&&(this.isItemSelected(d)?s.getList().deselectItem(s):this._addItemToSelected(d,!1)),o=d.getList().getPreviousItem(d);d&&(this._multiSelect&&(0,r.LM1)(e)||(this.resetSelected(),s.getList().selectItem(d)),this.setCursor(d))})),v.List.addMethod("selectOutwards",(function(t){if(!(this.getSelectedItems().length<1)){var e=this.getSelectedItems()[0],s=e._getElement(),i=!L(s)&&e.parentItem;i?(e.deselect(),i.select(),i._getElement().focus()):(f(s),this.fire(this.Event.ITEM_CLOSED,{targetEvent:t,item:e}))}})),v.List.addMethod("selectInwards",(function(t){var e=this.cursor;if(!e){if(this.getSelectedItems().length<1)return;e=this.getSelectedItems()[0]}if(e.isComposite){var s=e._getElement();if(L(s)){var i=e.getFirstChild();if(i){if(e.deselect(),i.getList().setCursor(i),e._getElement()){var n=_()(e._getElement());_()(n).is(".cursor")&&(_()(n).removeClass("cursor"),_()(n).addClass("supercursor"))}i._getElement()&&_()(i._getElement()).focus()}}else p(s),this.fire(this.Event.ITEM_OPEN,{targetEvent:t,item:e})}})),v.List.addMethod("show",(function(){v.activeListId=this.getId(),this._getElement().update();var t=this.getItems(),e=t.length;t.each(function(t,s){t.first=0===s,t.last=s===e-1,t.show(this._getElement())}.bind(this)),this.draggables=[],this.scroll&&this.scroll.refresh(),this._initEvents()})),v.List.addMethod("refresh",(function(){if(this._getElement()){this.getCursor();var t,e=this._getElement().parentNode;t=e?e.scrollTop:0,this.refreshStyle();var s=this._getElement().childElements(),i=[],n=this.getCursor(),l=!1;n&&n.getList()&&n._getElement()&&(document.activeElement===n._getElement()||_().contains(n._getElement(),document.activeElement))&&(l=!0),this.getItems().each(function(t,e){if(t.first=0===e,t.last=e===this.getItems().length-1,t.isRendered())if(t.index()!=s.indexOf(t._getElement())){var n=L(t._getElement());t._getElement().remove(),t.show(this._getElement()),n&&p(t._getElement())}else t.refresh();else t.show(this._getElement());i.push(t._getElement())}.bind(this)),s.each((function(t){!i.include(t)&&t.parentNode&&t.remove()})),this.setCursor(n),l&&_()(this.getCursorElement())[0].focus(),e&&(e.scrollTop=t)}})),v.List.addMethod("refreshStyle",(function(t){var e=this._getElement();e&&(e.templateClassName&&(e.className=e.templateClassName),this._cssClassName&&_()(e).addClass(this._cssClassName))})),v.List.addMethod("fire",(function(t,e){var s=_()(this._getElement())[0];return s?s.fire(t,e):null})),v.List.addMethod("observe",(function(t,e){this._getElement().observe(t,e)})),v.List.addMethod("stopObserving",(function(t,e){this._getElement().stopObserving(t,e)})),v.List.addMethod("_getElement",(function(){return this._element||(this._element=_()("#"+this.getId())[0]),this._element})),v.List.addMethod("getItemByEvent",(function(t){if(t)for(var e=Event.element(t);e&&e.readAttribute&&_()(e).attr("id")!==this.getId();){var s=e.listItem;if(s&&null!=s.getList()){var i=s.getList(),n=i.getId()==this.getId(),l=this._getElement().contains(i._getElement());if(n||l)return s._label=c.Z.unescape(s._label),s;break}e=_()(e.parentNode)[0]}return null})),v.List.addMethod("_createFromTemplate",(function(){var t=_()(this._getElement()).attr("tabindex");this.tabindex=parseInt(t&&t.length>0?t:-1),this._getElement().insert({after:this._getTemplateElement(this._getElement())}),this._getElement().remove(),this._element=null,this._getElement().update(),this.tabindex&&this.tabindex.length>0&&_()(this._getElement()).attr("tabindex",this.tabindex),(0,r.c4K)(this._getElement())})),v.List.addMethod("_getTemplateElement",(function(t){var e=this._listTemplateDomId;v._templateHash[e]||(v._templateHash[e]=e);var s=document.getElementById(v._templateHash[e]).clone(!0);return _()(s).attr("id",this.getId()),s.templateId=e,s.templateClassName=s.className,(0,r.lem)(t,s),s})),v.List.addMethod("_addItemToSelected",(function(t,e){t&&!this.isItemSelected(t)&&(this._selectedItems.push(t),e&&(this._lastSelectedItem=t),t.refreshStyle(),this._parentList?this._parentList._addItemToSelected(t,e):this.fire(this.Event.ITEM_SELECTED,{item:t}))})),v.List.addMethod("_removeItemFromSelected",(function(t){t&&this.isItemSelected(t)&&(this._selectedItems=this._selectedItems.without(t),t.refreshStyle(),this._parentList?this._parentList._removeItemFromSelected(t):this.fire(this.Event.ITEM_UNSELECTED,{item:t}))})),v.List.addMethod("_buildDnDOverlay",(function(t){t.setStyle({width:null,height:null}),t.items.length>1?t.update(this._msgNItemsSelected.evaluate({count:t.items.length})):1==t.items.length&&t.update(c.Z.hardEscape(t.items[0].getLabel()))})),v.List.addMethod("_registerCustomScroll",(function(){if(!this.scroll&&this._getElement()){var t=this._getElement().up(l.Z.SWIPE_SCROLL_PATTERN);if(t){var e=l.Z.scrolls.get(t.identify());e&&(this.scroll=e)}}})),v.List.addMethod("createDraggableIfNeeded",(function(t){var e=t.element?t.element():t.target;if(this.dragPattern&&!this.draggables[e.identify()]){var s=(0,r.BwZ)(e,[this.dragPattern],!0);if(s){if(!s||this.draggables[s.identify()])return;var n=this.getItemByEvent(t);this.draggables[s.identify()]=new i._l(s,{superghosting:!0,mouseOffset:!0,onStart:this.setDragStartState.bind(this,n),onEnd:this.setDragEndState.bind(this,n)})}}})),v.List.addMethod("setDragStartState",(function(t,e,s){var n=t._getElement().templateClassName;n&&_()(e.element).addClass(n),_()(e.element).addClass(l.Z.DRAGGING_CLASS).addClass(this.getId()),e.element.items=this.getSelectedItems().slice(0),this._buildDnDOverlay(e.element),e.options.scroll=this._getElement(),e.options.scrollSensitivity=l.Z.SCROLL_SENSITIVITY,i.Mw.dragging=this.regionID||!0})),v.List.addMethod("setDragEndState",(function(t,e,s){i.Mw.dragging=null})),v.List.addMethod("_mouseupHandler",(function(t){var e=t.target,s=(0,r.Ua0)(e,l.Z.BUTTON_PATTERN)&&this.getItemByEvent(t);if(s&&!s._isElementInExcluded(t)){if(t.listEvent=!0,s._respondOnItemEvents&&!t.isInvoked){if(this.fire(this.Event.ITEM_MOUSEUP,{targetEvent:t,item:s}),!s._isExcludedFromSelectionTriggers(t)){var i=(0,r.yHG)(t),n=(0,r.LM1)(t),o=(0,r.dOg)(t),a=!this._selectOnMousedown&&!d.Z.element_scrolled&&(!(0,r.MEy)()||t.changedTouches.length>=1);if(a&&s.getList().selectItem(s,i,n,o),!a&&this._multiSelect&&this._selectedItems.length>1&&this.isItemSelected(s)&&!(i||n||o)&&(this._lastSelectedItem=s),s.getList().deselectOthers(s,(0,r.yHG)(t),(0,r.LM1)(t),(0,r.dOg)(t)),this.twofingers)this.twofingers=!1,_()(e).parents("li:first").hasClass("selected")&&document.fire(l.Z.ELEMENT_CONTEXTMENU,{targetEvent:t,node:e})}this.createDraggableIfNeeded(t)}t.isInvoked=!0}})),v.List.addMethod("_mousedownHandler",(function(t){var e=(t="dataavailable"==t.type?t.memo.targetEvent:t).target,s=(0,r.Ua0)(e,l.Z.BUTTON_PATTERN+","+l.Z.LIST_ITEM_WRAP_PATTERN)&&this.getItemByEvent(t);if(s&&!s._isElementInExcluded(t)){t.listEvent=!0;var i=this._itemPreventEvent(s,t);t.touches&&2==t.touches.length?this.twofingers=!0:this.twofingers=!1,i?(t.stopPropagation(),t.preventDefault()):s._respondOnItemEvents&&!t.isInvoked&&(this.fire(this.Event.ITEM_MOUSEDOWN,{targetEvent:t,item:s}),s._isExcludedFromSelectionTriggers(t)||(this._selectOnMousedown&&s.getList().selectItem(s,(0,r.yHG)(t),(0,r.LM1)(t),(0,r.dOg)(t)),this._setCursorOnMousedown&&!(0,r.yHG)(t)&&s.getList().setCursor(s)),s.focus()),t.isInvoked=!0}})),v.List.addMethod("_mouseoverHandler",(function(t){(0,r.Ua0)(t.target,l.Z.BUTTON_PATTERN)&&this.createDraggableIfNeeded(t)})),v.List.addMethod("_clickHandler",(function(t){var e=(0,r.Ua0)(t.target,l.Z.BUTTON_PATTERN)&&this.getItemByEvent(t);if(e&&!e._isElementInExcluded(t)){if(!t.isInvoked){if(e._respondOnItemEvents&&this.fire(this.Event.ITEM_CLICK,{targetEvent:t,item:e}),!e.isComposite)return;var s=e._getElement(),i=t.target;e._isCloseHandler(i)&&L(s)?(f(s),this.fire(this.Event.ITEM_CLOSED,{targetEvent:t,item:e})):e._isOpenHandler(i)&&!L(s)&&(p(s),this.fire(this.Event.ITEM_OPEN,{targetEvent:t,item:e}))}t.isInvoked=!0}})),v.List.addMethod("_dblclickHandler",(function(t){var e=(0,r.Ua0)(t.target,l.Z.BUTTON_PATTERN)&&this.getItemByEvent(t);e&&!e._isElementInExcluded(t)&&(e._respondOnItemEvents&&!t.isInvoked&&this.fire(this.Event.ITEM_DBLCLICK,{targetEvent:t,item:e}),t.isInvoked=!0)})),v.List.addMethod("_initEvents",(function(){var t=this._getElement();this.draggables=[],(0,r.MEy)()?(t.stopObserving("touchstart").observe("touchstart",this._mousedownHandler.bindAsEventListener(this)),t.stopObserving("drag:touchstart").observe("drag:touchstart",this._mousedownHandler.bindAsEventListener(this)),t.stopObserving("touchend").observe("touchend",this._mouseupHandler.bindAsEventListener(this))):(t.stopObserving("mouseup").observe("mouseup",this._mouseupHandler.bindAsEventListener(this)),t.stopObserving("mousedown").observe("mousedown",this._mousedownHandler.bindAsEventListener(this)),t.stopObserving("drag:mousedown").observe("drag:mousedown",this._mousedownHandler.bindAsEventListener(this))),r.zcy||t.stopObserving("mouseover").observe("mouseover",this._mouseoverHandler.bindAsEventListener(this)),t.stopObserving("click").observe("click",this._clickHandler.bindAsEventListener(this)),t.stopObserving("dblclick").observe("dblclick",this._dblclickHandler.bindAsEventListener(this)),t.stopObserving("key:down").observe("key:down",this.selectNext.bindAsEventListener(this)),t.stopObserving("key:up").observe("key:up",this.selectPrevious.bindAsEventListener(this)),t.stopObserving("key:right").observe("key:right",this.selectInwards.bindAsEventListener(this)),t.stopObserving("key:left").observe("key:left",this.selectOutwards.bindAsEventListener(this)),t.stopObserving("key:pagedown").observe("key:pagedown",this.selectPageDown.bindAsEventListener(this))})),v.List.addMethod("_itemPreventEvent",(function(t,e){var s,i=t.isComposite,n=t.isIconClicked,l=i&&(t._isOpenHandler(e.target)||t._isCloseHandler(e.target));return 3!==e.which&&(s=t._isFavoriteHandler(e.target)),i&&(l||s)||n&&s})),v.UnderscoreTemplatedList=function(t,e){e&&(this._template="template"in e?e.template:""),v.List.apply(this,arguments)};var S=function(){};S.prototype=v.List.prototype,v.UnderscoreTemplatedList.prototype=new S,v.UnderscoreTemplatedList.prototype.constructor=v.UnderscoreTemplatedList,v.UnderscoreTemplatedList.prototype._getTemplateElement=function(t){var e=_()(h().template(this._template,{}))[0];return _()(e).attr("id",this.getId()),e.templateClassName=e.className,(0,r.lem)(t,e),e}}}]);
//# sourceMappingURL=chunk.6461.js.map