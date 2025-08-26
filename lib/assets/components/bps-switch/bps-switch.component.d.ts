import { FocusMonitor } from '@angular/cdk/a11y';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, NgZone, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { BooleanInput, NzSizeDSType, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class BpsSwitchComponent implements ControlValueAccessor, AfterViewInit, OnDestroy, OnInit {
    nzConfigService: NzConfigService;
    private host;
    private ngZone;
    private cdr;
    private focusMonitor;
    private directionality;
    readonly _nzModuleName: NzConfigKey;
    static ngAcceptInputType_bpsLoading: BooleanInput;
    static ngAcceptInputType_bpsDisabled: BooleanInput;
    static ngAcceptInputType_bpsControl: BooleanInput;
    isChecked: boolean;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    switchElement: ElementRef<HTMLElement>;
    bpsLoading: boolean;
    bpsDisabled: boolean;
    bpsControl: boolean;
    bpsCheckedChildren: string | TemplateRef<void> | null;
    bpsUnCheckedChildren: string | TemplateRef<void> | null;
    bpsSize: NzSizeDSType;
    bpsId: string | null;
    bpsDual: boolean;
    bpsDualValues: {
        title: string;
        checked: boolean;
    }[];
    bpsDualValuesChange: EventEmitter<{
        title: string;
        checked: boolean;
    }[]>;
    dir: Direction;
    private destroy$;
    private isNzDisableFirstChange;
    updateValue(value: boolean): void;
    focus(): void;
    blur(): void;
    constructor(nzConfigService: NzConfigService, host: ElementRef<HTMLElement>, ngZone: NgZone, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor, directionality: Directionality);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    checkNode(nodeA: {
        title: string;
        checked: boolean;
    }, nodeB: {
        title: string;
        checked: boolean;
    }): void;
    onKeyDown(e: KeyboardEvent): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSwitchComponent, [null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSwitchComponent, "bps-switch", ["bpsSwitch"], { "bpsLoading": { "alias": "bpsLoading"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsControl": { "alias": "bpsControl"; "required": false; }; "bpsCheckedChildren": { "alias": "bpsCheckedChildren"; "required": false; }; "bpsUnCheckedChildren": { "alias": "bpsUnCheckedChildren"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; "bpsId": { "alias": "bpsId"; "required": false; }; "bpsDual": { "alias": "bpsDual"; "required": false; }; "bpsDualValues": { "alias": "bpsDualValues"; "required": false; }; }, { "bpsDualValuesChange": "bpsDualValuesChange"; }, never, never, false, never>;
}
//# sourceMappingURL=bps-switch.component.d.ts.map