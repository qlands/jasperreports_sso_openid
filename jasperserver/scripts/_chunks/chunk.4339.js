(self.webpackChunkjrs_ui=self.webpackChunkjrs_ui||[]).push([[4339],{54339:(e,t,s)=>{"use strict";s.d(t,{Z:()=>M});var i=s(97836),n=s.n(i),o=s(72157),r=s.n(o),a=s(29562);let l;"all"!==a.t?(a.h.all=a.h.all||{},l=a.h.all):l=Object.keys(a.h).reduce(((e,t)=>({...e,...a.h[t]})),{});const c=l;var h=s(71914),d=s(95002),u=s(76802),p=s(16176),b=s(15495),f=s(15892),m=s.n(f),g=s(70618),v=s(59661);function _(e,t){var s=t.get("action");this._contentRendered[s]||(this._contentRendered[s]=!0,this.tabs[s].render&&this.tabs[s].render()),this.$tabs.hide(),this.$tabs.filter((function(){return r()(this).data("tab")===s})).css("display","block"),this.selectedTab=s,this.trigger("tab:"+s,e,t)}const C=n().extend({},g.Z,{onConstructor:function(e){if(e||(e={}),!e.tabs||!n().isArray(e.tabs)||0===e.tabs.length)throw new Error("Tabbed panel should have at least one tab");this.tabContainerClass=e.tabContainerClass||"tabContainer",this.tabHeaderContainerSelector=e.tabHeaderContainerSelector||"> .header > .tabHeaderContainer",this.tabHeaderContainerClass=e.tabHeaderContainerClass||"tabHeaderContainer",this.tabbedPanelClass=e.tabbedPanelClass||"tabbedPanel",this.tabs={},n().each(e.tabs,n().bind((function(e){this.tabs[e.action]=e.content,delete e.content}),this))},afterSetElement:function(){this.$el.addClass(this.tabbedPanelClass),this.$tabHeaderContainer=this.$(this.tabHeaderContainerSelector),this.$tabHeaderContainer.length||(this.$tabHeaderContainer=r()("<div></div>").addClass(this.tabHeaderContainerClass),this.$("> .header").append(this.$tabHeaderContainer)),this.$contentContainer.empty(),n().each(this.tabs,n().bind((function(e,t){var s=r()("<div></div>").addClass(this.tabContainerClass);s.data("tab",t),s.html(e instanceof m().View?e.$el:e),this.$contentContainer.append(s)}),this));var e=this.tabContainerClass.split(" ");this.$tabs=this.$("."+e[0])},afterInitialize:function(e){this.tabHeaderContainer=new v.Z({options:e.tabs,el:this.$tabHeaderContainer,contextName:"tab",toggleClass:e.toggleClass||"active",toggle:!0,optionTemplate:e.optionTemplate||'<button class="button up">\n\n    <js-templateNonce></js-templateNonce>\n    <span class="wrap">{{- label }}<span class="icon"></span></span>\n</button>\n'}),this._contentRendered={},this.listenTo(this.tabHeaderContainer,n().map(e.tabs,(function(e){return"tab:"+e.action})).join(" "),n().bind(_,this));for(var t=0;t<e.tabs.length;t++)if(e.tabs[t].primary){this.openTab(e.tabs[t].action);break}},onRemove:function(){n().each(this.tabs,(function(e){e.remove&&e.remove()})),this.tabHeaderContainer.remove()},extension:{openTab:function(e){var t=this.tabHeaderContainer.getOptionView(e);t&&t.select()},showTab:function(e){var t=this.tabHeaderContainer.getOptionView(e);t&&t.show()},hideTab:function(e){var t=this.tabHeaderContainer.getOptionView(e);t&&t.hide()}}});var T=s(71887);var y=m().View.extend({template:n().template('<span class="control searchLockup ">\n\n    <js-templateNonce></js-templateNonce>\n    <div class="wrap">\n        <input type="text" tabindex="">\n    </div>\n    <b class="right">\n        <a class="button searchClear"></a>\n    </b>\n    <a class="button search up"></a>\n</span>\n'),el:function(){return this.template()},events:{"click .button.search":"clickHandler","click .button.searchClear":"clear","keydown input[type=text]":"keyHandler"},initialize:function(e){this.owner=e.owner,this.$searchInput=this.$el.find("input[type=text]")},search:function(e){var t=this.$searchInput.val();this.owner.refresh(n().extend({searchString:t},e)),t?this.$el.find(".button.searchClear").addClass("up"):this.$el.find(".button.searchClear").removeClass("up")},clearInput:function(){this.$searchInput.val("")},clear:function(){this.clearInput(),this.clickHandler(),this.trigger("clear",this)},clearSilently:function(){this.clearInput(),delete this.owner.context.searchString,this.owner.refresh(n().extend({searchString:""},this.owner.context)),this.$el.find(".button.searchClear").removeClass("up")},clickHandler:function(){delete this.owner.context.searchString,this.search(this.owner.context),this.trigger("search",this.owner.context)},keyHandler:function(e){13===e.which&&this.clickHandler()},setSearchString:function(e){this.$searchInput.val(e)}});const S=T.Z.extend({initialize:function(e){this.searchParameter=e&&e.searchParameter||"q",this.additionalParams=e&&e.additionalParams},dataLayerObtained:function(e){var t=this;if(!e.__searchPluginExtended){var s=e.getDataUri,i=this.searchParameter;e.getDataUri=function(e){var o=s.apply(this,arguments),a={};return e.searchString&&(a[i]=e.searchString),t.additionalParams&&n().extend(a,t.additionalParams,n().pick(e,n().keys(t.additionalParams))),o+=(-1===o.indexOf("?")?"?":"&")+r().param(a,!0)},e.__searchPluginExtended=!0}}},{treeInitialized:function(e){e=e||{};var t=this;this.searchForm=new y({owner:this}),e.dfdRenderTo?e.dfdRenderTo.done((function(e){e.prepend(t.searchForm.render().el)})):this.$el.prepend(this.searchForm.render().el)},treeRemoved:function(){this.searchForm.remove()}});var R=s(27661);const w=T.Z.extend({itemsRendered:function(){this.$("> .subcontainer > .j-view-port-chunk").css({height:"auto"})}});var D=s(18580);var O=function(e){!e.list.totalItems&&e.list.$el.html(this.noResourcesFoundMessage)};const I=T.Z.extend({},{treeInitialized:function(e){this.noResourcesFoundMessage=n().template('<div class="noSearchResults">\n\n    <js-templateNonce></js-templateNonce>\n    {{- msg}}</div>',{msg:D.Z["no.resources.found"]}),this.listenTo(this.rootLevel,"ready",O)},treeRemoved:function(){this.stopListening(this.rootLevel,"ready",O)}});var k=s(35826),$=s(13644),H=s(93764),L=s(77684);const Z='<ul class="list collapsible" style="top: {{- top}}px; position: relative;">\n\n    <js-templateNonce></js-templateNonce>\n    {{ _.each(items, function(item){ }}\n    <li class="{{- item._node ? \'node folders closed\' : \'leaf\'}} {{- item.selected ? \'selected\' : \'\'}} {{- item.cssClass }}" data-index="{{- item.index }}" tabindex="-1">\n        <p class="wrap button {{- item._node ? \'\' : \'draggable\'}} " {{ if (item.value.description || item.value.uri) { }}data-tooltip=\'{{ if (item.value.description) { }}<p class="message label">Description: </p><p class="message">{{- item.value.description }}</p>{{ } }} {{ if (item.value.uri) { }} <p class="message label">Path: </p><p class="message">{{- item.value.uri }}</p> {{ } }}\' {{ } }}><b class="icon"></b> {{- item.value.label }} </p>\n        <div class="subcontainer"></div>\n    </li>\n    {{ }) }}\n</ul>',x='{{ if (model.value.description) { }}\n    <p class="message label">{{- i18n["tooltip.description"] }} </p>\n    <p class="message">{{- model.value.description }}</p>\n{{ } }}\n{{ if (model.value.uri) { }}\n    <p class="message label">{{- i18n["tooltip.path"] }}</p>\n    <p class="message">{{- model.value.uri }}</p>\n{{ } }}\n\n    <js-templateNonce></js-templateNonce>';var P=h.Z.contextPath,V=!1,E="list",j="tree",z=P+"/flow.html?_flowId=searchFlow&method=getNode&provider=repositoryExplorerTreeFoldersProvider&uri=/&depth=1";function B(e){switch(e.value.resourceType){case k.Z.REPORT_UNIT:e.cssClass="report";break;case k.Z.DOMAIN_TOPIC:e.cssClass="domain topic";break;case k.Z.SEMANTIC_LAYER_DATA_SOURCE:e.cssClass="domain";break;case k.Z.ADHOC_DATA_VIEW:e.cssClass="adhocDataView";break;case k.Z.OLAP_CUBE:e.cssClass="olap";break;default:e.cssClass="adhocDataView"}return e}const F=d.Z.extend({constructor:function(e){e||(e={}),this.options=e,!0===this.options.disableListTab&&(V=!0),this.options.resourcesTypeToSelect&&this.options.resourcesTypeToSelect.length||(this.options.resourcesTypeToSelect=[k.Z.REPORT_UNIT]),this.options.resourcesTypeToSelectTree&&this.options.resourcesTypeToSelectTree.length||(this.options.resourcesTypeToSelectTree=this.options.resourcesTypeToSelect),this._dfdRenderSerachFormTo=r().Deferred();var t={treeNodeProcessor:{processItem:function(e){return e._node=n().contains([k.Z.FOLDER],e.value.resourceType),e}},filterPublicFolderProcessor:{processItem:function(e){if("/public"!==e.value.uri)return e}},filterTempFolderProcessor:{processItem:function(e){if(-1===e.value.uri.indexOf("/temp"))return e}},filterEmptyFoldersProcessor:{processItem:function(e){if("folder"!==e.value.resourceType||""!==e.value._links.content)return e}},cssClassItemProcessor:{processItem:e.cssClassItemProcessor||B}};this.resourcesTreeView=p.Z.use(w).use(R.Z,{i18n:c,attachTo:this.$el,contentTemplate:x}).create().instance({type:"tree",itemsTemplate:Z,listItemHeight:22,selection:{allowed:!0,multiple:!1},rootless:!0,collapsed:!0,lazyLoad:!0,bufferSize:e.treeBufferSize||5e3,additionalCssClasses:"folders",getDataUri:(0,$.Z)({getFolderUri:function(e){return"/root"===e?"":e},contextPath:P,recursive:!1,type:this.options.resourcesTypeToSelectTree,containerType:k.Z.FOLDER,forceTotalCount:!0,forceFullPage:!0}),levelDataId:"uri",customDataLayers:{"/":n().extend(new b.Z({dataUriTemplate:z,processors:n().chain(t).omit("filterPublicFolderProcessor").values().value(),getDataArray:function(e){var t=[{id:"/root",label:(e=(0,H.Z)(e)).label,uri:"/",resourceType:"folder",_links:{content:"@fakeContentLink"}}];if(h.Z.isProVersion){var s=n().find(e.children,(function(e){return"/public"===e.uri}));s&&t.push({id:"/public",label:s.label,uri:"/public",resourceType:"folder",_links:{content:"@fakeContentLink"}})}return t}}),{accept:"text/html",dataType:"text"})},processors:n().values(t),getDataArray:function(e,t,s){return e&&e[k.Z.RESOURCE_LOOKUP]?e[k.Z.RESOURCE_LOOKUP]:[]},getDataSize:function(e,t,s){return+s.getResponseHeader("Total-Count")}}),this.resourcesListView=p.Z.use(I).use(R.Z,{i18n:c,attachTo:this.$el,contentTemplate:x}).use(S,{dfdRenderTo:this._dfdRenderSerachFormTo}).create().instance({type:"list",rootLevelHeight:n().bind(this._getContentHeight,this),itemsTemplate:Z,listItemHeight:22,selection:{allowed:!0,multiple:!1},rootless:!0,collapsed:!0,lazyLoad:!0,getDataUri:(0,$.Z)({getFolderUri:function(e){return"/root"===e?"":e},contextPath:P,recursive:!0,type:this.options.resourcesTypeToSelect,forceTotalCount:!0,forceFullPage:!0}),levelDataId:"uri",cache:{searchKey:"searchString",pageSize:100},processors:[t.cssClassItemProcessor,t.filterTempFolderProcessor],getDataArray:function(e,t,s){return e&&e[k.Z.RESOURCE_LOOKUP]?e[k.Z.RESOURCE_LOOKUP]:[]},getDataSize:function(e,t,s){return+s.getResponseHeader("Total-Count")}}),d.Z.prototype.constructor.call(this,{template:'<div class="jr-mDialog jr-uWidth-450px jr reportChooserDialog {{- additionalCssClasses }}" tabindex="-1">\n\n    <js-templateNonce></js-templateNonce>\n    <div class="jr-mDialog-header mover jr">\n        <h1 class="jr-mDialog-header-title jr">{{- title }}</h1>\n    </div>\n    <div class="sub header tabHeaderContainer"></div>\n    <div class="jr-mDialog-body jr subcontainer u-height-300px">\n    </div>\n    <p class="itemDescription"></p>\n    <div class="jr-mDialog-footer jr"></div>\n\n</div>\n',modal:!0,resizable:!0,minWidth:400,minHeight:400,additionalCssClasses:"sourceDialogNew"+(V?" listDisabled":""),title:e.title||c["Repository.ItemSelectDialog.dialogTitle"],traits:[C],tabHeaderContainerSelector:".tabHeaderContainer",tabContainerClass:"tabContainer control groupBox treeBox",optionTemplate:'<button class="button {{- additionalCssClasses }}{{ if (exposeAction) { }} {{- action}} {{ } }} up" title="{{ if(action === \'list\') { }} {{- i18n["Repository.ItemSelectDialog.listTabToolip"] }} {{ } else { }} {{- i18n["Repository.ItemSelectDialog.foldersTabToolip"] }} {{ } }}">\n\n    <js-templateNonce></js-templateNonce>\n    <span class="wrap">{{- label }}<span class="icon"></span></span>\n</button>',toggleClass:"down",tabs:[{label:c["Repository.ItemSelectDialog.foldersTab"],action:j,content:this.resourcesTreeView,exposeAction:!0,additionalCssClasses:"action square small",i18n:c},{label:c["Repository.ItemSelectDialog.listTab"],action:E,content:this.resourcesListView,exposeAction:!0,additionalCssClasses:"action square small",i18n:c}],buttons:[{label:c["Repository.ItemSelectDialog.okButton"],action:"apply",primary:!0},{label:c["Repository.ItemSelectDialog.cancelButton"],action:"cancel",primary:!1}]})},initialize:function(e){this.listenTo(this.resourcesTreeView,"selection:change",this._selectionListener),this.listenTo(this.resourcesTreeView,"levelRenderError",this._onLevelRenderError),this.listenTo(this.resourcesTreeView,"item:dblclick",this._onOkButtonClick),this.listenTo(this.resourcesListView,"selection:change",this._selectionListener),this.listenTo(this.resourcesListView,"levelRenderError",this._onLevelRenderError),this.listenTo(this.resourcesListView,"item:dblclick",this._onOkButtonClick),this.listenTo(this.resourcesListView.searchForm,"search",this._onSearch),this.listenTo(this.resourcesListView.searchForm,"clear",this._resetTreeAndList),this.listenTo(this,"button:apply",n().bind(this._onOkButtonClick,this)),this.listenTo(this,"button:cancel",n().bind(this._onCancelButtonClick,this)),this.listenTo(this,"tab:tree tab:list",this._tabChangedEvent),d.Z.prototype.initialize.apply(this,arguments),this._haveBeenOpened=!1,this._isOpened=!1,this.selectedResource=null,this._lastSelectedResource=null},events:{resize:"_onResize"},render:function(){return d.Z.prototype.render.apply(this,arguments),this._dfdRenderSerachFormTo.resolve(this.$tabHeaderContainer),this},open:function(){this._openDialog()},close:function(){this._closeDialog()},remove:function(){this._closeDialog(),this.resourcesTreeView.remove(),this.resourcesListView.remove(),d.Z.prototype.remove.apply(this,arguments)},setDefaultSelectedItem:function(e){this._defaultSelectedItem=e},_onOkButtonClick:function(){this.selectedResource&&(this._closeDialog(),this.trigger("item:select",this.selectedResource),this._lastSelectedResource=this.selectedResource)},_onCancelButtonClick:function(){this.selectedResource=null,this._lastSelectedResource&&(this.selectedResource=this._lastSelectedResource),this._closeDialog()},_openDialog:function(){if(!this._isOpened){var e=this;this._resizableContainerShiftHeight=6-(V?40:0),!1===this._haveBeenOpened?(this._initialDialogWidth=this.$el.css("width"),this._initialDialogHeight=this.$el.css("height"),this._haveBeenOpened=!0):this.$el.css({width:this._initialDialogWidth,height:this._initialDialogHeight}),d.Z.prototype.open.apply(this,arguments);var t=n().bind((function(){this.$contentContainer.find(".tabContainer").css({height:"inherit","overflow-y":"auto"})}),this);L.Z.isIE8()||L.Z.isIE9()?setTimeout(t,1):t(),this.$el.children().not(".subcontainer").not(".ui-resizable-e").not(".ui-resizable-se").each((function(){e._resizableContainerShiftHeight+=e.$(this).outerHeight(!0)})),this.$contentContainer.height(this.$el.height()-this._resizableContainerShiftHeight),this.resourcesListView.searchForm.clearSilently(),this._resetTreeAndList(),this.disableButton("apply"),this.resourcesTreeView._onceVisible=new(r().Deferred),this.resourcesListView._onceVisible=new(r().Deferred),this._preselectItem(),this._openTab(V?j:E),this._isOpened=!0}},_closeDialog:function(){this._isOpened&&(this.resourcesTreeView._onceVisible.reject(),this.resourcesListView._onceVisible.reject(),d.Z.prototype.close.apply(this,arguments),this._isOpened=!1)},_selectionListener:function(e){var t=Object.keys(e),s=e&&(n().isArray(e)||n().isObject(e))&&e[t[0]],i=s?s.uri:void 0,o=s?s.resourceType:void 0,r=s?s.label:void 0;return s?(o===k.Z.FOLDER?this.$(".itemDescription").empty():this.$(".itemDescription").text(s.description||""),n().contains(n().union([k.Z.FOLDER]),o)?(this.selectedResource=null,void this.disableButton("apply")):(this.selectedResource={resourceUri:i,resourceType:o,resourceLabel:r,event:this._getAdHocFlowEvent(o)},void this.enableButton("apply"))):(this.disableButton("apply"),void this.$(".itemDescription").empty())},_resetTreeAndList:function(){this.resourcesTreeView.collapse("/root",{silent:!0}),this.resourcesTreeView.collapse("/public",{silent:!0}),this.resourcesTreeView.resetSelection(),this.resourcesListView.resetSelection(),this.$(".itemDescription").empty()},_preselectItem:function(){var e=!1;if(this._lastSelectedResource?e=this._lastSelectedResource.resourceUri:this._defaultSelectedItem&&(e=this._defaultSelectedItem),e){var t=this.resourcesTreeView.$el.parent();this.resourcesTreeView._onceVisible.done(n().bind((function(){this.resourcesTreeView._selectTreeNode(e,t)}),this))}},_onResize:function(){this.$contentContainer.height(this.$el.height()-this._resizableContainerShiftHeight),this.resourcesListView.rootLevel.list.$el.height(this.$el.height()-this._resizableContainerShiftHeight-6),this.resourcesTreeView.rootLevel.list.$el.css("height","100%")},_getContentHeight:function(){return this.$el.height()-this._resizableContainerShiftHeight-6},_onSearch:function(){this._openTab(E),this.disableButton("apply")},_tabChangedEvent:function(){this.selectedTab===j?this.resourcesTreeView._onceVisible.resolve():this.selectedTab===E&&this.resourcesListView._onceVisible.resolve()},_openTab:function(e){this.openTab.apply(this,arguments)},_getAdHocFlowEvent:function(e){var t="";return e==k.Z.REPORT_UNIT||e==k.Z.DOMAIN_TOPIC?t="startAdHocWithTopic":e==k.Z.SEMANTIC_LAYER_DATA_SOURCE&&(t="startQueryBuilder"),t},_getErrorDialog:function(){return this.errorDialog?this.errorDialog:this.errorDialog=new u.Z},_onLevelRenderError:function(e,t,s){t=JSON.parse(t);var i=this._getErrorDialog();i.setMessage(t.parameters[0].substring(t.parameters[0].indexOf(": ")+2,t.parameters[0].indexOf("\n"))),i.open(),s.$el.removeClass(s.loadingClass).addClass(s.openClass)}});var A=s(86937);const N=d.Z.extend({constructor:function(e){e||(e={});var t="selectFolder";e.additionalCssClasses&&(t+=" "+e.additionalCssClasses),this.foldersTree=(0,A.Z)({processors:["folderTreeProcessor","treeNodeProcessor","i18nItemProcessor","filterPublicFolderProcessor","cssClassItemProcessor","fakeUriProcessor"],treeBufferSize:e.treeBufferSize,types:[k.Z.FOLDER],tooltipOptions:{}}),d.Z.prototype.constructor.call(this,{modal:!0,resizable:!0,minWidth:400,minHeight:400,setMinSizeAsSize:e.setMinSizeAsSize,additionalCssClasses:t,title:c["repository.content"],content:n().template('<div class="control groupBox treeBox">\n\n    <js-templateNonce></js-templateNonce>\n\t<div class="content">\n\t\t<div class="header ">\n\t\t\t<div class="title"></div>\n\t\t</div>\n\t\t<div class="body"></div>\n\t</div>\n</div>')({i18n:c}),buttons:[{label:c["button.select"],action:"select",primary:!0},{label:c["button.cancel"],action:"cancel",primary:!1}]}),this.$contentContainer.find(".control.groupBox .body").append(this.foldersTree.render().el)},initialize:function(e){this.listenTo(this.foldersTree,"selection:change",this._selectionListener),this.listenTo(this,"button:select",this._onOkButtonClick),this.listenTo(this,"button:cancel",this._onCancelButtonClick),d.Z.prototype.initialize.apply(this,arguments),this._isOpened=!1,this.selectedResource=null,this._lastSelectedResource=null},open:function(){this._openDialog()},close:function(){this._closeDialog()},remove:function(){this._closeDialog(),this.foldersTree.remove(),d.Z.prototype.remove.apply(this,arguments)},setDefaultSelectedItem:function(e){this._defaultSelectedItem=e},_onOkButtonClick:function(){this.selectedResource&&(this._closeDialog(),this._lastSelectedResource=this.selectedResource)},_onCancelButtonClick:function(){this.selectedResource=null,this._lastSelectedResource&&(this.selectedResource=this._lastSelectedResource),this._closeDialog()},_openDialog:function(){this._isOpened||(d.Z.prototype.open.apply(this,arguments),this._resetTree(),this.disableButton("select"),this._preselectItem(),this._isOpened=!0)},_closeDialog:function(){this._isOpened&&(d.Z.prototype.close.apply(this,arguments),this._isOpened=!1)},_onDialogResize:function(){var e=this.$contentContainer.find(".treeBox > .content > .body"),t=this.$contentContainer.closest(".jr-mDialog > .jr-mDialog-body");e.width(t.outerWidth(!0)-55),e.height(t.outerHeight(!0)-50)},_selectionListener:function(e){var t=Object.keys(e),s=e&&(n().isArray(e)||n().isObject(e))&&e[t[0]],i=s?s.uri:void 0;s?(this.selectedResource={resourceUri:i},this.enableButton("select")):this.disableButton("select")},_resetTree:function(){this.foldersTree.collapse("/root",{silent:!0}),this.foldersTree.collapse("/public",{silent:!0}),this.foldersTree.resetSelection()},_preselectItem:function(){var e=!1;if(this._lastSelectedResource?e=this._lastSelectedResource.resourceUri:this._defaultSelectedItem&&(e=this._defaultSelectedItem),e){var t=this.foldersTree.$el.parent();this.foldersTree._selectTreeNode(e,t)}}});var U={item:F,folder:N};const M={getDialog:function(e){var t;return t=F,U[e]&&(t=U[e]),t}}}}]);
//# sourceMappingURL=chunk.4339.js.map