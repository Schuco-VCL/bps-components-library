import { FocusMonitor } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BooleanInput, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export interface NzCheckBoxOptionInterface {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare class BpsCheckboxGroupComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private elementRef;
    private focusMonitor;
    private cdr;
    private directionality;
    static ngAcceptInputType_nzDisabled: BooleanInput;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    options: NzCheckBoxOptionInterface[];
    bpsDisabled: boolean;
    dir: Direction;
    private destroy$;
    private isNzDisableFirstChange;
    trackByOption(_: number, option: NzCheckBoxOptionInterface): string;
    onCheckedChange(option: NzCheckBoxOptionInterface, checked: boolean): void;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, directionality: Directionality);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: NzCheckBoxOptionInterface[]): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsCheckboxGroupComponent, [null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsCheckboxGroupComponent, "bps-checkbox-group", ["bpsCheckboxGroup"], { "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=bps-checkbox-group.component.d.ts.map