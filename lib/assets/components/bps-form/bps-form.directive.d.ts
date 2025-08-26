import { AfterContentInit, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { NzConfigService } from '../bps-tree/tree/config.service';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { BpsFormLabelComponent } from './bps-form-label.component';
import * as i0 from "@angular/core";
export declare class BpsFormDirective implements OnInit, OnChanges, AfterContentInit, OnDestroy {
    nzConfigService: NzConfigService;
    private elementRef;
    private renderer;
    private nzUpdateHostClassService;
    bpsLayout: string;
    bpsNoColon: boolean;
    bpsFormLabelComponent: QueryList<BpsFormLabelComponent>;
    destroy$: Subject<void>;
    setClassMap(): void;
    updateItemsDefaultColon(): void;
    constructor(nzConfigService: NzConfigService, elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsFormDirective, "[bps-form]", ["bpsForm"], { "bpsLayout": { "alias": "bpsLayout"; "required": false; }; "bpsNoColon": { "alias": "bpsNoColon"; "required": false; }; }, {}, ["bpsFormLabelComponent"], never, false, never>;
}
//# sourceMappingURL=bps-form.directive.d.ts.map