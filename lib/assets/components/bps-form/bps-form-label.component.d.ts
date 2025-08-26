import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { NzColDirective } from '../bps-grid/nz-col.directive';
import { NzRowDirective } from '../bps-grid/nz-row.directive';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { BpsFormItemComponent } from './bps-form-item.component';
import * as i0 from "@angular/core";
export declare class BpsFormLabelComponent extends NzColDirective implements OnDestroy, AfterViewInit {
    private cdr;
    bpsFor: string;
    bpsRequired: boolean;
    set bpsNoColon(value: boolean);
    get bpsNoColon(): boolean;
    defaultNoColon: boolean;
    noColon: boolean | string;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: BpsFormItemComponent, nzRowDirective: NzRowDirective, renderer: Renderer2, cdr: ChangeDetectorRef);
    setDefaultNoColon(value: boolean): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormLabelComponent, [null, null, { optional: true; host: true; }, { optional: true; host: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormLabelComponent, "bps-form-label", ["bpsFormLabel"], { "bpsFor": { "alias": "bpsFor"; "required": false; }; "bpsRequired": { "alias": "bpsRequired"; "required": false; }; "bpsNoColon": { "alias": "bpsNoColon"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=bps-form-label.component.d.ts.map