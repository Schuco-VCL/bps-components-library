import { OnChanges, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export declare class BpsOptionGroupComponent implements OnChanges {
    bpsLabel: string | number | TemplateRef<NzSafeAny> | null;
    changes: Subject<void>;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsOptionGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsOptionGroupComponent, "bps-option-group", ["bpsOptionGroup"], { "bpsLabel": { "alias": "bpsLabel"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=option-group.component.d.ts.map