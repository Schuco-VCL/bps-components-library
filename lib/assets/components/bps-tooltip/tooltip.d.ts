import { Directionality } from '@angular/cdk/bidi';
import { ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, Renderer2, ViewContainerRef } from '@angular/core';
import { NzPresetColor } from 'ng-zorro-antd/core/color';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { BooleanInput, NgStyleInterface, NzTSType } from 'ng-zorro-antd/core/types';
import { BpsPopoverType } from '../bps-popover/bps-popover';
import { NzTooltipBaseComponent, NzTooltipBaseDirective, NzTooltipTrigger, PropertyMapping } from './base';
import * as i0 from "@angular/core";
export declare class BpsTooltipDirective extends NzTooltipBaseDirective {
    static ngAcceptInputType_bpsTooltipArrowPointAtCenter: BooleanInput;
    title?: NzTSType | null;
    titleContext?: Object | null;
    directiveTitle?: NzTSType | null;
    trigger?: NzTooltipTrigger;
    placement?: string | string[];
    origin?: ElementRef<HTMLElement>;
    visible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    overlayStyle?: NgStyleInterface;
    arrowPointAtCenter?: boolean;
    bpsTooltipColor?: string;
    popoverType: BpsPopoverType;
    tooltipType: BpsPopoverType;
    tooltipDisabled: boolean;
    readonly visibleChange: EventEmitter<boolean>;
    componentRef: ComponentRef<BpsToolTipComponent>;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective);
    protected getProxyPropertyMap(): PropertyMapping;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTooltipDirective, [null, null, null, null, { optional: true; host: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsTooltipDirective, "[bps-tooltip]", ["bpsTooltip"], { "title": { "alias": "bpsTooltipTitle"; "required": false; }; "titleContext": { "alias": "bpsTooltipTitleContext"; "required": false; }; "directiveTitle": { "alias": "bps-tooltip"; "required": false; }; "trigger": { "alias": "bpsTooltipTrigger"; "required": false; }; "placement": { "alias": "bpsTooltipPlacement"; "required": false; }; "origin": { "alias": "bpsTooltipOrigin"; "required": false; }; "visible": { "alias": "bpsTooltipVisible"; "required": false; }; "mouseEnterDelay": { "alias": "bpsTooltipMouseEnterDelay"; "required": false; }; "mouseLeaveDelay": { "alias": "bpsTooltipMouseLeaveDelay"; "required": false; }; "overlayClassName": { "alias": "bpsTooltipOverlayClassName"; "required": false; }; "overlayStyle": { "alias": "bpsTooltipOverlayStyle"; "required": false; }; "arrowPointAtCenter": { "alias": "bpsTooltipArrowPointAtCenter"; "required": false; }; "bpsTooltipColor": { "alias": "bpsTooltipColor"; "required": false; }; "popoverType": { "alias": "bpsPopoverType"; "required": false; }; "tooltipType": { "alias": "bpsTooltipType"; "required": false; }; "tooltipDisabled": { "alias": "bpsTooltipDisabled"; "required": false; }; }, { "visibleChange": "bpsTooltipVisibleChange"; }, never, never, false, never>;
}
export declare class BpsToolTipComponent extends NzTooltipBaseComponent {
    bpsTitle: NzTSType | null;
    bpsTooltipType: string;
    bpsPopoverType: string;
    bpsTooltipDisabled: boolean;
    bpsTitleContext: Object | null;
    bpsColor?: string | NzPresetColor;
    _contentStyleMap: NgStyleInterface;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    protected isEmpty(): boolean;
    protected updateStyles(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsToolTipComponent, [null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsToolTipComponent, "bps-tooltip", ["bpsTooltipComponent"], {}, {}, never, never, false, never>;
}
//# sourceMappingURL=tooltip.d.ts.map