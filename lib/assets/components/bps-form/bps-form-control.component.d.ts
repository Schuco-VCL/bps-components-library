import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { UntypedFormControl, FormControlDirective, FormControlName, NgModel } from '@angular/forms';
import { BpsFormItemComponent } from './bps-form-item.component';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NgClassType } from '../core/types';
import { NzColDirective } from '../bps-grid/nz-col.directive';
import { NzRowDirective } from '../bps-grid/nz-row.directive';
import * as i0 from "@angular/core";
export type NzFormControlStatusType = 'warning' | 'validating' | 'error' | 'success' | null;
export declare class BpsFormControlComponent extends NzColDirective implements OnDestroy, OnInit, AfterContentInit, AfterViewInit, OnDestroy {
    private nzFormItemComponent;
    private cdr;
    private _hasFeedback;
    private validateChanges;
    private validateString;
    validateControl: UntypedFormControl | NgModel | null;
    status: NzFormControlStatusType;
    controlClassMap: NgClassType;
    iconType: string;
    defaultValidateControl: FormControlName | FormControlDirective;
    bpsSuccessTip: string | TemplateRef<{
        $implicit: UntypedFormControl | NgModel;
    }>;
    bpsWarningTip: string | TemplateRef<{
        $implicit: UntypedFormControl | NgModel;
    }>;
    bpsErrorTip: string | TemplateRef<{
        $implicit: UntypedFormControl | NgModel;
    }>;
    bpsValidatingTip: string | TemplateRef<{
        $implicit: UntypedFormControl | NgModel;
    }>;
    bpsExtra: string | TemplateRef<void>;
    set bpsHasFeedback(value: boolean);
    get bpsHasFeedback(): boolean;
    set bpsValidateStatus(value: string | UntypedFormControl | FormControlName | NgModel);
    removeSubscribe(): void;
    watchControl(): void;
    validateControlStatus(status: string): boolean;
    setControlClassMap(): void;
    get hasTips(): boolean;
    get showSuccessTip(): boolean;
    get showWarningTip(): boolean;
    get showErrorTip(): boolean;
    get showValidatingTip(): boolean;
    get showInnerTip(): boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: BpsFormItemComponent, nzRowDirective: NzRowDirective, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormControlComponent, [null, null, { optional: true; host: true; }, { optional: true; host: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormControlComponent, "bps-form-control", ["bpsFormControl"], { "bpsSuccessTip": { "alias": "bpsSuccessTip"; "required": false; }; "bpsWarningTip": { "alias": "bpsWarningTip"; "required": false; }; "bpsErrorTip": { "alias": "bpsErrorTip"; "required": false; }; "bpsValidatingTip": { "alias": "bpsValidatingTip"; "required": false; }; "bpsExtra": { "alias": "bpsExtra"; "required": false; }; "bpsHasFeedback": { "alias": "bpsHasFeedback"; "required": false; }; "bpsValidateStatus": { "alias": "bpsValidateStatus"; "required": false; }; }, {}, ["defaultValidateControl"], ["*", "bps-form-explain", "bps-form-extra"], false, never>;
}
//# sourceMappingURL=bps-form-control.component.d.ts.map