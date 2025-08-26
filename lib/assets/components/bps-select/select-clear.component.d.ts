import { EventEmitter, TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class BpsSelectClearComponent {
    clearIcon: TemplateRef<NzSafeAny> | null;
    readonly clear: EventEmitter<MouseEvent>;
    constructor();
    onClick(e: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSelectClearComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSelectClearComponent, "bps-select-clear", never, { "clearIcon": { "alias": "clearIcon"; "required": false; }; }, { "clear": "clear"; }, never, never, false, never>;
}
//# sourceMappingURL=select-clear.component.d.ts.map