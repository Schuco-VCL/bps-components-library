import { OnChanges, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import { BooleanInput, NzSafeAny } from 'ng-zorro-antd/core/types';
import { BpsOptionGroupComponent } from './option-group.component';
import * as i0 from "@angular/core";
export declare class BpsOptionComponent implements OnChanges, OnInit {
    private nzOptionGroupComponent;
    private destroy$;
    static ngAcceptInputType_bpsDisabled: BooleanInput;
    static ngAcceptInputType_bpsHide: BooleanInput;
    static ngAcceptInputType_bpsCustomContent: BooleanInput;
    changes: Subject<void>;
    groupLabel: string | number | TemplateRef<NzSafeAny> | null;
    template: TemplateRef<NzSafeAny>;
    bpsTitle?: string | number | null;
    bpsLabel: string | number | null;
    bpsValue: NzSafeAny | null;
    bpsKey?: string | number;
    bpsDisabled: boolean;
    bpsHide: boolean;
    bpsCustomContent: boolean;
    constructor(nzOptionGroupComponent: BpsOptionGroupComponent, destroy$: NzDestroyService);
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsOptionComponent, [{ optional: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsOptionComponent, "bps-option", ["bpsOption"], { "bpsTitle": { "alias": "bpsTitle"; "required": false; }; "bpsLabel": { "alias": "bpsLabel"; "required": false; }; "bpsValue": { "alias": "bpsValue"; "required": false; }; "bpsKey": { "alias": "bpsKey"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsHide": { "alias": "bpsHide"; "required": false; }; "bpsCustomContent": { "alias": "bpsCustomContent"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=option.component.d.ts.map