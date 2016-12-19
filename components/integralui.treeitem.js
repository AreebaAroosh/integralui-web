/*
  filename: integralui.treeitem.js
  version : 0.5.0 BETA
  Copyright © 2016 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(e,b){function a(){this.constructor=e}for(var f in b)b.hasOwnProperty(f)&&(e[f]=b[f]);e.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(e,b,a,f){var c=arguments.length,d=3>c?b:null===f?f=Object.getOwnPropertyDescriptor(b,a):f,h;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)d=Reflect.decorate(e,b,a,f);else for(var g=e.length-1;0<=g;g--)if(h=e[g])d=(3>c?h(d):3<c?h(b,a,d):
h(b,a))||d;return 3<c&&d&&Object.defineProperty(b,a,d),d},__metadata=this&&this.__metadata||function(e,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_listitem_1=require("./integralui.listitem"),IntegralUITreeItem=
function(e){function b(a,b,c,d){e.call(this,a,c,d);this.elemRef=a;this.dataService=b;this.commonService=c;this.baseService=d;this.contentAnimation={display:"none",left:0,width:0,height:0};this.numItems=0;this.templateData=[];this.expandState="none";this.blockElemHeight="0";this.eventList=[];this.parentItem=null;this.blockClass=[];this.expandBoxClass=[]}__extends(b,e);Object.defineProperty(b.prototype,"expanded",{get:function(){return this.isExpanded},set:function(a){this.isExpanded!=a&&(this.expandState=
a?"expand":"collapse",this.isExpanded=a,this.parentCtrl&&this.parentCtrl.invokeMethod("CHANGE_EXPANDED",{component:this}),this.updateBlockClass(),this.updateExpandBoxClass(),this.toggleContent())},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.templateData.push(this.data);this.parentCtrl=this.baseService.getComponent();this.dataService.init(this.items);this.isExpanded=this.parentCtrl?this.parentCtrl.isItemExpanded(this.data):!0;this.blockElemHeight="0";this.generalClassName=
"iui-treeitem";this.blockClassName=this.generalClassName+"-block";this.contentClassName=this.generalClassName+"-content";this.expandBoxClassName=this.generalClassName+"-expand-box";this.initStyle()};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},expandBox:{general:this.expandBoxClassName,
animated:this.expandBoxClassName+"-load",expanded:this.expandBoxClassName+"-open",collapsed:this.expandBoxClassName+"-close"},content:{disabled:this.contentClassName+"-disabled",focused:this.contentClassName+"-focused",normal:this.contentClassName,hovered:this.contentClassName+"-hovered",selected:this.contentClassName+"-selected"}};this.updateStyle(this.controlStyle);this.refresh()};b.prototype.ngAfterViewInit=function(){this.contentElem&&(this.contentAnimation={display:"none",left:this.contentElem.nativeElement.offsetWidth/
2,width:0,height:this.contentElem.nativeElement.offsetHeight},this.toggleContent())};b.prototype.ngAfterContentChecked=function(){this.contentList&&(this.itemList=this.contentList.toArray(),this.numItems!=this.itemList.length&&(this.numItems=this.itemList.length,this.refresh()))};b.prototype.itemDragDrop=function(a){if(this.parentCtrl){this.parentCtrl.processDragDrop(a,this.data);var b=this;if(b.expanded&&"0"==b.blockElemHeight)var c=setTimeout(function(){b.toggleContent();clearTimeout(c)},100)}a.stopPropagation()};
b.prototype.collapse=function(){this.expanded=!1};b.prototype.expand=function(){this.expanded=!0};b.prototype.toggle=function(){this.expanded=!this.expanded};b.prototype.onExpandBoxMouseDown=function(a){this.toggle()};b.prototype.toggleContent=function(){var a=this;if(a.items){var b=a.contentElem.nativeElement.offsetHeight*a.items.length,c=0,d=0;if(a.expanded)var e=setInterval(function(){c<b?(d=0==d?1:d+2,c+=d,a.blockElemHeight=c+"px"):(a.blockElemHeight="auto",a.expandState="none",a.updateExpandBoxClass(),
a.parentCtrl&&a.parentCtrl.updateLayout(),clearInterval(e))},25);else var c=a.blockElem.nativeElement.offsetHeight,g=setInterval(function(){0<c?(d=0==d?1:d+2,c-=d,a.blockElemHeight=c+"px"):(a.blockElemHeight="0",a.expandState="none",a.updateExpandBoxClass(),a.parentCtrl&&a.parentCtrl.updateLayout(),clearInterval(g))},25)}};b.prototype.getComponentFromItem=function(a){var b=null;if((this.itemList=this.contentList.toArray())&&0<this.itemList.length)for(var c=0;!b&&c<this.itemList.length;){b=this.itemList[c];
if(this.getItemFromComponent(b)==a)break;else b=b.getComponentFromItem(a);c++}return b};b.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};b.prototype.clearComponentSelection=function(){(this.itemList=this.contentList.toArray())&&0<this.itemList.length&&this.itemList.forEach(function(a){a.state&=~integralui_core_1.IntegralUIObjectState.selected;a.clearComponentSelection()})};
b.prototype.selectItem=function(){this.parentCtrl&&this.parentCtrl.clearSelection();this.state|=integralui_core_1.IntegralUIObjectState.selected};b.prototype.refresh=function(){this.updateControlClass();this.updateContentClass();this.updateBlockClass();this.updateExpandBoxClass()};b.prototype.updateBlockClass=function(){this.blockClass.length=0;this.blockClass.push(this.blockClassName);this.items&&0<this.items.length&&(0!=this.expanded?this.blockClass.push(this.blockClassName+"-open"):this.blockClass.push(this.blockClassName+
"-close"))};b.prototype.getBlockClass=function(){return this.blockClass};b.prototype.getGeneralClass=function(){return this.generalClassName};b.prototype.updateExpandBoxClass=function(){this.expandBoxClass.length=0;this.options.currentStyle&&(this.parentCtrl&&this.parentCtrl.isThereChildren()&&this.expandBoxClass.push(this.options.currentStyle.expandBox.general),this.items&&0<this.items.length&&(0!=this.expanded?"none"==this.expandState?this.expandBoxClass.push(this.options.currentStyle.expandBox.expanded):
"expand"==this.expandState&&this.expandBoxClass.push(this.options.currentStyle.expandBox.expanded+"-animate"):"none"==this.expandState?this.expandBoxClass.push(this.options.currentStyle.expandBox.collapsed):"collapse"==this.expandState&&this.expandBoxClass.push(this.options.currentStyle.expandBox.collapsed+"-animate")))};b.prototype.getExpandBoxClass=function(){return this.expandBoxClass};b.prototype.getExpandBoxStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,
this.expandBoxClassName),animated:this.commonService.isFieldAvailable(a.animated,this.expandBoxClassName+"-load"),expanded:this.commonService.isFieldAvailable(a.expanded,this.expandBoxClassName+"-open"),collapsed:this.commonService.isFieldAvailable(a.collapsed,this.expandBoxClassName+"-close")}:{general:this.defaultStyle.expandBox.general,animated:this.defaultStyle.expandBox.animated,expanded:this.defaultStyle.expandBox.expanded,collapsed:this.defaultStyle.expandBox.collapsed}};b.prototype.updateStyle=
function(a){this.options.currentStyle=a?{content:this.getContentStyle(a.content),expandBox:this.getExpandBoxStyle(a.expandBox),general:this.getGeneralStyle(a.general)}:{content:{disabled:this.defaultStyle.content.disabled,focused:this.defaultStyle.content.focused,hovered:this.defaultStyle.content.hovered,normal:this.defaultStyle.content.normal,selected:this.defaultStyle.content.selected},expandBox:{general:this.defaultStyle.expandBox.general,animated:this.defaultStyle.expandBox.animated,expanded:this.defaultStyle.expandBox.expanded,
collapsed:this.defaultStyle.expandBox.collapsed},general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected}}};__decorate([core_1.ViewChild("content",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],b.prototype,"contentElem",void 0);__decorate([core_1.ViewChild("dragElem",{read:core_1.ElementRef}),__metadata("design:type",
core_1.ElementRef)],b.prototype,"dragElem",void 0);__decorate([core_1.ViewChild("block",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],b.prototype,"blockElem",void 0);__decorate([core_1.ViewChildren(b),__metadata("design:type",core_1.QueryList)],b.prototype,"contentList",void 0);__decorate([core_1.Input(),__metadata("design:type",Array)],b.prototype,"items",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],b.prototype,"templateRef",void 0);__decorate([core_1.Input(),
__metadata("design:type",Boolean),__metadata("design:paramtypes",[Boolean])],b.prototype,"expanded",null);return b=__decorate([core_1.Component({moduleId:module.id,selector:"iui-treeitem",templateUrl:"templates/integralui.treeitem.html",styleUrls:["css/integralui.treeitem.css"],inputs:["controlStyle","data","icon","state","text"],outputs:"click mouseDown mouseEnter mouseLeave mouseMove mouseUp".split(" "),providers:[integralui_data_service_1.IntegralUIDataService],encapsulation:core_1.ViewEncapsulation.None}),
__metadata("design:paramtypes",[core_1.ElementRef,integralui_data_service_1.IntegralUIDataService,integralui_common_service_1.IntegralUICommonService,integralui_core_1.IntegralUIBaseService])],b)}(integralui_listitem_1.IntegralUIListItem);exports.IntegralUITreeItem=IntegralUITreeItem;