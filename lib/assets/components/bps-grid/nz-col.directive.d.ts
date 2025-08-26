import { AfterViewInit, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subject } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzRowDirective } from './nz-row.directive';
import * as i0 from "@angular/core";
export interface EmbeddedProperty {
    span?: number;
    pull?: number;
    push?: number;
    offset?: number;
    order?: number;
}
export declare class NzColDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private nzUpdateHostClassService;
    private elementRef;
    nzRowDirective: NzRowDirective;
    renderer: Renderer2;
    private el;
    private prefixCls;
    protected destroy$: Subject<void>;
    nzSpan: number;
    nzOrder: number;
    nzOffset: number;
    nzPush: number;
    nzPull: number;
    nzXs: number | EmbeddedProperty;
    nzSm: number | EmbeddedProperty;
    nzMd: number | EmbeddedProperty;
    nzLg: number | EmbeddedProperty;
    nzXl: number | EmbeddedProperty;
    nzXXl: number | EmbeddedProperty;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    generateClass(): object;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzRowDirective: NzRowDirective, renderer: Renderer2);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzColDirective, [null, null, { optional: true; host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzColDirective, "[nz-col],nz-col", ["nzCol"], { "nzSpan": { "alias": "nzSpan"; "required": false; }; "nzOrder": { "alias": "nzOrder"; "required": false; }; "nzOffset": { "alias": "nzOffset"; "required": false; }; "nzPush": { "alias": "nzPush"; "required": false; }; "nzPull": { "alias": "nzPull"; "required": false; }; "nzXs": { "alias": "nzXs"; "required": false; }; "nzSm": { "alias": "nzSm"; "required": false; }; "nzMd": { "alias": "nzMd"; "required": false; }; "nzLg": { "alias": "nzLg"; "required": false; }; "nzXl": { "alias": "nzXl"; "required": false; }; "nzXXl": { "alias": "nzXXl"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=nz-col.directive.d.ts.map