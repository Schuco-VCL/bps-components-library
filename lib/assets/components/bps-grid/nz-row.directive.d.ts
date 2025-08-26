import { AfterViewInit, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { IndexableObject, NzAlignType } from '../core/types';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzDomEventService } from '../core/services/nz-dom-event.service';
import * as i0 from "@angular/core";
export type NzJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export type NzGridType = 'flex' | null;
export declare class NzRowDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    renderer: Renderer2;
    nzUpdateHostClassService: NzUpdateHostClassService;
    mediaMatcher: MediaMatcher;
    ngZone: NgZone;
    platform: Platform;
    private nzDomEventService;
    nzType: NzGridType;
    nzAlign: NzAlignType;
    nzJustify: NzJustify;
    nzGutter: number | IndexableObject;
    private el;
    private prefixCls;
    private breakPoint;
    actualGutter: number;
    actualGutter$: Subject<number>;
    destroy$: Subject<void>;
    calculateGutter(): number;
    updateGutter(): void;
    watchMedia(): void;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform, nzDomEventService: NzDomEventService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzRowDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzRowDirective, "[nz-row],nz-row", ["nzRow"], { "nzType": { "alias": "nzType"; "required": false; }; "nzAlign": { "alias": "nzAlign"; "required": false; }; "nzJustify": { "alias": "nzJustify"; "required": false; }; "nzGutter": { "alias": "nzGutter"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=nz-row.directive.d.ts.map