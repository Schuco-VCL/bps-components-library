import { __decorate } from "tslib";
import { ESCAPE } from '@angular/cdk/keycodes';
import { OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, Inject, Injector, Input, Optional, Output, TemplateRef, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BpsModalFooterDirective } from './bps-modal-footer.directive';
import { BpsModalRef } from './bps-modal-ref.class';
import { NZ_MODAL_CONFIG } from './bps-modal-config';
import { getElementOffset, InputBoolean, isPromise } from 'ng-zorro-antd/core/util';
import { WithConfig } from '../bps-tree/tree/config.service';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import * as i0 from "@angular/core";
import * as i1 from "../bps-tree/tree/config.service";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "ng-zorro-antd/i18n";
import * as i4 from "./bps-modal-control.service";
import * as i5 from "@angular/cdk/a11y";
import * as i6 from "@angular/common";
import * as i7 from "../core/addon/string_template_outlet";
import * as i8 from "ng-zorro-antd/icon";
import * as i9 from "ng-zorro-antd/core/no-animation";
import * as i10 from "../bps-button/bps-button.component";
import * as i11 from "../core/pipes/nz-css-unit.pipe";
export const MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
export const WRAP_CLASS_NAME = 'ant-modal-wrap';
const NZ_CONFIG_COMPONENT_NAME = 'modal';
// tslint:disable-next-line:no-any
export class BpsModalComponent extends BpsModalRef {
    set modalFooter(value) {
        if (value && value.templateRef) {
            this.setFooterWithTemplate(value.templateRef);
        }
    }
    get afterOpen() {
        // Observable alias for nzAfterOpen
        return this.bpsAfterOpen.asObservable();
    }
    get afterClose() {
        // Observable alias for nzAfterClose
        return this.bpsAfterClose.asObservable();
    }
    get cancelText() {
        return this.bpsCancelText || this.locale.cancelText;
    }
    get okText() {
        return this.bpsOkText || this.locale.okText;
    }
    get hidden() {
        return !this.bpsVisible && !this.animationState;
    } // Indicate whether this dialog should hidden
    /**
     * @description
     * The calculated highest weight of mask value
     *
     * Weight of different mask input:
     * component default value < global configuration < component input value
     */
    get mask() {
        if (this.bpsMask != null) {
            return this.bpsMask;
        }
        else if (this.bpsModalGlobalConfig && this.bpsModalGlobalConfig.bpsMask != null) {
            return this.bpsModalGlobalConfig.bpsMask;
        }
        else {
            return true;
        }
    }
    /**
     * @description
     * The calculated highest weight of maskClosable value
     *
     * Weight of different maskClosable input:
     * component default value < global configuration < component input value
     */
    get maskClosable() {
        if (this.bpsMaskClosable != null) {
            return this.bpsMaskClosable;
        }
        else if (this.bpsModalGlobalConfig && this.bpsModalGlobalConfig.bpsMaskClosable != null) {
            return this.bpsModalGlobalConfig.bpsMaskClosable;
        }
        else {
            return true;
        }
    }
    constructor(nzConfigService, overlay, overlayKeyboardDispatcher, i18n, cfr, elementRef, viewContainer, modalControl, focusTrapFactory, cdr, bpsModalGlobalConfig, document // tslint:disable-line:no-any
    ) {
        super();
        this.nzConfigService = nzConfigService;
        this.overlay = overlay;
        this.overlayKeyboardDispatcher = overlayKeyboardDispatcher;
        this.i18n = i18n;
        this.cfr = cfr;
        this.elementRef = elementRef;
        this.viewContainer = viewContainer;
        this.modalControl = modalControl;
        this.focusTrapFactory = focusTrapFactory;
        this.cdr = cdr;
        this.bpsModalGlobalConfig = bpsModalGlobalConfig;
        this.document = document;
        this.bpsVisible = false;
        this.bpsClosable = true;
        this.bpsOkLoading = false;
        this.bpsOkDisabled = false;
        this.bpsCancelDisabled = false;
        this.bpsCancelLoading = false;
        this.bpsKeyboard = true;
        this.bpsNoAnimation = false;
        this.bpsModalDisabled = false;
        this.bpsGetContainer = () => this.overlay.create(); // [STATIC]
        this.bpsZIndex = 1000;
        this.bpsWidth = 520;
        this.bpsCloseIcon = 'close';
        this.bpsOkType = 'variation-1';
        this.bpsIconType = 'question-circle'; // Confirm Modal ONLY
        this.bpsModalType = 'default';
        this.bpsOnOk = new EventEmitter();
        this.bpsOnCancel = new EventEmitter();
        this.bpsAfterOpen = new EventEmitter(); // Trigger when modal open(visible) after animations
        this.bpsAfterClose = new EventEmitter(); // Trigger when modal leave-animation over
        this.bpsVisibleChange = new EventEmitter();
        this.locale = {};
        this.transformOrigin = '0px 0px 0px'; // The origin point that animation based on
        this.unsubscribe$ = new Subject();
        this.dialogMouseDown = false;
        this.scrollStrategy = this.overlay.scrollStrategies.block();
        if (this.bpsModalGlobalConfig) {
            warnDeprecation('`NZ_MODAL_CONFIG` has been deprecated and will be removed in 9.0.0. Please use global config instead.');
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Modal');
        });
        if (this.isComponent(this.bpsContent)) {
            this.createDynamicComponent(this.bpsContent); // Create component along without View
        }
        if (this.isModalButtons(this.bpsFooter)) {
            // Setup default button options
            this.bpsFooter = this.formatModalButtons(this.bpsFooter);
        }
        // Place the modal dom to elsewhere
        this.container = typeof this.bpsGetContainer === 'function' ? this.bpsGetContainer() : this.bpsGetContainer;
        if (this.container instanceof HTMLElement) {
            this.container.appendChild(this.elementRef.nativeElement);
            fromEvent(this.document.body, 'keydown')
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(e => this.keydownListener(e));
        }
        else if (this.container instanceof OverlayRef) {
            // NOTE: only attach the dom to overlay, the view container is not changed actually
            this.setOverlayRef(this.container);
            this.container.overlayElement.appendChild(this.elementRef.nativeElement);
        }
        if (this.overlayRef) {
            this.overlayRef
                .keydownEvents()
                .pipe(takeUntil(this.unsubscribe$))
                .subscribe(e => this.keydownListener(e));
        }
        // Register modal when afterOpen/afterClose is stable
        this.modalControl.registerModal(this);
    }
    // [NOTE] NOT available when using by service!
    // Because ngOnChanges never be called when using by service,
    // here we can't support "nzContent"(Component) etc. as inputs that initialized dynamically.
    // BUT: User also can change "nzContent" dynamically to trigger UI changes (provided you don't use Component that needs initializations)
    ngOnChanges(changes) {
        if (changes.bpsVisible) {
            this.handleVisibleStateChange(this.bpsVisible, !changes.bpsVisible.firstChange); // Do not trigger animation while initializing
        }
    }
    ngAfterViewInit() {
        // If using Component, it is the time to attach View while bodyContainer is ready
        if (this.contentComponentRef) {
            this.bodyContainer.insert(this.contentComponentRef.hostView);
        }
        if (this.autoFocusButtonOk) {
            this.autoFocusButtonOk.nativeElement.focus();
        }
    }
    ngOnDestroy() {
        // Close self before destructing
        this.changeVisibleFromInside(false).then(() => {
            this.modalControl.deregisterModal(this);
            if (this.container instanceof OverlayRef) {
                this.container.dispose();
            }
            this.unsubscribe$.next();
            this.unsubscribe$.complete();
        });
        clearTimeout(this.timeoutId);
    }
    setFooterWithTemplate(templateRef) {
        this.bpsFooter = templateRef;
        this.cdr.markForCheck();
    }
    setOverlayRef(overlayRef) {
        this.overlayRef = overlayRef;
    }
    keydownListener(event) {
        if (event.keyCode === ESCAPE && this.bpsKeyboard) {
            this.onClickOkCancel('cancel');
        }
    }
    open() {
        this.changeVisibleFromInside(true);
    }
    close(result) {
        this.changeVisibleFromInside(false, result);
    }
    destroy(result) {
        // Destroy equals Close
        this.close(result);
    }
    triggerOk() {
        this.onClickOkCancel('ok');
    }
    triggerCancel() {
        this.onClickOkCancel('cancel');
    }
    getInstance() {
        return this;
    }
    getContentComponentRef() {
        return this.contentComponentRef;
    }
    getContentComponent() {
        return this.contentComponentRef && this.contentComponentRef.instance;
    }
    getElement() {
        return this.elementRef && this.elementRef.nativeElement;
    }
    onMaskDialogDown() {
        this.dialogMouseDown = true;
    }
    onDialogUp() {
        if (this.dialogMouseDown) {
            this.timeoutId = setTimeout(() => {
                this.dialogMouseDown = false;
            }, 0);
        }
    }
    onClickMask($event) {
        if (this.mask &&
            this.maskClosable &&
            $event.target.classList.contains(WRAP_CLASS_NAME) &&
            this.bpsVisible &&
            !this.dialogMouseDown) {
            this.onClickOkCancel('cancel');
        }
    }
    isModalType(type) {
        return this.bpsModalType === type;
    }
    onClickCloseBtn() {
        if (this.bpsVisible) {
            this.onClickOkCancel('cancel');
        }
    }
    onClickOkCancel(type) {
        const trigger = { ok: this.bpsOnOk, cancel: this.bpsOnCancel }[type];
        const loadingKey = { ok: 'bpsOkLoading', cancel: 'bpsCancelLoading' }[type];
        if (trigger instanceof EventEmitter) {
            trigger.emit(this.getContentComponent());
        }
        else if (typeof trigger === 'function') {
            const result = trigger(this.getContentComponent());
            const caseClose = (doClose) => doClose !== false && this.close(doClose); // Users can return "false" to prevent closing by default
            if (isPromise(result)) {
                this[loadingKey] = true;
                const handleThen = (doClose) => {
                    this[loadingKey] = false;
                    caseClose(doClose);
                };
                result.then(handleThen).catch(handleThen);
            }
            else {
                caseClose(result);
            }
        }
    }
    isNonEmptyString(value) {
        return typeof value === 'string' && value !== '';
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    isComponent(value) {
        return value instanceof Type;
    }
    isModalButtons(value) {
        return Array.isArray(value) && value.length > 0;
    }
    // Do rest things when visible state changed
    handleVisibleStateChange(visible, animation = true, closeResult) {
        if (visible) {
            // Hide scrollbar at the first time when shown up
            this.scrollStrategy.enable();
            this.savePreviouslyFocusedElement();
            this.trapFocus();
            if (this.container instanceof OverlayRef) {
                this.overlayKeyboardDispatcher.add(this.overlayRef);
            }
        }
        else {
            if (this.container instanceof OverlayRef) {
                this.overlayKeyboardDispatcher.remove(this.overlayRef);
            }
        }
        return Promise.resolve(animation ? this.animateTo(visible) : undefined).then(() => {
            // Emit open/close event after animations over
            if (visible) {
                this.bpsAfterOpen.emit();
            }
            else {
                this.bpsAfterClose.emit(closeResult);
                this.restoreFocus();
                this.scrollStrategy.disable();
                // Mark the for check so it can react if the view container is using OnPush change detection.
                this.cdr.markForCheck();
            }
        });
    }
    // Lookup a button's property, if the prop is a function, call & then return the result, otherwise, return itself.
    getButtonCallableProp(options, prop) {
        const value = options[prop];
        const args = [];
        if (this.contentComponentRef) {
            args.push(this.contentComponentRef.instance);
        }
        return typeof value === 'function' ? value.apply(options, args) : value;
    }
    // On nzFooter's modal button click
    onButtonClick(button) {
        const result = this.getButtonCallableProp(button, 'onClick'); // Call onClick directly
        if (isPromise(result)) {
            button.loading = true;
            result.then(() => (button.loading = false)).catch(() => (button.loading = false));
        }
    }
    // Change nzVisible from inside
    changeVisibleFromInside(visible, closeResult) {
        if (this.bpsVisible !== visible) {
            // Change nzVisible value immediately
            this.bpsVisible = visible;
            this.bpsVisibleChange.emit(visible);
            return this.handleVisibleStateChange(visible, true, closeResult);
        }
        return Promise.resolve();
    }
    changeAnimationState(state) {
        this.animationState = state;
        if (state) {
            this.maskAnimationClassMap = {
                [`fade-${state}`]: true,
                [`fade-${state}-active`]: true
            };
            this.modalAnimationClassMap = {
                [`zoom-${state}`]: true,
                [`zoom-${state}-active`]: true
            };
        }
        else {
            this.maskAnimationClassMap = this.modalAnimationClassMap = null;
        }
    }
    animateTo(isVisible) {
        if (isVisible) {
            // Figure out the lastest click position when shows up
            setTimeout(() => this.updateTransformOrigin()); // [NOTE] Using timeout due to the document.click event is fired later than visible change, so if not postponed to next event-loop, we can't get the lastest click position
        }
        this.changeAnimationState(isVisible ? 'enter' : 'leave');
        return new Promise(resolve => setTimeout(() => {
            // Return when animation is over
            this.changeAnimationState(null);
            resolve();
        }, this.bpsNoAnimation ? 0 : MODAL_ANIMATE_DURATION));
    }
    formatModalButtons(buttons) {
        return buttons.map(button => {
            return {
                ...{
                    type: 'default',
                    size: 'default',
                    autoLoading: true,
                    show: true,
                    loading: false,
                    disabled: false
                },
                ...button
            };
        });
    }
    /**
     * Create a component dynamically but not attach to any View (this action will be executed when bodyContainer is ready)
     * @param component Component class
     */
    createDynamicComponent(component) {
        const factory = this.cfr.resolveComponentFactory(component);
        const childInjector = Injector.create({
            providers: [{ provide: BpsModalRef, useValue: this }],
            parent: this.viewContainer.parentInjector
        });
        this.contentComponentRef = factory.create(childInjector);
        if (this.bpsComponentParams) {
            Object.assign(this.contentComponentRef.instance, this.bpsComponentParams);
        }
        // Do the first change detection immediately (or we do detection at ngAfterViewInit, multi-changes error will be thrown)
        this.contentComponentRef.changeDetectorRef.detectChanges();
    }
    // Update transform-origin to the last click position on document
    updateTransformOrigin() {
        const modalElement = this.modalContainer.nativeElement;
        if (this.previouslyFocusedElement) {
            const previouslyDOMRect = this.previouslyFocusedElement.getBoundingClientRect();
            const lastPosition = getElementOffset(this.previouslyFocusedElement);
            const x = lastPosition.left + previouslyDOMRect.width / 2;
            const y = lastPosition.top + previouslyDOMRect.height / 2;
            this.transformOrigin = `${x - modalElement.offsetLeft}px ${y - modalElement.offsetTop}px 0px`;
        }
    }
    savePreviouslyFocusedElement() {
        if (this.document) {
            this.previouslyFocusedElement = this.document.activeElement;
        }
    }
    trapFocus() {
        if (!this.focusTrap) {
            this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        }
        this.focusTrap.focusInitialElementWhenReady();
    }
    restoreFocus() {
        // We need the extra check, because IE can set the `activeElement` to null in some cases.
        if (this.previouslyFocusedElement && typeof this.previouslyFocusedElement.focus === 'function') {
            this.previouslyFocusedElement.focus();
        }
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsModalComponent, deps: [{ token: i1.NzConfigService }, { token: i2.Overlay }, { token: i2.OverlayKeyboardDispatcher }, { token: i3.NzI18nService }, { token: i0.ComponentFactoryResolver }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i4.BpsModalControlService }, { token: i5.FocusTrapFactory }, { token: i0.ChangeDetectorRef }, { token: NZ_MODAL_CONFIG, optional: true }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsModalComponent, selector: "bps-modal", inputs: { bpsVisible: "bpsVisible", bpsClosable: "bpsClosable", bpsOkLoading: "bpsOkLoading", bpsOkDisabled: "bpsOkDisabled", bpsCancelDisabled: "bpsCancelDisabled", bpsCancelLoading: "bpsCancelLoading", bpsKeyboard: "bpsKeyboard", bpsNoAnimation: "bpsNoAnimation", bpsModalDisabled: "bpsModalDisabled", bpsMask: "bpsMask", bpsMaskClosable: "bpsMaskClosable", bpsContent: "bpsContent", bpsComponentParams: "bpsComponentParams", bpsFooter: "bpsFooter", bpsGetContainer: "bpsGetContainer", bpsZIndex: "bpsZIndex", bpsWidth: "bpsWidth", bpsWrapClassName: "bpsWrapClassName", bpsClassName: "bpsClassName", bpsStyle: "bpsStyle", bpsTitle: "bpsTitle", bpsCloseIcon: "bpsCloseIcon", bpsMaskStyle: "bpsMaskStyle", bpsBodyStyle: "bpsBodyStyle", bpsOkText: "bpsOkText", bpsCancelText: "bpsCancelText", bpsOkType: "bpsOkType", bpsIconType: "bpsIconType", bpsModalType: "bpsModalType", bpsOnOk: "bpsOnOk", bpsOnCancel: "bpsOnCancel" }, outputs: { bpsOnOk: "bpsOnOk", bpsOnCancel: "bpsOnCancel", bpsAfterOpen: "bpsAfterOpen", bpsAfterClose: "bpsAfterClose", bpsVisibleChange: "bpsVisibleChange" }, queries: [{ propertyName: "modalFooter", first: true, predicate: BpsModalFooterDirective, descendants: true }], viewQueries: [{ propertyName: "modalContainer", first: true, predicate: ["modalContainer"], descendants: true, static: true }, { propertyName: "bodyContainer", first: true, predicate: ["bodyContainer"], descendants: true, read: ViewContainerRef }, { propertyName: "autoFocusButtonOk", first: true, predicate: ["autoFocusButtonOk"], descendants: true, read: ElementRef }], exportAs: ["bpsModal"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div [nzNoAnimation]=\"bpsNoAnimation\">\r\n  <div *ngIf=\"mask\"\r\n    class=\"ant-modal-mask\"\r\n    [ngClass]=\"maskAnimationClassMap\"\r\n    [class.ant-modal-mask-hidden]=\"hidden\"\r\n    [ngStyle]=\"bpsMaskStyle\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    (mouseup)=\"onDialogUp()\"\r\n    class=\"ant-modal-wrap {{ bpsWrapClassName }}\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div #modalContainer\r\n      class=\"ant-modal {{ bpsClassName }}\"\r\n      (mousedown)=\"onMaskDialogDown()\"\r\n      [ngClass]=\"modalAnimationClassMap\"\r\n      [ngStyle]=\"bpsStyle\"\r\n      [style.width]=\"bpsWidth | nzToCssUnit\"\r\n      [style.transform-origin]=\"transformOrigin\"\r\n      role=\"document\"\r\n    >\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"bpsClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span class=\"ant-modal-close-x\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n            <ng-container *nzStringTemplateOutlet=\"bpsCloseIcon\">\r\n              <img *ngIf=\"!bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_white.svg\" class=\"ant-modal-close-icon\" />\r\n              <img *ngIf=\"bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_grey.svg\" class=\"ant-modal-close-icon\" />\r\n            </ng-container>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"bpsTitle\" class=\"ant-modal-header\">\r\n    <div class=\"ant-modal-title\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><div [innerHTML]=\"bpsTitle\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"bpsFooter !== null\" class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(bpsFooter)\" [ngTemplateOutlet]=\"bpsFooter\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(bpsFooter)\"><div [innerHTML]=\"bpsFooter\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(bpsFooter)\">\r\n        <button *ngFor=\"let button of bpsFooter\" bps-button\r\n          (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n          [bpsLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n          [bpsType]=\"button.type\"\r\n          [bpsShape]=\"button.shape\"\r\n          [bpsSize]=\"button.size\"\r\n          [bpsGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"bpsCancelText!==null\" bpsType=\"variation-1\" bps-button (click)=\"onClickOkCancel('cancel')\" [bpsLoading]=\"bpsCancelLoading\" [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"bpsOkText!==null\" bps-button [bpsType]=\"bpsOkType\" (click)=\"onClickOkCancel('ok')\" [bpsLoading]=\"bpsOkLoading\" [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [nzType]=\"bpsIconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><span [innerHTML]=\"bpsTitle\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container #bodyContainer>\r\n            <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button *ngIf=\"bpsCancelText!==null\"\r\n          bps-button\r\n          bpsType=\"variation-1\"\r\n          (click)=\"onClickOkCancel('cancel')\"\r\n          [bpsLoading]=\"bpsCancelLoading\"\r\n          [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button #autoFocusButtonOk\r\n          *ngIf=\"bpsOkText!==null\"\r\n          bps-button\r\n          (click)=\"onClickOkCancel('ok')\"\r\n          [bpsType]=\"bpsOkType\"\r\n          [bpsLoading]=\"bpsOkLoading\"\r\n          [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n", styles: [".ant-modal-content{border-radius:8px!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important}.ant-modal-header{background-color:#00a2d1!important;border-bottom:none!important;padding:16px 0 16px 35px!important;border-radius:8px 8px 0 0!important}.ant-modal-title{font-size:18px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:.67!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important}.ant-modal-close-x{width:46px!important;height:45px!important;color:#fff!important;line-height:40px!important;padding-right:19px!important}.bps-modal-disabled{color:#666!important}\n"], dependencies: [{ kind: "directive", type: i6.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i6.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i6.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i6.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i6.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i6.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i6.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i6.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: i7.NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i8.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i9.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "component", type: i10.BpsButtonComponent, selector: "[bps-button]", inputs: ["isSelected", "bpsBlock", "bpsGhost", "bpsSearch", "bpsComputed", "bpsLoading", "bpsEditionEnabled", "bpsType", "bpsValue", "bpsComputedTooltipType", "bpsComputedTooltipPlacement", "bpsComputedTooltipTitle", "bpsEditTooltipType", "bpsEditTooltipPlacement", "bpsEditTooltipTitle", "bpsShape", "bpsSize"], outputs: ["isSelectedChange", "bpsValueChange"], exportAs: ["bpsButton"] }, { kind: "pipe", type: i11.NzToCssUnitPipe, name: "nzToCssUnit" }], changeDetection: i0.ChangeDetectionStrategy.Default }); }
}
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsVisible", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsClosable", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsOkLoading", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsOkDisabled", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsCancelDisabled", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsCancelLoading", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsKeyboard", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsNoAnimation", void 0);
__decorate([
    InputBoolean()
], BpsModalComponent.prototype, "bpsModalDisabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    InputBoolean()
], BpsModalComponent.prototype, "bpsMask", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME),
    InputBoolean()
], BpsModalComponent.prototype, "bpsMaskClosable", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-modal', exportAs: 'bpsModal', changeDetection: ChangeDetectionStrategy.Default, template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div [nzNoAnimation]=\"bpsNoAnimation\">\r\n  <div *ngIf=\"mask\"\r\n    class=\"ant-modal-mask\"\r\n    [ngClass]=\"maskAnimationClassMap\"\r\n    [class.ant-modal-mask-hidden]=\"hidden\"\r\n    [ngStyle]=\"bpsMaskStyle\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    (mouseup)=\"onDialogUp()\"\r\n    class=\"ant-modal-wrap {{ bpsWrapClassName }}\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div #modalContainer\r\n      class=\"ant-modal {{ bpsClassName }}\"\r\n      (mousedown)=\"onMaskDialogDown()\"\r\n      [ngClass]=\"modalAnimationClassMap\"\r\n      [ngStyle]=\"bpsStyle\"\r\n      [style.width]=\"bpsWidth | nzToCssUnit\"\r\n      [style.transform-origin]=\"transformOrigin\"\r\n      role=\"document\"\r\n    >\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"bpsClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span class=\"ant-modal-close-x\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n            <ng-container *nzStringTemplateOutlet=\"bpsCloseIcon\">\r\n              <img *ngIf=\"!bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_white.svg\" class=\"ant-modal-close-icon\" />\r\n              <img *ngIf=\"bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_grey.svg\" class=\"ant-modal-close-icon\" />\r\n            </ng-container>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"bpsTitle\" class=\"ant-modal-header\">\r\n    <div class=\"ant-modal-title\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><div [innerHTML]=\"bpsTitle\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"bpsFooter !== null\" class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(bpsFooter)\" [ngTemplateOutlet]=\"bpsFooter\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(bpsFooter)\"><div [innerHTML]=\"bpsFooter\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(bpsFooter)\">\r\n        <button *ngFor=\"let button of bpsFooter\" bps-button\r\n          (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n          [bpsLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n          [bpsType]=\"button.type\"\r\n          [bpsShape]=\"button.shape\"\r\n          [bpsSize]=\"button.size\"\r\n          [bpsGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"bpsCancelText!==null\" bpsType=\"variation-1\" bps-button (click)=\"onClickOkCancel('cancel')\" [bpsLoading]=\"bpsCancelLoading\" [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"bpsOkText!==null\" bps-button [bpsType]=\"bpsOkType\" (click)=\"onClickOkCancel('ok')\" [bpsLoading]=\"bpsOkLoading\" [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [nzType]=\"bpsIconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><span [innerHTML]=\"bpsTitle\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container #bodyContainer>\r\n            <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button *ngIf=\"bpsCancelText!==null\"\r\n          bps-button\r\n          bpsType=\"variation-1\"\r\n          (click)=\"onClickOkCancel('cancel')\"\r\n          [bpsLoading]=\"bpsCancelLoading\"\r\n          [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button #autoFocusButtonOk\r\n          *ngIf=\"bpsOkText!==null\"\r\n          bps-button\r\n          (click)=\"onClickOkCancel('ok')\"\r\n          [bpsType]=\"bpsOkType\"\r\n          [bpsLoading]=\"bpsOkLoading\"\r\n          [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n", styles: [".ant-modal-content{border-radius:8px!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important}.ant-modal-header{background-color:#00a2d1!important;border-bottom:none!important;padding:16px 0 16px 35px!important;border-radius:8px 8px 0 0!important}.ant-modal-title{font-size:18px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:.67!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important}.ant-modal-close-x{width:46px!important;height:45px!important;color:#fff!important;line-height:40px!important;padding-right:19px!important}.bps-modal-disabled{color:#666!important}\n"] }]
        }], ctorParameters: () => [{ type: i1.NzConfigService }, { type: i2.Overlay }, { type: i2.OverlayKeyboardDispatcher }, { type: i3.NzI18nService }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i4.BpsModalControlService }, { type: i5.FocusTrapFactory }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NZ_MODAL_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }], propDecorators: { bpsVisible: [{
                type: Input
            }], bpsClosable: [{
                type: Input
            }], bpsOkLoading: [{
                type: Input
            }], bpsOkDisabled: [{
                type: Input
            }], bpsCancelDisabled: [{
                type: Input
            }], bpsCancelLoading: [{
                type: Input
            }], bpsKeyboard: [{
                type: Input
            }], bpsNoAnimation: [{
                type: Input
            }], bpsModalDisabled: [{
                type: Input
            }], bpsMask: [{
                type: Input
            }], bpsMaskClosable: [{
                type: Input
            }], bpsContent: [{
                type: Input
            }], bpsComponentParams: [{
                type: Input
            }], bpsFooter: [{
                type: Input
            }], bpsGetContainer: [{
                type: Input
            }], bpsZIndex: [{
                type: Input
            }], bpsWidth: [{
                type: Input
            }], bpsWrapClassName: [{
                type: Input
            }], bpsClassName: [{
                type: Input
            }], bpsStyle: [{
                type: Input
            }], bpsTitle: [{
                type: Input
            }], bpsCloseIcon: [{
                type: Input
            }], bpsMaskStyle: [{
                type: Input
            }], bpsBodyStyle: [{
                type: Input
            }], bpsOkText: [{
                type: Input
            }], bpsCancelText: [{
                type: Input
            }], bpsOkType: [{
                type: Input
            }], bpsIconType: [{
                type: Input
            }], bpsModalType: [{
                type: Input
            }], bpsOnOk: [{
                type: Input
            }, {
                type: Output
            }], bpsOnCancel: [{
                type: Input
            }, {
                type: Output
            }], bpsAfterOpen: [{
                type: Output
            }], bpsAfterClose: [{
                type: Output
            }], bpsVisibleChange: [{
                type: Output
            }], modalContainer: [{
                type: ViewChild,
                args: ['modalContainer', { static: true }]
            }], bodyContainer: [{
                type: ViewChild,
                args: ['bodyContainer', { static: false, read: ViewContainerRef }]
            }], autoFocusButtonOk: [{
                type: ViewChild,
                args: ['autoFocusButtonOk', { static: false, read: ElementRef }]
            }], modalFooter: [{
                type: ContentChild,
                args: [BpsModalFooterDirective, { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLW1vZGFsL2Jwcy1tb2RhbC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1tb2RhbC9icHMtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvQyxPQUFPLEVBQTJELFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzNHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFHVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUVOLFdBQVcsRUFDWCxJQUFJLEVBQ0osU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR3BELE9BQU8sRUFBa0IsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNw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QUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQzBCLGFBQWE7c0JBQW5GLFNBQVM7dUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Z0JBQ0EsaUJBQWlCO3NCQUFyRixTQUFTO3VCQUFDLG1CQUFtQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2dCQUcvRCxXQUFXO3NCQURkLFlBQVk7dUJBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNUcmFwLCBGb2N1c1RyYXBGYWN0b3J5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5cclxuaW1wb3J0IHsgRVNDQVBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgQmxvY2tTY3JvbGxTdHJhdGVneSwgT3ZlcmxheSwgT3ZlcmxheUtleWJvYXJkRGlzcGF0Y2hlciwgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdCxcclxuICBJbmplY3RvcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBUeXBlLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IEJwc01vZGFsRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9icHMtbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJwc01vZGFsUmVmIH0gZnJvbSAnLi9icHMtbW9kYWwtcmVmLmNsYXNzJztcclxuaW1wb3J0IHsgTW9kYWxPcHRpb25zLCBNb2RhbEJ1dHRvbk9wdGlvbnMsIE1vZGFsVHlwZSwgT25DbGlja0NhbGxiYWNrIH0gZnJvbSAnLi9icHMtbW9kYWwudHlwZSc7XHJcbmltcG9ydCB7IEJwc01vZGFsQ29udHJvbFNlcnZpY2UgfSBmcm9tICcuL2Jwcy1tb2RhbC1jb250cm9sLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcHNNb2RhbENvbmZpZywgTlpfTU9EQUxfQ09ORklHIH0gZnJvbSAnLi9icHMtbW9kYWwtY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0RWxlbWVudE9mZnNldCwgSW5wdXRCb29sZWFuLCBpc1Byb21pc2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJy4uL2Jwcy10cmVlL3RyZWUvY29uZmlnLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB3YXJuRGVwcmVjYXRpb24gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbG9nZ2VyJztcclxuXHJcbmV4cG9ydCBjb25zdCBNT0RBTF9BTklNQVRFX0RVUkFUSU9OID0gMjAwOyAvLyBEdXJhdGlvbiB3aGVuIHBlcmZvcm0gYW5pbWF0aW9ucyAobXMpXHJcbmV4cG9ydCBjb25zdCBXUkFQX0NMQVNTX05BTUUgPSAnYW50LW1vZGFsLXdyYXAnO1xyXG5cclxudHlwZSBBbmltYXRpb25TdGF0ZSA9ICdlbnRlcicgfCAnbGVhdmUnIHwgbnVsbDtcclxuXHJcbmNvbnN0IE5aX0NPTkZJR19DT01QT05FTlRfTkFNRSA9ICdtb2RhbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1tb2RhbCcsXHJcbiAgZXhwb3J0QXM6ICdicHNNb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLW1vZGFsLmNvbXBvbmVudC5jc3MnXSxcclxuICAvLyBVc2luZyBPblB1c2ggZm9yIG1vZGFsIGNhdXNlZCBmb290ZXIgY2FuIG5vdCB0byBkZXRlY3QgY2hhbmdlcy4gd2UgY2FuIGZpeCBpdCB3aGVuIDgueC5cclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcclxufSlcclxuXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuZXhwb3J0IGNsYXNzIEJwc01vZGFsQ29tcG9uZW50PFQgPSBhbnksIFIgPSBhbnk+IGV4dGVuZHMgQnBzTW9kYWxSZWY8VCwgUj5cclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE1vZGFsT3B0aW9uczxUPiB7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc1Zpc2libGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzQ2xvc2FibGU6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNPa0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzT2tEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDYW5jZWxEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNDYW5jZWxMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJwc0tleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTm9BbmltYXRpb24gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYnBzTW9kYWxEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAvLyBUT0RPKGhzdWFueHl6KTogYWRkIGRlZmF1bHQgdmFsdWUgb25jZSBvbGQgQVBJIGlzIGRlcHJlY2F0ZWQuXHJcbiAgQElucHV0KCkgQFdpdGhDb25maWcoTlpfQ09ORklHX0NPTVBPTkVOVF9OQU1FKSBASW5wdXRCb29sZWFuKCkgYnBzTWFzazogYm9vbGVhbjtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZyhOWl9DT05GSUdfQ09NUE9ORU5UX05BTUUpIEBJbnB1dEJvb2xlYW4oKSBicHNNYXNrQ2xvc2FibGU6IGJvb2xlYW47XHJcblxyXG4gIEBJbnB1dCgpIGJwc0NvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IFR5cGU8VD47IC8vIFtTVEFUSUNdIElmIG5vdCBzcGVjaWZpZWQsIHdpbGwgdXNlIDxuZy1jb250ZW50PlxyXG4gIEBJbnB1dCgpIGJwc0NvbXBvbmVudFBhcmFtczogVDsgLy8gW1NUQVRJQ10gT05MWSBhdmFsaWFibGUgd2hlbiBuekNvbnRlbnQgaXMgYSBjb21wb25lbnRcclxuICBASW5wdXQoKSBicHNGb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsOyAvLyBbU1RBVElDXSBEZWZhdWx0IE1vZGFsIE9OTFlcclxuICBASW5wdXQoKSBicHNHZXRDb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZiB8ICgoKSA9PiBIVE1MRWxlbWVudCB8IE92ZXJsYXlSZWYpID0gKCkgPT4gdGhpcy5vdmVybGF5LmNyZWF0ZSgpOyAvLyBbU1RBVElDXVxyXG4gIEBJbnB1dCgpIGJwc1pJbmRleDogbnVtYmVyID0gMTAwMDtcclxuICBASW5wdXQoKSBicHNXaWR0aDogbnVtYmVyIHwgc3RyaW5nID0gNTIwO1xyXG4gIEBJbnB1dCgpIGJwc1dyYXBDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBicHNDbGFzc05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBicHNTdHlsZTogb2JqZWN0O1xyXG4gIEBJbnB1dCgpIGJwc1RpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx7fT47XHJcbiAgQElucHV0KCkgYnBzQ2xvc2VJY29uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICdjbG9zZSc7XHJcbiAgQElucHV0KCkgYnBzTWFza1N0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgYnBzQm9keVN0eWxlOiBvYmplY3Q7XHJcbiAgQElucHV0KCkgYnBzT2tUZXh0OiBzdHJpbmcgfCBudWxsO1xyXG4gIEBJbnB1dCgpIGJwc0NhbmNlbFRleHQ6IHN0cmluZyB8IG51bGw7XHJcbiAgQElucHV0KCkgYnBzT2tUeXBlOiBzdHJpbmcgPSAndmFyaWF0aW9uLTEnO1xyXG4gIEBJbnB1dCgpIGJwc0ljb25UeXBlOiBzdHJpbmcgPSAncXVlc3Rpb24tY2lyY2xlJzsgLy8gQ29uZmlybSBNb2RhbCBPTkxZXHJcbiAgQElucHV0KCkgYnBzTW9kYWxUeXBlOiBNb2RhbFR5cGUgPSAnZGVmYXVsdCc7XHJcblxyXG4gIEBJbnB1dCgpIEBPdXRwdXQoKSByZWFkb25seSBicHNPbk9rOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcbiAgQElucHV0KCkgQE91dHB1dCgpIHJlYWRvbmx5IGJwc09uQ2FuY2VsOiBFdmVudEVtaXR0ZXI8VD4gfCBPbkNsaWNrQ2FsbGJhY2s8VD4gPSBuZXcgRXZlbnRFbWl0dGVyPFQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBicHNBZnRlck9wZW4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7IC8vIFRyaWdnZXIgd2hlbiBtb2RhbCBvcGVuKHZpc2libGUpIGFmdGVyIGFuaW1hdGlvbnNcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgYnBzQWZ0ZXJDbG9zZSA9IG5ldyBFdmVudEVtaXR0ZXI8Uj4oKTsgLy8gVHJpZ2dlciB3aGVuIG1vZGFsIGxlYXZlLWFuaW1hdGlvbiBvdmVyXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGJwc1Zpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsQ29udGFpbmVyJywgeyBzdGF0aWM6IHRydWUgfSkgbW9kYWxDb250YWluZXI6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnYm9keUNvbnRhaW5lcicsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBib2R5Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2F1dG9Gb2N1c0J1dHRvbk9rJywgeyBzdGF0aWM6IGZhbHNlLCByZWFkOiBFbGVtZW50UmVmIH0pIGF1dG9Gb2N1c0J1dHRvbk9rOiBFbGVtZW50UmVmOyAvLyBPbmx5IGFpbSB0byBmb2N1cyB0aGUgb2sgYnV0dG9uIHRoYXQgbmVlZHMgdG8gYmUgYXV0byBmb2N1c2VkXHJcblxyXG4gIEBDb250ZW50Q2hpbGQoQnBzTW9kYWxGb290ZXJEaXJlY3RpdmUsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHNldCBtb2RhbEZvb3Rlcih2YWx1ZTogQnBzTW9kYWxGb290ZXJEaXJlY3RpdmUpIHtcclxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50ZW1wbGF0ZVJlZikge1xyXG4gICAgICB0aGlzLnNldEZvb3RlcldpdGhUZW1wbGF0ZSh2YWx1ZS50ZW1wbGF0ZVJlZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYWZ0ZXJPcGVuKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgbnpBZnRlck9wZW5cclxuICAgIHJldHVybiB0aGlzLmJwc0FmdGVyT3Blbi5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBhZnRlckNsb3NlKCk6IE9ic2VydmFibGU8Uj4ge1xyXG4gICAgLy8gT2JzZXJ2YWJsZSBhbGlhcyBmb3IgbnpBZnRlckNsb3NlXHJcbiAgICByZXR1cm4gdGhpcy5icHNBZnRlckNsb3NlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNhbmNlbFRleHQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmJwc0NhbmNlbFRleHQgfHwgdGhpcy5sb2NhbGUuY2FuY2VsVGV4dCE7XHJcbiAgfVxyXG5cclxuICBnZXQgb2tUZXh0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5icHNPa1RleHQgfHwgdGhpcy5sb2NhbGUub2tUZXh0ITtcclxuICB9XHJcblxyXG4gIGdldCBoaWRkZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gIXRoaXMuYnBzVmlzaWJsZSAmJiAhdGhpcy5hbmltYXRpb25TdGF0ZTtcclxuICB9IC8vIEluZGljYXRlIHdoZXRoZXIgdGhpcyBkaWFsb2cgc2hvdWxkIGhpZGRlblxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgY2FsY3VsYXRlZCBoaWdoZXN0IHdlaWdodCBvZiBtYXNrIHZhbHVlXHJcbiAgICpcclxuICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2sgaW5wdXQ6XHJcbiAgICogY29tcG9uZW50IGRlZmF1bHQgdmFsdWUgPCBnbG9iYWwgY29uZmlndXJhdGlvbiA8IGNvbXBvbmVudCBpbnB1dCB2YWx1ZVxyXG4gICAqL1xyXG4gIGdldCBtYXNrKCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHRoaXMuYnBzTWFzayAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJwc01hc2s7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnBzTW9kYWxHbG9iYWxDb25maWcgJiYgdGhpcy5icHNNb2RhbEdsb2JhbENvbmZpZy5icHNNYXNrICE9IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuYnBzTW9kYWxHbG9iYWxDb25maWcuYnBzTWFzaztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIGNhbGN1bGF0ZWQgaGlnaGVzdCB3ZWlnaHQgb2YgbWFza0Nsb3NhYmxlIHZhbHVlXHJcbiAgICpcclxuICAgKiBXZWlnaHQgb2YgZGlmZmVyZW50IG1hc2tDbG9zYWJsZSBpbnB1dDpcclxuICAgKiBjb21wb25lbnQgZGVmYXVsdCB2YWx1ZSA8IGdsb2JhbCBjb25maWd1cmF0aW9uIDwgY29tcG9uZW50IGlucHV0IHZhbHVlXHJcbiAgICovXHJcbiAgZ2V0IG1hc2tDbG9zYWJsZSgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLmJwc01hc2tDbG9zYWJsZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJwc01hc2tDbG9zYWJsZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5icHNNb2RhbEdsb2JhbENvbmZpZyAmJiB0aGlzLmJwc01vZGFsR2xvYmFsQ29uZmlnLmJwc01hc2tDbG9zYWJsZSAhPSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmJwc01vZGFsR2xvYmFsQ29uZmlnLmJwc01hc2tDbG9zYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9jYWxlOiB7IG9rVGV4dD86IHN0cmluZzsgY2FuY2VsVGV4dD86IHN0cmluZyB9ID0ge307XHJcbiAgbWFza0FuaW1hdGlvbkNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gIG1vZGFsQW5pbWF0aW9uQ2xhc3NNYXA6IG9iamVjdCB8IG51bGw7XHJcbiAgdHJhbnNmb3JtT3JpZ2luID0gJzBweCAwcHggMHB4JzsgLy8gVGhlIG9yaWdpbiBwb2ludCB0aGF0IGFuaW1hdGlvbiBiYXNlZCBvblxyXG5cclxuICBwcml2YXRlIGNvbnRlbnRDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxUPjsgLy8gSGFuZGxlIHRoZSByZWZlcmVuY2Ugd2hlbiB1c2luZyBuekNvbnRlbnQgYXMgQ29tcG9uZW50XHJcbiAgcHJpdmF0ZSBhbmltYXRpb25TdGF0ZTogQW5pbWF0aW9uU3RhdGU7IC8vIEN1cnJlbnQgYW5pbWF0aW9uIHN0YXRlXHJcbiAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgT3ZlcmxheVJlZjtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gIHByaXZhdGUgZm9jdXNUcmFwOiBGb2N1c1RyYXA7XHJcbiAgcHJpdmF0ZSBzY3JvbGxTdHJhdGVneTogQmxvY2tTY3JvbGxTdHJhdGVneTtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSBkaWFsb2dNb3VzZURvd24gPSBmYWxzZTtcclxuICBwcml2YXRlIHRpbWVvdXRJZDogbnVtYmVyO1xyXG5cclxuICBba2V5OiBzdHJpbmddOiBhbnk7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5OiBPdmVybGF5LFxyXG4gICAgcHJpdmF0ZSBvdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyOiBPdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLFxyXG4gICAgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgbW9kYWxDb250cm9sOiBCcHNNb2RhbENvbnRyb2xTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb2N1c1RyYXBGYWN0b3J5OiBGb2N1c1RyYXBGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9NT0RBTF9DT05GSUcpIHByaXZhdGUgYnBzTW9kYWxHbG9iYWxDb25maWc6IEJwc01vZGFsQ29uZmlnLFxyXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zY3JvbGxTdHJhdGVneSA9IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLmJsb2NrKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuYnBzTW9kYWxHbG9iYWxDb25maWcpIHtcclxuICAgICAgd2FybkRlcHJlY2F0aW9uKFxyXG4gICAgICAgICdgTlpfTU9EQUxfQ09ORklHYCBoYXMgYmVlbiBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gOS4wLjAuIFBsZWFzZSB1c2UgZ2xvYmFsIGNvbmZpZyBpbnN0ZWFkLidcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubG9jYWxlID0gdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ01vZGFsJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5pc0NvbXBvbmVudCh0aGlzLmJwc0NvbnRlbnQpKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRHluYW1pY0NvbXBvbmVudCh0aGlzLmJwc0NvbnRlbnQgYXMgVHlwZTxUPik7IC8vIENyZWF0ZSBjb21wb25lbnQgYWxvbmcgd2l0aG91dCBWaWV3XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuaXNNb2RhbEJ1dHRvbnModGhpcy5icHNGb290ZXIpKSB7XHJcbiAgICAgIC8vIFNldHVwIGRlZmF1bHQgYnV0dG9uIG9wdGlvbnNcclxuICAgICAgdGhpcy5icHNGb290ZXIgPSB0aGlzLmZvcm1hdE1vZGFsQnV0dG9ucyh0aGlzLmJwc0Zvb3RlciBhcyBBcnJheTxNb2RhbEJ1dHRvbk9wdGlvbnM8VD4+KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQbGFjZSB0aGUgbW9kYWwgZG9tIHRvIGVsc2V3aGVyZVxyXG4gICAgdGhpcy5jb250YWluZXIgPSB0eXBlb2YgdGhpcy5icHNHZXRDb250YWluZXIgPT09ICdmdW5jdGlvbicgPyB0aGlzLmJwc0dldENvbnRhaW5lcigpIDogdGhpcy5icHNHZXRDb250YWluZXI7XHJcbiAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgIGZyb21FdmVudDxLZXlib2FyZEV2ZW50Pih0aGlzLmRvY3VtZW50LmJvZHksICdrZXlkb3duJylcclxuICAgICAgICAucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoZSA9PiB0aGlzLmtleWRvd25MaXN0ZW5lcihlKSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udGFpbmVyIGluc3RhbmNlb2YgT3ZlcmxheVJlZikge1xyXG4gICAgICAvLyBOT1RFOiBvbmx5IGF0dGFjaCB0aGUgZG9tIHRvIG92ZXJsYXksIHRoZSB2aWV3IGNvbnRhaW5lciBpcyBub3QgY2hhbmdlZCBhY3R1YWxseVxyXG4gICAgICB0aGlzLnNldE92ZXJsYXlSZWYodGhpcy5jb250YWluZXIpO1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5vdmVybGF5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWZcclxuICAgICAgICAua2V5ZG93bkV2ZW50cygpXHJcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcclxuICAgICAgICAuc3Vic2NyaWJlKGUgPT4gdGhpcy5rZXlkb3duTGlzdGVuZXIoZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFJlZ2lzdGVyIG1vZGFsIHdoZW4gYWZ0ZXJPcGVuL2FmdGVyQ2xvc2UgaXMgc3RhYmxlXHJcbiAgICB0aGlzLm1vZGFsQ29udHJvbC5yZWdpc3Rlck1vZGFsKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgLy8gW05PVEVdIE5PVCBhdmFpbGFibGUgd2hlbiB1c2luZyBieSBzZXJ2aWNlIVxyXG4gIC8vIEJlY2F1c2UgbmdPbkNoYW5nZXMgbmV2ZXIgYmUgY2FsbGVkIHdoZW4gdXNpbmcgYnkgc2VydmljZSxcclxuICAvLyBoZXJlIHdlIGNhbid0IHN1cHBvcnQgXCJuekNvbnRlbnRcIihDb21wb25lbnQpIGV0Yy4gYXMgaW5wdXRzIHRoYXQgaW5pdGlhbGl6ZWQgZHluYW1pY2FsbHkuXHJcbiAgLy8gQlVUOiBVc2VyIGFsc28gY2FuIGNoYW5nZSBcIm56Q29udGVudFwiIGR5bmFtaWNhbGx5IHRvIHRyaWdnZXIgVUkgY2hhbmdlcyAocHJvdmlkZWQgeW91IGRvbid0IHVzZSBcYkNvbXBvbmVudCB0aGF0IG5lZWRzIGluaXRpYWxpemF0aW9ucylcclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5icHNWaXNpYmxlKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlVmlzaWJsZVN0YXRlQ2hhbmdlKHRoaXMuYnBzVmlzaWJsZSwgIWNoYW5nZXMuYnBzVmlzaWJsZS5maXJzdENoYW5nZSk7IC8vIERvIG5vdCB0cmlnZ2VyIGFuaW1hdGlvbiB3aGlsZSBpbml0aWFsaXppbmdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIHVzaW5nIENvbXBvbmVudCwgaXQgaXMgdGhlIHRpbWUgdG8gYXR0YWNoIFZpZXcgd2hpbGUgYm9keUNvbnRhaW5lciBpcyByZWFkeVxyXG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xyXG4gICAgICB0aGlzLmJvZHlDb250YWluZXIuaW5zZXJ0KHRoaXMuY29udGVudENvbXBvbmVudFJlZi5ob3N0Vmlldyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2spIHtcclxuICAgICAgKHRoaXMuYXV0b0ZvY3VzQnV0dG9uT2submF0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8gQ2xvc2Ugc2VsZiBiZWZvcmUgZGVzdHJ1Y3RpbmdcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUoZmFsc2UpLnRoZW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLm1vZGFsQ29udHJvbC5kZXJlZ2lzdGVyTW9kYWwodGhpcyk7XHJcblxyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5uZXh0KCk7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgICB9KTtcclxuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXRJZCk7XHJcbiAgfVxyXG5cclxuICBzZXRGb290ZXJXaXRoVGVtcGxhdGUodGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPHt9Pik6IHZvaWQge1xyXG4gICAgdGhpcy5icHNGb290ZXIgPSB0ZW1wbGF0ZVJlZjtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3ZlcmxheVJlZihvdmVybGF5UmVmOiBPdmVybGF5UmVmKTogdm9pZCB7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYgPSBvdmVybGF5UmVmO1xyXG4gIH1cclxuXHJcbiAga2V5ZG93bkxpc3RlbmVyKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDQVBFICYmIHRoaXMuYnBzS2V5Ym9hcmQpIHtcclxuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb3BlbigpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBjbG9zZShyZXN1bHQ/OiBSKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZpc2libGVGcm9tSW5zaWRlKGZhbHNlLCByZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgZGVzdHJveShyZXN1bHQ/OiBSKTogdm9pZCB7XHJcbiAgICAvLyBEZXN0cm95IGVxdWFscyBDbG9zZVxyXG4gICAgdGhpcy5jbG9zZShyZXN1bHQpO1xyXG4gIH1cclxuXHJcbiAgdHJpZ2dlck9rKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ29rJyk7XHJcbiAgfVxyXG5cclxuICB0cmlnZ2VyQ2FuY2VsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW5zdGFuY2UoKTogQnBzTW9kYWxDb21wb25lbnQge1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXRDb250ZW50Q29tcG9uZW50UmVmKCk6IENvbXBvbmVudFJlZjxUPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250ZW50Q29tcG9uZW50UmVmO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGVudENvbXBvbmVudCgpOiBUIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRDb21wb25lbnRSZWYgJiYgdGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50UmVmICYmIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgb25NYXNrRGlhbG9nRG93bigpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlhbG9nTW91c2VEb3duID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uRGlhbG9nVXAoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5kaWFsb2dNb3VzZURvd24pIHtcclxuICAgICAgdGhpcy50aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmRpYWxvZ01vdXNlRG93biA9IGZhbHNlO1xyXG4gICAgICB9LCAwKSBhcyBhbnk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNsaWNrTWFzaygkZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChcclxuICAgICAgdGhpcy5tYXNrICYmXHJcbiAgICAgIHRoaXMubWFza0Nsb3NhYmxlICYmXHJcbiAgICAgICgkZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuY29udGFpbnMoV1JBUF9DTEFTU19OQU1FKSAmJlxyXG4gICAgICB0aGlzLmJwc1Zpc2libGUgJiZcclxuICAgICAgIXRoaXMuZGlhbG9nTW91c2VEb3duXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5vbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNNb2RhbFR5cGUodHlwZTogTW9kYWxUeXBlKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5icHNNb2RhbFR5cGUgPT09IHR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja0Nsb3NlQnRuKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuYnBzVmlzaWJsZSkge1xyXG4gICAgICB0aGlzLm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25DbGlja09rQ2FuY2VsKHR5cGU6ICdvaycgfCAnY2FuY2VsJyk6IHZvaWQge1xyXG4gICAgY29uc3QgdHJpZ2dlciA9IHsgb2s6IHRoaXMuYnBzT25PaywgY2FuY2VsOiB0aGlzLmJwc09uQ2FuY2VsIH1bdHlwZV07XHJcbiAgICBjb25zdCBsb2FkaW5nS2V5ID0geyBvazogJ2Jwc09rTG9hZGluZycsIGNhbmNlbDogJ2Jwc0NhbmNlbExvYWRpbmcnIH1bdHlwZV07XHJcbiAgICBpZiAodHJpZ2dlciBpbnN0YW5jZW9mIEV2ZW50RW1pdHRlcikge1xyXG4gICAgICB0cmlnZ2VyLmVtaXQodGhpcy5nZXRDb250ZW50Q29tcG9uZW50KCkpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHJpZ2dlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICBjb25zdCByZXN1bHQgPSB0cmlnZ2VyKHRoaXMuZ2V0Q29udGVudENvbXBvbmVudCgpKTtcclxuICAgICAgY29uc3QgY2FzZUNsb3NlID0gKGRvQ2xvc2U6IGJvb2xlYW4gfCB2b2lkIHwge30pID0+IGRvQ2xvc2UgIT09IGZhbHNlICYmIHRoaXMuY2xvc2UoZG9DbG9zZSBhcyBSKTsgLy8gVXNlcnMgY2FuIHJldHVybiBcImZhbHNlXCIgdG8gcHJldmVudCBjbG9zaW5nIGJ5IGRlZmF1bHRcclxuICAgICAgaWYgKGlzUHJvbWlzZShyZXN1bHQpKSB7XHJcbiAgICAgICAgdGhpc1tsb2FkaW5nS2V5XSA9IHRydWU7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlVGhlbiA9IChkb0Nsb3NlOiBib29sZWFuIHwgdm9pZCB8IHt9KSA9PiB7XHJcbiAgICAgICAgICB0aGlzW2xvYWRpbmdLZXldID0gZmFsc2U7XHJcbiAgICAgICAgICBjYXNlQ2xvc2UoZG9DbG9zZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICAocmVzdWx0IGFzIFByb21pc2U8dm9pZD4pLnRoZW4oaGFuZGxlVGhlbikuY2F0Y2goaGFuZGxlVGhlbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FzZUNsb3NlKHJlc3VsdCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiB7fSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGlzVGVtcGxhdGVSZWYodmFsdWU6IHt9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpc0NvbXBvbmVudCh2YWx1ZToge30pOiBib29sZWFuIHtcclxuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFR5cGU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaXNNb2RhbEJ1dHRvbnModmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHt9PiB8IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4gfCBudWxsKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID4gMDtcclxuICB9XHJcblxyXG4gIC8vIERvIHJlc3QgdGhpbmdzIHdoZW4gdmlzaWJsZSBzdGF0ZSBjaGFuZ2VkXHJcbiAgcHJpdmF0ZSBoYW5kbGVWaXNpYmxlU3RhdGVDaGFuZ2UodmlzaWJsZTogYm9vbGVhbiwgYW5pbWF0aW9uOiBib29sZWFuID0gdHJ1ZSwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodmlzaWJsZSkge1xyXG4gICAgICAvLyBIaWRlIHNjcm9sbGJhciBhdCB0aGUgZmlyc3QgdGltZSB3aGVuIHNob3duIHVwXHJcbiAgICAgIHRoaXMuc2Nyb2xsU3RyYXRlZ3kuZW5hYmxlKCk7XHJcbiAgICAgIHRoaXMuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xyXG4gICAgICB0aGlzLnRyYXBGb2N1cygpO1xyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLmFkZCh0aGlzLm92ZXJsYXlSZWYpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5jb250YWluZXIgaW5zdGFuY2VvZiBPdmVybGF5UmVmKSB7XHJcbiAgICAgICAgdGhpcy5vdmVybGF5S2V5Ym9hcmREaXNwYXRjaGVyLnJlbW92ZSh0aGlzLm92ZXJsYXlSZWYpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShhbmltYXRpb24gPyB0aGlzLmFuaW1hdGVUbyh2aXNpYmxlKSA6IHVuZGVmaW5lZCkudGhlbigoKSA9PiB7XHJcbiAgICAgIC8vIEVtaXQgb3Blbi9jbG9zZSBldmVudCBhZnRlciBhbmltYXRpb25zIG92ZXJcclxuICAgICAgaWYgKHZpc2libGUpIHtcclxuICAgICAgICB0aGlzLmJwc0FmdGVyT3Blbi5lbWl0KCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5icHNBZnRlckNsb3NlLmVtaXQoY2xvc2VSZXN1bHQpO1xyXG4gICAgICAgIHRoaXMucmVzdG9yZUZvY3VzKCk7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxTdHJhdGVneS5kaXNhYmxlKCk7XHJcbiAgICAgICAgLy8gTWFyayB0aGUgZm9yIGNoZWNrIHNvIGl0IGNhbiByZWFjdCBpZiB0aGUgdmlldyBjb250YWluZXIgaXMgdXNpbmcgT25QdXNoIGNoYW5nZSBkZXRlY3Rpb24uXHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gTG9va3VwIGEgYnV0dG9uJ3MgcHJvcGVydHksIGlmIHRoZSBwcm9wIGlzIGEgZnVuY3Rpb24sIGNhbGwgJiB0aGVuIHJldHVybiB0aGUgcmVzdWx0LCBvdGhlcndpc2UsIHJldHVybiBpdHNlbGYuXHJcbiAgcHVibGljIGdldEJ1dHRvbkNhbGxhYmxlUHJvcChvcHRpb25zOiBNb2RhbEJ1dHRvbk9wdGlvbnM8VD4sIHByb3A6IHN0cmluZyk6IHt9IHtcclxuICAgIGNvbnN0IHZhbHVlID0gb3B0aW9uc1twcm9wXTtcclxuICAgIGNvbnN0IGFyZ3M6IFRbXSA9IFtdO1xyXG4gICAgaWYgKHRoaXMuY29udGVudENvbXBvbmVudFJlZikge1xyXG4gICAgICBhcmdzLnB1c2godGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS5hcHBseShvcHRpb25zLCBhcmdzKSA6IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gT24gbnpGb290ZXIncyBtb2RhbCBidXR0b24gY2xpY2tcclxuICBwdWJsaWMgb25CdXR0b25DbGljayhidXR0b246IE1vZGFsQnV0dG9uT3B0aW9uczxUPik6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5nZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnb25DbGljaycpOyAvLyBDYWxsIG9uQ2xpY2sgZGlyZWN0bHlcclxuICAgIGlmIChpc1Byb21pc2UocmVzdWx0KSkge1xyXG4gICAgICBidXR0b24ubG9hZGluZyA9IHRydWU7XHJcbiAgICAgIChyZXN1bHQgYXMgUHJvbWlzZTx7fT4pLnRoZW4oKCkgPT4gKGJ1dHRvbi5sb2FkaW5nID0gZmFsc2UpKS5jYXRjaCgoKSA9PiAoYnV0dG9uLmxvYWRpbmcgPSBmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ2hhbmdlIG56VmlzaWJsZSBmcm9tIGluc2lkZVxyXG4gIHByaXZhdGUgY2hhbmdlVmlzaWJsZUZyb21JbnNpZGUodmlzaWJsZTogYm9vbGVhbiwgY2xvc2VSZXN1bHQ/OiBSKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBpZiAodGhpcy5icHNWaXNpYmxlICE9PSB2aXNpYmxlKSB7XHJcbiAgICAgIC8vIENoYW5nZSBuelZpc2libGUgdmFsdWUgaW1tZWRpYXRlbHlcclxuICAgICAgdGhpcy5icHNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgdGhpcy5icHNWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XHJcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVZpc2libGVTdGF0ZUNoYW5nZSh2aXNpYmxlLCB0cnVlLCBjbG9zZVJlc3VsdCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZUFuaW1hdGlvblN0YXRlKHN0YXRlOiBBbmltYXRpb25TdGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHN0YXRlO1xyXG4gICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgIHRoaXMubWFza0FuaW1hdGlvbkNsYXNzTWFwID0ge1xyXG4gICAgICAgIFtgZmFkZS0ke3N0YXRlfWBdOiB0cnVlLFxyXG4gICAgICAgIFtgZmFkZS0ke3N0YXRlfS1hY3RpdmVgXTogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLm1vZGFsQW5pbWF0aW9uQ2xhc3NNYXAgPSB7XHJcbiAgICAgICAgW2B6b29tLSR7c3RhdGV9YF06IHRydWUsXHJcbiAgICAgICAgW2B6b29tLSR7c3RhdGV9LWFjdGl2ZWBdOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1hc2tBbmltYXRpb25DbGFzc01hcCA9IHRoaXMubW9kYWxBbmltYXRpb25DbGFzc01hcCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFuaW1hdGVUbyhpc1Zpc2libGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmIChpc1Zpc2libGUpIHtcclxuICAgICAgLy8gRmlndXJlIG91dCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvbiB3aGVuIHNob3dzIHVwXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy51cGRhdGVUcmFuc2Zvcm1PcmlnaW4oKSk7IC8vIFtOT1RFXSBVc2luZyB0aW1lb3V0IGR1ZSB0byB0aGUgZG9jdW1lbnQuY2xpY2sgZXZlbnQgaXMgZmlyZWQgbGF0ZXIgdGhhbiB2aXNpYmxlIGNoYW5nZSwgc28gaWYgbm90IHBvc3Rwb25lZCB0byBuZXh0IGV2ZW50LWxvb3AsIHdlIGNhbid0IGdldCB0aGUgbGFzdGVzdCBjbGljayBwb3NpdGlvblxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlQW5pbWF0aW9uU3RhdGUoaXNWaXNpYmxlID8gJ2VudGVyJyA6ICdsZWF2ZScpO1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT5cclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAvLyBSZXR1cm4gd2hlbiBhbmltYXRpb24gaXMgb3ZlclxyXG4gICAgICAgICAgdGhpcy5jaGFuZ2VBbmltYXRpb25TdGF0ZShudWxsKTtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRoaXMuYnBzTm9BbmltYXRpb24gPyAwIDogTU9EQUxfQU5JTUFURV9EVVJBVElPTlxyXG4gICAgICApXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBmb3JtYXRNb2RhbEJ1dHRvbnMoYnV0dG9uczogQXJyYXk8TW9kYWxCdXR0b25PcHRpb25zPFQ+Pik6IEFycmF5PE1vZGFsQnV0dG9uT3B0aW9uczxUPj4ge1xyXG4gICAgcmV0dXJuIGJ1dHRvbnMubWFwKGJ1dHRvbiA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ue1xyXG4gICAgICAgICAgdHlwZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgYXV0b0xvYWRpbmc6IHRydWUsXHJcbiAgICAgICAgICBzaG93OiB0cnVlLFxyXG4gICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICBkaXNhYmxlZDogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIC4uLmJ1dHRvblxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBjb21wb25lbnQgZHluYW1pY2FsbHkgYnV0IG5vdCBhdHRhY2ggdG8gYW55IFZpZXcgKHRoaXMgYWN0aW9uIHdpbGwgYmUgZXhlY3V0ZWQgd2hlbiBib2R5Q29udGFpbmVyIGlzIHJlYWR5KVxyXG4gICAqIEBwYXJhbSBjb21wb25lbnQgQ29tcG9uZW50IGNsYXNzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVEeW5hbWljQ29tcG9uZW50KGNvbXBvbmVudDogVHlwZTxUPik6IHZvaWQge1xyXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMuY2ZyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KGNvbXBvbmVudCk7XHJcbiAgICBjb25zdCBjaGlsZEluamVjdG9yID0gSW5qZWN0b3IuY3JlYXRlKHtcclxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBCcHNNb2RhbFJlZiwgdXNlVmFsdWU6IHRoaXMgfV0sXHJcbiAgICAgIHBhcmVudDogdGhpcy52aWV3Q29udGFpbmVyLnBhcmVudEluamVjdG9yXHJcbiAgICB9KTtcclxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKGNoaWxkSW5qZWN0b3IpO1xyXG4gICAgaWYgKHRoaXMuYnBzQ29tcG9uZW50UGFyYW1zKSB7XHJcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5jb250ZW50Q29tcG9uZW50UmVmLmluc3RhbmNlLCB0aGlzLmJwc0NvbXBvbmVudFBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICAvLyBEbyB0aGUgZmlyc3QgY2hhbmdlIGRldGVjdGlvbiBpbW1lZGlhdGVseSAob3Igd2UgZG8gZGV0ZWN0aW9uIGF0IG5nQWZ0ZXJWaWV3SW5pdCwgbXVsdGktY2hhbmdlcyBlcnJvciB3aWxsIGJlIHRocm93bilcclxuICAgIHRoaXMuY29udGVudENvbXBvbmVudFJlZi5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyBVcGRhdGUgdHJhbnNmb3JtLW9yaWdpbiB0byB0aGUgbGFzdCBjbGljayBwb3NpdGlvbiBvbiBkb2N1bWVudFxyXG4gIHByaXZhdGUgdXBkYXRlVHJhbnNmb3JtT3JpZ2luKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbW9kYWxFbGVtZW50ID0gdGhpcy5tb2RhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xyXG4gICAgaWYgKHRoaXMucHJldmlvdXNseUZvY3VzZWRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IHByZXZpb3VzbHlET01SZWN0ID0gdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgIGNvbnN0IGxhc3RQb3NpdGlvbiA9IGdldEVsZW1lbnRPZmZzZXQodGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQpO1xyXG4gICAgICBjb25zdCB4ID0gbGFzdFBvc2l0aW9uLmxlZnQgKyBwcmV2aW91c2x5RE9NUmVjdC53aWR0aCAvIDI7XHJcbiAgICAgIGNvbnN0IHkgPSBsYXN0UG9zaXRpb24udG9wICsgcHJldmlvdXNseURPTVJlY3QuaGVpZ2h0IC8gMjtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSBgJHt4IC0gbW9kYWxFbGVtZW50Lm9mZnNldExlZnR9cHggJHt5IC0gbW9kYWxFbGVtZW50Lm9mZnNldFRvcH1weCAwcHhgO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzYXZlUHJldmlvdXNseUZvY3VzZWRFbGVtZW50KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZG9jdW1lbnQpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQgPSB0aGlzLmRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRyYXBGb2N1cygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5mb2N1c1RyYXApIHtcclxuICAgICAgdGhpcy5mb2N1c1RyYXAgPSB0aGlzLmZvY3VzVHJhcEZhY3RvcnkuY3JlYXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICAgIHRoaXMuZm9jdXNUcmFwLmZvY3VzSW5pdGlhbEVsZW1lbnRXaGVuUmVhZHkoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVzdG9yZUZvY3VzKCk6IHZvaWQge1xyXG4gICAgLy8gV2UgbmVlZCB0aGUgZXh0cmEgY2hlY2ssIGJlY2F1c2UgSUUgY2FuIHNldCB0aGUgYGFjdGl2ZUVsZW1lbnRgIHRvIG51bGwgaW4gc29tZSBjYXNlcy5cclxuICAgIGlmICh0aGlzLnByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCAmJiB0eXBlb2YgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhpcy5wcmV2aW91c2x5Rm9jdXNlZEVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZvY3VzVHJhcCkge1xyXG4gICAgICB0aGlzLmZvY3VzVHJhcC5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy10ZW1wbGF0ZSAjdHBsT3JpZ2luQ29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4gPCEtLSBDb21wYXRpYmxlOiB0aGUgPG5nLWNvbnRlbnQ+IGNhbiBhcHBlYXIgb25seSBvbmNlIC0tPlxyXG5cclxuPGRpdiBbbnpOb0FuaW1hdGlvbl09XCJicHNOb0FuaW1hdGlvblwiPlxyXG4gIDxkaXYgKm5nSWY9XCJtYXNrXCJcclxuICAgIGNsYXNzPVwiYW50LW1vZGFsLW1hc2tcIlxyXG4gICAgW25nQ2xhc3NdPVwibWFza0FuaW1hdGlvbkNsYXNzTWFwXCJcclxuICAgIFtjbGFzcy5hbnQtbW9kYWwtbWFzay1oaWRkZW5dPVwiaGlkZGVuXCJcclxuICAgIFtuZ1N0eWxlXT1cImJwc01hc2tTdHlsZVwiXHJcbiAgICBbc3R5bGUuekluZGV4XT1cImJwc1pJbmRleFwiXHJcbiAgPjwvZGl2PlxyXG4gIDxkaXZcclxuICAgIChjbGljayk9XCJvbkNsaWNrTWFzaygkZXZlbnQpXCJcclxuICAgIChtb3VzZXVwKT1cIm9uRGlhbG9nVXAoKVwiXHJcbiAgICBjbGFzcz1cImFudC1tb2RhbC13cmFwIHt7IGJwc1dyYXBDbGFzc05hbWUgfX1cIlxyXG4gICAgW3N0eWxlLnpJbmRleF09XCJicHNaSW5kZXhcIlxyXG4gICAgW3N0eWxlLnZpc2liaWxpdHldPVwiaGlkZGVuID8gJ2hpZGRlbicgOiBudWxsXCJcclxuICAgIHRhYmluZGV4PVwiLTFcIlxyXG4gICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgPlxyXG4gICAgPGRpdiAjbW9kYWxDb250YWluZXJcclxuICAgICAgY2xhc3M9XCJhbnQtbW9kYWwge3sgYnBzQ2xhc3NOYW1lIH19XCJcclxuICAgICAgKG1vdXNlZG93bik9XCJvbk1hc2tEaWFsb2dEb3duKClcIlxyXG4gICAgICBbbmdDbGFzc109XCJtb2RhbEFuaW1hdGlvbkNsYXNzTWFwXCJcclxuICAgICAgW25nU3R5bGVdPVwiYnBzU3R5bGVcIlxyXG4gICAgICBbc3R5bGUud2lkdGhdPVwiYnBzV2lkdGggfCBuelRvQ3NzVW5pdFwiXHJcbiAgICAgIFtzdHlsZS50cmFuc2Zvcm0tb3JpZ2luXT1cInRyYW5zZm9ybU9yaWdpblwiXHJcbiAgICAgIHJvbGU9XCJkb2N1bWVudFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29udGVudFwiPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJicHNDbG9zYWJsZVwiIChjbGljayk9XCJvbkNsaWNrQ2xvc2VCdG4oKVwiIGNsYXNzPVwiYW50LW1vZGFsLWNsb3NlXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1tb2RhbC1jbG9zZS14XCIgW2NsYXNzLmJwcy1tb2RhbC1kaXNhYmxlZF09XCJicHNNb2RhbERpc2FibGVkXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJicHNDbG9zZUljb25cIj5cclxuICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiIWJwc01vZGFsRGlzYWJsZWRcIiBzcmM9XCJhc3NldHMvYnBzLWljb25zL3Nwc194X2ljb25fY2xvc2VwYW5lbF93aGl0ZS5zdmdcIiBjbGFzcz1cImFudC1tb2RhbC1jbG9zZS1pY29uXCIgLz5cclxuICAgICAgICAgICAgICA8aW1nICpuZ0lmPVwiYnBzTW9kYWxEaXNhYmxlZFwiIHNyYz1cImFzc2V0cy9icHMtaWNvbnMvc3BzX3hfaWNvbl9jbG9zZXBhbmVsX2dyZXkuc3ZnXCIgY2xhc3M9XCJhbnQtbW9kYWwtY2xvc2UtaWNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaGlkZGVuXCIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTW9kYWxUeXBlKCdkZWZhdWx0JylcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxDb250ZW50RGVmYXVsdFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNNb2RhbFR5cGUoJ2NvbmZpcm0nKVwiIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRwbENvbnRlbnRDb25maXJtXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPCEtLSBbUHJlZGVmaW5lZF0gRGVmYXVsdCBNb2RhbCBDb250ZW50IC0tPlxyXG48bmctdGVtcGxhdGUgI3RwbENvbnRlbnREZWZhdWx0PlxyXG4gIDxkaXYgKm5nSWY9XCJicHNUaXRsZVwiIGNsYXNzPVwiYW50LW1vZGFsLWhlYWRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC10aXRsZVwiIFtjbGFzcy5icHMtbW9kYWwtZGlzYWJsZWRdPVwiYnBzTW9kYWxEaXNhYmxlZFwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNUZW1wbGF0ZVJlZihicHNUaXRsZSlcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJicHNUaXRsZVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoYnBzVGl0bGUpXCI+PGRpdiBbaW5uZXJIVE1MXT1cImJwc1RpdGxlXCI+PC9kaXY+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1ib2R5XCIgW25nU3R5bGVdPVwiYnBzQm9keVN0eWxlXCI+XHJcbiAgICA8bmctY29udGFpbmVyICNib2R5Q29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ29tcG9uZW50KGJwc0NvbnRlbnQpXCIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGJwc0NvbnRlbnQpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzQ29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoYnBzQ29udGVudClcIj48ZGl2IFtpbm5lckhUTUxdPVwiYnBzQ29udGVudFwiPjwvZGl2PjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdCBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxPcmlnaW5Db250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiAqbmdJZj1cImJwc0Zvb3RlciAhPT0gbnVsbFwiIGNsYXNzPVwiYW50LW1vZGFsLWZvb3RlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwidHJ1ZVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGJwc0Zvb3RlcilcIiBbbmdUZW1wbGF0ZU91dGxldF09XCJicHNGb290ZXJcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhicHNGb290ZXIpXCI+PGRpdiBbaW5uZXJIVE1MXT1cImJwc0Zvb3RlclwiPjwvZGl2PjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc01vZGFsQnV0dG9ucyhicHNGb290ZXIpXCI+XHJcbiAgICAgICAgPGJ1dHRvbiAqbmdGb3I9XCJsZXQgYnV0dG9uIG9mIGJwc0Zvb3RlclwiIGJwcy1idXR0b25cclxuICAgICAgICAgIChjbGljayk9XCJvbkJ1dHRvbkNsaWNrKGJ1dHRvbilcIlxyXG4gICAgICAgICAgW2hpZGRlbl09XCIhZ2V0QnV0dG9uQ2FsbGFibGVQcm9wKGJ1dHRvbiwgJ3Nob3cnKVwiXHJcbiAgICAgICAgICBbYnBzTG9hZGluZ109XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnbG9hZGluZycpXCJcclxuICAgICAgICAgIFtkaXNhYmxlZF09XCJnZXRCdXR0b25DYWxsYWJsZVByb3AoYnV0dG9uLCAnZGlzYWJsZWQnKVwiXHJcbiAgICAgICAgICBbYnBzVHlwZV09XCJidXR0b24udHlwZVwiXHJcbiAgICAgICAgICBbYnBzU2hhcGVdPVwiYnV0dG9uLnNoYXBlXCJcclxuICAgICAgICAgIFticHNTaXplXT1cImJ1dHRvbi5zaXplXCJcclxuICAgICAgICAgIFticHNHaG9zdF09XCJidXR0b24uZ2hvc3RcIlxyXG4gICAgICAgID57eyBidXR0b24ubGFiZWwgfX08L2J1dHRvbj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICA8YnV0dG9uICpuZ0lmPVwiYnBzQ2FuY2VsVGV4dCE9PW51bGxcIiBicHNUeXBlPVwidmFyaWF0aW9uLTFcIiBicHMtYnV0dG9uIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ2NhbmNlbCcpXCIgW2Jwc0xvYWRpbmddPVwiYnBzQ2FuY2VsTG9hZGluZ1wiIFtkaXNhYmxlZF09XCJicHNDYW5jZWxEaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3sgY2FuY2VsVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJicHNPa1RleHQhPT1udWxsXCIgYnBzLWJ1dHRvbiBbYnBzVHlwZV09XCJicHNPa1R5cGVcIiAoY2xpY2spPVwib25DbGlja09rQ2FuY2VsKCdvaycpXCIgW2Jwc0xvYWRpbmddPVwiYnBzT2tMb2FkaW5nXCIgW2Rpc2FibGVkXT1cImJwc09rRGlzYWJsZWRcIj5cclxuICAgICAgICAgIHt7IG9rVGV4dCB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG48IS0tIC9bUHJlZGVmaW5lZF0gRGVmYXVsdCBNb2RhbCBDb250ZW50IC0tPlxyXG5cclxuPCEtLSBbUHJlZGVmaW5lZF0gQ29uZmlybSBNb2RhbCBDb250ZW50IC0tPlxyXG48bmctdGVtcGxhdGUgI3RwbENvbnRlbnRDb25maXJtPlxyXG4gIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtYm9keVwiIFtuZ1N0eWxlXT1cImJwc0JvZHlTdHlsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLWJvZHktd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tYm9keVwiPlxyXG4gICAgICAgIDxpIG56LWljb24gW256VHlwZV09XCJicHNJY29uVHlwZVwiPjwvaT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFudC1tb2RhbC1jb25maXJtLXRpdGxlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzVGVtcGxhdGVSZWYoYnBzVGl0bGUpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzVGl0bGVcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiaXNOb25FbXB0eVN0cmluZyhicHNUaXRsZSlcIj48c3BhbiBbaW5uZXJIVE1MXT1cImJwc1RpdGxlXCI+PC9zcGFuPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtbW9kYWwtY29uZmlybS1jb250ZW50XCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICNib2R5Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQ29tcG9uZW50KGJwc0NvbnRlbnQpXCIgW25nU3dpdGNoXT1cInRydWVcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJpc1RlbXBsYXRlUmVmKGJwc0NvbnRlbnQpXCIgW25nVGVtcGxhdGVPdXRsZXRdPVwiYnBzQ29udGVudFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cImlzTm9uRW1wdHlTdHJpbmcoYnBzQ29udGVudClcIj48ZGl2IFtpbm5lckhUTUxdPVwiYnBzQ29udGVudFwiPjwvZGl2PjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdCBbbmdUZW1wbGF0ZU91dGxldF09XCJ0cGxPcmlnaW5Db250ZW50XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYW50LW1vZGFsLWNvbmZpcm0tYnRuc1wiPlxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJicHNDYW5jZWxUZXh0IT09bnVsbFwiXHJcbiAgICAgICAgICBicHMtYnV0dG9uXHJcbiAgICAgICAgICBicHNUeXBlPVwidmFyaWF0aW9uLTFcIlxyXG4gICAgICAgICAgKGNsaWNrKT1cIm9uQ2xpY2tPa0NhbmNlbCgnY2FuY2VsJylcIlxyXG4gICAgICAgICAgW2Jwc0xvYWRpbmddPVwiYnBzQ2FuY2VsTG9hZGluZ1wiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiYnBzQ2FuY2VsRGlzYWJsZWRcIj5cclxuICAgICAgICAgIHt7IGNhbmNlbFRleHQgfX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uICNhdXRvRm9jdXNCdXR0b25Pa1xyXG4gICAgICAgICAgKm5nSWY9XCJicHNPa1RleHQhPT1udWxsXCJcclxuICAgICAgICAgIGJwcy1idXR0b25cclxuICAgICAgICAgIChjbGljayk9XCJvbkNsaWNrT2tDYW5jZWwoJ29rJylcIlxyXG4gICAgICAgICAgW2Jwc1R5cGVdPVwiYnBzT2tUeXBlXCJcclxuICAgICAgICAgIFticHNMb2FkaW5nXT1cImJwc09rTG9hZGluZ1wiXHJcbiAgICAgICAgICBbZGlzYWJsZWRdPVwiYnBzT2tEaXNhYmxlZFwiPlxyXG4gICAgICAgICAge3sgb2tUZXh0IH19XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+IDwhLS0gLy5hbnQtbW9kYWwtY29uZmlybS1ib2R5LXdyYXBwZXIgLS0+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjwhLS0gL1tQcmVkZWZpbmVkXSBDb25maXJtIE1vZGFsIENvbnRlbnQgLS0+XHJcbiJdfQ==