import { ElementRef, OnInit } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzSizeLDSType } from '../core/types';
import * as i0 from "@angular/core";
export declare class BpsButtonGroupComponent implements OnInit {
    private nzUpdateHostClassService;
    private elementRef;
    private _size;
    isInDropdown: boolean;
    get bpsSize(): NzSizeLDSType;
    set bpsSize(value: NzSizeLDSType);
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef);
    setClassMap(): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsButtonGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsButtonGroupComponent, "bps-button-group", ["bpsButtonGroup"], { "bpsSize": { "alias": "bpsSize"; "required": false; }; }, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=bps-button-group.component.d.ts.map