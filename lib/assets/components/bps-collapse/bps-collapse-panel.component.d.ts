import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef } from '@angular/core';
import { NzConfigService } from '../bps-tree/tree/config.service';
import { BpsCollapseComponent } from './bps-collapse.component';
import * as i0 from "@angular/core";
export declare class BpsCollapsePanelComponent implements OnInit, OnDestroy {
    nzConfigService: NzConfigService;
    private cdr;
    private bpsCollapseComponent;
    bpsActive: boolean;
    bpsDisabled: boolean;
    bpsValid: any;
    bpsShowArrow: boolean;
    bpsExtra: string | TemplateRef<void>;
    bpsHeader: string | TemplateRef<void>;
    bpsExpandedIcon: string | TemplateRef<void>;
    readonly bpsActiveChange: EventEmitter<boolean>;
    clickHeader(): void;
    markForCheck(): void;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, bpsCollapseComponent: BpsCollapseComponent, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsCollapsePanelComponent, [null, null, { host: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsCollapsePanelComponent, "bps-collapse-panel", ["bpsCollapsePanel"], { "bpsActive": { "alias": "bpsActive"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsValid": { "alias": "bpsValid"; "required": false; }; "bpsShowArrow": { "alias": "bpsShowArrow"; "required": false; }; "bpsExtra": { "alias": "bpsExtra"; "required": false; }; "bpsHeader": { "alias": "bpsHeader"; "required": false; }; "bpsExpandedIcon": { "alias": "bpsExpandedIcon"; "required": false; }; }, { "bpsActiveChange": "bpsActiveChange"; }, never, ["*"], false, never>;
}
//# sourceMappingURL=bps-collapse-panel.component.d.ts.map