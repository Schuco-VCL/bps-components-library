import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BpsGridComponent {
    _columns: any[];
    _rows: any[];
    _selection: number[];
    _latestSelection: number[];
    disabled: boolean;
    selectionChange: EventEmitter<any>;
    set columns(value: number);
    set rows(value: number);
    set selection(value: number[]);
    get selection(): number[];
    constructor();
    onSelectionChange(row: any, column: any): void;
    isSelected(row: number, column: number): boolean;
    previewSelection(row: any, column: any): void;
    endPreviewSelection(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsGridComponent, "bps-grid", never, { "disabled": { "alias": "disabled"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "selection": { "alias": "selection"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, never, false, never>;
}
//# sourceMappingURL=bps-grid.component.d.ts.map