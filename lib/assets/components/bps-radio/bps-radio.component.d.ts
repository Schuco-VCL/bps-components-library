/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { FocusMonitor } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterViewInit, ChangeDetectorRef, ElementRef, NgZone, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import { BooleanInput, NzSafeAny, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { BpsRadioButtonDirective } from './radio-button.directive';
import { NzRadioService } from 'ng-zorro-antd/radio';
import * as i0 from "@angular/core";
export type BpsRadioButtonType = 'variation1' | 'variation2' | 'variation3' | 'variation5' | 'variation6' | 'variation7' | 'variation8a' | 'variation8b' | 'variation8c' | 'variation8d' | 'variation8e' | 'variation9' | 'variation10' | 'variation11' | 'variation12';
export declare class BpsRadioComponent implements ControlValueAccessor, AfterViewInit, OnDestroy, OnInit {
    private ngZone;
    private elementRef;
    private cdr;
    private renderer;
    private focusMonitor;
    private directionality;
    private nzRadioService;
    private nzRadioButtonDirective;
    nzFormStatusService?: NzFormStatusService;
    static ngAcceptInputType_bpsDisabled: BooleanInput;
    static ngAcceptInputType_bpsAutoFocus: BooleanInput;
    private isNgModel;
    private destroy$;
    private isNzDisableFirstChange;
    isChecked: boolean;
    name: string | null;
    isRadioButton: boolean;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    inputElement: ElementRef<HTMLInputElement>;
    bpsValue: NzSafeAny | null;
    bpsDisabled: boolean;
    bpsAutoFocus: boolean;
    bpsRadioButtonType: BpsRadioButtonType;
    dir: Direction;
    focus(): void;
    blur(): void;
    constructor(ngZone: NgZone, elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, focusMonitor: FocusMonitor, directionality: Directionality, nzRadioService: NzRadioService | null, nzRadioButtonDirective: BpsRadioButtonDirective | null, nzFormStatusService?: NzFormStatusService);
    setDisabledState(disabled: boolean): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private setupClickListener;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsRadioComponent, [null, null, null, null, null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsRadioComponent, "[bps-radio],[bps-radio-button]", ["bpsRadio"], { "bpsValue": { "alias": "bpsValue"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsAutoFocus": { "alias": "bpsAutoFocus"; "required": false; }; "bpsRadioButtonType": { "alias": "bpsRadioButtonType"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=bps-radio.component.d.ts.map