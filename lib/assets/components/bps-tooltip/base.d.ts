import { Direction, Directionality } from '@angular/cdk/bidi';
import { CdkConnectedOverlay, ConnectedOverlayPositionChange, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { NzConfigService, PopConfirmConfig, PopoverConfig } from 'ng-zorro-antd/core/config';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { POSITION_TYPE } from 'ng-zorro-antd/core/overlay';
import { BooleanInput, NgClassInterface, NgStyleInterface, NzSafeAny, NzTSType } from 'ng-zorro-antd/core/types';
import * as i0 from "@angular/core";
export interface PropertyMapping {
    [key: string]: [string, () => unknown];
}
export type NzTooltipTrigger = 'click' | 'focus' | 'hover' | null;
export declare abstract class NzTooltipBaseDirective implements OnChanges, OnDestroy, AfterViewInit {
    elementRef: ElementRef;
    protected hostView: ViewContainerRef;
    protected resolver: ComponentFactoryResolver;
    protected renderer: Renderer2;
    protected noAnimation?: NzNoAnimationDirective;
    protected nzConfigService?: NzConfigService;
    arrowPointAtCenter?: boolean;
    config?: Required<PopoverConfig | PopConfirmConfig>;
    directiveTitle?: NzTSType | null;
    directiveContent?: NzTSType | null;
    title?: NzTSType | null;
    content?: NzTSType | null;
    trigger?: NzTooltipTrigger;
    placement?: string | string[];
    origin?: ElementRef<HTMLElement>;
    visible?: boolean;
    mouseEnterDelay?: number;
    mouseLeaveDelay?: number;
    overlayClassName?: string;
    tooltipType?: string;
    popoverType?: string;
    overlayStyle?: NgStyleInterface;
    tooltipDisabled?: boolean;
    visibleChange: EventEmitter<boolean>;
    /**
     * For create tooltip dynamically. This should be override for each different component.
     */
    protected componentRef: ComponentRef<NzTooltipBaseComponent>;
    /**
     * This true title that would be used in other parts on this component.
     */
    protected get _title(): NzTSType | null;
    protected get _popoverType(): string | null;
    protected get _tooltipDisabled(): boolean;
    protected get _tooltipType(): string | null;
    protected get _content(): NzTSType | null;
    protected get _trigger(): NzTooltipTrigger;
    protected get _placement(): string[];
    protected get _visible(): boolean;
    protected get _mouseEnterDelay(): number;
    protected get _mouseLeaveDelay(): number;
    protected get _overlayClassName(): string | null;
    protected get _overlayStyle(): NgStyleInterface | null;
    private internalVisible;
    protected getProxyPropertyMap(): PropertyMapping;
    component?: NzTooltipBaseComponent;
    protected readonly destroy$: Subject<void>;
    protected readonly triggerDisposables: Array<() => void>;
    private delayTimer?;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective, nzConfigService?: NzConfigService);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    /**
     * Force the component to update its position.
     */
    updatePosition(): void;
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    protected createComponent(): void;
    protected registerTriggers(): void;
    private updatePropertiesByChanges;
    private updatePropertiesByKeys;
    private initProperties;
    private updateComponentValue;
    private delayEnterLeave;
    private removeTriggerListeners;
    private clearTogglingTimer;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzTooltipBaseDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzTooltipBaseDirective, never, never, {}, {}, never, never, false, never>;
}
export declare abstract class NzTooltipBaseComponent implements OnDestroy, OnInit {
    cdr: ChangeDetectorRef;
    private directionality;
    noAnimation?: NzNoAnimationDirective;
    static ngAcceptInputType_bpsVisible: BooleanInput;
    static ngAcceptInputType_bpsArrowPointAtCenter: BooleanInput;
    overlay: CdkConnectedOverlay;
    bpsTitle: NzTSType | null;
    bpsContent: NzTSType | null;
    bpsArrowPointAtCenter: boolean;
    bpsOverlayClassName: string;
    bpsOverlayStyle: NgStyleInterface;
    bpsBackdrop: boolean;
    bpsMouseEnterDelay?: number;
    bpsMouseLeaveDelay?: number;
    bpsTooltipType?: string;
    bpsPopoverType?: string;
    bpsTooltipDisabled?: boolean;
    bpsVisibleChange: Subject<boolean>;
    set bpsVisible(value: boolean);
    get bpsVisible(): boolean;
    _visible: boolean;
    set bpsTrigger(value: NzTooltipTrigger);
    get bpsTrigger(): NzTooltipTrigger;
    protected _trigger: NzTooltipTrigger;
    set bpsPlacement(value: POSITION_TYPE[]);
    preferredPlacement: string;
    origin: ElementRef<NzSafeAny>;
    dir: Direction;
    _classMap: NgClassInterface;
    _prefix: string;
    _positions: ConnectionPositionPair[];
    protected destroy$: Subject<void>;
    constructor(cdr: ChangeDetectorRef, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngOnDestroy(): void;
    show(): void;
    hide(): void;
    updateByDirective(): void;
    /**
     * Force the component to update its position.
     */
    updatePosition(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    setOverlayOrigin(origin: ElementRef<HTMLElement>): void;
    onClickOutside(event: MouseEvent): void;
    /**
     * Hide the component while the content is empty.
     */
    private updateVisibilityByTitle;
    protected updateStyles(): void;
    /**
     * Empty component cannot be opened.
     */
    protected abstract isEmpty(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzTooltipBaseComponent, [null, { optional: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzTooltipBaseComponent, never, never, {}, {}, never, never, false, never>;
}
export declare function isTooltipEmpty(value: string | TemplateRef<void> | null): boolean;
//# sourceMappingURL=base.d.ts.map