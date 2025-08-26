import { Direction, Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { BooleanInput, NzSafeAny, NzSizeLDSType, OnChangeType, OnTouchedType } from 'ng-zorro-antd/core/types';
import { NzRadioService } from 'ng-zorro-antd/radio';
import * as i0 from "@angular/core";
export type NzRadioButtonStyle = 'outline' | 'solid';
export declare class BpsRadioGroupComponent implements OnInit, ControlValueAccessor, OnDestroy, OnChanges {
    private cdr;
    private nzRadioService;
    private directionality;
    static ngAcceptInputType_bpsDisabled: BooleanInput;
    private value;
    private destroy$;
    private isNzDisableFirstChange;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    bpsDisabled: boolean;
    bpsButtonStyle: NzRadioButtonStyle;
    bpsSize: NzSizeLDSType;
    bpsName: string | null;
    dir: Direction;
    constructor(cdr: ChangeDetectorRef, nzRadioService: NzRadioService, directionality: Directionality);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(value: NzSafeAny): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsRadioGroupComponent, [null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsRadioGroupComponent, "bps-radio-group", ["bpsRadioGroup"], { "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsButtonStyle": { "alias": "bpsButtonStyle"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; "bpsName": { "alias": "bpsName"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=radio-group.component.d.ts.map