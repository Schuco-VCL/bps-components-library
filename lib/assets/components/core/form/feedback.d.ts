import { ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { NzValidateStatus } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
declare const iconTypeMap: {
    readonly error: "close-circle-fill";
    readonly validating: "loading";
    readonly success: "check-circle-fill";
    readonly warning: "exclamation-circle-fill";
};
export declare class BpsFormItemFeedbackIconComponent implements OnChanges {
    cdr: ChangeDetectorRef;
    status: NzValidateStatus;
    constructor(cdr: ChangeDetectorRef);
    iconType: typeof iconTypeMap[keyof typeof iconTypeMap] | null;
    ngOnChanges(_changes: SimpleChanges): void;
    updateIcon(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormItemFeedbackIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormItemFeedbackIconComponent, "bps-form-item-feedback-icon", ["bpsFormFeedbackIcon"], { "status": { "alias": "status"; "required": false; }; }, {}, never, never, false, never>;
}
export {};
//# sourceMappingURL=feedback.d.ts.map