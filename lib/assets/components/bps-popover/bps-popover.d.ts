import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Renderer2, ViewContainerRef } from '@angular/core';
import { NzConfigKey, NzConfigService } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BooleanInput, NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { BpsToolTipComponent } from '../bps-tooltip/tooltip';
import { NzTooltipBaseDirective, NzTooltipTrigger, PropertyMapping } from './../bps-tooltip/base';
import * as i0 from "@angular/core";
export type BpsPopoverType = 'variation_1' | 'variation_2' | 'variation_3' | 'variation_4' | 'variation_5' | 'variation_6' | 'variation_7a' | 'variation_7b' | 'variation_8a' | 'variation_8b' | 'variation_9a' | 'variation_9b' | 'variation_10' | 'variation_11';
export declare class BpsPopoverDirective extends NzTooltipBaseDirective {
    static ngAcceptInputType_bpsPopoverArrowPointAtCenter: BooleanInput;
    readonly _nzModuleName: NzConfigKey;
    arrowPointAtCenter?: boolean;
    title?: NzTSType;
    content?: NzTSType;
    directiveTitle?: NzTSType | null;
    trigger?: NzTooltipTrigger;
    placement?: string | string[];
    origin?: ElementRef<HTMLElement>;
    visible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    overlayStyle?: NgStyleInterface;
    popoverType: BpsPopoverType;
    bpsPopoverBackdrop?: boolean;
    readonly visibleChange: EventEmitter<boolean>;
    componentRef: ComponentRef<BpsPopoverComponent>;
    protected getProxyPropertyMap(): PropertyMapping;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective, nzConfigService?: NzConfigService);
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsPopoverDirective, [null, null, null, null, { optional: true; host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsPopoverDirective, "[bps-popover]", ["bpsPopover"], { "arrowPointAtCenter": { "alias": "bpsPopoverArrowPointAtCenter"; "required": false; }; "title": { "alias": "bpsPopoverTitle"; "required": false; }; "content": { "alias": "bpsPopoverContent"; "required": false; }; "directiveTitle": { "alias": "bps-popover"; "required": false; }; "trigger": { "alias": "bpsPopoverTrigger"; "required": false; }; "placement": { "alias": "bpsPopoverPlacement"; "required": false; }; "origin": { "alias": "bpsPopoverOrigin"; "required": false; }; "visible": { "alias": "bpsPopoverVisible"; "required": false; }; "mouseEnterDelay": { "alias": "bpsPopoverMouseEnterDelay"; "required": false; }; "mouseLeaveDelay": { "alias": "bpsPopoverMouseLeaveDelay"; "required": false; }; "overlayClassName": { "alias": "bpsPopoverOverlayClassName"; "required": false; }; "overlayStyle": { "alias": "bpsPopoverOverlayStyle"; "required": false; }; "popoverType": { "alias": "bpsPopoverType"; "required": false; }; "bpsPopoverBackdrop": { "alias": "bpsPopoverBackdrop"; "required": false; }; }, { "visibleChange": "bpsPopoverVisibleChange"; }, never, never, false, never>;
}
export declare class BpsPopoverComponent extends BpsToolTipComponent {
    _prefix: string;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    get hasBackdrop(): boolean;
    protected isEmpty(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsPopoverComponent, [null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsPopoverComponent, "bps-popover", ["nzPopoverComponent"], {}, {}, never, never, false, never>;
}
//# sourceMappingURL=bps-popover.d.ts.map