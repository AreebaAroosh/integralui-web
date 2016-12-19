/*
  filename: integralui.listbox.js
  version : 0.5.0 BETA
  Copyright © 2016 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(d,a){function b(){this.constructor=d}for(var c in a)a.hasOwnProperty(c)&&(d[c]=a[c]);d.prototype=null===a?Object.create(a):(b.prototype=a.prototype,new b)},__decorate=this&&this.__decorate||function(d,a,b,c){var f=arguments.length,e=3>f?a:null===c?c=Object.getOwnPropertyDescriptor(a,b):c,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)e=Reflect.decorate(d,a,b,c);else for(var h=d.length-1;0<=h;h--)if(g=d[h])e=(3>f?g(e):3<f?g(a,b,e):
g(a,b))||e;return 3<f&&e&&Object.defineProperty(a,b,e),e},__metadata=this&&this.__metadata||function(d,a){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(d,a)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),integralui_data_service_1=require("../services/integralui.data.service"),integralui_dragdrop_service_1=require("../services/integralui.dragdrop.service"),
integralui_list_1=require("./integralui.list"),integralui_listitem_1=require("./integralui.listitem"),IntegralUIListBox=function(d){function a(b,a,f,e,g,h,k){d.call(this,b,a,f,e,g);this.dataService=b;this.dragDropService=a;this.elemRef=f;this.elemRenderer=e;this.commonService=g;this.cmpResolver=h;this.baseService=k;this.trialRef=null;this.itemList=[]}__extends(a,d);a.prototype.ngOnInit=function(){this.baseService.setComponent(this);this.dataService.init(this.items);this.updateCurrentList();this.generalClassName=
"iui-listbox";this.initStyle()};a.prototype.ngAfterViewInit=function(){var b=this,a=setTimeout(function(){var c=b.cmpResolver.resolveComponentFactory(integralui_core_1.IntegralUITComponent);c&&b.contentRef&&(b.trialRef=b.contentRef.createComponent(c));clearTimeout(a)},100)};a.prototype.ngAfterContentInit=function(){this.itemList=this.contentList.toArray();this.updateLayout()};a.prototype.ngOnDestroy=function(){this.trialRef&&this.trialRef.destroy()};a.prototype.addItem=function(a){this.callEventAdd("add",
a)};a.prototype.clearItems=function(){this.dataService.clear();this.clear.emit(null)};a.prototype.insertItemAt=function(a,c){this.callEventAdd("at",a,c)};a.prototype.removeItemAt=function(a){return this.callEventRemove(null,a)};a.prototype.updateCurrentList=function(){var a=this;a.currentList.length=0;var c=a.dataService.getList();c&&c.forEach(function(b){return a.addItemToCurrentList(b)})};a.prototype.addItemToCurrentList=function(a){a.type="item";a[this.options.dataFields.id]||(a[this.options.dataFields.id]=
this.commonService.getUniqueId());this.currentList.push(a)};a.prototype.getItemFromComponent=function(a){return a&&a.data?a.data:this.items&&(this.itemList=this.contentList.toArray(),a=this.itemList.indexOf(a),0<=a&&a<this.items.length)?this.items[a]:null};a.prototype.getContentSize=function(){return this.contentElem?{width:this.contentElem.nativeElement.offsetWidth,height:this.contentElem.nativeElement.offsetHeight}:{width:0,height:0}};a.prototype.updateLayout=function(){this.updateCurrentList()};
__decorate([core_1.ContentChildren(integralui_listitem_1.IntegralUIListItem),__metadata("design:type",core_1.QueryList)],a.prototype,"contentList",void 0);__decorate([core_1.ViewChild("content",{read:core_1.ViewContainerRef}),__metadata("design:type",core_1.ViewContainerRef)],a.prototype,"contentRef",void 0);__decorate([core_1.ViewChild("content",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],a.prototype,"contentElem",void 0);return a=__decorate([core_1.Component({moduleId:module.id,
selector:"iui-listbox",template:'\n\t\t<div [ngClass]="getControlClass()" (mouseenter)="onCtrlMouseEnter($event)" (mouseleave)="onCtrlMouseLeave($event)" (dragleave)="ctrlDragLeave($event)" (dragover)="ctrlDragOver($event)" (drop)="ctrlDragDrop($event)">\n\t\t\t<div #content>\n\t\t\t\t<ng-content></ng-content>\n\t\t\t</div>\n\t\t</div>\n\t',styleUrls:["css/integralui.listbox.css"],inputs:"appRef controlStyle data items selectedItem selectionMode state".split(" "),outputs:"afterSelect beforeSelect clear dragDrop dragOver itemAdding itemAdded itemRemoving itemRemoved selectionChanged".split(" "),
providers:[integralui_core_1.IntegralUIBaseService,integralui_data_service_1.IntegralUIDataService]}),__metadata("design:paramtypes",[integralui_data_service_1.IntegralUIDataService,integralui_dragdrop_service_1.IntegralUIDragDropService,core_1.ElementRef,core_1.Renderer,integralui_common_service_1.IntegralUICommonService,core_1.ComponentFactoryResolver,integralui_core_1.IntegralUIBaseService])],a)}(integralui_list_1.IntegralUIList);exports.IntegralUIListBox=IntegralUIListBox;