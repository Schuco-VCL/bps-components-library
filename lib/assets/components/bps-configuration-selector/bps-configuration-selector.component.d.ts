import { ChangeDetectorRef, OnDestroy, OnInit, EventEmitter, AfterViewInit } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BpsConfigurationSelectorComponent<T = any> implements OnInit, OnDestroy, AfterViewInit {
    private cdr;
    private destroy$;
    currentDisplayedDataIndex: any;
    _data: any[];
    _currentDisplayedData: any;
    set currentDisplayedData(value: any);
    propertyName: string;
    disabled: boolean;
    currentDisplayedDataChange: EventEmitter<any>;
    set data(data: any);
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getCurrentElementIndex(): number;
    getPrevElement(): void;
    getNextElement(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsConfigurationSelectorComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsConfigurationSelectorComponent<any>, "bps-configuration-selector", ["bpsConfigurationSelector"], { "currentDisplayedData": { "alias": "currentDisplayedData"; "required": false; }; "propertyName": { "alias": "propertyName"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, { "currentDisplayedDataChange": "currentDisplayedDataChange"; }, never, never, false, never>;
}
//# sourceMappingURL=bps-configuration-selector.component.d.ts.map