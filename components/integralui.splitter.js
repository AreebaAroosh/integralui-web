/*
  filename: integralui.splitter.js
  version : 0.7.239 BETA
  Copyright © 2017 Lidor Systems. All rights reserved.

  This file is part of the "IntegralUI Web" Library. 
                                                                   
  The contents of this file are subject to the IntegralUI Web License, and may not be used except in compliance with the License.
  A copy of the License should have been installed in the product's root installation directory or it can be found at
  http://www.lidorsystems.com/products/web/iui-web-license-agreement.pdf.
                                                            
  This SOFTWARE is provided "AS IS", WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License for the specific language 
  governing rights and limitations under the License. Any infringement will be prosecuted under applicable laws.                           
*/
var __extends=this&&this.__extends||function(e,b){function a(){this.constructor=e}for(var d in b)b.hasOwnProperty(d)&&(e[d]=b[d]);e.prototype=null===b?Object.create(b):(a.prototype=b.prototype,new a)},__decorate=this&&this.__decorate||function(e,b,a,d){var c=arguments.length,f=3>c?b:null===d?d=Object.getOwnPropertyDescriptor(b,a):d,g;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)f=Reflect.decorate(e,b,a,d);else for(var h=e.length-1;0<=h;h--)if(g=e[h])f=(3>c?g(f):3<c?g(b,a,f):
g(b,a))||f;return 3<c&&f&&Object.defineProperty(b,a,f),f},__metadata=this&&this.__metadata||function(e,b){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(e,b)},core_1=require("@angular/core"),integralui_core_1=require("./integralui.core"),integralui_common_service_1=require("../services/integralui.common.service"),IntegralUISplitter=function(e){function b(a,b,c){e.call(this,c);this.elemRef=a;this.elemRenderer=b;this.commonService=c;this.clientSize={width:0,
height:0};this.currentSplitterDistance=0;this.maxPos={x:0,y:0};this.panel1Size={width:0,height:0};this.panel2Size={width:0,height:0};this.splitterSize={width:0,height:0};this.splitterHandleSize={width:0,height:0};this.handleClass=[];this.orientation=integralui_core_1.IntegralUIOrientation.Vertical;this.orientationChanged=new core_1.EventEmitter;this.splitterMoved=new core_1.EventEmitter;this.splitterMoving=new core_1.EventEmitter;this.splitterStartPos={x:0,y:0};this.isSplitterActive=!1}__extends(b,
e);Object.defineProperty(b.prototype,"splitterDistance",{get:function(){return this.currentSplitterDistance},set:function(a){this.currentSplitterDistance!=a&&(this.currentSplitterDistance=a,this.splitterMoved.emit({value:a}),this.updateLayout())},enumerable:!0,configurable:!0});b.prototype.ngOnInit=function(){this.generalClassName="iui-splitter";this.handleClassName=this.generalClassName+"-handle";this.initStyle()};b.prototype.initStyle=function(){this.defaultStyle={general:{disabled:this.generalClassName+
"-disabled",focused:this.generalClassName+"-focused",normal:this.generalClassName,hovered:this.generalClassName+"-hovered",selected:this.generalClassName+"-selected"},handle:{general:this.handleClassName,horizontal:this.handleClassName+"-horizontal",vertical:this.handleClassName+"-vertical"}};this.updateStyle(this.controlStyle);this.updateControlClass();this.updateHandleClass()};b.prototype.ngAfterViewInit=function(){};b.prototype.ngAfterContentInit=function(){var a=this,b=setTimeout(function(){var c;
a.clientSize={width:a.elemRef.nativeElement.parentElement.clientWidth,height:a.elemRef.nativeElement.parentElement.clientHeight};a.panel1&&a.panel1.nativeElement&&(c=a.commonService.getBorderWidth(a.panel1.nativeElement),a.panel1Size={width:a.panel1.nativeElement.offsetWidth+c.left+c.right,height:a.panel1.nativeElement.offsetHeight+c.top+c.bottom});a.panel2&&a.panel2.nativeElement&&(c=a.commonService.getBorderWidth(a.panel2.nativeElement),a.panel2Size={width:a.panel2.nativeElement.offsetWidth+c.left+
c.right,height:a.panel2.nativeElement.offsetHeight+c.top+c.bottom});a.splitterHandleSize={width:a.handleElem.nativeElement.offsetWidth,height:a.handleElem.nativeElement.offsetHeight};a.splitterSize=a.orientation==integralui_core_1.IntegralUIOrientation.Vertical?{width:a.splitterHandleSize.width,height:a.clientSize.height}:{width:a.clientSize.width,height:a.splitterHandleSize.height};a.maxPos={x:a.panel1Size.width+a.panel2Size.width+5,y:a.panel1Size.height+a.panel2Size.height+5};0==a.currentSplitterDistance&&
(a.currentSplitterDistance=a.orientation==integralui_core_1.IntegralUIOrientation.Vertical?a.panel1Size.width:a.panel1Size.height);a.updateLayout();clearTimeout(b)},1)};b.prototype.ngAfterContentChecked=function(){this.clientSize={width:this.elemRef.nativeElement.parentElement.clientWidth,height:this.elemRef.nativeElement.parentElement.clientHeight};this.splitterSize=this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?{width:this.splitterHandleSize.width,height:this.clientSize.height}:
{width:this.clientSize.width,height:this.splitterHandleSize.height}};b.prototype.calcSplitterDistance=function(a,b){var c=this.currentSplitterDistance;this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?(a&&b&&(c+=b.x-a.x),c=Math.min(Math.max(0,c),this.maxPos.x),this.panel1Size.width=c,this.panel2Size.width=this.maxPos.x-c-this.splitterHandleSize.width):(a&&b&&(c+=b.y-a.y),c=Math.min(Math.max(0,c),this.maxPos.y),this.panel1Size.height=c,this.panel2Size.height=this.maxPos.y-c-this.splitterHandleSize.height);
if(this.currentSplitterDistance!=c){var d={cancel:!1,value:c};this.splitterMoving.emit(d);1!=d.cancel&&(this.currentSplitterDistance=c)}};b.prototype.updateLayout=function(a,b){var c=this;if(c.panel1&&c.panel2)var d=setTimeout(function(){c.calcSplitterDistance(a,b);c.orientation==integralui_core_1.IntegralUIOrientation.Vertical?(c.elemRenderer.setElementStyle(c.panel1.nativeElement,"width",c.panel1Size.width+"px"),c.elemRenderer.setElementStyle(c.panel2.nativeElement,"width",c.panel2Size.width+"px")):
(c.elemRenderer.setElementStyle(c.panel1.nativeElement,"height",c.panel1Size.height+"px"),c.elemRenderer.setElementStyle(c.panel2.nativeElement,"height",c.panel2Size.height+"px"));clearTimeout(d)},10)};b.prototype.splitterMouseDown=function(a){var b=this.commonService.getShiftPos();this.splitterStartPos={x:a.pageX-b.x,y:a.pageY-b.y};this.isSplitterActive=!0};b.prototype.onWindowMouseMove=function(a){if(1==a.buttons&&this.isSplitterActive){var b=this.commonService.getShiftPos();a={x:a.pageX-b.x,y:a.pageY-
b.y};this.updateLayout(this.splitterStartPos,a);this.splitterStartPos=a}};b.prototype.onWindowMouseUp=function(a){this.isSplitterActive=!1;this.splitterMoved.emit({value:this.currentSplitterDistance})};b.prototype.getSplitterStyle=function(){var a={cursor:"ew-resize",width:"auto",height:"auto"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?a.height=this.splitterSize.height-2+"px":(a.cursor="ns-resize",a.width=this.splitterSize.width-2+"px");return a};b.prototype.getSplitterHandleStyle=
function(){var a={"margin-top":"0","margin-left":"0"};this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?a["margin-top"]=(this.clientSize.height-this.splitterHandleSize.height)/2+"px":a["margin-left"]=(this.clientSize.width-this.splitterHandleSize.width)/2+"px";return a};b.prototype.updateHandleClass=function(){this.handleClass.length=0;this.handleClass.push(this.handleClassName);this.handleClass.push(this.options.currentStyle.handle.general);this.orientation==integralui_core_1.IntegralUIOrientation.Vertical?
this.handleClass.push(this.options.currentStyle.handle.vertical):this.handleClass.push(this.options.currentStyle.handle.horizontal)};b.prototype.getHandleClass=function(){return this.handleClass};b.prototype.getHandleStyle=function(a){return this.commonService.isString(a)?a:a?{general:this.commonService.isFieldAvailable(a.general,this.handleClassName),horizontal:this.commonService.isFieldAvailable(a.horizontal,this.handleClassName+"-horizontal"),vertical:this.commonService.isFieldAvailable(a.vertical,
this.handleClassName+"-vertical")}:{general:this.defaultStyle.handle.general,horizontal:this.defaultStyle.handle.horizontal,vertical:this.defaultStyle.handle.vertical}};b.prototype.updateStyle=function(a){this.options.currentStyle=a?{general:this.getGeneralStyle(a.general),handle:this.getHandleStyle(a.handle)}:{general:{disabled:this.defaultStyle.general.disabled,focused:this.defaultStyle.general.focused,hovered:this.defaultStyle.general.hovered,normal:this.defaultStyle.general.normal,selected:this.defaultStyle.general.selected},
handle:{general:this.defaultStyle.handle.general,horizontal:this.defaultStyle.handle.horizontal,vertical:this.defaultStyle.handle.vertical}}};__decorate([core_1.ViewChild("handle"),__metadata("design:type",core_1.ElementRef)],b.prototype,"handleElem",void 0);__decorate([core_1.Input(),__metadata("design:type",Number)],b.prototype,"orientation",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],b.prototype,"panel1",void 0);__decorate([core_1.Input(),__metadata("design:type",Object)],
b.prototype,"panel2",void 0);__decorate([core_1.Input(),__metadata("design:type",Number),__metadata("design:paramtypes",[Number])],b.prototype,"splitterDistance",null);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"orientationChanged",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"splitterMoved",void 0);__decorate([core_1.Output(),__metadata("design:type",core_1.EventEmitter)],b.prototype,"splitterMoving",void 0);
__decorate([core_1.HostListener("document:mousemove",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],b.prototype,"onWindowMouseMove",null);__decorate([core_1.HostListener("document:mouseup",["$event"]),__metadata("design:type",Function),__metadata("design:paramtypes",[Object]),__metadata("design:returntype",void 0)],b.prototype,"onWindowMouseUp",null);return b=__decorate([core_1.Component({moduleId:module.id,selector:"iui-splitter",
template:'\n\t\t\x3c!-- <div class="iui-splitter" align="center" style="background:#f5f5f5;border2:thin solid #ababab;" (mousedown)="splitterMouseDown($event)">\n\t\t\t<div style="background:#c5c5c5;width:50px;height:5px"></div>\n\t\t</div> --\x3e\n\t\t<div [ngClass]="getControlClass()" (mousedown)="splitterMouseDown($event)" [ngStyle]="getSplitterStyle()">\n\t\t\t<span #handle [ngClass]="getHandleClass()" [ngStyle]="getSplitterHandleStyle()"></span>\n\t\t</div>\n\t',styleUrls:["css/integralui.splitter.css"],
inputs:["controlStyle","data","state"],encapsulation:core_1.ViewEncapsulation.None}),__metadata("design:paramtypes",[core_1.ElementRef,core_1.Renderer,integralui_common_service_1.IntegralUICommonService])],b)}(integralui_core_1.IntegralUIBaseComponent);exports.IntegralUISplitter=IntegralUISplitter;