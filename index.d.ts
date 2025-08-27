import * as i0 from '@angular/core';
import { OnInit, TemplateRef, Type, EventEmitter, OnChanges, AfterViewInit, OnDestroy, ElementRef, ViewContainerRef, ComponentFactoryResolver, ChangeDetectorRef, SimpleChanges, ComponentRef, SimpleChange, NgZone, Renderer2, AfterContentInit, TrackByFunction, RendererFactory2, QueryList, DoCheck, PipeTransform } from '@angular/core';
import { FocusTrapFactory, FocusMonitor } from '@angular/cdk/a11y';
import * as i64 from '@angular/cdk/overlay';
import { OverlayRef, Overlay, OverlayKeyboardDispatcher, CdkConnectedOverlay, ConnectionPositionPair, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { SafeUrl } from '@angular/platform-browser';
import { BreakpointMap, NzResizeService, NzDestroyService } from 'ng-zorro-antd/core/services';
import * as i70 from '@angular/forms';
import { ControlValueAccessor, NgControl, UntypedFormControl, NgModel, FormControlName, FormControlDirective } from '@angular/forms';
import { NzConfigService as NzConfigService$1, NzConfigKey as NzConfigKey$1, PopoverConfig, PopConfirmConfig } from 'ng-zorro-antd/core/config';
import * as i65 from 'ng-zorro-antd/core/no-animation';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { Platform } from '@angular/cdk/platform';
import { IndexableObject as IndexableObject$1, NzSafeAny, NzTSType, NgStyleInterface, NgClassInterface as NgClassInterface$1, NzSizeLDSType as NzSizeLDSType$1, NzStatus, NzValidateStatus, OnChangeType, OnTouchedType, NzSizeDSType as NzSizeDSType$1 } from 'ng-zorro-antd/core/types';
import { AnimationEvent } from '@angular/animations';
import { Direction, Directionality } from '@angular/cdk/bidi';
import * as i78 from 'ng-zorro-antd/menu';
import { MenuService } from 'ng-zorro-antd/menu';
import { NzListGrid } from 'ng-zorro-antd/list';
import { NzPresetColor } from 'ng-zorro-antd/core/color';
import * as i67 from 'ng-zorro-antd/core/overlay';
import { POSITION_TYPE } from 'ng-zorro-antd/core/overlay';
import { NzFormItemFeedbackIconComponent, NzFormStatusService, NzFormNoStatusService } from 'ng-zorro-antd/core/form';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { MediaMatcher } from '@angular/cdk/layout';
import * as i71 from '@angular/cdk/observers';
import { ContentObserver } from '@angular/cdk/observers';
import * as i72 from 'ng-zorro-antd/core/wave';
import { NzWaveConfig } from 'ng-zorro-antd/core/wave';
import { NzRadioService } from 'ng-zorro-antd/radio';
import * as i76 from 'ng-zorro-antd/table';
import { NzTableComponent } from 'ng-zorro-antd/table';
import * as i57 from 'ng-zorro-antd/core/highlight';
import * as i58 from 'ng-zorro-antd/tree';
import * as i3 from '@angular/common';
import * as i62 from 'ng-zorro-antd/core/pipe';
import * as i63 from 'ng-zorro-antd/icon';
import * as i66 from 'ng-zorro-antd/tooltip';
import * as i68 from 'ng-zorro-antd/empty';
import * as i69 from 'ng-zorro-antd/form';
import * as i73 from 'ng-zorro-antd/spin';
import * as i74 from 'ng-zorro-antd/grid';
import * as i75 from 'ng-zorro-antd/avatar';
import * as i77 from '@tinymce/tinymce-angular';
import * as i79 from 'ng-zorro-antd/resizable';
import * as i80 from 'ng-zorro-antd/select';

declare class BpsComponentsLibService {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsComponentsLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BpsComponentsLibService>;
}

declare class BpsComponentsLibComponent implements OnInit {
    constructor();
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsComponentsLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsComponentsLibComponent, "lib-bps-components-lib", never, {}, {}, never, never, false, never>;
}

/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 */
declare abstract class NzModalRef<T = any, R = any> {
    abstract afterOpen: Observable<void>;
    abstract afterClose: Observable<R>;
    abstract open(): void;
    abstract close(result?: R): void;
    abstract destroy(result?: R): void;
    /**
     * Trigger the nzOnOk/nzOnCancel by manual
     */
    abstract triggerOk(): void;
    abstract triggerCancel(): void;
    /**
     * Return the component instance of nzContent when specify nzContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     */
    abstract getContentComponent(): T;
    /**
     * Get the dom element of this Modal
     */
    abstract getElement(): HTMLElement;
    /**
     * Get the instance of the Modal itself
     */
    abstract getInstance(): BpsModalComponent;
}

declare class BpsModalFooterDirective {
    templateRef: TemplateRef<{}>;
    nzModalRef: NzModalRef<any, any>;
    constructor(templateRef: TemplateRef<{}>);
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsModalFooterDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsModalFooterDirective, "[bpsModalFooter]", ["bpsModalFooter"], {}, {}, never, never, false, never>;
}

/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 */
declare abstract class BpsModalRef<T = any, R = any> {
    abstract afterOpen: Observable<void>;
    abstract afterClose: Observable<R>;
    abstract open(): void;
    abstract close(result?: R): void;
    abstract destroy(result?: R): void;
    /**
     * Trigger the nzOnOk/nzOnCancel by manual
     */
    abstract triggerOk(): void;
    abstract triggerCancel(): void;
    /**
     * Return the component instance of nzContent when specify nzContent as a Component
     * Note: this method may return undefined if the Component has not ready yet. (it only available after Modal's ngOnInit)
     */
    abstract getContentComponent(): T;
    /**
     * Get the dom element of this Modal
     */
    abstract getElement(): HTMLElement;
    /**
     * Get the instance of the Modal itself
     */
    abstract getInstance(): BpsModalComponent;
}

type OnClickCallback<T> = (instance: T) => (false | void | {}) | Promise<false | void | {}>;
type ModalType = 'default' | 'confirm';
interface ModalOptions<T = any, R = any> {
    bpsModalType?: ModalType;
    bpsVisible?: boolean;
    bpsZIndex?: number;
    bpsWidth?: number | string;
    bpsWrapClassName?: string;
    bpsClassName?: string;
    bpsStyle?: object;
    bpsIconType?: string;
    bpsTitle?: string | TemplateRef<{}>;
    bpsCloseIcon?: string | TemplateRef<void>;
    bpsContent?: string | TemplateRef<{}> | Type<T>;
    bpsComponentParams?: Partial<T>;
    bpsClosable?: boolean;
    bpsKeyboard?: boolean;
    bpsMask?: boolean;
    bpsMaskClosable?: boolean;
    bpsMaskStyle?: object;
    bpsBodyStyle?: object;
    bpsFooter?: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null;
    bpsGetContainer?: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    bpsAfterOpen?: EventEmitter<void>;
    bpsAfterClose?: EventEmitter<R>;
    bpsOkText?: string | null;
    bpsOkType?: string;
    bpsOkLoading?: boolean;
    bpsOkDisabled?: boolean;
    bpsCancelDisabled?: boolean;
    bpsOnOk?: EventEmitter<T> | OnClickCallback<T>;
    bpsCancelText?: string | null;
    bpsCancelLoading?: boolean;
    bpsNoAnimation?: boolean;
    bpsOnCancel?: EventEmitter<T> | OnClickCallback<T>;
}
interface ModalButtonOptions<T = any> {
    label: string;
    type?: string;
    shape?: string;
    ghost?: boolean;
    size?: string;
    autoLoading?: boolean;
    show?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    loading?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    disabled?: boolean | ((this: ModalButtonOptions<T>, contentComponentInstance?: T) => boolean);
    onClick?(this: ModalButtonOptions<T>, contentComponentInstance?: T): (void | {}) | Promise<void | {}>;
    [key: string]: any;
}

declare class BpsModalControlService {
    parentService: BpsModalControlService;
    get afterAllClose(): Subject<void>;
    get openModals(): BpsModalRef[];
    private rootOpenModals;
    private rootAfterAllClose;
    private rootRegisteredMetaMap;
    private get registeredMetaMap();
    constructor();
    registerModal(modalRef: BpsModalRef): void;
    deregisterModal(modalRef: BpsModalRef): void;
    hasRegistered(modalRef: BpsModalRef): boolean;
    closeAll(): void;
    private removeOpenModal;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsModalControlService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BpsModalControlService>;
}

interface BpsModalConfig {
    bpsMask?: boolean;
    bpsMaskClosable?: boolean;
}

type NzDirectionVHType = 'vertical' | 'horizontal';
type NzAlignType = 'top' | 'middle' | 'bottom';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
interface IndexableObject {
    [key: string]: any;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
type NgClassType = string | string[] | Set<string> | NgClassInterface;
interface NgClassInterface {
    [klass: string]: any;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
type NzSizeLDSType = 'large' | 'default' | 'small';
type NzSizeMDSType = 'middle' | 'default' | 'small';
type NzSizeDSType = 'default' | 'small';

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
type NzShapeSCType = 'square' | 'circle';

declare enum NzBreakpoint {
    xxl = "xxl",
    xl = "xl",
    lg = "lg",
    md = "md",
    sm = "sm",
    xs = "xs"
}

interface NzConfig {
    affix?: AffixConfig;
    alert?: AlertConfig;
    anchor?: AnchorConfig;
    avatar?: AvatarConfig;
    backTop?: BackTopConfig;
    badge?: BadgeConfig;
    button?: ButtonConfig;
    card?: CardConfig;
    carousel?: CarouselConfig;
    cascader?: CascaderConfig;
    codeEditor?: CodeEditorConfig;
    collapse?: CollapseConfig;
    collapsePanel?: CollapsePanelConfig;
    descriptions?: DescriptionsConfig;
    drawer?: DrawerConfig;
    empty?: EmptyConfig;
    form?: FormConfig;
    grid?: GridConfig;
    icon?: IconConfig;
    message?: MessageConfig;
    modal?: ModalConfig;
    notification?: NotificationConfig;
    pageHeader?: PageHeaderConfig;
    progress?: ProgressConfig;
    rate?: RateConfig;
    spin?: SpinConfig;
    switch?: SwitchConfig;
    table?: TableConfig$1;
    tabs?: TabsConfig;
    timePicker?: TimePickerConfig;
    tree?: TreeConfig;
    treeSelect?: TreeSelectConfig;
    typography?: TypographyConfig;
}
interface AffixConfig {
    nzOffsetBottom?: number;
    nzOffsetTop?: number;
}
interface AlertConfig {
    nzCloseable?: boolean;
    nzShowIcon?: boolean;
}
interface AvatarConfig {
    nzShape?: NzShapeSCType;
    nzSize?: NzSizeLDSType | number;
}
interface AnchorConfig {
    nzBounds?: number;
    nzOffsetBottom?: number;
    nzOffsetTop?: number;
    nzShowInkInFixed?: boolean;
}
interface BackTopConfig {
    nzVisibilityHeight?: number;
}
interface BadgeConfig {
    nzColor?: number;
    nzOverflowCount?: number;
    nzShowZero?: number;
}
interface ButtonConfig {
    nzSize?: 'large' | 'default' | 'small';
}
interface CodeEditorConfig {
    assetsRoot?: string | SafeUrl;
    defaultEditorOption?: any;
    useStaticLoading?: boolean;
    onLoad?(): void;
    onFirstEditorInit?(): void;
    onInit?(): void;
}
interface CardConfig {
    nzSize?: NzSizeDSType;
    nzHoverable?: boolean;
    nzBordered?: boolean;
}
interface CarouselConfig {
    nzAutoPlay?: boolean;
    nzAutoPlaySpeed?: boolean;
    nzDots?: boolean;
    nzEffect?: 'scrollx' | 'fade' | string;
    nzEnableSwipe?: boolean;
    nzVertical?: boolean;
}
interface CascaderConfig {
    nzSize?: string;
}
interface CollapseConfig {
    nzAccordion?: boolean;
    nzBordered?: boolean;
}
interface CollapsePanelConfig {
    nzShowArrow?: boolean;
}
interface DescriptionsConfig {
    nzBorder?: boolean;
    nzColumn?: {
        [key in NzBreakpoint]?: number;
    } | number;
    nzSize?: 'default' | 'middle' | 'small';
    nzColon?: boolean;
}
interface DrawerConfig {
    nzMask?: boolean;
    nzMaskClosable?: boolean;
}
interface EmptyConfig {
    nzDefaultEmptyContent?: Type<any> | TemplateRef<string> | string | undefined;
}
interface FormConfig {
    nzNoColon?: boolean;
}
interface GridConfig {
    nzAlign?: NzAlignType;
    nzGutter?: number | BreakpointMap;
    nzJustify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
    nzType?: 'flex';
}
interface IconConfig {
    nzTheme?: 'fill' | 'outline' | 'twotone';
    nzTwotoneColor?: string;
}
interface MessageConfig {
    nzAnimate?: boolean;
    nzDuration?: number;
    nzMaxStack?: number;
    nzPauseOnHover?: boolean;
    nzTop?: number | string;
}
interface ModalConfig {
    nzMask?: boolean;
    nzMaskClosable?: boolean;
}
interface NotificationConfig extends MessageConfig {
    nzTop?: string | number;
    nzBottom?: string | number;
    nzPlacement?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | string;
}
interface PageHeaderConfig {
    nzGhost: boolean;
}
interface ProgressConfig {
    nzGapDegree?: number;
    nzGapPosition?: 'top' | 'right' | 'bottom' | 'left';
    nzShowInfo?: boolean;
    nzStrokeSwitch?: number;
    nzStrokeWidth?: number;
    nzSize?: 'default' | 'small';
    nzStrokeLinecap?: 'round' | 'square';
    nzStrokeColor?: string;
}
interface RateConfig {
    nzAllowClear?: boolean;
    nzAllowHalf?: boolean;
}
interface SpinConfig {
    nzIndicator?: TemplateRef<void>;
}
interface SwitchConfig {
    nzSize: NzSizeDSType;
}
interface TableConfig$1 {
    nzBordered?: boolean;
    nzSize?: NzSizeMDSType;
    nzShowQuickJumper?: boolean;
    nzShowSizeChanger?: boolean;
    nzSimple?: boolean;
    nzHideOnSinglePage?: boolean;
}
interface TabsConfig {
    nzAnimated?: boolean | {
        inkBar: boolean;
        tabPane: boolean;
    };
    nzSize?: NzSizeLDSType;
    nzType?: 'line' | 'card';
    nzTabBarGutter?: number;
    nzShowPagination?: boolean;
}
interface TimePickerConfig {
    nzAllowEmpty?: boolean;
    nzClearText?: string;
    nzFormat?: string;
    nzHourStep?: number;
    nzMinuteStep?: number;
    nzSecondStep?: number;
    nzPopupClassName?: string;
    nzUse12Hours?: string;
}
interface TreeConfig {
    nzBlockNode?: boolean;
    nzShowIcon?: boolean;
    nzHideUnMatched?: boolean;
}
interface TreeSelectConfig {
    nzShowIcon?: string;
    nzShowLine?: boolean;
    nzDropdownMatchSelectWidth?: boolean;
    nzHideUnMatched?: boolean;
    nzSize?: 'large' | 'small' | 'default';
}
interface TypographyConfig {
    nzEllipsisRows?: number;
}
type NzConfigKey = keyof NzConfig;

declare class NzConfigService {
    private configUpdated$;
    /** Global config holding property. */
    private config;
    defaultConfig: NzConfig | null;
    constructor();
    getConfigForComponent<T extends NzConfigKey>(componentName: T): NzConfig[T];
    getConfigChangeEventForComponent(componentName: NzConfigKey): Observable<void>;
    set<T extends NzConfigKey>(componentName: T, value: NzConfig[T]): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzConfigService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NzConfigService>;
}

declare const MODAL_ANIMATE_DURATION = 200;
declare const WRAP_CLASS_NAME = "ant-modal-wrap";
declare class BpsModalComponent<T = any, R = any> extends BpsModalRef<T, R> implements OnInit, OnChanges, AfterViewInit, OnDestroy, ModalOptions<T> {
    nzConfigService: NzConfigService;
    private overlay;
    private overlayKeyboardDispatcher;
    private i18n;
    private cfr;
    private elementRef;
    private viewContainer;
    private modalControl;
    private focusTrapFactory;
    private cdr;
    bpsVisible: boolean;
    bpsClosable: boolean;
    bpsOkLoading: boolean;
    bpsOkDisabled: boolean;
    bpsCancelDisabled: boolean;
    bpsCancelLoading: boolean;
    bpsKeyboard: boolean;
    bpsNoAnimation: boolean;
    bpsModalDisabled: boolean;
    bpsMask: boolean;
    bpsMaskClosable: boolean;
    bpsContent: string | TemplateRef<{}> | Type<T>;
    bpsComponentParams: T;
    bpsFooter: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null;
    bpsGetContainer: HTMLElement | OverlayRef | (() => HTMLElement | OverlayRef);
    bpsZIndex: number;
    bpsWidth: number | string;
    bpsWrapClassName: string;
    bpsClassName: string;
    bpsStyle: object;
    bpsTitle: string | TemplateRef<{}>;
    bpsCloseIcon: string | TemplateRef<void>;
    bpsMaskStyle: object;
    bpsBodyStyle: object;
    bpsOkText: string | null;
    bpsCancelText: string | null;
    bpsOkType: string;
    bpsIconType: string;
    bpsModalType: ModalType;
    readonly bpsOnOk: EventEmitter<T> | OnClickCallback<T>;
    readonly bpsOnCancel: EventEmitter<T> | OnClickCallback<T>;
    readonly bpsAfterOpen: EventEmitter<void>;
    readonly bpsAfterClose: EventEmitter<R>;
    readonly bpsVisibleChange: EventEmitter<boolean>;
    modalContainer: ElementRef;
    bodyContainer: ViewContainerRef;
    autoFocusButtonOk: ElementRef;
    set modalFooter(value: BpsModalFooterDirective);
    get afterOpen(): Observable<void>;
    get afterClose(): Observable<R>;
    get cancelText(): string;
    get okText(): string;
    get hidden(): boolean;
    /**
     * @description
     * The calculated highest weight of mask value
     *
     * Weight of different mask input:
     * component default value < global configuration < component input value
     */
    get mask(): boolean;
    /**
     * @description
     * The calculated highest weight of maskClosable value
     *
     * Weight of different maskClosable input:
     * component default value < global configuration < component input value
     */
    get maskClosable(): boolean;
    locale: {
        okText?: string;
        cancelText?: string;
    };
    maskAnimationClassMap: object | null;
    modalAnimationClassMap: object | null;
    transformOrigin: string;
    private contentComponentRef;
    private animationState;
    private container;
    private unsubscribe$;
    private previouslyFocusedElement;
    private focusTrap;
    private scrollStrategy;
    private overlayRef;
    private dialogMouseDown;
    private timeoutId;
    [key: string]: any;
    bpsModalGlobalConfig: BpsModalConfig | null;
    document: Document;
    constructor(nzConfigService: NzConfigService, overlay: Overlay, overlayKeyboardDispatcher: OverlayKeyboardDispatcher, i18n: NzI18nService, cfr: ComponentFactoryResolver, elementRef: ElementRef, viewContainer: ViewContainerRef, modalControl: BpsModalControlService, focusTrapFactory: FocusTrapFactory, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setFooterWithTemplate(templateRef: TemplateRef<{}>): void;
    setOverlayRef(overlayRef: OverlayRef): void;
    keydownListener(event: KeyboardEvent): void;
    open(): void;
    close(result?: R): void;
    destroy(result?: R): void;
    triggerOk(): void;
    triggerCancel(): void;
    getInstance(): BpsModalComponent;
    getContentComponentRef(): ComponentRef<T>;
    getContentComponent(): T;
    getElement(): HTMLElement;
    onMaskDialogDown(): void;
    onDialogUp(): void;
    onClickMask($event: MouseEvent): void;
    isModalType(type: ModalType): boolean;
    onClickCloseBtn(): void;
    onClickOkCancel(type: 'ok' | 'cancel'): void;
    isNonEmptyString(value: {}): boolean;
    isTemplateRef(value: {}): boolean;
    isComponent(value: {}): boolean;
    isModalButtons(value: string | TemplateRef<{}> | Array<ModalButtonOptions<T>> | null): boolean;
    private handleVisibleStateChange;
    getButtonCallableProp(options: ModalButtonOptions<T>, prop: string): {};
    onButtonClick(button: ModalButtonOptions<T>): void;
    private changeVisibleFromInside;
    private changeAnimationState;
    private animateTo;
    private formatModalButtons;
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    private createDynamicComponent;
    private updateTransformOrigin;
    private savePreviouslyFocusedElement;
    private trapFocus;
    private restoreFocus;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsModalComponent<any, any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsModalComponent<any, any>, "bps-modal", ["bpsModal"], { "bpsVisible": { "alias": "bpsVisible"; "required": false; }; "bpsClosable": { "alias": "bpsClosable"; "required": false; }; "bpsOkLoading": { "alias": "bpsOkLoading"; "required": false; }; "bpsOkDisabled": { "alias": "bpsOkDisabled"; "required": false; }; "bpsCancelDisabled": { "alias": "bpsCancelDisabled"; "required": false; }; "bpsCancelLoading": { "alias": "bpsCancelLoading"; "required": false; }; "bpsKeyboard": { "alias": "bpsKeyboard"; "required": false; }; "bpsNoAnimation": { "alias": "bpsNoAnimation"; "required": false; }; "bpsModalDisabled": { "alias": "bpsModalDisabled"; "required": false; }; "bpsMask": { "alias": "bpsMask"; "required": false; }; "bpsMaskClosable": { "alias": "bpsMaskClosable"; "required": false; }; "bpsContent": { "alias": "bpsContent"; "required": false; }; "bpsComponentParams": { "alias": "bpsComponentParams"; "required": false; }; "bpsFooter": { "alias": "bpsFooter"; "required": false; }; "bpsGetContainer": { "alias": "bpsGetContainer"; "required": false; }; "bpsZIndex": { "alias": "bpsZIndex"; "required": false; }; "bpsWidth": { "alias": "bpsWidth"; "required": false; }; "bpsWrapClassName": { "alias": "bpsWrapClassName"; "required": false; }; "bpsClassName": { "alias": "bpsClassName"; "required": false; }; "bpsStyle": { "alias": "bpsStyle"; "required": false; }; "bpsTitle": { "alias": "bpsTitle"; "required": false; }; "bpsCloseIcon": { "alias": "bpsCloseIcon"; "required": false; }; "bpsMaskStyle": { "alias": "bpsMaskStyle"; "required": false; }; "bpsBodyStyle": { "alias": "bpsBodyStyle"; "required": false; }; "bpsOkText": { "alias": "bpsOkText"; "required": false; }; "bpsCancelText": { "alias": "bpsCancelText"; "required": false; }; "bpsOkType": { "alias": "bpsOkType"; "required": false; }; "bpsIconType": { "alias": "bpsIconType"; "required": false; }; "bpsModalType": { "alias": "bpsModalType"; "required": false; }; "bpsOnOk": { "alias": "bpsOnOk"; "required": false; }; "bpsOnCancel": { "alias": "bpsOnCancel"; "required": false; }; }, { "bpsOnOk": "bpsOnOk"; "bpsOnCancel": "bpsOnCancel"; "bpsAfterOpen": "bpsAfterOpen"; "bpsAfterClose": "bpsAfterClose"; "bpsVisibleChange": "bpsVisibleChange"; }, ["modalFooter"], ["*"], false, never>;
    static ngAcceptInputType_bpsVisible: unknown;
    static ngAcceptInputType_bpsClosable: unknown;
    static ngAcceptInputType_bpsOkLoading: unknown;
    static ngAcceptInputType_bpsOkDisabled: unknown;
    static ngAcceptInputType_bpsCancelDisabled: unknown;
    static ngAcceptInputType_bpsCancelLoading: unknown;
    static ngAcceptInputType_bpsKeyboard: unknown;
    static ngAcceptInputType_bpsNoAnimation: unknown;
    static ngAcceptInputType_bpsModalDisabled: unknown;
    static ngAcceptInputType_bpsMask: unknown;
    static ngAcceptInputType_bpsMaskClosable: unknown;
}

interface NzFormatEmitEvent {
    eventName: string;
    node?: NzTreeNode | null;
    event?: MouseEvent | DragEvent | null;
    dragNode?: NzTreeNode;
    selectedKeys?: NzTreeNode[];
    checkedKeys?: NzTreeNode[];
    matchedKeys?: NzTreeNode[];
    nodes?: NzTreeNode[];
    keys?: string[];
}
interface NzFormatBeforeDropEvent {
    dragNode: NzTreeNode;
    node: NzTreeNode;
    pos: number;
}
interface NzTreeNodeBaseComponent {
    setClassMap(): void;
    markForCheck(): void;
}

declare class NzTreeBaseService implements OnDestroy {
    DRAG_SIDE_RANGE: number;
    DRAG_MIN_GAP: number;
    isCheckStrictly: boolean;
    isMultiple: boolean;
    selectedNode: NzTreeNode;
    rootNodes: NzTreeNode[];
    selectedNodeList: NzTreeNode[];
    expandedNodeList: NzTreeNode[];
    checkedNodeList: NzTreeNode[];
    halfCheckedNodeList: NzTreeNode[];
    matchedNodeList: NzTreeNode[];
    triggerEventChange$: Subject<NzFormatEmitEvent>;
    /**
     * trigger event
     */
    eventTriggerChanged(): Observable<NzFormatEmitEvent>;
    /**
     * reset tree nodes will clear default node list
     */
    initTree(nzNodes: NzTreeNode[]): void;
    getSelectedNode(): NzTreeNode | null;
    /**
     * get some list
     */
    getSelectedNodeList(): NzTreeNode[];
    /**
     * return checked nodes
     */
    getCheckedNodeList(): NzTreeNode[];
    getHalfCheckedNodeList(): NzTreeNode[];
    /**
     * return expanded nodes
     */
    getExpandedNodeList(): NzTreeNode[];
    /**
     * return search matched nodes
     */
    getMatchedNodeList(): NzTreeNode[];
    isArrayOfNzTreeNode(value: any[]): boolean;
    /**
     * reset selectedNodeList
     */
    calcSelectedKeys(selectedKeys: string[], nzNodes: NzTreeNode[], isMulti?: boolean): void;
    /**
     * reset expandedNodeList
     */
    calcExpandedKeys(expandedKeys: string[], nzNodes: NzTreeNode[]): void;
    /**
     * reset checkedNodeList
     */
    calcCheckedKeys(checkedKeys: string[], nzNodes: NzTreeNode[], isCheckStrictly?: boolean): void;
    /**
     * set drag node
     */
    setSelectedNode(node: NzTreeNode): void;
    /**
     * set node selected status
     */
    setNodeActive(node: NzTreeNode): void;
    /**
     * add or remove node to selectedNodeList
     */
    setSelectedNodeList(node: NzTreeNode, isMultiple?: boolean): void;
    /**
     * merge checked nodes
     */
    setHalfCheckedNodeList(node: NzTreeNode): void;
    setCheckedNodeList(node: NzTreeNode): void;
    /**
     * conduct checked/selected/expanded keys
     */
    conductNodeState(type?: string): NzTreeNode[];
    /**
     * set expanded nodes
     */
    setExpandedNodeList(node: NzTreeNode): void;
    /**
     * check state
     * @param isCheckStrictly
     */
    refreshCheckState(isCheckStrictly?: boolean): void;
    conduct(node: NzTreeNode): void;
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    conductUp(node: NzTreeNode): void;
    /**
     * reset child check state
     */
    conductDown(node: NzTreeNode, value: boolean): void;
    /**
     * search value & expand node
     * should add expandlist
     */
    searchExpand(value: string): void;
    /**
     * flush after delete node
     */
    afterRemove(nodes: NzTreeNode[]): void;
    /**
     * drag event
     */
    refreshDragNode(node: NzTreeNode): void;
    resetNodeLevel(node: NzTreeNode): void;
    calcDropPosition(event: DragEvent): number;
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    dropAndApply(targetNode: NzTreeNode, dragPos?: number): void;
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    formatEvent(eventName: string, node: NzTreeNode | null, event: MouseEvent | DragEvent | null): NzFormatEmitEvent;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzTreeBaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NzTreeBaseService>;
}

interface NzTreeNodeOptions {
    title: string;
    key: string;
    icon?: string;
    isLeaf?: boolean;
    checked?: boolean;
    selected?: boolean;
    selectable?: boolean;
    disabled?: boolean;
    disableCheckbox?: boolean;
    expanded?: boolean;
    children?: NzTreeNodeOptions[];
    [key: string]: any;
}
declare class NzTreeNode {
    private _title;
    key: string;
    level: number;
    origin: NzTreeNodeOptions;
    parentNode: NzTreeNode | null;
    private _icon;
    private _children;
    private _isLeaf;
    private _isChecked;
    /**
     * @deprecated Maybe removed in next major version, use isChecked instead
     */
    private _isAllChecked;
    private _isSelectable;
    private _isDisabled;
    private _isDisableCheckbox;
    private _isExpanded;
    private _isHalfChecked;
    private _isSelected;
    private _isLoading;
    canHide: boolean;
    isMatched: boolean;
    service: NzTreeBaseService | null;
    component: NzTreeNodeBaseComponent;
    get treeService(): NzTreeBaseService | null;
    constructor(option: NzTreeNodeOptions | NzTreeNode, parent?: NzTreeNode | null, service?: NzTreeBaseService | null);
    /**
     * auto generate
     * get
     * set
     */
    get title(): string;
    set title(value: string);
    get icon(): string;
    set icon(value: string);
    get children(): NzTreeNode[];
    set children(value: NzTreeNode[]);
    get isLeaf(): boolean;
    set isLeaf(value: boolean);
    get isChecked(): boolean;
    set isChecked(value: boolean);
    get isAllChecked(): boolean;
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    set isAllChecked(value: boolean);
    get isHalfChecked(): boolean;
    set isHalfChecked(value: boolean);
    get isSelectable(): boolean;
    set isSelectable(value: boolean);
    get isDisabled(): boolean;
    set isDisabled(value: boolean);
    get isDisableCheckbox(): boolean;
    set isDisableCheckbox(value: boolean);
    get isExpanded(): boolean;
    set isExpanded(value: boolean);
    get isSelected(): boolean;
    set isSelected(value: boolean);
    get isLoading(): boolean;
    set isLoading(value: boolean);
    setSyncChecked(checked?: boolean, halfChecked?: boolean): void;
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    setChecked(checked?: boolean, halfChecked?: boolean): void;
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     */
    setExpanded(value: boolean): void;
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    setSelected(value: boolean): void;
    getParentNode(): NzTreeNode | null;
    getChildren(): NzTreeNode[];
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    addChildren(children: any[], childPos?: number): void;
    clearChildren(): void;
    remove(): void;
    afterValueChange(key: string): void;
    update(): void;
}

declare class NzTreeBase {
    nzTreeService: NzTreeBaseService;
    constructor(nzTreeService: NzTreeBaseService);
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    coerceTreeNodes(value: any[]): NzTreeNode[];
    /**
     * Get all nodes({@link NzTreeNode})
     */
    getTreeNodes(): NzTreeNode[];
    /**
     * Get {@link NzTreeNode} with key
     */
    getTreeNodeByKey(key: string): NzTreeNode | null;
    /**
     * Get checked nodes(merged)
     */
    getCheckedNodeList(): NzTreeNode[];
    /**
     * Get selected nodes
     */
    getSelectedNodeList(): NzTreeNode[];
    /**
     * Get half checked nodes
     */
    getHalfCheckedNodeList(): NzTreeNode[];
    /**
     * Get expanded nodes
     */
    getExpandedNodeList(): NzTreeNode[];
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    getMatchedNodeList(): NzTreeNode[];
}

declare class BpsTreeService extends NzTreeBaseService {
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTreeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BpsTreeService>;
}

declare function NzTreeServiceFactory(higherOrderService: NzTreeBaseService, treeService: BpsTreeService): NzTreeBaseService;
declare class BpsTreeComponent extends NzTreeBase implements OnInit, OnDestroy, ControlValueAccessor, OnChanges {
    nzConfigService: NzConfigService$1;
    private cdr;
    bpsShowIcon: boolean;
    bpsShowExpand: boolean;
    bpsShowLine: boolean;
    bpsExpandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsCheckable: boolean;
    bpsAsyncData: boolean;
    bpsDraggable: boolean;
    bpsHideUnMatched: boolean;
    bpsSelectMode: boolean;
    bpsCheckStrictly: boolean;
    bpsBlockNode: boolean;
    bpsExpandAll: boolean;
    bpsCustomTree: boolean;
    bpsTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsTreeTemplateChild: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    get treeTemplate(): TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    /**
     * @deprecated 9.0.0 use `bpsExpandAll` instead.
     */
    set bpsDefaultExpandAll(value: boolean);
    get bpsDefaultExpandAll(): boolean;
    private _bpsDefaultExpandAll;
    bpsBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    bpsMultiple: boolean;
    set bpsData(value: any[]);
    /**
     * @deprecated 9.0.0 - use `bpsExpandedKeys` instead.
     */
    set bpsDefaultExpandedKeys(value: string[]);
    /**
     * @deprecated 9.0.0 - use `bpsSelectedKeys` instead.
     */
    set bpsDefaultSelectedKeys(value: string[]);
    /**
     * @deprecated 9.0.0 - use `bpsCheckedKeys` instead.
     */
    set bpsDefaultCheckedKeys(value: string[]);
    set bpsExpandedKeys(value: string[]);
    set bpsSelectedKeys(value: string[]);
    set bpsCheckedKeys(value: string[]);
    set bpsSearchValue(value: string);
    get bpsSearchValue(): string;
    /**
     * To render nodes if root is changed.
     */
    get bpsNodes(): NzTreeNode[];
    readonly bpsExpandedKeysChange: EventEmitter<string[]>;
    readonly bpsSelectedKeysChange: EventEmitter<string[]>;
    readonly bpsCheckedKeysChange: EventEmitter<string[]>;
    readonly bpsSearchValueChange: EventEmitter<NzFormatEmitEvent>;
    /**
     * @deprecated use `nzSearchValueChange` instead.
     */
    readonly bpsOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    readonly bpsClick: EventEmitter<NzFormatEmitEvent>;
    readonly bpsDblClick: EventEmitter<NzFormatEmitEvent>;
    readonly bpsContextMenu: EventEmitter<NzFormatEmitEvent>;
    readonly bpsCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    readonly bpsExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragStart: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragOver: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDrop: EventEmitter<NzFormatEmitEvent>;
    readonly bpsOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    _searchValue: string;
    bpsDefaultSubject: ReplaySubject<{
        type: string;
        keys: string[];
    }>;
    destroy$: Subject<boolean>;
    prefixCls: string;
    classMap: {};
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    setClassMap(): void;
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    initNzData(value: any[]): void;
    noAnimation: NzNoAnimationDirective;
    constructor(nzTreeService: NzTreeBaseService, nzConfigService: NzConfigService$1, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTreeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTreeComponent, "bps-tree", ["bpsTree"], { "bpsShowIcon": { "alias": "bpsShowIcon"; "required": false; }; "bpsShowExpand": { "alias": "bpsShowExpand"; "required": false; }; "bpsShowLine": { "alias": "bpsShowLine"; "required": false; }; "bpsExpandedIcon": { "alias": "bpsExpandedIcon"; "required": false; }; "bpsCheckable": { "alias": "bpsCheckable"; "required": false; }; "bpsAsyncData": { "alias": "bpsAsyncData"; "required": false; }; "bpsDraggable": { "alias": "bpsDraggable"; "required": false; }; "bpsHideUnMatched": { "alias": "bpsHideUnMatched"; "required": false; }; "bpsSelectMode": { "alias": "bpsSelectMode"; "required": false; }; "bpsCheckStrictly": { "alias": "bpsCheckStrictly"; "required": false; }; "bpsBlockNode": { "alias": "bpsBlockNode"; "required": false; }; "bpsExpandAll": { "alias": "bpsExpandAll"; "required": false; }; "bpsCustomTree": { "alias": "bpsCustomTree"; "required": false; }; "bpsTreeTemplate": { "alias": "bpsTreeTemplate"; "required": false; }; "bpsDefaultExpandAll": { "alias": "bpsDefaultExpandAll"; "required": false; }; "bpsBeforeDrop": { "alias": "bpsBeforeDrop"; "required": false; }; "bpsMultiple": { "alias": "bpsMultiple"; "required": false; }; "bpsData": { "alias": "bpsData"; "required": false; }; "bpsDefaultExpandedKeys": { "alias": "bpsDefaultExpandedKeys"; "required": false; }; "bpsDefaultSelectedKeys": { "alias": "bpsDefaultSelectedKeys"; "required": false; }; "bpsDefaultCheckedKeys": { "alias": "bpsDefaultCheckedKeys"; "required": false; }; "bpsExpandedKeys": { "alias": "bpsExpandedKeys"; "required": false; }; "bpsSelectedKeys": { "alias": "bpsSelectedKeys"; "required": false; }; "bpsCheckedKeys": { "alias": "bpsCheckedKeys"; "required": false; }; "bpsSearchValue": { "alias": "bpsSearchValue"; "required": false; }; }, { "bpsExpandedKeysChange": "bpsExpandedKeysChange"; "bpsSelectedKeysChange": "bpsSelectedKeysChange"; "bpsCheckedKeysChange": "bpsCheckedKeysChange"; "bpsSearchValueChange": "bpsSearchValueChange"; "bpsOnSearchNode": "bpsOnSearchNode"; "bpsClick": "bpsClick"; "bpsDblClick": "bpsDblClick"; "bpsContextMenu": "bpsContextMenu"; "bpsCheckBoxChange": "bpsCheckBoxChange"; "bpsExpandChange": "bpsExpandChange"; "bpsOnDragStart": "bpsOnDragStart"; "bpsOnDragEnter": "bpsOnDragEnter"; "bpsOnDragOver": "bpsOnDragOver"; "bpsOnDragLeave": "bpsOnDragLeave"; "bpsOnDrop": "bpsOnDrop"; "bpsOnDragEnd": "bpsOnDragEnd"; }, ["bpsTreeTemplateChild"], never, false, never>;
    static ngAcceptInputType_bpsShowIcon: unknown;
    static ngAcceptInputType_bpsShowExpand: unknown;
    static ngAcceptInputType_bpsShowLine: unknown;
    static ngAcceptInputType_bpsCheckable: unknown;
    static ngAcceptInputType_bpsAsyncData: unknown;
    static ngAcceptInputType_bpsDraggable: unknown;
    static ngAcceptInputType_bpsHideUnMatched: unknown;
    static ngAcceptInputType_bpsSelectMode: unknown;
    static ngAcceptInputType_bpsCheckStrictly: unknown;
    static ngAcceptInputType_bpsBlockNode: unknown;
    static ngAcceptInputType_bpsExpandAll: unknown;
    static ngAcceptInputType_bpsCustomTree: unknown;
    static ngAcceptInputType_bpsDefaultExpandAll: unknown;
    static ngAcceptInputType_bpsMultiple: unknown;
}

declare class BpsTreeNodeComponent implements OnInit, OnChanges, OnDestroy {
    nzTreeService: NzTreeBaseService;
    private ngZone;
    private renderer;
    private elRef;
    private cdr;
    dragElement: ElementRef;
    /**
     * for global property
     */
    bpsTreeNode: NzTreeNode;
    bpsShowLine: boolean;
    bpsShowExpand: boolean;
    bpsCheckable: boolean;
    bpsAsyncData: boolean;
    bpsHideUnMatched: boolean;
    bpsNoAnimation: boolean;
    bpsSelectMode: boolean;
    bpsShowIcon: boolean;
    bpsExpandedIcon: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsTreeTemplate: TemplateRef<{
        $implicit: NzTreeNode;
    }>;
    bpsBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    bpsSearchValue: string;
    bpsCustomTree: boolean;
    set bpsDraggable(value: boolean);
    get bpsDraggable(): boolean;
    /**
     * @deprecated use `nzExpandAll` instead.
     */
    set bpsDefaultExpandAll(value: boolean);
    get bpsDefaultExpandAll(): boolean;
    set bpsExpandAll(value: boolean);
    get bpsExpandAll(): boolean;
    prefixCls: string;
    bpsNodeClass: {};
    bpsNodeSwitcherClass: {};
    bpsNodeContentClass: {};
    bpsNodeCheckboxClass: {};
    bpsNodeContentIconClass: {};
    bpsNodeContentLoadingClass: {};
    /**
     * drag var
     */
    destroy$: Subject<boolean>;
    dragPos: number;
    dragPosClass: {
        [key: string]: string;
    };
    /**
     * default set
     */
    _bpsDraggable: boolean;
    _bpsExpandAll: boolean;
    get bpsIcon(): string;
    get canDraggable(): boolean | null;
    get isShowLineIcon(): boolean;
    get isShowSwitchIcon(): boolean;
    get isSwitcherOpen(): boolean;
    get isSwitcherClose(): boolean;
    get displayStyle(): string;
    /**
     * reset node class
     */
    setClassMap(): void;
    onMousedown(event: MouseEvent): void;
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event: MouseEvent): void;
    nzDblClick(event: MouseEvent): void;
    /**
     * @param event
     */
    nzContextMenu(event: MouseEvent): void;
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event: MouseEvent): void;
    private setDisplayForChildNodes;
    private setDisplayForParentNodes;
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event: MouseEvent): void;
    /**
     * drag event
     * @param e
     */
    clearDragClass(): void;
    handleDragStart(e: DragEvent): void;
    handleDragEnter(e: DragEvent): void;
    handleDragOver(e: DragEvent): void;
    handleDragLeave(e: DragEvent): void;
    handleDragDrop(e: DragEvent): void;
    handleDragEnd(e: DragEvent): void;
    /**
     * Listening to dragging events.
     */
    handDragEvent(): void;
    isTemplateRef(value: {}): boolean;
    markForCheck(): void;
    noAnimation: NzNoAnimationDirective;
    constructor(nzTreeService: NzTreeBaseService, ngZone: NgZone, renderer: Renderer2, elRef: ElementRef, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTreeNodeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTreeNodeComponent, "bps-tree-node", ["bpsTreeNode"], { "bpsTreeNode": { "alias": "bpsTreeNode"; "required": false; }; "bpsShowLine": { "alias": "bpsShowLine"; "required": false; }; "bpsShowExpand": { "alias": "bpsShowExpand"; "required": false; }; "bpsCheckable": { "alias": "bpsCheckable"; "required": false; }; "bpsAsyncData": { "alias": "bpsAsyncData"; "required": false; }; "bpsHideUnMatched": { "alias": "bpsHideUnMatched"; "required": false; }; "bpsNoAnimation": { "alias": "bpsNoAnimation"; "required": false; }; "bpsSelectMode": { "alias": "bpsSelectMode"; "required": false; }; "bpsShowIcon": { "alias": "bpsShowIcon"; "required": false; }; "bpsExpandedIcon": { "alias": "bpsExpandedIcon"; "required": false; }; "bpsTreeTemplate": { "alias": "bpsTreeTemplate"; "required": false; }; "bpsBeforeDrop": { "alias": "bpsBeforeDrop"; "required": false; }; "bpsSearchValue": { "alias": "bpsSearchValue"; "required": false; }; "bpsCustomTree": { "alias": "bpsCustomTree"; "required": false; }; "bpsDraggable": { "alias": "bpsDraggable"; "required": false; }; "bpsDefaultExpandAll": { "alias": "bpsDefaultExpandAll"; "required": false; }; "bpsExpandAll": { "alias": "bpsExpandAll"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_bpsShowLine: unknown;
    static ngAcceptInputType_bpsShowExpand: unknown;
    static ngAcceptInputType_bpsCheckable: unknown;
    static ngAcceptInputType_bpsAsyncData: unknown;
    static ngAcceptInputType_bpsHideUnMatched: unknown;
    static ngAcceptInputType_bpsNoAnimation: unknown;
    static ngAcceptInputType_bpsSelectMode: unknown;
    static ngAcceptInputType_bpsShowIcon: unknown;
    static ngAcceptInputType_bpsCustomTree: unknown;
}

type NzPlacementType = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
declare class BpsDropdownMenuComponent implements AfterContentInit, OnDestroy, OnInit {
    private cdr;
    private elementRef;
    private renderer;
    viewContainerRef: ViewContainerRef;
    nzMenuService: MenuService;
    mouseState$: BehaviorSubject<boolean>;
    isChildSubMenuOpen$: BehaviorSubject<boolean>;
    descendantMenuItemClick$: Subject<any>;
    animationStateChange$: EventEmitter<AnimationEvent>;
    bpsOverlayClassName: string;
    bpsOverlayStyle: IndexableObject$1;
    templateRef: TemplateRef<NzSafeAny>;
    bpsPlacement: string;
    dir: Direction;
    private destroy$;
    onAnimationEvent(event: AnimationEvent): void;
    setMouseState(visible: boolean): void;
    setValue<T extends keyof BpsDropdownMenuComponent>(key: T, value: this[T]): void;
    directionality: Directionality;
    noAnimation: NzNoAnimationDirective;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, nzMenuService: MenuService);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsDropdownMenuComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsDropdownMenuComponent, "bps-dropdown-menu", ["bpsDropdownMenu"], {}, {}, never, ["*"], false, never>;
}

declare class BpsDropDownDirective implements AfterViewInit, OnDestroy, OnChanges {
    readonly nzConfigService: NzConfigService$1;
    elementRef: ElementRef;
    private overlay;
    private renderer;
    private viewContainerRef;
    private platform;
    readonly _nzModuleName: NzConfigKey$1;
    private portal?;
    private overlayRef;
    private destroy$;
    private positionStrategy;
    private inputVisible$;
    private bpsTrigger$;
    private overlayClose$;
    bpsDropdownMenu: BpsDropdownMenuComponent | null;
    bpsTrigger: 'click' | 'hover';
    bpsMatchWidthElement: ElementRef | null;
    bpsBackdrop: boolean;
    bpsClickHide: boolean;
    bpsDisabled: boolean;
    bpsVisible: boolean;
    bpsOverlayClassName: string;
    bpsOverlayStyle: IndexableObject$1;
    bpsPlacement: NzPlacementType;
    readonly bpsVisibleChange: EventEmitter<boolean>;
    setDropdownMenuValue<T extends keyof BpsDropdownMenuComponent>(key: T, value: BpsDropdownMenuComponent[T]): void;
    constructor(nzConfigService: NzConfigService$1, elementRef: ElementRef, overlay: Overlay, renderer: Renderer2, viewContainerRef: ViewContainerRef, platform: Platform);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsDropDownDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsDropDownDirective, "[bps-dropdown]", ["bpsDropdown"], { "bpsDropdownMenu": { "alias": "bpsDropdownMenu"; "required": false; }; "bpsTrigger": { "alias": "bpsTrigger"; "required": false; }; "bpsMatchWidthElement": { "alias": "bpsMatchWidthElement"; "required": false; }; "bpsBackdrop": { "alias": "bpsBackdrop"; "required": false; }; "bpsClickHide": { "alias": "bpsClickHide"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsVisible": { "alias": "bpsVisible"; "required": false; }; "bpsOverlayClassName": { "alias": "bpsOverlayClassName"; "required": false; }; "bpsOverlayStyle": { "alias": "bpsOverlayStyle"; "required": false; }; "bpsPlacement": { "alias": "bpsPlacement"; "required": false; }; }, { "bpsVisibleChange": "bpsVisibleChange"; }, never, never, false, never>;
    static ngAcceptInputType_bpsBackdrop: unknown;
    static ngAcceptInputType_bpsClickHide: unknown;
    static ngAcceptInputType_bpsDisabled: unknown;
    static ngAcceptInputType_bpsVisible: unknown;
}

declare class BpsDropDownADirective {
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsDropDownADirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsDropDownADirective, "a[bps-dropdown]", never, {}, {}, never, never, false, never>;
}

interface TableConfig {
    fields: Field[];
    fieldId: string;
}
interface Field {
    celdType: any;
    display: string;
    property?: string;
    width?: string;
    minWidth?: string;
    ngClass?: any;
    hidden?: boolean;
    expandable?: boolean;
    select?: TableSelectConfig;
    sortOrder?: string | null;
    editTemplate?: any;
    showSort?: boolean;
    showCustomFilter?: boolean;
    dateFormat?: string;
    readonly?: boolean;
    default?: any;
    left?: string;
    right?: string;
    template?: TableTemplateRef;
    editable?: boolean;
    validators?: any[];
    placeholder?: string;
}
interface TableSelectConfig {
    selectData: any[];
    label: string;
    value: string;
}
interface TableTemplateRef {
    ref: TemplateRef<any>;
    context: TableTemplateRefContext;
}
interface TableTemplateRefContext {
    index: number;
    title: string;
    exportValue?: string;
}

type BpsTableType = 'report' | 'home' | 'glass_profile';
declare var TemplateType: {
    Date: string;
    Select: string;
    Number: string;
    String: string;
    Boolean: string;
    Time: string;
};
declare var CeldType: {
    Default: string;
    TemplateRef: string;
};
declare class BpsTableComponent<T = any> implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private cdr;
    private i18n;
    locale: any;
    private destroy$;
    checkboxCache: CheckboxSelect[];
    mapOfExpandData: {
        [key: string]: boolean;
    };
    _data: any[];
    editId: any;
    editProperty: any;
    isExpanded: boolean;
    searchBoxHovered: boolean;
    private _searchSubject;
    set data(data: any);
    frontPagination: boolean;
    total: number;
    pageIndex: number;
    pageSize: number;
    showPagination: boolean;
    paginationPosition: 'top' | 'bottom' | 'both';
    bordered: boolean;
    widthConfig: string[];
    loading: boolean;
    loadingDelay: number;
    loadingIndicator: TemplateRef<void>;
    scroll: {
        x?: string | null;
        y?: string | null;
    };
    title: string | TemplateRef<void>;
    footer: string | TemplateRef<void>;
    noResult: string | TemplateRef<void>;
    pageSizeOptions: number[];
    showQuickJumper: boolean;
    showSizeChanger: boolean;
    showTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    hideOnSinglePage: boolean;
    simple: boolean;
    virtualItemSize: number;
    virtualMaxBufferPx: number;
    virtualMinBufferPx: number;
    virtualForTrackBy: TrackByFunction<T>;
    inlineEdit: boolean;
    pageIndexChange: EventEmitter<any>;
    currentPageDataChange: EventEmitter<any>;
    queryParamsChange: EventEmitter<any>;
    pageSizeChange: EventEmitter<any>;
    onclickRow: EventEmitter<any>;
    ondblclickRow: EventEmitter<any>;
    selectionChange: EventEmitter<any>;
    singleSort: boolean;
    sortChange: EventEmitter<any>;
    config: TableConfig;
    configChange: EventEmitter<TableConfig>;
    gridID: string;
    filterPlaceholder: string;
    onedit: EventEmitter<any>;
    tableType: BpsTableType;
    expandable: boolean;
    searchValueChange: EventEmitter<string>;
    moreBtnClicked: EventEmitter<any>;
    deleteBtnClicked: EventEmitter<any>;
    expandChange: EventEmitter<any>;
    moreMenu: TemplateRef<any>;
    deleteMenu: TemplateRef<any>;
    rowExpandTemplate: TemplateRef<any>;
    inputElement: ElementRef;
    forceUpdate: boolean;
    handleClick(e: MouseEvent): void;
    sort(sort: {
        key: string;
        value: string;
    }): void;
    emitOnEditEvent(): void;
    focusInput($event: Event, input: any): void;
    endEditMode($event: KeyboardEvent, index: number, data?: any): void;
    preventDefault($event: MouseEvent): void;
    emitBpsEvent($event: any, type: string): void;
    getFields(): Field[];
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    private _setSearchSubscription;
    updateSearch(searchTextValue: string): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    isCeldTypeTemplateRef(field: Field): boolean;
    isCeldTypeDefault(field: Field): boolean;
    getTDClassMap(field: Field, data: any, fi?: number): any;
    isRowSelected(data: any): boolean;
    updateCheckboxCache(): void;
    clicks: number;
    clickRow(event: MouseEvent, data: any): void;
    startEdit(data: any, event: MouseEvent): void;
    editRow(data: any, property: any): void;
    selectRow(data: any, selectionOnly?: boolean): void;
    expandRow(data: any, $event: any): void;
    changeIcon($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTableComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTableComponent<any>, "bps-table", ["bpsTable"], { "data": { "alias": "data"; "required": false; }; "frontPagination": { "alias": "frontPagination"; "required": false; }; "total": { "alias": "total"; "required": false; }; "pageIndex": { "alias": "pageIndex"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "showPagination": { "alias": "showPagination"; "required": false; }; "paginationPosition": { "alias": "paginationPosition"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; "widthConfig": { "alias": "widthConfig"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingDelay": { "alias": "loadingDelay"; "required": false; }; "loadingIndicator": { "alias": "loadingIndicator"; "required": false; }; "scroll": { "alias": "scroll"; "required": false; }; "title": { "alias": "title"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; "noResult": { "alias": "noResult"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; "showQuickJumper": { "alias": "showQuickJumper"; "required": false; }; "showSizeChanger": { "alias": "showSizeChanger"; "required": false; }; "showTotal": { "alias": "showTotal"; "required": false; }; "hideOnSinglePage": { "alias": "hideOnSinglePage"; "required": false; }; "simple": { "alias": "simple"; "required": false; }; "virtualItemSize": { "alias": "virtualItemSize"; "required": false; }; "virtualMaxBufferPx": { "alias": "virtualMaxBufferPx"; "required": false; }; "virtualMinBufferPx": { "alias": "virtualMinBufferPx"; "required": false; }; "virtualForTrackBy": { "alias": "virtualForTrackBy"; "required": false; }; "inlineEdit": { "alias": "inlineEdit"; "required": false; }; "singleSort": { "alias": "singleSort"; "required": false; }; "config": { "alias": "config"; "required": false; }; "gridID": { "alias": "gridID"; "required": false; }; "filterPlaceholder": { "alias": "filterPlaceholder"; "required": false; }; "tableType": { "alias": "tableType"; "required": false; }; "expandable": { "alias": "expandable"; "required": false; }; "moreMenu": { "alias": "moreMenu"; "required": false; }; "deleteMenu": { "alias": "deleteMenu"; "required": false; }; "rowExpandTemplate": { "alias": "rowExpandTemplate"; "required": false; }; }, { "pageIndexChange": "pageIndexChange"; "currentPageDataChange": "currentPageDataChange"; "queryParamsChange": "queryParamsChange"; "pageSizeChange": "pageSizeChange"; "onclickRow": "onclickRow"; "ondblclickRow": "ondblclickRow"; "selectionChange": "selectionChange"; "sortChange": "sortChange"; "configChange": "configChange"; "onedit": "onedit"; "searchValueChange": "searchValueChange"; "moreBtnClicked": "moreBtnClicked"; "deleteBtnClicked": "deleteBtnClicked"; "expandChange": "expandChange"; }, never, never, false, never>;
    static ngAcceptInputType_frontPagination: unknown;
    static ngAcceptInputType_showPagination: unknown;
    static ngAcceptInputType_bordered: unknown;
    static ngAcceptInputType_loading: unknown;
    static ngAcceptInputType_showQuickJumper: unknown;
    static ngAcceptInputType_showSizeChanger: unknown;
    static ngAcceptInputType_hideOnSinglePage: unknown;
    static ngAcceptInputType_simple: unknown;
    static ngAcceptInputType_virtualItemSize: unknown;
    static ngAcceptInputType_virtualMaxBufferPx: unknown;
    static ngAcceptInputType_virtualMinBufferPx: unknown;
    static ngAcceptInputType_inlineEdit: unknown;
    static ngAcceptInputType_expandable: unknown;
}
interface CheckboxSelect {
    data: any;
    selected: boolean;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

declare class NzUpdateHostClassService {
    private classMap;
    readonly renderer: Renderer2;
    updateHostClass(el: HTMLElement, classMap: object): void;
    private removeClass;
    private addClass;
    constructor(rendererFactory2: RendererFactory2);
    static ɵfac: i0.ɵɵFactoryDeclaration<NzUpdateHostClassService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NzUpdateHostClassService>;
}

type BpsListType = 'variation1' | 'variation2' | 'variation3' | 'variation4' | 'variation5' | 'variation6';
declare class BpsListComponent implements OnInit, OnChanges, OnDestroy {
    private el;
    private updateHostClassService;
    bpsDataSource: any[];
    bpsBordered: boolean;
    bpsDisabled: boolean;
    bpsGrid: NzListGrid;
    bpsListType: BpsListType;
    bpsHeader: string | TemplateRef<void>;
    bpsFooter: string | TemplateRef<void>;
    bpsItemLayout: NzDirectionVHType;
    bpsRenderItem: TemplateRef<void>;
    bpsLoading: boolean;
    bpsLoadMore: TemplateRef<void>;
    bpsPagination: TemplateRef<void>;
    bpsSize: NzSizeLDSType;
    bpsSplit: boolean;
    bpsNoResult: string | TemplateRef<void>;
    private prefixCls;
    private _setClassMap;
    private itemLayoutNotifySource;
    get itemLayoutNotify$(): Observable<NzDirectionVHType>;
    constructor(el: ElementRef, updateHostClassService: NzUpdateHostClassService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsListComponent, "bps-list, [bps-list]", ["bpsList"], { "bpsDataSource": { "alias": "bpsDataSource"; "required": false; }; "bpsBordered": { "alias": "bpsBordered"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsGrid": { "alias": "bpsGrid"; "required": false; }; "bpsListType": { "alias": "bpsListType"; "required": false; }; "bpsHeader": { "alias": "bpsHeader"; "required": false; }; "bpsFooter": { "alias": "bpsFooter"; "required": false; }; "bpsItemLayout": { "alias": "bpsItemLayout"; "required": false; }; "bpsRenderItem": { "alias": "bpsRenderItem"; "required": false; }; "bpsLoading": { "alias": "bpsLoading"; "required": false; }; "bpsLoadMore": { "alias": "bpsLoadMore"; "required": false; }; "bpsPagination": { "alias": "bpsPagination"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; "bpsSplit": { "alias": "bpsSplit"; "required": false; }; "bpsNoResult": { "alias": "bpsNoResult"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_bpsBordered: unknown;
    static ngAcceptInputType_bpsDisabled: unknown;
    static ngAcceptInputType_bpsLoading: unknown;
    static ngAcceptInputType_bpsSplit: unknown;
}

declare class BpsListItemMetaComponent {
    elementRef: ElementRef;
    private renderer;
    avatarStr: string;
    avatarTpl: TemplateRef<void>;
    set bpsAvatar(value: string | TemplateRef<void>);
    bpsTitle: string | TemplateRef<void>;
    bpsDescription: string | TemplateRef<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsListItemMetaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsListItemMetaComponent, "bps-list-item-meta, [bps-list-item-meta]", ["bpsListItemMeta"], { "bpsAvatar": { "alias": "bpsAvatar"; "required": false; }; "bpsTitle": { "alias": "bpsTitle"; "required": false; }; "bpsDescription": { "alias": "bpsDescription"; "required": false; }; }, {}, never, never, false, never>;
}

declare class BpsListItemComponent implements OnDestroy, AfterViewInit {
    private parentComp;
    private cdr;
    _onDeleteHover: boolean;
    metas: QueryList<BpsListItemMetaComponent>;
    bpsActions: Array<TemplateRef<void>>;
    bpsContent: string | TemplateRef<void>;
    bpsExtra: TemplateRef<void>;
    bpsNoFlex: boolean;
    bpsDelete: boolean;
    ondelete: EventEmitter<any>;
    ondeletehover: EventEmitter<any>;
    hover: EventEmitter<any>;
    private itemLayout;
    private itemLayout$;
    get isVerticalAndExtra(): boolean;
    onDeleteHover(event: any): void;
    onHover(event: any): void;
    onDelete(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, parentComp: BpsListComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsListItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsListItemComponent, "bps-list-item, [bps-list-item]", ["bpsListItem"], { "bpsActions": { "alias": "bpsActions"; "required": false; }; "bpsContent": { "alias": "bpsContent"; "required": false; }; "bpsExtra": { "alias": "bpsExtra"; "required": false; }; "bpsNoFlex": { "alias": "bpsNoFlex"; "required": false; }; "bpsDelete": { "alias": "bpsDelete"; "required": false; }; }, { "ondelete": "ondelete"; "ondeletehover": "ondeletehover"; "hover": "hover"; }, ["metas"], ["*"], false, never>;
    static ngAcceptInputType_bpsNoFlex: unknown;
    static ngAcceptInputType_bpsDelete: unknown;
}

interface PropertyMapping {
    [key: string]: [string, () => unknown];
}
type NzTooltipTrigger = 'click' | 'focus' | 'hover' | null;
declare abstract class NzTooltipBaseDirective implements OnChanges, OnDestroy, AfterViewInit {
    elementRef: ElementRef;
    protected hostView: ViewContainerRef;
    protected resolver: ComponentFactoryResolver;
    protected renderer: Renderer2;
    protected noAnimation?: NzNoAnimationDirective;
    protected nzConfigService?: NzConfigService$1;
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
    protected readonly destroy$: Subject<boolean>;
    protected readonly triggerDisposables: Array<() => void>;
    private delayTimer?;
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, noAnimation?: NzNoAnimationDirective, nzConfigService?: NzConfigService$1);
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
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzTooltipBaseDirective, never, never, {}, {}, never, never, true, never>;
}
declare abstract class NzTooltipBaseComponent implements OnDestroy, OnInit {
    cdr: ChangeDetectorRef;
    noAnimation?: NzNoAnimationDirective;
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
    _classMap: NgClassInterface$1;
    _prefix: string;
    _positions: ConnectionPositionPair[];
    protected destroy$: Subject<boolean>;
    directionality: Directionality;
    constructor(cdr: ChangeDetectorRef, noAnimation?: NzNoAnimationDirective);
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
    static ɵfac: i0.ɵɵFactoryDeclaration<NzTooltipBaseComponent, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzTooltipBaseComponent, never, never, {}, {}, never, never, true, never>;
}

type BpsPopoverType = 'variation_1' | 'variation_2' | 'variation_3' | 'variation_4' | 'variation_5' | 'variation_6' | 'variation_7a' | 'variation_7b' | 'variation_8a' | 'variation_8b' | 'variation_9a' | 'variation_9b' | 'variation_10' | 'variation_11';
declare class BpsPopoverDirective extends NzTooltipBaseDirective {
    readonly _nzModuleName: NzConfigKey$1;
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
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2, nzConfigService?: NzConfigService$1);
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsPopoverDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsPopoverDirective, "[bps-popover]", ["bpsPopover"], { "arrowPointAtCenter": { "alias": "bpsPopoverArrowPointAtCenter"; "required": false; }; "title": { "alias": "bpsPopoverTitle"; "required": false; }; "content": { "alias": "bpsPopoverContent"; "required": false; }; "directiveTitle": { "alias": "bps-popover"; "required": false; }; "trigger": { "alias": "bpsPopoverTrigger"; "required": false; }; "placement": { "alias": "bpsPopoverPlacement"; "required": false; }; "origin": { "alias": "bpsPopoverOrigin"; "required": false; }; "visible": { "alias": "bpsPopoverVisible"; "required": false; }; "mouseEnterDelay": { "alias": "bpsPopoverMouseEnterDelay"; "required": false; }; "mouseLeaveDelay": { "alias": "bpsPopoverMouseLeaveDelay"; "required": false; }; "overlayClassName": { "alias": "bpsPopoverOverlayClassName"; "required": false; }; "overlayStyle": { "alias": "bpsPopoverOverlayStyle"; "required": false; }; "popoverType": { "alias": "bpsPopoverType"; "required": false; }; "bpsPopoverBackdrop": { "alias": "bpsPopoverBackdrop"; "required": false; }; }, { "visibleChange": "bpsPopoverVisibleChange"; }, never, never, false, never>;
    static ngAcceptInputType_arrowPointAtCenter: unknown;
}
declare class BpsPopoverComponent extends BpsToolTipComponent {
    _prefix: string;
    constructor(cdr: ChangeDetectorRef);
    get hasBackdrop(): boolean;
    protected isEmpty(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsPopoverComponent, "bps-popover", ["nzPopoverComponent"], {}, {}, never, never, false, never>;
}

declare class BpsTooltipDirective extends NzTooltipBaseDirective {
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
    constructor(elementRef: ElementRef, hostView: ViewContainerRef, resolver: ComponentFactoryResolver, renderer: Renderer2);
    protected getProxyPropertyMap(): PropertyMapping;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTooltipDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsTooltipDirective, "[bps-tooltip]", ["bpsTooltip"], { "title": { "alias": "bpsTooltipTitle"; "required": false; }; "titleContext": { "alias": "bpsTooltipTitleContext"; "required": false; }; "directiveTitle": { "alias": "bps-tooltip"; "required": false; }; "trigger": { "alias": "bpsTooltipTrigger"; "required": false; }; "placement": { "alias": "bpsTooltipPlacement"; "required": false; }; "origin": { "alias": "bpsTooltipOrigin"; "required": false; }; "visible": { "alias": "bpsTooltipVisible"; "required": false; }; "mouseEnterDelay": { "alias": "bpsTooltipMouseEnterDelay"; "required": false; }; "mouseLeaveDelay": { "alias": "bpsTooltipMouseLeaveDelay"; "required": false; }; "overlayClassName": { "alias": "bpsTooltipOverlayClassName"; "required": false; }; "overlayStyle": { "alias": "bpsTooltipOverlayStyle"; "required": false; }; "arrowPointAtCenter": { "alias": "bpsTooltipArrowPointAtCenter"; "required": false; }; "bpsTooltipColor": { "alias": "bpsTooltipColor"; "required": false; }; "popoverType": { "alias": "bpsPopoverType"; "required": false; }; "tooltipType": { "alias": "bpsTooltipType"; "required": false; }; "tooltipDisabled": { "alias": "bpsTooltipDisabled"; "required": false; }; }, { "visibleChange": "bpsTooltipVisibleChange"; }, never, never, false, never>;
    static ngAcceptInputType_arrowPointAtCenter: unknown;
    static ngAcceptInputType_tooltipDisabled: unknown;
}
declare class BpsToolTipComponent extends NzTooltipBaseComponent {
    bpsTitle: NzTSType | null;
    bpsTooltipType: string;
    bpsPopoverType: string;
    bpsTooltipDisabled: boolean;
    bpsTitleContext: Object | null;
    bpsColor?: string | NzPresetColor;
    _contentStyleMap: NgStyleInterface;
    constructor(cdr: ChangeDetectorRef);
    protected isEmpty(): boolean;
    protected updateStyles(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsToolTipComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsToolTipComponent, "bps-tooltip", ["bpsTooltipComponent"], {}, {}, never, never, false, never>;
}

declare class BpsInputDirective implements OnChanges, OnInit, OnDestroy {
    private renderer;
    private elementRef;
    protected hostView: ViewContainerRef;
    borderless: boolean;
    size: NzSizeLDSType$1;
    nzStepperless: boolean;
    nzStatus: NzStatus;
    opened: boolean;
    get disabled(): boolean;
    set disabled(value: boolean);
    _disabled: boolean;
    disabled$: Subject<boolean>;
    dir: Direction;
    prefixCls: string;
    status: NzValidateStatus;
    statusCls: NgClassInterface$1;
    hasFeedback: boolean;
    feedbackRef: ComponentRef<NzFormItemFeedbackIconComponent> | null;
    components: Array<ComponentRef<NzFormItemFeedbackIconComponent>>;
    private destroy$;
    ngControl: NgControl;
    directionality: Directionality;
    nzFormStatusService: NzFormStatusService;
    nzFormNoStatusService: NzFormNoStatusService;
    constructor(renderer: Renderer2, elementRef: ElementRef, hostView: ViewContainerRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private setStatusStyles;
    private renderFeedbackIcon;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsInputDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsInputDirective, "input[bps-input],textarea[bps-input]", ["bpsInput"], { "borderless": { "alias": "borderless"; "required": false; }; "size": { "alias": "size"; "required": false; }; "nzStepperless": { "alias": "nzStepperless"; "required": false; }; "nzStatus": { "alias": "nzStatus"; "required": false; }; "opened": { "alias": "opened"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_borderless: unknown;
    static ngAcceptInputType_nzStepperless: unknown;
    static ngAcceptInputType_opened: unknown;
    static ngAcceptInputType_disabled: unknown;
}

declare class NzInputGroupWhitSuffixOrPrefixDirective {
    elementRef: ElementRef;
    constructor(elementRef: ElementRef);
    static ɵfac: i0.ɵɵFactoryDeclaration<NzInputGroupWhitSuffixOrPrefixDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzInputGroupWhitSuffixOrPrefixDirective, "bps-input-group[bpsSuffix], bps-input-group[bpsPrefix]", never, {}, {}, never, never, false, never>;
}
declare class BpsInputGroupComponent implements AfterContentInit, OnChanges, OnInit, OnDestroy {
    private focusMonitor;
    private elementRef;
    private renderer;
    private cdr;
    listOfNzInputDirective: QueryList<BpsInputDirective>;
    bpsAddOnBeforeIcon?: string | null;
    bpsAddOnAfterIcon?: string | null;
    bpsPrefixIcon?: string | null;
    bpsSuffixIcon?: string | null;
    bpsAddOnBefore?: string | TemplateRef<void>;
    bpsAddOnAfter?: string | TemplateRef<void>;
    bpsPrefix?: string | TemplateRef<void>;
    bpsStatus: NzStatus;
    bpsSuffix?: string | TemplateRef<void>;
    bpsSize: NzSizeLDSType$1;
    bpsSearch: boolean;
    bpsCompact: boolean;
    isLarge: boolean;
    isSmall: boolean;
    isAffix: boolean;
    isAddOn: boolean;
    isFeedback: boolean;
    focused: boolean;
    disabled: boolean;
    dir: Direction;
    prefixCls: string;
    affixStatusCls: NgClassInterface$1;
    groupStatusCls: NgClassInterface$1;
    affixInGroupStatusCls: NgClassInterface$1;
    status: NzValidateStatus;
    hasFeedback: boolean;
    private destroy$;
    nzFormStatusService: NzFormStatusService;
    nzFormNoStatusService: NzFormNoStatusService;
    directionality: Directionality;
    constructor(focusMonitor: FocusMonitor, elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    updateChildrenInputSize(): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private setStatusStyles;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsInputGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsInputGroupComponent, "bps-input-group", ["bpsInputGroup"], { "bpsAddOnBeforeIcon": { "alias": "bpsAddOnBeforeIcon"; "required": false; }; "bpsAddOnAfterIcon": { "alias": "bpsAddOnAfterIcon"; "required": false; }; "bpsPrefixIcon": { "alias": "bpsPrefixIcon"; "required": false; }; "bpsSuffixIcon": { "alias": "bpsSuffixIcon"; "required": false; }; "bpsAddOnBefore": { "alias": "bpsAddOnBefore"; "required": false; }; "bpsAddOnAfter": { "alias": "bpsAddOnAfter"; "required": false; }; "bpsPrefix": { "alias": "bpsPrefix"; "required": false; }; "bpsStatus": { "alias": "bpsStatus"; "required": false; }; "bpsSuffix": { "alias": "bpsSuffix"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; "bpsSearch": { "alias": "bpsSearch"; "required": false; }; "bpsCompact": { "alias": "bpsCompact"; "required": false; }; }, {}, ["listOfNzInputDirective"], ["*"], false, never>;
    static ngAcceptInputType_bpsSearch: unknown;
    static ngAcceptInputType_bpsCompact: unknown;
}

declare class BpsInputGroupSlotComponent {
    icon?: string | null;
    type: 'addon' | 'prefix' | 'suffix' | null;
    template?: string | TemplateRef<void> | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsInputGroupSlotComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsInputGroupSlotComponent, "[bps-input-group-slot]", never, { "icon": { "alias": "icon"; "required": false; }; "type": { "alias": "type"; "required": false; }; "template": { "alias": "template"; "required": false; }; }, {}, never, never, false, never>;
}

declare class BpsTextareaCountComponent implements AfterContentInit, OnDestroy {
    private renderer;
    private elementRef;
    nzInputDirective: BpsInputDirective;
    bpsMaxCharacterCount: number;
    bpsComputeCharacterCount: (v: string) => number;
    bpsFormatter: (cur: number, max: number) => string;
    private configChange$;
    private destroy$;
    constructor(renderer: Renderer2, elementRef: ElementRef<HTMLElement>);
    ngAfterContentInit(): void;
    setDataCount(value: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTextareaCountComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTextareaCountComponent, "bps-textarea-count", never, { "bpsMaxCharacterCount": { "alias": "bpsMaxCharacterCount"; "required": false; }; "bpsComputeCharacterCount": { "alias": "bpsComputeCharacterCount"; "required": false; }; "bpsFormatter": { "alias": "bpsFormatter"; "required": false; }; }, {}, ["nzInputDirective"], ["textarea[bps-input]"], false, never>;
}

interface AutoSizeType {
    minRows?: number;
    maxRows?: number;
}
declare class BpsAutosizeDirective implements AfterViewInit, OnDestroy, DoCheck {
    private elementRef;
    private ngZone;
    private platform;
    private resizeService;
    private autosize;
    private el;
    private cachedLineHeight;
    private previousValue;
    private previousMinRows;
    private minRows;
    private maxRows;
    private maxHeight;
    private minHeight;
    private destroy$;
    private inputGap;
    set bpsAutosize(value: string | boolean | AutoSizeType);
    resizeToFitContent(force?: boolean): void;
    private cacheTextareaLineHeight;
    setMinHeight(): number | null;
    setMaxHeight(): number | null;
    noopInputHandler(): void;
    constructor(elementRef: ElementRef, ngZone: NgZone, platform: Platform, resizeService: NzResizeService);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngDoCheck(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsAutosizeDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsAutosizeDirective, "textarea[bpsAutosize]", ["bpsAutosize"], { "bpsAutosize": { "alias": "bpsAutosize"; "required": false; }; }, {}, never, never, false, never>;
}

declare class BpsOptionGroupComponent implements OnChanges {
    bpsLabel: string | number | TemplateRef<NzSafeAny> | null;
    changes: Subject<void>;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsOptionGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsOptionGroupComponent, "bps-option-group", ["bpsOptionGroup"], { "bpsLabel": { "alias": "bpsLabel"; "required": false; }; }, {}, never, ["*"], false, never>;
}

declare class BpsOptionComponent implements OnChanges, OnInit {
    private destroy$;
    changes: Subject<void>;
    groupLabel: string | number | TemplateRef<NzSafeAny> | null;
    template: TemplateRef<NzSafeAny>;
    bpsTitle?: string | number | null;
    bpsLabel: string | number | null;
    bpsValue: NzSafeAny | null;
    bpsKey?: string | number;
    bpsDisabled: boolean;
    bpsHide: boolean;
    bpsCustomContent: boolean;
    nzOptionGroupComponent: BpsOptionGroupComponent;
    constructor(destroy$: NzDestroyService);
    ngOnInit(): void;
    ngOnChanges(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsOptionComponent, "bps-option", ["bpsOption"], { "bpsTitle": { "alias": "bpsTitle"; "required": false; }; "bpsLabel": { "alias": "bpsLabel"; "required": false; }; "bpsValue": { "alias": "bpsValue"; "required": false; }; "bpsKey": { "alias": "bpsKey"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsHide": { "alias": "bpsHide"; "required": false; }; "bpsCustomContent": { "alias": "bpsCustomContent"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_bpsDisabled: unknown;
    static ngAcceptInputType_bpsHide: unknown;
    static ngAcceptInputType_bpsCustomContent: unknown;
}

type NzSelectModeType = 'default' | 'multiple' | 'tags';
interface NzSelectItemInterface {
    template?: TemplateRef<NzSafeAny> | null;
    bpsLabel: string | number | null;
    bpsValue: NzSafeAny | null;
    bpsTitle?: string | number | null;
    bpsDisabled?: boolean;
    bpsHide?: boolean;
    bpsCustomContent?: boolean;
    groupLabel?: string | number | TemplateRef<NzSafeAny> | null;
    type?: string;
    key?: NzSafeAny;
}
interface NzSelectOptionInterface {
    label: string | number | null | TemplateRef<NzSafeAny>;
    value: NzSafeAny | null;
    title?: string | number | null;
    disabled?: boolean;
    hide?: boolean;
    groupLabel?: string | number | TemplateRef<NzSafeAny> | null;
    key?: string | number;
}
type NzSelectTopControlItemType = Partial<NzSelectItemInterface> & {
    contentTemplateOutlet: TemplateRef<NzSafeAny> | null;
    contentTemplateOutletContext: NzSafeAny;
};
type NzFilterOptionType = (input: string, option: NzSelectItemInterface) => boolean;
type NzSelectPlacementType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

declare class BpsOptionContainerComponent implements OnChanges, AfterViewInit {
    notFoundContent: string | TemplateRef<NzSafeAny> | undefined;
    menuItemSelectedIcon: TemplateRef<NzSafeAny> | null;
    dropdownRender: TemplateRef<NzSafeAny> | null;
    activatedValue: NzSafeAny | null;
    listOfSelectedValue: NzSafeAny[];
    compareWith: (o1: NzSafeAny, o2: NzSafeAny) => boolean;
    mode: NzSelectModeType;
    matchWidth: boolean;
    itemSize: number;
    maxItemLength: number;
    listOfContainerItem: NzSelectItemInterface[];
    readonly itemClick: EventEmitter<any>;
    readonly scrollToBottom: EventEmitter<void>;
    cdkVirtualScrollViewport: CdkVirtualScrollViewport;
    private scrolledIndex;
    constructor();
    onItemClick(value: NzSafeAny): void;
    onItemHover(value: NzSafeAny): void;
    trackValue(_index: number, option: NzSelectItemInterface): NzSafeAny;
    onScrolledIndexChange(index: number): void;
    scrollToActivatedValue(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsOptionContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsOptionContainerComponent, "bps-option-container", ["bpsOptionContainer"], { "notFoundContent": { "alias": "notFoundContent"; "required": false; }; "menuItemSelectedIcon": { "alias": "menuItemSelectedIcon"; "required": false; }; "dropdownRender": { "alias": "dropdownRender"; "required": false; }; "activatedValue": { "alias": "activatedValue"; "required": false; }; "listOfSelectedValue": { "alias": "listOfSelectedValue"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "matchWidth": { "alias": "matchWidth"; "required": false; }; "itemSize": { "alias": "itemSize"; "required": false; }; "maxItemLength": { "alias": "maxItemLength"; "required": false; }; "listOfContainerItem": { "alias": "listOfContainerItem"; "required": false; }; }, { "itemClick": "itemClick"; "scrollToBottom": "scrollToBottom"; }, never, never, false, never>;
}

declare class BpsOptionItemComponent implements OnChanges, OnInit {
    private elementRef;
    private ngZone;
    private destroy$;
    selected: boolean;
    activated: boolean;
    grouped: boolean;
    customContent: boolean;
    template: TemplateRef<NzSafeAny> | null;
    disabled: boolean;
    showState: boolean;
    title?: string | number | null;
    label: string | number | null;
    value: NzSafeAny | null;
    activatedValue: NzSafeAny | null;
    listOfSelectedValue: NzSafeAny[];
    icon: TemplateRef<NzSafeAny> | null;
    compareWith: (o1: NzSafeAny, o2: NzSafeAny) => boolean;
    readonly itemClick: EventEmitter<any>;
    readonly itemHover: EventEmitter<any>;
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone, destroy$: NzDestroyService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsOptionItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsOptionItemComponent, "bps-option-item", never, { "grouped": { "alias": "grouped"; "required": false; }; "customContent": { "alias": "customContent"; "required": false; }; "template": { "alias": "template"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "showState": { "alias": "showState"; "required": false; }; "title": { "alias": "title"; "required": false; }; "label": { "alias": "label"; "required": false; }; "value": { "alias": "value"; "required": false; }; "activatedValue": { "alias": "activatedValue"; "required": false; }; "listOfSelectedValue": { "alias": "listOfSelectedValue"; "required": false; }; "icon": { "alias": "icon"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; }, { "itemClick": "itemClick"; "itemHover": "itemHover"; }, never, never, false, never>;
}

declare class BpsOptionItemGroupComponent {
    bpsLabel: string | number | TemplateRef<NzSafeAny> | null;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsOptionItemGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsOptionItemGroupComponent, "bps-option-item-group", never, { "bpsLabel": { "alias": "bpsLabel"; "required": false; }; }, {}, never, never, false, never>;
}

declare class BpsSelectSearchComponent implements AfterViewInit, OnChanges {
    private elementRef;
    private renderer;
    private focusMonitor;
    bpsId: string | null;
    disabled: boolean;
    mirrorSync: boolean;
    showInput: boolean;
    focusTrigger: boolean;
    value: string;
    autofocus: boolean;
    readonly valueChange: EventEmitter<string>;
    readonly isComposingChange: EventEmitter<boolean>;
    inputElement: ElementRef;
    mirrorElement?: ElementRef;
    setCompositionState(isComposing: boolean): void;
    onValueChange(value: string): void;
    clearInputValue(): void;
    syncMirrorWidth(): void;
    focus(): void;
    blur(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, focusMonitor: FocusMonitor);
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSelectSearchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSelectSearchComponent, "bps-select-search", never, { "bpsId": { "alias": "bpsId"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "mirrorSync": { "alias": "mirrorSync"; "required": false; }; "showInput": { "alias": "showInput"; "required": false; }; "focusTrigger": { "alias": "focusTrigger"; "required": false; }; "value": { "alias": "value"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; }, { "valueChange": "valueChange"; "isComposingChange": "isComposingChange"; }, never, never, false, never>;
}

declare class BpsSelectTopControlComponent implements OnChanges, OnInit, OnDestroy {
    private elementRef;
    private ngZone;
    bpsId: string | null;
    showSearch: boolean;
    placeHolder: string | TemplateRef<NzSafeAny> | null;
    open: boolean;
    maxTagCount: number;
    autofocus: boolean;
    disabled: boolean;
    mode: NzSelectModeType;
    customTemplate: TemplateRef<{
        $implicit: NzSelectItemInterface;
    }> | null;
    maxTagPlaceholder: TemplateRef<{
        $implicit: NzSafeAny[];
    }> | null;
    removeIcon: TemplateRef<NzSafeAny> | null;
    listOfTopItem: NzSelectItemInterface[];
    tokenSeparators: string[];
    readonly tokenize: EventEmitter<string[]>;
    readonly inputValueChange: EventEmitter<string>;
    readonly deleteItem: EventEmitter<NzSelectItemInterface>;
    nzSelectSearchComponent: BpsSelectSearchComponent;
    listOfSlicedItem: NzSelectTopControlItemType[];
    isShowPlaceholder: boolean;
    isShowSingleLabel: boolean;
    isComposing: boolean;
    inputValue: string | null;
    private destroy$;
    updateTemplateVariable(): void;
    isComposingChange(isComposing: boolean): void;
    onInputValueChange(value: string): void;
    tokenSeparate(inputValue: string, tokenSeparators: string[]): void;
    clearInputValue(): void;
    focus(): void;
    blur(): void;
    trackValue(_index: number, option: NzSelectTopControlItemType): NzSafeAny;
    onDeleteItem(item: NzSelectItemInterface): void;
    noAnimation: NzNoAnimationDirective;
    constructor(elementRef: ElementRef<HTMLElement>, ngZone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSelectTopControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSelectTopControlComponent, "bps-select-top-control", ["bpsSelectTopControl"], { "bpsId": { "alias": "bpsId"; "required": false; }; "showSearch": { "alias": "showSearch"; "required": false; }; "placeHolder": { "alias": "placeHolder"; "required": false; }; "open": { "alias": "open"; "required": false; }; "maxTagCount": { "alias": "maxTagCount"; "required": false; }; "autofocus": { "alias": "autofocus"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "mode": { "alias": "mode"; "required": false; }; "customTemplate": { "alias": "customTemplate"; "required": false; }; "maxTagPlaceholder": { "alias": "maxTagPlaceholder"; "required": false; }; "removeIcon": { "alias": "removeIcon"; "required": false; }; "listOfTopItem": { "alias": "listOfTopItem"; "required": false; }; "tokenSeparators": { "alias": "tokenSeparators"; "required": false; }; }, { "tokenize": "tokenize"; "inputValueChange": "inputValueChange"; "deleteItem": "deleteItem"; }, never, never, false, never>;
}

type NzSelectSizeType = 'large' | 'default' | 'small';
declare class BpsSelectComponent implements ControlValueAccessor, OnInit, AfterContentInit, OnChanges, OnDestroy {
    private ngZone;
    private destroy$;
    nzConfigService: NzConfigService$1;
    private cdr;
    private host;
    private renderer;
    private platform;
    private focusMonitor;
    readonly _nzModuleName: NzConfigKey$1;
    bpsId: string | null;
    bpsSize: NzSelectSizeType;
    bpsStatus: NzStatus;
    bpsOptionHeightPx: number;
    bpsOptionOverflowSize: number;
    bpsDropdownClassName: string[] | string | null;
    bpsDropdownMatchSelectWidth: boolean;
    bpsDropdownStyle: {
        [key: string]: string;
    } | null;
    bpsNotFoundContent: string | TemplateRef<NzSafeAny> | undefined;
    bpsPlaceHolder: string | TemplateRef<NzSafeAny> | null;
    bpsPlacement: NzSelectPlacementType | null;
    bpsMaxTagCount: number;
    bpsDropdownRender: TemplateRef<NzSafeAny> | null;
    bpsCustomTemplate: TemplateRef<{
        $implicit: NzSelectItemInterface;
    }> | null;
    bpsSuffixIcon: TemplateRef<NzSafeAny> | string | null;
    bpsClearIcon: TemplateRef<NzSafeAny> | null;
    bpsRemoveIcon: TemplateRef<NzSafeAny> | null;
    bpsMenuItemSelectedIcon: TemplateRef<NzSafeAny> | null;
    bpsTokenSeparators: string[];
    bpsMaxTagPlaceholder: TemplateRef<{
        $implicit: NzSafeAny[];
    }> | null;
    bpsMaxMultipleCount: number;
    bpsMode: NzSelectModeType;
    bpsFilterOption: NzFilterOptionType;
    compareWith: (o1: NzSafeAny, o2: NzSafeAny) => boolean;
    bpsAllowClear: boolean;
    bpsBorderless: boolean;
    bpsShowSearch: boolean;
    bpsLoading: boolean;
    bpsAutoFocus: boolean;
    bpsAutoClearSearchValue: boolean;
    bpsServerSearch: boolean;
    bpsDisabled: boolean;
    bpsOpen: boolean;
    bpsSelectOnTab: boolean;
    bpsBackdrop: boolean;
    bpsOptions: NzSelectOptionInterface[];
    set bpsShowArrow(value: boolean);
    get bpsShowArrow(): boolean;
    readonly bpsOnSearch: EventEmitter<string>;
    readonly bpsScrollToBottom: EventEmitter<void>;
    readonly bpsOpenChange: EventEmitter<boolean>;
    readonly bpsBlur: EventEmitter<void>;
    readonly bpsFocus: EventEmitter<void>;
    originElement: ElementRef;
    cdkConnectedOverlay: CdkConnectedOverlay;
    bpsSelectTopControlComponent: BpsSelectTopControlComponent;
    listOfNzOptionComponent: QueryList<BpsOptionComponent>;
    listOfNzOptionGroupComponent: QueryList<BpsOptionGroupComponent>;
    bpsOptionGroupComponentElement: ElementRef;
    bpsSelectTopControlComponentElement: ElementRef;
    private listOfValue$;
    private listOfTemplateItem$;
    private listOfTagAndTemplateItem;
    private searchValue;
    private isReactiveDriven;
    private value;
    private _bpsShowArrow;
    private requestId;
    private isNzDisableFirstChange;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    dropDownPosition: NzSelectPlacementType;
    triggerWidth: number | null;
    listOfContainerItem: NzSelectItemInterface[];
    listOfTopItem: NzSelectItemInterface[];
    activatedValue: NzSafeAny | null;
    listOfValue: NzSafeAny[];
    focused: boolean;
    dir: Direction;
    positions: ConnectionPositionPair[];
    prefixCls: string;
    statusCls: NgClassInterface$1;
    status: NzValidateStatus;
    hasFeedback: boolean;
    generateTagItem(value: string): NzSelectItemInterface;
    onItemClick(value: NzSafeAny): void;
    onItemDelete(item: any): void;
    updateListOfContainerItem(): void;
    clearInput(): void;
    updateListOfValue(listOfValue: NzSafeAny[]): void;
    onTokenSeparate(listOfLabel: string[]): void;
    onKeyDown(e: KeyboardEvent): void;
    setOpenState(value: boolean): void;
    onOpenChange(): void;
    onInputValueChange(value: string): void;
    onClearSelection(): void;
    onClickOutside(event: MouseEvent): void;
    focus(): void;
    blur(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateCdkConnectedOverlayStatus(): void;
    updateCdkConnectedOverlayPositions(): void;
    directionality: Directionality;
    noAnimation: NzNoAnimationDirective;
    nzFormStatusService: NzFormStatusService;
    nzFormNoStatusService: NzFormNoStatusService;
    constructor(ngZone: NgZone, destroy$: NzDestroyService, nzConfigService: NzConfigService$1, cdr: ChangeDetectorRef, host: ElementRef<HTMLElement>, renderer: Renderer2, platform: Platform, focusMonitor: FocusMonitor);
    writeValue(modelValue: NzSafeAny | NzSafeAny[]): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(disabled: boolean): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    private setStatusStyles;
    private getTitle;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSelectComponent, "bps-select", ["bpsSelect"], { "bpsId": { "alias": "bpsId"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; "bpsStatus": { "alias": "bpsStatus"; "required": false; }; "bpsOptionHeightPx": { "alias": "bpsOptionHeightPx"; "required": false; }; "bpsOptionOverflowSize": { "alias": "bpsOptionOverflowSize"; "required": false; }; "bpsDropdownClassName": { "alias": "bpsDropdownClassName"; "required": false; }; "bpsDropdownMatchSelectWidth": { "alias": "bpsDropdownMatchSelectWidth"; "required": false; }; "bpsDropdownStyle": { "alias": "bpsDropdownStyle"; "required": false; }; "bpsNotFoundContent": { "alias": "bpsNotFoundContent"; "required": false; }; "bpsPlaceHolder": { "alias": "bpsPlaceHolder"; "required": false; }; "bpsPlacement": { "alias": "bpsPlacement"; "required": false; }; "bpsMaxTagCount": { "alias": "bpsMaxTagCount"; "required": false; }; "bpsDropdownRender": { "alias": "bpsDropdownRender"; "required": false; }; "bpsCustomTemplate": { "alias": "bpsCustomTemplate"; "required": false; }; "bpsSuffixIcon": { "alias": "bpsSuffixIcon"; "required": false; }; "bpsClearIcon": { "alias": "bpsClearIcon"; "required": false; }; "bpsRemoveIcon": { "alias": "bpsRemoveIcon"; "required": false; }; "bpsMenuItemSelectedIcon": { "alias": "bpsMenuItemSelectedIcon"; "required": false; }; "bpsTokenSeparators": { "alias": "bpsTokenSeparators"; "required": false; }; "bpsMaxTagPlaceholder": { "alias": "bpsMaxTagPlaceholder"; "required": false; }; "bpsMaxMultipleCount": { "alias": "bpsMaxMultipleCount"; "required": false; }; "bpsMode": { "alias": "bpsMode"; "required": false; }; "bpsFilterOption": { "alias": "bpsFilterOption"; "required": false; }; "compareWith": { "alias": "compareWith"; "required": false; }; "bpsAllowClear": { "alias": "bpsAllowClear"; "required": false; }; "bpsBorderless": { "alias": "bpsBorderless"; "required": false; }; "bpsShowSearch": { "alias": "bpsShowSearch"; "required": false; }; "bpsLoading": { "alias": "bpsLoading"; "required": false; }; "bpsAutoFocus": { "alias": "bpsAutoFocus"; "required": false; }; "bpsAutoClearSearchValue": { "alias": "bpsAutoClearSearchValue"; "required": false; }; "bpsServerSearch": { "alias": "bpsServerSearch"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsOpen": { "alias": "bpsOpen"; "required": false; }; "bpsSelectOnTab": { "alias": "bpsSelectOnTab"; "required": false; }; "bpsBackdrop": { "alias": "bpsBackdrop"; "required": false; }; "bpsOptions": { "alias": "bpsOptions"; "required": false; }; "bpsShowArrow": { "alias": "bpsShowArrow"; "required": false; }; }, { "bpsOnSearch": "bpsOnSearch"; "bpsScrollToBottom": "bpsScrollToBottom"; "bpsOpenChange": "bpsOpenChange"; "bpsBlur": "bpsBlur"; "bpsFocus": "bpsFocus"; }, ["listOfNzOptionComponent", "listOfNzOptionGroupComponent"], never, false, never>;
    static ngAcceptInputType_bpsAllowClear: unknown;
    static ngAcceptInputType_bpsBorderless: unknown;
    static ngAcceptInputType_bpsShowSearch: unknown;
    static ngAcceptInputType_bpsLoading: unknown;
    static ngAcceptInputType_bpsAutoFocus: unknown;
    static ngAcceptInputType_bpsAutoClearSearchValue: unknown;
    static ngAcceptInputType_bpsServerSearch: unknown;
    static ngAcceptInputType_bpsDisabled: unknown;
    static ngAcceptInputType_bpsOpen: unknown;
    static ngAcceptInputType_bpsSelectOnTab: unknown;
    static ngAcceptInputType_bpsBackdrop: unknown;
}

declare class BpsSelectArrowComponent {
    loading: boolean;
    search: boolean;
    showArrow: boolean;
    suffixIcon: TemplateRef<NzSafeAny> | string | null;
    feedbackIcon: TemplateRef<NzSafeAny> | string | null;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSelectArrowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSelectArrowComponent, "bps-select-arrow", never, { "loading": { "alias": "loading"; "required": false; }; "search": { "alias": "search"; "required": false; }; "showArrow": { "alias": "showArrow"; "required": false; }; "suffixIcon": { "alias": "suffixIcon"; "required": false; }; "feedbackIcon": { "alias": "feedbackIcon"; "required": false; }; }, {}, never, never, false, never>;
}

declare class BpsSelectClearComponent {
    clearIcon: TemplateRef<NzSafeAny> | null;
    readonly clear: EventEmitter<MouseEvent>;
    constructor();
    onClick(e: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSelectClearComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSelectClearComponent, "bps-select-clear", never, { "clearIcon": { "alias": "clearIcon"; "required": false; }; }, { "clear": "clear"; }, never, never, false, never>;
}

declare class BpsSelectItemComponent {
    disabled: boolean;
    label: string | number | null | undefined;
    deletable: boolean;
    removeIcon: TemplateRef<NzSafeAny> | null;
    contentTemplateOutletContext: NzSafeAny | null;
    contentTemplateOutlet: string | TemplateRef<NzSafeAny> | null;
    readonly delete: EventEmitter<MouseEvent>;
    constructor();
    onDelete(e: MouseEvent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSelectItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSelectItemComponent, "bps-select-item", never, { "disabled": { "alias": "disabled"; "required": false; }; "label": { "alias": "label"; "required": false; }; "deletable": { "alias": "deletable"; "required": false; }; "removeIcon": { "alias": "removeIcon"; "required": false; }; "contentTemplateOutletContext": { "alias": "contentTemplateOutletContext"; "required": false; }; "contentTemplateOutlet": { "alias": "contentTemplateOutlet"; "required": false; }; }, { "delete": "delete"; }, never, never, false, never>;
}

declare class BpsSelectPlaceholderComponent {
    placeholder: TemplateRef<NzSafeAny> | string | null;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSelectPlaceholderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSelectPlaceholderComponent, "bps-select-placeholder", never, { "placeholder": { "alias": "placeholder"; "required": false; }; }, {}, never, never, false, never>;
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

declare class NzDomEventService {
    private ngZone;
    private rendererFactory2;
    private readonly resizeSource;
    private readonly domEventListeners;
    private renderer;
    constructor(ngZone: NgZone, rendererFactory2: RendererFactory2);
    registerResizeListener(): Observable<void>;
    unregisterResizeListener(): void;
    private tryToStartListener;
    private tryToStopListener;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzDomEventService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NzDomEventService>;
}

type NzJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
type NzGridType = 'flex' | null;
declare class NzRowDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
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
    destroy$: Subject<boolean>;
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

interface EmbeddedProperty {
    span?: number;
    pull?: number;
    push?: number;
    offset?: number;
    order?: number;
}
declare class NzColDirective implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    private nzUpdateHostClassService;
    private elementRef;
    renderer: Renderer2;
    private el;
    private prefixCls;
    protected destroy$: Subject<boolean>;
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
    nzRowDirective: NzRowDirective;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzColDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzColDirective, "[nz-col],nz-col", ["nzCol"], { "nzSpan": { "alias": "nzSpan"; "required": false; }; "nzOrder": { "alias": "nzOrder"; "required": false; }; "nzOffset": { "alias": "nzOffset"; "required": false; }; "nzPush": { "alias": "nzPush"; "required": false; }; "nzPull": { "alias": "nzPull"; "required": false; }; "nzXs": { "alias": "nzXs"; "required": false; }; "nzSm": { "alias": "nzSm"; "required": false; }; "nzMd": { "alias": "nzMd"; "required": false; }; "nzLg": { "alias": "nzLg"; "required": false; }; "nzXl": { "alias": "nzXl"; "required": false; }; "nzXXl": { "alias": "nzXXl"; "required": false; }; }, {}, never, never, false, never>;
}

declare class BpsFormLabelComponent extends NzColDirective implements OnDestroy, AfterViewInit {
    private cdr;
    bpsFor: string;
    bpsRequired: boolean;
    set bpsNoColon(value: boolean);
    get bpsNoColon(): boolean;
    defaultNoColon: boolean;
    noColon: boolean | string;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef);
    setDefaultNoColon(value: boolean): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormLabelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormLabelComponent, "bps-form-label", ["bpsFormLabel"], { "bpsFor": { "alias": "bpsFor"; "required": false; }; "bpsRequired": { "alias": "bpsRequired"; "required": false; }; "bpsNoColon": { "alias": "bpsNoColon"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_bpsRequired: unknown;
}

declare class BpsFormDirective implements OnInit, OnChanges, AfterContentInit, OnDestroy {
    nzConfigService: NzConfigService;
    private elementRef;
    private renderer;
    private nzUpdateHostClassService;
    bpsLayout: string;
    bpsNoColon: boolean;
    bpsFormLabelComponent: QueryList<BpsFormLabelComponent>;
    destroy$: Subject<boolean>;
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

declare class BpsFormExplainComponent {
    elementRef: ElementRef;
    private renderer;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormExplainComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormExplainComponent, "bps-form-explain", ["bpsFormExplain"], {}, {}, never, ["*"], false, never>;
}

/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
declare class BpsFormItemComponent extends NzRowDirective implements AfterContentInit, OnDestroy, OnChanges, OnInit, OnDestroy {
    private cdr;
    bpsFlex: boolean;
    listOfNzFormExplainComponent: QueryList<BpsFormExplainComponent>;
    withHelpClass: boolean;
    tipsMode: boolean;
    updateFlexStyle(): void;
    setWithHelpViaTips(value: boolean): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform, nzDomEventService: NzDomEventService, cdr: ChangeDetectorRef);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormItemComponent, "bps-form-item", ["bpsFormItem"], { "bpsFlex": { "alias": "bpsFlex"; "required": false; }; }, {}, ["listOfNzFormExplainComponent"], ["*"], false, never>;
    static ngAcceptInputType_bpsFlex: unknown;
}

type NzFormControlStatusType = 'warning' | 'validating' | 'error' | 'success' | null;
declare class BpsFormControlComponent extends NzColDirective implements OnDestroy, OnInit, AfterContentInit, AfterViewInit, OnDestroy {
    private cdr;
    nzFormItemComponent: BpsFormItemComponent;
    private _hasFeedback;
    private validateChanges;
    private validateString;
    validateControl: UntypedFormControl | NgModel | null;
    status: NzFormControlStatusType;
    controlClassMap: NgClassType;
    iconType: string;
    defaultValidateControl: FormControlName | FormControlDirective;
    bpsSuccessTip: string | TemplateRef<{
        $implicit: UntypedFormControl | NgModel;
    }>;
    bpsWarningTip: string | TemplateRef<{
        $implicit: UntypedFormControl | NgModel;
    }>;
    bpsErrorTip: string | TemplateRef<{
        $implicit: UntypedFormControl | NgModel;
    }>;
    bpsValidatingTip: string | TemplateRef<{
        $implicit: UntypedFormControl | NgModel;
    }>;
    bpsExtra: string | TemplateRef<void>;
    set bpsHasFeedback(value: boolean);
    get bpsHasFeedback(): boolean;
    set bpsValidateStatus(value: string | UntypedFormControl | FormControlName | NgModel);
    removeSubscribe(): void;
    watchControl(): void;
    validateControlStatus(status: string): boolean;
    setControlClassMap(): void;
    get hasTips(): boolean;
    get showSuccessTip(): boolean;
    get showWarningTip(): boolean;
    get showErrorTip(): boolean;
    get showValidatingTip(): boolean;
    get showInnerTip(): boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormControlComponent, "bps-form-control", ["bpsFormControl"], { "bpsSuccessTip": { "alias": "bpsSuccessTip"; "required": false; }; "bpsWarningTip": { "alias": "bpsWarningTip"; "required": false; }; "bpsErrorTip": { "alias": "bpsErrorTip"; "required": false; }; "bpsValidatingTip": { "alias": "bpsValidatingTip"; "required": false; }; "bpsExtra": { "alias": "bpsExtra"; "required": false; }; "bpsHasFeedback": { "alias": "bpsHasFeedback"; "required": false; }; "bpsValidateStatus": { "alias": "bpsValidateStatus"; "required": false; }; }, {}, ["defaultValidateControl"], ["*", "bps-form-explain", "bps-form-extra"], false, never>;
}

declare class BpsFormExtraComponent {
    elementRef: ElementRef;
    private renderer;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormExtraComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormExtraComponent, "bps-form-extra", ["bpsFormExtra"], {}, {}, never, ["*"], false, never>;
}

declare class BpsFormSplitComponent {
    elementRef: ElementRef;
    private renderer;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormSplitComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormSplitComponent, "bps-form-split", ["bpsFormSplit"], {}, {}, never, ["*"], false, never>;
}

declare class BpsFormTextComponent {
    elementRef: ElementRef;
    private renderer;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormTextComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormTextComponent, "bps-form-text", ["bpsFormText"], {}, {}, never, ["*"], false, never>;
}

type NzButtonType = 'primary' | 'dashed' | 'danger' | 'default' | 'link' | 'variation-1' | 'variation-2' | 'variation-3' | 'variation-4' | 'variation-5' | 'variation-6' | 'variation-7' | 'variation-8' | 'variation-9' | 'variation-10' | 'variation-11' | 'variation-12' | 'variation-13' | 'variation-14' | 'variation-15' | 'variation-16' | 'variation-17' | 'variation-18' | 'variation-19' | 'variation-20' | 'editable';
type NzButtonShape = 'circle' | 'round' | null;
declare class BpsButtonComponent implements AfterContentInit, OnInit, OnDestroy, OnChanges {
    private elementRef;
    private cdr;
    private renderer;
    private contentObserver;
    private nzUpdateHostClassService;
    private ngZone;
    nzConfigService: NzConfigService;
    isSelected: boolean;
    isSelectedChange: EventEmitter<any>;
    showEditionMode: boolean;
    contentElement: ElementRef;
    listOfIconElement: QueryList<ElementRef>;
    bpsBlock: boolean;
    bpsGhost: boolean;
    bpsSearch: boolean;
    bpsComputed: boolean;
    bpsLoading: boolean;
    bpsEditionEnabled: boolean;
    bpsType: NzButtonType;
    bpsValue: string;
    bpsComputedTooltipType: string;
    bpsComputedTooltipPlacement: string;
    bpsComputedTooltipTitle: string | null;
    bpsEditTooltipType: string;
    bpsEditTooltipPlacement: string;
    bpsEditTooltipTitle: string | null;
    bpsValueChange: EventEmitter<any>;
    bpsShape: NzButtonShape;
    bpsSize: NzSizeLDSType;
    inputElement: ElementRef;
    readonly el: HTMLElement;
    isInDropdown: boolean;
    private iconElement;
    private iconOnly;
    private destroy$;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap(): void;
    updateIconDisplay(value: boolean): void;
    checkContent(): void;
    moveIcon(): void;
    preventDefault($event: any): void;
    handleClick(e: MouseEvent): void;
    endEditMode($event: KeyboardEvent): void;
    clicks: number;
    onClick(event: MouseEvent): void;
    startEditionMode($event: Event): void;
    waveConfig: NzWaveConfig | null;
    animationType: string | null;
    constructor(elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, contentObserver: ContentObserver, nzUpdateHostClassService: NzUpdateHostClassService, ngZone: NgZone, nzConfigService: NzConfigService);
    ngAfterContentInit(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsButtonComponent, "[bps-button]", ["bpsButton"], { "isSelected": { "alias": "isSelected"; "required": false; }; "bpsBlock": { "alias": "bpsBlock"; "required": false; }; "bpsGhost": { "alias": "bpsGhost"; "required": false; }; "bpsSearch": { "alias": "bpsSearch"; "required": false; }; "bpsComputed": { "alias": "bpsComputed"; "required": false; }; "bpsLoading": { "alias": "bpsLoading"; "required": false; }; "bpsEditionEnabled": { "alias": "bpsEditionEnabled"; "required": false; }; "bpsType": { "alias": "bpsType"; "required": false; }; "bpsValue": { "alias": "bpsValue"; "required": false; }; "bpsComputedTooltipType": { "alias": "bpsComputedTooltipType"; "required": false; }; "bpsComputedTooltipPlacement": { "alias": "bpsComputedTooltipPlacement"; "required": false; }; "bpsComputedTooltipTitle": { "alias": "bpsComputedTooltipTitle"; "required": false; }; "bpsEditTooltipType": { "alias": "bpsEditTooltipType"; "required": false; }; "bpsEditTooltipPlacement": { "alias": "bpsEditTooltipPlacement"; "required": false; }; "bpsEditTooltipTitle": { "alias": "bpsEditTooltipTitle"; "required": false; }; "bpsShape": { "alias": "bpsShape"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; }, { "isSelectedChange": "isSelectedChange"; "bpsValueChange": "bpsValueChange"; }, ["listOfIconElement"], ["*"], false, never>;
    static ngAcceptInputType_isSelected: unknown;
    static ngAcceptInputType_bpsBlock: unknown;
    static ngAcceptInputType_bpsGhost: unknown;
    static ngAcceptInputType_bpsSearch: unknown;
    static ngAcceptInputType_bpsComputed: unknown;
    static ngAcceptInputType_bpsLoading: unknown;
    static ngAcceptInputType_bpsEditionEnabled: unknown;
}

declare class BpsButtonGroupComponent implements OnInit {
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

declare class BpsSwitchComponent implements ControlValueAccessor, AfterViewInit, OnDestroy, OnInit {
    nzConfigService: NzConfigService$1;
    private host;
    private ngZone;
    private cdr;
    private focusMonitor;
    readonly _nzModuleName: NzConfigKey$1;
    isChecked: boolean;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    switchElement: ElementRef<HTMLElement>;
    bpsLoading: boolean;
    bpsDisabled: boolean;
    bpsControl: boolean;
    bpsCheckedChildren: string | TemplateRef<void> | null;
    bpsUnCheckedChildren: string | TemplateRef<void> | null;
    bpsSize: NzSizeDSType$1;
    bpsId: string | null;
    bpsDual: boolean;
    bpsDualValues: {
        title: string;
        checked: boolean;
    }[];
    bpsDualValuesChange: EventEmitter<{
        title: string;
        checked: boolean;
    }[]>;
    dir: Direction;
    private destroy$;
    private isNzDisableFirstChange;
    updateValue(value: boolean): void;
    focus(): void;
    blur(): void;
    directionality: Directionality;
    constructor(nzConfigService: NzConfigService$1, host: ElementRef<HTMLElement>, ngZone: NgZone, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    checkNode(nodeA: {
        title: string;
        checked: boolean;
    }, nodeB: {
        title: string;
        checked: boolean;
    }): void;
    onKeyDown(e: KeyboardEvent): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsSwitchComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsSwitchComponent, "bps-switch", ["bpsSwitch"], { "bpsLoading": { "alias": "bpsLoading"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsControl": { "alias": "bpsControl"; "required": false; }; "bpsCheckedChildren": { "alias": "bpsCheckedChildren"; "required": false; }; "bpsUnCheckedChildren": { "alias": "bpsUnCheckedChildren"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; "bpsId": { "alias": "bpsId"; "required": false; }; "bpsDual": { "alias": "bpsDual"; "required": false; }; "bpsDualValues": { "alias": "bpsDualValues"; "required": false; }; }, { "bpsDualValuesChange": "bpsDualValuesChange"; }, never, never, false, never>;
    static ngAcceptInputType_bpsLoading: unknown;
    static ngAcceptInputType_bpsDisabled: unknown;
    static ngAcceptInputType_bpsControl: unknown;
    static ngAcceptInputType_bpsDual: unknown;
}

interface NzCheckBoxOptionInterface {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
declare class BpsCheckboxGroupComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private elementRef;
    private focusMonitor;
    private cdr;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    options: NzCheckBoxOptionInterface[];
    bpsDisabled: boolean;
    dir: Direction;
    private destroy$;
    private isNzDisableFirstChange;
    trackByOption(_: number, option: NzCheckBoxOptionInterface): string;
    onCheckedChange(option: NzCheckBoxOptionInterface, checked: boolean): void;
    directionality: Directionality;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(value: NzCheckBoxOptionInterface[]): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsCheckboxGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsCheckboxGroupComponent, "bps-checkbox-group", ["bpsCheckboxGroup"], { "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_bpsDisabled: unknown;
}

declare class NzCheckboxWrapperComponent {
    readonly nzOnChange: EventEmitter<any[]>;
    private checkboxList;
    addCheckbox(value: BpsCheckboxComponent): void;
    removeCheckbox(value: BpsCheckboxComponent): void;
    onChange(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzCheckboxWrapperComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NzCheckboxWrapperComponent, "nz-checkbox-wrapper", ["nzCheckboxWrapper"], {}, { "nzOnChange": "nzOnChange"; }, never, ["*"], false, never>;
}

type BpsCheckboxType = 'variation1' | 'variation2' | 'variation3';
declare class BpsCheckboxComponent implements OnInit, ControlValueAccessor, OnDestroy, AfterViewInit {
    private ngZone;
    private elementRef;
    private cdr;
    private focusMonitor;
    dir: Direction;
    private destroy$;
    private isbpsDisableFirstChange;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    inputElement: ElementRef<HTMLInputElement>;
    readonly bpsCheckedChange: EventEmitter<boolean>;
    bpsValue: NzSafeAny | null;
    bpsAutoFocus: boolean;
    bpsDisabled: boolean;
    bpsIndeterminate: boolean;
    bpsChecked: boolean;
    bpsId: string | null;
    bpsType: BpsCheckboxType;
    innerCheckedChange(checked: boolean): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(disabled: boolean): void;
    focus(): void;
    blur(): void;
    directionality: Directionality;
    bpsCheckboxWrapperComponent: NzCheckboxWrapperComponent;
    bpsFormStatusService: NzFormStatusService;
    constructor(ngZone: NgZone, elementRef: ElementRef<HTMLElement>, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsCheckboxComponent, "[bps-checkbox]", ["bpsCheckbox"], { "bpsValue": { "alias": "bpsValue"; "required": false; }; "bpsAutoFocus": { "alias": "bpsAutoFocus"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsIndeterminate": { "alias": "bpsIndeterminate"; "required": false; }; "bpsChecked": { "alias": "bpsChecked"; "required": false; }; "bpsId": { "alias": "bpsId"; "required": false; }; "bpsType": { "alias": "bpsType"; "required": false; }; }, { "bpsCheckedChange": "bpsCheckedChange"; }, never, ["*"], false, never>;
    static ngAcceptInputType_bpsAutoFocus: unknown;
    static ngAcceptInputType_bpsDisabled: unknown;
    static ngAcceptInputType_bpsIndeterminate: unknown;
    static ngAcceptInputType_bpsChecked: unknown;
}

declare class BpsRadioButtonDirective {
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsRadioButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsRadioButtonDirective, "[bps-radio-button]", never, {}, {}, never, never, false, never>;
}

/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */

type BpsRadioButtonType = 'variation1' | 'variation2' | 'variation3' | 'variation5' | 'variation6' | 'variation7' | 'variation8a' | 'variation8b' | 'variation8c' | 'variation8d' | 'variation8e' | 'variation9' | 'variation10' | 'variation11' | 'variation12';
declare class BpsRadioComponent implements ControlValueAccessor, AfterViewInit, OnDestroy, OnInit {
    private ngZone;
    private elementRef;
    private cdr;
    private renderer;
    private focusMonitor;
    private isNgModel;
    private destroy$;
    private isNzDisableFirstChange;
    isChecked: boolean;
    name: string | null;
    directionality: Directionality;
    nzRadioService: NzRadioService;
    nzRadioButtonDirective: BpsRadioButtonDirective;
    nzFormStatusService: NzFormStatusService;
    isRadioButton: boolean;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    inputElement: ElementRef<HTMLInputElement>;
    bpsValue: NzSafeAny | null;
    bpsDisabled: boolean;
    bpsAutoFocus: boolean;
    bpsRadioButtonType: BpsRadioButtonType;
    dir: Direction;
    focus(): void;
    blur(): void;
    constructor(ngZone: NgZone, elementRef: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, focusMonitor: FocusMonitor);
    setDisabledState(disabled: boolean): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    private setupClickListener;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsRadioComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsRadioComponent, "[bps-radio],[bps-radio-button]", ["bpsRadio"], { "bpsValue": { "alias": "bpsValue"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsAutoFocus": { "alias": "bpsAutoFocus"; "required": false; }; "bpsRadioButtonType": { "alias": "bpsRadioButtonType"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_bpsDisabled: unknown;
    static ngAcceptInputType_bpsAutoFocus: unknown;
}

type NzRadioButtonStyle = 'outline' | 'solid';
declare class BpsRadioGroupComponent implements OnInit, ControlValueAccessor, OnDestroy, OnChanges {
    private cdr;
    private nzRadioService;
    private value;
    private destroy$;
    private isNzDisableFirstChange;
    onChange: OnChangeType;
    onTouched: OnTouchedType;
    bpsDisabled: boolean;
    bpsButtonStyle: NzRadioButtonStyle;
    bpsSize: NzSizeLDSType$1;
    bpsName: string | null;
    dir: Direction;
    directionality: Directionality;
    constructor(cdr: ChangeDetectorRef, nzRadioService: NzRadioService);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(value: NzSafeAny): void;
    registerOnChange(fn: OnChangeType): void;
    registerOnTouched(fn: OnTouchedType): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsRadioGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsRadioGroupComponent, "bps-radio-group", ["bpsRadioGroup"], { "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsButtonStyle": { "alias": "bpsButtonStyle"; "required": false; }; "bpsSize": { "alias": "bpsSize"; "required": false; }; "bpsName": { "alias": "bpsName"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_bpsDisabled: unknown;
}

declare class BpsCollapsePanelComponent implements OnInit, OnDestroy {
    nzConfigService: NzConfigService;
    private cdr;
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
    bpsCollapseComponent: BpsCollapseComponent;
    constructor(nzConfigService: NzConfigService, cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsCollapsePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsCollapsePanelComponent, "bps-collapse-panel", ["bpsCollapsePanel"], { "bpsActive": { "alias": "bpsActive"; "required": false; }; "bpsDisabled": { "alias": "bpsDisabled"; "required": false; }; "bpsValid": { "alias": "bpsValid"; "required": false; }; "bpsShowArrow": { "alias": "bpsShowArrow"; "required": false; }; "bpsExtra": { "alias": "bpsExtra"; "required": false; }; "bpsHeader": { "alias": "bpsHeader"; "required": false; }; "bpsExpandedIcon": { "alias": "bpsExpandedIcon"; "required": false; }; }, { "bpsActiveChange": "bpsActiveChange"; }, never, ["*"], false, never>;
    static ngAcceptInputType_bpsActive: unknown;
    static ngAcceptInputType_bpsDisabled: unknown;
    static ngAcceptInputType_bpsShowArrow: unknown;
}

declare class BpsCollapseComponent {
    nzConfigService: NzConfigService;
    private listOfNzCollapsePanelComponent;
    bpsAccordion: boolean;
    bpsBordered: boolean;
    constructor(nzConfigService: NzConfigService);
    addPanel(value: BpsCollapsePanelComponent): void;
    removePanel(value: BpsCollapsePanelComponent): void;
    click(collapse: BpsCollapsePanelComponent): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsCollapseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsCollapseComponent, "bps-collapse", ["bpsCollapse"], { "bpsAccordion": { "alias": "bpsAccordion"; "required": false; }; "bpsBordered": { "alias": "bpsBordered"; "required": false; }; }, {}, never, ["*"], false, never>;
    static ngAcceptInputType_bpsAccordion: unknown;
    static ngAcceptInputType_bpsBordered: unknown;
}

declare class BpsTableExpandablePanelComponent<T = any> implements OnInit, OnDestroy, AfterViewInit, OnChanges {
    private cdr;
    private i18n;
    locale: any;
    private destroy$;
    checkboxCache: CheckboxSelect[];
    mapOfExpandData: {
        [key: string]: boolean;
    };
    _data: any[];
    editId: any;
    isExpanded: boolean;
    searchBoxHovered: boolean;
    private _searchSubject;
    set data(data: any);
    frontPagination: boolean;
    total: number;
    pageIndex: number;
    pageSize: number;
    showPagination: boolean;
    paginationPosition: 'top' | 'bottom' | 'both';
    bordered: boolean;
    widthConfig: string[];
    loading: boolean;
    loadingDelay: number;
    loadingIndicator: TemplateRef<void>;
    scroll: {
        x?: string | null;
        y?: string | null;
    };
    title: string | TemplateRef<void>;
    footer: string | TemplateRef<void>;
    noResult: string | TemplateRef<void>;
    pageSizeOptions: number[];
    showQuickJumper: boolean;
    showSizeChanger: boolean;
    showTotal: TemplateRef<{
        $implicit: number;
        range: [number, number];
    }>;
    hideOnSinglePage: boolean;
    simple: boolean;
    virtualScroll: boolean;
    virtualItemSize: number;
    virtualMaxBufferPx: number;
    virtualMinBufferPx: number;
    virtualForTrackBy: TrackByFunction<T>;
    inlineEdit: boolean;
    pageIndexChange: EventEmitter<any>;
    currentPageDataChange: EventEmitter<any>;
    queryParamsChange: EventEmitter<any>;
    pageSizeChange: EventEmitter<any>;
    onclickRow: EventEmitter<any>;
    ondblclickRow: EventEmitter<any>;
    selectionChange: EventEmitter<any>;
    singleSort: boolean;
    sortChange: EventEmitter<any>;
    config: TableConfig;
    configChange: EventEmitter<TableConfig>;
    gridID: string;
    onedit: EventEmitter<any>;
    menuTemplate: TemplateRef<void>;
    currentPreviewTemplate: TemplateRef<void>;
    inputElement: ElementRef;
    gridComponent: NzTableComponent<any>;
    panel: ElementRef;
    handleClick(e: MouseEvent): void;
    emitOnEditEvent(): void;
    endEditMode($event: KeyboardEvent, index: number, data?: any): void;
    preventDefault($event: MouseEvent): void;
    emitBpsEvent($event: any, type: string): void;
    getFields(): Field[];
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    isCeldTypeTemplateRef(field: Field): boolean;
    isCeldTypeDefault(field: Field): boolean;
    getTDClassMap(field: Field, data: any, fi?: number): any;
    isRowSelected(data: any): boolean;
    updateCheckboxCache(): void;
    clicks: number;
    clickRow(event: MouseEvent, data: any): void;
    startEdit(data: any, event: MouseEvent): void;
    isNull(value: any): boolean;
    selectText($event: any): void;
    selectRow(data: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTableExpandablePanelComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTableExpandablePanelComponent<any>, "bps-table-expandable-panel", ["bpsTableExpandablePanel"], { "data": { "alias": "data"; "required": false; }; "frontPagination": { "alias": "frontPagination"; "required": false; }; "total": { "alias": "total"; "required": false; }; "pageIndex": { "alias": "pageIndex"; "required": false; }; "pageSize": { "alias": "pageSize"; "required": false; }; "showPagination": { "alias": "showPagination"; "required": false; }; "paginationPosition": { "alias": "paginationPosition"; "required": false; }; "bordered": { "alias": "bordered"; "required": false; }; "widthConfig": { "alias": "widthConfig"; "required": false; }; "loading": { "alias": "loading"; "required": false; }; "loadingDelay": { "alias": "loadingDelay"; "required": false; }; "loadingIndicator": { "alias": "loadingIndicator"; "required": false; }; "scroll": { "alias": "scroll"; "required": false; }; "title": { "alias": "title"; "required": false; }; "footer": { "alias": "footer"; "required": false; }; "noResult": { "alias": "noResult"; "required": false; }; "pageSizeOptions": { "alias": "pageSizeOptions"; "required": false; }; "showQuickJumper": { "alias": "showQuickJumper"; "required": false; }; "showSizeChanger": { "alias": "showSizeChanger"; "required": false; }; "showTotal": { "alias": "showTotal"; "required": false; }; "hideOnSinglePage": { "alias": "hideOnSinglePage"; "required": false; }; "simple": { "alias": "simple"; "required": false; }; "virtualScroll": { "alias": "virtualScroll"; "required": false; }; "virtualItemSize": { "alias": "virtualItemSize"; "required": false; }; "virtualMaxBufferPx": { "alias": "virtualMaxBufferPx"; "required": false; }; "virtualMinBufferPx": { "alias": "virtualMinBufferPx"; "required": false; }; "virtualForTrackBy": { "alias": "virtualForTrackBy"; "required": false; }; "inlineEdit": { "alias": "inlineEdit"; "required": false; }; "singleSort": { "alias": "singleSort"; "required": false; }; "config": { "alias": "config"; "required": false; }; "gridID": { "alias": "gridID"; "required": false; }; "menuTemplate": { "alias": "menuTemplate"; "required": false; }; "currentPreviewTemplate": { "alias": "currentPreviewTemplate"; "required": false; }; }, { "pageIndexChange": "pageIndexChange"; "currentPageDataChange": "currentPageDataChange"; "queryParamsChange": "queryParamsChange"; "pageSizeChange": "pageSizeChange"; "onclickRow": "onclickRow"; "ondblclickRow": "ondblclickRow"; "selectionChange": "selectionChange"; "sortChange": "sortChange"; "configChange": "configChange"; "onedit": "onedit"; }, never, never, false, never>;
    static ngAcceptInputType_frontPagination: unknown;
    static ngAcceptInputType_showPagination: unknown;
    static ngAcceptInputType_bordered: unknown;
    static ngAcceptInputType_loading: unknown;
    static ngAcceptInputType_showQuickJumper: unknown;
    static ngAcceptInputType_showSizeChanger: unknown;
    static ngAcceptInputType_hideOnSinglePage: unknown;
    static ngAcceptInputType_simple: unknown;
    static ngAcceptInputType_virtualScroll: unknown;
    static ngAcceptInputType_virtualItemSize: unknown;
    static ngAcceptInputType_virtualMaxBufferPx: unknown;
    static ngAcceptInputType_virtualMinBufferPx: unknown;
    static ngAcceptInputType_inlineEdit: unknown;
}

declare class BpsConfigurationSelectorComponent<T = any> implements OnInit, OnDestroy, AfterViewInit {
    private cdr;
    private destroy$;
    currentDisplayedDataIndex: any;
    _data: any[];
    _currentDisplayedData: any;
    set currentDisplayedData(value: any);
    propertyName: string;
    disabled: boolean;
    currentDisplayedDataChange: EventEmitter<any>;
    set data(data: any);
    constructor(cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    getCurrentElementIndex(): number;
    getPrevElement(): void;
    getNextElement(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsConfigurationSelectorComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsConfigurationSelectorComponent<any>, "bps-configuration-selector", ["bpsConfigurationSelector"], { "currentDisplayedData": { "alias": "currentDisplayedData"; "required": false; }; "propertyName": { "alias": "propertyName"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "data": { "alias": "data"; "required": false; }; }, { "currentDisplayedDataChange": "currentDisplayedDataChange"; }, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
}

declare class BpsTextEditorComponent implements OnInit, OnChanges {
    showEditor: boolean;
    lazyLoaded: boolean;
    oninit: EventEmitter<any>;
    onchange: EventEmitter<any>;
    onblur: EventEmitter<any>;
    onkeyup: EventEmitter<any>;
    disabled: boolean;
    height: string;
    editorID: string;
    statusbar: boolean;
    resize: boolean;
    toolbarmobile: string[];
    toolbar: string;
    tinyMceSettings: any;
    constructor();
    ngOnInit(): void;
    initTinyMCE(): void;
    disableEditor(): void;
    enableEditor(): void;
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTextEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTextEditorComponent, "bps-text-editor", ["bpsTextEditor"], { "lazyLoaded": { "alias": "lazyLoaded"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "height": { "alias": "height"; "required": false; }; "editorID": { "alias": "editorID"; "required": false; }; "statusbar": { "alias": "statusbar"; "required": false; }; "resize": { "alias": "resize"; "required": false; }; "toolbarmobile": { "alias": "toolbarmobile"; "required": false; }; "toolbar": { "alias": "toolbar"; "required": false; }; "tinyMceSettings": { "alias": "tinyMceSettings"; "required": false; }; }, { "oninit": "oninit"; "onchange": "onchange"; "onblur": "onblur"; "onkeyup": "onkeyup"; }, never, never, false, never>;
    static ngAcceptInputType_lazyLoaded: unknown;
    static ngAcceptInputType_disabled: unknown;
}

declare class BpsGridComponent {
    _columns: any[];
    _rows: any[];
    _selection: number[];
    _latestSelection: number[];
    disabled: boolean;
    selectionChange: EventEmitter<any>;
    set columns(value: number);
    set rows(value: number);
    set selection(value: number[]);
    get selection(): number[];
    constructor();
    onSelectionChange(row: any, column: any): void;
    isSelected(row: number, column: number): boolean;
    previewSelection(row: any, column: any): void;
    endPreviewSelection(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsGridComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsGridComponent, "bps-grid", never, { "disabled": { "alias": "disabled"; "required": false; }; "columns": { "alias": "columns"; "required": false; }; "rows": { "alias": "rows"; "required": false; }; "selection": { "alias": "selection"; "required": false; }; }, { "selectionChange": "selectionChange"; }, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
}

declare class NzToCssUnitPipe implements PipeTransform {
    transform(value: number | string, defaultUnit?: string): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzToCssUnitPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<NzToCssUnitPipe, "nzToCssUnit", false>;
}

declare const iconTypeMap: {
    readonly error: "close-circle-fill";
    readonly validating: "loading";
    readonly success: "check-circle-fill";
    readonly warning: "exclamation-circle-fill";
};
declare class BpsFormItemFeedbackIconComponent implements OnChanges {
    cdr: ChangeDetectorRef;
    status: NzValidateStatus;
    constructor(cdr: ChangeDetectorRef);
    iconType: typeof iconTypeMap[keyof typeof iconTypeMap] | null;
    ngOnChanges(_changes: SimpleChanges): void;
    updateIcon(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsFormItemFeedbackIconComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsFormItemFeedbackIconComponent, "bps-form-item-feedback-icon", ["bpsFormFeedbackIcon"], { "status": { "alias": "status"; "required": false; }; }, {}, never, never, false, never>;
}

declare class BpsDropdownButtonDirective implements AfterViewInit {
    private renderer;
    private elementRef;
    nzButtonGroupComponent: BpsButtonGroupComponent;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsDropdownButtonDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsDropdownButtonDirective, "[bps-button][bps-dropdown]", never, {}, {}, never, never, false, never>;
}

declare class NzModalControlServiceModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NzModalControlServiceModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NzModalControlServiceModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NzModalControlServiceModule>;
}

declare class NzStringTemplateOutletDirective implements OnChanges {
    private viewContainer;
    private defaultTemplate;
    private isTemplate;
    private inputTemplate;
    private inputViewRef;
    private defaultViewRef;
    nzStringTemplateOutletContext: any | null;
    set nzStringTemplateOutlet(value: string | TemplateRef<any>);
    recreateView(): void;
    private getType;
    private shouldRecreateView;
    private hasContextShapeChanged;
    private updateExistingContext;
    constructor(viewContainer: ViewContainerRef, defaultTemplate: TemplateRef<void>);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzStringTemplateOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzStringTemplateOutletDirective, "[nzStringTemplateOutlet]", ["nzStringTemplateOutlet"], { "nzStringTemplateOutletContext": { "alias": "nzStringTemplateOutletContext"; "required": false; }; "nzStringTemplateOutlet": { "alias": "nzStringTemplateOutlet"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NzClassListAddDirective {
    private elementRef;
    private renderer;
    classList: string[];
    set nzClassListAdd(list: string[]);
    constructor(elementRef: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<NzClassListAddDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzClassListAddDirective, "[nzClassListAdd]", ["nzClassListAdd"], { "nzClassListAdd": { "alias": "nzClassListAdd"; "required": false; }; }, {}, never, never, false, never>;
}

declare class NzAddOnModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<NzAddOnModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<NzAddOnModule, [typeof NzStringTemplateOutletDirective, typeof NzClassListAddDirective], [typeof i3.CommonModule], [typeof NzStringTemplateOutletDirective, typeof NzClassListAddDirective]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<NzAddOnModule>;
}

declare class BpsComponentsLibModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsComponentsLibModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<BpsComponentsLibModule, [typeof BpsModalComponent, typeof BpsModalFooterDirective, typeof BpsTreeComponent, typeof BpsTreeNodeComponent, typeof BpsDropDownDirective, typeof BpsDropdownMenuComponent, typeof BpsDropDownADirective, typeof BpsTableComponent, typeof BpsListComponent, typeof BpsListItemComponent, typeof BpsListItemMetaComponent, typeof BpsTooltipDirective, typeof BpsToolTipComponent, typeof BpsPopoverDirective, typeof BpsPopoverComponent, typeof BpsComponentsLibComponent, typeof BpsInputGroupComponent, typeof BpsInputGroupSlotComponent, typeof BpsTextareaCountComponent, typeof BpsInputDirective, typeof BpsAutosizeDirective, typeof BpsOptionComponent, typeof BpsOptionContainerComponent, typeof BpsOptionGroupComponent, typeof BpsOptionItemComponent, typeof BpsOptionItemGroupComponent, typeof BpsSelectComponent, typeof BpsSelectArrowComponent, typeof BpsSelectClearComponent, typeof BpsSelectItemComponent, typeof BpsSelectPlaceholderComponent, typeof BpsSelectSearchComponent, typeof BpsSelectTopControlComponent, typeof BpsFormDirective, typeof BpsFormExplainComponent, typeof BpsFormControlComponent, typeof BpsFormExtraComponent, typeof BpsFormItemComponent, typeof BpsFormLabelComponent, typeof BpsFormSplitComponent, typeof BpsFormTextComponent, typeof BpsButtonComponent, typeof BpsButtonGroupComponent, typeof BpsSwitchComponent, typeof BpsCheckboxGroupComponent, typeof BpsCheckboxComponent, typeof BpsRadioComponent, typeof BpsRadioGroupComponent, typeof BpsRadioButtonDirective, typeof BpsCollapseComponent, typeof BpsCollapsePanelComponent, typeof BpsTableExpandablePanelComponent, typeof BpsConfigurationSelectorComponent, typeof BpsTextEditorComponent, typeof BpsGridComponent, typeof NzToCssUnitPipe, typeof BpsFormItemFeedbackIconComponent, typeof BpsDropdownMenuComponent, typeof BpsDropdownButtonDirective], [typeof i57.NzHighlightModule, typeof i58.NzTreeModule, typeof NzModalControlServiceModule, typeof i3.CommonModule, typeof NzAddOnModule, typeof i62.NzPipesModule, typeof i63.NzIconModule, typeof i64.OverlayModule, typeof i65.NzNoAnimationModule, typeof i66.NzTooltipModule, typeof i67.NzOverlayModule, typeof i68.NzEmptyModule, typeof i69.NzFormModule, typeof i70.FormsModule, typeof i71.ObserversModule, typeof i72.NzWaveModule, typeof i73.NzSpinModule, typeof i74.NzGridModule, typeof i75.NzAvatarModule, typeof i76.NzTableModule, typeof i77.EditorModule, typeof i78.NzMenuModule, typeof i79.NzResizableModule, typeof i80.NzSelectModule], [typeof i58.NzTreeModule, typeof BpsGridComponent, typeof BpsModalComponent, typeof BpsModalFooterDirective, typeof BpsTreeComponent, typeof BpsTreeNodeComponent, typeof BpsDropDownDirective, typeof BpsDropdownMenuComponent, typeof BpsDropDownADirective, typeof BpsConfigurationSelectorComponent, typeof BpsTableComponent, typeof BpsListComponent, typeof BpsListItemComponent, typeof BpsListItemMetaComponent, typeof BpsPopoverDirective, typeof BpsPopoverComponent, typeof BpsComponentsLibComponent, typeof BpsComponentsLibComponent, typeof BpsInputGroupComponent, typeof BpsInputDirective, typeof BpsInputGroupComponent, typeof BpsInputGroupSlotComponent, typeof BpsTextareaCountComponent, typeof BpsAutosizeDirective, typeof BpsOptionComponent, typeof BpsOptionContainerComponent, typeof BpsOptionGroupComponent, typeof BpsOptionItemComponent, typeof BpsOptionItemGroupComponent, typeof BpsSelectComponent, typeof BpsSelectArrowComponent, typeof BpsSelectClearComponent, typeof BpsSelectItemComponent, typeof BpsSelectPlaceholderComponent, typeof BpsSelectSearchComponent, typeof BpsSelectTopControlComponent, typeof BpsFormDirective, typeof i74.NzGridModule, typeof BpsFormExplainComponent, typeof BpsFormControlComponent, typeof BpsFormExtraComponent, typeof BpsFormItemComponent, typeof BpsFormLabelComponent, typeof BpsFormSplitComponent, typeof BpsFormTextComponent, typeof BpsButtonComponent, typeof BpsButtonGroupComponent, typeof BpsSwitchComponent, typeof BpsCheckboxGroupComponent, typeof BpsCheckboxComponent, typeof BpsRadioComponent, typeof BpsRadioGroupComponent, typeof BpsRadioButtonDirective, typeof BpsCollapseComponent, typeof BpsCollapsePanelComponent, typeof BpsTooltipDirective, typeof BpsToolTipComponent, typeof BpsTableExpandablePanelComponent, typeof BpsTextEditorComponent, typeof i69.NzFormModule, typeof BpsDropdownMenuComponent, typeof BpsDropdownButtonDirective, typeof i78.NzMenuModule, typeof i80.NzSelectModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<BpsComponentsLibModule>;
}

export { BpsAutosizeDirective, BpsButtonComponent, BpsButtonGroupComponent, BpsCheckboxComponent, BpsCheckboxGroupComponent, BpsCollapseComponent, BpsCollapsePanelComponent, BpsComponentsLibComponent, BpsComponentsLibModule, BpsComponentsLibService, BpsConfigurationSelectorComponent, BpsDropDownADirective, BpsDropDownDirective, BpsDropdownButtonDirective, BpsDropdownMenuComponent, BpsFormControlComponent, BpsFormDirective, BpsFormExplainComponent, BpsFormExtraComponent, BpsFormItemComponent, BpsFormLabelComponent, BpsFormSplitComponent, BpsFormTextComponent, BpsGridComponent, BpsInputDirective, BpsInputGroupComponent, BpsInputGroupSlotComponent, BpsListComponent, BpsListItemComponent, BpsListItemMetaComponent, BpsModalComponent, BpsModalFooterDirective, BpsOptionComponent, BpsOptionContainerComponent, BpsOptionGroupComponent, BpsOptionItemComponent, BpsOptionItemGroupComponent, BpsPopoverComponent, BpsPopoverDirective, BpsRadioButtonDirective, BpsRadioComponent, BpsRadioGroupComponent, BpsSelectArrowComponent, BpsSelectClearComponent, BpsSelectComponent, BpsSelectItemComponent, BpsSelectPlaceholderComponent, BpsSelectSearchComponent, BpsSelectTopControlComponent, BpsSwitchComponent, BpsTableComponent, BpsTableExpandablePanelComponent, BpsTextEditorComponent, BpsTextareaCountComponent, BpsToolTipComponent, BpsTooltipDirective, BpsTreeComponent, BpsTreeNodeComponent, CeldType, MODAL_ANIMATE_DURATION, NzCheckboxWrapperComponent, NzInputGroupWhitSuffixOrPrefixDirective, NzTreeNode, NzTreeServiceFactory, TemplateType, WRAP_CLASS_NAME };
export type { AutoSizeType, BpsCheckboxType, BpsListType, BpsPopoverType, BpsRadioButtonType, BpsTableType, CheckboxSelect, Field, NzButtonShape, NzButtonType, NzCheckBoxOptionInterface, NzFormControlStatusType, NzFormatBeforeDropEvent, NzFormatEmitEvent, NzPlacementType, NzRadioButtonStyle, NzSelectSizeType, NzTreeNodeBaseComponent, NzTreeNodeOptions, TableConfig, TableSelectConfig, TableTemplateRef, TableTemplateRefContext };
