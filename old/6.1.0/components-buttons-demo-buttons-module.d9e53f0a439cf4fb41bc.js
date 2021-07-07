(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+g3H":function(e,t,n){"use strict";n.r(t),t.default='<pre class="card card-block card-header">{{ myForm.value | json }}</pre>\n<form [formGroup]="myForm" class="form-inline">\n  <div class="form-group">\n    <div class="btn-group" btnRadioGroup formControlName="radio">\n      <label btnRadio="A" class="btn btn-primary">A</label>\n      <label btnRadio="B" class="btn btn-primary">B</label>\n      <label btnRadio="C" class="btn btn-primary">C</label>\n    </div>\n    <button class="btn btn-primary" (click)="myForm.disabled ? myForm.enable() : myForm.disable()">Enable/Disable</button>\n  </div>\n\n</form>\n'},"+yoE":function(e,t,n){"use strict";n.r(t),t.default="import { Component, OnInit } from '@angular/core';\nimport { FormBuilder, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'demo-buttons-radio-reactiveforms',\n  templateUrl: './radio-reactiveforms.html'\n})\nexport class DemoButtonsRadioReactiveFormsComponent implements OnInit {\n  myForm: FormGroup;\n\n  constructor(private formBuilder: FormBuilder) {}\n\n  ngOnInit() {\n    this.myForm = this.formBuilder.group({\n      radio: 'C'\n    });\n  }\n}\n"},"/mGz":function(e,t,n){"use strict";n.r(t),t.default='<pre class="card card-block card-header">{{radioModel || \'null\'}}</pre>\n<div class="form-inline">\n  <div class="btn-group" btnRadioGroup [(ngModel)]="radioModel" [disabled]="modelGroupDisabled">\n    <label class="btn btn-success" btnRadio="Left">Left</label>\n    <label class="btn btn-success" btnRadio="Middle">Middle</label>\n    <label class="btn btn-success" btnRadio="Another" [disabled]="true">Disabled</label>\n    <label class="btn btn-success" btnRadio="Right">Right</label>\n  </div>\n  <button class="btn btn-warning" (click)="modelGroupDisabled = !modelGroupDisabled">Enable/Disable</button>\n</div>\n\n\n<pre class="card card-block card-header">{{radioModelDisabled || \'null\'}}</pre>\n<div class="form-inline">\n  <div class="btn-group" btnRadioGroup [(ngModel)]="radioModelDisabled" disabled>\n    <label class="btn btn-success" btnRadio="Left">Left</label>\n    <label class="btn btn-success" btnRadio="Middle">Middle</label>\n    <label class="btn btn-success" btnRadio="Right">Right</label>\n  </div>\n</div>\n'},"1BST":function(e,t,n){"use strict";n.r(t),t.default='<button type="button" class="btn btn-primary" [disabled]="disabled">Button</button>\n<button type="button" class="btn btn-warning" (click)="disabled = !disabled">Enable/Disable</button>\n\n'},"6/7U":function(e,t,n){"use strict";n.r(t),t.default='<pre class="card card-block card-header">{{uncheckableRadioModel || \'null\'}}</pre>\n<div class="btn-group" btnRadioGroup [(ngModel)]="uncheckableRadioModel">\n  <label class="btn btn-info" btnRadio="Left"\n         uncheckable tabindex="0" role="button">Left</label>\n  <label class="btn btn-info" btnRadio="Middle"\n         uncheckable tabindex="0" role="button">Middle</label>\n  <label class="btn btn-info" btnRadio="Right"\n         uncheckable tabindex="0" role="button">Right</label>\n</div>\n'},"7DLv":function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-custom-checkbox-value',\n  templateUrl: './custom-checkbox-value.html'\n})\nexport class DemoButtonsCustomCheckboxValueComponent {\n  singleModel = '1';\n}\n"},"7Wf+":function(e,t,n){"use strict";n.r(t),t.default='<pre class="card card-block card-header">{{singleModel}}</pre>\n<button type="button" class="btn btn-primary"\n        [(ngModel)]="singleModel" btnCheckbox\n        btnCheckboxTrue="1" btnCheckboxFalse="0">\n  Single Toggle\n</button>\n'},Bsqq:function(e,t,n){"use strict";n.r(t),t.default="import { ChangeDetectionStrategy, Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-radio-with-group',\n  templateUrl: './radio-with-group.html'\n})\nexport class DemoButtonsRadioWithGroupComponent {\n  radioModel = 'Middle';\n  radioModelDisabled = 'Middle';\n  modelGroupDisabled=false\n}\n"},EKQK:function(e,t,n){"use strict";n.r(t),t.default='<pre class="card card-block card-header">{{myForm.value | json}}</pre>\n<form [formGroup]="myForm">\n  <div class="btn-group">\n    <label class="btn btn-primary" [class.active]="myForm.value.left"\n           btnCheckbox formControlName="left"\n           tabindex="0" role="button">Left</label>\n    <label class="btn btn-primary" [class.active]="myForm.value.middle"\n           btnCheckbox formControlName="middle"\n           tabindex="0" role="button">Middle</label>\n    <label class="btn btn-primary" [class.active]="myForm.value.right"\n           btnCheckbox formControlName="right"\n           tabindex="0" role="button">Right</label>\n  </div>\n</form>\n'},INbB:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-radio',\n  templateUrl: './radio.html'\n})\nexport class DemoButtonsRadioComponent {\n  radioModel = 'Middle';\n}\n"},VL0J:function(e,t,n){"use strict";n.r(t),t.default='<button type="button" class="btn btn-primary">\n  Single Button\n</button>\n'},WEuY:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-disabled',\n  templateUrl: './disabled.html'\n})\nexport class DemoButtonsDisabledComponent {\n  disabled: boolean = false;\n}\n"},YNeZ:function(e,t,n){"use strict";n.r(t),t.default='<pre class="card card-block card-header">{{checkModel | json}}</pre>\n\n<div class="btn-group">\n  <label class="btn btn-primary" [(ngModel)]="checkModel.left"\n         btnCheckbox tabindex="0" role="button">Left</label>\n  <label class="btn btn-primary" [(ngModel)]="checkModel.middle"\n         btnCheckbox tabindex="0" role="button">Middle</label>\n  <label class="btn btn-primary" [(ngModel)]="checkModel.right"\n         btnCheckbox tabindex="0" role="button">Right</label>\n</div>\n'},ed5y:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-radio-uncheckable',\n  templateUrl: './uncheckable-radio.html'\n})\nexport class DemoButtonsUncheckableRadioComponent {\n  uncheckableRadioModel = 'Middle';\n}\n"},jFwS:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-checkbox',\n  templateUrl: './checkbox.html'\n})\nexport class DemoButtonsCheckboxComponent {\n  checkModel: any = { left: false, middle: true, right: false };\n}\n"},lQGh:function(e,t,n){"use strict";n.r(t);var o=n("Valr"),i=n("QJY3"),r=n("DUip"),a=n("TYT/"),l={provide:i.o,useExisting:Object(a.T)((function(){return c})),multi:!0},c=function(){function e(){this.btnCheckboxTrue=!0,this.btnCheckboxFalse=!1,this.state=!1,this.onChange=Function.prototype,this.onTouched=Function.prototype}return e.prototype.onClick=function(){this.isDisabled||(this.toggle(!this.state),this.onChange(this.value))},e.prototype.ngOnInit=function(){this.toggle(this.trueValue===this.value)},Object.defineProperty(e.prototype,"trueValue",{get:function(){return void 0===this.btnCheckboxTrue||this.btnCheckboxTrue},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"falseValue",{get:function(){return void 0!==this.btnCheckboxFalse&&this.btnCheckboxFalse},enumerable:!0,configurable:!0}),e.prototype.toggle=function(e){this.state=e,this.value=this.state?this.trueValue:this.falseValue},e.prototype.writeValue=function(e){this.state=this.trueValue===e,this.value=e?this.trueValue:this.falseValue},e.prototype.setDisabledState=function(e){this.isDisabled=e},e.prototype.registerOnChange=function(e){this.onChange=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.\u0275fac=function(t){return new(t||e)},e.\u0275dir=a.Hb({type:e,selectors:[["","btnCheckbox",""]],hostVars:3,hostBindings:function(e,t){1&e&&a.ac("click",(function(){return t.onClick()})),2&e&&(a.Bb("aria-pressed",t.state),a.Eb("active",t.state))},inputs:{btnCheckboxTrue:"btnCheckboxTrue",btnCheckboxFalse:"btnCheckboxFalse"},features:[a.zb([l])]}),e}(),s={provide:i.o,useExisting:Object(a.T)((function(){return b})),multi:!0},b=function(){function e(e,t,n,o){this.el=e,this.cdr=t,this.renderer=n,this.group=o,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radio",this._hasFocus=!1}return Object.defineProperty(e.prototype,"value",{get:function(){return this.group?this.group.value:this._value},set:function(e){this.group?this.group.value=e:this._value=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this._disabled},set:function(e){this.setDisabledState(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"controlOrGroupDisabled",{get:function(){return!!(this.disabled||this.group&&this.group.disabled)||void 0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasDisabledClass",{get:function(){return this.controlOrGroupDisabled&&!this.isActive},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isActive",{get:function(){return this.btnRadio===this.value},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tabindex",{get:function(){return this.controlOrGroupDisabled?void 0:this.isActive||null==this.group?0:-1},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"hasFocus",{get:function(){return this._hasFocus},enumerable:!0,configurable:!0}),e.prototype.toggleIfAllowed=function(){this.canToggle()&&(this.value=this.uncheckable&&this.btnRadio===this.value?void 0:this.btnRadio,this._onChange(this.value))},e.prototype.onSpacePressed=function(e){this.toggleIfAllowed(),e.preventDefault()},e.prototype.focus=function(){this.el.nativeElement.focus()},e.prototype.onFocus=function(){this._hasFocus=!0},e.prototype.onBlur=function(){this._hasFocus=!1,this.onTouched()},e.prototype.canToggle=function(){return!this.controlOrGroupDisabled&&(this.uncheckable||this.btnRadio!==this.value)},e.prototype.ngOnInit=function(){this.uncheckable=void 0!==this.uncheckable},e.prototype._onChange=function(e){this.group?this.group.value=e:(this.onTouched(),this.onChange(e))},e.prototype.writeValue=function(e){this.value=e,this.cdr.markForCheck()},e.prototype.registerOnChange=function(e){this.onChange=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.prototype.setDisabledState=function(e){this._disabled=e,e?this.renderer.setAttribute(this.el.nativeElement,"disabled","disabled"):this.renderer.removeAttribute(this.el.nativeElement,"disabled")},e.\u0275fac=function(t){return new(t||e)(a.Mb(a.l),a.Mb(a.h),a.Mb(a.E),a.Mb(Object(a.T)((function(){return u})),8))},e.\u0275dir=a.Hb({type:e,selectors:[["","btnRadio",""]],hostVars:8,hostBindings:function(e,t){1&e&&a.ac("click",(function(){return t.toggleIfAllowed()}))("keydown.space",(function(e){return t.onSpacePressed(e)}))("focus",(function(){return t.onFocus()}))("blur",(function(){return t.onBlur()})),2&e&&(a.Bb("role",t.role)("aria-disabled",t.controlOrGroupDisabled)("aria-checked",t.isActive)("tabindex",t.tabindex),a.Eb("disabled",t.hasDisabledClass)("active",t.isActive))},inputs:{value:"value",disabled:"disabled",uncheckable:"uncheckable",btnRadio:"btnRadio"},features:[a.zb([s])]}),e}(),d={provide:i.o,useExisting:Object(a.T)((function(){return u})),multi:!0},u=function(){function e(e){this.cdr=e,this.onChange=Function.prototype,this.onTouched=Function.prototype,this.role="radiogroup"}return Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(e){this._value=e,this.onChange(e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tabindex",{get:function(){return this._disabled?null:0},enumerable:!0,configurable:!0}),e.prototype.writeValue=function(e){this._value=e,this.cdr.markForCheck()},e.prototype.registerOnChange=function(e){this.onChange=e},e.prototype.registerOnTouched=function(e){this.onTouched=e},e.prototype.setDisabledState=function(e){this.radioButtons&&(this._disabled=e,this.radioButtons.forEach((function(t){t.setDisabledState(e)})),this.cdr.markForCheck())},e.prototype.onFocus=function(){if(!this._disabled){var e=this.getActiveOrFocusedRadio();if(e)e.focus();else{var t=this.radioButtons.find((function(e){return!e.disabled}));t&&t.focus()}}},e.prototype.onBlur=function(){this.onTouched&&this.onTouched()},e.prototype.selectNext=function(e){this.selectInDirection("next"),e.preventDefault()},e.prototype.selectPrevious=function(e){this.selectInDirection("previous"),e.preventDefault()},Object.defineProperty(e.prototype,"disabled",{get:function(){return this._disabled},enumerable:!0,configurable:!0}),e.prototype.selectInDirection=function(e){if(!this._disabled){var t=this.getActiveOrFocusedRadio();if(t)for(var n=this.radioButtons.toArray(),o=n.indexOf(t),i=r(o,n);i!==o;i=r(i,n))if(n[i].canToggle()){n[i].toggleIfAllowed(),n[i].focus();break}}function r(t,n){var o=(t+("next"===e?1:-1))%n.length;return o<0&&(o=n.length-1),o}},e.prototype.getActiveOrFocusedRadio=function(){return this.radioButtons.find((function(e){return e.isActive}))||this.radioButtons.find((function(e){return e.hasFocus}))},e.\u0275fac=function(t){return new(t||e)(a.Mb(a.h))},e.\u0275dir=a.Hb({type:e,selectors:[["","btnRadioGroup",""]],contentQueries:function(e,t,n){var o;1&e&&a.Fb(n,b,!1),2&e&&a.rc(o=a.bc())&&(t.radioButtons=o)},hostVars:2,hostBindings:function(e,t){1&e&&a.ac("focus",(function(){return t.onFocus()}))("blur",(function(){return t.onBlur()}))("keydown.ArrowRight",(function(e){return t.selectNext(e)}))("keydown.ArrowDown",(function(e){return t.selectNext(e)}))("keydown.ArrowLeft",(function(e){return t.selectPrevious(e)}))("keydown.ArrowUp",(function(e){return t.selectPrevious(e)})),2&e&&a.Bb("role",t.role)("tabindex",t.tabindex)},features:[a.zb([d])]}),e}(),p=function(){function e(){}return e.forRoot=function(){return{ngModule:e,providers:[]}},e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)}}),e}(),h=n("k3/p"),m=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["demo-buttons-basic"]],decls:2,vars:0,consts:[["type","button",1,"btn","btn-primary"]],template:function(e,t){1&e&&(a.Sb(0,"button",0),a.Fc(1," Single Button\n"),a.Rb())},encapsulation:2}),e}(),f=function(){function e(){this.checkModel={left:!1,middle:!0,right:!1}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["demo-buttons-checkbox"]],decls:10,vars:6,consts:[[1,"card","card-block","card-header"],[1,"btn-group"],["btnCheckbox","","tabindex","0","role","button",1,"btn","btn-primary",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(a.Sb(0,"pre",0),a.Fc(1),a.dc(2,"json"),a.Rb(),a.Sb(3,"div",1),a.Sb(4,"label",2),a.ac("ngModelChange",(function(e){return t.checkModel.left=e})),a.Fc(5,"Left"),a.Rb(),a.Sb(6,"label",2),a.ac("ngModelChange",(function(e){return t.checkModel.middle=e})),a.Fc(7,"Middle"),a.Rb(),a.Sb(8,"label",2),a.ac("ngModelChange",(function(e){return t.checkModel.right=e})),a.Fc(9,"Right"),a.Rb(),a.Rb()),2&e&&(a.Ab(1),a.Gc(a.ec(2,4,t.checkModel)),a.Ab(3),a.ic("ngModel",t.checkModel.left),a.Ab(2),a.ic("ngModel",t.checkModel.middle),a.Ab(2),a.ic("ngModel",t.checkModel.right))},directives:[c,i.q,i.t],pipes:[o.k],encapsulation:2}),e}(),g=function(){function e(){this.radioModel="Middle"}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["demo-buttons-radio"]],decls:9,vars:4,consts:[[1,"card","card-block","card-header"],[1,"btn-group"],["btnRadio","Left","tabindex","0","role","button",1,"btn","btn-primary",3,"ngModel","ngModelChange"],["btnRadio","Middle","tabindex","0","role","button",1,"btn","btn-primary",3,"ngModel","ngModelChange"],["btnRadio","Right","tabindex","0","role","button",1,"btn","btn-primary",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(a.Sb(0,"pre",0),a.Fc(1),a.Rb(),a.Sb(2,"div",1),a.Sb(3,"label",2),a.ac("ngModelChange",(function(e){return t.radioModel=e})),a.Fc(4,"Left"),a.Rb(),a.Sb(5,"label",3),a.ac("ngModelChange",(function(e){return t.radioModel=e})),a.Fc(6,"Middle"),a.Rb(),a.Sb(7,"label",4),a.ac("ngModelChange",(function(e){return t.radioModel=e})),a.Fc(8,"Right"),a.Rb(),a.Rb()),2&e&&(a.Ab(1),a.Gc(t.radioModel||"null"),a.Ab(2),a.ic("ngModel",t.radioModel),a.Ab(2),a.ic("ngModel",t.radioModel),a.Ab(2),a.ic("ngModel",t.radioModel))},directives:[b,i.q,i.t],encapsulation:2}),e}(),y=function(){function e(){this.uncheckableRadioModel="Middle"}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["demo-buttons-radio-uncheckable"]],decls:9,vars:2,consts:[[1,"card","card-block","card-header"],["btnRadioGroup","",1,"btn-group",3,"ngModel","ngModelChange"],["btnRadio","Left","uncheckable","","tabindex","0","role","button",1,"btn","btn-info"],["btnRadio","Middle","uncheckable","","tabindex","0","role","button",1,"btn","btn-info"],["btnRadio","Right","uncheckable","","tabindex","0","role","button",1,"btn","btn-info"]],template:function(e,t){1&e&&(a.Sb(0,"pre",0),a.Fc(1),a.Rb(),a.Sb(2,"div",1),a.ac("ngModelChange",(function(e){return t.uncheckableRadioModel=e})),a.Sb(3,"label",2),a.Fc(4,"Left"),a.Rb(),a.Sb(5,"label",3),a.Fc(6,"Middle"),a.Rb(),a.Sb(7,"label",4),a.Fc(8,"Right"),a.Rb(),a.Rb()),2&e&&(a.Ab(1),a.Gc(t.uncheckableRadioModel||"null"),a.Ab(1),a.ic("ngModel",t.uncheckableRadioModel))},directives:[u,i.q,i.t,b],encapsulation:2}),e}(),v=function(){function e(e){this.formBuilder=e}return e.prototype.ngOnInit=function(){this.myForm=this.formBuilder.group({left:!1,middle:!0,right:!1})},e.\u0275fac=function(t){return new(t||e)(a.Mb(i.e))},e.\u0275cmp=a.Gb({type:e,selectors:[["demo-buttons-checkbox-reactiveforms"]],decls:11,vars:10,consts:[[1,"card","card-block","card-header"],[3,"formGroup"],[1,"btn-group"],["btnCheckbox","","formControlName","left","tabindex","0","role","button",1,"btn","btn-primary"],["btnCheckbox","","formControlName","middle","tabindex","0","role","button",1,"btn","btn-primary"],["btnCheckbox","","formControlName","right","tabindex","0","role","button",1,"btn","btn-primary"]],template:function(e,t){1&e&&(a.Sb(0,"pre",0),a.Fc(1),a.dc(2,"json"),a.Rb(),a.Sb(3,"form",1),a.Sb(4,"div",2),a.Sb(5,"label",3),a.Fc(6,"Left"),a.Rb(),a.Sb(7,"label",4),a.Fc(8,"Middle"),a.Rb(),a.Sb(9,"label",5),a.Fc(10,"Right"),a.Rb(),a.Rb(),a.Rb()),2&e&&(a.Ab(1),a.Gc(a.ec(2,8,t.myForm.value)),a.Ab(2),a.ic("formGroup",t.myForm),a.Ab(2),a.Eb("active",t.myForm.value.left),a.Ab(2),a.Eb("active",t.myForm.value.middle),a.Ab(2),a.Eb("active",t.myForm.value.right))},directives:[i.F,i.r,i.j,c,i.q,i.h],pipes:[o.k],encapsulation:2}),e}(),R=function(){function e(e){this.formBuilder=e}return e.prototype.ngOnInit=function(){this.myForm=this.formBuilder.group({radio:"C"})},e.\u0275fac=function(t){return new(t||e)(a.Mb(i.e))},e.\u0275cmp=a.Gb({type:e,selectors:[["demo-buttons-radio-reactiveforms"]],decls:14,vars:4,consts:[[1,"card","card-block","card-header"],[1,"form-inline",3,"formGroup"],[1,"form-group"],["btnRadioGroup","","formControlName","radio",1,"btn-group"],["btnRadio","A",1,"btn","btn-primary"],["btnRadio","B",1,"btn","btn-primary"],["btnRadio","C",1,"btn","btn-primary"],[1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(a.Sb(0,"pre",0),a.Fc(1),a.dc(2,"json"),a.Rb(),a.Sb(3,"form",1),a.Sb(4,"div",2),a.Sb(5,"div",3),a.Sb(6,"label",4),a.Fc(7,"A"),a.Rb(),a.Sb(8,"label",5),a.Fc(9,"B"),a.Rb(),a.Sb(10,"label",6),a.Fc(11,"C"),a.Rb(),a.Rb(),a.Sb(12,"button",7),a.ac("click",(function(){return t.myForm.disabled?t.myForm.enable():t.myForm.disable()})),a.Fc(13,"Enable/Disable"),a.Rb(),a.Rb(),a.Rb()),2&e&&(a.Ab(1),a.Gc(a.ec(2,2,t.myForm.value)),a.Ab(2),a.ic("formGroup",t.myForm))},directives:[i.F,i.r,i.j,u,i.q,i.h,b],pipes:[o.k],encapsulation:2}),e}(),k=function(){function e(){this.disabled=!1}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["demo-buttons-disabled"]],decls:4,vars:1,consts:[["type","button",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-warning",3,"click"]],template:function(e,t){1&e&&(a.Sb(0,"button",0),a.Fc(1,"Button"),a.Rb(),a.Sb(2,"button",1),a.ac("click",(function(){return t.disabled=!t.disabled})),a.Fc(3,"Enable/Disable"),a.Rb()),2&e&&a.ic("disabled",t.disabled)},encapsulation:2}),e}(),M=function(){function e(){this.singleModel="1"}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["demo-custom-checkbox-value"]],decls:4,vars:2,consts:[[1,"card","card-block","card-header"],["type","button","btnCheckbox","","btnCheckboxTrue","1","btnCheckboxFalse","0",1,"btn","btn-primary",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(a.Sb(0,"pre",0),a.Fc(1),a.Rb(),a.Sb(2,"button",1),a.ac("ngModelChange",(function(e){return t.singleModel=e})),a.Fc(3," Single Toggle\n"),a.Rb()),2&e&&(a.Ab(1),a.Gc(t.singleModel),a.Ab(1),a.ic("ngModel",t.singleModel))},directives:[c,i.q,i.t],encapsulation:2}),e}(),C=function(){function e(){this.radioModel="Middle",this.radioModelDisabled="Middle",this.modelGroupDisabled=!1}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["demo-buttons-radio-with-group"]],decls:24,vars:6,consts:[[1,"card","card-block","card-header"],[1,"form-inline"],["btnRadioGroup","",1,"btn-group",3,"ngModel","disabled","ngModelChange"],["btnRadio","Left",1,"btn","btn-success"],["btnRadio","Middle",1,"btn","btn-success"],["btnRadio","Another",1,"btn","btn-success",3,"disabled"],["btnRadio","Right",1,"btn","btn-success"],[1,"btn","btn-warning",3,"click"],["btnRadioGroup","","disabled","",1,"btn-group",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(a.Sb(0,"pre",0),a.Fc(1),a.Rb(),a.Sb(2,"div",1),a.Sb(3,"div",2),a.ac("ngModelChange",(function(e){return t.radioModel=e})),a.Sb(4,"label",3),a.Fc(5,"Left"),a.Rb(),a.Sb(6,"label",4),a.Fc(7,"Middle"),a.Rb(),a.Sb(8,"label",5),a.Fc(9,"Disabled"),a.Rb(),a.Sb(10,"label",6),a.Fc(11,"Right"),a.Rb(),a.Rb(),a.Sb(12,"button",7),a.ac("click",(function(){return t.modelGroupDisabled=!t.modelGroupDisabled})),a.Fc(13,"Enable/Disable"),a.Rb(),a.Rb(),a.Sb(14,"pre",0),a.Fc(15),a.Rb(),a.Sb(16,"div",1),a.Sb(17,"div",8),a.ac("ngModelChange",(function(e){return t.radioModelDisabled=e})),a.Sb(18,"label",3),a.Fc(19,"Left"),a.Rb(),a.Sb(20,"label",4),a.Fc(21,"Middle"),a.Rb(),a.Sb(22,"label",6),a.Fc(23,"Right"),a.Rb(),a.Rb(),a.Rb()),2&e&&(a.Ab(1),a.Gc(t.radioModel||"null"),a.Ab(2),a.ic("ngModel",t.radioModel)("disabled",t.modelGroupDisabled),a.Ab(5),a.ic("disabled",!0),a.Ab(7),a.Gc(t.radioModelDisabled||"null"),a.Ab(2),a.ic("ngModel",t.radioModelDisabled))},directives:[u,i.q,i.t,b],encapsulation:2}),e}(),F=n("ClAA"),x=n("y20O"),w=n("nk7K"),S=n("l3GJ"),D=[{name:"Usage",anchor:"usage",outlet:F.a,content:{doc:n("sUJ9")}},{name:"Examples",anchor:"examples",outlet:x.a,content:[{title:"Basic",anchor:"basic",component:n("rQhE"),html:n("VL0J"),outlet:m},{title:"Checkbox",anchor:"checkbox",description:"<p>Checkbox-like buttons set with variable states</p>",component:n("jFwS"),html:n("YNeZ"),outlet:f},{title:"Custom checkbox value",anchor:"custom-checkbox-value",component:n("7DLv"),html:n("7Wf+"),outlet:M},{title:"Checkbox with Reactive Forms",anchor:'checkbox-reactiveforms"',description:"<p>Checkbox buttons with ReactiveForms</p>",component:n("rjbT"),html:n("EKQK"),outlet:v},{title:"Radio with radio group",anchor:"radio-button-with-group",description:'<p>Radio buttons with checked/unchecked states. Radio buttons used together with a <code>btnRadioGroup</code> can be\nused in template driven and reactive forms.\nThey follow the <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#radiobutton">W3C WAI-AIRA design pattern for radio groups</a>.\nMeaning\n<ul>\n<li>The Radio Group is inserted in the tab-order of the page by automatically adding a tabindex attribute</li>\n<li>The selected radio element can be changed with the arrow keys if the focus is in the group</li>\n<li>The role of the group is set to "radiogroup" and the aria-checked attributes are added according to the state</li>\n</ul>\nIndividual buttons or the whole group can be marked as disabled.\n</p>',component:n("Bsqq"),html:n("/mGz"),outlet:C},{title:"Radio without explicit group",anchor:"radio-button",description:"<p> The second method to create a radio button group is to use the same <code>ngModel</code> binding with several buttons.\n This works only for template driven forms and is not generally advised. But there are use cases were this might be useful, e.g. in tables.\n In terms of accessibility the buttons in the group can not be selected with the arrow keys, but individually reached by using the tab key\n and then be toggled by using the space key. You can check out the demo below.</p>",component:n("INbB"),html:n("uya6"),outlet:g},{title:"Uncheckable Radio",anchor:"uncheckable-radio-button",component:n("ed5y"),html:n("6/7U"),outlet:y},{title:"Radio with Reactive Forms",anchor:"radio-reactiveforms",description:"<p>Radio buttons with ReactiveForms. Example below shows how to use radio buttons with reactive\n forms. Please be aware that for reactive forms it's required to use <code>btnRadioGroup</code> directive along with\n <code>btnRadio</code>'s</p>",component:n("+yoE"),html:n("+g3H"),outlet:R},{title:"Disabled Buttons",anchor:"disabled-buttons",component:n("WEuY"),html:n("1BST"),outlet:k}]},{name:"API Reference",anchor:"api-reference",outlet:w.a,content:[{title:"ButtonCheckboxDirective",anchor:"button-checkbox-directive",outlet:S.b},{title:"ButtonRadioDirective",anchor:"button-radio-directive",outlet:S.b},{title:"ButtonRadioGroupDirective",anchor:"button-radio-group-directive",outlet:S.b}]}],B=n("ybC4"),A=n("oxqd"),G=[{path:"",component:function(){function e(){this.name="Buttons",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/buttons",this.componentContent=D}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["buttons-section"]],decls:16,vars:4,consts:[[3,"name","src","componentContent"],[1,"prettyprint","lang-bash","prettyprinted"],[1,"pln"],[1,"pun"],[3,"content"]],template:function(e,t){1&e&&(a.Sb(0,"demo-section",0),a.Sb(1,"p"),a.Fc(2,"There are two directives that can make a group of buttons behave like a set of checkboxes, radio buttons, or a hybrid where radio buttons can be unchecked."),a.Rb(),a.Sb(3,"p"),a.Fc(4,"The easiest way to add the buttons component to your app (will be added to the root module)"),a.Rb(),a.Sb(5,"pre",1),a.Sb(6,"span",2),a.Fc(7,"ng add ngx"),a.Rb(),a.Sb(8,"span",3),a.Fc(9,"-"),a.Rb(),a.Sb(10,"span",2),a.Fc(11,"bootstrap "),a.Rb(),a.Fc(12," --component "),a.Sb(13,"span",2),a.Fc(14,"buttons"),a.Rb(),a.Rb(),a.Nb(15,"docs-section",4),a.Rb()),2&e&&(a.ic("name",t.name)("src",t.src)("componentContent",t.componentContent),a.Ab(15),a.ic("content",t.componentContent))},directives:[B.a,A.a],encapsulation:2,changeDetection:0}),e}()}];n.d(t,"DemoButtonsModule",(function(){return O}));var O=function(){function e(){}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(t){return new(t||e)},imports:[[i.k,i.A,o.c,h.a,r.i.forChild(G),p.forRoot()]]}),e}()},rQhE:function(e,t,n){"use strict";n.r(t),t.default="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'demo-buttons-basic',\n  templateUrl: './basic.html'\n})\nexport class DemoButtonsBasicComponent {}\n"},rjbT:function(e,t,n){"use strict";n.r(t),t.default="import { Component, OnInit } from '@angular/core';\nimport { FormBuilder, FormGroup } from '@angular/forms';\n\n@Component({\n  selector: 'demo-buttons-checkbox-reactiveforms',\n  templateUrl: './checkbox-reactiveforms.html'\n})\nexport class DemoButtonsCheckboxReactiveFormsComponent implements OnInit {\n  myForm: FormGroup;\n\n  constructor(private formBuilder: FormBuilder) {}\n\n  ngOnInit() {\n    this.myForm = this.formBuilder.group({\n      left: false,\n      middle: true,\n      right: false\n    });\n  }\n}\n"},sUJ9:function(e,t,n){"use strict";n.r(t),t.default="// RECOMMENDED\nimport { ButtonsModule } from 'ngx-bootstrap/buttons';\n// NOT RECOMMENDED (Angular 9 doesn't support this kind of import)\nimport { ButtonsModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [ButtonsModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},uya6:function(e,t,n){"use strict";n.r(t),t.default='<pre class="card card-block card-header">{{radioModel || \'null\'}}</pre>\n<div class="btn-group">\n  <label class="btn btn-primary" [(ngModel)]="radioModel"\n         btnRadio="Left" tabindex="0" role="button">Left</label>\n  <label class="btn btn-primary" [(ngModel)]="radioModel"\n         btnRadio="Middle" tabindex="0" role="button">Middle</label>\n  <label class="btn btn-primary" [(ngModel)]="radioModel"\n         btnRadio="Right" tabindex="0" role="button">Right</label>\n</div>\n'}}]);