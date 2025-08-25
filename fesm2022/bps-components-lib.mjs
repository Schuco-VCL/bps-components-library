import * as i0 from '@angular/core';
import { Injectable, Component, Directive, Optional, Self, Input, TemplateRef, ViewEncapsulation, ChangeDetectionStrategy, ContentChildren, InjectionToken, Inject, Host, ContentChild, Type, EventEmitter, ViewChild, Output, ElementRef, HostListener, forwardRef, HostBinding, SkipSelf, NgModule, Pipe, Injector, ViewContainerRef, isDevMode } from '@angular/core';
import * as i1$1 from 'ng-zorro-antd/core/no-animation';
import { NzNoAnimationModule } from 'ng-zorro-antd/core/no-animation';
import * as i6 from 'ng-zorro-antd/core/overlay';
import { POSITION_MAP, DEFAULT_TOOLTIP_POSITIONS, getPlacementName, NzOverlayModule } from 'ng-zorro-antd/core/overlay';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import * as i1$4 from 'ng-zorro-antd/i18n';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import * as i6$1 from 'ng-zorro-antd/spin';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import * as i5 from 'ng-zorro-antd/grid';
import { NzGridModule } from 'ng-zorro-antd/grid';
import * as i3$4 from 'ng-zorro-antd/avatar';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import * as i4$1 from 'ng-zorro-antd/table';
import { NzTableComponent, NzTableModule } from 'ng-zorro-antd/table';
import * as i2$1 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';
import * as i2$4 from '@angular/cdk/overlay';
import { OverlayRef, CdkOverlayOrigin, CdkConnectedOverlay, OverlayModule } from '@angular/cdk/overlay';
import * as i3$2 from 'ng-zorro-antd/icon';
import { NzIconDirective, NzIconModule } from 'ng-zorro-antd/icon';
import * as i4 from 'ng-zorro-antd/empty';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import * as i3 from '@angular/forms';
import { UntypedFormControl, NgModel, FormControlName, FormControlDirective, NgControl, NG_VALUE_ACCESSOR, COMPOSITION_BUFFER_MODE, FormsModule } from '@angular/forms';
import * as i1$2 from '@angular/cdk/observers';
import { ObserversModule } from '@angular/cdk/observers';
import * as i2$5 from '@tinymce/tinymce-angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import { __decorate } from 'tslib';
import { Subject, merge, Subscription, asapScheduler, fromEvent, BehaviorSubject, EMPTY, combineLatest, ReplaySubject, of } from 'rxjs';
import { distinctUntilChanged, takeUntil, filter, startWith, switchMap, mergeMap, map, mapTo, auditTime, finalize, delay, debounceTime, withLatestFrom } from 'rxjs/operators';
import * as i3$1 from 'ng-zorro-antd/core/form';
import { NzFormItemFeedbackIconComponent, NzFormNoStatusService } from 'ng-zorro-antd/core/form';
import { getStatusClassNames, InputBoolean, isNotNil as isNotNil$1, toBoolean, InputNumber, isPromise, getElementOffset as getElementOffset$1 } from 'ng-zorro-antd/core/util';
import * as i2 from '@angular/cdk/bidi';
import * as i1 from '@angular/cdk/a11y';
import * as i2$2 from '@angular/cdk/layout';
import * as i3$3 from '@angular/cdk/platform';
import { helpMotion, zoomBigMotion, collapseMotion, slideMotion, treeCollapseMotion } from 'ng-zorro-antd/core/animation';
import { warnDeprecation } from 'ng-zorro-antd/core/logger';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import * as i7 from 'ng-zorro-antd/core/wave';
import { NZ_WAVE_GLOBAL_CONFIG, NzWaveModule } from 'ng-zorro-antd/core/wave';
import { isPresetColor } from 'ng-zorro-antd/core/color';
import * as i2$3 from 'ng-zorro-antd/core/config';
import { WithConfig as WithConfig$1 } from 'ng-zorro-antd/core/config';
import { LEFT_ARROW, RIGHT_ARROW, SPACE, ENTER, ESCAPE, hasModifierKey, BACKSPACE, TAB, DOWN_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import * as i1$3 from 'ng-zorro-antd/radio';
import { NzRadioService } from 'ng-zorro-antd/radio';
import { TemplatePortal } from '@angular/cdk/portal';
import { NzResizableModule } from 'ng-zorro-antd/resizable';
import * as i1$5 from 'ng-zorro-antd/menu';
import { MenuService, NzIsMenuInsideDropDownToken, NzMenuModule } from 'ng-zorro-antd/menu';
import * as i5$1 from 'ng-zorro-antd/core/highlight';
import { NzHighlightModule } from 'ng-zorro-antd/core/highlight';
import { NzPipesModule } from 'ng-zorro-antd/core/pipe';
import * as i2$6 from 'ng-zorro-antd/core/services';
import { NzDestroyService } from 'ng-zorro-antd/core/services';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import * as i2$7 from '@angular/cdk/scrolling';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { cancelRequestAnimationFrame, reqAnimFrame } from 'ng-zorro-antd/core/polyfill';

class BpsComponentsLibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsComponentsLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsComponentsLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsComponentsLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class BpsComponentsLibComponent {
    constructor() { }
    ngOnInit() {
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsComponentsLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsComponentsLibComponent, selector: "lib-bps-components-lib", ngImport: i0, template: `
    <p>
      bps-components-lib works!
    </p>
  `, isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsComponentsLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-bps-components-lib', template: `
    <p>
      bps-components-lib works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class BpsInputDirective {
    get disabled() {
        if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
        }
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value != null && `${value}` !== 'false';
    }
    constructor(ngControl, renderer, elementRef, hostView, directionality, nzFormStatusService, nzFormNoStatusService) {
        this.ngControl = ngControl;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.directionality = directionality;
        this.nzFormStatusService = nzFormStatusService;
        this.nzFormNoStatusService = nzFormNoStatusService;
        this.borderless = false;
        this.size = 'default';
        this.nzStepperless = true;
        this.nzStatus = '';
        this.opened = false;
        this._disabled = false;
        this.disabled$ = new Subject();
        this.dir = 'ltr';
        // status
        this.prefixCls = 'ant-input';
        this.status = '';
        this.statusCls = {};
        this.hasFeedback = false;
        this.feedbackRef = null;
        this.components = [];
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
            .pipe(distinctUntilChanged((pre, cur) => {
            return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
        }), takeUntil(this.destroy$))
            .subscribe(({ status, hasFeedback }) => {
            this.setStatusStyles(status, hasFeedback);
        });
        if (this.ngControl) {
            this.ngControl.statusChanges
                ?.pipe(filter(() => this.ngControl.disabled !== null), takeUntil(this.destroy$))
                .subscribe(() => {
                this.disabled$.next(this.ngControl.disabled);
            });
        }
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { disabled, nzStatus } = changes;
        if (disabled) {
            this.disabled$.next(this.disabled);
        }
        if (nzStatus) {
            this.setStatusStyles(this.nzStatus, this.hasFeedback);
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    setStatusStyles(status, hasFeedback) {
        // set inner status
        this.status = status;
        this.hasFeedback = hasFeedback;
        this.renderFeedbackIcon();
        // render status if nzStatus is set
        this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
        Object.keys(this.statusCls).forEach(status => {
            if (this.statusCls[status]) {
                this.renderer.addClass(this.elementRef.nativeElement, status);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, status);
            }
        });
    }
    renderFeedbackIcon() {
        if (!this.status || !this.hasFeedback || !!this.nzFormNoStatusService) {
            // remove feedback
            this.hostView.clear();
            this.feedbackRef = null;
            return;
        }
        this.feedbackRef = this.feedbackRef || this.hostView.createComponent(NzFormItemFeedbackIconComponent);
        this.feedbackRef.location.nativeElement.classList.add('ant-input-suffix');
        this.feedbackRef.instance.status = this.status;
        this.feedbackRef.instance.updateIcon();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsInputDirective, deps: [{ token: i3.NgControl, optional: true, self: true }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i2.Directionality, optional: true }, { token: i3$1.NzFormStatusService, optional: true }, { token: i3$1.NzFormNoStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsInputDirective, selector: "input[bps-input],textarea[bps-input]", inputs: { borderless: "borderless", size: "size", nzStepperless: "nzStepperless", nzStatus: "nzStatus", opened: "opened", disabled: "disabled" }, host: { properties: { "class.bps-input-opened": "opened", "class.ant-input-disabled": "disabled", "class.ant-input-borderless": "borderless", "class.ant-input-lg": "size === 'large'", "class.ant-input-sm": "size === 'small'", "attr.disabled": "disabled || null", "class.ant-input-rtl": "dir=== 'rtl'", "class.ant-input-stepperless": "nzStepperless" }, classAttribute: "ant-input" }, exportAs: ["bpsInput"], usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    InputBoolean()
], BpsInputDirective.prototype, "borderless", void 0);
__decorate([
    InputBoolean()
], BpsInputDirective.prototype, "nzStepperless", void 0);
__decorate([
    InputBoolean()
], BpsInputDirective.prototype, "opened", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsInputDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'input[bps-input],textarea[bps-input]',
                    exportAs: 'bpsInput',
                    host: {
                        class: 'ant-input',
                        '[class.bps-input-opened]': 'opened',
                        '[class.ant-input-disabled]': 'disabled',
                        '[class.ant-input-borderless]': 'borderless',
                        '[class.ant-input-lg]': `size === 'large'`,
                        '[class.ant-input-sm]': `size === 'small'`,
                        '[attr.disabled]': 'disabled || null',
                        '[class.ant-input-rtl]': `dir=== 'rtl'`,
                        '[class.ant-input-stepperless]': `nzStepperless`
                    }
                }]
        }], ctorParameters: function () { return [{ type: i3.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3$1.NzFormStatusService, decorators: [{
                    type: Optional
                }] }, { type: i3$1.NzFormNoStatusService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { borderless: [{
                type: Input
            }], size: [{
                type: Input
            }], nzStepperless: [{
                type: Input
            }], nzStatus: [{
                type: Input
            }], opened: [{
                type: Input
            }], disabled: [{
                type: Input
            }] } });

class NzStringTemplateOutletDirective {
    set nzStringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
    }
    recreateView() {
        if (!this.isTemplate) {
            /** use default template when input is string **/
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
        else {
            /** use input template when input is templateRef **/
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
    }
    // tslint:disable-next-line:no-any
    getType(value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    }
    shouldRecreateView(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        let shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                const previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                const currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        const shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    }
    hasContextShapeChanged(ctxChange) {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    // tslint:disable-next-line:no-any
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            // tslint:disable-next-line:no-any
            this.inputViewRef.context[propName] = this.nzStringTemplateOutletContext[propName];
        }
    }
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    ngOnChanges(changes) {
        const recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        }
        else {
            if (this.inputViewRef && this.nzStringTemplateOutletContext) {
                this.updateExistingContext(this.nzStringTemplateOutletContext);
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzStringTemplateOutletDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzStringTemplateOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nzStringTemplateOutlet]',
                    exportAs: 'nzStringTemplateOutlet'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { nzStringTemplateOutletContext: [{
                type: Input
            }], nzStringTemplateOutlet: [{
                type: Input
            }] } });

class BpsInputGroupSlotComponent {
    constructor() {
        this.icon = null;
        this.type = null;
        this.template = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsInputGroupSlotComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsInputGroupSlotComponent, selector: "[bps-input-group-slot]", inputs: { icon: "icon", type: "type", template: "template" }, host: { properties: { "class.ant-input-group-addon": "type === 'addon'", "class.ant-input-prefix": "type === 'prefix'", "class.ant-input-suffix": "type === 'suffix'" } }, ngImport: i0, template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsInputGroupSlotComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[bps-input-group-slot]',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <i nz-icon [nzType]="icon" *ngIf="icon"></i>
    <ng-container *nzStringTemplateOutlet="template">{{ template }}</ng-container>
  `,
                    host: {
                        '[class.ant-input-group-addon]': `type === 'addon'`,
                        '[class.ant-input-prefix]': `type === 'prefix'`,
                        '[class.ant-input-suffix]': `type === 'suffix'`
                    }
                }]
        }], propDecorators: { icon: [{
                type: Input
            }], type: [{
                type: Input
            }], template: [{
                type: Input
            }] } });

const iconTypeMap = {
    error: 'close-circle-fill',
    validating: 'loading',
    success: 'check-circle-fill',
    warning: 'exclamation-circle-fill'
};
class BpsFormItemFeedbackIconComponent {
    constructor(cdr) {
        this.cdr = cdr;
        this.status = '';
        this.iconType = null;
    }
    ngOnChanges(_changes) {
        this.updateIcon();
    }
    updateIcon() {
        this.iconType = this.status ? iconTypeMap[this.status] : null;
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormItemFeedbackIconComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormItemFeedbackIconComponent, selector: "bps-form-item-feedback-icon", inputs: { status: "status" }, host: { properties: { "class.ant-form-item-feedback-icon-error": "status===\"error\"", "class.ant-form-item-feedback-icon-warning": "status===\"warning\"", "class.ant-form-item-feedback-icon-success": "status===\"success\"", "class.ant-form-item-feedback-icon-validating": "status===\"validating\"" }, classAttribute: "ant-form-item-feedback-icon" }, exportAs: ["bpsFormFeedbackIcon"], usesOnChanges: true, ngImport: i0, template: ` <span *ngIf="iconType" nz-icon [nzType]="iconType"></span> `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormItemFeedbackIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-form-item-feedback-icon',
                    exportAs: 'bpsFormFeedbackIcon',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: ` <span *ngIf="iconType" nz-icon [nzType]="iconType"></span> `,
                    host: {
                        class: 'ant-form-item-feedback-icon',
                        '[class.ant-form-item-feedback-icon-error]': 'status==="error"',
                        '[class.ant-form-item-feedback-icon-warning]': 'status==="warning"',
                        '[class.ant-form-item-feedback-icon-success]': 'status==="success"',
                        '[class.ant-form-item-feedback-icon-validating]': 'status==="validating"'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { status: [{
                type: Input
            }] } });

class NzInputGroupWhitSuffixOrPrefixDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzInputGroupWhitSuffixOrPrefixDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzInputGroupWhitSuffixOrPrefixDirective, selector: "bps-input-group[bpsSuffix], bps-input-group[bpsPrefix]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzInputGroupWhitSuffixOrPrefixDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: `bps-input-group[bpsSuffix], bps-input-group[bpsPrefix]`
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; } });
class BpsInputGroupComponent {
    constructor(focusMonitor, elementRef, renderer, cdr, directionality, nzFormStatusService, nzFormNoStatusService) {
        this.focusMonitor = focusMonitor;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.cdr = cdr;
        this.directionality = directionality;
        this.nzFormStatusService = nzFormStatusService;
        this.nzFormNoStatusService = nzFormNoStatusService;
        this.bpsAddOnBeforeIcon = null;
        this.bpsAddOnAfterIcon = null;
        this.bpsPrefixIcon = null;
        this.bpsSuffixIcon = null;
        this.bpsStatus = '';
        this.bpsSize = 'default';
        this.bpsSearch = false;
        this.bpsCompact = false;
        this.isLarge = false;
        this.isSmall = false;
        this.isAffix = false;
        this.isAddOn = false;
        this.isFeedback = false;
        this.focused = false;
        this.disabled = false;
        this.dir = 'ltr';
        // status
        this.prefixCls = 'ant-input';
        this.affixStatusCls = {};
        this.groupStatusCls = {};
        this.affixInGroupStatusCls = {};
        this.status = '';
        this.hasFeedback = false;
        this.destroy$ = new Subject();
    }
    updateChildrenInputSize() {
        if (this.listOfNzInputDirective) {
            this.listOfNzInputDirective.forEach(item => (item.size = this.bpsSize));
        }
    }
    ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
            .pipe(distinctUntilChanged((pre, cur) => {
            return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
        }), takeUntil(this.destroy$))
            .subscribe(({ status, hasFeedback }) => {
            this.setStatusStyles(status, hasFeedback);
        });
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            this.focused = !!focusOrigin;
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngAfterContentInit() {
        this.updateChildrenInputSize();
        const listOfInputChange$ = this.listOfNzInputDirective.changes.pipe(startWith(this.listOfNzInputDirective));
        listOfInputChange$
            .pipe(switchMap(list => merge(...[listOfInputChange$, ...list.map((input) => input.disabled$)])), mergeMap(() => listOfInputChange$), map(list => list.some((input) => input.disabled)), takeUntil(this.destroy$))
            .subscribe(disabled => {
            this.disabled = disabled;
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        const { bpsSize, bpsSuffix, bpsPrefix, bpsPrefixIcon, bpsSuffixIcon, bpsAddOnAfter, bpsAddOnBefore, bpsAddOnAfterIcon, bpsAddOnBeforeIcon, bpsStatus } = changes;
        if (bpsSize) {
            this.updateChildrenInputSize();
            this.isLarge = this.bpsSize === 'large';
            this.isSmall = this.bpsSize === 'small';
        }
        if (bpsSuffix || bpsPrefix || bpsPrefixIcon || bpsSuffixIcon) {
            this.isAffix = !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        }
        if (bpsAddOnAfter || bpsAddOnBefore || bpsAddOnAfterIcon || bpsAddOnBeforeIcon) {
            this.isAddOn = !!(this.bpsAddOnAfter || this.bpsAddOnBefore || this.bpsAddOnAfterIcon || this.bpsAddOnBeforeIcon);
            this.nzFormNoStatusService?.noFormStatus?.next(this.isAddOn);
        }
        if (bpsStatus) {
            this.setStatusStyles(this.bpsStatus, this.hasFeedback);
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
    setStatusStyles(status, hasFeedback) {
        // set inner status
        this.status = status;
        this.hasFeedback = hasFeedback;
        this.isFeedback = !!status && hasFeedback;
        const baseAffix = !!(this.bpsSuffix || this.bpsPrefix || this.bpsPrefixIcon || this.bpsSuffixIcon);
        this.isAffix = baseAffix || (!this.isAddOn && hasFeedback);
        this.affixInGroupStatusCls =
            this.isAffix || this.isFeedback
                ? (this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, status, hasFeedback))
                : {};
        this.cdr.markForCheck();
        // render status if nzStatus is set
        this.affixStatusCls = getStatusClassNames(`${this.prefixCls}-affix-wrapper`, this.isAddOn ? '' : status, this.isAddOn ? false : hasFeedback);
        this.groupStatusCls = getStatusClassNames(`${this.prefixCls}-group-wrapper`, this.isAddOn ? status : '', this.isAddOn ? hasFeedback : false);
        const statusCls = {
            ...this.affixStatusCls,
            ...this.groupStatusCls
        };
        Object.keys(statusCls).forEach(status => {
            if (statusCls[status]) {
                this.renderer.addClass(this.elementRef.nativeElement, status);
            }
            else {
                this.renderer.removeClass(this.elementRef.nativeElement, status);
            }
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsInputGroupComponent, deps: [{ token: i1.FocusMonitor }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }, { token: i3$1.NzFormStatusService, optional: true }, { token: i3$1.NzFormNoStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsInputGroupComponent, selector: "bps-input-group", inputs: { bpsAddOnBeforeIcon: "bpsAddOnBeforeIcon", bpsAddOnAfterIcon: "bpsAddOnAfterIcon", bpsPrefixIcon: "bpsPrefixIcon", bpsSuffixIcon: "bpsSuffixIcon", bpsAddOnBefore: "bpsAddOnBefore", bpsAddOnAfter: "bpsAddOnAfter", bpsPrefix: "bpsPrefix", bpsStatus: "bpsStatus", bpsSuffix: "bpsSuffix", bpsSize: "bpsSize", bpsSearch: "bpsSearch", bpsCompact: "bpsCompact" }, host: { properties: { "class.ant-input-group-compact": "bpsCompact", "class.ant-input-search-enter-button": "bpsSearch", "class.ant-input-search": "bpsSearch", "class.ant-input-search-rtl": "dir === 'rtl'", "class.ant-input-search-sm": "bpsSearch && isSmall", "class.ant-input-search-large": "bpsSearch && isLarge", "class.ant-input-group-wrapper": "isAddOn", "class.ant-input-group-wrapper-rtl": "dir === 'rtl'", "class.ant-input-group-wrapper-lg": "isAddOn && isLarge", "class.ant-input-group-wrapper-sm": "isAddOn && isSmall", "class.ant-input-affix-wrapper": "isAffix && !isAddOn", "class.ant-input-affix-wrapper-rtl": "dir === 'rtl'", "class.ant-input-affix-wrapper-focused": "isAffix && focused", "class.ant-input-affix-wrapper-disabled": "isAffix && disabled", "class.ant-input-affix-wrapper-lg": "isAffix && !isAddOn && isLarge", "class.ant-input-affix-wrapper-sm": "isAffix && !isAddOn && isSmall", "class.ant-input-group": "!isAffix && !isAddOn", "class.ant-input-group-rtl": "dir === 'rtl'", "class.ant-input-group-lg": "!isAffix && !isAddOn && isLarge", "class.ant-input-group-sm": "!isAffix && !isAddOn && isSmall" } }, providers: [NzFormNoStatusService], queries: [{ propertyName: "listOfNzInputDirective", predicate: BpsInputDirective }], exportAs: ["bpsInputGroup"], usesOnChanges: true, ngImport: i0, template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="bpsAddOnBefore || bpsAddOnBeforeIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnBeforeIcon"
        [template]="bpsAddOnBefore"
      ></span>
      <span
        *ngIf="isAffix || hasFeedback; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-disabled]="disabled"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
        [class.ant-input-affix-wrapper-focused]="focused"
        [ngClass]="affixInGroupStatusCls"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="bpsAddOnAfter || bpsAddOnAfterIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnAfterIcon"
        [template]="bpsAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span
        *ngIf="bpsPrefix || bpsPrefixIcon"
        bps-input-group-slot
        type="prefix"
        [icon]="bpsPrefixIcon"
        [template]="bpsPrefix"
      ></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span
        *ngIf="bpsSuffix || bpsSuffixIcon || isFeedback"
        bps-input-group-slot
        type="suffix"
        [icon]="bpsSuffixIcon"
        [template]="bpsSuffix"
      >
        <bps-form-item-feedback-icon *ngIf="isFeedback" [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
      <span *ngIf="!isAddOn && !isAffix && isFeedback" bps-input-group-slot type="suffix">
        <bps-form-item-feedback-icon [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: BpsInputGroupSlotComponent, selector: "[bps-input-group-slot]", inputs: ["icon", "type", "template"] }, { kind: "component", type: BpsFormItemFeedbackIconComponent, selector: "bps-form-item-feedback-icon", inputs: ["status"], exportAs: ["bpsFormFeedbackIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsInputGroupComponent.prototype, "bpsSearch", void 0);
__decorate([
    InputBoolean()
], BpsInputGroupComponent.prototype, "bpsCompact", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsInputGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-input-group',
                    exportAs: 'bpsInputGroup',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzFormNoStatusService],
                    template: `
    <span class="ant-input-wrapper ant-input-group" *ngIf="isAddOn; else noAddOnTemplate">
      <span
        *ngIf="bpsAddOnBefore || bpsAddOnBeforeIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnBeforeIcon"
        [template]="bpsAddOnBefore"
      ></span>
      <span
        *ngIf="isAffix || hasFeedback; else contentTemplate"
        class="ant-input-affix-wrapper"
        [class.ant-input-affix-wrapper-disabled]="disabled"
        [class.ant-input-affix-wrapper-sm]="isSmall"
        [class.ant-input-affix-wrapper-lg]="isLarge"
        [class.ant-input-affix-wrapper-focused]="focused"
        [ngClass]="affixInGroupStatusCls"
      >
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </span>
      <span
        *ngIf="bpsAddOnAfter || bpsAddOnAfterIcon"
        bps-input-group-slot
        type="addon"
        [icon]="bpsAddOnAfterIcon"
        [template]="bpsAddOnAfter"
      ></span>
    </span>
    <ng-template #noAddOnTemplate>
      <ng-template [ngIf]="isAffix" [ngIfElse]="contentTemplate">
        <ng-template [ngTemplateOutlet]="affixTemplate"></ng-template>
      </ng-template>
    </ng-template>
    <ng-template #affixTemplate>
      <span
        *ngIf="bpsPrefix || bpsPrefixIcon"
        bps-input-group-slot
        type="prefix"
        [icon]="bpsPrefixIcon"
        [template]="bpsPrefix"
      ></span>
      <ng-template [ngTemplateOutlet]="contentTemplate"></ng-template>
      <span
        *ngIf="bpsSuffix || bpsSuffixIcon || isFeedback"
        bps-input-group-slot
        type="suffix"
        [icon]="bpsSuffixIcon"
        [template]="bpsSuffix"
      >
        <bps-form-item-feedback-icon *ngIf="isFeedback" [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
    <ng-template #contentTemplate>
      <ng-content></ng-content>
      <span *ngIf="!isAddOn && !isAffix && isFeedback" bps-input-group-slot type="suffix">
        <bps-form-item-feedback-icon [status]="status"></bps-form-item-feedback-icon>
      </span>
    </ng-template>
  `,
                    host: {
                        '[class.ant-input-group-compact]': `bpsCompact`,
                        '[class.ant-input-search-enter-button]': `bpsSearch`,
                        '[class.ant-input-search]': `bpsSearch`,
                        '[class.ant-input-search-rtl]': `dir === 'rtl'`,
                        '[class.ant-input-search-sm]': `bpsSearch && isSmall`,
                        '[class.ant-input-search-large]': `bpsSearch && isLarge`,
                        '[class.ant-input-group-wrapper]': `isAddOn`,
                        '[class.ant-input-group-wrapper-rtl]': `dir === 'rtl'`,
                        '[class.ant-input-group-wrapper-lg]': `isAddOn && isLarge`,
                        '[class.ant-input-group-wrapper-sm]': `isAddOn && isSmall`,
                        '[class.ant-input-affix-wrapper]': `isAffix && !isAddOn`,
                        '[class.ant-input-affix-wrapper-rtl]': `dir === 'rtl'`,
                        '[class.ant-input-affix-wrapper-focused]': `isAffix && focused`,
                        '[class.ant-input-affix-wrapper-disabled]': `isAffix && disabled`,
                        '[class.ant-input-affix-wrapper-lg]': `isAffix && !isAddOn && isLarge`,
                        '[class.ant-input-affix-wrapper-sm]': `isAffix && !isAddOn && isSmall`,
                        '[class.ant-input-group]': `!isAffix && !isAddOn`,
                        '[class.ant-input-group-rtl]': `dir === 'rtl'`,
                        '[class.ant-input-group-lg]': `!isAffix && !isAddOn && isLarge`,
                        '[class.ant-input-group-sm]': `!isAffix && !isAddOn && isSmall`
                    }
                }]
        }], ctorParameters: function () { return [{ type: i1.FocusMonitor }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3$1.NzFormStatusService, decorators: [{
                    type: Optional
                }] }, { type: i3$1.NzFormNoStatusService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { listOfNzInputDirective: [{
                type: ContentChildren,
                args: [BpsInputDirective]
            }], bpsAddOnBeforeIcon: [{
                type: Input
            }], bpsAddOnAfterIcon: [{
                type: Input
            }], bpsPrefixIcon: [{
                type: Input
            }], bpsSuffixIcon: [{
                type: Input
            }], bpsAddOnBefore: [{
                type: Input
            }], bpsAddOnAfter: [{
                type: Input
            }], bpsPrefix: [{
                type: Input
            }], bpsStatus: [{
                type: Input
            }], bpsSuffix: [{
                type: Input
            }], bpsSize: [{
                type: Input
            }], bpsSearch: [{
                type: Input
            }], bpsCompact: [{
                type: Input
            }] } });

/**
 * User should provide an object implements this interface to set global configurations.
 */
const NZ_CONFIG = new InjectionToken('nz-config');

const isDefined = function (value) {
    return value !== undefined;
};
class NzConfigService {
    constructor(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    getConfigForComponent(componentName) {
        return this.config[componentName];
    }
    getConfigChangeEventForComponent(componentName) {
        return this.configUpdated$.pipe(filter(n => n === componentName), mapTo(undefined));
    }
    set(componentName, value) {
        this.config[componentName] = { ...this.config[componentName], ...value };
        this.configUpdated$.next(componentName);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzConfigService, deps: [{ token: NZ_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzConfigService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NZ_CONFIG]
                }] }]; } });
// tslint:disable:no-invalid-this
// tslint:disable:no-any
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 */
// tslint:disable-next-line:typedef
function WithConfig(componentName, innerDefaultValue) {
    return function ConfigDecorator(target, propName, originalDescriptor) {
        const privatePropName = `$$__assignedValue__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be override by ${componentName} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            get() {
                const originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                const componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                const configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
            set(value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(value);
                }
                else {
                    this[privatePropName] = value;
                }
            },
            configurable: true,
            enumerable: true
        };
    };
}

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzUpdateHostClassService {
    updateHostClass(el, classMap) {
        this.removeClass(el, this.classMap, this.renderer);
        this.classMap = { ...classMap };
        this.addClass(el, this.classMap, this.renderer);
    }
    removeClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i)) {
                renderer.removeClass(el, i);
            }
        }
    }
    addClass(el, classMap, renderer) {
        for (const i in classMap) {
            if (classMap.hasOwnProperty(i) && classMap[i]) {
                renderer.addClass(el, i);
            }
        }
    }
    constructor(rendererFactory2) {
        this.classMap = {};
        this.renderer = rendererFactory2.createRenderer(null, null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzUpdateHostClassService, deps: [{ token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzUpdateHostClassService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzUpdateHostClassService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i0.RendererFactory2 }]; } });

var NzBreakpoint;
(function (NzBreakpoint) {
    NzBreakpoint["xxl"] = "xxl";
    NzBreakpoint["xl"] = "xl";
    NzBreakpoint["lg"] = "lg";
    NzBreakpoint["md"] = "md";
    NzBreakpoint["sm"] = "sm";
    NzBreakpoint["xs"] = "xs";
})(NzBreakpoint || (NzBreakpoint = {}));
const responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzDomEventService {
    constructor(ngZone, rendererFactory2) {
        this.ngZone = ngZone;
        this.rendererFactory2 = rendererFactory2;
        this.resizeSource = new Subject();
        this.domEventListeners = new Map();
        this.renderer = this.rendererFactory2.createRenderer(null, null);
    }
    registerResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            this.domEventListeners.set('resize', {
                handler: () => {
                    this.resizeSource.next();
                },
                countOfListeners: 0
            });
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStartListener(listener, 'resize');
        return this.resizeSource.pipe(auditTime(16));
    }
    unregisterResizeListener() {
        if (!this.domEventListeners.has('resize')) {
            return;
        }
        const listener = this.domEventListeners.get('resize');
        this.tryToStopListener(listener);
    }
    tryToStartListener(l, name) {
        l.countOfListeners += 1;
        this.ngZone.runOutsideAngular(() => {
            if (l.countOfListeners === 1) {
                l.unsubscribe = this.renderer.listen('window', name, l.handler);
            }
        });
    }
    tryToStopListener(l) {
        l.countOfListeners -= 1;
        if (l.countOfListeners === 0) {
            l.unsubscribe();
            l.unsubscribe = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzDomEventService, deps: [{ token: i0.NgZone }, { token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzDomEventService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzDomEventService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.RendererFactory2 }]; } });

class NzRowDirective {
    calculateGutter() {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return 0;
        }
    }
    updateGutter() {
        const actualGutter = this.calculateGutter();
        if (this.actualGutter !== actualGutter) {
            this.actualGutter = actualGutter;
            this.actualGutter$.next(this.actualGutter);
            this.renderer.setStyle(this.el, 'margin-left', `-${this.actualGutter / 2}px`);
            this.renderer.setStyle(this.el, 'margin-right', `-${this.actualGutter / 2}px`);
        }
    }
    watchMedia() {
        Object.keys(responsiveMap).map((screen) => {
            const castBP = screen;
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                this.breakPoint = castBP;
            }
        });
        this.updateGutter();
    }
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap() {
        const classMap = {
            [`${this.prefixCls}`]: !this.nzType,
            [`${this.prefixCls}-${this.nzType}`]: this.nzType,
            [`${this.prefixCls}-${this.nzType}-${this.nzAlign}`]: this.nzType && this.nzAlign,
            [`${this.prefixCls}-${this.nzType}-${this.nzJustify}`]: this.nzType && this.nzJustify
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzDomEventService = nzDomEventService;
        this.nzAlign = 'top';
        this.nzJustify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
        this.actualGutter$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.setClassMap();
        this.watchMedia();
    }
    ngOnChanges(changes) {
        if (changes.nzType || changes.nzAlign || changes.nzJustify) {
            this.setClassMap();
        }
        if (changes.nzGutter) {
            this.updateGutter();
        }
    }
    ngAfterViewInit() {
        if (this.platform.isBrowser) {
            this.nzDomEventService
                .registerResizeListener()
                .pipe(takeUntil(this.destroy$), finalize(() => this.nzDomEventService.unregisterResizeListener()))
                .subscribe(() => this.watchMedia());
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzRowDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: NzUpdateHostClassService }, { token: i2$2.MediaMatcher }, { token: i0.NgZone }, { token: i3$3.Platform }, { token: NzDomEventService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzRowDirective, selector: "[nz-row],nz-row", inputs: { nzType: "nzType", nzAlign: "nzAlign", nzJustify: "nzJustify", nzGutter: "nzGutter" }, providers: [NzUpdateHostClassService], exportAs: ["nzRow"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzRowDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nz-row],nz-row',
                    exportAs: 'nzRow',
                    providers: [NzUpdateHostClassService]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: NzUpdateHostClassService }, { type: i2$2.MediaMatcher }, { type: i0.NgZone }, { type: i3$3.Platform }, { type: NzDomEventService }]; }, propDecorators: { nzType: [{
                type: Input
            }], nzAlign: [{
                type: Input
            }], nzJustify: [{
                type: Input
            }], nzGutter: [{
                type: Input
            }] } });

class NzColDirective {
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap() {
        const classMap = {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-${this.nzSpan}`]: isNotNil$1(this.nzSpan),
            [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil$1(this.nzOrder),
            [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil$1(this.nzOffset),
            [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil$1(this.nzPull),
            [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil$1(this.nzPush),
            ...this.generateClass()
        };
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    generateClass() {
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil$1(this[name])) {
                if (typeof this[name] === 'number' || typeof this[name] === 'string') {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    const embedded = this[name];
                    const prefixArray = ['span', 'pull', 'push', 'offset', 'order'];
                    prefixArray.forEach(prefix => {
                        const prefixClass = prefix === 'span' ? '-' : `-${prefix}-`;
                        listClassMap[`${this.prefixCls}-${sizeName}${prefixClass}${embedded[prefix]}`] =
                            embedded && isNotNil$1(embedded[prefix]);
                    });
                }
            }
        });
        return listClassMap;
    }
    constructor(nzUpdateHostClassService, elementRef, nzRowDirective, renderer) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowDirective = nzRowDirective;
        this.renderer = renderer;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
        this.destroy$ = new Subject();
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngAfterViewInit() {
        if (this.nzRowDirective) {
            this.nzRowDirective.actualGutter$
                .pipe(startWith(this.nzRowDirective.actualGutter), takeUntil(this.destroy$))
                .subscribe(actualGutter => {
                this.renderer.setStyle(this.el, 'padding-left', `${actualGutter / 2}px`);
                this.renderer.setStyle(this.el, 'padding-right', `${actualGutter / 2}px`);
            });
        }
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzColDirective, deps: [{ token: NzUpdateHostClassService }, { token: i0.ElementRef }, { token: NzRowDirective, host: true, optional: true }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzColDirective, selector: "[nz-col],nz-col", inputs: { nzSpan: "nzSpan", nzOrder: "nzOrder", nzOffset: "nzOffset", nzPush: "nzPush", nzPull: "nzPull", nzXs: "nzXs", nzSm: "nzSm", nzMd: "nzMd", nzLg: "nzLg", nzXl: "nzXl", nzXXl: "nzXXl" }, providers: [NzUpdateHostClassService], exportAs: ["nzCol"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzColDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nz-col],nz-col',
                    exportAs: 'nzCol',
                    providers: [NzUpdateHostClassService]
                }]
        }], ctorParameters: function () { return [{ type: NzUpdateHostClassService }, { type: i0.ElementRef }, { type: NzRowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i0.Renderer2 }]; }, propDecorators: { nzSpan: [{
                type: Input
            }], nzOrder: [{
                type: Input
            }], nzOffset: [{
                type: Input
            }], nzPush: [{
                type: Input
            }], nzPull: [{
                type: Input
            }], nzXs: [{
                type: Input
            }], nzSm: [{
                type: Input
            }], nzMd: [{
                type: Input
            }], nzLg: [{
                type: Input
            }], nzXl: [{
                type: Input
            }], nzXXl: [{
                type: Input
            }] } });

/**
 * @deprecated Use `[bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip]` in `bpsFormControlComponent` instead, will remove in 9.0.0.
 */
class BpsFormExplainComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-explain');
        warnDeprecation(`'bps-form-explain' is going to be removed in 9.0.0. Use [bpsSuccessTip] | [bpsWarningTip] | [bpsErrorTip] | [bpsValidatingTip] in bps-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormExplainComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormExplainComponent, selector: "bps-form-explain", exportAs: ["bpsFormExplain"], ngImport: i0, template: "<div [@helpMotion]>\r\n  <ng-content></ng-content>\r\n</div>", styles: ["bps-form-explain{display:block}\n"], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormExplainComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-explain', exportAs: 'bpsFormExplain', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, animations: [helpMotion], template: "<div [@helpMotion]>\r\n  <ng-content></ng-content>\r\n</div>", styles: ["bps-form-explain{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

/** should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 **/
class BpsFormItemComponent extends NzRowDirective {
    updateFlexStyle() {
        if (this.bpsFlex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    setWithHelpViaTips(value) {
        this.tipsMode = true;
        this.withHelpClass = value;
        this.cdr.markForCheck();
    }
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, nzDomEventService);
        this.cdr = cdr;
        this.bpsFlex = false;
        this.withHelpClass = false;
        this.tipsMode = false;
        renderer.addClass(elementRef.nativeElement, 'ant-form-item');
    }
    ngAfterContentInit() {
        if (!this.tipsMode) {
            this.listOfNzFormExplainComponent.changes
                .pipe(startWith(true), takeUntil(this.destroy$))
                .subscribe(() => {
                this.withHelpClass = this.listOfNzFormExplainComponent && this.listOfNzFormExplainComponent.length > 0;
                this.cdr.markForCheck();
            });
        }
    }
    ngOnInit() {
        super.ngOnInit();
        this.updateFlexStyle();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.hasOwnProperty('bpsFlex')) {
            this.updateFlexStyle();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: NzUpdateHostClassService }, { token: i2$2.MediaMatcher }, { token: i0.NgZone }, { token: i3$3.Platform }, { token: NzDomEventService }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormItemComponent, selector: "bps-form-item", inputs: { bpsFlex: "bpsFlex" }, host: { properties: { "class.ant-form-item-with-help": "withHelpClass" } }, providers: [NzUpdateHostClassService], queries: [{ propertyName: "listOfNzFormExplainComponent", predicate: BpsFormExplainComponent, descendants: true }], exportAs: ["bpsFormItem"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-content></ng-content>", styles: ["bps-form-item{display:block!important}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsFormItemComponent.prototype, "bpsFlex", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-item', exportAs: 'bpsFormItem', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [NzUpdateHostClassService], host: {
                        '[class.ant-form-item-with-help]': 'withHelpClass'
                    }, template: "<ng-content></ng-content>", styles: ["bps-form-item{display:block!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: NzUpdateHostClassService }, { type: i2$2.MediaMatcher }, { type: i0.NgZone }, { type: i3$3.Platform }, { type: NzDomEventService }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { bpsFlex: [{
                type: Input
            }], listOfNzFormExplainComponent: [{
                type: ContentChildren,
                args: [BpsFormExplainComponent, { descendants: true }]
            }] } });

class BpsFormLabelComponent extends NzColDirective {
    set bpsNoColon(value) {
        this.noColon = toBoolean(value);
    }
    get bpsNoColon() {
        return !!this.noColon;
    }
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, renderer, cdr) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.cdr = cdr;
        this.bpsRequired = false;
        this.defaultNoColon = false;
        this.noColon = 'default';
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-label');
    }
    setDefaultNoColon(value) {
        this.defaultNoColon = toBoolean(value);
        this.cdr.markForCheck();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormLabelComponent, deps: [{ token: NzUpdateHostClassService }, { token: i0.ElementRef }, { token: BpsFormItemComponent, host: true, optional: true }, { token: NzRowDirective, host: true, optional: true }, { token: i0.Renderer2 }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormLabelComponent, selector: "bps-form-label", inputs: { bpsFor: "bpsFor", bpsRequired: "bpsRequired", bpsNoColon: "bpsNoColon" }, providers: [NzUpdateHostClassService], exportAs: ["bpsFormLabel"], usesInheritance: true, ngImport: i0, template: "<label [attr.for]=\"bpsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : bpsNoColon\"\r\n  [class.ant-form-item-required]=\"bpsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsFormLabelComponent.prototype, "bpsRequired", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormLabelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-label', exportAs: 'bpsFormLabel', providers: [NzUpdateHostClassService], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<label [attr.for]=\"bpsFor\"\r\n  [class.ant-form-item-no-colon]=\"noColon === 'default' ? defaultNoColon : bpsNoColon\"\r\n  [class.ant-form-item-required]=\"bpsRequired\">\r\n  <ng-content></ng-content>\r\n</label>\r\n" }]
        }], ctorParameters: function () { return [{ type: NzUpdateHostClassService }, { type: i0.ElementRef }, { type: BpsFormItemComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: NzRowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i0.Renderer2 }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { bpsFor: [{
                type: Input
            }], bpsRequired: [{
                type: Input
            }], bpsNoColon: [{
                type: Input
            }] } });

const NZ_CONFIG_COMPONENT_NAME$5 = 'form';
class BpsFormDirective {
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, {
            [`ant-form-${this.bpsLayout}`]: this.bpsLayout
        });
    }
    updateItemsDefaultColon() {
        if (this.bpsFormLabelComponent) {
            this.bpsFormLabelComponent.forEach(item => item.setDefaultNoColon(this.bpsNoColon));
        }
    }
    constructor(nzConfigService, elementRef, renderer, nzUpdateHostClassService) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.bpsLayout = 'horizontal';
        this.destroy$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-form');
    }
    ngOnInit() {
        this.setClassMap();
    }
    ngOnChanges(changes) {
        this.setClassMap();
        if (changes.hasOwnProperty('bpsNoColon')) {
            this.updateItemsDefaultColon();
        }
    }
    ngAfterContentInit() {
        this.bpsFormLabelComponent.changes
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateItemsDefaultColon();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormDirective, deps: [{ token: NzConfigService }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: NzUpdateHostClassService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormDirective, selector: "[bps-form]", inputs: { bpsLayout: "bpsLayout", bpsNoColon: "bpsNoColon" }, providers: [NzUpdateHostClassService], queries: [{ propertyName: "bpsFormLabelComponent", predicate: BpsFormLabelComponent, descendants: true }], exportAs: ["bpsForm"], usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME$5, false),
    InputBoolean()
], BpsFormDirective.prototype, "bpsNoColon", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-form]',
                    exportAs: 'bpsForm',
                    providers: [NzUpdateHostClassService]
                }]
        }], ctorParameters: function () { return [{ type: NzConfigService }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: NzUpdateHostClassService }]; }, propDecorators: { bpsLayout: [{
                type: Input
            }], bpsNoColon: [{
                type: Input
            }], bpsFormLabelComponent: [{
                type: ContentChildren,
                args: [BpsFormLabelComponent, { descendants: true }]
            }] } });

class BpsFormControlComponent extends NzColDirective {
    set bpsHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    get bpsHasFeedback() {
        return this._hasFeedback;
    }
    set bpsValidateStatus(value) {
        if (value instanceof UntypedFormControl || value instanceof NgModel) {
            this.validateControl = value;
            this.validateString = null;
            this.watchControl();
        }
        else if (value instanceof FormControlName) {
            this.validateControl = value.control;
            this.validateString = null;
            this.watchControl();
        }
        else {
            this.validateString = value;
            this.validateControl = null;
            this.setControlClassMap();
        }
    }
    removeSubscribe() {
        this.validateChanges.unsubscribe();
    }
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe().subscribe(() => {
                this.setControlClassMap();
                this.cdr.markForCheck();
            });
        }
    }
    validateControlStatus(status) {
        return (!!this.validateControl &&
            (this.validateControl.dirty || this.validateControl.touched) &&
            this.validateControl.status === status);
    }
    setControlClassMap() {
        if (this.validateString === 'warning') {
            this.status = 'warning';
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.validateString === 'validating' ||
            this.validateString === 'pending' ||
            this.validateControlStatus('PENDING')) {
            this.status = 'validating';
            this.iconType = 'loading';
        }
        else if (this.validateString === 'error' || this.validateControlStatus('INVALID')) {
            this.status = 'error';
            this.iconType = 'close-circle-fill';
        }
        else if (this.validateString === 'success' || this.validateControlStatus('VALID')) {
            this.status = 'success';
            this.iconType = 'check-circle-fill';
        }
        else {
            this.status = null;
            this.iconType = '';
        }
        if (this.hasTips) {
            this.nzFormItemComponent.setWithHelpViaTips(this.showErrorTip);
        }
        this.controlClassMap = {
            [`has-warning`]: this.status === 'warning',
            [`is-validating`]: this.status === 'validating',
            [`has-error`]: this.status === 'error',
            [`has-success`]: this.status === 'success',
            [`has-feedback`]: this.bpsHasFeedback && this.status
        };
    }
    get hasTips() {
        return !!(this.bpsSuccessTip || this.bpsWarningTip || this.bpsErrorTip || this.bpsValidatingTip);
    }
    get showSuccessTip() {
        return this.status === 'success' && !!this.bpsSuccessTip;
    }
    get showWarningTip() {
        return this.status === 'warning' && !!this.bpsWarningTip;
    }
    get showErrorTip() {
        return this.status === 'error' && !!this.bpsErrorTip;
    }
    get showValidatingTip() {
        return this.status === 'validating' && !!this.bpsValidatingTip;
    }
    get showInnerTip() {
        return this.showSuccessTip || this.showWarningTip || this.showErrorTip || this.showValidatingTip;
    }
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr, renderer) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent || nzRowDirective, renderer);
        this.nzFormItemComponent = nzFormItemComponent;
        this.cdr = cdr;
        this._hasFeedback = false;
        this.validateChanges = Subscription.EMPTY;
        this.status = null;
        this.controlClassMap = {};
        renderer.addClass(elementRef.nativeElement, 'ant-form-item-control-wrapper');
    }
    ngOnInit() {
        super.ngOnInit();
        this.setControlClassMap();
    }
    ngOnDestroy() {
        this.removeSubscribe();
        super.ngOnDestroy();
    }
    ngAfterContentInit() {
        if (!this.validateControl && !this.validateString) {
            if (this.defaultValidateControl instanceof FormControlDirective) {
                this.bpsValidateStatus = this.defaultValidateControl.control;
            }
            else {
                this.bpsValidateStatus = this.defaultValidateControl;
            }
        }
    }
    ngAfterViewInit() {
        super.ngAfterViewInit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormControlComponent, deps: [{ token: NzUpdateHostClassService }, { token: i0.ElementRef }, { token: BpsFormItemComponent, host: true, optional: true }, { token: NzRowDirective, host: true, optional: true }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormControlComponent, selector: "bps-form-control", inputs: { bpsSuccessTip: "bpsSuccessTip", bpsWarningTip: "bpsWarningTip", bpsErrorTip: "bpsErrorTip", bpsValidatingTip: "bpsValidatingTip", bpsExtra: "bpsExtra", bpsHasFeedback: "bpsHasFeedback", bpsValidateStatus: "bpsValidateStatus" }, providers: [NzUpdateHostClassService], queries: [{ propertyName: "defaultValidateControl", first: true, predicate: NgControl, descendants: true }], exportAs: ["bpsFormControl"], usesInheritance: true, ngImport: i0, template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n", styles: ["bps-form-control{display:block}form .has-feedback .ant-input-suffix i{margin-right:18px}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], animations: [helpMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormControlComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-control', exportAs: 'bpsFormControl', preserveWhitespaces: false, animations: [helpMotion], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [NzUpdateHostClassService], template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\r\n  <span class=\"ant-form-item-children\">\r\n    <ng-content></ng-content>\r\n    <span class=\"ant-form-item-children-icon\">\r\n      <i *ngIf=\"bpsHasFeedback && iconType\" nz-icon [nzType]=\"iconType\"></i>\r\n    </span>\r\n  </span>\r\n  <div class=\"ant-form-explain\" *ngIf=\"showSuccessTip || showWarningTip || showErrorTip || showValidatingTip\">\r\n    <div @helpMotion>\r\n      <ng-container *ngIf=\"showSuccessTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsSuccessTip;context:{$implicit:validateControl};\">{{ bpsSuccessTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showWarningTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsWarningTip;context:{$implicit:validateControl};\">{{ bpsWarningTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showErrorTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsErrorTip;context:{$implicit:validateControl};\">{{ bpsErrorTip }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showValidatingTip\">\r\n        <ng-container *nzStringTemplateOutlet=\"bpsValidatingTip;context:{$implicit:validateControl};\">{{ bpsValidatingTip }}</ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <ng-content *ngIf=\"!hasTips\" select=\"bps-form-explain\"></ng-content>\r\n  <ng-content *ngIf=\"!bpsExtra\" select=\"bps-form-extra\"></ng-content>\r\n  <div class=\"ant-form-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n", styles: ["bps-form-control{display:block}form .has-feedback .ant-input-suffix i{margin-right:18px}\n"] }]
        }], ctorParameters: function () { return [{ type: NzUpdateHostClassService }, { type: i0.ElementRef }, { type: BpsFormItemComponent, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: NzRowDirective, decorators: [{
                    type: Optional
                }, {
                    type: Host
                }] }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }]; }, propDecorators: { defaultValidateControl: [{
                type: ContentChild,
                args: [NgControl, { static: false }]
            }], bpsSuccessTip: [{
                type: Input
            }], bpsWarningTip: [{
                type: Input
            }], bpsErrorTip: [{
                type: Input
            }], bpsValidatingTip: [{
                type: Input
            }], bpsExtra: [{
                type: Input
            }], bpsHasFeedback: [{
                type: Input
            }], bpsValidateStatus: [{
                type: Input
            }] } });

/**
 * @deprecated Use `[bpsExtra]` in `BpsFormControlComponent` instead, will remove in 9.0.0.
 */
class BpsFormExtraComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-extra');
        warnDeprecation(`'bps-form-extra' is going to be removed in 9.0.0. Use [bpsExtra] in bps-form-control instead. Read https://ng.ant.design/components/form/en`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormExtraComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormExtraComponent, selector: "bps-form-extra", exportAs: ["bpsFormExtra"], ngImport: i0, template: "<ng-content></ng-content>", styles: ["bps-form-extra{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormExtraComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-extra', exportAs: 'bpsFormExtra', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>", styles: ["bps-form-extra{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class BpsFormSplitComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-split');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormSplitComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormSplitComponent, selector: "bps-form-split", exportAs: ["bpsFormSplit"], ngImport: i0, template: "<ng-content></ng-content>", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormSplitComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-split', exportAs: 'bpsFormSplit', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

class BpsFormTextComponent {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-form-text');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormTextComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsFormTextComponent, selector: "bps-form-text", exportAs: ["bpsFormText"], ngImport: i0, template: "<ng-content></ng-content>", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsFormTextComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-form-text', exportAs: 'bpsFormText', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<ng-content></ng-content>" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; } });

function isNotNil(value) {
    return typeof value !== 'undefined' && value !== null;
}
function isNil(value) {
    return typeof value === 'undefined' || value === null;
}
/**
 * Examine if two objects are shallowly equaled.
 */
function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (let idx = 0; idx < keysA.length; idx++) {
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isEmpty(element) {
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        if (filterNotEmptyNode(nodes.item(i))) {
            return false;
        }
    }
    return true;
}
function filterNotEmptyNode(node) {
    if (node) {
        if (node.nodeType === 1 && node.outerHTML.toString().trim().length !== 0) {
            // ELEMENT_NODE
            return node;
        }
        else if (node.nodeType === 3 && node.textContent.toString().trim().length !== 0) {
            // TEXT_NODE
            return node;
        }
        return null;
    }
    return null;
}
// tslint:disable-next-line:no-any
function isNonEmptyString(value) {
    return typeof value === 'string' && value !== '';
}
// tslint:disable-next-line:no-any
function isTemplateRef(value) {
    return value instanceof TemplateRef;
}
// tslint:disable-next-line:no-any
function isComponent(value) {
    return value instanceof Type;
}

/**
 * Silent an event by stopping and preventing it.
 */
function silentEvent(e) {
    e.stopPropagation();
    e.preventDefault();
}
function getElementOffset(elem) {
    if (!elem.getClientRects().length) {
        return { top: 0, left: 0 };
    }
    const rect = elem.getBoundingClientRect();
    const win = elem.ownerDocument.defaultView;
    return {
        top: rect.top + win.pageYOffset,
        left: rect.left + win.pageXOffset
    };
}
function findFirstNotEmptyNode(element) {
    const children = element.childNodes;
    for (let i = 0; i < children.length; i++) {
        const node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
function findLastNotEmptyNode(element) {
    const children = element.childNodes;
    for (let i = children.length - 1; i >= 0; i--) {
        const node = children.item(i);
        if (filterNotEmptyNode(node)) {
            return node;
        }
    }
    return null;
}
function reverseChildNodes(parent) {
    const children = parent.childNodes;
    let length = children.length;
    if (length) {
        const nodes = [];
        children.forEach((node, i) => (nodes[i] = node));
        while (length--) {
            parent.appendChild(nodes[length]);
        }
    }
}
/**
 * Investigate if an event is a `TouchEvent`.
 */
function isTouchEvent(event) {
    return event.type.startsWith('touch');
}
function getEventPosition(event) {
    return isTouchEvent(event) ? event.touches[0] || event.changedTouches[0] : event;
}

class NzTooltipBaseDirective {
    /**
     * This true title that would be used in other parts on this component.
     */
    get _title() {
        return this.title || this.directiveTitle || null;
    }
    get _popoverType() {
        return this.popoverType || null;
    }
    get _tooltipDisabled() {
        return this.tooltipDisabled;
    }
    get _tooltipType() {
        return this.tooltipType || null;
    }
    get _content() {
        return this.content || this.directiveContent || null;
    }
    get _trigger() {
        return typeof this.trigger !== 'undefined' ? this.trigger : 'hover';
    }
    get _placement() {
        const p = this.placement;
        return Array.isArray(p) && p.length > 0 ? p : typeof p === 'string' && p ? [p] : ['top'];
    }
    get _visible() {
        return (typeof this.visible !== 'undefined' ? this.visible : this.internalVisible) || false;
    }
    get _mouseEnterDelay() {
        return this.mouseEnterDelay || 0.15;
    }
    get _mouseLeaveDelay() {
        return this.mouseLeaveDelay || 0.1;
    }
    get _overlayClassName() {
        return this.overlayClassName || null;
    }
    get _overlayStyle() {
        return this.overlayStyle || null;
    }
    getProxyPropertyMap() {
        return {
            noAnimation: ['noAnimation', () => !!this.noAnimation]
        };
    }
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        this.elementRef = elementRef;
        this.hostView = hostView;
        this.resolver = resolver;
        this.renderer = renderer;
        this.noAnimation = noAnimation;
        this.nzConfigService = nzConfigService;
        this.visibleChange = new EventEmitter();
        this.internalVisible = false;
        this.destroy$ = new Subject();
        this.triggerDisposables = [];
    }
    ngOnChanges(changes) {
        const { trigger } = changes;
        if (trigger && !trigger.isFirstChange()) {
            this.registerTriggers();
        }
        if (this.component) {
            this.updatePropertiesByChanges(changes);
        }
    }
    ngAfterViewInit() {
        this.createComponent();
        this.registerTriggers();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        // Clear toggling timer. Issue #3875 #4317 #4386
        this.clearTogglingTimer();
        this.removeTriggerListeners();
    }
    show() {
        this.component?.show();
    }
    hide() {
        this.component?.hide();
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.component) {
            this.component.updatePosition();
        }
    }
    /**
     * Create a dynamic tooltip component. This method can be override.
     */
    createComponent() {
        const componentRef = this.componentRef;
        this.component = componentRef.instance;
        // Remove the component's DOM because it should be in the overlay container.
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), componentRef.location.nativeElement);
        this.component.setOverlayOrigin(this.origin || this.elementRef);
        this.initProperties();
        const ngVisibleChange$ = this.component.bpsVisibleChange.pipe(distinctUntilChanged());
        ngVisibleChange$.pipe(takeUntil(this.destroy$)).subscribe((visible) => {
            this.internalVisible = visible;
            this.visibleChange.emit(visible);
        });
        // In some cases, the rendering takes into account the height at which the `arrow` is in wrong place,
        // so `cdk` sets the container position incorrectly.
        // To avoid this, after placing the `arrow` in the correct position, we should `re-calculate` the position of the `overlay`.
        ngVisibleChange$
            .pipe(filter((visible) => visible), delay(0, asapScheduler), filter(() => Boolean(this.component?.overlay?.overlayRef)), takeUntil(this.destroy$))
            .subscribe(() => {
            this.component?.updatePosition();
        });
    }
    registerTriggers() {
        // When the method gets invoked, all properties has been synced to the dynamic component.
        // After removing the old API, we can just check the directive's own `nzTrigger`.
        const el = this.elementRef.nativeElement;
        const trigger = this.trigger;
        this.removeTriggerListeners();
        if (trigger === 'hover') {
            let overlayElement;
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseenter', () => {
                this.delayEnterLeave(true, true, this._mouseEnterDelay);
            }));
            this.triggerDisposables.push(this.renderer.listen(el, 'mouseleave', () => {
                this.delayEnterLeave(true, false, this._mouseLeaveDelay);
                if (this.component?.overlay.overlayRef && !overlayElement) {
                    overlayElement = this.component.overlay.overlayRef.overlayElement;
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseenter', () => {
                        this.delayEnterLeave(false, true, this._mouseEnterDelay);
                    }));
                    this.triggerDisposables.push(this.renderer.listen(overlayElement, 'mouseleave', () => {
                        this.delayEnterLeave(false, false, this._mouseLeaveDelay);
                    }));
                }
            }));
        }
        else if (trigger === 'focus') {
            this.triggerDisposables.push(this.renderer.listen(el, 'focusin', () => this.show()));
            this.triggerDisposables.push(this.renderer.listen(el, 'focusout', () => this.hide()));
        }
        else if (trigger === 'click') {
            this.triggerDisposables.push(this.renderer.listen(el, 'click', (e) => {
                e.preventDefault();
                this.show();
            }));
        }
        // Else do nothing because user wants to control the visibility programmatically.
    }
    updatePropertiesByChanges(changes) {
        this.updatePropertiesByKeys(Object.keys(changes));
    }
    updatePropertiesByKeys(keys) {
        const mappingProperties = {
            // common mappings
            title: ['bpsTitle', () => this._title],
            directiveTitle: ['bpsTitle', () => this._title],
            tooltipType: ['bpsTooltipType', () => this._tooltipType],
            popoverType: ['bpsPopoverType', () => this._popoverType],
            tooltipDisabled: ['bpsTooltipDisabled', () => this._tooltipDisabled],
            content: ['bpsContent', () => this._content],
            directiveContent: ['bpsContent', () => this._content],
            trigger: ['bpsTrigger', () => this._trigger],
            placement: ['bpsPlacement', () => this._placement],
            visible: ['bpsVisible', () => this._visible],
            mouseEnterDelay: ['bpsMouseEnterDelay', () => this._mouseEnterDelay],
            mouseLeaveDelay: ['bpsMouseLeaveDelay', () => this._mouseLeaveDelay],
            overlayClassName: ['bpsOverlayClassName', () => this._overlayClassName],
            overlayStyle: ['bpsOverlayStyle', () => this._overlayStyle],
            arrowPointAtCenter: ['bpsArrowPointAtCenter', () => this.arrowPointAtCenter],
            ...this.getProxyPropertyMap()
        };
        (keys || Object.keys(mappingProperties).filter(key => !key.startsWith('directive'))).forEach((property) => {
            if (mappingProperties[property]) {
                const [name, valueFn] = mappingProperties[property];
                this.updateComponentValue(name, valueFn());
            }
        });
        this.component?.updateByDirective();
    }
    initProperties() {
        this.updatePropertiesByKeys();
    }
    updateComponentValue(key, value) {
        if (typeof value !== 'undefined') {
            // @ts-ignore
            this.component[key] = value;
        }
    }
    delayEnterLeave(isOrigin, isEnter, delay = -1) {
        if (this.delayTimer) {
            this.clearTogglingTimer();
        }
        else if (delay > 0) {
            this.delayTimer = setTimeout(() => {
                this.delayTimer = undefined;
                isEnter ? this.show() : this.hide();
            }, delay * 1000);
        }
        else {
            // `isOrigin` is used due to the tooltip will not hide immediately
            // (may caused by the fade-out animation).
            isEnter && isOrigin ? this.show() : this.hide();
        }
    }
    removeTriggerListeners() {
        this.triggerDisposables.forEach(dispose => dispose());
        this.triggerDisposables.length = 0;
    }
    clearTogglingTimer() {
        if (this.delayTimer) {
            clearTimeout(this.delayTimer);
            this.delayTimer = undefined;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTooltipBaseDirective, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Renderer2 }, { token: i1$1.NzNoAnimationDirective }, { token: i2$3.NzConfigService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzTooltipBaseDirective, usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTooltipBaseDirective, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1$1.NzNoAnimationDirective }, { type: i2$3.NzConfigService }]; } });
// eslint-disable-next-line @angular-eslint/directive-class-suffix
class NzTooltipBaseComponent {
    set bpsVisible(value) {
        const visible = toBoolean(value);
        if (this._visible !== visible) {
            this._visible = visible;
            this.bpsVisibleChange.next(visible);
        }
    }
    get bpsVisible() {
        return this._visible;
    }
    set bpsTrigger(value) {
        this._trigger = value;
    }
    get bpsTrigger() {
        return this._trigger;
    }
    set bpsPlacement(value) {
        const preferredPosition = value.map(placement => POSITION_MAP[placement]);
        this._positions = [...preferredPosition, ...DEFAULT_TOOLTIP_POSITIONS];
    }
    constructor(cdr, directionality, noAnimation) {
        this.cdr = cdr;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.bpsTitle = null;
        this.bpsContent = null;
        this.bpsArrowPointAtCenter = false;
        this.bpsOverlayStyle = {};
        this.bpsBackdrop = false;
        this.bpsVisibleChange = new Subject();
        this._visible = false;
        this._trigger = 'hover';
        this.preferredPlacement = 'top';
        this.dir = 'ltr';
        this._classMap = {};
        this._prefix = 'ant-tooltip';
        this._positions = [...DEFAULT_TOOLTIP_POSITIONS];
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.bpsVisibleChange.complete();
        this.destroy$.next();
        this.destroy$.complete();
    }
    show() {
        if (this.bpsVisible) {
            return;
        }
        if (!this.isEmpty()) {
            this.bpsVisible = true;
            this.bpsVisibleChange.next(true);
            this.cdr.detectChanges();
        }
        // for ltr for overlay to display tooltip in correct placement in rtl direction.
        if (this.origin && this.overlay && this.overlay.overlayRef && this.overlay.overlayRef.getDirection() === 'rtl') {
            this.overlay.overlayRef.setDirection('ltr');
        }
    }
    hide() {
        if (!this.bpsVisible) {
            return;
        }
        this.bpsVisible = false;
        this.bpsVisibleChange.next(false);
        this.cdr.detectChanges();
    }
    updateByDirective() {
        this.updateStyles();
        this.cdr.detectChanges();
        Promise.resolve().then(() => {
            this.updatePosition();
            this.updateVisibilityByTitle();
        });
    }
    /**
     * Force the component to update its position.
     */
    updatePosition() {
        if (this.origin && this.overlay && this.overlay.overlayRef) {
            this.overlay.overlayRef.updatePosition();
        }
    }
    onPositionChange(position) {
        this.preferredPlacement = getPlacementName(position);
        this.updateStyles();
        // We have to trigger immediate change detection or the element would blink.
        this.cdr.detectChanges();
    }
    setOverlayOrigin(origin) {
        this.origin = origin;
        this.cdr.markForCheck();
    }
    onClickOutside(event) {
        if (!this.origin.nativeElement.contains(event.target) && this.bpsTrigger !== null) {
            this.hide();
        }
    }
    /**
     * Hide the component while the content is empty.
     */
    updateVisibilityByTitle() {
        if (this.isEmpty()) {
            this.hide();
        }
    }
    updateStyles() {
        this._classMap = {
            [this.bpsOverlayClassName]: true,
            [`${this._prefix}-placement-${this.preferredPlacement}`]: true
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTooltipBaseComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }, { token: i1$1.NzNoAnimationDirective }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzTooltipBaseComponent, viewQueries: [{ propertyName: "overlay", first: true, predicate: ["overlay"], descendants: true }], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTooltipBaseComponent, decorators: [{
            type: Directive
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1$1.NzNoAnimationDirective }]; }, propDecorators: { overlay: [{
                type: ViewChild,
                args: ['overlay', { static: false }]
            }] } });
function isTooltipEmpty(value) {
    return value instanceof TemplateRef ? false : value === '' || !isNotNil$1(value);
}

class BpsTooltipDirective extends NzTooltipBaseDirective {
    constructor(elementRef, hostView, resolver, renderer, noAnimation) {
        super(elementRef, hostView, resolver, renderer, noAnimation);
        this.titleContext = null;
        this.trigger = 'hover';
        this.placement = 'top';
        this.popoverType = 'variation_8a';
        this.tooltipType = 'variation_8a';
        this.tooltipDisabled = false;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentRef = this.hostView.createComponent(BpsToolTipComponent);
    }
    getProxyPropertyMap() {
        return {
            ...super.getProxyPropertyMap(),
            bpsTooltipColor: ['bpsColor', () => this.bpsTooltipColor],
            bpsTooltipTitleContext: ['bpsTitleContext', () => this.titleContext]
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTooltipDirective, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Renderer2 }, { token: i1$1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsTooltipDirective, selector: "[bps-tooltip]", inputs: { title: ["bpsTooltipTitle", "title"], titleContext: ["bpsTooltipTitleContext", "titleContext"], directiveTitle: ["bps-tooltip", "directiveTitle"], trigger: ["bpsTooltipTrigger", "trigger"], placement: ["bpsTooltipPlacement", "placement"], origin: ["bpsTooltipOrigin", "origin"], visible: ["bpsTooltipVisible", "visible"], mouseEnterDelay: ["bpsTooltipMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["bpsTooltipMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["bpsTooltipOverlayClassName", "overlayClassName"], overlayStyle: ["bpsTooltipOverlayStyle", "overlayStyle"], arrowPointAtCenter: ["bpsTooltipArrowPointAtCenter", "arrowPointAtCenter"], bpsTooltipColor: "bpsTooltipColor", popoverType: ["bpsPopoverType", "popoverType"], tooltipType: ["bpsTooltipType", "tooltipType"], tooltipDisabled: ["bpsTooltipDisabled", "tooltipDisabled"] }, outputs: { visibleChange: "bpsTooltipVisibleChange" }, host: { properties: { "class.ant-tooltip-open": "visible", "class.bps-tooltip-disabled": "tooltipDisabled" } }, exportAs: ["bpsTooltip"], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    InputBoolean()
], BpsTooltipDirective.prototype, "tooltipDisabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTooltipDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-tooltip]',
                    exportAs: 'bpsTooltip',
                    host: {
                        '[class.ant-tooltip-open]': 'visible',
                        '[class.bps-tooltip-disabled]': 'tooltipDisabled'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1$1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { title: [{
                type: Input,
                args: ['bpsTooltipTitle']
            }], titleContext: [{
                type: Input,
                args: ['bpsTooltipTitleContext']
            }], directiveTitle: [{
                type: Input,
                args: ['bps-tooltip']
            }], trigger: [{
                type: Input,
                args: ['bpsTooltipTrigger']
            }], placement: [{
                type: Input,
                args: ['bpsTooltipPlacement']
            }], origin: [{
                type: Input,
                args: ['bpsTooltipOrigin']
            }], visible: [{
                type: Input,
                args: ['bpsTooltipVisible']
            }], mouseEnterDelay: [{
                type: Input,
                args: ['bpsTooltipMouseEnterDelay']
            }], mouseLeaveDelay: [{
                type: Input,
                args: ['bpsTooltipMouseLeaveDelay']
            }], overlayClassName: [{
                type: Input,
                args: ['bpsTooltipOverlayClassName']
            }], overlayStyle: [{
                type: Input,
                args: ['bpsTooltipOverlayStyle']
            }], arrowPointAtCenter: [{
                type: Input,
                args: ['bpsTooltipArrowPointAtCenter']
            }], bpsTooltipColor: [{
                type: Input
            }], popoverType: [{
                type: Input,
                args: ['bpsPopoverType']
            }], tooltipType: [{
                type: Input,
                args: ['bpsTooltipType']
            }], tooltipDisabled: [{
                type: Input,
                args: ['bpsTooltipDisabled']
            }], visibleChange: [{
                type: Output,
                args: ['bpsTooltipVisibleChange']
            }] } });
class BpsToolTipComponent extends NzTooltipBaseComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this.bpsTitle = null;
        this.bpsTooltipType = 'variation_8a';
        this.bpsPopoverType = 'variation_8a';
        this.bpsTooltipDisabled = false;
        this.bpsTitleContext = null;
        this._contentStyleMap = {};
    }
    isEmpty() {
        return isTooltipEmpty(this.bpsTitle);
    }
    updateStyles() {
        const isColorPreset = this.bpsColor && isPresetColor(this.bpsColor);
        this._classMap = {
            [this.bpsOverlayClassName]: true,
            [`${this._prefix}-placement-${this.preferredPlacement}`]: true,
            [`${this._prefix}-${this.bpsColor}`]: isColorPreset
        };
        this._contentStyleMap = {
            backgroundColor: !!this.bpsColor && !isColorPreset ? this.bpsColor : null
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsToolTipComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }, { token: i1$1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsToolTipComponent, selector: "bps-tooltip", exportAs: ["bpsTooltipComponent"], usesInheritance: true, ngImport: i0, template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="bpsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [class.ant-tooltip-rtl]="dir === 'rtl'"
        [class.bps-tooltip-disabled]="bpsTooltipDisabled"
        [ngClass]="_classMap"
        [ngStyle]="bpsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content bps-tooltip-arrow-{{bpsTooltipType}}" [ngStyle]="_contentStyleMap"></span>
          </div>
          <div class="ant-tooltip-inner bps-tooltip-inner-{{bpsTooltipType}}" [ngStyle]="_contentStyleMap">
            <ng-container *nzStringTemplateOutlet="bpsTitle; context: bpsTitleContext">{{ bpsTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `, isInline: true, styles: [".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;padding:2px 10px!important;text-align:center!important;border-radius:6px!important}.ant-tooltip-arrow-content:before{background:transparent}.ant-tooltip-arrow{width:17px;height:17px}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8a:before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8b:before{background-color:#7bc053!important}.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9a:before{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b:before{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10:before,.bps-tooltip-arrow-variation_11:before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:solid 1px #666666!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i2$4.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i1$1.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "directive", type: i6.NzConnectedOverlayDirective, selector: "[cdkConnectedOverlay][nzConnectedOverlay]", inputs: ["nzArrowPointAtCenter"], exportAs: ["nzConnectedOverlay"] }], animations: [zoomBigMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsToolTipComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-tooltip', exportAs: 'bpsTooltipComponent', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [zoomBigMotion], template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="bpsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-tooltip"
        [class.ant-tooltip-rtl]="dir === 'rtl'"
        [class.bps-tooltip-disabled]="bpsTooltipDisabled"
        [ngClass]="_classMap"
        [ngStyle]="bpsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-tooltip-content">
          <div class="ant-tooltip-arrow">
            <span class="ant-tooltip-arrow-content bps-tooltip-arrow-{{bpsTooltipType}}" [ngStyle]="_contentStyleMap"></span>
          </div>
          <div class="ant-tooltip-inner bps-tooltip-inner-{{bpsTooltipType}}" [ngStyle]="_contentStyleMap">
            <ng-container *nzStringTemplateOutlet="bpsTitle; context: bpsTitleContext">{{ bpsTitle }}</ng-container>
          </div>
        </div>
      </div>
    </ng-template>
  `, preserveWhitespaces: false, styles: [".ant-tooltip-inner{min-width:70px!important;height:22px!important;min-height:22px!important;font-size:11px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;padding:2px 10px!important;text-align:center!important;border-radius:6px!important}.ant-tooltip-arrow-content:before{background:transparent}.ant-tooltip-arrow{width:17px;height:17px}.bps-tooltip-inner-variation_8a{background-color:#00a2d1!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8a:before{background-color:#00a2d1!important}.bps-tooltip-inner-variation_8b{background-color:#7bc053!important;box-shadow:0 3px 12px #000000e6!important}.bps-tooltip-arrow-variation_8b:before{background-color:#7bc053!important}.bps-tooltip-inner-variation_9a{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9a:before{background-color:#00a2d1!important;box-shadow:none!important}.bps-tooltip-inner-variation_9b{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-arrow-variation_9b:before{background-color:#7bc053!important;box-shadow:none!important}.bps-tooltip-inner-variation_10,.bps-tooltip-inner-variation_11{min-width:60px!important;box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#363636}.bps-tooltip-inner-variation_11{box-shadow:none!important}.bps-tooltip-arrow-variation_10:before,.bps-tooltip-arrow-variation_11:before{content:unset!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_8a,.bps-tooltip-disabled .bps-tooltip-inner-variation_8b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_8a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_8b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_9a,.bps-tooltip-disabled .bps-tooltip-inner-variation_9b{background-color:#363636!important;color:#666!important}.bps-tooltip-disabled .bps-tooltip-arrow-variation_9a:before,.bps-tooltip-disabled .bps-tooltip-arrow-variation_9b:before{background-color:#363636!important}.bps-tooltip-disabled .bps-tooltip-inner-variation_10,.bps-tooltip-disabled .bps-tooltip-inner-variation_11{background-color:#363636!important;color:#666!important;border:solid 1px #666666!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1$1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; } });

const NZ_CONFIG_COMPONENT_NAME$4 = 'button';
class BpsButtonComponent {
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289 */
    setClassMap() {
        const prefixCls = 'ant-btn';
        const sizeMap = { large: 'lg', small: 'sm' };
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`${prefixCls}-${this.bpsType}`]: this.bpsType,
            [`${prefixCls}-${this.bpsShape}`]: this.bpsShape,
            [`${prefixCls}-${sizeMap[this.bpsSize]}`]: sizeMap[this.bpsSize],
            [`${prefixCls}-loading`]: this.bpsLoading,
            [`${prefixCls}-icon-only`]: this.iconOnly && !this.bpsSearch && !this.isInDropdown,
            [`${prefixCls}-background-ghost`]: this.bpsGhost,
            [`${prefixCls}-block`]: this.bpsBlock,
            [`ant-input-search-button`]: this.bpsSearch
        });
    }
    updateIconDisplay(value) {
        if (this.iconElement) {
            this.renderer.setStyle(this.iconElement, 'display', value ? 'none' : 'inline-block');
        }
    }
    checkContent() {
        const hasIcon = this.listOfIconElement && this.listOfIconElement.length;
        if (hasIcon) {
            this.moveIcon();
        }
        this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
        /** https://github.com/angular/angular/issues/12530 **/
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.setStyle(this.contentElement.nativeElement, 'display', 'none');
            this.iconOnly = !!hasIcon;
        }
        else {
            this.renderer.removeStyle(this.contentElement.nativeElement, 'display');
            this.iconOnly = false;
        }
        this.setClassMap();
        this.updateIconDisplay(this.bpsLoading);
        if (!this.cdr.destroyed) {
            this.cdr.detectChanges();
        }
    }
    moveIcon() {
        if (this.listOfIconElement && this.listOfIconElement.length) {
            const firstChildElement = findFirstNotEmptyNode(this.contentElement.nativeElement);
            const lastChildElement = findLastNotEmptyNode(this.contentElement.nativeElement);
            if (firstChildElement && firstChildElement === this.listOfIconElement.first.nativeElement) {
                this.renderer.insertBefore(this.el, firstChildElement, this.contentElement.nativeElement);
                this.iconElement = firstChildElement;
            }
            else if (lastChildElement && lastChildElement === this.listOfIconElement.last.nativeElement) {
                this.renderer.appendChild(this.el, lastChildElement);
            }
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    handleClick(e) {
        if (this.bpsType !== 'editable') {
            return;
        }
        if (this.showEditionMode && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    }
    endEditMode($event) {
        this.preventDefault($event);
        if ($event.key === ('Enter' || 'enter')) {
            this.showEditionMode = false;
            this.bpsValueChange.emit(this.bpsValue);
        }
    }
    onClick(event) {
        if (this.bpsType !== 'editable') {
            return;
        }
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.isSelected = !this.isSelected;
                this.isSelectedChange.emit(this.isSelected);
            }
            this.clicks = 0;
        }, 300);
    }
    startEditionMode($event) {
        $event.stopImmediatePropagation();
        $event.stopPropagation();
        if (!this.bpsEditionEnabled)
            return;
        this.showEditionMode = true;
        this.cdr.detectChanges();
        this.inputElement.nativeElement.focus();
        this.inputElement.nativeElement.select();
    }
    constructor(elementRef, cdr, renderer, contentObserver, nzUpdateHostClassService, ngZone, nzConfigService, waveConfig, animationType) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.contentObserver = contentObserver;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.ngZone = ngZone;
        this.nzConfigService = nzConfigService;
        this.waveConfig = waveConfig;
        this.animationType = animationType;
        this.isSelected = false;
        this.isSelectedChange = new EventEmitter();
        this.showEditionMode = false;
        /*@HostBinding('attr.nz-wave') nzWave = new NzWaveDirective(
          this.ngZone,
          this.elementRef,
          this.waveConfig,
          this.animationType
        );*/
        this.bpsBlock = false;
        this.bpsGhost = false;
        this.bpsSearch = false;
        this.bpsComputed = false;
        this.bpsLoading = false;
        this.bpsEditionEnabled = true;
        this.bpsType = 'default';
        this.bpsValue = '';
        this.bpsComputedTooltipType = 'variation_11';
        this.bpsComputedTooltipPlacement = 'top';
        this.bpsComputedTooltipTitle = null;
        this.bpsEditTooltipType = 'variation_11';
        this.bpsEditTooltipPlacement = 'top';
        this.bpsEditTooltipTitle = null;
        this.bpsValueChange = new EventEmitter();
        this.bpsShape = null;
        this.el = this.elementRef.nativeElement;
        this.isInDropdown = false;
        this.iconOnly = false;
        this.destroy$ = new Subject();
        this.clicks = 0;
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_COMPONENT_NAME$4)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.cdr.markForCheck();
        });
    }
    ngAfterContentInit() {
        if (!this.contentElement) {
            return;
        }
        this.contentObserver
            .observe(this.contentElement)
            .pipe(startWith(true), takeUntil(this.destroy$))
            .subscribe(() => {
            // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3079
            Promise.resolve().then(() => this.checkContent());
        });
    }
    ngOnInit() {
        this.setClassMap();
        //this.nzWave.ngOnInit();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        //this.nzWave.ngOnDestroy();
    }
    ngOnChanges(changes) {
        if (changes.bpsBlock ||
            changes.bpsGhost ||
            changes.bpsSearch ||
            changes.bpsType ||
            changes.bpsShape ||
            changes.bpsSize ||
            changes.bpsLoading) {
            this.setClassMap();
        }
        if (changes.bpsLoading) {
            this.updateIconDisplay(this.bpsLoading);
        }
        /*if (changes.bpsType && changes.bpsType.currentValue === 'link') {
          this.nzWave.disable();
        } else {
          this.nzWave.enable();
        }*/
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsButtonComponent, deps: [{ token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i1$2.ContentObserver }, { token: NzUpdateHostClassService }, { token: i0.NgZone }, { token: NzConfigService }, { token: NZ_WAVE_GLOBAL_CONFIG, optional: true }, { token: ANIMATION_MODULE_TYPE, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsButtonComponent, selector: "[bps-button]", inputs: { isSelected: "isSelected", bpsBlock: "bpsBlock", bpsGhost: "bpsGhost", bpsSearch: "bpsSearch", bpsComputed: "bpsComputed", bpsLoading: "bpsLoading", bpsEditionEnabled: "bpsEditionEnabled", bpsType: "bpsType", bpsValue: "bpsValue", bpsComputedTooltipType: "bpsComputedTooltipType", bpsComputedTooltipPlacement: "bpsComputedTooltipPlacement", bpsComputedTooltipTitle: "bpsComputedTooltipTitle", bpsEditTooltipType: "bpsEditTooltipType", bpsEditTooltipPlacement: "bpsEditTooltipPlacement", bpsEditTooltipTitle: "bpsEditTooltipTitle", bpsShape: "bpsShape", bpsSize: "bpsSize" }, outputs: { isSelectedChange: "isSelectedChange", bpsValueChange: "bpsValueChange" }, host: { listeners: { "window:mouseup": "handleClick($event)", "click": "onClick($event)" }, properties: { "class.bps-button-editable-selected": "isSelected", "class.bps-button-editable-onedition": "showEditionMode" } }, providers: [NzUpdateHostClassService], queries: [{ propertyName: "listOfIconElement", predicate: NzIconDirective, read: ElementRef }], viewQueries: [{ propertyName: "contentElement", first: true, predicate: ["contentElement"], descendants: true, static: true }, { propertyName: "inputElement", first: true, predicate: BpsInputDirective, descendants: true, read: ElementRef, static: true }], exportAs: ["bpsButton"], usesOnChanges: true, ngImport: i0, template: "<i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading\"></i>\r\n<span *ngIf=\"bpsType !== 'editable'\" class=\"bps-custom-content\" #contentElement><ng-content></ng-content></span>\r\n\r\n<span *ngIf=\"bpsType === 'editable' && !showEditionMode\" class=\"bps-custom-content\" #contentElement>{{bpsValue}}</span>\r\n<input #inputElement bps-input\r\n       autofocus\r\n       (focus)=\"$event.target.select()\"\r\n       [class.bps-invisible]=\"!showEditionMode\"\r\n       (click)=\"preventDefault($event)\"\r\n       (dblclick)=\"preventDefault($event)\"\r\n       (keyup)=\"endEditMode($event)\"\r\n       class=\"bps-button-editable-input\"\r\n       [(ngModel)]=\"bpsValue\"\r\n/>\r\n\r\n<div class=\"bps-editable-btn-edit-icon-wrapper\"\r\n      [class.bps-editable-btn-edit-icon-wrapper-disabled]=\"!bpsEditionEnabled\"\r\n      (click)=\"startEditionMode($event)\"\r\n      bps-tooltip\r\n      [bpsTooltipType]=\"bpsEditTooltipType\"\r\n      [bpsTooltipTitle]=\"bpsEditTooltipTitle ? bpsEditTooltipTitle : 'Edit'\"\r\n      [bpsTooltipPlacement]=\"bpsEditTooltipPlacement\"\r\n      *ngIf=\"bpsType === 'editable' && !showEditionMode\">\r\n  <div class=\"bps-editable-btn-edit-icon\"></div>\r\n</div>\r\n\r\n<div  class=\"bps-computed-icon\"\r\n      bps-tooltip\r\n      [bpsTooltipType]=\"bpsComputedTooltipType\"\r\n      [bpsTooltipTitle]=\"bpsComputedTooltipTitle ? bpsComputedTooltipTitle : bpsComputed ? 'Computed' : 'Not Computed'\"\r\n      [bpsTooltipPlacement]=\"bpsComputedTooltipPlacement\"\r\n      *ngIf=\"bpsType === 'editable'\">\r\n  <img *ngIf=\"bpsComputed\"     \r\n       src=\"/assets/bps-icons/sps_green_dot_icon_computed.svg\" />\r\n  <img *ngIf=\"!bpsComputed\"\r\n       src=\"/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg\" />\r\n</div>\r\n", styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:solid 2px #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.bps-editable-btn-edit-icon-wrapper-disabled{cursor:initial!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1:focus,.ant-btn-variation-1.active{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:active{color:#00a2d1!important;border:solid 2px #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:solid 2px #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2:focus,.ant-btn-variation-2.active{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:active{color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-variation-7,.ant-btn-variation-8,.ant-btn-editable,.ant-btn-variation-6{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-editable{width:100%;text-align:left!important;font-size:12px!important;height:20px!important;border:1px solid #363636!important;padding-top:0}.ant-btn-editable .bps-custom-content{position:relative;top:1px;max-width:calc(100% - 25px);white-space:nowrap;overflow:hidden;display:inline-block!important;text-overflow:ellipsis;margin:unset!important}.ant-btn-editable.bps-button-editable-selected .bps-custom-content{max-width:calc(100% - 35px)}.bps-computed-icon{position:relative;float:right;margin-right:5px!important;top:-1px}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-variation-3[disabled],.ant-btn-variation-4[disabled],.ant-btn-variation-5[disabled],.ant-btn-variation-6[disabled],.ant-btn-variation-7[disabled],.ant-btn-variation-8[disabled],.ant-btn-editable[disabled],.ant-btn-variation-9[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-8[disabled]:hover,.ant-btn-editable[disabled]:hover,.ant-btn-variation-9[disabled]:hover,.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-3[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover{border:1px solid #363636!important}.ant-btn-variation-3:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover,.ant-btn-variation-4:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-editable:not(.bps-button-editable-onedition):hover{background-color:#474747!important;border:1px solid #262626}.ant-btn-editable[disabled]:hover{background-color:#363636!important;border:1px solid #363636!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3:focus,.ant-btn-variation-4:focus,.ant-btn-variation-5:focus,.ant-btn-variation-3.active,.ant-btn-variation-5.active,.ant-btn-variation-4.active{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9:focus,.ant-btn-variation-9.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7:focus,.ant-btn-variation-7.active{background-color:#363636!important}.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6:focus,.ant-btn-variation-6.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8:focus,.ant-btn-variation-8.active{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:active,.ant-btn-variation-5:active,.ant-btn-variation-4:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:active,.ant-btn-variation-8:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-11,.ant-btn-variation-13,.ant-btn-variation-13:hover,.ant-btn-variation-11:hover,.ant-btn-variation-10:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11:hover,.ant-btn-variation-11{background-color:#253d47!important}.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-13[disabled],.ant-btn-variation-15[disabled],.ant-btn-variation-16[disabled],.ant-btn-variation-20[disabled],.ant-btn-variation-14[disabled],.ant-btn-variation-10[disabled]{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-16[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-10[disabled] svg{opacity:.2!important}.ant-btn-variation-10:focus,.ant-btn-variation-13:focus,.ant-btn-variation-13.active,.ant-btn-variation-10.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-11:active{background-color:#00a2d1!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:solid 2px #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled]:hover svg,.ant-btn-variation-12[disabled] svg{opacity:.2!important}.ant-btn-variation-12:focus,.ant-btn-variation-12.active{background-color:#00a2d1!important}.ant-btn-variation-12:active{background-color:#253d47!important}.ant-btn-variation-15,.ant-btn-variation-16,.ant-btn-variation-14{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14:focus,.ant-btn-variation-14.active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16:focus,.ant-btn-variation-16.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15:focus,.ant-btn-variation-15.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:active{background-color:#00a2d1!important}.ant-btn-variation-10:active,.ant-btn-variation-15:active,.ant-btn-variation-16:active,.ant-btn-variation-13:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-17:hover,.ant-btn-variation-17{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:solid 2px #ffffff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17:focus,.ant-btn-variation-17.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:active{background-color:#888!important}.ant-btn-variation-17[disabled]:hover,.ant-btn-variation-17[disabled]{border:solid 2px #666666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18:hover,.ant-btn-variation-19:hover,.ant-btn-variation-19,.ant-btn-variation-18{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19:hover,.ant-btn-variation-19{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18:focus,.ant-btn-variation-18.active{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:active,.ant-btn-variation-19:active{background-color:#262626!important}.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-18[disabled]{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-18[disabled] svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20:focus,.ant-btn-variation-20.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:active{background-color:#363636!important;border:none!important}.bps-button-editable-selected:hover,.bps-button-editable-selected{border:solid 1px #00a2d1!important}.bps-button-editable-input{max-width:calc(100% - 25px)!important;display:inline-block;background-color:transparent!important;position:relative;top:-2px;border:none!important;padding:0!important;font-size:12px!important;border-radius:unset!important;overflow:hidden;line-height:1.36!important;margin:unset}.bps-invisible{display:none}.bps-editable-btn-edit-icon-wrapper{position:absolute!important;top:1px;right:33px;transform:scale(.85)}.bps-editable-btn-edit-icon:after{content:\"\"}.bps-button-editable-selected .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}.bps-button-editable-selected .bps-editable-btn-edit-icon-wrapper:not(.bps-editable-btn-edit-icon-wrapper-disabled):hover .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)}.ant-btn.disabled,.ant-btn[disabled]{cursor:initial!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: BpsTooltipDirective, selector: "[bps-tooltip]", inputs: ["bpsTooltipTitle", "bpsTooltipTitleContext", "bps-tooltip", "bpsTooltipTrigger", "bpsTooltipPlacement", "bpsTooltipOrigin", "bpsTooltipVisible", "bpsTooltipMouseEnterDelay", "bpsTooltipMouseLeaveDelay", "bpsTooltipOverlayClassName", "bpsTooltipOverlayStyle", "bpsTooltipArrowPointAtCenter", "bpsTooltipColor", "bpsPopoverType", "bpsTooltipType", "bpsTooltipDisabled"], outputs: ["bpsTooltipVisibleChange"], exportAs: ["bpsTooltip"] }, { kind: "directive", type: BpsInputDirective, selector: "input[bps-input],textarea[bps-input]", inputs: ["borderless", "size", "nzStepperless", "nzStatus", "opened", "disabled"], exportAs: ["bpsInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "isSelected", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsBlock", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsGhost", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsSearch", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsComputed", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsButtonComponent.prototype, "bpsEditionEnabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME$4, 'default')
], BpsButtonComponent.prototype, "bpsSize", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: '[bps-button]', exportAs: 'bpsButton', providers: [NzUpdateHostClassService], preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
                        '[class.bps-button-editable-selected]': 'isSelected',
                        '[class.bps-button-editable-onedition]': 'showEditionMode'
                    }, template: "<i nz-icon nzType=\"loading\" *ngIf=\"bpsLoading\"></i>\r\n<span *ngIf=\"bpsType !== 'editable'\" class=\"bps-custom-content\" #contentElement><ng-content></ng-content></span>\r\n\r\n<span *ngIf=\"bpsType === 'editable' && !showEditionMode\" class=\"bps-custom-content\" #contentElement>{{bpsValue}}</span>\r\n<input #inputElement bps-input\r\n       autofocus\r\n       (focus)=\"$event.target.select()\"\r\n       [class.bps-invisible]=\"!showEditionMode\"\r\n       (click)=\"preventDefault($event)\"\r\n       (dblclick)=\"preventDefault($event)\"\r\n       (keyup)=\"endEditMode($event)\"\r\n       class=\"bps-button-editable-input\"\r\n       [(ngModel)]=\"bpsValue\"\r\n/>\r\n\r\n<div class=\"bps-editable-btn-edit-icon-wrapper\"\r\n      [class.bps-editable-btn-edit-icon-wrapper-disabled]=\"!bpsEditionEnabled\"\r\n      (click)=\"startEditionMode($event)\"\r\n      bps-tooltip\r\n      [bpsTooltipType]=\"bpsEditTooltipType\"\r\n      [bpsTooltipTitle]=\"bpsEditTooltipTitle ? bpsEditTooltipTitle : 'Edit'\"\r\n      [bpsTooltipPlacement]=\"bpsEditTooltipPlacement\"\r\n      *ngIf=\"bpsType === 'editable' && !showEditionMode\">\r\n  <div class=\"bps-editable-btn-edit-icon\"></div>\r\n</div>\r\n\r\n<div  class=\"bps-computed-icon\"\r\n      bps-tooltip\r\n      [bpsTooltipType]=\"bpsComputedTooltipType\"\r\n      [bpsTooltipTitle]=\"bpsComputedTooltipTitle ? bpsComputedTooltipTitle : bpsComputed ? 'Computed' : 'Not Computed'\"\r\n      [bpsTooltipPlacement]=\"bpsComputedTooltipPlacement\"\r\n      *ngIf=\"bpsType === 'editable'\">\r\n  <img *ngIf=\"bpsComputed\"     \r\n       src=\"/assets/bps-icons/sps_green_dot_icon_computed.svg\" />\r\n  <img *ngIf=\"!bpsComputed\"\r\n       src=\"/assets/bps-icons/sps_grey_dot_icon_notcomputed.svg\" />\r\n</div>\r\n", styles: [".ant-btn-variation-1{height:40px!important;border-radius:8px!important;border:solid 2px #00a2d1!important;background-color:transparent!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#00a2d1!important}.bps-editable-btn-edit-icon-wrapper-disabled{cursor:initial!important}.ant-btn-variation-1[disabled],.ant-btn-variation-2[disabled],.ant-btn-variation-2[disabled]:hover{border-color:#474747!important;color:#474747!important}.ant-btn-variation-1:focus,.ant-btn-variation-1.active{border-color:#445c67!important;color:#445c67!important}.ant-btn-variation-1:active{color:#00a2d1!important;border:solid 2px #00a2d1!important}.ant-btn-variation-2{height:40px!important;border-radius:8px!important;border:solid 2px #474747!important;background-color:#363636!important;font-size:12px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.58!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important}.ant-btn-variation-2[disabled]{background-color:transparent!important}.ant-btn-variation-2:hover{border-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-2:focus,.ant-btn-variation-2.active{border-color:#445c67!important;color:#fff!important}.ant-btn-variation-2:active{color:#fff!important;border-color:#474747!important}.ant-btn-variation-3,.ant-btn-variation-4,.ant-btn-variation-5{height:30px!important;border-radius:8px!important;background-color:#00a2d1!important;color:#fff!important;font-size:10px!important;font-weight:700!important;border:none!important;font-stretch:normal!important;font-style:normal!important;line-height:1.2;letter-spacing:.3px!important;text-align:center!important}.ant-btn-variation-4{height:28px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important}.ant-btn-variation-5{height:22px!important;border-radius:11px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important}.ant-btn-variation-7,.ant-btn-variation-8,.ant-btn-editable,.ant-btn-variation-6{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:11px!important;background-color:#363636!important;border:none!important}.ant-btn-editable{width:100%;text-align:left!important;font-size:12px!important;height:20px!important;border:1px solid #363636!important;padding-top:0}.ant-btn-editable .bps-custom-content{position:relative;top:1px;max-width:calc(100% - 25px);white-space:nowrap;overflow:hidden;display:inline-block!important;text-overflow:ellipsis;margin:unset!important}.ant-btn-editable.bps-button-editable-selected .bps-custom-content{max-width:calc(100% - 35px)}.bps-computed-icon{position:relative;float:right;margin-right:5px!important;top:-1px}.ant-btn-variation-9,.ant-btn-variation-9:hover{height:22px!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:8px!important;background-color:#253d47!important;border:none!important}.ant-btn-variation-3[disabled],.ant-btn-variation-4[disabled],.ant-btn-variation-5[disabled],.ant-btn-variation-6[disabled],.ant-btn-variation-7[disabled],.ant-btn-variation-8[disabled],.ant-btn-editable[disabled],.ant-btn-variation-9[disabled],.ant-btn-variation-4[disabled]:hover,.ant-btn-variation-8[disabled]:hover,.ant-btn-editable[disabled]:hover,.ant-btn-variation-9[disabled]:hover,.ant-btn-variation-5[disabled]:hover,.ant-btn-variation-7[disabled]:hover,.ant-btn-variation-6[disabled]:hover,.ant-btn-variation-3[disabled]:hover{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-editable[disabled],.ant-btn-editable[disabled]:hover{border:1px solid #363636!important}.ant-btn-variation-3:hover,.ant-btn-variation-5:hover,.ant-btn-variation-7:hover,.ant-btn-variation-8:hover,.ant-btn-variation-4:hover{background-color:#445c67!important;color:#fff!important}.ant-btn-editable:not(.bps-button-editable-onedition):hover{background-color:#474747!important;border:1px solid #262626}.ant-btn-editable[disabled]:hover{background-color:#363636!important;border:1px solid #363636!important}.ant-btn-variation-6:hover{background-color:#bc0000!important;color:#fff!important}.ant-btn-variation-3:focus,.ant-btn-variation-4:focus,.ant-btn-variation-5:focus,.ant-btn-variation-3.active,.ant-btn-variation-5.active,.ant-btn-variation-4.active{background-color:#445c67!important;color:#fff!important}.ant-btn-variation-9:focus,.ant-btn-variation-9.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-7:focus,.ant-btn-variation-7.active{background-color:#363636!important}.ant-btn-variation-7:active{background-color:#00a2d1!important}.ant-btn-variation-6:focus,.ant-btn-variation-6.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-8:focus,.ant-btn-variation-8.active{background-color:#253d47!important;color:#999!important}.ant-btn-variation-3:active,.ant-btn-variation-5:active,.ant-btn-variation-4:active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-6:active,.ant-btn-variation-8:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-9:active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-10,.ant-btn-variation-11,.ant-btn-variation-13,.ant-btn-variation-13:hover,.ant-btn-variation-11:hover,.ant-btn-variation-10:hover{width:30px!important;height:30px!important;border-radius:8px!important;background-color:#363636!important;border:none!important;padding:0!important;color:#fff!important}.ant-btn-variation-13,.ant-btn-variation-13:hover{border-radius:4px!important;width:22px!important;height:22px!important}.ant-btn-variation-13:hover{background-color:#445c67!important}.ant-btn-variation-11:hover,.ant-btn-variation-11{background-color:#253d47!important}.ant-btn-variation-10[disabled]:hover,.ant-btn-variation-11[disabled]:hover,.ant-btn-variation-13[disabled]:hover,.ant-btn-variation-14[disabled]:hover,.ant-btn-variation-15[disabled]:hover,.ant-btn-variation-16[disabled]:hover,.ant-btn-variation-20[disabled]:hover,.ant-btn-variation-11[disabled],.ant-btn-variation-13[disabled],.ant-btn-variation-15[disabled],.ant-btn-variation-16[disabled],.ant-btn-variation-20[disabled],.ant-btn-variation-14[disabled],.ant-btn-variation-10[disabled]{background-color:#363636!important;border:none!important;color:#666!important}.ant-btn-variation-10[disabled]:hover svg,.ant-btn-variation-15[disabled]:hover svg,.ant-btn-variation-11[disabled]:hover svg,.ant-btn-variation-13[disabled]:hover svg,.ant-btn-variation-14[disabled]:hover svg,.ant-btn-variation-16[disabled]:hover svg,.ant-btn-variation-11[disabled] svg,.ant-btn-variation-15[disabled] svg,.ant-btn-variation-16[disabled] svg,.ant-btn-variation-14[disabled] svg,.ant-btn-variation-13[disabled] svg,.ant-btn-variation-10[disabled] svg{opacity:.2!important}.ant-btn-variation-10:focus,.ant-btn-variation-13:focus,.ant-btn-variation-13.active,.ant-btn-variation-10.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-11:active{background-color:#00a2d1!important;color:#fff!important}.bps-custom-content{display:table!important;margin:0 auto!important}.bps-custom-content svg{display:table-cell!important;vertical-align:middle!important}.ant-btn-variation-12,.ant-btn-variation-12:hover{height:40px;width:40px;background-color:#253d47!important;border-radius:12px!important;border:solid 2px #00a2d1!important;background-clip:content-box!important;padding:5px!important;color:#fff!important}.ant-btn-variation-12:hover{background-color:#445c67!important}.ant-btn-variation-12[disabled],.ant-btn-variation-12[disabled]:hover{background-color:#363636!important;border-color:#666!important;color:#666!important}.ant-btn-variation-12[disabled]:hover svg,.ant-btn-variation-12[disabled] svg{opacity:.2!important}.ant-btn-variation-12:focus,.ant-btn-variation-12.active{background-color:#00a2d1!important}.ant-btn-variation-12:active{background-color:#253d47!important}.ant-btn-variation-15,.ant-btn-variation-16,.ant-btn-variation-14{width:30px!important;height:30px!important;background-color:#00a2d1!important;border-radius:100px!important;border:none!important;color:#fff!important;padding:0!important}.ant-btn-variation-14:hover{color:#fff!important;background-color:#445c67!important;border:none!important}.ant-btn-variation-15{background-color:#363636!important}.ant-btn-variation-15:hover{color:#fff!important;background-color:#bc0000!important;border:none!important}.ant-btn-variation-16{background-color:#363636!important}.ant-btn-variation-16:hover{background-color:#474747!important}.ant-btn-variation-14:focus,.ant-btn-variation-14.active{background-color:#253d47!important;color:#fff!important}.ant-btn-variation-16:focus,.ant-btn-variation-16.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-15:focus,.ant-btn-variation-15.active{background-color:maroon!important;color:#fff!important}.ant-btn-variation-14:active{background-color:#00a2d1!important}.ant-btn-variation-10:active,.ant-btn-variation-15:active,.ant-btn-variation-16:active,.ant-btn-variation-13:active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-17:hover,.ant-btn-variation-17{height:32px!important;width:32px!important;font-size:17px!important;font-weight:500!important;font-stretch:normal!important;font-style:normal!important;line-height:.71!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border:solid 2px #ffffff!important;background-color:#888!important;padding:0!important;border-radius:100px!important}.ant-btn-variation-17:hover{background-color:#666!important;color:#fff!important}.ant-btn-variation-17:focus,.ant-btn-variation-17.active{background-color:#00a2d1!important;color:#fff!important}.ant-btn-variation-17:active{background-color:#888!important}.ant-btn-variation-17[disabled]:hover,.ant-btn-variation-17[disabled]{border:solid 2px #666666!important;background-color:#888!important;color:#666!important}.ant-btn-variation-18:hover,.ant-btn-variation-19:hover,.ant-btn-variation-19,.ant-btn-variation-18{background-color:#262626!important;height:30px!important;width:30px!important;padding:0!important;border:none!important;border-radius:100px!important}.ant-btn-variation-19:hover,.ant-btn-variation-19{height:20px!important;width:20px!important;border-radius:4px!important}.ant-btn-variation-18:hover{background-color:#363636!important;color:#fff!important}.ant-btn-variation-18:focus,.ant-btn-variation-18.active{background-color:#474747!important;color:#fff!important}.ant-btn-variation-18:active,.ant-btn-variation-19:active{background-color:#262626!important}.ant-btn-variation-18[disabled]:hover,.ant-btn-variation-19[disabled]:hover,.ant-btn-variation-19[disabled],.ant-btn-variation-18[disabled]{border:none!important;background-color:#262626!important;color:#666!important}.ant-btn-variation-18[disabled]:hover svg,.ant-btn-variation-19[disabled]:hover svg,.ant-btn-variation-20[disabled]:hover svg,.ant-btn-variation-19[disabled] svg,.ant-btn-variation-20[disabled] svg,.ant-btn-variation-18[disabled] svg{opacity:.2!important}.ant-btn-variation-20,.ant-btn-variation-20:hover{width:25px!important;height:30px!important;background-color:#363636!important;border:none!important;border-radius:100px 0 0 100px!important;color:#fff!important}.ant-btn-variation-20:hover{background-color:#474747!important;color:#fff!important}.ant-btn-variation-20:focus,.ant-btn-variation-20.active{background-color:#363636!important;color:#fff!important}.ant-btn-variation-20:active{background-color:#363636!important;border:none!important}.bps-button-editable-selected:hover,.bps-button-editable-selected{border:solid 1px #00a2d1!important}.bps-button-editable-input{max-width:calc(100% - 25px)!important;display:inline-block;background-color:transparent!important;position:relative;top:-2px;border:none!important;padding:0!important;font-size:12px!important;border-radius:unset!important;overflow:hidden;line-height:1.36!important;margin:unset}.bps-invisible{display:none}.bps-editable-btn-edit-icon-wrapper{position:absolute!important;top:1px;right:33px;transform:scale(.85)}.bps-editable-btn-edit-icon:after{content:\"\"}.bps-button-editable-selected .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}.bps-button-editable-selected .bps-editable-btn-edit-icon-wrapper:not(.bps-editable-btn-edit-icon-wrapper-disabled):hover .bps-editable-btn-edit-icon:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)}.ant-btn.disabled,.ant-btn[disabled]{cursor:initial!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1$2.ContentObserver }, { type: NzUpdateHostClassService }, { type: i0.NgZone }, { type: NzConfigService }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NZ_WAVE_GLOBAL_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [ANIMATION_MODULE_TYPE]
                }] }]; }, propDecorators: { isSelected: [{
                type: Input
            }], isSelectedChange: [{
                type: Output
            }], contentElement: [{
                type: ViewChild,
                args: ['contentElement', { static: true }]
            }], listOfIconElement: [{
                type: ContentChildren,
                args: [NzIconDirective, { read: ElementRef }]
            }], bpsBlock: [{
                type: Input
            }], bpsGhost: [{
                type: Input
            }], bpsSearch: [{
                type: Input
            }], bpsComputed: [{
                type: Input
            }], bpsLoading: [{
                type: Input
            }], bpsEditionEnabled: [{
                type: Input
            }], bpsType: [{
                type: Input
            }], bpsValue: [{
                type: Input
            }], bpsComputedTooltipType: [{
                type: Input
            }], bpsComputedTooltipPlacement: [{
                type: Input
            }], bpsComputedTooltipTitle: [{
                type: Input
            }], bpsEditTooltipType: [{
                type: Input
            }], bpsEditTooltipPlacement: [{
                type: Input
            }], bpsEditTooltipTitle: [{
                type: Input
            }], bpsValueChange: [{
                type: Output
            }], bpsShape: [{
                type: Input
            }], bpsSize: [{
                type: Input
            }], inputElement: [{
                type: ViewChild,
                args: [BpsInputDirective, { static: true, read: ElementRef }]
            }], handleClick: [{
                type: HostListener,
                args: ['window:mouseup', ['$event']]
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }] } });

class BpsButtonGroupComponent {
    get bpsSize() {
        return this._size;
    }
    set bpsSize(value) {
        this._size = value;
        this.setClassMap();
    }
    constructor(nzUpdateHostClassService, elementRef) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.isInDropdown = false;
    }
    setClassMap() {
        const prefixCls = 'ant-btn-group';
        const classMap = {
            [prefixCls]: true,
            [`ant-dropdown-button`]: this.isInDropdown,
            [`${prefixCls}-lg`]: this.bpsSize === 'large',
            [`${prefixCls}-sm`]: this.bpsSize === 'small'
        };
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    }
    ngOnInit() {
        this.setClassMap();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsButtonGroupComponent, deps: [{ token: NzUpdateHostClassService }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsButtonGroupComponent, selector: "bps-button-group", inputs: { bpsSize: "bpsSize" }, providers: [NzUpdateHostClassService], exportAs: ["bpsButtonGroup"], ngImport: i0, template: "<ng-content></ng-content>\r\n", changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsButtonGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-button-group', exportAs: 'bpsButtonGroup', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, providers: [NzUpdateHostClassService], template: "<ng-content></ng-content>\r\n" }]
        }], ctorParameters: function () { return [{ type: NzUpdateHostClassService }, { type: i0.ElementRef }]; }, propDecorators: { bpsSize: [{
                type: Input
            }] } });

const NZ_CONFIG_MODULE_NAME$3 = 'switch';
class BpsSwitchComponent {
    updateValue(value) {
        if (this.isChecked !== value) {
            this.isChecked = value;
            this.onChange(this.isChecked);
        }
    }
    focus() {
        this.focusMonitor.focusVia(this.switchElement?.nativeElement, 'keyboard');
    }
    blur() {
        this.switchElement?.nativeElement.blur();
    }
    constructor(nzConfigService, host, ngZone, cdr, focusMonitor, directionality) {
        this.nzConfigService = nzConfigService;
        this.host = host;
        this.ngZone = ngZone;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME$3;
        this.isChecked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.bpsLoading = false;
        this.bpsDisabled = false;
        this.bpsControl = false;
        this.bpsCheckedChildren = null;
        this.bpsUnCheckedChildren = null;
        this.bpsSize = 'default';
        this.bpsId = null;
        this.bpsDual = false;
        this.bpsDualValues = [];
        this.bpsDualValuesChange = new EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.isNzDisableFirstChange = true;
    }
    ngOnInit() {
        this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.host.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                event.preventDefault();
                if (this.bpsControl || this.bpsDisabled || this.bpsLoading) {
                    return;
                }
                this.ngZone.run(() => {
                    this.updateValue(!this.isChecked);
                    this.cdr.markForCheck();
                });
            });
            if (this.switchElement === null || this.switchElement === undefined)
                return;
            fromEvent(this.switchElement?.nativeElement, 'keydown')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                if (this.bpsControl || this.bpsDisabled || this.bpsLoading) {
                    return;
                }
                const { keyCode } = event;
                if (keyCode !== LEFT_ARROW && keyCode !== RIGHT_ARROW && keyCode !== SPACE && keyCode !== ENTER) {
                    return;
                }
                event.preventDefault();
                this.ngZone.run(() => {
                    if (keyCode === LEFT_ARROW) {
                        this.updateValue(false);
                    }
                    else if (keyCode === RIGHT_ARROW) {
                        this.updateValue(true);
                    }
                    else if (keyCode === SPACE || keyCode === ENTER) {
                        this.updateValue(!this.isChecked);
                    }
                    this.cdr.markForCheck();
                });
            });
        });
    }
    ngAfterViewInit() {
        if (this.switchElement === null || this.switchElement === undefined)
            return;
        this.focusMonitor
            .monitor(this.switchElement?.nativeElement, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                /** https://github.com/angular/angular/issues/17793 **/
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.switchElement?.nativeElement);
        this.destroy$.next();
        this.destroy$.complete();
    }
    checkNode(nodeA, nodeB) {
        if (!this.bpsDisabled) {
            nodeA.checked = true;
            nodeB.checked = false;
            this.bpsDualValuesChange.emit(this.bpsDualValues);
        }
    }
    onKeyDown(e) {
        if (!this.bpsControl && !this.bpsDisabled && !this.bpsLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.isChecked);
                e.preventDefault();
            }
        }
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSwitchComponent, deps: [{ token: i2$3.NzConfigService }, { token: i0.ElementRef }, { token: i0.NgZone }, { token: i0.ChangeDetectorRef }, { token: i1.FocusMonitor }, { token: i2.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSwitchComponent, selector: "bps-switch", inputs: { bpsLoading: "bpsLoading", bpsDisabled: "bpsDisabled", bpsControl: "bpsControl", bpsCheckedChildren: "bpsCheckedChildren", bpsUnCheckedChildren: "bpsUnCheckedChildren", bpsSize: "bpsSize", bpsId: "bpsId", bpsDual: "bpsDual", bpsDualValues: "bpsDualValues" }, outputs: { bpsDualValuesChange: "bpsDualValuesChange" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsSwitchComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "switchElement", first: true, predicate: ["switchElement"], descendants: true, static: true }], exportAs: ["bpsSwitch"], ngImport: i0, template: `
<ng-container *ngIf="!bpsDual">
  <button
      nz-wave
      type="button"
      class="ant-switch"
      #switchElement
      [attr.id]="bpsId"
      [disabled]="bpsDisabled"
      [class.ant-switch-checked]="isChecked"
      [class.ant-switch-loading]="bpsLoading"
      [class.ant-switch-disabled]="bpsDisabled"
      [class.ant-switch-small]="bpsSize === 'small'"
      [class.ant-switch-rtl]="dir === 'rtl'"
      [nzWaveExtraNode]="true"
    >
      <span class="ant-switch-handle">
        <span *ngIf="bpsLoading" nz-icon nzType="loading" class="ant-switch-loading-icon"></span>
      </span>
      <span class="ant-switch-inner">
        <ng-container *ngIf="isChecked; else uncheckTemplate">
          <ng-container *nzStringTemplateOutlet="bpsCheckedChildren">{{ bpsCheckedChildren }}</ng-container>
        </ng-container>
        <ng-template #uncheckTemplate>
          <ng-container *nzStringTemplateOutlet="bpsUnCheckedChildren">{{ bpsUnCheckedChildren }}</ng-container>
        </ng-template>
      </span>
      <div class="ant-click-animating-node"></div>
    </button>
</ng-container>
<ng-container *ngIf="bpsDual">
  <button type="button" #switchElement
          class="ant-switch bps-switch"
          [disabled]="bpsDisabled"
          [class.bps-switch-disabled]="bpsDisabled"
          (keydown)="onKeyDown($event)">
    <ng-container *ngIf="bpsDualValues.length > 1">
      <div class="bps-switch-inner">
        <div class="bps-switch-node bps-switch-node-left"
             (click)="checkNode(bpsDualValues[0], bpsDualValues[1])"
             [class.bps-switch-checked]="bpsDualValues[0].checked">
          {{ bpsDualValues[0].title }}
        </div>
        <div class="bps-switch-node bps-switch-node-right"
             (click)="checkNode(bpsDualValues[1], bpsDualValues[0])"
             [class.bps-switch-checked]="bpsDualValues[1].checked">
          {{ bpsDualValues[1].title }}
        </div>
      </div>  
    </ng-container>
  </button>
</ng-container>
  `, isInline: true, styles: [".ant-switch:after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch-handle:before{top:-5px;background-color:#999!important;width:16px!important;height:16px!important;left:0}.ant-switch:focus{box-shadow:none!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:solid 1px #666666!important;background-color:#363636!important;background-image:none!important}.ant-switch-checked:not(.ant-switch-disabled) .ant-switch-handle:before{border:solid 1px #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked .ant-switch-handle:before{left:100%!important;margin-left:1px!important;transform:translate(calc(-100% + 2px))}.ant-switch:not(.ant-switch-checked) .ant-switch-handle:before{transform:translate(calc(-100% + 14px))}.ant-switch-checked{border:solid 1px #00a2d1!important}.ant-switch-disabled:after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:solid 1px #474747!important}.bps-switch{border:none!important;height:unset!important;border-radius:4px!important}.bps-switch-inner{background-color:#474747!important;border-radius:4px}.ant-switch-handle.bps-switch:after{content:\"\"!important;position:relative!important}.bps-switch-node{border-radius:4px;border:solid 1px #474747;padding:0 14px;background-color:#363636;margin:0;display:inline-block;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center;color:#fff}.bps-switch-node:not(.bps-switch-checked):hover{background-color:#484848}.bps-switch-node-left{border-radius:4px 0 0 4px;border-right:none}.bps-switch-node-right{border-radius:0 4px 4px 0;border-left:none}.bps-switch-checked{border-radius:4px;border:solid 1px #00a2d1}.bps-switch-disabled .bps-switch-node{background-color:#363636!important;border-color:#474747!important;color:#666!important;cursor:not-allowed}.bps-switch-disabled .bps-switch-inner{background-color:#363636}\n", "bps-switch{display:inline-block}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i7.NzWaveDirective, selector: "[nz-wave],button[nz-button]:not([nzType=\"link\"]):not([nzType=\"text\"])", inputs: ["nzWaveExtraNode"], exportAs: ["nzWave"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsControl", void 0);
__decorate([
    WithConfig$1()
], BpsSwitchComponent.prototype, "bpsSize", void 0);
__decorate([
    InputBoolean()
], BpsSwitchComponent.prototype, "bpsDual", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSwitchComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-switch', exportAs: 'bpsSwitch', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BpsSwitchComponent),
                            multi: true
                        }
                    ], template: `
<ng-container *ngIf="!bpsDual">
  <button
      nz-wave
      type="button"
      class="ant-switch"
      #switchElement
      [attr.id]="bpsId"
      [disabled]="bpsDisabled"
      [class.ant-switch-checked]="isChecked"
      [class.ant-switch-loading]="bpsLoading"
      [class.ant-switch-disabled]="bpsDisabled"
      [class.ant-switch-small]="bpsSize === 'small'"
      [class.ant-switch-rtl]="dir === 'rtl'"
      [nzWaveExtraNode]="true"
    >
      <span class="ant-switch-handle">
        <span *ngIf="bpsLoading" nz-icon nzType="loading" class="ant-switch-loading-icon"></span>
      </span>
      <span class="ant-switch-inner">
        <ng-container *ngIf="isChecked; else uncheckTemplate">
          <ng-container *nzStringTemplateOutlet="bpsCheckedChildren">{{ bpsCheckedChildren }}</ng-container>
        </ng-container>
        <ng-template #uncheckTemplate>
          <ng-container *nzStringTemplateOutlet="bpsUnCheckedChildren">{{ bpsUnCheckedChildren }}</ng-container>
        </ng-template>
      </span>
      <div class="ant-click-animating-node"></div>
    </button>
</ng-container>
<ng-container *ngIf="bpsDual">
  <button type="button" #switchElement
          class="ant-switch bps-switch"
          [disabled]="bpsDisabled"
          [class.bps-switch-disabled]="bpsDisabled"
          (keydown)="onKeyDown($event)">
    <ng-container *ngIf="bpsDualValues.length > 1">
      <div class="bps-switch-inner">
        <div class="bps-switch-node bps-switch-node-left"
             (click)="checkNode(bpsDualValues[0], bpsDualValues[1])"
             [class.bps-switch-checked]="bpsDualValues[0].checked">
          {{ bpsDualValues[0].title }}
        </div>
        <div class="bps-switch-node bps-switch-node-right"
             (click)="checkNode(bpsDualValues[1], bpsDualValues[0])"
             [class.bps-switch-checked]="bpsDualValues[1].checked">
          {{ bpsDualValues[1].title }}
        </div>
      </div>  
    </ng-container>
  </button>
</ng-container>
  `, styles: [".ant-switch:after{background-color:#999!important;width:16px!important;height:16px!important;top:-3px;left:-1px!important}.ant-switch-handle:before{top:-5px;background-color:#999!important;width:16px!important;height:16px!important;left:0}.ant-switch:focus{box-shadow:none!important}.ant-switch{min-width:30px!important;height:12px!important;border-radius:100px!important;border:solid 1px #666666!important;background-color:#363636!important;background-image:none!important}.ant-switch-checked:not(.ant-switch-disabled) .ant-switch-handle:before{border:solid 1px #00a2d1!important;background-color:#00a2d1!important}.ant-switch-checked .ant-switch-handle:before{left:100%!important;margin-left:1px!important;transform:translate(calc(-100% + 2px))}.ant-switch:not(.ant-switch-checked) .ant-switch-handle:before{transform:translate(calc(-100% + 14px))}.ant-switch-checked{border:solid 1px #00a2d1!important}.ant-switch-disabled:after{background-color:#474747!important;border:1px solid #474747!important}.ant-switch-disabled{border:solid 1px #474747!important}.bps-switch{border:none!important;height:unset!important;border-radius:4px!important}.bps-switch-inner{background-color:#474747!important;border-radius:4px}.ant-switch-handle.bps-switch:after{content:\"\"!important;position:relative!important}.bps-switch-node{border-radius:4px;border:solid 1px #474747;padding:0 14px;background-color:#363636;margin:0;display:inline-block;font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;letter-spacing:normal;text-align:center;color:#fff}.bps-switch-node:not(.bps-switch-checked):hover{background-color:#484848}.bps-switch-node-left{border-radius:4px 0 0 4px;border-right:none}.bps-switch-node-right{border-radius:0 4px 4px 0;border-left:none}.bps-switch-checked{border-radius:4px;border:solid 1px #00a2d1}.bps-switch-disabled .bps-switch-node{background-color:#363636!important;border-color:#474747!important;color:#666!important;cursor:not-allowed}.bps-switch-disabled .bps-switch-inner{background-color:#363636}\n", "bps-switch{display:inline-block}\n"] }]
        }], ctorParameters: function () { return [{ type: i2$3.NzConfigService }, { type: i0.ElementRef }, { type: i0.NgZone }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { switchElement: [{
                type: ViewChild,
                args: ['switchElement', { static: true }]
            }], bpsLoading: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsControl: [{
                type: Input
            }], bpsCheckedChildren: [{
                type: Input
            }], bpsUnCheckedChildren: [{
                type: Input
            }], bpsSize: [{
                type: Input
            }], bpsId: [{
                type: Input
            }], bpsDual: [{
                type: Input
            }], bpsDualValues: [{
                type: Input
            }], bpsDualValuesChange: [{
                type: Output
            }] } });

class NzCheckboxWrapperComponent {
    constructor() {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
    }
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    onChange() {
        const listOfCheckedValue = this.checkboxList.filter(item => item.bpsChecked).map(item => item.bpsValue);
        this.nzOnChange.emit(listOfCheckedValue);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzCheckboxWrapperComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: NzCheckboxWrapperComponent, selector: "nz-checkbox-wrapper", outputs: { nzOnChange: "nzOnChange" }, host: { classAttribute: "ant-checkbox-group" }, exportAs: ["nzCheckboxWrapper"], ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzCheckboxWrapperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'nz-checkbox-wrapper',
                    exportAs: 'nzCheckboxWrapper',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: ` <ng-content></ng-content> `,
                    host: {
                        class: 'ant-checkbox-group'
                    }
                }]
        }], propDecorators: { nzOnChange: [{
                type: Output
            }] } });

class BpsCheckboxComponent {
    innerCheckedChange(checked) {
        if (!this.bpsDisabled) {
            this.bpsChecked = checked;
            this.onChange(this.bpsChecked);
            this.bpsCheckedChange.emit(this.bpsChecked);
            if (this.bpsCheckboxWrapperComponent) {
                this.bpsCheckboxWrapperComponent.onChange();
            }
        }
    }
    writeValue(value) {
        this.bpsChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isbpsDisableFirstChange && this.bpsDisabled) || disabled;
        this.isbpsDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(ngZone, elementRef, bpsCheckboxWrapperComponent, cdr, focusMonitor, directionality, bpsFormStatusService) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.bpsCheckboxWrapperComponent = bpsCheckboxWrapperComponent;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.bpsFormStatusService = bpsFormStatusService;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.isbpsDisableFirstChange = true;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.bpsCheckedChange = new EventEmitter();
        this.bpsValue = null;
        this.bpsAutoFocus = false;
        this.bpsDisabled = false;
        this.bpsIndeterminate = false;
        this.bpsChecked = false;
        this.bpsId = null;
        this.bpsType = 'variation2';
    }
    ngOnInit() {
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        if (this.bpsCheckboxWrapperComponent) {
            this.bpsCheckboxWrapperComponent.addCheckbox(this);
        }
        this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                event.preventDefault();
                this.focus();
                if (this.bpsDisabled) {
                    return;
                }
                this.ngZone.run(() => {
                    this.innerCheckedChange(!this.bpsChecked);
                    this.cdr.markForCheck();
                });
            });
            fromEvent(this.inputElement.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => event.stopPropagation());
        });
    }
    ngAfterViewInit() {
        if (this.bpsAutoFocus) {
            this.focus();
        }
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        if (this.bpsCheckboxWrapperComponent) {
            this.bpsCheckboxWrapperComponent.removeCheckbox(this);
        }
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCheckboxComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: NzCheckboxWrapperComponent, optional: true }, { token: i0.ChangeDetectorRef }, { token: i1.FocusMonitor }, { token: i2.Directionality, optional: true }, { token: i3$1.NzFormStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsCheckboxComponent, selector: "[bps-checkbox]", inputs: { bpsValue: "bpsValue", bpsAutoFocus: "bpsAutoFocus", bpsDisabled: "bpsDisabled", bpsIndeterminate: "bpsIndeterminate", bpsChecked: "bpsChecked", bpsId: "bpsId", bpsType: "bpsType" }, outputs: { bpsCheckedChange: "bpsCheckedChange" }, host: { properties: { "class.ant-checkbox-wrapper-in-form-item": "!!bpsFormStatusService", "class.ant-checkbox-wrapper-checked": "bpsChecked", "class.bps-checkbox-variation3": "bpsType === 'variation3'", "class.ant-checkbox-rtl": "dir === 'rtl'" }, classAttribute: "ant-checkbox-wrapper" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsCheckboxComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }], exportAs: ["bpsCheckbox"], ngImport: i0, template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="bpsChecked && !bpsIndeterminate"
      [class.ant-checkbox-disabled]="bpsDisabled"
      [class.bps-checkbox-variation1]="bpsType === 'variation1'"
      [class.bps-checkbox-variation3]="bpsType === 'variation3'"
      [class.ant-checkbox-indeterminate]="bpsIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="bpsAutoFocus ? 'autofocus' : null"
        [attr.id]="bpsId"
        [checked]="bpsChecked"
        [ngModel]="bpsChecked"
        [disabled]="bpsDisabled"
        (ngModelChange)="innerCheckedChange($event)"
      />
      <span class="ant-checkbox-inner">
        <ng-container *ngIf="bpsType === 'variation1' || bpsType === 'variation3'">
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </ng-container>
      </span>
    </span>
    <ng-container *ngIf="bpsType === 'variation2'">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </ng-container>
    <ng-template #content><span><ng-content></ng-content></span></ng-template>
  `, isInline: true, styles: [".ant-checkbox-inner{width:15px!important;height:15px!important;border-radius:3px!important;background-color:#363636!important;border:solid 1px #707070!important}.ant-checkbox-wrapper.bps-checkbox-variation3:after{display:none!important}.ant-checkbox-wrapper{display:inline-block}.ant-checkbox-inner:after{top:48%!important;left:22%!important}.ant-checkbox{border-radius:3px!important;font-size:12px!important;width:15px!important;height:15px!important}.ant-checkbox:hover .ant-checkbox-inner{border:1px solid #445c67!important}.ant-checkbox.bps-checkbox-variation3:hover .ant-checkbox-inner{border:none!important}.ant-checkbox.bps-checkbox-variation3:hover,.ant-checkbox.bps-checkbox-variation3{width:15px!important;height:15px!important;border:none!important;box-shadow:none!important;transition:all .3s}.ant-checkbox-checked .ant-checkbox-inner:after{border-color:#00a2d1!important}.ant-checkbox-checked:after{border:none!important}.ant-checkbox-wrapper.cdk-focused .bps-checkbox-variation3 .ant-checkbox-inner{box-shadow:none!important;border:none!important}.bps-checkbox-variation3.ant-checkbox-checked .ant-checkbox-inner:after{border:none!important}.bps-checkbox-variation1,.bps-checkbox-variation1:hover,.bps-checkbox-variation1 .ant-checkbox-inner{width:65px!important;height:40px!important;border-radius:8px!important}.bps-checkbox-variation1 .ant-checkbox-inner,.bps-checkbox-variation1:hover .ant-checkbox-inner{background-color:#262626!important}.bps-checkbox-variation1 .ant-checkbox-inner{text-align:center}.bps-checkbox-variation3 .ant-checkbox-inner:hover,.bps-checkbox-variation3 .ant-checkbox-inner{border:none!important;background-color:transparent!important}.bps-checkbox-variation1:not(.ant-checkbox-disabled):hover .ant-checkbox-inner{border:solid 2px #00a2d1!important;transition:all .1s!important}.bps-checkbox-variation3 .ant-checkbox-inner svg,.bps-checkbox-variation1 .ant-checkbox-inner svg{display:table-cell!important;vertical-align:middle!important;text-align:center!important;margin:0 auto!important;height:100%!important}.bps-checkbox-variation3 .ant-checkbox-inner img,.bps-checkbox-variation1 .ant-checkbox-inner img{text-align:center!important;margin:0 auto!important;position:relative;top:45%;transform:translateY(-45%)}.ant-checkbox-checked.bps-checkbox-variation3 .ant-checkbox-inner:after,.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner:after{content:unset!important}.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner{border:solid 2px #00a2d1!important}.ant-checkbox.ant-checkbox-disabled:hover .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner:after{border-color:#474747!important;box-shadow:none!important}.bps-checkbox-variation1.ant-checkbox-disabled .ant-checkbox-inner svg{opacity:.4!important}.ant-checkbox-disabled,.ant-checkbox-disabled .ant-checkbox-input,.ant-checkbox-disabled+span{cursor:initial!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.CheckboxControlValueAccessor, selector: "input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsCheckboxComponent.prototype, "bpsAutoFocus", void 0);
__decorate([
    InputBoolean()
], BpsCheckboxComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsCheckboxComponent.prototype, "bpsIndeterminate", void 0);
__decorate([
    InputBoolean()
], BpsCheckboxComponent.prototype, "bpsChecked", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCheckboxComponent, decorators: [{
            type: Component,
            args: [{ selector: '[bps-checkbox]', exportAs: 'bpsCheckbox', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: `
    <span
      class="ant-checkbox"
      [class.ant-checkbox-checked]="bpsChecked && !bpsIndeterminate"
      [class.ant-checkbox-disabled]="bpsDisabled"
      [class.bps-checkbox-variation1]="bpsType === 'variation1'"
      [class.bps-checkbox-variation3]="bpsType === 'variation3'"
      [class.ant-checkbox-indeterminate]="bpsIndeterminate"
    >
      <input
        #inputElement
        type="checkbox"
        class="ant-checkbox-input"
        [attr.autofocus]="bpsAutoFocus ? 'autofocus' : null"
        [attr.id]="bpsId"
        [checked]="bpsChecked"
        [ngModel]="bpsChecked"
        [disabled]="bpsDisabled"
        (ngModelChange)="innerCheckedChange($event)"
      />
      <span class="ant-checkbox-inner">
        <ng-container *ngIf="bpsType === 'variation1' || bpsType === 'variation3'">
          <ng-container *ngTemplateOutlet="content"></ng-container>
        </ng-container>
      </span>
    </span>
    <ng-container *ngIf="bpsType === 'variation2'">
      <ng-container *ngTemplateOutlet="content"></ng-container>
    </ng-container>
    <ng-template #content><span><ng-content></ng-content></span></ng-template>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BpsCheckboxComponent),
                            multi: true
                        }
                    ], host: {
                        class: 'ant-checkbox-wrapper',
                        '[class.ant-checkbox-wrapper-in-form-item]': '!!bpsFormStatusService',
                        '[class.ant-checkbox-wrapper-checked]': 'bpsChecked',
                        '[class.bps-checkbox-variation3]': `bpsType === 'variation3'`,
                        '[class.ant-checkbox-rtl]': `dir === 'rtl'`
                    }, styles: [".ant-checkbox-inner{width:15px!important;height:15px!important;border-radius:3px!important;background-color:#363636!important;border:solid 1px #707070!important}.ant-checkbox-wrapper.bps-checkbox-variation3:after{display:none!important}.ant-checkbox-wrapper{display:inline-block}.ant-checkbox-inner:after{top:48%!important;left:22%!important}.ant-checkbox{border-radius:3px!important;font-size:12px!important;width:15px!important;height:15px!important}.ant-checkbox:hover .ant-checkbox-inner{border:1px solid #445c67!important}.ant-checkbox.bps-checkbox-variation3:hover .ant-checkbox-inner{border:none!important}.ant-checkbox.bps-checkbox-variation3:hover,.ant-checkbox.bps-checkbox-variation3{width:15px!important;height:15px!important;border:none!important;box-shadow:none!important;transition:all .3s}.ant-checkbox-checked .ant-checkbox-inner:after{border-color:#00a2d1!important}.ant-checkbox-checked:after{border:none!important}.ant-checkbox-wrapper.cdk-focused .bps-checkbox-variation3 .ant-checkbox-inner{box-shadow:none!important;border:none!important}.bps-checkbox-variation3.ant-checkbox-checked .ant-checkbox-inner:after{border:none!important}.bps-checkbox-variation1,.bps-checkbox-variation1:hover,.bps-checkbox-variation1 .ant-checkbox-inner{width:65px!important;height:40px!important;border-radius:8px!important}.bps-checkbox-variation1 .ant-checkbox-inner,.bps-checkbox-variation1:hover .ant-checkbox-inner{background-color:#262626!important}.bps-checkbox-variation1 .ant-checkbox-inner{text-align:center}.bps-checkbox-variation3 .ant-checkbox-inner:hover,.bps-checkbox-variation3 .ant-checkbox-inner{border:none!important;background-color:transparent!important}.bps-checkbox-variation1:not(.ant-checkbox-disabled):hover .ant-checkbox-inner{border:solid 2px #00a2d1!important;transition:all .1s!important}.bps-checkbox-variation3 .ant-checkbox-inner svg,.bps-checkbox-variation1 .ant-checkbox-inner svg{display:table-cell!important;vertical-align:middle!important;text-align:center!important;margin:0 auto!important;height:100%!important}.bps-checkbox-variation3 .ant-checkbox-inner img,.bps-checkbox-variation1 .ant-checkbox-inner img{text-align:center!important;margin:0 auto!important;position:relative;top:45%;transform:translateY(-45%)}.ant-checkbox-checked.bps-checkbox-variation3 .ant-checkbox-inner:after,.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner:after{content:unset!important}.ant-checkbox-checked.bps-checkbox-variation1 .ant-checkbox-inner{border:solid 2px #00a2d1!important}.ant-checkbox.ant-checkbox-disabled:hover .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner,.ant-checkbox.ant-checkbox-disabled .ant-checkbox-inner:after{border-color:#474747!important;box-shadow:none!important}.bps-checkbox-variation1.ant-checkbox-disabled .ant-checkbox-inner svg{opacity:.4!important}.ant-checkbox-disabled,.ant-checkbox-disabled .ant-checkbox-input,.ant-checkbox-disabled+span{cursor:initial!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: NzCheckboxWrapperComponent, decorators: [{
                    type: Optional
                }] }, { type: i0.ChangeDetectorRef }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3$1.NzFormStatusService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { inputElement: [{
                type: ViewChild,
                args: ['inputElement', { static: true }]
            }], bpsCheckedChange: [{
                type: Output
            }], bpsValue: [{
                type: Input
            }], bpsAutoFocus: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsIndeterminate: [{
                type: Input
            }], bpsChecked: [{
                type: Input
            }], bpsId: [{
                type: Input
            }], bpsType: [{
                type: Input
            }] } });

class BpsCheckboxGroupComponent {
    trackByOption(_, option) {
        return option.value;
    }
    onCheckedChange(option, checked) {
        option.checked = checked;
        this.onChange(this.options);
    }
    constructor(elementRef, focusMonitor, cdr, directionality) {
        this.elementRef = elementRef;
        this.focusMonitor = focusMonitor;
        this.cdr = cdr;
        this.directionality = directionality;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.options = [];
        this.bpsDisabled = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.isNzDisableFirstChange = true;
    }
    ngOnInit() {
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
            }
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.elementRef);
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.options = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCheckboxGroupComponent, deps: [{ token: i0.ElementRef }, { token: i1.FocusMonitor }, { token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsCheckboxGroupComponent, selector: "bps-checkbox-group", inputs: { bpsDisabled: "bpsDisabled" }, host: { properties: { "class.ant-checkbox-group-rtl": "dir === 'rtl'" }, classAttribute: "ant-checkbox-group" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsCheckboxGroupComponent),
                multi: true
            }
        ], exportAs: ["bpsCheckboxGroup"], ngImport: i0, template: `
    <label
      bps-checkbox
      class="ant-checkbox-group-item"
      *ngFor="let o of options; trackBy: trackByOption"
      [bpsDisabled]="o.disabled || bpsDisabled"
      [bpsChecked]="o.checked!"
      (bpsCheckedChange)="onCheckedChange(o, $event)"
    >
      <span>{{ o.label }}</span>
    </label>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: BpsCheckboxComponent, selector: "[bps-checkbox]", inputs: ["bpsValue", "bpsAutoFocus", "bpsDisabled", "bpsIndeterminate", "bpsChecked", "bpsId", "bpsType"], outputs: ["bpsCheckedChange"], exportAs: ["bpsCheckbox"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsCheckboxGroupComponent.prototype, "bpsDisabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCheckboxGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-checkbox-group',
                    exportAs: 'bpsCheckboxGroup',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    template: `
    <label
      bps-checkbox
      class="ant-checkbox-group-item"
      *ngFor="let o of options; trackBy: trackByOption"
      [bpsDisabled]="o.disabled || bpsDisabled"
      [bpsChecked]="o.checked!"
      (bpsCheckedChange)="onCheckedChange(o, $event)"
    >
      <span>{{ o.label }}</span>
    </label>
  `,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BpsCheckboxGroupComponent),
                            multi: true
                        }
                    ],
                    host: {
                        class: 'ant-checkbox-group',
                        '[class.ant-checkbox-group-rtl]': `dir === 'rtl'`
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { bpsDisabled: [{
                type: Input
            }] } });

class BpsRadioButtonDirective {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsRadioButtonDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsRadioButtonDirective, selector: "[bps-radio-button]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsRadioButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-radio-button]'
                }]
        }] });

class BpsRadioComponent {
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(ngZone, elementRef, cdr, renderer, focusMonitor, directionality, nzRadioService, nzRadioButtonDirective, nzFormStatusService) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.nzRadioService = nzRadioService;
        this.nzRadioButtonDirective = nzRadioButtonDirective;
        this.nzFormStatusService = nzFormStatusService;
        this.isNgModel = false;
        this.destroy$ = new Subject();
        this.isNzDisableFirstChange = true;
        this.isChecked = false;
        this.name = null;
        this.isRadioButton = !!this.nzRadioButtonDirective;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.bpsValue = null;
        this.bpsDisabled = false;
        this.bpsAutoFocus = false;
        this.bpsRadioButtonType = 'variation1';
        this.dir = 'ltr';
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        this.cdr.markForCheck();
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.isNgModel = true;
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    ngOnInit() {
        if (this.nzRadioService) {
            this.nzRadioService.name$.pipe(takeUntil(this.destroy$)).subscribe(name => {
                this.name = name;
                this.cdr.markForCheck();
            });
            this.nzRadioService.disabled$.pipe(takeUntil(this.destroy$)).subscribe(disabled => {
                this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
                this.isNzDisableFirstChange = false;
                this.cdr.markForCheck();
            });
            this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe(value => {
                const isChecked = this.isChecked;
                this.isChecked = this.bpsValue === value;
                // We don't have to run `onChange()` on each `nz-radio` button whenever the `selected$` emits.
                // If we have 8 `nz-radio` buttons within the `nz-radio-group` and they're all connected with
                // `ngModel` or `formControl` then `onChange()` will be called 8 times for each `nz-radio` button.
                // We prevent this by checking if `isChecked` has been changed or not.
                if (this.isNgModel &&
                    isChecked !== this.isChecked &&
                    // We're only intereted if `isChecked` has been changed to `false` value to emit `false` to the ascendant form,
                    // since we already emit `true` within the `setupClickListener`.
                    this.isChecked === false) {
                    this.onChange(false);
                }
                this.cdr.markForCheck();
            });
        }
        this.focusMonitor
            .monitor(this.elementRef, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                Promise.resolve().then(() => this.onTouched());
                if (this.nzRadioService) {
                    this.nzRadioService.touch();
                }
            }
        });
        this.directionality.change.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
        this.setupClickListener();
    }
    ngAfterViewInit() {
        if (this.bpsAutoFocus) {
            this.focus();
        }
        this.renderer.addClass(this.elementRef.nativeElement, `bps-radio-button-${this.bpsRadioButtonType}`);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.focusMonitor.stopMonitoring(this.elementRef);
    }
    setupClickListener() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                /** prevent label click triggered twice. **/
                event.stopPropagation();
                event.preventDefault();
                if (this.bpsDisabled || this.isChecked) {
                    return;
                }
                this.ngZone.run(() => {
                    this.focus();
                    this.nzRadioService?.select(this.bpsValue);
                    if (this.isNgModel) {
                        this.isChecked = true;
                        this.onChange(true);
                    }
                    this.cdr.markForCheck();
                });
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsRadioComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i0.Renderer2 }, { token: i1.FocusMonitor }, { token: i2.Directionality, optional: true }, { token: NzRadioService, optional: true }, { token: BpsRadioButtonDirective, optional: true }, { token: i3$1.NzFormStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsRadioComponent, selector: "[bps-radio],[bps-radio-button]", inputs: { bpsValue: "bpsValue", bpsDisabled: "bpsDisabled", bpsAutoFocus: "bpsAutoFocus", bpsRadioButtonType: "bpsRadioButtonType" }, host: { properties: { "class.ant-radio-wrapper-in-form-item": "!!nzFormStatusService", "class.ant-radio-wrapper": "!isRadioButton", "class.ant-radio-button-wrapper": "isRadioButton", "class.ant-radio-wrapper-checked": "isChecked && !isRadioButton", "class.ant-radio-button-wrapper-checked": "isChecked && isRadioButton", "class.ant-radio-wrapper-disabled": "bpsDisabled && !isRadioButton", "class.ant-radio-button-wrapper-disabled": "bpsDisabled && isRadioButton", "class.ant-radio-wrapper-rtl": "!isRadioButton && dir === 'rtl'", "class.ant-radio-button-wrapper-rtl": "isRadioButton && dir === 'rtl'" } }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsRadioComponent),
                multi: true
            }
        ], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }], exportAs: ["bpsRadio"], ngImport: i0, template: `
    <span
      [class.ant-radio]="!isRadioButton"
      [class.ant-radio-checked]="isChecked && !isRadioButton"
      [class.ant-radio-disabled]="bpsDisabled && !isRadioButton"
      [class.ant-radio-button]="isRadioButton"
      [class.ant-radio-button-checked]="isChecked && isRadioButton"
      [class.ant-radio-button-disabled]="bpsDisabled && isRadioButton"
    >
      <input
        #inputElement
        type="radio"
        [attr.autofocus]="bpsAutoFocus ? 'autofocus' : null"
        [class.ant-radio-input]="!isRadioButton"
        [class.ant-radio-button-input]="isRadioButton"
        [disabled]="bpsDisabled"
        [checked]="isChecked"
        [attr.name]="name"
      />
      <span [class.ant-radio-inner]="!isRadioButton" [class.ant-radio-button-inner]="isRadioButton"></span>
    </span>
    <span class="bps-custom-content-radio"><ng-content></ng-content></span>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsRadioComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsRadioComponent.prototype, "bpsAutoFocus", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsRadioComponent, decorators: [{
            type: Component,
            args: [{
                    selector: '[bps-radio],[bps-radio-button]',
                    exportAs: 'bpsRadio',
                    preserveWhitespaces: false,
                    template: `
    <span
      [class.ant-radio]="!isRadioButton"
      [class.ant-radio-checked]="isChecked && !isRadioButton"
      [class.ant-radio-disabled]="bpsDisabled && !isRadioButton"
      [class.ant-radio-button]="isRadioButton"
      [class.ant-radio-button-checked]="isChecked && isRadioButton"
      [class.ant-radio-button-disabled]="bpsDisabled && isRadioButton"
    >
      <input
        #inputElement
        type="radio"
        [attr.autofocus]="bpsAutoFocus ? 'autofocus' : null"
        [class.ant-radio-input]="!isRadioButton"
        [class.ant-radio-button-input]="isRadioButton"
        [disabled]="bpsDisabled"
        [checked]="isChecked"
        [attr.name]="name"
      />
      <span [class.ant-radio-inner]="!isRadioButton" [class.ant-radio-button-inner]="isRadioButton"></span>
    </span>
    <span class="bps-custom-content-radio"><ng-content></ng-content></span>
  `,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BpsRadioComponent),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-wrapper-in-form-item]': '!!nzFormStatusService',
                        '[class.ant-radio-wrapper]': '!isRadioButton',
                        '[class.ant-radio-button-wrapper]': 'isRadioButton',
                        '[class.ant-radio-wrapper-checked]': 'isChecked && !isRadioButton',
                        '[class.ant-radio-button-wrapper-checked]': 'isChecked && isRadioButton',
                        '[class.ant-radio-wrapper-disabled]': 'bpsDisabled && !isRadioButton',
                        '[class.ant-radio-button-wrapper-disabled]': 'bpsDisabled && isRadioButton',
                        '[class.ant-radio-wrapper-rtl]': `!isRadioButton && dir === 'rtl'`,
                        '[class.ant-radio-button-wrapper-rtl]': `isRadioButton && dir === 'rtl'`
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1$3.NzRadioService, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NzRadioService]
                }] }, { type: BpsRadioButtonDirective, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [BpsRadioButtonDirective]
                }] }, { type: i3$1.NzFormStatusService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { inputElement: [{
                type: ViewChild,
                args: ['inputElement', { static: true }]
            }], bpsValue: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsAutoFocus: [{
                type: Input
            }], bpsRadioButtonType: [{
                type: Input
            }] } });

class BpsRadioGroupComponent {
    constructor(cdr, nzRadioService, directionality) {
        this.cdr = cdr;
        this.nzRadioService = nzRadioService;
        this.directionality = directionality;
        this.value = null;
        this.destroy$ = new Subject();
        this.isNzDisableFirstChange = true;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.bpsDisabled = false;
        this.bpsButtonStyle = 'outline';
        this.bpsSize = 'default';
        this.bpsName = null;
        this.dir = 'ltr';
    }
    ngOnInit() {
        this.nzRadioService.selected$.pipe(takeUntil(this.destroy$)).subscribe(value => {
            if (this.value !== value) {
                this.value = value;
                this.onChange(this.value);
            }
        });
        this.nzRadioService.touched$.pipe(takeUntil(this.destroy$)).subscribe(() => {
            Promise.resolve().then(() => this.onTouched());
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { bpsDisabled, bpsName } = changes;
        if (bpsDisabled) {
            this.nzRadioService.setDisabled(this.bpsDisabled);
        }
        if (bpsName) {
            this.nzRadioService.setName(this.bpsName);
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    writeValue(value) {
        this.value = value;
        this.nzRadioService.select(value);
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || isDisabled;
        this.isNzDisableFirstChange = false;
        this.nzRadioService.setDisabled(this.bpsDisabled);
        this.cdr.markForCheck();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsRadioGroupComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1$3.NzRadioService }, { token: i2.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsRadioGroupComponent, selector: "bps-radio-group", inputs: { bpsDisabled: "bpsDisabled", bpsButtonStyle: "bpsButtonStyle", bpsSize: "bpsSize", bpsName: "bpsName" }, host: { properties: { "class.ant-radio-group-large": "bpsSize === 'large'", "class.ant-radio-group-small": "bpsSize === 'small'", "class.ant-radio-group-solid": "bpsButtonStyle === 'solid'", "class.ant-radio-group-rtl": "dir === 'rtl'" }, classAttribute: "ant-radio-group" }, providers: [
            NzRadioService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsRadioGroupComponent),
                multi: true
            }
        ], exportAs: ["bpsRadioGroup"], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, styles: [".ant-radio-button-wrapper{margin-right:10px!important;height:40px!important;border-radius:8px!important;border:solid 1px #666666!important;padding:0!important;line-height:38px!important;background-color:transparent!important;color:#999!important;text-align:center!important}.bps-radio-button-variation2,.bps-radio-button-variation7,.bps-radio-button-variation6{font-size:11px!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:center!important;color:#999!important}.bps-radio-button-variation6,.bps-radio-button-variation7{font-size:12px!important;border-radius:8px!important;border:solid 1px #666666!important;margin-right:15px!important}.bps-radio-button-variation7{padding:0 15px!important;margin-bottom:15px!important}.bps-radio-button-variation3,.bps-radio-button-variation5{font-size:11px!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:4px!important;background-color:#363636!important;border:solid 1px #363636!important}.bps-radio-button-variation5{text-align:unset!important;padding:0 15px!important;margin-bottom:5px!important;margin-right:0!important;display:block!important}.bps-radio-button-variation7 .bps-custom-content-radio,.bps-radio-button-variation5 .bps-custom-content-radio{margin:0!important;width:100%!important}.bps-radio-button-variation5 .bps-custom-content-radio span{position:relative!important;float:left!important}.bps-radio-button-variation5 .bps-custom-content-radio img,.bps-radio-button-variation5 .bps-custom-content-radio svg{float:right!important}.bps-radio-button-variation7 .bps-custom-content-radio{text-align:center!important}.bps-radio-button-variation7 .bps-custom-content-radio img,.bps-radio-button-variation7 .bps-custom-content-radio svg{float:left!important}.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled):hover,.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border:solid 2px #7bc053!important;color:#7bc053!important;line-height:36px!important;box-shadow:none!important}.bps-radio-button-variation6:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation7:not(.ant-radio-button-wrapper-disabled):hover{border:solid 2px #445c67!important;color:#999!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation7:not(.ant-radio-button-wrapper-disabled),.ant-radio-button-wrapper-checked.bps-radio-button-variation6:not(.ant-radio-button-wrapper-disabled){border:solid 2px #00a2d1!important;color:#00a2d1!important}.bps-radio-button-variation3:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation5:not(.ant-radio-button-wrapper-disabled):hover{border:solid 1px #445c67!important;color:#fff!important;box-shadow:none!important;line-height:38px!important}.bps-radio-button-variation3.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),.bps-radio-button-variation5.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border:solid 1px #00a2d1!important;color:#fff!important;box-shadow:none!important;line-height:38px!important}.ant-radio-button-wrapper:not(:first-child):before{content:unset!important}.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled):focus{border:solid 1px #666666!important;background-color:#262626!important;outline:none!important;color:#999!important}.bps-custom-content-radio{display:table;margin:0 auto;height:100%}.bps-custom-content-radio svg{display:table-cell;vertical-align:middle;height:100%}.bps-custom-content-radio img{vertical-align:middle}.bps-radio-button-variation10{width:40px!important;border-radius:100px!important;border:none!important;line-height:unset!important}.bps-radio-button-variation12:hover,.bps-radio-button-variation12{border:none!important;border-color:unset!important;line-height:unset!important;margin-right:7px!important;width:25px!important;height:25px!important}.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled):hover{line-height:unset!important;border:none!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled):hover,.ant-radio-button-wrapper-checked.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled){line-height:unset!important;border:none!important}.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled):focus{line-height:unset!important;border:none!important}.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled):hover{border:none!important;line-height:unset!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled){border:none!important;line-height:unset!important}.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled):focus{border:none!important}.ant-radio-button-wrapper-disabled{border:solid 1px #474747!important;color:#474747!important}.bps-radio-button-variation10.ant-radio-button-wrapper-disabled{border:none!important}.ant-radio-button-wrapper-disabled svg{opacity:.2!important}.bps-radio-button-variation3:not(.ant-radio-button-wrapper-disabled):focus,.bps-radio-button-variation5:not(.ant-radio-button-wrapper-disabled):focus{border:none!important;background-color:#363636!important;color:#fff!important}.bps-radio-button-variation3.ant-radio-button-wrapper-disabled,.bps-radio-button-variation5.ant-radio-button-wrapper-disabled{color:#666!important;border:none!important;background-color:#363636!important}.bps-radio-button-variation9 span.ant-radio+*,.bps-radio-button-variation8c span.ant-radio+*,.bps-radio-button-variation8d span.ant-radio+*,.bps-radio-button-variation8e span.ant-radio+*,.bps-radio-button-variation8b span.ant-radio+*,.bps-radio-button-variation8a span.ant-radio+*{padding-right:10px!important;padding-left:0!important}.bps-radio-button-variation8a .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-inner,.bps-radio-button-variation8e .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-inner{background-color:#262626!important;border-color:#778d98!important}.bps-radio-button-variation8a .ant-radio-inner{border-color:#005068!important}.bps-radio-button-variation8b .ant-radio-inner{border-color:#00a2d1!important}.bps-radio-button-variation8c .ant-radio-inner{border-color:#005681!important}.bps-radio-button-variation8d .ant-radio-inner{border-color:#06809f!important}.bps-radio-button-variation8e .ant-radio-inner{border-color:#445c67!important}.bps-radio-button-variation9 .ant-radio-inner:after,.bps-radio-button-variation8a .ant-radio-inner:after,.bps-radio-button-variation8b .ant-radio-inner:after,.bps-radio-button-variation8c .ant-radio-inner:after,.bps-radio-button-variation8d .ant-radio-inner:after,.bps-radio-button-variation8e .ant-radio-inner:after{background-color:#778d98!important;opacity:1!important}.bps-radio-button-variation8a .ant-radio-inner:after{background-color:#005068!important}.bps-radio-button-variation8b .ant-radio-inner:after{background-color:#00a2d1!important}.bps-radio-button-variation8c .ant-radio-inner:after{background-color:#005681!important}.bps-radio-button-variation8d .ant-radio-inner:after{background-color:#06809f!important}.bps-radio-button-variation8e .ant-radio-inner:after{background-color:#445c67!important}.bps-radio-button-variation8e .ant-radio:after,.bps-radio-button-variation8a .ant-radio:after,.bps-radio-button-variation8b .ant-radio:after,.bps-radio-button-variation8c .ant-radio:after,.bps-radio-button-variation8d .ant-radio:after,.bps-radio-button-variation9 .ant-radio:after{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:1px solid #778d98!important;border-radius:50%!important;animation:antRadioEffect .36s ease-in-out!important;animation-fill-mode:both!important;content:\" \"!important}.bps-radio-button-variation8e .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8a .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-checked .ant-radio-inner{border-color:#f18700!important}.bps-radio-button-variation8e .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation8a .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation8b .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation8c .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation8d .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation9 .ant-radio-disabled .ant-radio-inner:after{opacity:0!important}.bps-radio-button-variation8e .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8a .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-disabled .ant-radio-inner{background-color:#363636!important;border:none!important}.bps-radio-button-variation11{line-height:32px!important}.bps-radio-button-variation11:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation11.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border:solid 2px #00a2d1!important;color:#00a2d1!important;line-height:30px!important;box-shadow:none!important}.bps-radio-button-variation12.ant-radio-button-wrapper-disabled,.bps-radio-button-variation12.ant-radio-button-wrapper-disabled:hover{border:none!important}.cdk-focused .ant-radio-inner{box-shadow:none!important}.ant-radio-button-wrapper-disabled,.ant-radio-disabled .ant-radio-input{cursor:initial!important}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsRadioGroupComponent.prototype, "bpsDisabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsRadioGroupComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-radio-group', exportAs: 'bpsRadioGroup', preserveWhitespaces: false, template: ` <ng-content></ng-content> `, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        NzRadioService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BpsRadioGroupComponent),
                            multi: true
                        }
                    ], host: {
                        class: 'ant-radio-group',
                        '[class.ant-radio-group-large]': `bpsSize === 'large'`,
                        '[class.ant-radio-group-small]': `bpsSize === 'small'`,
                        '[class.ant-radio-group-solid]': `bpsButtonStyle === 'solid'`,
                        '[class.ant-radio-group-rtl]': `dir === 'rtl'`,
                    }, styles: [".ant-radio-button-wrapper{margin-right:10px!important;height:40px!important;border-radius:8px!important;border:solid 1px #666666!important;padding:0!important;line-height:38px!important;background-color:transparent!important;color:#999!important;text-align:center!important}.bps-radio-button-variation2,.bps-radio-button-variation7,.bps-radio-button-variation6{font-size:11px!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:center!important;color:#999!important}.bps-radio-button-variation6,.bps-radio-button-variation7{font-size:12px!important;border-radius:8px!important;border:solid 1px #666666!important;margin-right:15px!important}.bps-radio-button-variation7{padding:0 15px!important;margin-bottom:15px!important}.bps-radio-button-variation3,.bps-radio-button-variation5{font-size:11px!important;font-stretch:normal!important;font-style:normal!important;letter-spacing:normal!important;text-align:center!important;color:#fff!important;border-radius:4px!important;background-color:#363636!important;border:solid 1px #363636!important}.bps-radio-button-variation5{text-align:unset!important;padding:0 15px!important;margin-bottom:5px!important;margin-right:0!important;display:block!important}.bps-radio-button-variation7 .bps-custom-content-radio,.bps-radio-button-variation5 .bps-custom-content-radio{margin:0!important;width:100%!important}.bps-radio-button-variation5 .bps-custom-content-radio span{position:relative!important;float:left!important}.bps-radio-button-variation5 .bps-custom-content-radio img,.bps-radio-button-variation5 .bps-custom-content-radio svg{float:right!important}.bps-radio-button-variation7 .bps-custom-content-radio{text-align:center!important}.bps-radio-button-variation7 .bps-custom-content-radio img,.bps-radio-button-variation7 .bps-custom-content-radio svg{float:left!important}.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled):hover,.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border:solid 2px #7bc053!important;color:#7bc053!important;line-height:36px!important;box-shadow:none!important}.bps-radio-button-variation6:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation7:not(.ant-radio-button-wrapper-disabled):hover{border:solid 2px #445c67!important;color:#999!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation7:not(.ant-radio-button-wrapper-disabled),.ant-radio-button-wrapper-checked.bps-radio-button-variation6:not(.ant-radio-button-wrapper-disabled){border:solid 2px #00a2d1!important;color:#00a2d1!important}.bps-radio-button-variation3:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation5:not(.ant-radio-button-wrapper-disabled):hover{border:solid 1px #445c67!important;color:#fff!important;box-shadow:none!important;line-height:38px!important}.bps-radio-button-variation3.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),.bps-radio-button-variation5.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border:solid 1px #00a2d1!important;color:#fff!important;box-shadow:none!important;line-height:38px!important}.ant-radio-button-wrapper:not(:first-child):before{content:unset!important}.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled):focus{border:solid 1px #666666!important;background-color:#262626!important;outline:none!important;color:#999!important}.bps-custom-content-radio{display:table;margin:0 auto;height:100%}.bps-custom-content-radio svg{display:table-cell;vertical-align:middle;height:100%}.bps-custom-content-radio img{vertical-align:middle}.bps-radio-button-variation10{width:40px!important;border-radius:100px!important;border:none!important;line-height:unset!important}.bps-radio-button-variation12:hover,.bps-radio-button-variation12{border:none!important;border-color:unset!important;line-height:unset!important;margin-right:7px!important;width:25px!important;height:25px!important}.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled):hover{line-height:unset!important;border:none!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled):hover,.ant-radio-button-wrapper-checked.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled){line-height:unset!important;border:none!important}.bps-radio-button-variation12:not(.ant-radio-button-wrapper-disabled):focus{line-height:unset!important;border:none!important}.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled):hover{border:none!important;line-height:unset!important}.ant-radio-button-wrapper-checked.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled){border:none!important;line-height:unset!important}.bps-radio-button-variation10:not(.ant-radio-button-wrapper-disabled):focus{border:none!important}.ant-radio-button-wrapper-disabled{border:solid 1px #474747!important;color:#474747!important}.bps-radio-button-variation10.ant-radio-button-wrapper-disabled{border:none!important}.ant-radio-button-wrapper-disabled svg{opacity:.2!important}.bps-radio-button-variation3:not(.ant-radio-button-wrapper-disabled):focus,.bps-radio-button-variation5:not(.ant-radio-button-wrapper-disabled):focus{border:none!important;background-color:#363636!important;color:#fff!important}.bps-radio-button-variation3.ant-radio-button-wrapper-disabled,.bps-radio-button-variation5.ant-radio-button-wrapper-disabled{color:#666!important;border:none!important;background-color:#363636!important}.bps-radio-button-variation9 span.ant-radio+*,.bps-radio-button-variation8c span.ant-radio+*,.bps-radio-button-variation8d span.ant-radio+*,.bps-radio-button-variation8e span.ant-radio+*,.bps-radio-button-variation8b span.ant-radio+*,.bps-radio-button-variation8a span.ant-radio+*{padding-right:10px!important;padding-left:0!important}.bps-radio-button-variation8a .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-inner,.bps-radio-button-variation8e .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-inner{background-color:#262626!important;border-color:#778d98!important}.bps-radio-button-variation8a .ant-radio-inner{border-color:#005068!important}.bps-radio-button-variation8b .ant-radio-inner{border-color:#00a2d1!important}.bps-radio-button-variation8c .ant-radio-inner{border-color:#005681!important}.bps-radio-button-variation8d .ant-radio-inner{border-color:#06809f!important}.bps-radio-button-variation8e .ant-radio-inner{border-color:#445c67!important}.bps-radio-button-variation9 .ant-radio-inner:after,.bps-radio-button-variation8a .ant-radio-inner:after,.bps-radio-button-variation8b .ant-radio-inner:after,.bps-radio-button-variation8c .ant-radio-inner:after,.bps-radio-button-variation8d .ant-radio-inner:after,.bps-radio-button-variation8e .ant-radio-inner:after{background-color:#778d98!important;opacity:1!important}.bps-radio-button-variation8a .ant-radio-inner:after{background-color:#005068!important}.bps-radio-button-variation8b .ant-radio-inner:after{background-color:#00a2d1!important}.bps-radio-button-variation8c .ant-radio-inner:after{background-color:#005681!important}.bps-radio-button-variation8d .ant-radio-inner:after{background-color:#06809f!important}.bps-radio-button-variation8e .ant-radio-inner:after{background-color:#445c67!important}.bps-radio-button-variation8e .ant-radio:after,.bps-radio-button-variation8a .ant-radio:after,.bps-radio-button-variation8b .ant-radio:after,.bps-radio-button-variation8c .ant-radio:after,.bps-radio-button-variation8d .ant-radio:after,.bps-radio-button-variation9 .ant-radio:after{position:absolute!important;top:0!important;left:0!important;width:100%!important;height:100%!important;border:1px solid #778d98!important;border-radius:50%!important;animation:antRadioEffect .36s ease-in-out!important;animation-fill-mode:both!important;content:\" \"!important}.bps-radio-button-variation8e .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8a .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-checked .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-checked .ant-radio-inner{border-color:#f18700!important}.bps-radio-button-variation8e .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation8a .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation8b .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation8c .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation8d .ant-radio-disabled .ant-radio-inner:after,.bps-radio-button-variation9 .ant-radio-disabled .ant-radio-inner:after{opacity:0!important}.bps-radio-button-variation8e .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8a .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8b .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8c .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation8d .ant-radio-disabled .ant-radio-inner,.bps-radio-button-variation9 .ant-radio-disabled .ant-radio-inner{background-color:#363636!important;border:none!important}.bps-radio-button-variation11{line-height:32px!important}.bps-radio-button-variation11:not(.ant-radio-button-wrapper-disabled):hover,.bps-radio-button-variation11.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled){border:solid 2px #00a2d1!important;color:#00a2d1!important;line-height:30px!important;box-shadow:none!important}.bps-radio-button-variation12.ant-radio-button-wrapper-disabled,.bps-radio-button-variation12.ant-radio-button-wrapper-disabled:hover{border:none!important}.cdk-focused .ant-radio-inner{box-shadow:none!important}.ant-radio-button-wrapper-disabled,.ant-radio-disabled .ant-radio-input{cursor:initial!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1$3.NzRadioService }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { bpsDisabled: [{
                type: Input
            }], bpsButtonStyle: [{
                type: Input
            }], bpsSize: [{
                type: Input
            }], bpsName: [{
                type: Input
            }] } });

const NZ_CONFIG_COMPONENT_NAME$3 = 'collapse';
class BpsCollapseComponent {
    constructor(nzConfigService) {
        this.nzConfigService = nzConfigService;
        this.listOfNzCollapsePanelComponent = [];
    }
    addPanel(value) {
        this.listOfNzCollapsePanelComponent.push(value);
    }
    removePanel(value) {
        this.listOfNzCollapsePanelComponent.splice(this.listOfNzCollapsePanelComponent.indexOf(value), 1);
    }
    click(collapse) {
        if (this.bpsAccordion && !collapse.bpsActive) {
            this.listOfNzCollapsePanelComponent
                .filter(item => item !== collapse)
                .forEach(item => {
                if (item.bpsActive) {
                    item.bpsActive = false;
                    item.bpsActiveChange.emit(item.bpsActive);
                    item.markForCheck();
                }
            });
        }
        collapse.bpsActive = !collapse.bpsActive;
        collapse.bpsActiveChange.emit(collapse.bpsActive);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCollapseComponent, deps: [{ token: NzConfigService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsCollapseComponent, selector: "bps-collapse", inputs: { bpsAccordion: "bpsAccordion", bpsBordered: "bpsBordered" }, exportAs: ["bpsCollapse"], ngImport: i0, template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME$3, false),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsAccordion", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME$3, true),
    InputBoolean()
], BpsCollapseComponent.prototype, "bpsBordered", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCollapseComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-collapse', exportAs: 'bpsCollapse', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div class=\"ant-collapse\" [class.ant-collapse-borderless]=\"!bpsBordered\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [".ant-collapse{margin:0!important;background-color:transparent!important;border:1px solid #707070!important;border-radius:unset!important;padding:15px!important}\n", "bps-collapse{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: NzConfigService }]; }, propDecorators: { bpsAccordion: [{
                type: Input
            }], bpsBordered: [{
                type: Input
            }] } });

const NZ_CONFIG_COMPONENT_NAME$2 = 'collapsePanel';
class BpsCollapsePanelComponent {
    clickHeader() {
        if (!this.bpsDisabled) {
            this.bpsCollapseComponent.click(this);
        }
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    constructor(nzConfigService, cdr, bpsCollapseComponent, elementRef, renderer) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.bpsCollapseComponent = bpsCollapseComponent;
        this.bpsActive = false;
        this.bpsDisabled = false;
        this.bpsValid = null;
        this.bpsActiveChange = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-collapse-item');
    }
    ngOnInit() {
        this.bpsCollapseComponent.addPanel(this);
    }
    ngOnDestroy() {
        this.bpsCollapseComponent.removePanel(this);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCollapsePanelComponent, deps: [{ token: NzConfigService }, { token: i0.ChangeDetectorRef }, { token: BpsCollapseComponent, host: true }, { token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsCollapsePanelComponent, selector: "bps-collapse-panel", inputs: { bpsActive: "bpsActive", bpsDisabled: "bpsDisabled", bpsValid: "bpsValid", bpsShowArrow: "bpsShowArrow", bpsExtra: "bpsExtra", bpsHeader: "bpsHeader", bpsExpandedIcon: "bpsExpandedIcon" }, outputs: { bpsActiveChange: "bpsActiveChange" }, host: { properties: { "class.ant-collapse-no-arrow": "!bpsShowArrow", "class.ant-collapse-item-active": "bpsActive", "class.ant-collapse-item-disabled": "bpsDisabled" } }, exportAs: ["bpsCollapsePanel"], ngImport: i0, template: "<div role=\"tab\" [attr.aria-expanded]=\"bpsActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\r\n  <ng-container *ngIf=\"bpsShowArrow\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExpandedIcon\">\r\n      <div class=\"ant-collapse-arrow bps-status-indicator\"\r\n           [class.bps-collapse-panel-invalid]=\"bpsValid !== null && !bpsValid\"\r\n           [class.bps-collapse-panel-valid]=\"bpsValid\"></div>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_enabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-d1 {\r\n              fill: #666\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_disabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_enabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#fff\" />\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_disabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#666\" />\r\n      </svg>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\"\r\n  [class.ant-collapse-content-active]=\"bpsActive\"\r\n  [@collapseMotion]=\"bpsActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [".ant-collapse>.ant-collapse-item{border-bottom:unset!important;background-color:transparent!important;margin-bottom:unset!important;border-radius:unset!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow{margin-right:0}.ant-collapse>.ant-collapse-item>.ant-collapse-header{padding:0 15px!important;color:#fff!important;line-height:20px!important;font-size:12px!important;background-color:#363636!important;border-radius:10px!important;margin-bottom:10px!important}.ant-collapse-content{color:#fff!important;font-size:12px!important;background-color:transparent!important;border-top:unset!important}.ant-collapse-content>.ant-collapse-content-box{padding:0 15px 8px!important}.ant-collapse-item:last-child>.ant-collapse-content,.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header{border-radius:10px!important}.ant-collapse-arrow.bps-status-indicator{width:4px!important;height:4px!important;background-color:#666!important;border-radius:100px!important;right:45px!important;left:unset!important;top:8px;position:absolute}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-valid{background-color:#00a2d1!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-invalid{background-color:#f18700!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow:not(.bps-status-indicator){right:15px!important;left:unset!important;position:absolute;top:50%;transform:translateY(-50%)}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:hover{background-color:#474747!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:focus{box-shadow:0 0 8px #00a2d1!important}.ant-collapse>.ant-collapse-item.ant-collapse-item-disabled>.ant-collapse-header{color:#666!important}\n", "bps-collapse-panel{display:block}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], animations: [collapseMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsActive", void 0);
__decorate([
    InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsDisabled", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME$2, true),
    InputBoolean()
], BpsCollapsePanelComponent.prototype, "bpsShowArrow", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsCollapsePanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-collapse-panel', exportAs: 'bpsCollapsePanel', changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [collapseMotion], host: {
                        '[class.ant-collapse-no-arrow]': '!bpsShowArrow',
                        '[class.ant-collapse-item-active]': 'bpsActive',
                        '[class.ant-collapse-item-disabled]': 'bpsDisabled'
                    }, template: "<div role=\"tab\" [attr.aria-expanded]=\"bpsActive\" class=\"ant-collapse-header\" (click)=\"clickHeader()\">\r\n  <ng-container *ngIf=\"bpsShowArrow\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExpandedIcon\">\r\n      <div class=\"ant-collapse-arrow bps-status-indicator\"\r\n           [class.bps-collapse-panel-invalid]=\"bpsValid !== null && !bpsValid\"\r\n           [class.bps-collapse-panel-valid]=\"bpsValid\"></div>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_enabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"!bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-d1 {\r\n              fill: #666\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_plus_icon_disabled\" transform=\"translate(-955 -253)\">\r\n          <rect id=\"prefix__Rectangle_411\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 411\" rx=\"1.125\" transform=\"translate(959.875 253)\" />\r\n          <rect id=\"prefix__Rectangle_412\" width=\"2.25\" height=\"12\" class=\"prefix__cls-d1\" data-name=\"Rectangle 412\" rx=\"1.125\" transform=\"rotate(90 354.563 612.438)\" />\r\n        </g>\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && !bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_enabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#fff\" />\r\n      </svg>\r\n      <svg class=\"ant-collapse-arrow\" *ngIf=\"bpsActive && bpsDisabled\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"2.25\" viewBox=\"0 0 12 2.25\">\r\n        <rect id=\"prefix__sps_minus_icon_disabled\" width=\"2.25\" height=\"12\" rx=\"1.125\" transform=\"rotate(90 6 6)\" style=\"fill:#666\" />\r\n      </svg>\r\n    </ng-container>\r\n  </ng-container>\r\n  <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  <div class=\"ant-collapse-extra\" *ngIf=\"bpsExtra\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsExtra\">{{ bpsExtra }}</ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"ant-collapse-content\"\r\n  [class.ant-collapse-content-active]=\"bpsActive\"\r\n  [@collapseMotion]=\"bpsActive ? 'expanded' : 'hidden' \">\r\n  <div class=\"ant-collapse-content-box\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n</div>\r\n", styles: [".ant-collapse>.ant-collapse-item{border-bottom:unset!important;background-color:transparent!important;margin-bottom:unset!important;border-radius:unset!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow{margin-right:0}.ant-collapse>.ant-collapse-item>.ant-collapse-header{padding:0 15px!important;color:#fff!important;line-height:20px!important;font-size:12px!important;background-color:#363636!important;border-radius:10px!important;margin-bottom:10px!important}.ant-collapse-content{color:#fff!important;font-size:12px!important;background-color:transparent!important;border-top:unset!important}.ant-collapse-content>.ant-collapse-content-box{padding:0 15px 8px!important}.ant-collapse-item:last-child>.ant-collapse-content,.ant-collapse>.ant-collapse-item:last-child,.ant-collapse>.ant-collapse-item:last-child>.ant-collapse-header{border-radius:10px!important}.ant-collapse-arrow.bps-status-indicator{width:4px!important;height:4px!important;background-color:#666!important;border-radius:100px!important;right:45px!important;left:unset!important;top:8px;position:absolute}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-valid{background-color:#00a2d1!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header .ant-collapse-arrow.bps-status-indicator.bps-collapse-panel-invalid{background-color:#f18700!important}.ant-collapse>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow:not(.bps-status-indicator){right:15px!important;left:unset!important;position:absolute;top:50%;transform:translateY(-50%)}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:hover{background-color:#474747!important}.ant-collapse>.ant-collapse-item:not(.ant-collapse-item-disabled)>.ant-collapse-header:focus{box-shadow:0 0 8px #00a2d1!important}.ant-collapse>.ant-collapse-item.ant-collapse-item-disabled>.ant-collapse-header{color:#666!important}\n", "bps-collapse-panel{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: NzConfigService }, { type: i0.ChangeDetectorRef }, { type: BpsCollapseComponent, decorators: [{
                    type: Host
                }] }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { bpsActive: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsValid: [{
                type: Input
            }], bpsShowArrow: [{
                type: Input
            }], bpsExtra: [{
                type: Input
            }], bpsHeader: [{
                type: Input
            }], bpsExpandedIcon: [{
                type: Input
            }], bpsActiveChange: [{
                type: Output
            }] } });

const NZ_CONFIG_MODULE_NAME$2 = 'popover';
class BpsPopoverDirective extends NzTooltipBaseDirective {
    getProxyPropertyMap() {
        return {
            bpsPopoverBackdrop: ['bpsBackdrop', () => this.bpsPopoverBackdrop],
            ...super.getProxyPropertyMap()
        };
    }
    constructor(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService) {
        super(elementRef, hostView, resolver, renderer, noAnimation, nzConfigService);
        this._nzModuleName = NZ_CONFIG_MODULE_NAME$2;
        this.trigger = 'hover';
        this.placement = 'top';
        this.popoverType = 'variation_1';
        this.bpsPopoverBackdrop = false;
        // eslint-disable-next-line @angular-eslint/no-output-rename
        this.visibleChange = new EventEmitter();
        this.componentRef = this.hostView.createComponent(BpsPopoverComponent);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsPopoverDirective, deps: [{ token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i0.ComponentFactoryResolver }, { token: i0.Renderer2 }, { token: i1$1.NzNoAnimationDirective, host: true, optional: true }, { token: i2$3.NzConfigService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsPopoverDirective, selector: "[bps-popover]", inputs: { arrowPointAtCenter: ["bpsPopoverArrowPointAtCenter", "arrowPointAtCenter"], title: ["bpsPopoverTitle", "title"], content: ["bpsPopoverContent", "content"], directiveTitle: ["bps-popover", "directiveTitle"], trigger: ["bpsPopoverTrigger", "trigger"], placement: ["bpsPopoverPlacement", "placement"], origin: ["bpsPopoverOrigin", "origin"], visible: ["bpsPopoverVisible", "visible"], mouseEnterDelay: ["bpsPopoverMouseEnterDelay", "mouseEnterDelay"], mouseLeaveDelay: ["bpsPopoverMouseLeaveDelay", "mouseLeaveDelay"], overlayClassName: ["bpsPopoverOverlayClassName", "overlayClassName"], overlayStyle: ["bpsPopoverOverlayStyle", "overlayStyle"], popoverType: ["bpsPopoverType", "popoverType"], bpsPopoverBackdrop: "bpsPopoverBackdrop" }, outputs: { visibleChange: "bpsPopoverVisibleChange" }, host: { properties: { "class.ant-popover-open": "visible" } }, exportAs: ["bpsPopover"], usesInheritance: true, ngImport: i0 }); }
}
__decorate([
    InputBoolean()
], BpsPopoverDirective.prototype, "arrowPointAtCenter", void 0);
__decorate([
    WithConfig$1()
], BpsPopoverDirective.prototype, "bpsPopoverBackdrop", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsPopoverDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-popover]',
                    exportAs: 'bpsPopover',
                    host: {
                        '[class.ant-popover-open]': 'visible'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i0.ComponentFactoryResolver }, { type: i0.Renderer2 }, { type: i1$1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i2$3.NzConfigService }]; }, propDecorators: { arrowPointAtCenter: [{
                type: Input,
                args: ['bpsPopoverArrowPointAtCenter']
            }], title: [{
                type: Input,
                args: ['bpsPopoverTitle']
            }], content: [{
                type: Input,
                args: ['bpsPopoverContent']
            }], directiveTitle: [{
                type: Input,
                args: ['bps-popover']
            }], trigger: [{
                type: Input,
                args: ['bpsPopoverTrigger']
            }], placement: [{
                type: Input,
                args: ['bpsPopoverPlacement']
            }], origin: [{
                type: Input,
                args: ['bpsPopoverOrigin']
            }], visible: [{
                type: Input,
                args: ['bpsPopoverVisible']
            }], mouseEnterDelay: [{
                type: Input,
                args: ['bpsPopoverMouseEnterDelay']
            }], mouseLeaveDelay: [{
                type: Input,
                args: ['bpsPopoverMouseLeaveDelay']
            }], overlayClassName: [{
                type: Input,
                args: ['bpsPopoverOverlayClassName']
            }], overlayStyle: [{
                type: Input,
                args: ['bpsPopoverOverlayStyle']
            }], popoverType: [{
                type: Input,
                args: ['bpsPopoverType']
            }], bpsPopoverBackdrop: [{
                type: Input
            }], visibleChange: [{
                type: Output,
                args: ['bpsPopoverVisibleChange']
            }] } });
class BpsPopoverComponent extends BpsToolTipComponent {
    constructor(cdr, directionality, noAnimation) {
        super(cdr, directionality, noAnimation);
        this._prefix = 'ant-popover';
    }
    get hasBackdrop() {
        return this.bpsTrigger === 'click' ? this.bpsBackdrop : false;
    }
    isEmpty() {
        return isTooltipEmpty(this.bpsTitle) && isTooltipEmpty(this.bpsContent);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsPopoverComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }, { token: i1$1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsPopoverComponent, selector: "bps-popover", exportAs: ["nzPopoverComponent"], usesInheritance: true, ngImport: i0, template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="bpsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="bpsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow bps-popover-arrow-{{bpsPopoverType}}">
            <span class="ant-popover-arrow-content bps-popover-inner-{{bpsPopoverType}}"></span>
          </div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="bpsTitle">
                <ng-container *nzStringTemplateOutlet="bpsTitle">{{ bpsTitle }}</ng-container>
              </div> 
              <div class="ant-popover-inner-content bps-popover-inner-content-{{bpsPopoverType}}">
                <ng-container *nzStringTemplateOutlet="bpsContent">{{ bpsContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `, isInline: true, styles: [".ant-popover-placement-right .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.ant-popover-arrow-content:before{top:-12.31px;left:-12.31px}.ant-popover-arrow-content{background-color:#00a2d1}.ant-popover-arrow-content:before{border-style:unset!important}.ant-popover-inner{box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#262626!important;border-radius:8px!important}.ant-popover-inner-content{font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff;padding:15px!important}.bps-popover-content-title{font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.31;letter-spacing:normal;text-align:left;color:#00a2d1;margin-bottom:10px}.bps-popover-content-subtitle{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.36;letter-spacing:normal;text-align:left;color:#fff;margin-bottom:15px}.bps-popover-inner-variation_7a{border:solid 1px #7bc053!important}.ant-popover-placement-right .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.bps-popover-custom-content-icon{width:45px;position:relative;float:left;top:50%;transform:translateY(-50%);padding-left:8px}.bps-popover-custom-content{width:370px;position:relative;float:right;top:50%;transform:translateY(-50%);padding-right:10px}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i2$4.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i1$1.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "directive", type: i6.NzConnectedOverlayDirective, selector: "[cdkConnectedOverlay][nzConnectedOverlay]", inputs: ["nzArrowPointAtCenter"], exportAs: ["nzConnectedOverlay"] }], animations: [zoomBigMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsPopoverComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-popover', exportAs: 'nzPopoverComponent', animations: [zoomBigMotion], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, preserveWhitespaces: false, template: `
    <ng-template
      #overlay="cdkConnectedOverlay"
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="hasBackdrop"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayPositions]="_positions"
      [cdkConnectedOverlayOpen]="_visible"
      [cdkConnectedOverlayPush]="true"
      [nzArrowPointAtCenter]="bpsArrowPointAtCenter"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="hide()"
      (positionChange)="onPositionChange($event)"
    >
      <div
        class="ant-popover"
        [class.ant-popover-rtl]="dir === 'rtl'"
        [ngClass]="_classMap"
        [ngStyle]="bpsOverlayStyle"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [@zoomBigMotion]="'active'"
      >
        <div class="ant-popover-content">
          <div class="ant-popover-arrow bps-popover-arrow-{{bpsPopoverType}}">
            <span class="ant-popover-arrow-content bps-popover-inner-{{bpsPopoverType}}"></span>
          </div>
          <div class="ant-popover-inner" role="tooltip">
            <div>
              <div class="ant-popover-title" *ngIf="bpsTitle">
                <ng-container *nzStringTemplateOutlet="bpsTitle">{{ bpsTitle }}</ng-container>
              </div> 
              <div class="ant-popover-inner-content bps-popover-inner-content-{{bpsPopoverType}}">
                <ng-container *nzStringTemplateOutlet="bpsContent">{{ bpsContent }}</ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `, styles: [".ant-popover-placement-right .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content:before{border-right:1px solid #00a2d1!important;border-bottom:1px solid #00a2d1!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content:before{border-left:1px solid #00a2d1!important;border-top:1px solid #00a2d1!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.ant-popover-arrow-content:before{top:-12.31px;left:-12.31px}.ant-popover-arrow-content{background-color:#00a2d1}.ant-popover-arrow-content:before{border-style:unset!important}.ant-popover-inner{box-shadow:0 3px 12px #000000e6!important;border:solid 1px #00a2d1!important;background-color:#262626!important;border-radius:8px!important}.ant-popover-inner-content{font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff;padding:15px!important}.bps-popover-content-title{font-size:13px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.31;letter-spacing:normal;text-align:left;color:#00a2d1;margin-bottom:10px}.bps-popover-content-subtitle{font-size:11px;font-weight:400;font-stretch:normal;font-style:normal;line-height:1.36;letter-spacing:normal;text-align:left;color:#fff;margin-bottom:15px}.bps-popover-inner-variation_7a{border:solid 1px #7bc053!important}.ant-popover-placement-right .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-right-color:#262626!important;border-top-color:#262626!important}.ant-popover-placement-left .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-left-color:#262626!important;border-bottom-color:#262626!important}.ant-popover-placement-top .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-right:1px solid #7bc053!important;border-bottom:1px solid #7bc053!important;background-color:#262626!important;border-top-color:#262626!important;border-left-color:#262626!important}.ant-popover-placement-bottom .ant-popover-arrow-content.bps-popover-arrow-variation_7a:before{border-left:1px solid #7bc053!important;border-top:1px solid #7bc053!important;background-color:#262626!important;border-bottom-color:#262626!important;border-right-color:#262626!important}.bps-popover-custom-content-icon{width:45px;position:relative;float:left;top:50%;transform:translateY(-50%);padding-left:8px}.bps-popover-custom-content{width:370px;position:relative;float:right;top:50%;transform:translateY(-50%);padding-right:10px}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1$1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; } });

class BpsListComponent {
    _setClassMap() {
        const classMap = {
            ['bps-cmacs-custom-scrollbar']: true,
            [this.prefixCls]: true,
            [`bps-list-type-${this.bpsListType}`]: true,
            [`${this.prefixCls}-vertical`]: this.bpsItemLayout === 'vertical',
            [`${this.prefixCls}-lg`]: this.bpsSize === 'large',
            [`${this.prefixCls}-sm`]: this.bpsSize === 'small',
            [`${this.prefixCls}-split`]: this.bpsSplit,
            [`${this.prefixCls}-bordered`]: this.bpsBordered,
            [`${this.prefixCls}-loading`]: this.bpsLoading,
            [`${this.prefixCls}-grid`]: this.bpsGrid,
            [`${this.prefixCls}-something-after-last-item`]: !!(this.bpsLoadMore || this.bpsPagination || this.bpsFooter)
        };
        this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
    }
    get itemLayoutNotify$() {
        return this.itemLayoutNotifySource.asObservable();
    }
    constructor(el, updateHostClassService) {
        this.el = el;
        this.updateHostClassService = updateHostClassService;
        this.bpsBordered = false;
        this.bpsDisabled = false;
        this.bpsListType = 'variation1';
        this.bpsItemLayout = 'horizontal';
        this.bpsLoading = false;
        this.bpsSize = 'default';
        this.bpsSplit = true;
        // #endregion
        // #region styles
        this.prefixCls = 'ant-list';
        // #endregion
        this.itemLayoutNotifySource = new BehaviorSubject(this.bpsItemLayout);
    }
    ngOnInit() {
        this._setClassMap();
    }
    ngOnChanges(changes) {
        this._setClassMap();
        if (changes.bpsItemLayout) {
            this.itemLayoutNotifySource.next(this.bpsItemLayout);
        }
    }
    ngOnDestroy() {
        this.itemLayoutNotifySource.unsubscribe();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsListComponent, deps: [{ token: i0.ElementRef }, { token: NzUpdateHostClassService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsListComponent, selector: "bps-list, [bps-list]", inputs: { bpsDataSource: "bpsDataSource", bpsBordered: "bpsBordered", bpsDisabled: "bpsDisabled", bpsGrid: "bpsGrid", bpsListType: "bpsListType", bpsHeader: "bpsHeader", bpsFooter: "bpsFooter", bpsItemLayout: "bpsItemLayout", bpsRenderItem: "bpsRenderItem", bpsLoading: "bpsLoading", bpsLoadMore: "bpsLoadMore", bpsPagination: "bpsPagination", bpsSize: "bpsSize", bpsSplit: "bpsSplit", bpsNoResult: "bpsNoResult" }, providers: [NzUpdateHostClassService], exportAs: ["bpsList"], usesOnChanges: true, ngImport: i0, template: "<ng-container *ngIf=\"!bpsDisabled\">\r\n  <ng-template #itemsTpl>\r\n    <div class=\"ant-list-items\" *ngIf=\"bpsDataSource.length > 0\">\r\n      <ng-container *ngFor=\"let item of bpsDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"bpsHeader\" class=\"ant-list-header\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  </div>\r\n  <nz-spin [nzSpinning]=\"bpsLoading\">\r\n    <ng-container *ngIf=\"bpsDataSource\">\r\n      <div *ngIf=\"bpsLoading && bpsDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n      <div *ngIf=\"bpsGrid; else itemsTpl\" nz-row [nzGutter]=\"bpsGrid.gutter\">\r\n        <div nz-col [nzSpan]=\"bpsGrid.span\" [nzXs]=\"bpsGrid.xs\" [nzSm]=\"bpsGrid.sm\" [nzMd]=\"bpsGrid.md\" [nzLg]=\"bpsGrid.lg\" [nzXl]=\"bpsGrid.xl\"\r\n             [nzXXl]=\"bpsGrid.xxl\" *ngFor=\"let item of bpsDataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!bpsLoading && bpsDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n        <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"bpsNoResult\"></nz-embed-empty>\r\n      </div>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </nz-spin>\r\n  <div *ngIf=\"bpsFooter\" class=\"ant-list-footer\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsFooter\">{{ bpsFooter }}</ng-container>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"bpsLoadMore\"></ng-template>\r\n  <div *ngIf=\"bpsPagination\" class=\"ant-list-pagination\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsPagination\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n", styles: [".ant-list-bordered{width:217px!important;max-width:217px!important;height:80px!important;max-height:80px!important;overflow-y:scroll!important;overflow-x:hidden!important;padding:5px!important;border-radius:4px!important;border:solid 1px #474747!important}.ant-list-bordered .ant-list-item{width:200px!important;height:20px!important;border-radius:10px!important;font-size:11px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;margin-bottom:2px!important;padding:0 8px 2px 9px!important}.ant-list-bordered .ant-list-item:hover{cursor:pointer}.ant-list-bordered.bps-list-type-variation1 .ant-list-item{background-color:#005068!important}.ant-list-bordered.bps-list-type-variation2 .ant-list-item{background-color:#00a2d1!important}.ant-list-bordered.bps-list-type-variation3 .ant-list-item{background-color:#005681!important}.ant-list-bordered.bps-list-type-variation4 .ant-list-item{background-color:#06809f!important}.ant-list-bordered.bps-list-type-variation5 .ant-list-item{background-color:#445c67!important}.ant-list-bordered.bps-list-type-variation6 .ant-list-item{background-color:#778d98!important}.ant-list-split .ant-list-item{border-bottom:unset}.bps-delete-list-icon{position:relative;float:right;top:50%;transform:translateY(-50%)}.bps-list-item-content{position:relative;float:left;top:50%;width:calc(100% - 8px);max-width:calc(100% - 8px);overflow:hidden;text-overflow:ellipsis;transform:translateY(-50%);white-space:nowrap;padding-right:5px;margin-top:-4px}.ant-list-bordered .ant-list-item.bps-delete-icon-hovered{background-color:#bc0000!important}\n", "bps-list,bps-list nz-spin{display:block}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i4.NzEmbedEmptyComponent, selector: "nz-embed-empty", inputs: ["nzComponentName", "specificContent"], exportAs: ["nzEmbedEmpty"] }, { kind: "directive", type: i5.NzColDirective, selector: "[nz-col],nz-col,nz-form-control,nz-form-label", inputs: ["nzFlex", "nzSpan", "nzOrder", "nzOffset", "nzPush", "nzPull", "nzXs", "nzSm", "nzMd", "nzLg", "nzXl", "nzXXl"], exportAs: ["nzCol"] }, { kind: "directive", type: i5.NzRowDirective, selector: "[nz-row],nz-row,nz-form-item", inputs: ["nzAlign", "nzJustify", "nzGutter"], exportAs: ["nzRow"] }, { kind: "component", type: i6$1.NzSpinComponent, selector: "nz-spin", inputs: ["nzIndicator", "nzSize", "nzTip", "nzDelay", "nzSimple", "nzSpinning"], exportAs: ["nzSpin"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsBordered", void 0);
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsListComponent.prototype, "bpsSplit", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-list, [bps-list]', exportAs: 'bpsList', providers: [NzUpdateHostClassService], preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-container *ngIf=\"!bpsDisabled\">\r\n  <ng-template #itemsTpl>\r\n    <div class=\"ant-list-items\" *ngIf=\"bpsDataSource.length > 0\">\r\n      <ng-container *ngFor=\"let item of bpsDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </ng-container>\r\n    </div>\r\n  </ng-template>\r\n  <div *ngIf=\"bpsHeader\" class=\"ant-list-header\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsHeader\">{{ bpsHeader }}</ng-container>\r\n  </div>\r\n  <nz-spin [nzSpinning]=\"bpsLoading\">\r\n    <ng-container *ngIf=\"bpsDataSource\">\r\n      <div *ngIf=\"bpsLoading && bpsDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n      <div *ngIf=\"bpsGrid; else itemsTpl\" nz-row [nzGutter]=\"bpsGrid.gutter\">\r\n        <div nz-col [nzSpan]=\"bpsGrid.span\" [nzXs]=\"bpsGrid.xs\" [nzSm]=\"bpsGrid.sm\" [nzMd]=\"bpsGrid.md\" [nzLg]=\"bpsGrid.lg\" [nzXl]=\"bpsGrid.xl\"\r\n             [nzXXl]=\"bpsGrid.xxl\" *ngFor=\"let item of bpsDataSource; let index = index\">\r\n          <ng-template [ngTemplateOutlet]=\"bpsRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"!bpsLoading && bpsDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n        <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"bpsNoResult\"></nz-embed-empty>\r\n      </div>\r\n    </ng-container>\r\n    <ng-content></ng-content>\r\n  </nz-spin>\r\n  <div *ngIf=\"bpsFooter\" class=\"ant-list-footer\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsFooter\">{{ bpsFooter }}</ng-container>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"bpsLoadMore\"></ng-template>\r\n  <div *ngIf=\"bpsPagination\" class=\"ant-list-pagination\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsPagination\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n", styles: [".ant-list-bordered{width:217px!important;max-width:217px!important;height:80px!important;max-height:80px!important;overflow-y:scroll!important;overflow-x:hidden!important;padding:5px!important;border-radius:4px!important;border:solid 1px #474747!important}.ant-list-bordered .ant-list-item{width:200px!important;height:20px!important;border-radius:10px!important;font-size:11px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:1.36!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important;margin-bottom:2px!important;padding:0 8px 2px 9px!important}.ant-list-bordered .ant-list-item:hover{cursor:pointer}.ant-list-bordered.bps-list-type-variation1 .ant-list-item{background-color:#005068!important}.ant-list-bordered.bps-list-type-variation2 .ant-list-item{background-color:#00a2d1!important}.ant-list-bordered.bps-list-type-variation3 .ant-list-item{background-color:#005681!important}.ant-list-bordered.bps-list-type-variation4 .ant-list-item{background-color:#06809f!important}.ant-list-bordered.bps-list-type-variation5 .ant-list-item{background-color:#445c67!important}.ant-list-bordered.bps-list-type-variation6 .ant-list-item{background-color:#778d98!important}.ant-list-split .ant-list-item{border-bottom:unset}.bps-delete-list-icon{position:relative;float:right;top:50%;transform:translateY(-50%)}.bps-list-item-content{position:relative;float:left;top:50%;width:calc(100% - 8px);max-width:calc(100% - 8px);overflow:hidden;text-overflow:ellipsis;transform:translateY(-50%);white-space:nowrap;padding-right:5px;margin-top:-4px}.ant-list-bordered .ant-list-item.bps-delete-icon-hovered{background-color:#bc0000!important}\n", "bps-list,bps-list nz-spin{display:block}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: NzUpdateHostClassService }]; }, propDecorators: { bpsDataSource: [{
                type: Input
            }], bpsBordered: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsGrid: [{
                type: Input
            }], bpsListType: [{
                type: Input
            }], bpsHeader: [{
                type: Input
            }], bpsFooter: [{
                type: Input
            }], bpsItemLayout: [{
                type: Input
            }], bpsRenderItem: [{
                type: Input
            }], bpsLoading: [{
                type: Input
            }], bpsLoadMore: [{
                type: Input
            }], bpsPagination: [{
                type: Input
            }], bpsSize: [{
                type: Input
            }], bpsSplit: [{
                type: Input
            }], bpsNoResult: [{
                type: Input
            }] } });

class BpsListItemMetaComponent {
    set bpsAvatar(value) {
        if (value instanceof TemplateRef) {
            this.avatarStr = '';
            this.avatarTpl = value;
        }
        else {
            this.avatarStr = value;
        }
    }
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.avatarStr = '';
        this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsListItemMetaComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsListItemMetaComponent, selector: "bps-list-item-meta, [bps-list-item-meta]", inputs: { bpsAvatar: "bpsAvatar", bpsTitle: "bpsTitle", bpsDescription: "bpsDescription" }, exportAs: ["bpsListItemMeta"], ngImport: i0, template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\r\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\r\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\r\n  </ng-container>\r\n</div>\r\n<div *ngIf=\"bpsTitle || bpsDescription\" class=\"ant-list-item-meta-content\">\r\n  <h4 *ngIf=\"bpsTitle\" class=\"ant-list-item-meta-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsTitle\">{{ bpsTitle }}</ng-container>\r\n  </h4>\r\n  <div *ngIf=\"bpsDescription\" class=\"ant-list-item-meta-description\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsDescription\">{{ bpsDescription }}</ng-container>\r\n  </div>\r\n</div>\r\n", dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "component", type: i3$4.NzAvatarComponent, selector: "nz-avatar", inputs: ["nzShape", "nzSize", "nzGap", "nzText", "nzSrc", "nzSrcSet", "nzAlt", "nzIcon"], outputs: ["nzError"], exportAs: ["nzAvatar"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsListItemMetaComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-list-item-meta, [bps-list-item-meta]', exportAs: 'bpsListItemMeta', preserveWhitespaces: false, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\r\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\r\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\r\n  </ng-container>\r\n</div>\r\n<div *ngIf=\"bpsTitle || bpsDescription\" class=\"ant-list-item-meta-content\">\r\n  <h4 *ngIf=\"bpsTitle\" class=\"ant-list-item-meta-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsTitle\">{{ bpsTitle }}</ng-container>\r\n  </h4>\r\n  <div *ngIf=\"bpsDescription\" class=\"ant-list-item-meta-description\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsDescription\">{{ bpsDescription }}</ng-container>\r\n  </div>\r\n</div>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { bpsAvatar: [{
                type: Input
            }], bpsTitle: [{
                type: Input
            }], bpsDescription: [{
                type: Input
            }] } });

class BpsListItemComponent {
    get isVerticalAndExtra() {
        return this.itemLayout === 'vertical' && !!this.bpsExtra;
    }
    onDeleteHover(event) {
        this._onDeleteHover = event;
        this.ondeletehover.emit(event);
    }
    onHover(event) {
        this.hover.emit(event);
    }
    onDelete() {
        this.ondelete.emit();
    }
    constructor(elementRef, renderer, parentComp, cdr) {
        this.parentComp = parentComp;
        this.cdr = cdr;
        this._onDeleteHover = false;
        this.bpsActions = [];
        this.bpsNoFlex = false;
        this.bpsDelete = false;
        this.ondelete = new EventEmitter();
        this.ondeletehover = new EventEmitter();
        this.hover = new EventEmitter();
        renderer.addClass(elementRef.nativeElement, 'ant-list-item');
    }
    ngAfterViewInit() {
        this.itemLayout$ = this.parentComp.itemLayoutNotify$.subscribe(val => {
            this.itemLayout = val;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        if (this.itemLayout$) {
            this.itemLayout$.unsubscribe();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsListItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: BpsListComponent }, { token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsListItemComponent, selector: "bps-list-item, [bps-list-item]", inputs: { bpsActions: "bpsActions", bpsContent: "bpsContent", bpsExtra: "bpsExtra", bpsNoFlex: "bpsNoFlex", bpsDelete: "bpsDelete" }, outputs: { ondelete: "ondelete", ondeletehover: "ondeletehover", hover: "hover" }, host: { properties: { "class.bps-delete-icon-hovered": "_onDeleteHover", "class.ant-list-item-no-flex": "this.bpsNoFlex" } }, queries: [{ propertyName: "metas", predicate: BpsListItemMetaComponent }], exportAs: ["bpsListItem"], ngImport: i0, template: "<ng-template #actionsTpl>\r\n  <ul *ngIf=\"bpsActions?.length > 0\" class=\"ant-list-item-action\">\r\n    <li *ngFor=\"let i of bpsActions; let last=last;\">\r\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\r\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #contentTpl>\r\n  <div class=\"bps-list-item-content\"\r\n       (mouseenter)=\"onHover(true)\"\r\n       (mouseleave)=\"onHover(false)\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n  <ng-container *ngIf=\"bpsDelete\">\r\n    <div class=\"bps-delete-list-icon\"\r\n         (click)=\"onDelete()\"\r\n         (mouseenter)=\"onDeleteHover(true)\"\r\n         (mouseleave)=\"onDeleteHover(false)\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.609\" height=\"10.609\" viewBox=\"0 0 10.609 10.609\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_x_icon_deleteglass_white\" transform=\"rotate(45 799.93 -996.928)\">\r\n          <rect id=\"prefix__Rectangle_1881\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1881\" rx=\"1\" transform=\"translate(945.732 267.142)\" />\r\n          <rect id=\"prefix__Rectangle_1882\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1882\" rx=\"1\" transform=\"rotate(-90 607.436 -332.794)\" />\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bpsContent\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsContent\">{{ bpsContent }}</ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #simpleTpl>\r\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n</ng-template>\r\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\r\n  <div class=\"ant-list-item-main\">\r\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n  </div>\r\n  <div class=\"ant-list-item-extra\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n", dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsListItemComponent.prototype, "bpsNoFlex", void 0);
__decorate([
    InputBoolean()
], BpsListItemComponent.prototype, "bpsDelete", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsListItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-list-item, [bps-list-item]', exportAs: 'bpsListItem', preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[class.bps-delete-icon-hovered]': '_onDeleteHover'
                    }, template: "<ng-template #actionsTpl>\r\n  <ul *ngIf=\"bpsActions?.length > 0\" class=\"ant-list-item-action\">\r\n    <li *ngFor=\"let i of bpsActions; let last=last;\">\r\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\r\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #contentTpl>\r\n  <div class=\"bps-list-item-content\"\r\n       (mouseenter)=\"onHover(true)\"\r\n       (mouseleave)=\"onHover(false)\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n  <ng-container *ngIf=\"bpsDelete\">\r\n    <div class=\"bps-delete-list-icon\"\r\n         (click)=\"onDelete()\"\r\n         (mouseenter)=\"onDeleteHover(true)\"\r\n         (mouseleave)=\"onDeleteHover(false)\">\r\n      <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10.609\" height=\"10.609\" viewBox=\"0 0 10.609 10.609\">\r\n        <defs>\r\n          <style>\r\n\r\n            .prefix__cls-1 {\r\n              fill: #fff\r\n            }\r\n          </style>\r\n        </defs>\r\n        <g id=\"prefix__sps_x_icon_deleteglass_white\" transform=\"rotate(45 799.93 -996.928)\">\r\n          <rect id=\"prefix__Rectangle_1881\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1881\" rx=\"1\" transform=\"translate(945.732 267.142)\" />\r\n          <rect id=\"prefix__Rectangle_1882\" width=\"2\" height=\"13\" class=\"prefix__cls-1\" data-name=\"Rectangle 1882\" rx=\"1\" transform=\"rotate(-90 607.436 -332.794)\" />\r\n        </g>\r\n      </svg>\r\n    </div>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bpsContent\">\r\n    <ng-container *nzStringTemplateOutlet=\"bpsContent\">{{ bpsContent }}</ng-container>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #simpleTpl>\r\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n</ng-template>\r\n<ng-container *ngIf=\"isVerticalAndExtra; else simpleTpl\">\r\n  <div class=\"ant-list-item-main\">\r\n    <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n    <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n  </div>\r\n  <div class=\"ant-list-item-extra\">\r\n    <ng-template [ngTemplateOutlet]=\"bpsExtra\"></ng-template>\r\n  </div>\r\n</ng-container>\r\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: BpsListComponent }, { type: i0.ChangeDetectorRef }]; }, propDecorators: { metas: [{
                type: ContentChildren,
                args: [BpsListItemMetaComponent]
            }], bpsActions: [{
                type: Input
            }], bpsContent: [{
                type: Input
            }], bpsExtra: [{
                type: Input
            }], bpsNoFlex: [{
                type: Input
            }, {
                type: HostBinding,
                args: ['class.ant-list-item-no-flex']
            }], bpsDelete: [{
                type: Input
            }], ondelete: [{
                type: Output
            }], ondeletehover: [{
                type: Output
            }], hover: [{
                type: Output
            }] } });

const NZ_CONFIG_MODULE_NAME$1 = 'dropDown';
const listOfPositions = [
    POSITION_MAP.bottomLeft,
    POSITION_MAP.bottomRight,
    POSITION_MAP.topRight,
    POSITION_MAP.topLeft
];
class BpsDropDownDirective {
    setDropdownMenuValue(key, value) {
        if (this.bpsDropdownMenu) {
            this.bpsDropdownMenu.setValue(key, value);
        }
    }
    constructor(nzConfigService, elementRef, overlay, renderer, viewContainerRef, platform) {
        this.nzConfigService = nzConfigService;
        this.elementRef = elementRef;
        this.overlay = overlay;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.platform = platform;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME$1;
        this.overlayRef = null;
        this.destroy$ = new Subject();
        this.positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef.nativeElement)
            .withLockedPosition()
            .withTransformOriginOn('.ant-dropdown');
        this.inputVisible$ = new BehaviorSubject(false);
        this.bpsTrigger$ = new BehaviorSubject('hover');
        this.overlayClose$ = new Subject();
        this.bpsDropdownMenu = null;
        this.bpsTrigger = 'hover';
        this.bpsMatchWidthElement = null;
        this.bpsBackdrop = false;
        this.bpsClickHide = true;
        this.bpsDisabled = false;
        this.bpsVisible = false;
        this.bpsOverlayClassName = '';
        this.bpsOverlayStyle = {};
        this.bpsPlacement = 'bottomLeft';
        this.bpsVisibleChange = new EventEmitter();
    }
    ngAfterViewInit() {
        if (this.bpsDropdownMenu) {
            const nativeElement = this.elementRef.nativeElement;
            this.bpsDropdownMenu.bpsPlacement = this.bpsPlacement;
            /** host mouse state **/
            const hostMouseState$ = merge(fromEvent(nativeElement, 'mouseenter').pipe(mapTo(true)), fromEvent(nativeElement, 'mouseleave').pipe(mapTo(false)));
            /** menu mouse state **/
            const menuMouseState$ = this.bpsDropdownMenu.mouseState$;
            /** merged mouse state **/
            const mergedMouseState$ = merge(menuMouseState$, hostMouseState$);
            /** host click state **/
            const hostClickState$ = fromEvent(nativeElement, 'click').pipe(map(() => !this.bpsVisible));
            /** visible state switch by bpsTrigger **/
            const visibleStateByTrigger$ = this.bpsTrigger$.pipe(switchMap(trigger => {
                if (trigger === 'hover') {
                    return mergedMouseState$;
                }
                else if (trigger === 'click') {
                    return hostClickState$;
                }
                else {
                    return EMPTY;
                }
            }));
            const descendantMenuItemClick$ = this.bpsDropdownMenu.descendantMenuItemClick$.pipe(filter(() => this.bpsClickHide), mapTo(false));
            const domTriggerVisible$ = merge(visibleStateByTrigger$, descendantMenuItemClick$, this.overlayClose$).pipe(filter(() => !this.bpsDisabled));
            const visible$ = merge(this.inputVisible$, domTriggerVisible$);
            combineLatest([visible$, this.bpsDropdownMenu.isChildSubMenuOpen$])
                .pipe(map(([visible, sub]) => visible || sub), auditTime(150), distinctUntilChanged(), filter(() => this.platform.isBrowser), takeUntil(this.destroy$))
                .subscribe((visible) => {
                const element = this.bpsMatchWidthElement ? this.bpsMatchWidthElement.nativeElement : nativeElement;
                const triggerWidth = element.getBoundingClientRect().width;
                if (this.bpsVisible !== visible) {
                    this.bpsVisibleChange.emit(visible);
                }
                this.bpsVisible = visible;
                if (visible) {
                    /** set up overlayRef **/
                    if (!this.overlayRef) {
                        /** new overlay **/
                        this.overlayRef = this.overlay.create({
                            positionStrategy: this.positionStrategy,
                            minWidth: triggerWidth,
                            disposeOnNavigation: true,
                            hasBackdrop: this.bpsBackdrop && this.bpsTrigger === 'click',
                            scrollStrategy: this.overlay.scrollStrategies.reposition()
                        });
                        merge(this.overlayRef.backdropClick(), this.overlayRef.detachments(), this.overlayRef
                            .outsidePointerEvents()
                            .pipe(filter((e) => !this.elementRef.nativeElement.contains(e.target))), this.overlayRef.keydownEvents().pipe(filter(e => e.keyCode === ESCAPE && !hasModifierKey(e))))
                            .pipe(takeUntil(this.destroy$))
                            .subscribe(() => {
                            this.overlayClose$.next(false);
                        });
                    }
                    else {
                        /** update overlay config **/
                        const overlayConfig = this.overlayRef.getConfig();
                        overlayConfig.minWidth = triggerWidth;
                    }
                    /** open dropdown with animation **/
                    this.positionStrategy.withPositions([POSITION_MAP[this.bpsPlacement], ...listOfPositions]);
                    /** reset portal if needed **/
                    if (!this.portal || this.portal.templateRef !== this.bpsDropdownMenu.templateRef) {
                        this.portal = new TemplatePortal(this.bpsDropdownMenu.templateRef, this.viewContainerRef);
                    }
                    this.overlayRef.attach(this.portal);
                }
                else {
                    /** detach overlayRef if needed **/
                    if (this.overlayRef) {
                        this.overlayRef.detach();
                    }
                }
            });
            this.bpsDropdownMenu.animationStateChange$.pipe(takeUntil(this.destroy$)).subscribe(event => {
                if (event.toState === 'void') {
                    if (this.overlayRef) {
                        this.overlayRef.dispose();
                    }
                    this.overlayRef = null;
                }
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    ngOnChanges(changes) {
        const { bpsVisible, bpsDisabled, bpsOverlayClassName, bpsOverlayStyle, bpsTrigger } = changes;
        if (bpsTrigger) {
            this.bpsTrigger$.next(this.bpsTrigger);
        }
        if (bpsVisible) {
            this.inputVisible$.next(this.bpsVisible);
        }
        if (bpsDisabled) {
            const nativeElement = this.elementRef.nativeElement;
            if (this.bpsDisabled) {
                this.renderer.setAttribute(nativeElement, 'disabled', '');
                this.inputVisible$.next(false);
            }
            else {
                this.renderer.removeAttribute(nativeElement, 'disabled');
            }
        }
        if (bpsOverlayClassName) {
            this.setDropdownMenuValue('bpsOverlayClassName', this.bpsOverlayClassName);
        }
        if (bpsOverlayStyle) {
            this.setDropdownMenuValue('bpsOverlayStyle', this.bpsOverlayStyle);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropDownDirective, deps: [{ token: i2$3.NzConfigService }, { token: i0.ElementRef }, { token: i2$4.Overlay }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i3$3.Platform }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsDropDownDirective, selector: "[bps-dropdown]", inputs: { bpsDropdownMenu: "bpsDropdownMenu", bpsTrigger: "bpsTrigger", bpsMatchWidthElement: "bpsMatchWidthElement", bpsBackdrop: "bpsBackdrop", bpsClickHide: "bpsClickHide", bpsDisabled: "bpsDisabled", bpsVisible: "bpsVisible", bpsOverlayClassName: "bpsOverlayClassName", bpsOverlayStyle: "bpsOverlayStyle", bpsPlacement: "bpsPlacement" }, outputs: { bpsVisibleChange: "bpsVisibleChange" }, host: { classAttribute: "ant-dropdown-trigger" }, exportAs: ["bpsDropdown"], usesOnChanges: true, ngImport: i0 }); }
}
__decorate([
    WithConfig$1(),
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsBackdrop", void 0);
__decorate([
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsClickHide", void 0);
__decorate([
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsDropDownDirective.prototype, "bpsVisible", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropDownDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-dropdown]',
                    exportAs: 'bpsDropdown',
                    host: {
                        class: 'ant-dropdown-trigger'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i2$3.NzConfigService }, { type: i0.ElementRef }, { type: i2$4.Overlay }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i3$3.Platform }]; }, propDecorators: { bpsDropdownMenu: [{
                type: Input
            }], bpsTrigger: [{
                type: Input
            }], bpsMatchWidthElement: [{
                type: Input
            }], bpsBackdrop: [{
                type: Input
            }], bpsClickHide: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsVisible: [{
                type: Input
            }], bpsOverlayClassName: [{
                type: Input
            }], bpsOverlayStyle: [{
                type: Input
            }], bpsPlacement: [{
                type: Input
            }], bpsVisibleChange: [{
                type: Output
            }] } });

var TemplateType = {
    Date: 'Date',
    Select: 'Select',
    Number: 'Number',
    String: 'String',
    Boolean: 'Boolean',
    Time: 'Time',
};
var CeldType = {
    Default: 'Default',
    TemplateRef: 'TemplateRef'
};
// tslint:disable-next-line no-any
class BpsTableComponent {
    /* Table API */
    // tslint:disable-next-line: no-input-rename
    set data(data) {
        this._data = data;
        this.updateCheckboxCache();
    }
    handleClick(e) {
        if (this.editId !== null && this.inputElement && this.inputElement.nativeElement !== e.target) {
            this.emitOnEditEvent();
            this.editId = null;
        }
    }
    sort(sort) {
        const field = this.getFields().filter(item => item.property === sort.key)[0];
        if (field.disabled) {
            return;
        }
        this.sortChange.emit({ sortName: sort.key, sortValue: sort.value });
    }
    emitOnEditEvent() {
        let editedEl = this._data.filter(el => el[this.config.fieldId] === this.editId);
        if (editedEl.length) {
            this.onedit.emit(editedEl);
        }
    }
    focusInput($event, input) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
        input.focus();
    }
    endEditMode($event, index, data = null) {
        if ($event.key === ('Enter' || 'enter')) {
            this.emitOnEditEvent();
            this.editId = null;
            this.editProperty = null;
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    emitBpsEvent($event, type) {
        switch (type) {
            case 'pageIndex':
                this.pageIndexChange.emit($event);
                break;
            case 'currentPageData':
                this.currentPageDataChange.emit($event);
                break;
            case 'queryParams':
                this.queryParamsChange.emit($event);
                break;
            case 'pageSize':
                this.pageSizeChange.emit($event);
                break;
            case 'moreBtnClicked':
                this.moreBtnClicked.emit($event);
                break;
            case 'deleteBtnClicked':
                this.deleteBtnClicked.emit($event);
                break;
        }
    }
    getFields() {
        return this.config ? this.config.fields.filter(item => item.hidden === undefined || !item.hidden) : [];
    }
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.locale = {}; // tslint:disable-line:no-any
        this.destroy$ = new Subject();
        this.checkboxCache = [];
        this.mapOfExpandData = {};
        this._data = [];
        this.editId = null;
        this.editProperty = null;
        this.isExpanded = false;
        this.searchBoxHovered = false;
        this._searchSubject = new Subject();
        this.frontPagination = true;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.showPagination = true;
        this.paginationPosition = 'bottom';
        this.bordered = false;
        this.widthConfig = [];
        this.loading = false;
        this.loadingDelay = 0;
        this.scroll = { x: null, y: null };
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.showQuickJumper = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.simple = false;
        this.virtualItemSize = 0;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.inlineEdit = false;
        this.pageIndexChange = new EventEmitter();
        this.currentPageDataChange = new EventEmitter();
        this.queryParamsChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.ondblclickRow = new EventEmitter();
        this.selectionChange = new EventEmitter();
        /* Thead API */
        this.singleSort = true;
        this.sortChange = new EventEmitter();
        this.configChange = new EventEmitter();
        this.onedit = new EventEmitter();
        this.tableType = 'report';
        this.expandable = false;
        this.searchValueChange = new EventEmitter();
        this.moreBtnClicked = new EventEmitter();
        this.deleteBtnClicked = new EventEmitter();
        this.expandChange = new EventEmitter();
        this.forceUpdate = false;
        this.clicks = 0;
        this._setSearchSubscription();
    }
    _setSearchSubscription() {
        this._searchSubject.pipe(debounceTime(500)).subscribe((searchValue) => {
            this.searchValueChange.emit(searchValue);
        });
    }
    updateSearch(searchTextValue) {
        this._searchSubject.next(searchTextValue);
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    ngOnChanges(changes) {
        if (changes.data && this.config) {
            this.updateCheckboxCache();
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this._searchSubject.unsubscribe();
    }
    isCeldTypeTemplateRef(field) {
        return field.celdType === CeldType.TemplateRef;
    }
    isCeldTypeDefault(field) {
        return field.celdType === CeldType.Default;
    }
    getTDClassMap(field, data, fi = 9999) {
        return {
            ...field.ngClass,
            ['bps-td-disabled']: data.disabled,
            ['bps-td-no-padding']: data[this.config.fieldId] === this.editId,
            ['bps-fst-column']: !fi,
        };
    }
    isRowSelected(data) {
        if (this.config) {
            const dataSelected = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
            return dataSelected.indexOf(data[this.config.fieldId]) !== -1;
        }
        return false;
    }
    updateCheckboxCache() {
        const temp = [...this.checkboxCache];
        this.checkboxCache.length = 0;
        this._data.forEach(item => {
            const checkItem = temp.filter(e => e.data[this.config.fieldId] === item[this.config.fieldId]);
            this.checkboxCache.push({
                selected: checkItem.length ? checkItem[0].selected : false,
                data: item
            });
        });
    }
    clickRow(event, data) {
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.selectRow(data);
                if (this.expandable) {
                    const key = this.config.fieldId;
                    this.expandRow(data, !this.mapOfExpandData[data[key]]);
                    this.cdr.detectChanges();
                }
                event.preventDefault();
                event.stopImmediatePropagation();
            }
            else if (this.clicks === 2) {
                this.ondblclickRow.emit(data);
            }
            this.clicks = 0;
        }, 300);
    }
    startEdit(data, event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.inlineEdit && !data.disabled) {
            this.editId = data[this.config.fieldId];
            this.cdr.detectChanges();
            this.inputElement.nativeElement.focus();
            setTimeout(() => {
                this.inputElement.nativeElement.select();
            }, 100);
        }
    }
    editRow(data, property) {
        if (!data.disabled) {
            this.editId = data[this.config.fieldId];
            this.editProperty = property;
            this.cdr.detectChanges();
            this.inputElement.nativeElement.focus();
            setTimeout(() => {
                this.inputElement.nativeElement.select();
            }, 100);
        }
    }
    selectRow(data, selectionOnly = false) {
        if (!data.disabled) {
            if (!selectionOnly) {
                this.onclickRow.emit(data);
            }
            this.checkboxCache.forEach(item => {
                if (item.data[this.config.fieldId] === data[this.config.fieldId]) {
                    item.selected = true;
                    this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
            this.cdr.detectChanges();
        }
    }
    expandRow(data, $event) {
        this.mapOfExpandData = {};
        this.mapOfExpandData[data[this.config.fieldId]] = $event;
        this.expandChange.emit(this.mapOfExpandData);
    }
    changeIcon($event) {
        this.forceUpdate = $event;
        this.cdr.detectChanges();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTableComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1$4.NzI18nService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsTableComponent, selector: "bps-table", inputs: { data: "data", frontPagination: "frontPagination", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", showPagination: "showPagination", paginationPosition: "paginationPosition", bordered: "bordered", widthConfig: "widthConfig", loading: "loading", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", scroll: "scroll", title: "title", footer: "footer", noResult: "noResult", pageSizeOptions: "pageSizeOptions", showQuickJumper: "showQuickJumper", showSizeChanger: "showSizeChanger", showTotal: "showTotal", hideOnSinglePage: "hideOnSinglePage", simple: "simple", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", virtualForTrackBy: "virtualForTrackBy", inlineEdit: "inlineEdit", singleSort: "singleSort", config: "config", gridID: "gridID", filterPlaceholder: "filterPlaceholder", tableType: "tableType", expandable: "expandable", moreMenu: "moreMenu", deleteMenu: "deleteMenu", rowExpandTemplate: "rowExpandTemplate" }, outputs: { pageIndexChange: "pageIndexChange", currentPageDataChange: "currentPageDataChange", queryParamsChange: "queryParamsChange", pageSizeChange: "pageSizeChange", onclickRow: "onclickRow", ondblclickRow: "ondblclickRow", selectionChange: "selectionChange", sortChange: "sortChange", configChange: "configChange", onedit: "onedit", searchValueChange: "searchValueChange", moreBtnClicked: "moreBtnClicked", deleteBtnClicked: "deleteBtnClicked", expandChange: "expandChange" }, host: { listeners: { "window:mouseup": "handleClick($event)" } }, viewQueries: [{ propertyName: "inputElement", first: true, predicate: BpsInputDirective, descendants: true, read: ElementRef }], exportAs: ["bpsTable"], usesOnChanges: true, ngImport: i0, template: "<div id=\"{{gridID}}\"\r\n     class=\"bps-table-{{tableType}}\">\r\n  <input bps-input\r\n         *ngIf=\"tableType === 'glass_profile'\"\r\n         class=\"bps-table-glass-filter\"\r\n         [placeholder]=\"filterPlaceholder\"\r\n         (click)=\"preventDefault($event)\"\r\n         (keyup)=\"updateSearch($event.target.value)\">\r\n  <nz-table #gridComponent\r\n            class=\"bps-table\"\r\n            [nzData]=\"_data\"\r\n            [nzFrontPagination]=\"frontPagination\"\r\n            [nzTotal]=\"total\"\r\n            [nzPageIndex]=\"pageIndex\"\r\n            [nzPageSize]=\"pageSize\"\r\n            [nzShowPagination]=\"showPagination\"\r\n            [nzPaginationPosition]=\"paginationPosition\"\r\n            [nzBordered]=\"bordered\"\r\n            [nzWidthConfig]=\"widthConfig\"\r\n            [nzLoading]=\"loading\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\"\r\n            [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzScroll]=\"scroll\"\r\n            [nzTitle]=\"title\"\r\n            [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\"\r\n            [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\"\r\n            [nzShowTotal]=\"showTotal\"\r\n            [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n            [nzSimple]=\"simple\"\r\n            [nzVirtualItemSize]=\"virtualItemSize\"\r\n            [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n            [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n            [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n            (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n            (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n            (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n            (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n    <thead>\r\n      <tr>\r\n\r\n        <th *ngIf=\"expandable\"\r\n            [nzWidth]=\"'40px'\"\r\n            nzShowExpand>\r\n        </th>\r\n\r\n        <ng-container *ngFor=\"let field of getFields(); index as th\">\r\n          <ng-container *ngIf=\"field.showSort\">\r\n            <th [ngClass]=\"field.ngClass\"\r\n                [class.bps-column-disabled]=\"field.disabled\"\r\n                [(nzSortOrder)]=\"field.sortOrder\"\r\n\r\n                [nzShowSort]=\"field.showSort\"\r\n                (nzSortOrderChange)=\"sort({key: field.property, value: $event})\"\r\n                nzCustomFilter\r\n                [nzWidth]=\"field.width\">\r\n              <ng-container *ngIf=\"field.template; else cellValue\">\r\n                <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n              <ng-container *ngIf=\"field.showCustomFilter\">\r\n                <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n              </ng-container>\r\n            </th>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"!field.showSort\">\r\n            <th [ngClass]=\"field.ngClass\"\r\n                [class.bps-column-disabled]=\"field.disabled\"\r\n                nzCustomFilter\r\n                [nzWidth]=\"field.width\">\r\n              <ng-container *ngIf=\"field.template; else cellValue\">\r\n                <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n              <ng-container *ngIf=\"field.showCustomFilter\">\r\n                <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n              </ng-container>\r\n            </th>\r\n          </ng-container>\r\n        </ng-container>     \r\n\r\n        <th *ngIf=\"tableType === 'home'\"\r\n            [nzWidth]=\"'70px'\">\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n        <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n            [class.bps-table4-custom-row]=\"data.bpsTable4CustomRow\"\r\n            [class.bps-table-home-expanded-row]=\"mapOfExpandData[data[config.fieldId]]\"\r\n            (click)=\"clickRow($event, data)\"\r\n            [class.bps-table-pair-row]=\"tableType === 'report' && !(i % 2)\">\r\n\r\n          <ng-container *ngIf=\"expandable\">\r\n            <td nzShowExpand\r\n                style=\"border-bottom: none !important\"\r\n                (nzExpandChange)=\"expandRow(data, $event)\"\r\n                [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\"></td>\r\n          </ng-container>\r\n\r\n          <td *ngFor=\"let field of getFields(); index as fi\"\r\n              [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n            <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngIf=\"data[field.property]\">\r\n                <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field) && tableType !== 'home'\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                <div class=\"bps-table-td-content\">\r\n                  {{ data[field.property] }}\r\n                </div>\r\n                <ng-container *ngIf=\"!fi\">\r\n                  <span class=\"bps-report-table-menu-pencil\" (click)=\"startEdit(data, $event)\"></span>\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-template #editTpl>\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-template>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field) && tableType === 'home'\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId] || editProperty !== field.property\">\r\n                <div>\r\n                  {{ data[field.property] }}\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"editId === data[config.fieldId] && editProperty === field.property\">\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       [class.bps-editable-cell-input-home-table]=\"tableType === 'home'\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-container>\r\n\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td *ngIf=\"tableType === 'home'\">\r\n            <i class=\"bps-table-home-more-icon\"\r\n               bps-dropdown\r\n               (click)=\"emitBpsEvent(data, 'moreBtnClicked')\"\r\n               [bpsDropdownMenu]=\"moreMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n            <i class=\"bps-table-home-delete-icon\"\r\n               [class.bps-table-home-delete-icon-position-updated]=\"forceUpdate\"\r\n               bps-dropdown\r\n               (bpsForcedUpdatedPosition)=\"changeIcon($event)\"\r\n               (click)=\"emitBpsEvent(data, 'deleteBtnClicked')\"\r\n               [bpsDropdownMenu]=\"deleteMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n          </td>\r\n\r\n        </tr>\r\n\r\n        <ng-container *ngIf=\"expandable\">\r\n          <tr [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\">\r\n            <td [attr.colspan]=\"getFields().length + 2\">\r\n              <ng-container [ngTemplateOutlet]=\"rowExpandTemplate\" [ngTemplateOutletContext]=\"{data: data, index: i}\"></ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n\r\n<ng-template #customFilter>\r\n  <div class=\"bps-table-filter-icon\">\r\n    <bps-input-group [bpsPrefix]=\"searchPrefixIcon\"\r\n                     (click)=\"focusInput($event, searchInput)\"\r\n                     (mouseenter)=\"searchBoxHovered = true;\"\r\n                     (mouseleave)=\"searchBoxHovered = false;\"\r\n                     class=\"bps-table-custom-filter\">\r\n      <input bps-input\r\n             #searchInput\r\n             nz-th-extra\r\n             class=\"bps-table-filter-custom-input\"\r\n             (click)=\"preventDefault($event)\"\r\n             (keyup)=\"updateSearch($event.target.value)\"\r\n             nzTableFilter>\r\n    </bps-input-group>\r\n  </div>\r\n  \r\n  <ng-template #searchPrefixIcon let-disabled=\"false\">\r\n    <ng-container *ngIf=\"!searchBoxHovered  && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_enabled.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"searchBoxHovered && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_hover_activated.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_disabled.svg\" />\r\n    </ng-container>\r\n  </ng-template>\r\n</ng-template>\r\n", styles: ["::ng-deep .bps-table .ant-table-thead>tr>th,::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table-report .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){border-bottom:none!important;border-right:1px solid #363636!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:12px 5px 12px 0!important;border-bottom:1.2px solid #363636!important;border-right:none!important;color:#999!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel).bps-td-disabled{color:#666!important}::ng-deep .bps-table-report .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th{padding:10px;border-bottom:none!important;border-radius:0!important}::ng-deep .bps-table-home .bps-table .ant-table-thead>tr>th{padding:17px 5px 17px 0!important;border-bottom:1.2px solid #363636!important;border-top:1px solid #262626!important;border-radius:0!important}::ng-deep .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled){background:#313b3f!important}::ng-deep .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled) .bps-table-td-content{width:calc(100% - 18px)!important}::ng-deep .bps-table .ant-table-tbody>tr.bps-table-pair-row>td:not(.bps-td-expandable-panel){background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}::ng-deep .bps-table .ant-table-body{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-body{margin-top:2px!important}::ng-deep .bps-table-report .bps-table .ant-table-body{margin-top:3px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-glass_profile .bps-table .ant-table-header.ant-table-hide-scrollbar{background-color:#262626!important;margin-bottom:unset!important;overflow-x:hidden!important;border-bottom:none!important}::ng-deep .bps-table-report .bps-table .ant-table-header{box-shadow:-6px 3px 8px #000!important;z-index:2!important;position:relative!important;padding-bottom:0!important;overflow-y:hidden!important;overflow-x:hidden!important;margin-right:15px!important;border-top:1px solid #363636!important}::ng-deep .bps-table-report .ant-table table{padding-right:6px}::ng-deep .bps-table .ant-table{background-color:transparent}::ng-deep .bps-table-glass_profile .bps-table .ant-table-header{box-shadow:-1px 4px 5px #000!important;z-index:2!important;position:relative!important}::ng-deep .bps-table-home .bps-table .ant-table-header{box-shadow:-15px 2px 8px #000!important;z-index:2!important;position:relative!important}::ng-deep .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background-color:#445c67!important}.bps-fst-column{padding-left:20px!important;position:relative}.bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table .ant-table-expand-icon-th,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table .ant-table-row-expand-icon-expanded:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr .ant-table-row-expand-icon-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg);transform:rotate(0);top:-10px;background-color:transparent}::ng-deep .bps-table .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg);top:-10px;background:transparent}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel),::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background:#262626!important;color:#fff!important;cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover:not(.ant-table-selected-row) .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_hover.svg)}::ng-deep .bps-table .anticon svg{display:none!important}::ng-deep .anticon.ant-table-column-sorter-up.anticon-caret-up:not(.active)+.anticon.ant-table-column-sorter-down.anticon-caret-down:not(.active){content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:-2px}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .ant-table-measure-now{display:none}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}::ng-deep .bps-table .ant-table-column-title{position:unset;z-index:1}::ng-deep .bps-table .ant-table-header{overflow:hidden!important}.bps-table-filter-icon{position:absolute;top:10px;right:55px;width:270px;transition:all .3s;display:inline-block}::ng-deep .bps-table .bps-table-custom-filter .ant-input-prefix{padding:5px;background-color:#3d3d3d;border-radius:100px;left:1.4px!important;top:calc(50% + .8px);left:12.2px!important;position:absolute;z-index:3;top:5.2px}.bps-custom-filter-img{background:#3d3d3d;transition:all .3s}.bps-table-filter-custom-input{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input:hover{border:solid 1px #535353!important}.bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_enabled.svg);position:relative;top:-3px}.bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_right.svg);position:relative;left:1px}.bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_bottom.svg)}.bps-table-home-more-icon{margin-right:11px}.bps-table-home-delete-icon{padding:4px 9px;position:relative;background-color:#363636;border-radius:100px}.bps-table-home-more-icon{background-color:#363636;border-radius:100px;padding:4px 6px}.bps-table-home-more-icon:hover,.bps-table-home-delete-icon:hover{cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-more-icon:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_hover_active.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_right.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_bottom.svg)}::ng-deep .bps-table-glass_profile .bps-table .ant-table table{border-spacing:0 5px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){font-size:11px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{padding:7px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th:first-child{padding-left:20px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):first-child{border-radius:3px 0 0 3px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-radius:0 3px 3px 0!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){background-color:#363636!important;border-right:none!important;border-left:none!important;border-collapse:separate!important;padding:11px 5px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background-color:#363636!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){cursor:pointer}::ng-deep .bps-table .ant-table-column-sorters{display:inline-flex}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important;top:0;position:relative}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #445c67 inset,0 1px #445c67 inset,0 -1px #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset,-1px 0 #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td{border-bottom:none!important;transition:all .3s}.bps-td-disabled{cursor:not-allowed}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled),::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled){box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):first-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #00a2d1 inset,0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):last-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset,-1px 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row>td,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row:hover>td{background-color:#253d47!important}::ng-deep .ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar{border:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-expanded-row>td{padding:0!important;border-bottom:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.bps-table-home-expanded-row>td{border-bottom:none!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}.bps-editable-cell-input-home-table{padding-left:4px!important;border-radius:4px!important;width:95%!important}.bps-report-table-menu-pencil:after{content:\"\";position:absolute;top:5px;right:5px}::ng-deep .bps-table-report .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-report-table-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg);transform:scale(.95)}td:not(.bps-td-disabled) .bps-report-table-menu-pencil:hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i4$1.NzTableComponent, selector: "nz-table", inputs: ["nzTableLayout", "nzShowTotal", "nzItemRender", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy", "nzLoadingDelay", "nzPageIndex", "nzPageSize", "nzTotal", "nzWidthConfig", "nzData", "nzCustomColumn", "nzPaginationPosition", "nzScroll", "nzPaginationType", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzOuterBordered", "nzLoadingIndicator", "nzBordered", "nzSize", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], outputs: ["nzPageSizeChange", "nzPageIndexChange", "nzQueryParams", "nzCurrentPageDataChange", "nzCustomColumnChange"], exportAs: ["nzTable"] }, { kind: "component", type: i4$1.NzThAddOnComponent, selector: "th[nzColumnKey], th[nzSortFn], th[nzSortOrder], th[nzFilters], th[nzShowSort], th[nzShowFilter], th[nzCustomFilter]", inputs: ["nzColumnKey", "nzFilterMultiple", "nzSortOrder", "nzSortPriority", "nzSortDirections", "nzFilters", "nzSortFn", "nzFilterFn", "nzShowSort", "nzShowFilter", "nzCustomFilter"], outputs: ["nzCheckedChange", "nzSortOrderChange", "nzFilterChange"] }, { kind: "directive", type: i4$1.NzTableCellDirective, selector: "th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])" }, { kind: "directive", type: i4$1.NzThMeasureDirective, selector: "th", inputs: ["nzWidth", "colspan", "colSpan", "rowspan", "rowSpan"] }, { kind: "component", type: i4$1.NzTdAddOnComponent, selector: "td[nzChecked], td[nzDisabled], td[nzIndeterminate], td[nzIndentSize], td[nzExpand], td[nzShowExpand], td[nzShowCheckbox]", inputs: ["nzChecked", "nzDisabled", "nzIndeterminate", "nzIndentSize", "nzShowExpand", "nzShowCheckbox", "nzExpand"], outputs: ["nzCheckedChange", "nzExpandChange"] }, { kind: "component", type: i4$1.NzTheadComponent, selector: "thead:not(.ant-table-thead)", outputs: ["nzSortOrderChange"] }, { kind: "component", type: i4$1.NzTbodyComponent, selector: "tbody" }, { kind: "directive", type: i4$1.NzTrDirective, selector: "tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])" }, { kind: "directive", type: i4$1.NzTrExpandDirective, selector: "tr[nzExpand]", inputs: ["nzExpand"] }, { kind: "component", type: i4$1.NzTableFixedRowComponent, selector: "tr[nz-table-fixed-row], tr[nzExpand]" }, { kind: "directive", type: BpsDropDownDirective, selector: "[bps-dropdown]", inputs: ["bpsDropdownMenu", "bpsTrigger", "bpsMatchWidthElement", "bpsBackdrop", "bpsClickHide", "bpsDisabled", "bpsVisible", "bpsOverlayClassName", "bpsOverlayStyle", "bpsPlacement"], outputs: ["bpsVisibleChange"], exportAs: ["bpsDropdown"] }, { kind: "component", type: BpsInputGroupComponent, selector: "bps-input-group", inputs: ["bpsAddOnBeforeIcon", "bpsAddOnAfterIcon", "bpsPrefixIcon", "bpsSuffixIcon", "bpsAddOnBefore", "bpsAddOnAfter", "bpsPrefix", "bpsStatus", "bpsSuffix", "bpsSize", "bpsSearch", "bpsCompact"], exportAs: ["bpsInputGroup"] }, { kind: "directive", type: BpsInputDirective, selector: "input[bps-input],textarea[bps-input]", inputs: ["borderless", "size", "nzStepperless", "nzStatus", "opened", "disabled"], exportAs: ["bpsInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "frontPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "showPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "showQuickJumper", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "showSizeChanger", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "simple", void 0);
__decorate([
    InputNumber()
], BpsTableComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputNumber()
], BpsTableComponent.prototype, "virtualMaxBufferPx", void 0);
__decorate([
    InputNumber()
], BpsTableComponent.prototype, "virtualMinBufferPx", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "inlineEdit", void 0);
__decorate([
    InputBoolean()
], BpsTableComponent.prototype, "expandable", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTableComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-table', exportAs: 'bpsTable', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div id=\"{{gridID}}\"\r\n     class=\"bps-table-{{tableType}}\">\r\n  <input bps-input\r\n         *ngIf=\"tableType === 'glass_profile'\"\r\n         class=\"bps-table-glass-filter\"\r\n         [placeholder]=\"filterPlaceholder\"\r\n         (click)=\"preventDefault($event)\"\r\n         (keyup)=\"updateSearch($event.target.value)\">\r\n  <nz-table #gridComponent\r\n            class=\"bps-table\"\r\n            [nzData]=\"_data\"\r\n            [nzFrontPagination]=\"frontPagination\"\r\n            [nzTotal]=\"total\"\r\n            [nzPageIndex]=\"pageIndex\"\r\n            [nzPageSize]=\"pageSize\"\r\n            [nzShowPagination]=\"showPagination\"\r\n            [nzPaginationPosition]=\"paginationPosition\"\r\n            [nzBordered]=\"bordered\"\r\n            [nzWidthConfig]=\"widthConfig\"\r\n            [nzLoading]=\"loading\"\r\n            [nzLoadingIndicator]=\"loadingIndicator\"\r\n            [nzLoadingDelay]=\"loadingDelay\"\r\n            [nzScroll]=\"scroll\"\r\n            [nzTitle]=\"title\"\r\n            [nzFooter]=\"footer\"\r\n            [nzNoResult]=\"noResult\"\r\n            [nzPageSizeOptions]=\"pageSizeOptions\"\r\n            [nzShowQuickJumper]=\"showQuickJumper\"\r\n            [nzShowSizeChanger]=\"showSizeChanger\"\r\n            [nzShowTotal]=\"showTotal\"\r\n            [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n            [nzSimple]=\"simple\"\r\n            [nzVirtualItemSize]=\"virtualItemSize\"\r\n            [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n            [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n            [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n            (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n            (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n            (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n            (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n    <thead>\r\n      <tr>\r\n\r\n        <th *ngIf=\"expandable\"\r\n            [nzWidth]=\"'40px'\"\r\n            nzShowExpand>\r\n        </th>\r\n\r\n        <ng-container *ngFor=\"let field of getFields(); index as th\">\r\n          <ng-container *ngIf=\"field.showSort\">\r\n            <th [ngClass]=\"field.ngClass\"\r\n                [class.bps-column-disabled]=\"field.disabled\"\r\n                [(nzSortOrder)]=\"field.sortOrder\"\r\n\r\n                [nzShowSort]=\"field.showSort\"\r\n                (nzSortOrderChange)=\"sort({key: field.property, value: $event})\"\r\n                nzCustomFilter\r\n                [nzWidth]=\"field.width\">\r\n              <ng-container *ngIf=\"field.template; else cellValue\">\r\n                <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n              <ng-container *ngIf=\"field.showCustomFilter\">\r\n                <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n              </ng-container>\r\n            </th>\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"!field.showSort\">\r\n            <th [ngClass]=\"field.ngClass\"\r\n                [class.bps-column-disabled]=\"field.disabled\"\r\n                nzCustomFilter\r\n                [nzWidth]=\"field.width\">\r\n              <ng-container *ngIf=\"field.template; else cellValue\">\r\n                <ng-container *ngTemplateOutlet=\"field.template.ref; context: field.template.context\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #cellValue>{{field.display}}</ng-template>\r\n\r\n              <ng-container *ngIf=\"field.showCustomFilter\">\r\n                <ng-container [ngTemplateOutlet]=\"customFilter\"></ng-container>\r\n              </ng-container>\r\n            </th>\r\n          </ng-container>\r\n        </ng-container>     \r\n\r\n        <th *ngIf=\"tableType === 'home'\"\r\n            [nzWidth]=\"'70px'\">\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n        <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n            [class.bps-table4-custom-row]=\"data.bpsTable4CustomRow\"\r\n            [class.bps-table-home-expanded-row]=\"mapOfExpandData[data[config.fieldId]]\"\r\n            (click)=\"clickRow($event, data)\"\r\n            [class.bps-table-pair-row]=\"tableType === 'report' && !(i % 2)\">\r\n\r\n          <ng-container *ngIf=\"expandable\">\r\n            <td nzShowExpand\r\n                style=\"border-bottom: none !important\"\r\n                (nzExpandChange)=\"expandRow(data, $event)\"\r\n                [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\"></td>\r\n          </ng-container>\r\n\r\n          <td *ngFor=\"let field of getFields(); index as fi\"\r\n              [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n            <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n              <ng-container *ngIf=\"data[field.property]\">\r\n                <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n              </ng-container>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field) && tableType !== 'home'\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                <div class=\"bps-table-td-content\">\r\n                  {{ data[field.property] }}\r\n                </div>\r\n                <ng-container *ngIf=\"!fi\">\r\n                  <span class=\"bps-report-table-menu-pencil\" (click)=\"startEdit(data, $event)\"></span>\r\n                </ng-container>\r\n              </ng-container>\r\n              <ng-template #editTpl>\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-template>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"isCeldTypeDefault(field) && tableType === 'home'\">\r\n              <ng-container *ngIf=\"editId !== data[config.fieldId] || editProperty !== field.property\">\r\n                <div>\r\n                  {{ data[field.property] }}\r\n                </div>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"editId === data[config.fieldId] && editProperty === field.property\">\r\n                <input bps-input [(ngModel)]=\"data[field.property]\"\r\n                       class=\"bps-editable-cell-input\"\r\n                       [class.bps-editable-cell-input-home-table]=\"tableType === 'home'\"\r\n                       (click)=\"preventDefault($event)\"\r\n                       (keyup)=\"endEditMode($event, i, data)\" />\r\n              </ng-container>\r\n\r\n            </ng-container>\r\n          </td>\r\n\r\n          <td *ngIf=\"tableType === 'home'\">\r\n            <i class=\"bps-table-home-more-icon\"\r\n               bps-dropdown\r\n               (click)=\"emitBpsEvent(data, 'moreBtnClicked')\"\r\n               [bpsDropdownMenu]=\"moreMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n            <i class=\"bps-table-home-delete-icon\"\r\n               [class.bps-table-home-delete-icon-position-updated]=\"forceUpdate\"\r\n               bps-dropdown\r\n               (bpsForcedUpdatedPosition)=\"changeIcon($event)\"\r\n               (click)=\"emitBpsEvent(data, 'deleteBtnClicked')\"\r\n               [bpsDropdownMenu]=\"deleteMenu\"\r\n               bpsTrigger=\"click\"\r\n               bpsPlacement=\"rightTop\"></i>\r\n          </td>\r\n\r\n        </tr>\r\n\r\n        <ng-container *ngIf=\"expandable\">\r\n          <tr [nzExpand]=\"mapOfExpandData[data[config.fieldId]]\">\r\n            <td [attr.colspan]=\"getFields().length + 2\">\r\n              <ng-container [ngTemplateOutlet]=\"rowExpandTemplate\" [ngTemplateOutletContext]=\"{data: data, index: i}\"></ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-template>\r\n\r\n    </tbody>\r\n  </nz-table>\r\n</div>\r\n\r\n<ng-template #customFilter>\r\n  <div class=\"bps-table-filter-icon\">\r\n    <bps-input-group [bpsPrefix]=\"searchPrefixIcon\"\r\n                     (click)=\"focusInput($event, searchInput)\"\r\n                     (mouseenter)=\"searchBoxHovered = true;\"\r\n                     (mouseleave)=\"searchBoxHovered = false;\"\r\n                     class=\"bps-table-custom-filter\">\r\n      <input bps-input\r\n             #searchInput\r\n             nz-th-extra\r\n             class=\"bps-table-filter-custom-input\"\r\n             (click)=\"preventDefault($event)\"\r\n             (keyup)=\"updateSearch($event.target.value)\"\r\n             nzTableFilter>\r\n    </bps-input-group>\r\n  </div>\r\n  \r\n  <ng-template #searchPrefixIcon let-disabled=\"false\">\r\n    <ng-container *ngIf=\"!searchBoxHovered  && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_enabled.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"searchBoxHovered && !disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_hover_activated.svg\" />\r\n    </ng-container>\r\n    <ng-container *ngIf=\"disabled\">\r\n      <img class=\"bps-custom-filter-img\" src=\"/assets/bps-icons/sps_search_icon_home_disabled.svg\" />\r\n    </ng-container>\r\n  </ng-template>\r\n</ng-template>\r\n", styles: ["::ng-deep .bps-table .ant-table-thead>tr>th,::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}::ng-deep .bps-table-report .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){border-bottom:none!important;border-right:1px solid #363636!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){padding:12px 5px 12px 0!important;border-bottom:1.2px solid #363636!important;border-right:none!important;color:#999!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel).bps-td-disabled{color:#666!important}::ng-deep .bps-table-report .bps-table .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th{padding:10px;border-bottom:none!important;border-radius:0!important}::ng-deep .bps-table-home .bps-table .ant-table-thead>tr>th{padding:17px 5px 17px 0!important;border-bottom:1.2px solid #363636!important;border-top:1px solid #262626!important;border-radius:0!important}::ng-deep .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled){background:#313b3f!important}::ng-deep .bps-table-report .ant-table-tbody>tr:hover:not(.ant-table-expanded-row)>td:not(.bps-td-expandable-panel):not(.bps-td-disabled) .bps-table-td-content{width:calc(100% - 18px)!important}::ng-deep .bps-table .ant-table-tbody>tr.bps-table-pair-row>td:not(.bps-td-expandable-panel){background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}::ng-deep .bps-table .ant-table-body{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-body{margin-top:2px!important}::ng-deep .bps-table-report .bps-table .ant-table-body{margin-top:3px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-track,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-track{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb{background-color:#363636!important;border-radius:10px!important;border:2px solid #262626!important;background-clip:padding-box!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#363636!important;border-radius:10px!important}::ng-deep .bps-table-home .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-report .bps-table .ant-table-body::-webkit-scrollbar-corner,::ng-deep .bps-table-glass_profile .bps-table .ant-table-body::-webkit-scrollbar-corner{background-color:#262626!important}::ng-deep .bps-table-home .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-report .bps-table .ant-table-header.ant-table-hide-scrollbar,::ng-deep .bps-table-glass_profile .bps-table .ant-table-header.ant-table-hide-scrollbar{background-color:#262626!important;margin-bottom:unset!important;overflow-x:hidden!important;border-bottom:none!important}::ng-deep .bps-table-report .bps-table .ant-table-header{box-shadow:-6px 3px 8px #000!important;z-index:2!important;position:relative!important;padding-bottom:0!important;overflow-y:hidden!important;overflow-x:hidden!important;margin-right:15px!important;border-top:1px solid #363636!important}::ng-deep .bps-table-report .ant-table table{padding-right:6px}::ng-deep .bps-table .ant-table{background-color:transparent}::ng-deep .bps-table-glass_profile .bps-table .ant-table-header{box-shadow:-1px 4px 5px #000!important;z-index:2!important;position:relative!important}::ng-deep .bps-table-home .bps-table .ant-table-header{box-shadow:-15px 2px 8px #000!important;z-index:2!important;position:relative!important}::ng-deep .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background-color:#445c67!important}.bps-fst-column{padding-left:20px!important;position:relative}.bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:18px!important}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table .ant-table-expand-icon-th,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr>td.ant-table-row-expand-icon-cell{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table .ant-table-row-expand-icon-expanded:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr .ant-table-row-expand-icon-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg);transform:rotate(0);top:-10px;background-color:transparent}::ng-deep .bps-table .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg);top:-10px;background:transparent}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel),::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-expandable-panel){background:#262626!important;color:#fff!important;cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover:not(.ant-table-selected-row) .ant-table-row-expand-icon-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_hover.svg)}::ng-deep .bps-table .anticon svg{display:none!important}::ng-deep .anticon.ant-table-column-sorter-up.anticon-caret-up:not(.active)+.anticon.ant-table-column-sorter-down.anticon-caret-down:not(.active){content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:-2px}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.active:after,::ng-deep .bps-table .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.active:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table .ant-table-measure-now{display:none}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}::ng-deep .bps-table .ant-table-column-title{position:unset;z-index:1}::ng-deep .bps-table .ant-table-header{overflow:hidden!important}.bps-table-filter-icon{position:absolute;top:10px;right:55px;width:270px;transition:all .3s;display:inline-block}::ng-deep .bps-table .bps-table-custom-filter .ant-input-prefix{padding:5px;background-color:#3d3d3d;border-radius:100px;left:1.4px!important;top:calc(50% + .8px);left:12.2px!important;position:absolute;z-index:3;top:5.2px}.bps-custom-filter-img{background:#3d3d3d;transition:all .3s}.bps-table-filter-custom-input{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input:hover{border:solid 1px #535353!important}.bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_enabled.svg);position:relative;top:-3px}.bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_right.svg);position:relative;left:1px}.bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_bottom.svg)}.bps-table-home-more-icon{margin-right:11px}.bps-table-home-delete-icon{padding:4px 9px;position:relative;background-color:#363636;border-radius:100px}.bps-table-home-more-icon{background-color:#363636;border-radius:100px;padding:4px 6px}.bps-table-home-more-icon:hover,.bps-table-home-delete-icon:hover{cursor:pointer}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-more-icon:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-more-icon:after{content:url(/assets/bps-icons/sps_dots_icon_home_hover_active.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_right.svg)}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr:hover .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after,::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-selected-row .bps-table-home-delete-icon.bps-table-home-delete-icon-position-updated:after{content:url(/assets/bps-icons/sps_arrowdeleteshare_icon_home_active_bottom.svg)}::ng-deep .bps-table-glass_profile .bps-table .ant-table table{border-spacing:0 5px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){font-size:11px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{padding:7px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th:first-child{padding-left:20px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):first-child{border-radius:3px 0 0 3px!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel):last-child{border-radius:0 3px 3px 0!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td:not(.bps-td-expandable-panel){background-color:#363636!important;border-right:none!important;border-left:none!important;border-collapse:separate!important;padding:11px 5px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-expandable-panel){background-color:#363636!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){cursor:pointer}::ng-deep .bps-table .ant-table-column-sorters{display:inline-flex}::ng-deep .bps-table .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important;top:0;position:relative}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled){box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #445c67 inset,0 1px #445c67 inset,0 -1px #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #445c67 inset,0 -1px #445c67 inset,-1px 0 #445c67 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr>td{border-bottom:none!important;transition:all .3s}.bps-td-disabled{cursor:not-allowed}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled),::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled){box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):first-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):first-child{box-shadow:1px 0 #00a2d1 inset,0 1px #00a2d1 inset,0 -1px #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row>td:not(.bps-td-disabled):last-child,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.ant-table-selected-row:hover>td:not(.bps-td-disabled):last-child{box-shadow:0 1px #00a2d1 inset,0 -1px #00a2d1 inset,-1px 0 #00a2d1 inset!important}::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row>td,::ng-deep .bps-table-glass_profile .bps-table .ant-table-tbody>tr.bps-table4-custom-row:hover>td{background-color:#253d47!important}::ng-deep .ant-table-fixed-header .ant-table-scroll .ant-table-header::-webkit-scrollbar{border:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.ant-table-expanded-row>td{padding:0!important;border-bottom:none!important}::ng-deep .bps-table-home .bps-table .ant-table-tbody>tr.bps-table-home-expanded-row>td{border-bottom:none!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}::ng-deep .bps-table .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}.bps-editable-cell-input-home-table{padding-left:4px!important;border-radius:4px!important;width:95%!important}.bps-report-table-menu-pencil:after{content:\"\";position:absolute;top:5px;right:5px}::ng-deep .bps-table-report .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-report-table-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg);transform:scale(.95)}td:not(.bps-td-disabled) .bps-report-table-menu-pencil:hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1$4.NzI18nService }]; }, propDecorators: { data: [{
                type: Input
            }], frontPagination: [{
                type: Input
            }], total: [{
                type: Input
            }], pageIndex: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], showPagination: [{
                type: Input
            }], paginationPosition: [{
                type: Input
            }], bordered: [{
                type: Input
            }], widthConfig: [{
                type: Input
            }], loading: [{
                type: Input
            }], loadingDelay: [{
                type: Input
            }], loadingIndicator: [{
                type: Input
            }], scroll: [{
                type: Input
            }], title: [{
                type: Input
            }], footer: [{
                type: Input
            }], noResult: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], showQuickJumper: [{
                type: Input
            }], showSizeChanger: [{
                type: Input
            }], showTotal: [{
                type: Input
            }], hideOnSinglePage: [{
                type: Input
            }], simple: [{
                type: Input
            }], virtualItemSize: [{
                type: Input
            }], virtualMaxBufferPx: [{
                type: Input
            }], virtualMinBufferPx: [{
                type: Input
            }], virtualForTrackBy: [{
                type: Input
            }], inlineEdit: [{
                type: Input
            }], pageIndexChange: [{
                type: Output
            }], currentPageDataChange: [{
                type: Output
            }], queryParamsChange: [{
                type: Output
            }], pageSizeChange: [{
                type: Output
            }], onclickRow: [{
                type: Output
            }], ondblclickRow: [{
                type: Output
            }], selectionChange: [{
                type: Output
            }], singleSort: [{
                type: Input
            }], sortChange: [{
                type: Output
            }], config: [{
                type: Input
            }], configChange: [{
                type: Output
            }], gridID: [{
                type: Input
            }], filterPlaceholder: [{
                type: Input
            }], onedit: [{
                type: Output
            }], tableType: [{
                type: Input
            }], expandable: [{
                type: Input
            }], searchValueChange: [{
                type: Output
            }], moreBtnClicked: [{
                type: Output
            }], deleteBtnClicked: [{
                type: Output
            }], expandChange: [{
                type: Output
            }], moreMenu: [{
                type: Input
            }], deleteMenu: [{
                type: Input
            }], rowExpandTemplate: [{
                type: Input
            }], inputElement: [{
                type: ViewChild,
                args: [BpsInputDirective, { static: false, read: ElementRef }]
            }], handleClick: [{
                type: HostListener,
                args: ['window:mouseup', ['$event']]
            }] } });

// tslint:disable-next-line no-any
class BpsTableExpandablePanelComponent {
    /* Table API */
    // tslint:disable-next-line: no-input-rename
    set data(data) {
        this._data = data;
        this.updateCheckboxCache();
    }
    handleClick(e) {
        if (this.editId !== null && this.inputElement && !this.inputElement.nativeElement.isEqualNode(e.target)) {
            this.emitOnEditEvent();
            this.editId = null;
            this.cdr.detectChanges();
        }
    }
    emitOnEditEvent() {
        let editedEl = this._data.filter(el => el[this.config.fieldId] === this.editId);
        if (editedEl.length) {
            this.onedit.emit(editedEl);
        }
    }
    endEditMode($event, index, data = null) {
        if ($event.key === ('Enter' || 'enter')) {
            this.emitOnEditEvent();
            this.editId = null;
            this.cdr.detectChanges();
        }
    }
    preventDefault($event) {
        $event.preventDefault();
        $event.stopImmediatePropagation();
    }
    emitBpsEvent($event, type) {
        switch (type) {
            case 'pageIndex':
                this.pageIndexChange.emit($event);
                break;
            case 'currentPageData':
                this.currentPageDataChange.emit($event);
                break;
            case 'queryParams':
                this.queryParamsChange.emit($event);
                break;
            case 'pageSize':
                this.pageSizeChange.emit($event);
                break;
        }
    }
    getFields() {
        return this.config ? this.config.fields.filter(item => item.hidden === undefined || !item.hidden) : [];
    }
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        this.locale = {}; // tslint:disable-line:no-any
        this.destroy$ = new Subject();
        this.checkboxCache = [];
        this.mapOfExpandData = {};
        this._data = [];
        this.editId = null;
        this.isExpanded = false;
        this.searchBoxHovered = false;
        this._searchSubject = new Subject();
        this.frontPagination = false;
        this.total = 0;
        this.pageIndex = 1;
        this.pageSize = 10;
        this.showPagination = false;
        this.paginationPosition = 'bottom';
        this.bordered = false;
        this.widthConfig = [];
        this.loading = false;
        this.loadingDelay = 0;
        this.scroll = { x: null, y: null };
        this.pageSizeOptions = [10, 20, 30, 40, 50];
        this.showQuickJumper = false;
        this.showSizeChanger = false;
        this.hideOnSinglePage = false;
        this.simple = false;
        this.virtualScroll = false;
        this.virtualItemSize = 0;
        this.virtualMaxBufferPx = 200;
        this.virtualMinBufferPx = 100;
        this.inlineEdit = false;
        this.pageIndexChange = new EventEmitter();
        this.currentPageDataChange = new EventEmitter();
        this.queryParamsChange = new EventEmitter();
        this.pageSizeChange = new EventEmitter();
        this.onclickRow = new EventEmitter();
        this.ondblclickRow = new EventEmitter();
        this.selectionChange = new EventEmitter();
        /* Thead API */
        this.singleSort = true;
        this.sortChange = new EventEmitter();
        this.configChange = new EventEmitter();
        this.onedit = new EventEmitter();
        this.clicks = 0;
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    ngOnChanges(changes) {
        if (changes.data && this.config) {
            this.updateCheckboxCache();
        }
    }
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.locale = this.i18n.getLocaleData('Table');
            this.cdr.markForCheck();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this._searchSubject.unsubscribe();
    }
    isCeldTypeTemplateRef(field) {
        return field.celdType === CeldType.TemplateRef;
    }
    isCeldTypeDefault(field) {
        return field.celdType === CeldType.Default;
    }
    getTDClassMap(field, data, fi = 9999) {
        return {
            ...field.ngClass,
            ['bps-td-expandable-panel']: true,
            ['bps-td-disabled']: data.disabled,
            ['bps-td-no-padding']: data[this.config.fieldId] === this.editId,
            ['bps-fst-column']: !fi,
        };
    }
    isRowSelected(data) {
        if (this.config) {
            const dataSelected = this.checkboxCache.filter(item => item.selected).map(item => item.data[this.config.fieldId]);
            return dataSelected.indexOf(data[this.config.fieldId]) !== -1;
        }
        return false;
    }
    updateCheckboxCache() {
        this.checkboxCache.length = 0;
        this._data.forEach(item => {
            this.checkboxCache.push({
                selected: item.selected ? item.selected : false,
                data: item
            });
        });
    }
    clickRow(event, data) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.clicks++;
        setTimeout(() => {
            if (this.clicks === 1) {
                this.selectRow(data);
            }
            else if (this.clicks === 2) {
                this.ondblclickRow.emit(data);
            }
            this.clicks = 0;
        }, 300);
    }
    startEdit(data, event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.inlineEdit && !data.disabled && (this.isNull(data.editable) || data.editable)) {
            this.editId = data[this.config.fieldId];
            this.cdr.detectChanges();
            this.inputElement.nativeElement.focus();
            setTimeout(() => {
                this.inputElement.nativeElement.select();
            }, 100);
        }
    }
    isNull(value) {
        return value === null || value === undefined;
    }
    selectText($event) {
        $event.target.select();
    }
    selectRow(data) {
        if (!data.disabled) {
            this.onclickRow.emit(data);
            this.checkboxCache.forEach(item => {
                if (item.data[this.config.fieldId] === data[this.config.fieldId]) {
                    item.selected = true;
                    this.selectionChange.emit(item);
                }
                else {
                    item.selected = false;
                }
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTableExpandablePanelComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i1$4.NzI18nService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsTableExpandablePanelComponent, selector: "bps-table-expandable-panel", inputs: { data: "data", frontPagination: "frontPagination", total: "total", pageIndex: "pageIndex", pageSize: "pageSize", showPagination: "showPagination", paginationPosition: "paginationPosition", bordered: "bordered", widthConfig: "widthConfig", loading: "loading", loadingDelay: "loadingDelay", loadingIndicator: "loadingIndicator", scroll: "scroll", title: "title", footer: "footer", noResult: "noResult", pageSizeOptions: "pageSizeOptions", showQuickJumper: "showQuickJumper", showSizeChanger: "showSizeChanger", showTotal: "showTotal", hideOnSinglePage: "hideOnSinglePage", simple: "simple", virtualScroll: "virtualScroll", virtualItemSize: "virtualItemSize", virtualMaxBufferPx: "virtualMaxBufferPx", virtualMinBufferPx: "virtualMinBufferPx", virtualForTrackBy: "virtualForTrackBy", inlineEdit: "inlineEdit", singleSort: "singleSort", config: "config", gridID: "gridID", menuTemplate: "menuTemplate", currentPreviewTemplate: "currentPreviewTemplate" }, outputs: { pageIndexChange: "pageIndexChange", currentPageDataChange: "currentPageDataChange", queryParamsChange: "queryParamsChange", pageSizeChange: "pageSizeChange", onclickRow: "onclickRow", ondblclickRow: "ondblclickRow", selectionChange: "selectionChange", sortChange: "sortChange", configChange: "configChange", onedit: "onedit" }, host: { listeners: { "window:mouseup": "handleClick($event)" } }, viewQueries: [{ propertyName: "inputElement", first: true, predicate: BpsInputDirective, descendants: true, read: ElementRef }, { propertyName: "gridComponent", first: true, predicate: ["gridComponent"], descendants: true, read: NzTableComponent }, { propertyName: "panel", first: true, predicate: ["bpsExpandablePanel"], descendants: true, read: ElementRef }], exportAs: ["bpsTableExpandablePanel"], usesOnChanges: true, ngImport: i0, template: "<div class=\"bps-table-expandable-panel-wrapper\">\r\n  <div class=\"bps-table-expandable-panel-menu\">\r\n    <div class=\"bps-table-expandable-panel-menu-inner\">\r\n      <ng-container [ngTemplateOutlet]=\"menuTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div #bpsExpandablePanel class=\"bps-table-report bps-table-expandable-panel bps-table-expandable-panel-table-wrapper\">\r\n    <nz-table #gridComponent\r\n              class=\"bps-table-expandable-panel\"\r\n              [nzData]=\"_data\"\r\n              [nzFrontPagination]=\"frontPagination\"\r\n              [nzTotal]=\"total\"\r\n              [nzPageIndex]=\"pageIndex\"\r\n              [nzPageSize]=\"pageSize\"\r\n              [nzShowPagination]=\"showPagination\"\r\n              [nzPaginationPosition]=\"paginationPosition\"\r\n              [nzBordered]=\"bordered\"\r\n              [nzWidthConfig]=\"widthConfig\"\r\n              [nzLoading]=\"loading\"\r\n              [nzLoadingIndicator]=\"loadingIndicator\"\r\n              [nzLoadingDelay]=\"loadingDelay\"\r\n              [nzScroll]=\"scroll\"\r\n              [nzTitle]=\"title\"\r\n              [nzFooter]=\"footer\"\r\n              [nzNoResult]=\"noResult\"\r\n              [nzPageSizeOptions]=\"pageSizeOptions\"\r\n              [nzShowQuickJumper]=\"showQuickJumper\"\r\n              [nzShowSizeChanger]=\"showSizeChanger\"\r\n              [nzShowTotal]=\"showTotal\"\r\n              [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n              [nzSimple]=\"simple\"\r\n              [nzVirtualItemSize]=\"virtualItemSize\"\r\n              [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n              [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n              [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n              (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n              (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n              (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n              (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let field of getFields(); index as hi\"\r\n              style=\"display: none;\"\r\n              [nzWidth]=\"field.width\">\r\n          </th>\r\n        </tr>  \r\n      </thead>\r\n      <tbody>\r\n        <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n          <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n              (click)=\"clickRow($event, data)\">\r\n\r\n            <td *ngFor=\"let field of getFields(); index as fi\"\r\n                style=\"position: relative\"\r\n                [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n              <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n                <ng-container *ngIf=\"data[field.property]\">\r\n                  <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n                </ng-container>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n                <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                  <div class=\"expandable-table-td-content\">\r\n                    {{ data[field.property] }}\r\n                  </div>\r\n                </ng-container>\r\n                <ng-template #editTpl>\r\n                  <input bps-input\r\n                         #inputElement\r\n                         [(ngModel)]=\"data[field.property]\"\r\n                         class=\"bps-editable-cell-input\"\r\n                         (click)=\"preventDefault($event)\"\r\n                         (keyup)=\"endEditMode($event, i, data)\" />\r\n                </ng-template>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"!fi\">\r\n                <span class=\"bps-table-expandable-panel-menu-pencil\"\r\n                      [class.bps-table-expandable-panel-menu-pencil-disabled]=\"!isNull(data.editable) && !data.editable\"\r\n                      (click)=\"startEdit(data, $event)\"></span>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n\r\n  <div class=\"bps-table-expandable-panel-preview-wrapper\">\r\n    <div class=\"bps-table-expandable-panel-preview\">\r\n      <ng-container [ngTemplateOutlet]=\"currentPreviewTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n", styles: ["::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th,::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}.bps-invisible{display:none}.bps-table-expandable-panel-table-wrapper{background-color:#313131!important}.bps-table-expandable-panel:not(.bps-table-expandable-panel-table-wrapper){margin:8px 0 8px 10px!important;background-color:#313131!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{border-bottom:none!important;background-color:#313131!important;border-right:none!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td.bps-td-disabled{color:#666!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td:last-child{border-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-disabled){background:#313b3f!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr.bps-table-pair-row>td{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-header.ant-table-hide-scrollbar{margin-bottom:0!important;background-color:#262626!important;overflow-x:hidden!important}::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#445c67!important}.bps-fst-column{padding-left:10px!important}.bps-table-expandable-panel .bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:10px!important;z-index:2}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table-expandable-panel .ant-table-expand-icon-th{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table-expandable-panel .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-row-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg)}::ng-deep .bps-table-expandable-panel .ant-table-row-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg)}::ng-deep .bps-table-expandable-panel .anticon svg{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.off{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:2px}::ng-deep .bps-table-expandable-panel .ant-table-column-sort .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after{content:\"\"}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.on:after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}.bps-table-filter-icon{position:absolute;top:14px;right:75px;width:270px;transition:all .3s}::ng-deep .bps-table-custom-filter .ant-input-prefix{left:1.2px!important}.bps-custom-filter-img{border-radius:100px;background:#3d3d3d;padding:5px;transition:all .3s}.bps-table-filter-custom-input{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input:hover{border:solid 1px #535353!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table-expandable-panel .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}.bps-table-expandable-panel-wrapper{width:100%!important;height:100%!important;display:table!important;table-layout:fixed!important;background-color:#313131!important}.bps-table-expandable-panel-preview{border-left:1.3px solid #363636;height:100%;min-height:100%;padding:0 10px}.bps-table-expandable-panel-menu{display:table-cell;width:30px;background-color:#262626;top:0;vertical-align:top}.bps-table-expandable-panel-inner-panel{width:calc(50% - 15px)!important;display:table-cell!important;padding:4px 0;background-color:#313131;vertical-align:top}::ng-deep .bps-table-expandable-panel-menu-inner img,::ng-deep .bps-table-expandable-panel-menu-inner svg{background-color:#363636;border-radius:100px;margin-bottom:5px;padding:6px;cursor:pointer}.bps-table-expandable-panel-menu-inner{background-color:#3e3e3e;padding:5px 3px 0;border-radius:9px 0 0 9px}.bps-table-expandable-panel-menu-pencil:after{content:\"\";position:absolute;top:5px;right:5px}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:not(.bps-table-expandable-panel-menu-pencil-disabled):hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}.bps-table-expandable-panel-preview-wrapper{padding:8px 0!important;background-color:#313131!important;width:calc(50% - 15px);height:100%;min-height:100%;display:table-cell;position:relative;vertical-align:top}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .expandable-table-td-content{width:calc(100% - 20px)}::ng-deep .bps-table-expandable-panel .ant-table-fixed{padding-right:4px!important;background-color:#313131}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "component", type: i4$1.NzTableComponent, selector: "nz-table", inputs: ["nzTableLayout", "nzShowTotal", "nzItemRender", "nzTitle", "nzFooter", "nzNoResult", "nzPageSizeOptions", "nzVirtualItemSize", "nzVirtualMaxBufferPx", "nzVirtualMinBufferPx", "nzVirtualForTrackBy", "nzLoadingDelay", "nzPageIndex", "nzPageSize", "nzTotal", "nzWidthConfig", "nzData", "nzCustomColumn", "nzPaginationPosition", "nzScroll", "nzPaginationType", "nzFrontPagination", "nzTemplateMode", "nzShowPagination", "nzLoading", "nzOuterBordered", "nzLoadingIndicator", "nzBordered", "nzSize", "nzShowSizeChanger", "nzHideOnSinglePage", "nzShowQuickJumper", "nzSimple"], outputs: ["nzPageSizeChange", "nzPageIndexChange", "nzQueryParams", "nzCurrentPageDataChange", "nzCustomColumnChange"], exportAs: ["nzTable"] }, { kind: "directive", type: i4$1.NzTableCellDirective, selector: "th:not(.nz-disable-th):not([mat-cell]), td:not(.nz-disable-td):not([mat-cell])" }, { kind: "directive", type: i4$1.NzThMeasureDirective, selector: "th", inputs: ["nzWidth", "colspan", "colSpan", "rowspan", "rowSpan"] }, { kind: "component", type: i4$1.NzTheadComponent, selector: "thead:not(.ant-table-thead)", outputs: ["nzSortOrderChange"] }, { kind: "component", type: i4$1.NzTbodyComponent, selector: "tbody" }, { kind: "directive", type: i4$1.NzTrDirective, selector: "tr:not([mat-row]):not([mat-header-row]):not([nz-table-measure-row]):not([nzExpand]):not([nz-table-fixed-row])" }, { kind: "directive", type: BpsInputDirective, selector: "input[bps-input],textarea[bps-input]", inputs: ["borderless", "size", "nzStepperless", "nzStatus", "opened", "disabled"], exportAs: ["bpsInput"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "frontPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "showPagination", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "bordered", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "showQuickJumper", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "showSizeChanger", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "hideOnSinglePage", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "simple", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "virtualScroll", void 0);
__decorate([
    InputNumber()
], BpsTableExpandablePanelComponent.prototype, "virtualItemSize", void 0);
__decorate([
    InputNumber()
], BpsTableExpandablePanelComponent.prototype, "virtualMaxBufferPx", void 0);
__decorate([
    InputNumber()
], BpsTableExpandablePanelComponent.prototype, "virtualMinBufferPx", void 0);
__decorate([
    InputBoolean()
], BpsTableExpandablePanelComponent.prototype, "inlineEdit", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTableExpandablePanelComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-table-expandable-panel', exportAs: 'bpsTableExpandablePanel', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"bps-table-expandable-panel-wrapper\">\r\n  <div class=\"bps-table-expandable-panel-menu\">\r\n    <div class=\"bps-table-expandable-panel-menu-inner\">\r\n      <ng-container [ngTemplateOutlet]=\"menuTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div #bpsExpandablePanel class=\"bps-table-report bps-table-expandable-panel bps-table-expandable-panel-table-wrapper\">\r\n    <nz-table #gridComponent\r\n              class=\"bps-table-expandable-panel\"\r\n              [nzData]=\"_data\"\r\n              [nzFrontPagination]=\"frontPagination\"\r\n              [nzTotal]=\"total\"\r\n              [nzPageIndex]=\"pageIndex\"\r\n              [nzPageSize]=\"pageSize\"\r\n              [nzShowPagination]=\"showPagination\"\r\n              [nzPaginationPosition]=\"paginationPosition\"\r\n              [nzBordered]=\"bordered\"\r\n              [nzWidthConfig]=\"widthConfig\"\r\n              [nzLoading]=\"loading\"\r\n              [nzLoadingIndicator]=\"loadingIndicator\"\r\n              [nzLoadingDelay]=\"loadingDelay\"\r\n              [nzScroll]=\"scroll\"\r\n              [nzTitle]=\"title\"\r\n              [nzFooter]=\"footer\"\r\n              [nzNoResult]=\"noResult\"\r\n              [nzPageSizeOptions]=\"pageSizeOptions\"\r\n              [nzShowQuickJumper]=\"showQuickJumper\"\r\n              [nzShowSizeChanger]=\"showSizeChanger\"\r\n              [nzShowTotal]=\"showTotal\"\r\n              [nzHideOnSinglePage]=\"hideOnSinglePage\"\r\n              [nzSimple]=\"simple\"\r\n              [nzVirtualItemSize]=\"virtualItemSize\"\r\n              [nzVirtualMaxBufferPx]=\"virtualMaxBufferPx\"\r\n              [nzVirtualMinBufferPx]=\"virtualMinBufferPx\"\r\n              [nzVirtualForTrackBy]=\"virtualForTrackBy\"\r\n              (nzPageIndexChange)=\"emitBpsEvent($event, 'pageIndex')\"\r\n              (nzCurrentPageDataChange)=\"emitBpsEvent($event, 'currentPageData')\"\r\n              (nzQueryParams)=\"emitBpsEvent($event, 'queryParams')\"\r\n              (nzPageSizeChange)=\"emitBpsEvent($event, 'pageSize')\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let field of getFields(); index as hi\"\r\n              style=\"display: none;\"\r\n              [nzWidth]=\"field.width\">\r\n          </th>\r\n        </tr>  \r\n      </thead>\r\n      <tbody>\r\n        <ng-template ngFor let-data [ngForOf]=\"gridComponent.data\" let-i=\"index\">\r\n          <tr [class.ant-table-selected-row]=\"isRowSelected(data)\"\r\n              (click)=\"clickRow($event, data)\">\r\n\r\n            <td *ngFor=\"let field of getFields(); index as fi\"\r\n                style=\"position: relative\"\r\n                [ngClass]=\"getTDClassMap(field, data, fi)\">\r\n\r\n              <ng-container *ngIf=\"isCeldTypeTemplateRef(field)\">\r\n                <ng-container *ngIf=\"data[field.property]\">\r\n                  <ng-container *ngTemplateOutlet=\"data[field.property].ref; context: data[field.property].context\"></ng-container>\r\n                </ng-container>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"isCeldTypeDefault(field)\">\r\n                <ng-container *ngIf=\"editId !== data[config.fieldId]; else editTpl\">\r\n                  <div class=\"expandable-table-td-content\">\r\n                    {{ data[field.property] }}\r\n                  </div>\r\n                </ng-container>\r\n                <ng-template #editTpl>\r\n                  <input bps-input\r\n                         #inputElement\r\n                         [(ngModel)]=\"data[field.property]\"\r\n                         class=\"bps-editable-cell-input\"\r\n                         (click)=\"preventDefault($event)\"\r\n                         (keyup)=\"endEditMode($event, i, data)\" />\r\n                </ng-template>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"!fi\">\r\n                <span class=\"bps-table-expandable-panel-menu-pencil\"\r\n                      [class.bps-table-expandable-panel-menu-pencil-disabled]=\"!isNull(data.editable) && !data.editable\"\r\n                      (click)=\"startEdit(data, $event)\"></span>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n\r\n      </tbody>\r\n    </nz-table>\r\n  </div>\r\n\r\n  <div class=\"bps-table-expandable-panel-preview-wrapper\">\r\n    <div class=\"bps-table-expandable-panel-preview\">\r\n      <ng-container [ngTemplateOutlet]=\"currentPreviewTemplate\"></ng-container>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n", styles: ["::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th,::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{padding:5px;font-size:12px;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.33;letter-spacing:normal!important;text-align:left;color:#fff!important;background-color:#262626!important}.bps-invisible{display:none}.bps-table-expandable-panel-table-wrapper{background-color:#313131!important}.bps-table-expandable-panel:not(.bps-table-expandable-panel-table-wrapper){margin:8px 0 8px 10px!important;background-color:#313131!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr>td{border-bottom:none!important;background-color:#313131!important;border-right:none!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td.bps-td-disabled{color:#666!important}::ng-deep .bps-table-report.bps-table-expandable-panel .bps-table-expandable-panel .ant-table-thead>tr:first-child>th:first-child{padding-left:20px!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr>td:last-child{border-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th{padding:9px;border-bottom:none!important;border-top:1px solid #363636!important;border-radius:0!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)>td:not(.bps-td-disabled){background:#313b3f!important}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr.bps-table-pair-row>td{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar{width:8px!important;height:8px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-track{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb{background-color:#262626!important;border-radius:10px!important;border:2px solid #313131!important;background-clip:padding-box!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-thumb:hover{background-color:#262626!important;border-radius:10px!important}::ng-deep .bps-table-expandable-panel .ant-table-body::-webkit-scrollbar-corner{background-color:#313131!important}::ng-deep .bps-table-expandable-panel .ant-table-header.ant-table-hide-scrollbar{margin-bottom:0!important;background-color:#262626!important;overflow-x:hidden!important}::ng-deep .bps-table-expandable-panel .bps-table-expandable-panel .ant-table-tbody>tr.ant-table-selected-row>td{background-color:#445c67!important}.bps-fst-column{padding-left:10px!important}.bps-table-expandable-panel .bps-editable-cell-input{border-radius:0!important;border-color:#00a2d1!important;padding-left:10px!important;z-index:2}.bps-td-no-padding{padding:0!important}::ng-deep .bps-table-expandable-panel .ant-table-expand-icon-th{width:40px!important;min-width:40px!important;padding-right:0!important;text-align:center}::ng-deep .bps-table-expandable-panel .ant-table-row-expand-icon{background:#262626!important;border:none!important;width:unset!important;height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-row-expanded:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_active.svg)}::ng-deep .bps-table-expandable-panel .ant-table-row-collapsed:after{content:url(/assets/bps-icons/sps_arrowdown_icon_home_enabled.svg)}::ng-deep .bps-table-expandable-panel .anticon svg{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.off{display:none!important}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-up.anticon-caret-up.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingup_blue.svg);position:relative;top:2px}::ng-deep .bps-table-expandable-panel .ant-table-column-sort .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after{content:\"\"}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_blue.svg)}::ng-deep .bps-table-expandable-panel .anticon.ant-table-column-sorter-down.anticon-caret-down.off:after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-down.anticon-caret-down.on:after,::ng-deep .bps-table-expandable-panel .bps-column-disabled .anticon.ant-table-column-sorter-up.anticon-caret-up.on:after{content:url(/assets/bps-icons/sps_triangle_icon_sortingdown_grey.svg)}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter .ant-table-column-sorter-inner{margin-top:unset!important;margin-left:10px!important;line-height:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.ant-table-column-has-actions.ant-table-column-has-filters{padding-right:unset!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-header-column .ant-table-column-sorters>:not(.ant-table-column-sorter){position:unset!important}.bps-table-filter-icon{position:absolute;top:14px;right:75px;width:270px;transition:all .3s}::ng-deep .bps-table-custom-filter .ant-input-prefix{left:1.2px!important}.bps-custom-filter-img{border-radius:100px;background:#3d3d3d;padding:5px;transition:all .3s}.bps-table-filter-custom-input{border:solid 1px #535353!important;background-color:#343434!important;padding-left:24px!important;transition:all .3s}.bps-table-filter-custom-input:hover{border:solid 1px #535353!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th .ant-table-column-sorter{vertical-align:top!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled{color:#666!important}::ng-deep .bps-table-expandable-panel .ant-table-thead>tr>th.bps-column-disabled:hover{cursor:not-allowed}.bps-table-glass-filter{width:185px;font-size:10px!important;height:20px!important;border:none!important;margin-left:20px}::ng-deep .bps-table-glass_profile .bps-table-expandable-panel .ant-table-thead>tr>th{border-top:none!important}.bps-table-glass-filter::placeholder{color:#666;font-size:10px}.bps-table-expandable-panel-wrapper{width:100%!important;height:100%!important;display:table!important;table-layout:fixed!important;background-color:#313131!important}.bps-table-expandable-panel-preview{border-left:1.3px solid #363636;height:100%;min-height:100%;padding:0 10px}.bps-table-expandable-panel-menu{display:table-cell;width:30px;background-color:#262626;top:0;vertical-align:top}.bps-table-expandable-panel-inner-panel{width:calc(50% - 15px)!important;display:table-cell!important;padding:4px 0;background-color:#313131;vertical-align:top}::ng-deep .bps-table-expandable-panel-menu-inner img,::ng-deep .bps-table-expandable-panel-menu-inner svg{background-color:#363636;border-radius:100px;margin-bottom:5px;padding:6px;cursor:pointer}.bps-table-expandable-panel-menu-inner{background-color:#3e3e3e;padding:5px 3px 0;border-radius:9px 0 0 9px}.bps-table-expandable-panel-menu-pencil:after{content:\"\";position:absolute;top:5px;right:5px}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:after{content:url(/assets/bps-icons/sps_editname_icon_home_hoverrow.svg)}td:not(.bps-td-disabled) .bps-table-expandable-panel-menu-pencil:not(.bps-table-expandable-panel-menu-pencil-disabled):hover:after{content:url(/assets/bps-icons/sps_editname_icon_home_hover.svg)!important;position:absolute;top:5px;right:5px;cursor:pointer}.bps-table-expandable-panel-preview-wrapper{padding:8px 0!important;background-color:#313131!important;width:calc(50% - 15px);height:100%;min-height:100%;display:table-cell;position:relative;vertical-align:top}::ng-deep .bps-table-expandable-panel .ant-table-tbody>tr:hover td:not(.bps-td-disabled) .expandable-table-td-content{width:calc(100% - 20px)}::ng-deep .bps-table-expandable-panel .ant-table-fixed{padding-right:4px!important;background-color:#313131}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i1$4.NzI18nService }]; }, propDecorators: { data: [{
                type: Input
            }], frontPagination: [{
                type: Input
            }], total: [{
                type: Input
            }], pageIndex: [{
                type: Input
            }], pageSize: [{
                type: Input
            }], showPagination: [{
                type: Input
            }], paginationPosition: [{
                type: Input
            }], bordered: [{
                type: Input
            }], widthConfig: [{
                type: Input
            }], loading: [{
                type: Input
            }], loadingDelay: [{
                type: Input
            }], loadingIndicator: [{
                type: Input
            }], scroll: [{
                type: Input
            }], title: [{
                type: Input
            }], footer: [{
                type: Input
            }], noResult: [{
                type: Input
            }], pageSizeOptions: [{
                type: Input
            }], showQuickJumper: [{
                type: Input
            }], showSizeChanger: [{
                type: Input
            }], showTotal: [{
                type: Input
            }], hideOnSinglePage: [{
                type: Input
            }], simple: [{
                type: Input
            }], virtualScroll: [{
                type: Input
            }], virtualItemSize: [{
                type: Input
            }], virtualMaxBufferPx: [{
                type: Input
            }], virtualMinBufferPx: [{
                type: Input
            }], virtualForTrackBy: [{
                type: Input
            }], inlineEdit: [{
                type: Input
            }], pageIndexChange: [{
                type: Output
            }], currentPageDataChange: [{
                type: Output
            }], queryParamsChange: [{
                type: Output
            }], pageSizeChange: [{
                type: Output
            }], onclickRow: [{
                type: Output
            }], ondblclickRow: [{
                type: Output
            }], selectionChange: [{
                type: Output
            }], singleSort: [{
                type: Input
            }], sortChange: [{
                type: Output
            }], config: [{
                type: Input
            }], configChange: [{
                type: Output
            }], gridID: [{
                type: Input
            }], onedit: [{
                type: Output
            }], menuTemplate: [{
                type: Input
            }], currentPreviewTemplate: [{
                type: Input
            }], inputElement: [{
                type: ViewChild,
                args: [BpsInputDirective, { static: false, read: ElementRef }]
            }], gridComponent: [{
                type: ViewChild,
                args: ['gridComponent', { read: NzTableComponent, static: false }]
            }], panel: [{
                type: ViewChild,
                args: ['bpsExpandablePanel', { read: ElementRef, static: false }]
            }], handleClick: [{
                type: HostListener,
                args: ['window:mouseup', ['$event']]
            }] } });

// tslint:disable-next-line no-any
class BpsConfigurationSelectorComponent {
    set currentDisplayedData(value) {
        this._currentDisplayedData = value;
        this.currentDisplayedDataIndex = this.getCurrentElementIndex();
    }
    ;
    set data(data) {
        this._data = data;
        if (this._data.length) {
            if (!this.currentDisplayedData) {
                this._currentDisplayedData = this._data[0];
                this.currentDisplayedDataIndex = 0;
            }
            else {
                this.currentDisplayedDataIndex = this.getCurrentElementIndex();
            }
        }
        this.cdr.detectChanges();
    }
    constructor(cdr) {
        this.cdr = cdr;
        this.destroy$ = new Subject();
        this.currentDisplayedDataIndex = null;
        this._data = [];
        this._currentDisplayedData = null;
        this.propertyName = '';
        this.disabled = false;
        this.currentDisplayedDataChange = new EventEmitter();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    getCurrentElementIndex() {
        for (let i = 0; i < this._data.length; i++) {
            if (this._data[i] === this._currentDisplayedData) {
                return i;
            }
        }
    }
    getPrevElement() {
        if (this.currentDisplayedDataIndex && !this.disabled) {
            this.currentDisplayedDataIndex--;
            this._currentDisplayedData = this._data[this.currentDisplayedDataIndex];
            this.currentDisplayedDataChange.emit(this._currentDisplayedData);
        }
    }
    getNextElement() {
        if (this.currentDisplayedDataIndex + 1 < this._data.length && !this.disabled) {
            this.currentDisplayedDataIndex++;
            this._currentDisplayedData = this._data[this.currentDisplayedDataIndex];
            this.currentDisplayedDataChange.emit(this._currentDisplayedData);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsConfigurationSelectorComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsConfigurationSelectorComponent, selector: "bps-configuration-selector", inputs: { currentDisplayedData: "currentDisplayedData", propertyName: "propertyName", disabled: "disabled", data: "data" }, outputs: { currentDisplayedDataChange: "currentDisplayedDataChange" }, exportAs: ["bpsConfigurationSelector"], ngImport: i0, template: "<div class=\"bps-configuration-selector-left-arrow\"\r\n     [class.bps-configuration-selector-left-arrow-disabled]=\"!currentDisplayedDataIndex || disabled\"\r\n     (click)=\"getPrevElement()\"></div>\r\n\r\n<div class=\"bps-configuration-selector-wrapper\"\r\n     [class.bps-configuration-selector-wrapper-disabled]=\"disabled\">\r\n  <div class=\"bps-configuration-selector-inner\"\r\n       [class.bps-configuration-selector-inner-disabled]=\"_currentDisplayedData && _currentDisplayedData.disabled\">\r\n    {{_currentDisplayedData && propertyName ? _currentDisplayedData[propertyName] : ' '}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bps-configuration-selector-right-arrow\"\r\n     (click)=\"getNextElement()\"\r\n     [class.bps-configuration-selector-right-arrow-disabled]=\"currentDisplayedDataIndex + 1 === _data.length || disabled\"></div>\r\n", styles: [".bps-configuration-selector-wrapper{display:inline-block;width:inherit;min-height:25px;padding:0 15px;border-radius:8px;border:solid 1px #00a2d1;color:#fff;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left}.bps-configuration-selector-inner{white-space:nowrap;max-width:100%;padding:7px 0;overflow:hidden;text-overflow:ellipsis}.bps-configuration-selector-inner-disabled{color:#474747}.bps-configuration-selector-left-arrow{display:inline-block;position:relative;top:-4px;padding-right:10px;cursor:pointer}.bps-configuration-selector-wrapper-disabled{border:solid 1px #474747;color:#474747}.bps-configuration-selector-right-arrow{display:inline-block;position:relative;top:-4px;padding-left:10px;cursor:pointer}.bps-configuration-selector-right-arrow:after{content:url(/assets/bps-icons/sps_right_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow:after{content:url(/assets/bps-icons/sps_left_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow-disabled{content:url(/assets/bps-icons/sps_left_report_icon_disabled.svg);cursor:not-allowed}.bps-configuration-selector-right-arrow-disabled{content:url(/assets/bps-icons/sps_right_report_icon_disabled.svg);cursor:not-allowed}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    InputBoolean()
], BpsConfigurationSelectorComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsConfigurationSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-configuration-selector', exportAs: 'bpsConfigurationSelector', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"bps-configuration-selector-left-arrow\"\r\n     [class.bps-configuration-selector-left-arrow-disabled]=\"!currentDisplayedDataIndex || disabled\"\r\n     (click)=\"getPrevElement()\"></div>\r\n\r\n<div class=\"bps-configuration-selector-wrapper\"\r\n     [class.bps-configuration-selector-wrapper-disabled]=\"disabled\">\r\n  <div class=\"bps-configuration-selector-inner\"\r\n       [class.bps-configuration-selector-inner-disabled]=\"_currentDisplayedData && _currentDisplayedData.disabled\">\r\n    {{_currentDisplayedData && propertyName ? _currentDisplayedData[propertyName] : ' '}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bps-configuration-selector-right-arrow\"\r\n     (click)=\"getNextElement()\"\r\n     [class.bps-configuration-selector-right-arrow-disabled]=\"currentDisplayedDataIndex + 1 === _data.length || disabled\"></div>\r\n", styles: [".bps-configuration-selector-wrapper{display:inline-block;width:inherit;min-height:25px;padding:0 15px;border-radius:8px;border:solid 1px #00a2d1;color:#fff;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left}.bps-configuration-selector-inner{white-space:nowrap;max-width:100%;padding:7px 0;overflow:hidden;text-overflow:ellipsis}.bps-configuration-selector-inner-disabled{color:#474747}.bps-configuration-selector-left-arrow{display:inline-block;position:relative;top:-4px;padding-right:10px;cursor:pointer}.bps-configuration-selector-wrapper-disabled{border:solid 1px #474747;color:#474747}.bps-configuration-selector-right-arrow{display:inline-block;position:relative;top:-4px;padding-left:10px;cursor:pointer}.bps-configuration-selector-right-arrow:after{content:url(/assets/bps-icons/sps_right_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow:after{content:url(/assets/bps-icons/sps_left_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow-disabled{content:url(/assets/bps-icons/sps_left_report_icon_disabled.svg);cursor:not-allowed}.bps-configuration-selector-right-arrow-disabled{content:url(/assets/bps-icons/sps_right_report_icon_disabled.svg);cursor:not-allowed}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }]; }, propDecorators: { currentDisplayedData: [{
                type: Input
            }], propertyName: [{
                type: Input
            }], disabled: [{
                type: Input
            }], currentDisplayedDataChange: [{
                type: Output
            }], data: [{
                type: Input
            }] } });

class BpsDropDownADirective {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropDownADirective, deps: [], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsDropDownADirective, selector: "a[bps-dropdown]", host: { classAttribute: "ant-dropdown-link" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropDownADirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'a[bps-dropdown]',
                    host: {
                        class: 'ant-dropdown-link'
                    }
                }]
        }], ctorParameters: function () { return []; } });

class BpsDropdownMenuComponent {
    onAnimationEvent(event) {
        this.animationStateChange$.emit(event);
    }
    setMouseState(visible) {
        this.mouseState$.next(visible);
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuService = nzMenuService;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.mouseState$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
        this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
        this.animationStateChange$ = new EventEmitter();
        this.bpsOverlayClassName = '';
        this.bpsOverlayStyle = {};
        this.bpsPlacement = '';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropdownMenuComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i1$5.MenuService }, { token: i2.Directionality, optional: true }, { token: i1$1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsDropdownMenuComponent, selector: "bps-dropdown-menu", providers: [
            MenuService,
            /** menu is inside dropdown-menu component **/
            {
                provide: NzIsMenuInsideDropDownToken,
                useValue: true
            }
        ], viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], exportAs: ["bpsDropdownMenu"], ngImport: i0, template: `
    <ng-template>
      <div
        class="ant-dropdown bps-dropdown"
        [class.ant-dropdown-placement-bottomLeft]="bpsPlacement === 'bottomLeft'"
        [class.ant-dropdown-placement-bottomCenter]="bpsPlacement === 'bottomCenter'"
        [class.ant-dropdown-placement-bottomRight]="bpsPlacement === 'bottomRight'"
        [class.ant-dropdown-placement-topLeft]="bpsPlacement === 'topLeft'"
        [class.ant-dropdown-placement-topCenter]="bpsPlacement === 'topCenter'"
        [class.ant-dropdown-placement-topRight]="bpsPlacement === 'topRight'"
        [class.ant-dropdown-placement-rightTop]="bpsPlacement === 'rightTop'"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="bpsOverlayClassName"
        [ngStyle]="bpsOverlayStyle"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `, isInline: true, styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before,.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-16px;transition:all .3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:6px;right:calc(100% - 8px);transition:all .3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover:before{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:hover:before{background-color:#262626!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i1$1.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }], animations: [slideMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropdownMenuComponent, decorators: [{
            type: Component,
            args: [{ selector: `bps-dropdown-menu`, exportAs: `bpsDropdownMenu`, animations: [slideMotion], providers: [
                        MenuService,
                        /** menu is inside dropdown-menu component **/
                        {
                            provide: NzIsMenuInsideDropDownToken,
                            useValue: true
                        }
                    ], template: `
    <ng-template>
      <div
        class="ant-dropdown bps-dropdown"
        [class.ant-dropdown-placement-bottomLeft]="bpsPlacement === 'bottomLeft'"
        [class.ant-dropdown-placement-bottomCenter]="bpsPlacement === 'bottomCenter'"
        [class.ant-dropdown-placement-bottomRight]="bpsPlacement === 'bottomRight'"
        [class.ant-dropdown-placement-topLeft]="bpsPlacement === 'topLeft'"
        [class.ant-dropdown-placement-topCenter]="bpsPlacement === 'topCenter'"
        [class.ant-dropdown-placement-topRight]="bpsPlacement === 'topRight'"
        [class.ant-dropdown-placement-rightTop]="bpsPlacement === 'rightTop'"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="bpsOverlayClassName"
        [ngStyle]="bpsOverlayStyle"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `, preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before,.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-16px;transition:all .3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:6px;right:calc(100% - 8px);transition:all .3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover:before{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:hover:before{background-color:#262626!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i1$5.MenuService }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1$1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }] } });

class NzTreeNode {
    get treeService() {
        return this.service || (this.parentNode && this.parentNode.treeService);
    }
    constructor(option, parent = null, service = null) {
        this.level = 0;
        if (option instanceof NzTreeNode) {
            return option;
        }
        this.service = service || null;
        this.origin = option;
        this.key = option.key;
        this.parentNode = parent;
        this._title = option.title || '---';
        this._icon = option.icon || '';
        this._isLeaf = option.isLeaf || false;
        this._children = [];
        // option params
        this._isChecked = option.checked || false;
        this._isSelectable = option.disabled || option.selectable !== false;
        this._isDisabled = option.disabled || false;
        this._isDisableCheckbox = option.disableCheckbox || false;
        this._isExpanded = option.isLeaf ? false : option.expanded || false;
        this._isHalfChecked = false;
        this._isSelected = (!option.disabled && option.selected) || false;
        this._isLoading = false;
        this.isMatched = false;
        /**
         * parent's checked status will affect children while initializing
         */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof option.children !== 'undefined' && option.children !== null) {
            option.children.forEach(nodeOptions => {
                const s = this.treeService;
                if (s &&
                    !s.isCheckStrictly &&
                    option.checked &&
                    !option.disabled &&
                    !nodeOptions.disabled &&
                    !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                this._children.push(new NzTreeNode(nodeOptions, this));
            });
        }
    }
    /**
     * auto generate
     * get
     * set
     */
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
        this.update();
    }
    get icon() {
        return this._icon;
    }
    set icon(value) {
        this._icon = value;
        this.update();
    }
    get children() {
        return this._children;
    }
    set children(value) {
        this._children = value;
        this.update();
    }
    get isLeaf() {
        return this._isLeaf;
    }
    set isLeaf(value) {
        this._isLeaf = value;
        this.update();
    }
    get isChecked() {
        return this._isChecked;
    }
    set isChecked(value) {
        this._isChecked = value;
        this._isAllChecked = value;
        this.origin.checked = value;
        this.afterValueChange('isChecked');
    }
    get isAllChecked() {
        return this._isAllChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    set isAllChecked(value) {
        warnDeprecation(`'isAllChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this._isAllChecked = value;
    }
    get isHalfChecked() {
        return this._isHalfChecked;
    }
    set isHalfChecked(value) {
        this._isHalfChecked = value;
        this.afterValueChange('isHalfChecked');
    }
    get isSelectable() {
        return this._isSelectable;
    }
    set isSelectable(value) {
        this._isSelectable = value;
        this.update();
    }
    get isDisabled() {
        return this._isDisabled;
    }
    set isDisabled(value) {
        this._isDisabled = value;
        this.update();
    }
    get isDisableCheckbox() {
        return this._isDisableCheckbox;
    }
    set isDisableCheckbox(value) {
        this._isDisableCheckbox = value;
        this.update();
    }
    get isExpanded() {
        return this._isExpanded;
    }
    set isExpanded(value) {
        this._isExpanded = value;
        this.origin.expanded = value;
        this.afterValueChange('isExpanded');
    }
    get isSelected() {
        return this._isSelected;
    }
    set isSelected(value) {
        this._isSelected = value;
        this.origin.selected = value;
        this.afterValueChange('isSelected');
    }
    get isLoading() {
        return this._isLoading;
    }
    set isLoading(value) {
        this._isLoading = value;
        this.update();
    }
    setSyncChecked(checked = false, halfChecked = false) {
        this.setChecked(checked, halfChecked);
        if (this.treeService && !this.treeService.isCheckStrictly) {
            this.treeService.conduct(this);
        }
    }
    /**
     * @deprecated Maybe removed in next major version, use `isChecked` instead.
     */
    setChecked(checked = false, halfChecked = false) {
        warnDeprecation(`'setChecked' is going to be removed in 9.0.0. Please use 'isChecked' instead.`);
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isExpanded` instead.
     */
    setExpanded(value) {
        warnDeprecation(`'setExpanded' is going to be removed in 9.0.0. Please use 'isExpanded' instead.`);
        this.isExpanded = value;
    }
    /**
     * @deprecated Maybe removed in next major version, use `isSelected` instead.
     */
    setSelected(value) {
        warnDeprecation(`'setSelected' is going to be removed in 9.0.0. Please use 'isExpanded' isSelected.`);
        if (this.isDisabled) {
            return;
        }
        this.isSelected = value;
    }
    getParentNode() {
        return this.parentNode;
    }
    getChildren() {
        return this.children;
    }
    /**
     * Support appending child nodes by position. Leaf node cannot be appended.
     */
    // tslint:disable-next-line:no-any
    addChildren(children, childPos = -1) {
        if (!this.isLeaf) {
            children.forEach(node => {
                const refreshLevel = (n) => {
                    n.getChildren().forEach(c => {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                let child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = this;
                }
                else {
                    child = new NzTreeNode(node, this);
                }
                child.level = this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) { }
            });
            this.origin.children = this.getChildren().map(v => v.origin);
            // remove loading state
            this.isLoading = false;
        }
    }
    clearChildren() {
        // refresh checked state
        this.afterValueChange('clearChildren');
        this.children = [];
        this.origin.children = [];
    }
    remove() {
        const parentNode = this.getParentNode();
        if (parentNode) {
            parentNode.children = parentNode.getChildren().filter(v => v.key !== this.key);
            parentNode.origin.children = parentNode.origin.children.filter(v => v.key !== this.key);
            this.afterValueChange('remove');
        }
    }
    afterValueChange(key) {
        if (this.treeService) {
            switch (key) {
                case 'isChecked':
                    this.treeService.setCheckedNodeList(this);
                    break;
                case 'isHalfChecked':
                    this.treeService.setHalfCheckedNodeList(this);
                    break;
                case 'isExpanded':
                    this.treeService.setExpandedNodeList(this);
                    break;
                case 'isSelected':
                    this.treeService.setNodeActive(this);
                    break;
                case 'clearChildren':
                    this.treeService.afterRemove(this.getChildren());
                    break;
                case 'remove':
                    this.treeService.afterRemove([this]);
                    break;
            }
        }
        this.update();
    }
    update() {
        if (this.component) {
            this.component.setClassMap();
            this.component.markForCheck();
        }
    }
}

class NzTreeBase {
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    coerceTreeNodes(
    // tslint:disable-next-line:no-any
    value) {
        let nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map(item => new NzTreeNode(item, null, this.nzTreeService));
        }
        else {
            nodes = value.map((item) => {
                item.service = this.nzTreeService;
                return item;
            });
        }
        return nodes;
    }
    /**
     * Get all nodes({@link NzTreeNode})
     */
    getTreeNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * Get {@link NzTreeNode} with key
     */
    getTreeNodeByKey(key) {
        // flat tree nodes
        const nodes = [];
        const getNode = (node) => {
            nodes.push(node);
            node.getChildren().forEach(n => {
                getNode(n);
            });
        };
        this.getTreeNodes().forEach(n => {
            getNode(n);
        });
        return nodes.find(n => n.key === key) || null;
    }
    /**
     * Get checked nodes(merged)
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * Get selected nodes
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * Get half checked nodes
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * Get expanded nodes
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
}

function isCheckDisabled(node) {
    const { isDisabled, isDisableCheckbox } = node;
    return !!(isDisabled || isDisableCheckbox);
}
// tslint:disable-next-line:no-any
function isInArray(needle, haystack) {
    return haystack.length > 0 && haystack.indexOf(needle) > -1;
}

class NzTreeBaseService {
    constructor() {
        this.DRAG_SIDE_RANGE = 0.25;
        this.DRAG_MIN_GAP = 2;
        this.isCheckStrictly = false;
        this.isMultiple = false;
        this.rootNodes = [];
        this.selectedNodeList = [];
        this.expandedNodeList = [];
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        this.matchedNodeList = [];
        this.triggerEventChange$ = new Subject();
    }
    /**
     * trigger event
     */
    eventTriggerChanged() {
        return this.triggerEventChange$.asObservable();
    }
    /**
     * reset tree nodes will clear default node list
     */
    initTree(nzNodes) {
        this.rootNodes = nzNodes;
        this.expandedNodeList = [];
        this.selectedNodeList = [];
        this.halfCheckedNodeList = [];
        this.checkedNodeList = [];
        this.matchedNodeList = [];
        // refresh node checked state
        setTimeout(() => {
            this.refreshCheckState(this.isCheckStrictly);
        });
    }
    getSelectedNode() {
        return this.selectedNode;
    }
    /**
     * get some list
     */
    getSelectedNodeList() {
        return this.conductNodeState('select');
    }
    /**
     * return checked nodes
     */
    getCheckedNodeList() {
        return this.conductNodeState('check');
    }
    getHalfCheckedNodeList() {
        return this.conductNodeState('halfCheck');
    }
    /**
     * return expanded nodes
     */
    getExpandedNodeList() {
        return this.conductNodeState('expand');
    }
    /**
     * return search matched nodes
     */
    getMatchedNodeList() {
        return this.conductNodeState('match');
    }
    // tslint:disable-next-line:no-any
    isArrayOfNzTreeNode(value) {
        return value.every(item => item instanceof NzTreeNode);
    }
    /**
     * reset selectedNodeList
     */
    calcSelectedKeys(selectedKeys, nzNodes, isMulti = false) {
        const calc = (nodes) => {
            return nodes.every(node => {
                if (isInArray(node.key, selectedKeys)) {
                    node.isSelected = true;
                    if (!isMulti) {
                        // if not support multi select
                        return false;
                    }
                }
                else {
                    node.isSelected = false;
                }
                if (node.children.length > 0) {
                    // Recursion
                    return calc(node.children);
                }
                return true;
            });
        };
        calc(nzNodes);
    }
    /**
     * reset expandedNodeList
     */
    calcExpandedKeys(expandedKeys, nzNodes) {
        this.expandedNodeList = [];
        const calc = (nodes) => {
            nodes.forEach(node => {
                node.isExpanded = isInArray(node.key, expandedKeys);
                if (node.children.length > 0) {
                    calc(node.children);
                }
            });
        };
        calc(nzNodes);
    }
    /**
     * reset checkedNodeList
     */
    calcCheckedKeys(checkedKeys, nzNodes, isCheckStrictly = false) {
        this.checkedNodeList = [];
        this.halfCheckedNodeList = [];
        const calc = (nodes) => {
            nodes.forEach(node => {
                if (isInArray(node.key, checkedKeys)) {
                    node.isChecked = true;
                    node.isHalfChecked = false;
                }
                else {
                    node.isChecked = false;
                    node.isHalfChecked = false;
                }
                if (node.children.length > 0) {
                    calc(node.children);
                }
            });
        };
        calc(nzNodes);
        // controlled state
        this.refreshCheckState(isCheckStrictly);
    }
    /**
     * set drag node
     */
    setSelectedNode(node) {
        this.selectedNode = node;
    }
    /**
     * set node selected status
     */
    setNodeActive(node) {
        if (!this.isMultiple && node.isSelected) {
            this.selectedNodeList.forEach(n => {
                if (node.key !== n.key) {
                    // reset other nodes
                    n.isSelected = false;
                }
            });
            // single mode: remove pre node
            this.selectedNodeList = [];
        }
        this.setSelectedNodeList(node, this.isMultiple);
    }
    /**
     * add or remove node to selectedNodeList
     */
    setSelectedNodeList(node, isMultiple = false) {
        const index = this.selectedNodeList.findIndex(n => node.key === n.key);
        if (isMultiple) {
            if (node.isSelected && index === -1) {
                this.selectedNodeList.push(node);
            }
        }
        else {
            if (node.isSelected && index === -1) {
                this.selectedNodeList = [node];
            }
        }
        if (!node.isSelected) {
            this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
        }
    }
    /**
     * merge checked nodes
     */
    setHalfCheckedNodeList(node) {
        const index = this.halfCheckedNodeList.findIndex(n => node.key === n.key);
        if (node.isHalfChecked && index === -1) {
            this.halfCheckedNodeList.push(node);
        }
        else if (!node.isHalfChecked && index > -1) {
            this.halfCheckedNodeList = this.halfCheckedNodeList.filter(n => node.key !== n.key);
        }
    }
    setCheckedNodeList(node) {
        const index = this.checkedNodeList.findIndex(n => node.key === n.key);
        if (node.isChecked && index === -1) {
            this.checkedNodeList.push(node);
        }
        else if (!node.isChecked && index > -1) {
            this.checkedNodeList = this.checkedNodeList.filter(n => node.key !== n.key);
        }
    }
    /**
     * conduct checked/selected/expanded keys
     */
    conductNodeState(type = 'check') {
        let resultNodesList = [];
        switch (type) {
            case 'select':
                resultNodesList = this.selectedNodeList;
                break;
            case 'expand':
                resultNodesList = this.expandedNodeList;
                break;
            case 'match':
                resultNodesList = this.matchedNodeList;
                break;
            case 'check':
                resultNodesList = this.checkedNodeList;
                const isIgnore = (node) => {
                    const parentNode = node.getParentNode();
                    if (parentNode) {
                        if (this.checkedNodeList.findIndex(n => n.key === parentNode.key) > -1) {
                            return true;
                        }
                        else {
                            return isIgnore(parentNode);
                        }
                    }
                    return false;
                };
                // merge checked
                if (!this.isCheckStrictly) {
                    resultNodesList = this.checkedNodeList.filter(n => !isIgnore(n));
                }
                break;
            case 'halfCheck':
                if (!this.isCheckStrictly) {
                    resultNodesList = this.halfCheckedNodeList;
                }
                break;
        }
        return resultNodesList;
    }
    /**
     * set expanded nodes
     */
    setExpandedNodeList(node) {
        if (node.isLeaf) {
            return;
        }
        const index = this.expandedNodeList.findIndex(n => node.key === n.key);
        if (node.isExpanded && index === -1) {
            this.expandedNodeList.push(node);
        }
        else if (!node.isExpanded && index > -1) {
            this.expandedNodeList = this.expandedNodeList.filter(n => node.key !== n.key);
        }
    }
    /**
     * check state
     * @param isCheckStrictly
     */
    refreshCheckState(isCheckStrictly = false) {
        if (isCheckStrictly) {
            return;
        }
        this.checkedNodeList.forEach(node => {
            this.conduct(node);
        });
    }
    // reset other node checked state based current node
    conduct(node) {
        const isChecked = node.isChecked;
        if (node) {
            this.conductUp(node);
            this.conductDown(node, isChecked);
        }
    }
    /**
     * 1、children half checked
     * 2、children all checked, parent checked
     * 3、no children checked
     */
    conductUp(node) {
        const parentNode = node.getParentNode();
        if (parentNode) {
            if (!isCheckDisabled(parentNode)) {
                if (parentNode.children.every(child => isCheckDisabled(child) || (!child.isHalfChecked && child.isChecked))) {
                    parentNode.isChecked = true;
                    parentNode.isHalfChecked = false;
                }
                else if (parentNode.children.some(child => child.isHalfChecked || child.isChecked)) {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = true;
                }
                else {
                    parentNode.isChecked = false;
                    parentNode.isHalfChecked = false;
                }
            }
            this.setCheckedNodeList(parentNode);
            this.setHalfCheckedNodeList(parentNode);
            this.conductUp(parentNode);
        }
    }
    /**
     * reset child check state
     */
    conductDown(node, value) {
        if (!isCheckDisabled(node)) {
            node.isChecked = value;
            node.isHalfChecked = false;
            this.setCheckedNodeList(node);
            this.setHalfCheckedNodeList(node);
            node.children.forEach(n => {
                this.conductDown(n, value);
            });
        }
    }
    /**
     * search value & expand node
     * should add expandlist
     */
    searchExpand(value) {
        this.matchedNodeList = [];
        const expandedKeys = [];
        if (!isNotNil$1(value)) {
            return;
        }
        // to reset expandedNodeList
        const expandParent = (n) => {
            // expand parent node
            const parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        };
        const searchChild = (n) => {
            if (value && n.title.includes(value)) {
                // match the node
                n.isMatched = true;
                this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
            }
            n.canHide = !n.isMatched;
            n.children.forEach(child => {
                searchChild(child);
            });
        };
        this.rootNodes.forEach(child => {
            searchChild(child);
        });
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    }
    /**
     * flush after delete node
     */
    afterRemove(nodes) {
        // to reset selectedNodeList & expandedNodeList
        const loopNode = (node) => {
            // remove selected node
            this.selectedNodeList = this.selectedNodeList.filter(n => n.key !== node.key);
            // remove expanded node
            this.expandedNodeList = this.expandedNodeList.filter(n => n.key !== node.key);
            // remove checked node
            this.checkedNodeList = this.checkedNodeList.filter(n => n.key !== node.key);
            if (node.children) {
                node.children.forEach(child => {
                    loopNode(child);
                });
            }
        };
        nodes.forEach(n => {
            loopNode(n);
        });
        this.refreshCheckState(this.isCheckStrictly);
    }
    /**
     * drag event
     */
    refreshDragNode(node) {
        if (node.children.length === 0) {
            // until root
            this.conductUp(node);
        }
        else {
            node.children.forEach(child => {
                this.refreshDragNode(child);
            });
        }
    }
    // reset node level
    resetNodeLevel(node) {
        const parentNode = node.getParentNode();
        if (parentNode) {
            node.level = parentNode.level + 1;
        }
        else {
            node.level = 0;
        }
        for (const child of node.children) {
            this.resetNodeLevel(child);
        }
    }
    calcDropPosition(event) {
        const { clientY } = event;
        // to fix firefox undefined
        const { top, bottom, height } = event.srcElement
            ? event.srcElement.getBoundingClientRect()
            : event.target.getBoundingClientRect();
        const des = Math.max(height * this.DRAG_SIDE_RANGE, this.DRAG_MIN_GAP);
        if (clientY <= top + des) {
            return -1;
        }
        else if (clientY >= bottom - des) {
            return 1;
        }
        return 0;
    }
    /**
     * drop
     * 0: inner -1: pre 1: next
     */
    dropAndApply(targetNode, dragPos = -1) {
        if (!targetNode || dragPos > 1) {
            return;
        }
        const treeService = targetNode.treeService;
        const targetParent = targetNode.getParentNode();
        const isSelectedRootNode = this.selectedNode.getParentNode();
        // remove the dragNode
        if (isSelectedRootNode) {
            isSelectedRootNode.children = isSelectedRootNode.children.filter(n => n.key !== this.selectedNode.key);
        }
        else {
            this.rootNodes = this.rootNodes.filter(n => n.key !== this.selectedNode.key);
        }
        switch (dragPos) {
            case 0:
                targetNode.addChildren([this.selectedNode]);
                this.resetNodeLevel(targetNode);
                break;
            case -1:
            case 1:
                const tIndex = dragPos === 1 ? 1 : 0;
                if (targetParent) {
                    targetParent.addChildren([this.selectedNode], targetParent.children.indexOf(targetNode) + tIndex);
                    const parentNode = this.selectedNode.getParentNode();
                    if (parentNode) {
                        this.resetNodeLevel(parentNode);
                    }
                }
                else {
                    const targetIndex = this.rootNodes.indexOf(targetNode) + tIndex;
                    // Insert root node.
                    this.rootNodes.splice(targetIndex, 0, this.selectedNode);
                    this.rootNodes[targetIndex].parentNode = null;
                    this.rootNodes[targetIndex].level = 0;
                }
                break;
        }
        // flush all nodes
        this.rootNodes.forEach(child => {
            if (!child.treeService) {
                child.service = treeService;
            }
            this.refreshDragNode(child);
        });
    }
    /**
     * emit Structure
     * eventName
     * node
     * event: MouseEvent / DragEvent
     * dragNode
     */
    formatEvent(eventName, node, event) {
        const emitStructure = {
            eventName: eventName,
            node: node,
            event: event
        };
        switch (eventName) {
            case 'dragstart':
            case 'dragenter':
            case 'dragover':
            case 'dragleave':
            case 'drop':
            case 'dragend':
                Object.assign(emitStructure, { dragNode: this.getSelectedNode() });
                break;
            case 'click':
            case 'dblclick':
                Object.assign(emitStructure, { selectedKeys: this.selectedNodeList });
                Object.assign(emitStructure, { nodes: this.selectedNodeList });
                Object.assign(emitStructure, { keys: this.selectedNodeList.map(n => n.key) });
                break;
            case 'check':
                const checkedNodeList = this.getCheckedNodeList();
                Object.assign(emitStructure, { checkedKeys: checkedNodeList });
                Object.assign(emitStructure, { nodes: checkedNodeList });
                Object.assign(emitStructure, { keys: checkedNodeList.map(n => n.key) });
                break;
            case 'search':
                Object.assign(emitStructure, { matchedKeys: this.getMatchedNodeList() });
                Object.assign(emitStructure, { nodes: this.getMatchedNodeList() });
                Object.assign(emitStructure, { keys: this.getMatchedNodeList().map(n => n.key) });
                break;
            case 'expand':
                Object.assign(emitStructure, { nodes: this.expandedNodeList });
                Object.assign(emitStructure, { keys: this.expandedNodeList.map(n => n.key) });
                break;
        }
        return emitStructure;
    }
    ngOnDestroy() {
        this.triggerEventChange$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTreeBaseService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTreeBaseService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzTreeBaseService, decorators: [{
            type: Injectable
        }] });

class BpsTreeService extends NzTreeBaseService {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeService, deps: null, target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeService }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeService, decorators: [{
            type: Injectable
        }] });

const NzTreeHigherOrderServiceToken = new InjectionToken('NzTreeHigherOrder');

class BpsTreeNodeComponent {
    set bpsDraggable(value) {
        this._bpsDraggable = value;
        this.handDragEvent();
    }
    get bpsDraggable() {
        return this._bpsDraggable;
    }
    /**
     * @deprecated use `nzExpandAll` instead.
     */
    set bpsDefaultExpandAll(value) {
        warnDeprecation(`'bpsDefaultExpandAll' is going to be removed in 9.0.0. Please use 'bpsExpandAll' instead.`);
        this._bpsExpandAll = value;
        if (value && this.bpsTreeNode && !this.bpsTreeNode.isLeaf) {
            this.bpsTreeNode.isExpanded = true;
        }
    }
    get bpsDefaultExpandAll() {
        return this._bpsExpandAll;
    }
    // default set
    set bpsExpandAll(value) {
        this._bpsExpandAll = value;
        if (value && this.bpsTreeNode && !this.bpsTreeNode.isLeaf) {
            this.bpsTreeNode.isExpanded = true;
        }
    }
    get bpsExpandAll() {
        return this._bpsExpandAll;
    }
    get bpsIcon() {
        return this.bpsTreeNode.icon;
    }
    get canDraggable() {
        return this.bpsDraggable && !this.bpsTreeNode.isDisabled ? true : null;
    }
    get isShowLineIcon() {
        return !this.bpsTreeNode.isLeaf && this.bpsShowLine;
    }
    get isShowSwitchIcon() {
        return !this.bpsTreeNode.isLeaf && !this.bpsShowLine;
    }
    get isSwitcherOpen() {
        return this.bpsTreeNode.isExpanded && !this.bpsTreeNode.isLeaf;
    }
    get isSwitcherClose() {
        return !this.bpsTreeNode.isExpanded && !this.bpsTreeNode.isLeaf;
    }
    get displayStyle() {
        // to hide unmatched nodes
        return this.bpsSearchValue &&
            this.bpsHideUnMatched &&
            !this.bpsTreeNode.isMatched &&
            !this.bpsTreeNode.isExpanded &&
            this.bpsTreeNode.canHide
            ? 'none'
            : '';
    }
    /**
     * reset node class
     */
    setClassMap() {
        this.prefixCls = this.bpsSelectMode ? 'ant-select-tree' : 'ant-tree';
        this.bpsNodeClass = {
            [`${this.prefixCls}-treenode-disabled`]: this.bpsTreeNode.isDisabled,
            [`${this.prefixCls}-treenode-switcher-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-treenode-switcher-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-treenode-checkbox-checked`]: this.bpsTreeNode.isChecked,
            [`${this.prefixCls}-treenode-checkbox-indeterminate`]: this.bpsTreeNode.isHalfChecked,
            [`${this.prefixCls}-treenode-selected`]: this.bpsTreeNode.isSelected,
            [`${this.prefixCls}-treenode-loading`]: this.bpsTreeNode.isLoading
        };
        this.bpsNodeSwitcherClass = {
            [`${this.prefixCls}-switcher`]: true,
            [`${this.prefixCls}-switcher-noop`]: this.bpsTreeNode.isLeaf,
            [`${this.prefixCls}-switcher_open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-switcher_close`]: this.isSwitcherClose
        };
        this.bpsNodeCheckboxClass = {
            [`${this.prefixCls}-checkbox`]: true,
            [`${this.prefixCls}-checkbox-checked`]: this.bpsTreeNode.isChecked,
            [`${this.prefixCls}-checkbox-indeterminate`]: this.bpsTreeNode.isHalfChecked,
            [`${this.prefixCls}-checkbox-disabled`]: this.bpsTreeNode.isDisabled || this.bpsTreeNode.isDisableCheckbox
        };
        this.bpsNodeContentClass = {
            [`${this.prefixCls}-node-content-wrapper`]: true,
            [`bps-tree-leaf`]: this.bpsTreeNode.isLeaf,
            [`bps-tree-parent`]: !this.bpsTreeNode.isLeaf,
            [`${this.prefixCls}-node-content-wrapper-open`]: this.isSwitcherOpen,
            [`${this.prefixCls}-node-content-wrapper-close`]: this.isSwitcherClose,
            [`${this.prefixCls}-node-selected`]: this.bpsTreeNode.isSelected
        };
        this.bpsNodeContentIconClass = {
            [`${this.prefixCls}-iconEle`]: true,
            [`${this.prefixCls}-icon__customize`]: true
        };
        this.bpsNodeContentLoadingClass = {
            [`${this.prefixCls}-iconEle`]: true
        };
    }
    onMousedown(event) {
        if (this.bpsSelectMode) {
            event.preventDefault();
        }
    }
    /**
     * click node to select, 200ms to dbl click
     */
    nzClick(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.bpsTreeNode.isSelectable && !this.bpsTreeNode.isDisabled) {
            if (!this.bpsTreeNode.isSelected) {
                this.bpsTreeNode.isSelected = true;
            }
            if (this.bpsCustomTree) {
                this._clickExpand(event);
            }
        }
        const eventNext = this.nzTreeService.formatEvent('click', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    nzDblClick(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('dblclick', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * @param event
     */
    nzContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
        const eventNext = this.nzTreeService.formatEvent('contextmenu', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * collapse node
     * @param event
     */
    _clickExpand(event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.bpsTreeNode.isLoading && !this.bpsTreeNode.isLeaf) {
            // set async state
            if (this.bpsAsyncData && this.bpsTreeNode.children.length === 0 && !this.bpsTreeNode.isExpanded) {
                this.bpsTreeNode.isLoading = true;
            }
            this.bpsTreeNode.isExpanded = !this.bpsTreeNode.isExpanded;
            if (this.bpsTreeNode.isMatched) {
                this.setDisplayForParentNodes(this.bpsTreeNode);
            }
            this.setDisplayForChildNodes(this.bpsTreeNode);
            const eventNext = this.nzTreeService.formatEvent('expand', this.bpsTreeNode, event);
            this.nzTreeService.triggerEventChange$.next(eventNext);
        }
    }
    setDisplayForChildNodes(parentNode) {
        const { children } = parentNode;
        if (children.length > 0) {
            children.map(node => {
                const canHide = !node.isMatched;
                node.canHide = canHide;
                this.setDisplayForChildNodes(node);
            });
        }
    }
    setDisplayForParentNodes(targetNode) {
        const parentNode = targetNode.getParentNode();
        if (parentNode) {
            parentNode.canHide = false;
            this.setDisplayForParentNodes(parentNode);
        }
    }
    /**
     * check node
     * @param event
     */
    _clickCheckBox(event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (this.bpsTreeNode.isDisabled || this.bpsTreeNode.isDisableCheckbox) {
            return;
        }
        this.bpsTreeNode.isChecked = !this.bpsTreeNode.isChecked;
        this.bpsTreeNode.isHalfChecked = false;
        if (!this.nzTreeService.isCheckStrictly) {
            this.nzTreeService.conduct(this.bpsTreeNode);
        }
        const eventNext = this.nzTreeService.formatEvent('check', this.bpsTreeNode, event);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    /**
     * drag event
     * @param e
     */
    clearDragClass() {
        const dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(e => {
            this.renderer.removeClass(this.dragElement.nativeElement, e);
        });
    }
    handleDragStart(e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', this.bpsTreeNode.key);
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.bpsTreeNode);
        this.bpsTreeNode.isExpanded = false;
        const eventNext = this.nzTreeService.formatEvent('dragstart', this.bpsTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragEnter(e) {
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(() => {
            const node = this.nzTreeService.getSelectedNode();
            if (node && node.key !== this.bpsTreeNode.key && !this.bpsTreeNode.isExpanded && !this.bpsTreeNode.isLeaf) {
                this.bpsTreeNode.isExpanded = true;
            }
            const eventNext = this.nzTreeService.formatEvent('dragenter', this.bpsTreeNode, e);
            this.nzTreeService.triggerEventChange$.next(eventNext);
        });
    }
    handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
        const dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.bpsTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        const eventNext = this.nzTreeService.formatEvent('dragover', this.bpsTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragLeave(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
        });
        const eventNext = this.nzTreeService.formatEvent('dragleave', this.bpsTreeNode, e);
        this.nzTreeService.triggerEventChange$.next(eventNext);
    }
    handleDragDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(() => {
            this.clearDragClass();
            const node = this.nzTreeService.getSelectedNode();
            if (!node || (node && node.key === this.bpsTreeNode.key) || (this.dragPos === 0 && this.bpsTreeNode.isLeaf)) {
                return;
            }
            // pass if node is leafNo
            const dropEvent = this.nzTreeService.formatEvent('drop', this.bpsTreeNode, e);
            const dragEndEvent = this.nzTreeService.formatEvent('dragend', this.bpsTreeNode, e);
            if (this.bpsBeforeDrop) {
                this.bpsBeforeDrop({
                    dragNode: this.nzTreeService.getSelectedNode(),
                    node: this.bpsTreeNode,
                    pos: this.dragPos
                }).subscribe((canDrop) => {
                    if (canDrop) {
                        this.nzTreeService.dropAndApply(this.bpsTreeNode, this.dragPos);
                    }
                    this.nzTreeService.triggerEventChange$.next(dropEvent);
                    this.nzTreeService.triggerEventChange$.next(dragEndEvent);
                });
            }
            else if (this.bpsTreeNode) {
                this.nzTreeService.dropAndApply(this.bpsTreeNode, this.dragPos);
                this.nzTreeService.triggerEventChange$.next(dropEvent);
            }
        });
    }
    handleDragEnd(e) {
        e.stopPropagation();
        this.ngZone.run(() => {
            // if user do not custom beforeDrop
            if (!this.bpsBeforeDrop) {
                const eventNext = this.nzTreeService.formatEvent('dragend', this.bpsTreeNode, e);
                this.nzTreeService.triggerEventChange$.next(eventNext);
            }
        });
    }
    /**
     * Listening to dragging events.
     */
    handDragEvent() {
        this.ngZone.runOutsideAngular(() => {
            if (this.bpsDraggable) {
                this.destroy$ = new Subject();
                fromEvent(this.elRef.nativeElement, 'dragstart')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragStart(e));
                fromEvent(this.elRef.nativeElement, 'dragenter')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnter(e));
                fromEvent(this.elRef.nativeElement, 'dragover')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragOver(e));
                fromEvent(this.elRef.nativeElement, 'dragleave')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragLeave(e));
                fromEvent(this.elRef.nativeElement, 'drop')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragDrop(e));
                fromEvent(this.elRef.nativeElement, 'dragend')
                    .pipe(takeUntil(this.destroy$))
                    .subscribe((e) => this.handleDragEnd(e));
            }
            else {
                this.destroy$.next();
                this.destroy$.complete();
            }
        });
    }
    isTemplateRef(value) {
        return value instanceof TemplateRef;
    }
    markForCheck() {
        this.cdr.markForCheck();
    }
    constructor(nzTreeService, ngZone, renderer, elRef, cdr, noAnimation) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.bpsHideUnMatched = false;
        this.bpsNoAnimation = false;
        this.bpsSelectMode = false;
        this.bpsShowIcon = false;
        this.bpsSearchValue = '';
        this.bpsCustomTree = true;
        // default var
        this.prefixCls = 'ant-tree';
        this.bpsNodeClass = {};
        this.bpsNodeSwitcherClass = {};
        this.bpsNodeContentClass = {};
        this.bpsNodeCheckboxClass = {};
        this.bpsNodeContentIconClass = {};
        this.bpsNodeContentLoadingClass = {};
        /**
         * drag var
         */
        this.destroy$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        /**
         * default set
         */
        this._bpsDraggable = false;
        this._bpsExpandAll = false;
    }
    ngOnInit() {
        // init expanded / selected / checked list
        if (this.bpsTreeNode.isSelected) {
            this.nzTreeService.setNodeActive(this.bpsTreeNode);
        }
        if (this.bpsTreeNode.isExpanded) {
            this.nzTreeService.setExpandedNodeList(this.bpsTreeNode);
        }
        if (this.bpsTreeNode.isChecked) {
            this.nzTreeService.setCheckedNodeList(this.bpsTreeNode);
        }
        // TODO
        this.bpsTreeNode.component = this;
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(filter(data => data.node.key === this.bpsTreeNode.key), takeUntil(this.destroy$))
            .subscribe(() => {
            this.setClassMap();
            this.markForCheck();
        });
        this.setClassMap();
    }
    ngOnChanges() {
        this.setClassMap();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeNodeComponent, deps: [{ token: NzTreeBaseService }, { token: i0.NgZone }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: i1$1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsTreeNodeComponent, selector: "bps-tree-node", inputs: { bpsTreeNode: "bpsTreeNode", bpsShowLine: "bpsShowLine", bpsShowExpand: "bpsShowExpand", bpsCheckable: "bpsCheckable", bpsAsyncData: "bpsAsyncData", bpsHideUnMatched: "bpsHideUnMatched", bpsNoAnimation: "bpsNoAnimation", bpsSelectMode: "bpsSelectMode", bpsShowIcon: "bpsShowIcon", bpsExpandedIcon: "bpsExpandedIcon", bpsTreeTemplate: "bpsTreeTemplate", bpsBeforeDrop: "bpsBeforeDrop", bpsSearchValue: "bpsSearchValue", bpsCustomTree: "bpsCustomTree", bpsDraggable: "bpsDraggable", bpsDefaultExpandAll: "bpsDefaultExpandAll", bpsExpandAll: "bpsExpandAll" }, host: { listeners: { "mousedown": "onMousedown($event)", "click": "nzClick($event)", "dblclick": "nzDblClick($event)", "contextmenu": "nzContextMenu($event)" } }, viewQueries: [{ propertyName: "dragElement", first: true, predicate: ["dragElement"], descendants: true }], exportAs: ["bpsTreeNode"], usesOnChanges: true, ngImport: i0, template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"bpsNodeClass\">\r\n  <ng-container *ngIf=\"bpsShowExpand && !bpsCustomTree\">\r\n    <span\r\n      [ngClass]=\"bpsNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!bpsTreeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\r\n            [ngTemplateOutlet]=\"bpsExpandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(bpsExpandedIcon)\"\r\n            nz-icon\r\n            nzType=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"bpsSelectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!bpsSelectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"bpsTreeNode.isLoading\" nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"bpsShowLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\r\n          [ngTemplateOutlet]=\"bpsExpandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(bpsExpandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bpsCheckable && !bpsCustomTree\">\r\n    <span\r\n      [ngClass]=\"bpsNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!bpsSelectMode\"\r\n            [class.ant-select-tree-checkbox-inner]=\"bpsSelectMode\"></span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!bpsTreeTemplate\">\r\n    <span\r\n      title=\"{{bpsTreeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"bpsNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"bpsTreeNode.icon && bpsShowIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"bpsTreeNode.isLoading\"\r\n        [ngClass]=\"bpsNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"bpsNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"bpsIcon\" [nzType]=\"bpsIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\" *ngIf=\"!bpsCustomTree || bpsTreeNode.isLeaf\" [innerHTML]=\"bpsTreeNode.title | nzHighlight: bpsSearchValue: '' : 'font-highlight'\">\r\n      </span>\r\n      <img *ngIf=\"bpsCustomTree && !bpsTreeNode.isLeaf\" [src]=\"bpsTreeNode.title\"/>\r\n    </span>\r\n  </ng-container>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"bpsTreeTemplate\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n  </ng-template>\r\n\r\n  <ul\r\n    *ngIf=\"bpsTreeNode.isExpanded\"\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!bpsSelectMode || bpsTreeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    @treeCollapseMotion>\r\n    <bps-tree-node\r\n      *ngFor=\"let node of bpsTreeNode.getChildren()\"\r\n      [bpsTreeNode]=\"node\"\r\n      [bpsShowExpand]=\"bpsShowExpand\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsSelectMode]=\"bpsSelectMode\"\r\n      [bpsShowLine]=\"bpsShowLine\"\r\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\r\n      [bpsDraggable]=\"bpsDraggable\"\r\n      [bpsCheckable]=\"bpsCheckable\"\r\n      [bpsAsyncData]=\"bpsAsyncData\"\r\n      [bpsExpandAll]=\"bpsExpandAll\"\r\n      [bpsShowIcon]=\"bpsShowIcon\"\r\n      [bpsSearchValue]=\"bpsSearchValue\"\r\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\r\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\r\n      [bpsTreeTemplate]=\"bpsTreeTemplate\">\r\n    </bps-tree-node>\r\n  </ul>\r\n</li>\r\n", dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "component", type: BpsTreeNodeComponent, selector: "bps-tree-node", inputs: ["bpsTreeNode", "bpsShowLine", "bpsShowExpand", "bpsCheckable", "bpsAsyncData", "bpsHideUnMatched", "bpsNoAnimation", "bpsSelectMode", "bpsShowIcon", "bpsExpandedIcon", "bpsTreeTemplate", "bpsBeforeDrop", "bpsSearchValue", "bpsCustomTree", "bpsDraggable", "bpsDefaultExpandAll", "bpsExpandAll"], exportAs: ["bpsTreeNode"] }, { kind: "pipe", type: i5$1.NzHighlightPipe, name: "nzHighlight" }], animations: [treeCollapseMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsShowLine", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsShowExpand", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsCheckable", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsAsyncData", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsHideUnMatched", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsNoAnimation", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsSelectMode", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsShowIcon", void 0);
__decorate([
    InputBoolean()
], BpsTreeNodeComponent.prototype, "bpsCustomTree", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeNodeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-tree-node', exportAs: 'bpsTreeNode', changeDetection: ChangeDetectionStrategy.OnPush, preserveWhitespaces: false, animations: [treeCollapseMotion], template: "<li\r\n  #dragElement\r\n  role=\"treeitem\"\r\n  [style.display]=\"displayStyle\"\r\n  [ngClass]=\"bpsNodeClass\">\r\n  <ng-container *ngIf=\"bpsShowExpand && !bpsCustomTree\">\r\n    <span\r\n      [ngClass]=\"bpsNodeSwitcherClass\"\r\n      (click)=\"_clickExpand($event)\">\r\n      <ng-container *ngIf=\"isShowSwitchIcon\">\r\n        <ng-container *ngIf=\"!bpsTreeNode.isLoading\">\r\n          <ng-template\r\n            *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\r\n            [ngTemplateOutlet]=\"bpsExpandedIcon\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n          </ng-template>\r\n          <i\r\n            *ngIf=\"!isTemplateRef(bpsExpandedIcon)\"\r\n            nz-icon\r\n            nzType=\"caret-down\"\r\n            [class.ant-select-switcher-icon]=\"bpsSelectMode\"\r\n            [class.ant-tree-switcher-icon]=\"!bpsSelectMode\">\r\n          </i>\r\n        </ng-container>\r\n        <i *ngIf=\"bpsTreeNode.isLoading\" nz-icon nzType=\"loading\" [nzSpin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"bpsShowLine\">\r\n        <ng-template\r\n          *ngIf=\"isTemplateRef(bpsExpandedIcon)\"\r\n          [ngTemplateOutlet]=\"bpsExpandedIcon\"\r\n          [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n        </ng-template>\r\n        <ng-container *ngIf=\"!isTemplateRef(bpsExpandedIcon)\">\r\n          <i *ngIf=\"isShowLineIcon\" nz-icon [nzType]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\r\n          <i *ngIf=\"!isShowLineIcon\" nz-icon nzType=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\r\n        </ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bpsCheckable && !bpsCustomTree\">\r\n    <span\r\n      [ngClass]=\"bpsNodeCheckboxClass\"\r\n      (click)=\"_clickCheckBox($event)\">\r\n      <span [class.ant-tree-checkbox-inner]=\"!bpsSelectMode\"\r\n            [class.ant-select-tree-checkbox-inner]=\"bpsSelectMode\"></span>\r\n    </span>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"!bpsTreeTemplate\">\r\n    <span\r\n      title=\"{{bpsTreeNode.title}}\"\r\n      [attr.draggable]=\"canDraggable\"\r\n      [attr.aria-grabbed]=\"canDraggable\"\r\n      [ngClass]=\"bpsNodeContentClass\"\r\n      [class.draggable]=\"canDraggable\">\r\n      <span\r\n        *ngIf=\"bpsTreeNode.icon && bpsShowIcon\"\r\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\r\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\r\n        [class.ant-tree-icon_loading]=\"bpsTreeNode.isLoading\"\r\n        [ngClass]=\"bpsNodeContentLoadingClass\">\r\n        <span\r\n          [ngClass]=\"bpsNodeContentIconClass\">\r\n          <i nz-icon *ngIf=\"bpsIcon\" [nzType]=\"bpsIcon\"></i>\r\n        </span>\r\n      </span>\r\n      <span class=\"ant-tree-title\" *ngIf=\"!bpsCustomTree || bpsTreeNode.isLeaf\" [innerHTML]=\"bpsTreeNode.title | nzHighlight: bpsSearchValue: '' : 'font-highlight'\">\r\n      </span>\r\n      <img *ngIf=\"bpsCustomTree && !bpsTreeNode.isLeaf\" [src]=\"bpsTreeNode.title\"/>\r\n    </span>\r\n  </ng-container>\r\n  <ng-template\r\n    [ngTemplateOutlet]=\"bpsTreeTemplate\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: bpsTreeNode }\">\r\n  </ng-template>\r\n\r\n  <ul\r\n    *ngIf=\"bpsTreeNode.isExpanded\"\r\n    role=\"group\"\r\n    class=\"ant-tree-child-tree\"\r\n    [class.ant-tree-child-tree-open]=\"!bpsSelectMode || bpsTreeNode.isExpanded\"\r\n    data-expanded=\"true\"\r\n    [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n    @treeCollapseMotion>\r\n    <bps-tree-node\r\n      *ngFor=\"let node of bpsTreeNode.getChildren()\"\r\n      [bpsTreeNode]=\"node\"\r\n      [bpsShowExpand]=\"bpsShowExpand\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsSelectMode]=\"bpsSelectMode\"\r\n      [bpsShowLine]=\"bpsShowLine\"\r\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\r\n      [bpsDraggable]=\"bpsDraggable\"\r\n      [bpsCheckable]=\"bpsCheckable\"\r\n      [bpsAsyncData]=\"bpsAsyncData\"\r\n      [bpsExpandAll]=\"bpsExpandAll\"\r\n      [bpsShowIcon]=\"bpsShowIcon\"\r\n      [bpsSearchValue]=\"bpsSearchValue\"\r\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\r\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\r\n      [bpsTreeTemplate]=\"bpsTreeTemplate\">\r\n    </bps-tree-node>\r\n  </ul>\r\n</li>\r\n" }]
        }], ctorParameters: function () { return [{ type: NzTreeBaseService }, { type: i0.NgZone }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i1$1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { dragElement: [{
                type: ViewChild,
                args: ['dragElement', { static: false }]
            }], bpsTreeNode: [{
                type: Input
            }], bpsShowLine: [{
                type: Input
            }], bpsShowExpand: [{
                type: Input
            }], bpsCheckable: [{
                type: Input
            }], bpsAsyncData: [{
                type: Input
            }], bpsHideUnMatched: [{
                type: Input
            }], bpsNoAnimation: [{
                type: Input
            }], bpsSelectMode: [{
                type: Input
            }], bpsShowIcon: [{
                type: Input
            }], bpsExpandedIcon: [{
                type: Input
            }], bpsTreeTemplate: [{
                type: Input
            }], bpsBeforeDrop: [{
                type: Input
            }], bpsSearchValue: [{
                type: Input
            }], bpsCustomTree: [{
                type: Input
            }], bpsDraggable: [{
                type: Input
            }], bpsDefaultExpandAll: [{
                type: Input
            }], bpsExpandAll: [{
                type: Input
            }], onMousedown: [{
                type: HostListener,
                args: ['mousedown', ['$event']]
            }], nzClick: [{
                type: HostListener,
                args: ['click', ['$event']]
            }], nzDblClick: [{
                type: HostListener,
                args: ['dblclick', ['$event']]
            }], nzContextMenu: [{
                type: HostListener,
                args: ['contextmenu', ['$event']]
            }] } });

function NzTreeServiceFactory(higherOrderService, treeService) {
    return higherOrderService ? higherOrderService : treeService;
}
const NZ_CONFIG_COMPONENT_NAME$1 = 'tree';
class BpsTreeComponent extends NzTreeBase {
    get treeTemplate() {
        return this.bpsTreeTemplate || this.bpsTreeTemplateChild;
    }
    /**
     * @deprecated 9.0.0 use `bpsExpandAll` instead.
     */
    set bpsDefaultExpandAll(value) {
        warnDeprecation(`'bpsDefaultExpandAll' would be removed in 9.0.0. Please use 'bpsExpandAll' instead.`);
        this.bpsExpandAll = value;
        this._bpsDefaultExpandAll = value;
    }
    get bpsDefaultExpandAll() {
        return this._bpsDefaultExpandAll;
    }
    set bpsData(value) {
        this.initNzData(value);
    }
    /**
     * @deprecated 9.0.0 - use `bpsExpandedKeys` instead.
     */
    set bpsDefaultExpandedKeys(value) {
        warnDeprecation(`'bpsDefaultExpandedKeys' would be removed in 9.0.0. Please use 'bpsExpandedKeys' instead.`);
        this.bpsDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `bpsSelectedKeys` instead.
     */
    set bpsDefaultSelectedKeys(value) {
        warnDeprecation(`'bpsDefaultSelectedKeys' would be removed in 9.0.0. Please use 'bpsSelectedKeys' instead.`);
        this.bpsDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated 9.0.0 - use `bpsCheckedKeys` instead.
     */
    set bpsDefaultCheckedKeys(value) {
        warnDeprecation(`'bpsDefaultCheckedKeys' would be removed in 9.0.0. Please use 'bpsCheckedKeys' instead.`);
        this.bpsDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set bpsExpandedKeys(value) {
        this.bpsDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    set bpsSelectedKeys(value) {
        this.bpsDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    set bpsCheckedKeys(value) {
        this.bpsDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    set bpsSearchValue(value) {
        this._searchValue = value;
        this.nzTreeService.searchExpand(value);
        if (isNotNil$1(value)) {
            this.bpsSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            /**
             * @deprecated 9.0.0 - use `nzOnSearchNode` instead.
             * Hide warning, need remove next version
             */
            this.bpsOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
        }
    }
    get bpsSearchValue() {
        return this._searchValue;
    }
    /**
     * To render nodes if root is changed.
     */
    get bpsNodes() {
        return this.nzTreeService.rootNodes;
    }
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            ['bps-tree']: true,
            [this.prefixCls + '-show-line']: this.bpsShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.bpsShowIcon,
            [`${this.prefixCls}-block-node`]: this.bpsBlockNode,
            ['draggable-tree']: this.bpsDraggable,
            ['ant-select-tree']: this.bpsSelectMode
        };
    }
    writeValue(value) {
        this.initNzData(value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    // tslint:disable-next-line:no-any
    initNzData(value) {
        if (Array.isArray(value)) {
            this.nzTreeService.isCheckStrictly = this.bpsCheckStrictly;
            this.nzTreeService.isMultiple = this.bpsMultiple;
            this.nzTreeService.initTree(this.coerceTreeNodes(value));
        }
    }
    constructor(nzTreeService, nzConfigService, cdr, noAnimation) {
        super(nzTreeService);
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.noAnimation = noAnimation;
        this.bpsShowExpand = true;
        this.bpsShowLine = false;
        this.bpsCheckable = false;
        this.bpsAsyncData = false;
        this.bpsDraggable = false;
        this.bpsSelectMode = false;
        this.bpsCheckStrictly = false;
        this.bpsExpandAll = false;
        this.bpsCustomTree = true;
        this._bpsDefaultExpandAll = false;
        this.bpsMultiple = false;
        this.bpsExpandedKeysChange = new EventEmitter();
        this.bpsSelectedKeysChange = new EventEmitter();
        this.bpsCheckedKeysChange = new EventEmitter();
        this.bpsSearchValueChange = new EventEmitter();
        /**
         * @deprecated use `nzSearchValueChange` instead.
         */
        this.bpsOnSearchNode = new EventEmitter();
        this.bpsClick = new EventEmitter();
        this.bpsDblClick = new EventEmitter();
        this.bpsContextMenu = new EventEmitter();
        this.bpsCheckBoxChange = new EventEmitter();
        this.bpsExpandChange = new EventEmitter();
        this.bpsOnDragStart = new EventEmitter();
        this.bpsOnDragEnter = new EventEmitter();
        this.bpsOnDragOver = new EventEmitter();
        this.bpsOnDragLeave = new EventEmitter();
        this.bpsOnDrop = new EventEmitter();
        this.bpsOnDragEnd = new EventEmitter();
        this.bpsDefaultSubject = new ReplaySubject(6);
        this.destroy$ = new Subject();
        this.prefixCls = 'ant-tree';
        this.classMap = {};
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    ngOnInit() {
        this.setClassMap();
        this.bpsDefaultSubject.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.bpsNodes);
                    this.bpsExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.bpsNodes, this.bpsMultiple);
                    this.bpsSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.bpsNodes, this.bpsCheckStrictly);
                    this.bpsCheckedKeysChange.emit(data.keys);
                    break;
            }
            this.cdr.markForCheck();
        });
        this.nzTreeService
            .eventTriggerChanged()
            .pipe(takeUntil(this.destroy$))
            .subscribe(data => {
            switch (data.eventName) {
                case 'expand':
                    if (this.bpsCustomTree) {
                        const keys = data.keys;
                        data.keys = [keys[keys.length - 1]];
                        this.nzTreeService.calcExpandedKeys(data.keys, this.bpsNodes);
                    }
                    this.bpsExpandChange.emit(data);
                    break;
                case 'click':
                    this.bpsClick.emit(data);
                    break;
                case 'check':
                    this.bpsCheckBoxChange.emit(data);
                    break;
                case 'dblclick':
                    this.bpsDblClick.emit(data);
                    break;
                case 'contextmenu':
                    this.bpsContextMenu.emit(data);
                    break;
                // drag drop
                case 'dragstart':
                    this.bpsOnDragStart.emit(data);
                    break;
                case 'dragenter':
                    this.bpsOnDragEnter.emit(data);
                    break;
                case 'dragover':
                    this.bpsOnDragOver.emit(data);
                    break;
                case 'dragleave':
                    this.bpsOnDragLeave.emit(data);
                    break;
                case 'drop':
                    this.bpsOnDrop.emit(data);
                    break;
                case 'dragend':
                    this.bpsOnDragEnd.emit(data);
                    break;
            }
        });
    }
    ngOnChanges(changes) {
        if (changes.bpsCheckStrictly) {
            this.nzTreeService.isCheckStrictly = this.bpsCheckStrictly;
        }
        if (changes.bpsMultiple) {
            this.nzTreeService.isMultiple = this.bpsMultiple;
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeComponent, deps: [{ token: NzTreeBaseService }, { token: i2$3.NzConfigService }, { token: i0.ChangeDetectorRef }, { token: i1$1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsTreeComponent, selector: "bps-tree", inputs: { bpsShowIcon: "bpsShowIcon", bpsShowExpand: "bpsShowExpand", bpsShowLine: "bpsShowLine", bpsExpandedIcon: "bpsExpandedIcon", bpsCheckable: "bpsCheckable", bpsAsyncData: "bpsAsyncData", bpsDraggable: "bpsDraggable", bpsHideUnMatched: "bpsHideUnMatched", bpsSelectMode: "bpsSelectMode", bpsCheckStrictly: "bpsCheckStrictly", bpsBlockNode: "bpsBlockNode", bpsExpandAll: "bpsExpandAll", bpsCustomTree: "bpsCustomTree", bpsTreeTemplate: "bpsTreeTemplate", bpsDefaultExpandAll: "bpsDefaultExpandAll", bpsBeforeDrop: "bpsBeforeDrop", bpsMultiple: "bpsMultiple", bpsData: "bpsData", bpsDefaultExpandedKeys: "bpsDefaultExpandedKeys", bpsDefaultSelectedKeys: "bpsDefaultSelectedKeys", bpsDefaultCheckedKeys: "bpsDefaultCheckedKeys", bpsExpandedKeys: "bpsExpandedKeys", bpsSelectedKeys: "bpsSelectedKeys", bpsCheckedKeys: "bpsCheckedKeys", bpsSearchValue: "bpsSearchValue" }, outputs: { bpsExpandedKeysChange: "bpsExpandedKeysChange", bpsSelectedKeysChange: "bpsSelectedKeysChange", bpsCheckedKeysChange: "bpsCheckedKeysChange", bpsSearchValueChange: "bpsSearchValueChange", bpsOnSearchNode: "bpsOnSearchNode", bpsClick: "bpsClick", bpsDblClick: "bpsDblClick", bpsContextMenu: "bpsContextMenu", bpsCheckBoxChange: "bpsCheckBoxChange", bpsExpandChange: "bpsExpandChange", bpsOnDragStart: "bpsOnDragStart", bpsOnDragEnter: "bpsOnDragEnter", bpsOnDragOver: "bpsOnDragOver", bpsOnDragLeave: "bpsOnDragLeave", bpsOnDrop: "bpsOnDrop", bpsOnDragEnd: "bpsOnDragEnd" }, providers: [
            BpsTreeService,
            {
                provide: NzTreeBaseService,
                useFactory: NzTreeServiceFactory,
                deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], BpsTreeService]
            },
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsTreeComponent),
                multi: true
            }
        ], queries: [{ propertyName: "bpsTreeTemplateChild", first: true, predicate: ["bpsTreeTemplate"], descendants: true, static: true }], exportAs: ["bpsTree"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of bpsNodes\">\r\n    <bps-tree-node\r\n      [bpsTreeNode]=\"node\"\r\n      [bpsSelectMode]=\"bpsSelectMode\"\r\n      [bpsShowLine]=\"bpsShowLine\"\r\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\r\n      [bpsDraggable]=\"bpsDraggable\"\r\n      [bpsCheckable]=\"bpsCheckable\"\r\n      [bpsShowExpand]=\"bpsShowExpand\"\r\n      [bpsAsyncData]=\"bpsAsyncData\"\r\n      [bpsSearchValue]=\"bpsSearchValue\"\r\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\r\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\r\n      [bpsExpandAll]=\"bpsExpandAll\"\r\n      [bpsShowIcon]=\"bpsShowIcon\"\r\n      [bpsTreeTemplate]=\"treeTemplate\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </bps-tree-node>\r\n  </ng-container>\r\n</ul>\r\n", styles: ["::ng-deep .ant-tree.bps-tree li ul{padding:0!important}::ng-deep .ant-tree{background:transparent!important}::ng-deep .ant-tree li .ant-tree-node-content-wrapper{display:inline-block;height:24px;margin:0;padding:0 5px;color:#000000a6;line-height:24px;text-decoration:none;vertical-align:top;border-radius:2px;cursor:pointer;transition:all .3s}::ng-deep .ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper{width:100%!important}::ng-deep .bps-tree-parent,::ng-deep .bps-tree-leaf{height:70px!important;max-height:70px!important;overflow:hidden!important;background-color:#363636!important;border:1px solid #363636!important;border-radius:5px!important;color:#fff!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.27!important;letter-spacing:normal!important;text-align:left!important;margin-bottom:5px!important}::ng-deep .bps-tree-leaf{height:35px!important;max-height:35px!important;padding:10px 20px!important}::ng-deep .bps-tree-parent:hover,::ng-deep .bps-tree-leaf:hover{border:solid 1px #445c67!important}::ng-deep .bps-tree-parent.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected:hover,::ng-deep .bps-tree-parent.ant-tree-node-selected:hover{border:solid 1px #00a2d1!important}::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf:hover,::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent:hover{border:1px solid #363636!important}::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper,::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper span{color:#666!important}::ng-deep .ant-tree li{padding:0!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: BpsTreeNodeComponent, selector: "bps-tree-node", inputs: ["bpsTreeNode", "bpsShowLine", "bpsShowExpand", "bpsCheckable", "bpsAsyncData", "bpsHideUnMatched", "bpsNoAnimation", "bpsSelectMode", "bpsShowIcon", "bpsExpandedIcon", "bpsTreeTemplate", "bpsBeforeDrop", "bpsSearchValue", "bpsCustomTree", "bpsDraggable", "bpsDefaultExpandAll", "bpsExpandAll"], exportAs: ["bpsTreeNode"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    InputBoolean(),
    WithConfig(NZ_CONFIG_COMPONENT_NAME$1, false)
], BpsTreeComponent.prototype, "bpsShowIcon", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsShowExpand", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsShowLine", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsCheckable", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsAsyncData", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsDraggable", void 0);
__decorate([
    InputBoolean(),
    WithConfig(NZ_CONFIG_COMPONENT_NAME$1, false)
], BpsTreeComponent.prototype, "bpsHideUnMatched", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsSelectMode", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsCheckStrictly", void 0);
__decorate([
    WithConfig(NZ_CONFIG_COMPONENT_NAME$1, false),
    InputBoolean()
], BpsTreeComponent.prototype, "bpsBlockNode", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsExpandAll", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsCustomTree", void 0);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsDefaultExpandAll", null);
__decorate([
    InputBoolean()
], BpsTreeComponent.prototype, "bpsMultiple", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTreeComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-tree', exportAs: 'bpsTree', changeDetection: ChangeDetectionStrategy.OnPush, providers: [
                        BpsTreeService,
                        {
                            provide: NzTreeBaseService,
                            useFactory: NzTreeServiceFactory,
                            deps: [[new SkipSelf(), new Optional(), NzTreeHigherOrderServiceToken], BpsTreeService]
                        },
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BpsTreeComponent),
                            multi: true
                        }
                    ], template: "<ul\r\n  role=\"tree\"\r\n  unselectable=\"on\"\r\n  [ngClass]=\"classMap\">\r\n  <ng-container *ngFor=\"let node of bpsNodes\">\r\n    <bps-tree-node\r\n      [bpsTreeNode]=\"node\"\r\n      [bpsSelectMode]=\"bpsSelectMode\"\r\n      [bpsShowLine]=\"bpsShowLine\"\r\n      [bpsExpandedIcon]=\"bpsExpandedIcon\"\r\n      [bpsDraggable]=\"bpsDraggable\"\r\n      [bpsCheckable]=\"bpsCheckable\"\r\n      [bpsShowExpand]=\"bpsShowExpand\"\r\n      [bpsAsyncData]=\"bpsAsyncData\"\r\n      [bpsSearchValue]=\"bpsSearchValue\"\r\n      [bpsHideUnMatched]=\"bpsHideUnMatched\"\r\n      [bpsBeforeDrop]=\"bpsBeforeDrop\"\r\n      [bpsExpandAll]=\"bpsExpandAll\"\r\n      [bpsShowIcon]=\"bpsShowIcon\"\r\n      [bpsTreeTemplate]=\"treeTemplate\"\r\n      [@.disabled]=\"noAnimation?.nzNoAnimation\"\r\n      [bpsNoAnimation]=\"noAnimation?.nzNoAnimation\">\r\n    </bps-tree-node>\r\n  </ng-container>\r\n</ul>\r\n", styles: ["::ng-deep .ant-tree.bps-tree li ul{padding:0!important}::ng-deep .ant-tree{background:transparent!important}::ng-deep .ant-tree li .ant-tree-node-content-wrapper{display:inline-block;height:24px;margin:0;padding:0 5px;color:#000000a6;line-height:24px;text-decoration:none;vertical-align:top;border-radius:2px;cursor:pointer;transition:all .3s}::ng-deep .ant-tree.ant-tree-block-node li .ant-tree-node-content-wrapper{width:100%!important}::ng-deep .bps-tree-parent,::ng-deep .bps-tree-leaf{height:70px!important;max-height:70px!important;overflow:hidden!important;background-color:#363636!important;border:1px solid #363636!important;border-radius:5px!important;color:#fff!important;font-size:11px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:1.27!important;letter-spacing:normal!important;text-align:left!important;margin-bottom:5px!important}::ng-deep .bps-tree-leaf{height:35px!important;max-height:35px!important;padding:10px 20px!important}::ng-deep .bps-tree-parent:hover,::ng-deep .bps-tree-leaf:hover{border:solid 1px #445c67!important}::ng-deep .bps-tree-parent.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected,::ng-deep .bps-tree-leaf.ant-tree-node-selected:hover,::ng-deep .bps-tree-parent.ant-tree-node-selected:hover{border:solid 1px #00a2d1!important}::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf:hover,::ng-deep .ant-tree-treenode-disabled>.bps-tree-leaf,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent,::ng-deep .ant-tree-treenode-disabled>.bps-tree-parent:hover{border:1px solid #363636!important}::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper,::ng-deep li.ant-tree-treenode-disabled>.ant-tree-node-content-wrapper span{color:#666!important}::ng-deep .ant-tree li{padding:0!important}\n"] }]
        }], ctorParameters: function () { return [{ type: NzTreeBaseService }, { type: i2$3.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i1$1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { bpsShowIcon: [{
                type: Input
            }], bpsShowExpand: [{
                type: Input
            }], bpsShowLine: [{
                type: Input
            }], bpsExpandedIcon: [{
                type: Input
            }], bpsCheckable: [{
                type: Input
            }], bpsAsyncData: [{
                type: Input
            }], bpsDraggable: [{
                type: Input
            }], bpsHideUnMatched: [{
                type: Input
            }], bpsSelectMode: [{
                type: Input
            }], bpsCheckStrictly: [{
                type: Input
            }], bpsBlockNode: [{
                type: Input
            }], bpsExpandAll: [{
                type: Input
            }], bpsCustomTree: [{
                type: Input
            }], bpsTreeTemplate: [{
                type: Input
            }], bpsTreeTemplateChild: [{
                type: ContentChild,
                args: ['bpsTreeTemplate', { static: true }]
            }], bpsDefaultExpandAll: [{
                type: Input
            }], bpsBeforeDrop: [{
                type: Input
            }], bpsMultiple: [{
                type: Input
            }], bpsData: [{
                type: Input
            }], bpsDefaultExpandedKeys: [{
                type: Input
            }], bpsDefaultSelectedKeys: [{
                type: Input
            }], bpsDefaultCheckedKeys: [{
                type: Input
            }], bpsExpandedKeys: [{
                type: Input
            }], bpsSelectedKeys: [{
                type: Input
            }], bpsCheckedKeys: [{
                type: Input
            }], bpsSearchValue: [{
                type: Input
            }], bpsExpandedKeysChange: [{
                type: Output
            }], bpsSelectedKeysChange: [{
                type: Output
            }], bpsCheckedKeysChange: [{
                type: Output
            }], bpsSearchValueChange: [{
                type: Output
            }], bpsOnSearchNode: [{
                type: Output
            }], bpsClick: [{
                type: Output
            }], bpsDblClick: [{
                type: Output
            }], bpsContextMenu: [{
                type: Output
            }], bpsCheckBoxChange: [{
                type: Output
            }], bpsExpandChange: [{
                type: Output
            }], bpsOnDragStart: [{
                type: Output
            }], bpsOnDragEnter: [{
                type: Output
            }], bpsOnDragOver: [{
                type: Output
            }], bpsOnDragLeave: [{
                type: Output
            }], bpsOnDrop: [{
                type: Output
            }], bpsOnDragEnd: [{
                type: Output
            }] } });

/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 */
// tslint:disable-next-line:no-any
class NzModalRef {
}

class BpsModalFooterDirective {
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsModalFooterDirective, deps: [{ token: NzModalRef, optional: true }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsModalFooterDirective, selector: "[bpsModalFooter]", exportAs: ["bpsModalFooter"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsModalFooterDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bpsModalFooter]',
                    exportAs: 'bpsModalFooter'
                }]
        }], ctorParameters: function () { return [{ type: NzModalRef, decorators: [{
                    type: Optional
                }] }, { type: i0.TemplateRef }]; } });

/**
 * API class that public to users to handle the modal instance.
 * NzModalRef is aim to avoid accessing to the modal instance directly by users.
 */
// tslint:disable-next-line:no-any
class BpsModalRef {
}

const NZ_MODAL_CONFIG = new InjectionToken('NZ_MODAL_CONFIG');

/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
class NzModalControlServiceModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzModalControlServiceModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NzModalControlServiceModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzModalControlServiceModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzModalControlServiceModule, decorators: [{
            type: NgModule
        }] });

class BpsModalControlService {
    // Track singleton afterAllClose through over the injection tree
    get afterAllClose() {
        return this.parentService ? this.parentService.afterAllClose : this.rootAfterAllClose;
    }
    // Track singleton openModals array through over the injection tree
    get openModals() {
        return this.parentService ? this.parentService.openModals : this.rootOpenModals;
    }
    get registeredMetaMap() {
        // Registered modal for later usage
        return this.parentService ? this.parentService.registeredMetaMap : this.rootRegisteredMetaMap;
    }
    constructor(parentService) {
        this.parentService = parentService;
        this.rootOpenModals = this.parentService ? null : [];
        this.rootAfterAllClose = this.parentService ? null : new Subject();
        this.rootRegisteredMetaMap = this.parentService ? null : new Map();
    }
    // Register a modal to listen its open/close
    registerModal(modalRef) {
        if (!this.hasRegistered(modalRef)) {
            const afterOpenSubscription = modalRef.afterOpen.subscribe(() => this.openModals.push(modalRef));
            const afterCloseSubscription = modalRef.afterClose.subscribe(() => this.removeOpenModal(modalRef));
            this.registeredMetaMap.set(modalRef, { modalRef, afterOpenSubscription, afterCloseSubscription });
        }
    }
    // deregister modals
    deregisterModal(modalRef) {
        const registeredMeta = this.registeredMetaMap.get(modalRef);
        if (registeredMeta) {
            // Remove this modal if it is still in the opened modal list (NOTE: it may trigger "afterAllClose")
            this.removeOpenModal(registeredMeta.modalRef);
            registeredMeta.afterOpenSubscription.unsubscribe();
            registeredMeta.afterCloseSubscription.unsubscribe();
            this.registeredMetaMap.delete(modalRef);
        }
    }
    hasRegistered(modalRef) {
        return this.registeredMetaMap.has(modalRef);
    }
    // Close all registered opened modals
    closeAll() {
        let i = this.openModals.length;
        while (i--) {
            this.openModals[i].close();
        }
    }
    removeOpenModal(modalRef) {
        const index = this.openModals.indexOf(modalRef);
        if (index > -1) {
            this.openModals.splice(index, 1);
            if (!this.openModals.length) {
                this.afterAllClose.next();
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsModalControlService, deps: [{ token: BpsModalControlService, optional: true, skipSelf: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsModalControlService, providedIn: NzModalControlServiceModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsModalControlService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: NzModalControlServiceModule
                }]
        }], ctorParameters: function () { return [{ type: BpsModalControlService, decorators: [{
                    type: Optional
                }, {
                    type: SkipSelf
                }] }]; } });

class NzToCssUnitPipe {
    transform(value, defaultUnit = 'px') {
        const formatted = +value; // force convert
        return isNaN(formatted) ? `${value}` : `${formatted}${defaultUnit}`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzToCssUnitPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe }); }
    static { this.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NzToCssUnitPipe, name: "nzToCssUnit" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzToCssUnitPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'nzToCssUnit'
                }]
        }] });

const MODAL_ANIMATE_DURATION = 200; // Duration when perform animations (ms)
const WRAP_CLASS_NAME = 'ant-modal-wrap';
const NZ_CONFIG_COMPONENT_NAME = 'modal';
// tslint:disable-next-line:no-any
class BpsModalComponent extends BpsModalRef {
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
            const lastPosition = getElementOffset$1(this.previouslyFocusedElement);
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsModalComponent, deps: [{ token: NzConfigService }, { token: i2$4.Overlay }, { token: i2$4.OverlayKeyboardDispatcher }, { token: i1$4.NzI18nService }, { token: i0.ComponentFactoryResolver }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: BpsModalControlService }, { token: i1.FocusTrapFactory }, { token: i0.ChangeDetectorRef }, { token: NZ_MODAL_CONFIG, optional: true }, { token: DOCUMENT }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsModalComponent, selector: "bps-modal", inputs: { bpsVisible: "bpsVisible", bpsClosable: "bpsClosable", bpsOkLoading: "bpsOkLoading", bpsOkDisabled: "bpsOkDisabled", bpsCancelDisabled: "bpsCancelDisabled", bpsCancelLoading: "bpsCancelLoading", bpsKeyboard: "bpsKeyboard", bpsNoAnimation: "bpsNoAnimation", bpsModalDisabled: "bpsModalDisabled", bpsMask: "bpsMask", bpsMaskClosable: "bpsMaskClosable", bpsContent: "bpsContent", bpsComponentParams: "bpsComponentParams", bpsFooter: "bpsFooter", bpsGetContainer: "bpsGetContainer", bpsZIndex: "bpsZIndex", bpsWidth: "bpsWidth", bpsWrapClassName: "bpsWrapClassName", bpsClassName: "bpsClassName", bpsStyle: "bpsStyle", bpsTitle: "bpsTitle", bpsCloseIcon: "bpsCloseIcon", bpsMaskStyle: "bpsMaskStyle", bpsBodyStyle: "bpsBodyStyle", bpsOkText: "bpsOkText", bpsCancelText: "bpsCancelText", bpsOkType: "bpsOkType", bpsIconType: "bpsIconType", bpsModalType: "bpsModalType", bpsOnOk: "bpsOnOk", bpsOnCancel: "bpsOnCancel" }, outputs: { bpsOnOk: "bpsOnOk", bpsOnCancel: "bpsOnCancel", bpsAfterOpen: "bpsAfterOpen", bpsAfterClose: "bpsAfterClose", bpsVisibleChange: "bpsVisibleChange" }, queries: [{ propertyName: "modalFooter", first: true, predicate: BpsModalFooterDirective, descendants: true }], viewQueries: [{ propertyName: "modalContainer", first: true, predicate: ["modalContainer"], descendants: true, static: true }, { propertyName: "bodyContainer", first: true, predicate: ["bodyContainer"], descendants: true, read: ViewContainerRef }, { propertyName: "autoFocusButtonOk", first: true, predicate: ["autoFocusButtonOk"], descendants: true, read: ElementRef }], exportAs: ["bpsModal"], usesInheritance: true, usesOnChanges: true, ngImport: i0, template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div [nzNoAnimation]=\"bpsNoAnimation\">\r\n  <div *ngIf=\"mask\"\r\n    class=\"ant-modal-mask\"\r\n    [ngClass]=\"maskAnimationClassMap\"\r\n    [class.ant-modal-mask-hidden]=\"hidden\"\r\n    [ngStyle]=\"bpsMaskStyle\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    (mouseup)=\"onDialogUp()\"\r\n    class=\"ant-modal-wrap {{ bpsWrapClassName }}\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div #modalContainer\r\n      class=\"ant-modal {{ bpsClassName }}\"\r\n      (mousedown)=\"onMaskDialogDown()\"\r\n      [ngClass]=\"modalAnimationClassMap\"\r\n      [ngStyle]=\"bpsStyle\"\r\n      [style.width]=\"bpsWidth | nzToCssUnit\"\r\n      [style.transform-origin]=\"transformOrigin\"\r\n      role=\"document\"\r\n    >\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"bpsClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span class=\"ant-modal-close-x\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n            <ng-container *nzStringTemplateOutlet=\"bpsCloseIcon\">\r\n              <img *ngIf=\"!bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_white.svg\" class=\"ant-modal-close-icon\" />\r\n              <img *ngIf=\"bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_grey.svg\" class=\"ant-modal-close-icon\" />\r\n            </ng-container>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"bpsTitle\" class=\"ant-modal-header\">\r\n    <div class=\"ant-modal-title\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><div [innerHTML]=\"bpsTitle\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"bpsFooter !== null\" class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(bpsFooter)\" [ngTemplateOutlet]=\"bpsFooter\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(bpsFooter)\"><div [innerHTML]=\"bpsFooter\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(bpsFooter)\">\r\n        <button *ngFor=\"let button of bpsFooter\" bps-button\r\n          (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n          [bpsLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n          [bpsType]=\"button.type\"\r\n          [bpsShape]=\"button.shape\"\r\n          [bpsSize]=\"button.size\"\r\n          [bpsGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"bpsCancelText!==null\" bpsType=\"variation-1\" bps-button (click)=\"onClickOkCancel('cancel')\" [bpsLoading]=\"bpsCancelLoading\" [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"bpsOkText!==null\" bps-button [bpsType]=\"bpsOkType\" (click)=\"onClickOkCancel('ok')\" [bpsLoading]=\"bpsOkLoading\" [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [nzType]=\"bpsIconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><span [innerHTML]=\"bpsTitle\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container #bodyContainer>\r\n            <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button *ngIf=\"bpsCancelText!==null\"\r\n          bps-button\r\n          bpsType=\"variation-1\"\r\n          (click)=\"onClickOkCancel('cancel')\"\r\n          [bpsLoading]=\"bpsCancelLoading\"\r\n          [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button #autoFocusButtonOk\r\n          *ngIf=\"bpsOkText!==null\"\r\n          bps-button\r\n          (click)=\"onClickOkCancel('ok')\"\r\n          [bpsType]=\"bpsOkType\"\r\n          [bpsLoading]=\"bpsOkLoading\"\r\n          [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n", styles: [".ant-modal-content{border-radius:8px!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important}.ant-modal-header{background-color:#00a2d1!important;border-bottom:none!important;padding:16px 0 16px 35px!important;border-radius:8px 8px 0 0!important}.ant-modal-title{font-size:18px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:.67!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important}.ant-modal-close-x{width:46px!important;height:45px!important;color:#fff!important;line-height:40px!important;padding-right:19px!important}.bps-modal-disabled{color:#666!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }, { kind: "directive", type: i1$1.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "component", type: BpsButtonComponent, selector: "[bps-button]", inputs: ["isSelected", "bpsBlock", "bpsGhost", "bpsSearch", "bpsComputed", "bpsLoading", "bpsEditionEnabled", "bpsType", "bpsValue", "bpsComputedTooltipType", "bpsComputedTooltipPlacement", "bpsComputedTooltipTitle", "bpsEditTooltipType", "bpsEditTooltipPlacement", "bpsEditTooltipTitle", "bpsShape", "bpsSize"], outputs: ["isSelectedChange", "bpsValueChange"], exportAs: ["bpsButton"] }, { kind: "pipe", type: NzToCssUnitPipe, name: "nzToCssUnit" }], changeDetection: i0.ChangeDetectionStrategy.Default }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsModalComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-modal', exportAs: 'bpsModal', changeDetection: ChangeDetectionStrategy.Default, template: "<ng-template #tplOriginContent><ng-content></ng-content></ng-template> <!-- Compatible: the <ng-content> can appear only once -->\r\n\r\n<div [nzNoAnimation]=\"bpsNoAnimation\">\r\n  <div *ngIf=\"mask\"\r\n    class=\"ant-modal-mask\"\r\n    [ngClass]=\"maskAnimationClassMap\"\r\n    [class.ant-modal-mask-hidden]=\"hidden\"\r\n    [ngStyle]=\"bpsMaskStyle\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n  ></div>\r\n  <div\r\n    (click)=\"onClickMask($event)\"\r\n    (mouseup)=\"onDialogUp()\"\r\n    class=\"ant-modal-wrap {{ bpsWrapClassName }}\"\r\n    [style.zIndex]=\"bpsZIndex\"\r\n    [style.visibility]=\"hidden ? 'hidden' : null\"\r\n    tabindex=\"-1\"\r\n    role=\"dialog\"\r\n  >\r\n    <div #modalContainer\r\n      class=\"ant-modal {{ bpsClassName }}\"\r\n      (mousedown)=\"onMaskDialogDown()\"\r\n      [ngClass]=\"modalAnimationClassMap\"\r\n      [ngStyle]=\"bpsStyle\"\r\n      [style.width]=\"bpsWidth | nzToCssUnit\"\r\n      [style.transform-origin]=\"transformOrigin\"\r\n      role=\"document\"\r\n    >\r\n      <div class=\"ant-modal-content\">\r\n        <button *ngIf=\"bpsClosable\" (click)=\"onClickCloseBtn()\" class=\"ant-modal-close\" aria-label=\"Close\">\r\n          <span class=\"ant-modal-close-x\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n            <ng-container *nzStringTemplateOutlet=\"bpsCloseIcon\">\r\n              <img *ngIf=\"!bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_white.svg\" class=\"ant-modal-close-icon\" />\r\n              <img *ngIf=\"bpsModalDisabled\" src=\"assets/bps-icons/sps_x_icon_closepanel_grey.svg\" class=\"ant-modal-close-icon\" />\r\n            </ng-container>\r\n          </span>\r\n        </button>\r\n        <ng-container *ngIf=\"!hidden\" [ngSwitch]=\"true\">\r\n          <ng-container *ngSwitchCase=\"isModalType('default')\" [ngTemplateOutlet]=\"tplContentDefault\"></ng-container>\r\n          <ng-container *ngSwitchCase=\"isModalType('confirm')\" [ngTemplateOutlet]=\"tplContentConfirm\"></ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- [Predefined] Default Modal Content -->\r\n<ng-template #tplContentDefault>\r\n  <div *ngIf=\"bpsTitle\" class=\"ant-modal-header\">\r\n    <div class=\"ant-modal-title\" [class.bps-modal-disabled]=\"bpsModalDisabled\">\r\n      <ng-container [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><div [innerHTML]=\"bpsTitle\"></div></ng-container>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <ng-container #bodyContainer>\r\n      <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n        <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n        <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n        <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div *ngIf=\"bpsFooter !== null\" class=\"ant-modal-footer\">\r\n    <ng-container [ngSwitch]=\"true\">\r\n      <ng-container *ngSwitchCase=\"isTemplateRef(bpsFooter)\" [ngTemplateOutlet]=\"bpsFooter\"></ng-container>\r\n      <ng-container *ngSwitchCase=\"isNonEmptyString(bpsFooter)\"><div [innerHTML]=\"bpsFooter\"></div></ng-container>\r\n      <ng-container *ngSwitchCase=\"isModalButtons(bpsFooter)\">\r\n        <button *ngFor=\"let button of bpsFooter\" bps-button\r\n          (click)=\"onButtonClick(button)\"\r\n          [hidden]=\"!getButtonCallableProp(button, 'show')\"\r\n          [bpsLoading]=\"getButtonCallableProp(button, 'loading')\"\r\n          [disabled]=\"getButtonCallableProp(button, 'disabled')\"\r\n          [bpsType]=\"button.type\"\r\n          [bpsShape]=\"button.shape\"\r\n          [bpsSize]=\"button.size\"\r\n          [bpsGhost]=\"button.ghost\"\r\n        >{{ button.label }}</button>\r\n      </ng-container>\r\n      <ng-container *ngSwitchDefault>\r\n        <button *ngIf=\"bpsCancelText!==null\" bpsType=\"variation-1\" bps-button (click)=\"onClickOkCancel('cancel')\" [bpsLoading]=\"bpsCancelLoading\" [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button *ngIf=\"bpsOkText!==null\" bps-button [bpsType]=\"bpsOkType\" (click)=\"onClickOkCancel('ok')\" [bpsLoading]=\"bpsOkLoading\" [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Default Modal Content -->\r\n\r\n<!-- [Predefined] Confirm Modal Content -->\r\n<ng-template #tplContentConfirm>\r\n  <div class=\"ant-modal-body\" [ngStyle]=\"bpsBodyStyle\">\r\n    <div class=\"ant-modal-confirm-body-wrapper\">\r\n      <div class=\"ant-modal-confirm-body\">\r\n        <i nz-icon [nzType]=\"bpsIconType\"></i>\r\n        <span class=\"ant-modal-confirm-title\">\r\n          <ng-container [ngSwitch]=\"true\">\r\n            <ng-container *ngSwitchCase=\"isTemplateRef(bpsTitle)\" [ngTemplateOutlet]=\"bpsTitle\"></ng-container>\r\n            <ng-container *ngSwitchCase=\"isNonEmptyString(bpsTitle)\"><span [innerHTML]=\"bpsTitle\"></span></ng-container>\r\n          </ng-container>\r\n        </span>\r\n        <div class=\"ant-modal-confirm-content\">\r\n          <ng-container #bodyContainer>\r\n            <ng-container *ngIf=\"!isComponent(bpsContent)\" [ngSwitch]=\"true\">\r\n              <ng-container *ngSwitchCase=\"isTemplateRef(bpsContent)\" [ngTemplateOutlet]=\"bpsContent\"></ng-container>\r\n              <ng-container *ngSwitchCase=\"isNonEmptyString(bpsContent)\"><div [innerHTML]=\"bpsContent\"></div></ng-container>\r\n              <ng-container *ngSwitchDefault [ngTemplateOutlet]=\"tplOriginContent\"></ng-container>\r\n            </ng-container>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n      <div class=\"ant-modal-confirm-btns\">\r\n        <button *ngIf=\"bpsCancelText!==null\"\r\n          bps-button\r\n          bpsType=\"variation-1\"\r\n          (click)=\"onClickOkCancel('cancel')\"\r\n          [bpsLoading]=\"bpsCancelLoading\"\r\n          [disabled]=\"bpsCancelDisabled\">\r\n          {{ cancelText }}\r\n        </button>\r\n        <button #autoFocusButtonOk\r\n          *ngIf=\"bpsOkText!==null\"\r\n          bps-button\r\n          (click)=\"onClickOkCancel('ok')\"\r\n          [bpsType]=\"bpsOkType\"\r\n          [bpsLoading]=\"bpsOkLoading\"\r\n          [disabled]=\"bpsOkDisabled\">\r\n          {{ okText }}\r\n        </button>\r\n      </div>\r\n    </div> <!-- /.ant-modal-confirm-body-wrapper -->\r\n  </div>\r\n</ng-template>\r\n<!-- /[Predefined] Confirm Modal Content -->\r\n", styles: [".ant-modal-content{border-radius:8px!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important}.ant-modal-header{background-color:#00a2d1!important;border-bottom:none!important;padding:16px 0 16px 35px!important;border-radius:8px 8px 0 0!important}.ant-modal-title{font-size:18px!important;font-weight:400!important;font-stretch:normal!important;font-style:normal!important;line-height:.67!important;letter-spacing:normal!important;text-align:left!important;color:#fff!important}.ant-modal-close-x{width:46px!important;height:45px!important;color:#fff!important;line-height:40px!important;padding-right:19px!important}.bps-modal-disabled{color:#666!important}\n"] }]
        }], ctorParameters: function () { return [{ type: NzConfigService }, { type: i2$4.Overlay }, { type: i2$4.OverlayKeyboardDispatcher }, { type: i1$4.NzI18nService }, { type: i0.ComponentFactoryResolver }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: BpsModalControlService }, { type: i1.FocusTrapFactory }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NZ_MODAL_CONFIG]
                }] }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }]; }, propDecorators: { bpsVisible: [{
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

class BpsTextEditorComponent {
    constructor() {
        this.showEditor = false;
        this.lazyLoaded = false;
        this.oninit = new EventEmitter();
        this.onchange = new EventEmitter();
        this.onblur = new EventEmitter();
        this.onkeyup = new EventEmitter();
        this.disabled = false;
        this.height = '250px';
        this.editorID = 'myEditor';
        this.statusbar = false;
        this.resize = false;
        // tslint:disable-next-line: max-line-length
        this.toolbarmobile = ['bold', 'italic', 'underline', 'strikethrough', 'alignleft', 'aligncenter', 'alignright', 'alignjustify', 'bullist', 'numlist', 'forecolor'];
        this.toolbar = 'bold italic underline forecolor | strikethrough backcolor | alignleft aligncenter alignright alignjustify | bullist numlist image';
    }
    ngOnInit() {
        if (!this.lazyLoaded) {
            this.initTinyMCE();
        }
    }
    initTinyMCE() {
        if (this.tinyMceSettings === undefined) {
            this.tinyMceSettings = {
                mobile: {
                    theme: 'mobile',
                    plugins: ['image table textcolor lists advlist'],
                    toolbar: this.toolbarmobile
                },
                menubar: false,
                content_css: '/assets/tiny.css',
                image_title: true,
                toolbar_location: 'bottom',
                resize: this.resize,
                automatic_uploads: true,
                height: this.height,
                statusbar: this.statusbar,
                file_picker_types: 'image',
                images_upload_url: '#',
                setup: (editor) => {
                    editor.on('init', (obj) => {
                        if (this.disabled) {
                            this.disableEditor();
                        }
                        this.oninit.emit(obj);
                    });
                    editor.on('blur', (obj) => {
                        this.onblur.emit(obj);
                    });
                    editor.on('keyup', (obj) => {
                        this.onkeyup.emit(obj);
                    });
                    editor.on('Change', (obj) => {
                        this.onchange.emit(obj);
                    });
                },
                color_map: [
                    "e94c0a", "Orange",
                    "00a2d1", "Blue",
                    "7bc053", "Green",
                    "d80f0f", "Red",
                    "e9d90a", "Yellow",
                    "ffffff", "White"
                ],
                plugins: ['image table textcolor lists advlist'],
                toolbar: this.toolbar
            };
        }
        setTimeout(() => {
            this.showEditor = true;
        }, 100);
    }
    disableEditor() {
        tinymce.get(this.editorID).mode.set('readonly');
    }
    enableEditor() {
        tinymce.get(this.editorID).mode.set('design');
    }
    ngOnChanges(changes) {
        if (changes.disabled !== null && changes.disabled !== undefined && tinymce.get(this.editorID)) {
            if (changes.disabled) {
                this.disableEditor();
            }
            else {
                this.enableEditor();
            }
        }
        if (changes.lazyLoaded !== null && changes.lazyLoaded !== undefined) {
            if (!this.lazyLoaded) {
                this.initTinyMCE();
            }
            else if (tinymce.get(this.editorID)) {
                this.showEditor = false;
                tinymce.get(this.editorID).remove();
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTextEditorComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsTextEditorComponent, selector: "bps-text-editor", inputs: { lazyLoaded: "lazyLoaded", disabled: "disabled", height: "height", editorID: "editorID", statusbar: "statusbar", resize: "resize", toolbarmobile: "toolbarmobile", toolbar: "toolbar", tinyMceSettings: "tinyMceSettings" }, outputs: { oninit: "oninit", onchange: "onchange", onblur: "onblur", onkeyup: "onkeyup" }, exportAs: ["bpsTextEditor"], usesOnChanges: true, ngImport: i0, template: "<editor [class.bps-editor-disabled]=\"disabled\"\r\n        [id]=\"editorID\"\r\n        *ngIf=\"showEditor\"\r\n        [init]=\"tinyMceSettings\"\r\n        class=\"bps-editor\"\r\n        [disabled]=\"disabled\"></editor>\r\n", styles: [".tox-tinymce{border:none!important;border-radius:4px!important}.tox .tox-edit-area__iframe{background-color:#313131!important}.mce-content-body{color:#fff}.tox .tox-toolbar__primary{background-color:#313131!important}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid #ffffff!important}.tox .tox-tbtn svg{fill:#fff!important;transform:scale(.74)!important}.tox .tox-split-button__chevron svg{fill:#fff!important}.tox .tox-tbtn:hover svg{fill:#00a2d1!important}.tox .tox-split-button:hover{box-shadow:none!important}.tox-tinymce:not(.tox-tinymce-inline) .tox-editor-header:not(:first-child) .tox-toolbar-overlord:first-child .tox-toolbar__primary{border-top:none!important;background:#313131!important;padding-bottom:10px}.tox .tox-tbtn{height:34px!important;width:25px!important;margin:0!important;top:-3px;position:relative}.tox .tox-split-button{height:34px!important;position:relative!important;top:-3px!important;padding:3px 0!important}.tox .tox-tbtn:hover,.tox .tox-tbtn--enabled,.tox .tox-split-button:hover,.tox .tox-split-button--enabled,.tox .tox-tbtn--enabled:hover{background:#262626!important}.tox .tox-split-button:focus{background:#262626!important}.tox .tox-split-button__chevron{width:16px!important}.tox .tox-tbtn:active{background:#262626!important}.tox .tox-tbtn:focus{background:#313131!important}.tox .tox-toolbar__group{margin:0!important;height:30px!important}.tox-sidebar-wrap{color:#fff}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#363636!important;border:none!important;border-radius:4px!important;padding-top:7px!important;margin-bottom:6px!important}.tox .tox-toolbar__overflow{background:unset!important;height:39px!important}.tox .tox-menu{border:none!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;margin-bottom:10px!important}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled),.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg{background-color:#262626!important;fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item:hover,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-checkmark svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-button{background-color:#00a2d1!important;border-color:#00a2d1!important}.tox .tox-button:hover:not(:disabled){background-color:#1c6ca1!important;border-color:#1c6ca1!important}.tox .tox-button--naked:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-button--naked:not(:disabled){background-color:transparent!important;border-color:transparent!important}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{fill:#fff!important}.tox .tox-dialog__header{background-color:#313131!important;border-bottom:none!important;color:#fff!important}.tox .tox-dialog__body{background-color:#313131!important}.tox .tox-dialog__body-nav-item{color:#fff!important}.tox .tox-label,.tox .tox-toolbar-label{color:#fff!important;margin-bottom:4px!important}.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{background-color:#262626!important;border-color:#262626!important;border-radius:6px!important;color:#fff!important;font-size:12px!important;min-height:24px!important;padding:2px 4.75px!important}.tox .tox-dialog__title{font-size:16px!important}.tox .tox-dropzone{background:#363636!important;border:2px dashed #262626!important}.tox .tox-dropzone p{color:#999!important}.tox .tox-button--secondary{background-color:#313131!important;border-color:#313131!important;border-radius:4px!important;color:#fff!important}.tox .tox-button--secondary:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important;color:#fff!important}.tox .tox-button--naked:active:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-dialog__footer{background-color:#313131!important;border-top:1px solid #363636!important}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #207ab7!important;color:#207ab7!important}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background-color:#313131!important}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:#666!important}.bps-editor-disabled .tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-color:#666!important}[title=\"Align right\"],[title=\"Align left\"],[title=\"Align center\"],[title=Justify]{top:-1px!important}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i2$5.EditorComponent, selector: "editor", inputs: ["cloudChannel", "apiKey", "init", "id", "initialValue", "outputFormat", "inline", "tagName", "plugins", "toolbar", "modelEvents", "allowedEvents", "ignoreEvents", "disabled"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsTextEditorComponent.prototype, "lazyLoaded", void 0);
__decorate([
    InputBoolean()
], BpsTextEditorComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTextEditorComponent, decorators: [{
            type: Component,
            args: [{ exportAs: 'bpsTextEditor', selector: 'bps-text-editor', encapsulation: ViewEncapsulation.None, template: "<editor [class.bps-editor-disabled]=\"disabled\"\r\n        [id]=\"editorID\"\r\n        *ngIf=\"showEditor\"\r\n        [init]=\"tinyMceSettings\"\r\n        class=\"bps-editor\"\r\n        [disabled]=\"disabled\"></editor>\r\n", styles: [".tox-tinymce{border:none!important;border-radius:4px!important}.tox .tox-edit-area__iframe{background-color:#313131!important}.mce-content-body{color:#fff}.tox .tox-toolbar__primary{background-color:#313131!important}.tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-right:1px solid #ffffff!important}.tox .tox-tbtn svg{fill:#fff!important;transform:scale(.74)!important}.tox .tox-split-button__chevron svg{fill:#fff!important}.tox .tox-tbtn:hover svg{fill:#00a2d1!important}.tox .tox-split-button:hover{box-shadow:none!important}.tox-tinymce:not(.tox-tinymce-inline) .tox-editor-header:not(:first-child) .tox-toolbar-overlord:first-child .tox-toolbar__primary{border-top:none!important;background:#313131!important;padding-bottom:10px}.tox .tox-tbtn{height:34px!important;width:25px!important;margin:0!important;top:-3px;position:relative}.tox .tox-split-button{height:34px!important;position:relative!important;top:-3px!important;padding:3px 0!important}.tox .tox-tbtn:hover,.tox .tox-tbtn--enabled,.tox .tox-split-button:hover,.tox .tox-split-button--enabled,.tox .tox-tbtn--enabled:hover{background:#262626!important}.tox .tox-split-button:focus{background:#262626!important}.tox .tox-split-button__chevron{width:16px!important}.tox .tox-tbtn:active{background:#262626!important}.tox .tox-tbtn:focus{background:#313131!important}.tox .tox-toolbar__group{margin:0!important;height:30px!important}.tox-sidebar-wrap{color:#fff}.tox.tox-tinymce-aux .tox-toolbar__overflow{background-color:#363636!important;border:none!important;border-radius:4px!important;padding-top:7px!important;margin-bottom:6px!important}.tox .tox-toolbar__overflow{background:unset!important;height:39px!important}.tox .tox-menu{border:none!important;box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;margin-bottom:10px!important}.tox .tox-collection__item-checkmark svg,.tox .tox-collection__item-icon svg{fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled),.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item--active:not(.tox-collection__item--enabled) .tox-collection__item-checkmark svg{background-color:#262626!important;fill:#fff!important}.tox .tox-collection--toolbar .tox-collection__item:hover,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-icon svg,.tox .tox-collection--toolbar .tox-collection__item:hover .tox-collection__item-checkmark svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled{background-color:#313131!important}.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-checkmark svg,.tox .tox-collection--toolbar .tox-collection__item--enabled .tox-collection__item-icon svg{fill:#00a2d1!important;background-color:#313131!important}.tox .tox-button{background-color:#00a2d1!important;border-color:#00a2d1!important}.tox .tox-button:hover:not(:disabled){background-color:#1c6ca1!important;border-color:#1c6ca1!important}.tox .tox-button--naked:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-button--naked:not(:disabled){background-color:transparent!important;border-color:transparent!important}.tox .tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--icon .tox-icon svg,.tox .tox-button.tox-button--secondary.tox-button--icon .tox-icon svg{fill:#fff!important}.tox .tox-dialog__header{background-color:#313131!important;border-bottom:none!important;color:#fff!important}.tox .tox-dialog__body{background-color:#313131!important}.tox .tox-dialog__body-nav-item{color:#fff!important}.tox .tox-label,.tox .tox-toolbar-label{color:#fff!important;margin-bottom:4px!important}.tox .tox-textarea,.tox .tox-textfield,.tox .tox-toolbar-textfield{background-color:#262626!important;border-color:#262626!important;border-radius:6px!important;color:#fff!important;font-size:12px!important;min-height:24px!important;padding:2px 4.75px!important}.tox .tox-dialog__title{font-size:16px!important}.tox .tox-dropzone{background:#363636!important;border:2px dashed #262626!important}.tox .tox-dropzone p{color:#999!important}.tox .tox-button--secondary{background-color:#313131!important;border-color:#313131!important;border-radius:4px!important;color:#fff!important}.tox .tox-button--secondary:hover:not(:disabled){background-color:#262626!important;border-color:#262626!important;color:#fff!important}.tox .tox-button--naked:active:not(:disabled){background-color:#262626!important;border-color:#262626!important}.tox .tox-dialog__footer{background-color:#313131!important;border-top:1px solid #363636!important}.tox .tox-dialog__body-nav-item--active{border-bottom:2px solid #207ab7!important;color:#207ab7!important}.tox .tox-tbtn--disabled,.tox .tox-tbtn--disabled:hover,.tox .tox-tbtn:disabled,.tox .tox-tbtn:disabled:hover{background-color:#313131!important}.tox .tox-tbtn--disabled svg,.tox .tox-tbtn--disabled:hover svg,.tox .tox-tbtn:disabled svg,.tox .tox-tbtn:disabled:hover svg{fill:#666!important}.bps-editor-disabled .tox:not([dir=rtl]) .tox-toolbar__group:not(:last-of-type){border-color:#666!important}[title=\"Align right\"],[title=\"Align left\"],[title=\"Align center\"],[title=Justify]{top:-1px!important}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { lazyLoaded: [{
                type: Input
            }], oninit: [{
                type: Output
            }], onchange: [{
                type: Output
            }], onblur: [{
                type: Output
            }], onkeyup: [{
                type: Output
            }], disabled: [{
                type: Input
            }], height: [{
                type: Input
            }], editorID: [{
                type: Input
            }], statusbar: [{
                type: Input
            }], resize: [{
                type: Input
            }], toolbarmobile: [{
                type: Input
            }], toolbar: [{
                type: Input
            }], tinyMceSettings: [{
                type: Input
            }] } });

class BpsGridComponent {
    set columns(value) {
        if (value >= 1) {
            this._columns = new Array(value);
        }
    }
    set rows(value) {
        if (value >= 1) {
            this._rows = new Array(value);
        }
    }
    set selection(value) {
        this._selection = value;
        this._latestSelection = value;
    }
    get selection() {
        return this._selection;
    }
    constructor() {
        this._columns = [];
        this._rows = [];
        this._selection = [1, 2];
        this._latestSelection = [1, 2];
        this.disabled = false;
        this.selectionChange = new EventEmitter();
    }
    onSelectionChange(row, column) {
        this.selection = [row, column];
        this._latestSelection = [row, column];
        this.selectionChange.emit(this.selection);
    }
    isSelected(row, column) {
        return (row <= this.selection[0] && !column) || (!row && column <= this.selection[1]) || (row <= this.selection[0] && column === this.selection[1]) || (row === this.selection[0] && column <= this.selection[1]);
    }
    previewSelection(row, column) {
        const newSel = [row, column];
        this._selection = [...newSel];
    }
    endPreviewSelection() {
        this._selection = this._latestSelection;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsGridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsGridComponent, selector: "bps-grid", inputs: { disabled: "disabled", columns: "columns", rows: "rows", selection: "selection" }, outputs: { selectionChange: "selectionChange" }, ngImport: i0, template: "<div class=\"bps-grid-selected-value-wrapper\">\r\n  <span>{{selection[0] + 1}} x {{selection[1] + 1}}</span>\r\n</div>\r\n\r\n<div class=\"bps-grid-wrapper\">\r\n  <ng-container *ngFor=\"let row of _rows; index as i\">\r\n    <div class=\"bps-grid-row\" [class.bps-grid-row-first]=\"i === 0\" [class.bps-grid-row-last]=\"i === _rows.length - 1\">\r\n      <ng-container *ngFor=\"let column of _columns; index as j\">\r\n        <div class=\"bps-grid-square\"\r\n             (mouseenter)=\"previewSelection(i, j)\"\r\n             (mouseleave)=\"endPreviewSelection()\"\r\n             [class.bps-grid-selected-square-top]=\"isSelected(i, j) && !i\"\r\n             [class.bps-grid-selected-square-bottom]=\"isSelected(i, j) && i === selection[0]\"\r\n             [class.bps-grid-selected-square-left]=\"isSelected(i, j) && !j\"\r\n             [class.bps-grid-selected-square-right]=\"isSelected(i, j) && j === selection[1]\"\r\n             [class.bps-grid-first-square-in-row]=\"!j\"\r\n             [class.bps-grid-left-top-corner]=\"i === j && !i\"\r\n             [class.bps-grid-left-bottom-corner]=\"i === _rows.length - 1 && !j\"\r\n             [class.bps-grid-right-bottom-corner]=\"i === _rows.length - 1 && j === _columns.length - 1\"\r\n             [class.bps-grid-right-top-corner]=\"!i && j === _columns.length - 1\"\r\n             (click)=\"onSelectionChange(i, j)\">\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n", styles: [".bps-grid-square{width:25px;height:25px;transition:all .3s}.bps-grid-row .bps-grid-square{display:inline-flex;border:1px solid #707070;border-top:none;border-left:none}.bps-grid-row{height:25px}.bps-grid-row-first .bps-grid-square{border-top:1px solid #707070}.bps-grid-left-top-corner{border-radius:8px 0 0}.bps-grid-left-bottom-corner{border-radius:0 0 0 8px}.bps-grid-right-bottom-corner{border-radius:0 0 8px}.bps-grid-right-top-corner{border-radius:0 8px 0 0}.bps-grid-first-square-in-row{border-left:1px solid #707070!important}.bps-grid-selected-square-top{border-top:2px solid #00a2d1!important}.bps-grid-selected-square-bottom{border-bottom:2px solid #00a2d1!important}.bps-grid-selected-square-left{border-left:2px solid #00a2d1!important}.bps-grid-selected-square-right{border-right:2px solid #00a2d1!important}.bps-grid-selected-value-wrapper{display:inline-block;font-family:UniversForSchueco-530Med;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left;color:#fff;width:50px;padding-top:2px;vertical-align:top}.bps-grid-wrapper{display:inline-block}\n"], dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsGridComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsGridComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-grid', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"bps-grid-selected-value-wrapper\">\r\n  <span>{{selection[0] + 1}} x {{selection[1] + 1}}</span>\r\n</div>\r\n\r\n<div class=\"bps-grid-wrapper\">\r\n  <ng-container *ngFor=\"let row of _rows; index as i\">\r\n    <div class=\"bps-grid-row\" [class.bps-grid-row-first]=\"i === 0\" [class.bps-grid-row-last]=\"i === _rows.length - 1\">\r\n      <ng-container *ngFor=\"let column of _columns; index as j\">\r\n        <div class=\"bps-grid-square\"\r\n             (mouseenter)=\"previewSelection(i, j)\"\r\n             (mouseleave)=\"endPreviewSelection()\"\r\n             [class.bps-grid-selected-square-top]=\"isSelected(i, j) && !i\"\r\n             [class.bps-grid-selected-square-bottom]=\"isSelected(i, j) && i === selection[0]\"\r\n             [class.bps-grid-selected-square-left]=\"isSelected(i, j) && !j\"\r\n             [class.bps-grid-selected-square-right]=\"isSelected(i, j) && j === selection[1]\"\r\n             [class.bps-grid-first-square-in-row]=\"!j\"\r\n             [class.bps-grid-left-top-corner]=\"i === j && !i\"\r\n             [class.bps-grid-left-bottom-corner]=\"i === _rows.length - 1 && !j\"\r\n             [class.bps-grid-right-bottom-corner]=\"i === _rows.length - 1 && j === _columns.length - 1\"\r\n             [class.bps-grid-right-top-corner]=\"!i && j === _columns.length - 1\"\r\n             (click)=\"onSelectionChange(i, j)\">\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n</div>\r\n", styles: [".bps-grid-square{width:25px;height:25px;transition:all .3s}.bps-grid-row .bps-grid-square{display:inline-flex;border:1px solid #707070;border-top:none;border-left:none}.bps-grid-row{height:25px}.bps-grid-row-first .bps-grid-square{border-top:1px solid #707070}.bps-grid-left-top-corner{border-radius:8px 0 0}.bps-grid-left-bottom-corner{border-radius:0 0 0 8px}.bps-grid-right-bottom-corner{border-radius:0 0 8px}.bps-grid-right-top-corner{border-radius:0 8px 0 0}.bps-grid-first-square-in-row{border-left:1px solid #707070!important}.bps-grid-selected-square-top{border-top:2px solid #00a2d1!important}.bps-grid-selected-square-bottom{border-bottom:2px solid #00a2d1!important}.bps-grid-selected-square-left{border-left:2px solid #00a2d1!important}.bps-grid-selected-square-right{border-right:2px solid #00a2d1!important}.bps-grid-selected-value-wrapper{display:inline-block;font-family:UniversForSchueco-530Med;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left;color:#fff;width:50px;padding-top:2px;vertical-align:top}.bps-grid-wrapper{display:inline-block}\n"] }]
        }], ctorParameters: function () { return []; }, propDecorators: { disabled: [{
                type: Input
            }], selectionChange: [{
                type: Output
            }], columns: [{
                type: Input
            }], rows: [{
                type: Input
            }], selection: [{
                type: Input
            }] } });

class NzClassListAddDirective {
    set nzClassListAdd(list) {
        this.classList.forEach(name => {
            this.renderer.removeClass(this.elementRef.nativeElement, name);
        });
        list.forEach(name => {
            this.renderer.addClass(this.elementRef.nativeElement, name);
        });
        this.classList = list;
    }
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzClassListAddDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzClassListAddDirective, selector: "[nzClassListAdd]", inputs: { nzClassListAdd: "nzClassListAdd" }, exportAs: ["nzClassListAdd"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzClassListAddDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nzClassListAdd]',
                    exportAs: 'nzClassListAdd'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, propDecorators: { nzClassListAdd: [{
                type: Input
            }] } });

class NzAddOnModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzAddOnModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: NzAddOnModule, declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective], imports: [CommonModule], exports: [NzStringTemplateOutletDirective, NzClassListAddDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzAddOnModule, imports: [CommonModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzAddOnModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    exports: [NzStringTemplateOutletDirective, NzClassListAddDirective],
                    declarations: [NzStringTemplateOutletDirective, NzClassListAddDirective]
                }]
        }] });

class BpsAutosizeDirective {
    set bpsAutosize(value) {
        const isAutoSizeType = (data) => typeof data !== 'string' && typeof data !== 'boolean' && (!!data.maxRows || !!data.minRows);
        if (typeof value === 'string' || value === true) {
            this.autosize = true;
        }
        else if (isAutoSizeType(value)) {
            this.autosize = true;
            this.minRows = value.minRows;
            this.maxRows = value.maxRows;
            this.maxHeight = this.setMaxHeight();
            this.minHeight = this.setMinHeight();
        }
    }
    resizeToFitContent(force = false) {
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        const textarea = this.el;
        const value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        const placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('nz-textarea-autosize-measuring');
        textarea.placeholder = '';
        let height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight +
            this.inputGap;
        if (this.maxHeight !== null && height > this.maxHeight) {
            height = this.maxHeight;
        }
        if (this.minHeight !== null && height < this.minHeight) {
            height = this.minHeight;
        }
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = `${height}px`;
        textarea.classList.remove('nz-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular(() => requestAnimationFrame(() => {
                const { selectionStart, selectionEnd } = textarea;
                // IE will throw an "Unspecified error" if we try to set the selection range after the
                // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                // between the time we requested the animation frame and when it was executed.
                // Also note that we have to assert that the textarea is focused before we set the
                // selection range. Setting the selection range on a non-focused textarea will cause
                // it to receive focus on IE and Edge.
                if (!this.destroy$.isStopped && document.activeElement === textarea) {
                    textarea.setSelectionRange(selectionStart, selectionEnd);
                }
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    }
    cacheTextareaLineHeight() {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        const textareaClone = this.el.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        this.el.parentNode.appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap;
        this.el.parentNode.removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.maxHeight = this.setMaxHeight();
        this.minHeight = this.setMinHeight();
    }
    setMinHeight() {
        const minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap : null;
        if (minHeight !== null) {
            this.el.style.minHeight = `${minHeight}px`;
        }
        return minHeight;
    }
    setMaxHeight() {
        const maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap : null;
        if (maxHeight !== null) {
            this.el.style.maxHeight = `${maxHeight}px`;
        }
        return maxHeight;
    }
    noopInputHandler() {
        // no-op handler that ensures we're running change detection on input events.
    }
    constructor(elementRef, ngZone, platform, resizeService) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.resizeService = resizeService;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.maxHeight = null;
        this.minHeight = null;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    ngAfterViewInit() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.resizeService
                .subscribe()
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => this.resizeToFitContent(true));
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngDoCheck() {
        if (this.autosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsAutosizeDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i3$3.Platform }, { token: i2$6.NzResizeService }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsAutosizeDirective, selector: "textarea[bpsAutosize]", inputs: { bpsAutosize: "bpsAutosize" }, host: { attributes: { "rows": "1" }, listeners: { "input": "noopInputHandler()" } }, exportAs: ["bpsAutosize"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsAutosizeDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'textarea[bpsAutosize]',
                    exportAs: 'bpsAutosize',
                    host: {
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        rows: '1',
                        '(input)': 'noopInputHandler()'
                    }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i3$3.Platform }, { type: i2$6.NzResizeService }]; }, propDecorators: { bpsAutosize: [{
                type: Input
            }] } });

class BpsTextareaCountComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.bpsMaxCharacterCount = 0;
        this.bpsComputeCharacterCount = v => v.length;
        this.bpsFormatter = (c, m) => `${c}${m > 0 ? `/${m}` : ``}`;
        this.configChange$ = new Subject();
        this.destroy$ = new Subject();
    }
    ngAfterContentInit() {
        if (!this.nzInputDirective && isDevMode()) {
            throw new Error('[nz-textarea-count]: Could not find matching textarea[nz-input] child.');
        }
        if (this.nzInputDirective.ngControl) {
            const valueChanges = this.nzInputDirective.ngControl.valueChanges || EMPTY;
            merge(valueChanges, this.configChange$)
                .pipe(takeUntil(this.destroy$), map(() => this.nzInputDirective.ngControl.value), startWith(this.nzInputDirective.ngControl.value))
                .subscribe(value => {
                this.setDataCount(value);
            });
        }
    }
    setDataCount(value) {
        const inputValue = isNotNil$1(value) ? String(value) : '';
        const currentCount = this.bpsComputeCharacterCount(inputValue);
        const dataCount = this.bpsFormatter(currentCount, this.bpsMaxCharacterCount);
        this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
    }
    ngOnDestroy() {
        this.configChange$.complete();
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTextareaCountComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsTextareaCountComponent, selector: "bps-textarea-count", inputs: { bpsMaxCharacterCount: "bpsMaxCharacterCount", bpsComputeCharacterCount: "bpsComputeCharacterCount", bpsFormatter: "bpsFormatter" }, host: { classAttribute: "ant-input-textarea-show-count" }, queries: [{ propertyName: "nzInputDirective", first: true, predicate: BpsInputDirective, descendants: true, static: true }], ngImport: i0, template: ` <ng-content select="textarea[bps-input]"></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTextareaCountComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-textarea-count',
                    template: ` <ng-content select="textarea[bps-input]"></ng-content> `,
                    host: {
                        class: 'ant-input-textarea-show-count'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { nzInputDirective: [{
                type: ContentChild,
                args: [BpsInputDirective, { static: true }]
            }], bpsMaxCharacterCount: [{
                type: Input
            }], bpsComputeCharacterCount: [{
                type: Input
            }], bpsFormatter: [{
                type: Input
            }] } });

class BpsDropdownButtonDirective {
    constructor(renderer, nzButtonGroupComponent, elementRef) {
        this.renderer = renderer;
        this.nzButtonGroupComponent = nzButtonGroupComponent;
        this.elementRef = elementRef;
    }
    ngAfterViewInit() {
        const parentElement = this.renderer.parentNode(this.elementRef.nativeElement);
        if (this.nzButtonGroupComponent && parentElement) {
            this.renderer.addClass(parentElement, 'ant-dropdown-button');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropdownButtonDirective, deps: [{ token: i0.Renderer2 }, { token: BpsButtonGroupComponent, host: true, optional: true }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsDropdownButtonDirective, selector: "[bps-button][bps-dropdown]", ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropdownButtonDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bps-button][bps-dropdown]'
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: BpsButtonGroupComponent, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i0.ElementRef }]; } });

class BpsOptionGroupComponent {
    constructor() {
        this.bpsLabel = null;
        this.changes = new Subject();
    }
    ngOnChanges() {
        this.changes.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsOptionGroupComponent, selector: "bps-option-group", inputs: { bpsLabel: "bpsLabel" }, exportAs: ["bpsOptionGroup"], usesOnChanges: true, ngImport: i0, template: ` <ng-content></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-option-group',
                    exportAs: 'bpsOptionGroup',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: ` <ng-content></ng-content> `
                }]
        }], propDecorators: { bpsLabel: [{
                type: Input
            }] } });

class BpsOptionComponent {
    constructor(nzOptionGroupComponent, destroy$) {
        this.nzOptionGroupComponent = nzOptionGroupComponent;
        this.destroy$ = destroy$;
        this.changes = new Subject();
        this.groupLabel = null;
        this.bpsLabel = null;
        this.bpsValue = null;
        this.bpsDisabled = false;
        this.bpsHide = false;
        this.bpsCustomContent = false;
    }
    ngOnInit() {
        if (this.nzOptionGroupComponent) {
            this.nzOptionGroupComponent.changes.pipe(startWith(true), takeUntil(this.destroy$)).subscribe(() => {
                this.groupLabel = this.nzOptionGroupComponent.bpsLabel;
            });
        }
    }
    ngOnChanges() {
        this.changes.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionComponent, deps: [{ token: BpsOptionGroupComponent, optional: true }, { token: i2$6.NzDestroyService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsOptionComponent, selector: "bps-option", inputs: { bpsTitle: "bpsTitle", bpsLabel: "bpsLabel", bpsValue: "bpsValue", bpsKey: "bpsKey", bpsDisabled: "bpsDisabled", bpsHide: "bpsHide", bpsCustomContent: "bpsCustomContent" }, providers: [NzDestroyService], viewQueries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true, static: true }], exportAs: ["bpsOption"], usesOnChanges: true, ngImport: i0, template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsOptionComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsOptionComponent.prototype, "bpsHide", void 0);
__decorate([
    InputBoolean()
], BpsOptionComponent.prototype, "bpsCustomContent", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-option',
                    exportAs: 'bpsOption',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzDestroyService],
                    template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `
                }]
        }], ctorParameters: function () { return [{ type: BpsOptionGroupComponent, decorators: [{
                    type: Optional
                }] }, { type: i2$6.NzDestroyService }]; }, propDecorators: { template: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }], bpsTitle: [{
                type: Input
            }], bpsLabel: [{
                type: Input
            }], bpsValue: [{
                type: Input
            }], bpsKey: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsHide: [{
                type: Input
            }], bpsCustomContent: [{
                type: Input
            }] } });

class BpsOptionItemComponent {
    constructor(elementRef, ngZone, destroy$) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.destroy$ = destroy$;
        this.selected = false;
        this.activated = false;
        this.grouped = false;
        this.customContent = false;
        this.template = null;
        this.disabled = false;
        this.showState = false;
        this.label = null;
        this.value = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.icon = null;
        this.itemClick = new EventEmitter();
        this.itemHover = new EventEmitter();
    }
    ngOnChanges(changes) {
        const { value, activatedValue, listOfSelectedValue } = changes;
        if (value || listOfSelectedValue) {
            this.selected = this.listOfSelectedValue.some(v => this.compareWith(v, this.value));
        }
        if (value || activatedValue) {
            this.activated = this.compareWith(this.activatedValue, this.value);
        }
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                if (!this.disabled) {
                    this.ngZone.run(() => this.itemClick.emit(this.value));
                }
            });
            fromEvent(this.elementRef.nativeElement, 'mouseenter')
                .pipe(takeUntil(this.destroy$))
                .subscribe(() => {
                if (!this.disabled) {
                    this.ngZone.run(() => this.itemHover.emit(this.value));
                }
            });
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionItemComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i2$6.NzDestroyService }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsOptionItemComponent, selector: "bps-option-item", inputs: { grouped: "grouped", customContent: "customContent", template: "template", disabled: "disabled", showState: "showState", title: "title", label: "label", value: "value", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", icon: "icon", compareWith: "compareWith" }, outputs: { itemClick: "itemClick", itemHover: "itemHover" }, host: { properties: { "attr.title": "title", "class.ant-select-item-option-grouped": "grouped", "class.ant-select-item-option-selected": "selected && !disabled", "class.ant-select-item-option-disabled": "disabled", "class.ant-select-item-option-active": "activated && !disabled" }, classAttribute: "ant-select-item ant-select-item-option" }, providers: [NzDestroyService], usesOnChanges: true, ngImport: i0, template: `
    <div class="ant-select-item-option-content">
      <ng-template [ngIf]="customContent" [ngIfElse]="noCustomContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-template>
      <ng-template #noCustomContent>{{ label }}</ng-template>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <span nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></span>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-option-item',
                    template: `
    <div class="ant-select-item-option-content">
      <ng-template [ngIf]="customContent" [ngIfElse]="noCustomContent">
        <ng-template [ngTemplateOutlet]="template"></ng-template>
      </ng-template>
      <ng-template #noCustomContent>{{ label }}</ng-template>
    </div>
    <div *ngIf="showState && selected" class="ant-select-item-option-state" style="user-select: none" unselectable="on">
      <span nz-icon nzType="check" class="ant-select-selected-icon" *ngIf="!icon; else icon"></span>
    </div>
  `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'ant-select-item ant-select-item-option',
                        '[attr.title]': 'title',
                        '[class.ant-select-item-option-grouped]': 'grouped',
                        '[class.ant-select-item-option-selected]': 'selected && !disabled',
                        '[class.ant-select-item-option-disabled]': 'disabled',
                        '[class.ant-select-item-option-active]': 'activated && !disabled'
                    },
                    providers: [NzDestroyService]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i2$6.NzDestroyService }]; }, propDecorators: { grouped: [{
                type: Input
            }], customContent: [{
                type: Input
            }], template: [{
                type: Input
            }], disabled: [{
                type: Input
            }], showState: [{
                type: Input
            }], title: [{
                type: Input
            }], label: [{
                type: Input
            }], value: [{
                type: Input
            }], activatedValue: [{
                type: Input
            }], listOfSelectedValue: [{
                type: Input
            }], icon: [{
                type: Input
            }], compareWith: [{
                type: Input
            }], itemClick: [{
                type: Output
            }], itemHover: [{
                type: Output
            }] } });

class BpsOptionItemGroupComponent {
    constructor() {
        this.bpsLabel = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionItemGroupComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsOptionItemGroupComponent, selector: "bps-option-item-group", inputs: { bpsLabel: "bpsLabel" }, host: { classAttribute: "ant-select-item ant-select-item-group" }, ngImport: i0, template: ` <ng-container *nzStringTemplateOutlet="bpsLabel">{{ bpsLabel }}</ng-container> `, isInline: true, dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionItemGroupComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-option-item-group',
                    template: ` <ng-container *nzStringTemplateOutlet="bpsLabel">{{ bpsLabel }}</ng-container> `,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        class: 'ant-select-item ant-select-item-group'
                    }
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { bpsLabel: [{
                type: Input
            }] } });

class BpsOptionContainerComponent {
    constructor() {
        this.notFoundContent = undefined;
        this.menuItemSelectedIcon = null;
        this.dropdownRender = null;
        this.activatedValue = null;
        this.listOfSelectedValue = [];
        this.mode = 'default';
        this.matchWidth = true;
        this.itemSize = 23;
        this.maxItemLength = 8;
        this.listOfContainerItem = [];
        this.itemClick = new EventEmitter();
        this.scrollToBottom = new EventEmitter();
        this.scrolledIndex = 0;
    }
    onItemClick(value) {
        this.itemClick.emit(value);
    }
    onItemHover(value) {
        // TODO: keydown.enter won't activate this value
        this.activatedValue = value;
    }
    trackValue(_index, option) {
        return option.key;
    }
    onScrolledIndexChange(index) {
        this.scrolledIndex = index;
        if (index === this.listOfContainerItem.length - this.maxItemLength) {
            this.scrollToBottom.emit();
        }
    }
    scrollToActivatedValue() {
        const index = this.listOfContainerItem.findIndex(item => this.compareWith(item.key, this.activatedValue));
        if (index < this.scrolledIndex || index >= this.scrolledIndex + this.maxItemLength) {
            this.cdkVirtualScrollViewport.scrollToIndex(index || 0);
        }
    }
    ngOnChanges(changes) {
        const { listOfContainerItem, activatedValue } = changes;
        if (listOfContainerItem || activatedValue) {
            this.scrollToActivatedValue();
        }
    }
    ngAfterViewInit() {
        setTimeout(() => this.scrollToActivatedValue());
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsOptionContainerComponent, selector: "bps-option-container", inputs: { notFoundContent: "notFoundContent", menuItemSelectedIcon: "menuItemSelectedIcon", dropdownRender: "dropdownRender", activatedValue: "activatedValue", listOfSelectedValue: "listOfSelectedValue", compareWith: "compareWith", mode: "mode", matchWidth: "matchWidth", itemSize: "itemSize", maxItemLength: "maxItemLength", listOfContainerItem: "listOfContainerItem" }, outputs: { itemClick: "itemClick", scrollToBottom: "scrollToBottom" }, host: { classAttribute: "ant-select-dropdown" }, viewQueries: [{ propertyName: "cdkVirtualScrollViewport", first: true, predicate: CdkVirtualScrollViewport, descendants: true, static: true }], exportAs: ["bpsOptionContainer"], usesOnChanges: true, ngImport: i0, template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <bps-option-item-group *ngSwitchCase="'group'" [bpsLabel]="item.groupLabel"></bps-option-item-group>
            <bps-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.bpsCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.bpsDisabled"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [title]="item.bpsTitle"
              [label]="item.bpsLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.bpsValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></bps-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2$7.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i2$7.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i2$7.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "component", type: i4.NzEmbedEmptyComponent, selector: "nz-embed-empty", inputs: ["nzComponentName", "specificContent"], exportAs: ["nzEmbedEmpty"] }, { kind: "component", type: BpsOptionItemComponent, selector: "bps-option-item", inputs: ["grouped", "customContent", "template", "disabled", "showState", "title", "label", "value", "activatedValue", "listOfSelectedValue", "icon", "compareWith"], outputs: ["itemClick", "itemHover"] }, { kind: "component", type: BpsOptionItemGroupComponent, selector: "bps-option-item-group", inputs: ["bpsLabel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsOptionContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-option-container',
                    exportAs: 'bpsOptionContainer',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    template: `
    <div>
      <div *ngIf="listOfContainerItem.length === 0" class="ant-select-item-empty">
        <nz-embed-empty nzComponentName="select" [specificContent]="notFoundContent!"></nz-embed-empty>
      </div>
      <cdk-virtual-scroll-viewport
        [class.full-width]="!matchWidth"
        [itemSize]="itemSize"
        [maxBufferPx]="itemSize * maxItemLength"
        [minBufferPx]="itemSize * maxItemLength"
        (scrolledIndexChange)="onScrolledIndexChange($event)"
        [style.height.px]="listOfContainerItem.length * itemSize"
        [style.max-height.px]="itemSize * maxItemLength"
      >
        <ng-template
          cdkVirtualFor
          [cdkVirtualForOf]="listOfContainerItem"
          [cdkVirtualForTrackBy]="trackValue"
          [cdkVirtualForTemplateCacheSize]="0"
          let-item
        >
          <ng-container [ngSwitch]="item.type">
            <bps-option-item-group *ngSwitchCase="'group'" [bpsLabel]="item.groupLabel"></bps-option-item-group>
            <bps-option-item
              *ngSwitchCase="'item'"
              [icon]="menuItemSelectedIcon"
              [customContent]="item.bpsCustomContent"
              [template]="item.template"
              [grouped]="!!item.groupLabel"
              [disabled]="item.bpsDisabled"
              [showState]="mode === 'tags' || mode === 'multiple'"
              [title]="item.bpsTitle"
              [label]="item.bpsLabel"
              [compareWith]="compareWith"
              [activatedValue]="activatedValue"
              [listOfSelectedValue]="listOfSelectedValue"
              [value]="item.bpsValue"
              (itemHover)="onItemHover($event)"
              (itemClick)="onItemClick($event)"
            ></bps-option-item>
          </ng-container>
        </ng-template>
      </cdk-virtual-scroll-viewport>
      <ng-template [ngTemplateOutlet]="dropdownRender"></ng-template>
    </div>
  `,
                    host: { class: 'ant-select-dropdown' }
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { notFoundContent: [{
                type: Input
            }], menuItemSelectedIcon: [{
                type: Input
            }], dropdownRender: [{
                type: Input
            }], activatedValue: [{
                type: Input
            }], listOfSelectedValue: [{
                type: Input
            }], compareWith: [{
                type: Input
            }], mode: [{
                type: Input
            }], matchWidth: [{
                type: Input
            }], itemSize: [{
                type: Input
            }], maxItemLength: [{
                type: Input
            }], listOfContainerItem: [{
                type: Input
            }], itemClick: [{
                type: Output
            }], scrollToBottom: [{
                type: Output
            }], cdkVirtualScrollViewport: [{
                type: ViewChild,
                args: [CdkVirtualScrollViewport, { static: true }]
            }] } });

class BpsSelectSearchComponent {
    setCompositionState(isComposing) {
        this.isComposingChange.next(isComposing);
    }
    onValueChange(value) {
        this.value = value;
        this.valueChange.next(value);
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
    }
    clearInputValue() {
        const inputDOM = this.inputElement.nativeElement;
        inputDOM.value = '';
        this.onValueChange('');
    }
    syncMirrorWidth() {
        const mirrorDOM = this.mirrorElement.nativeElement;
        const hostDOM = this.elementRef.nativeElement;
        const inputDOM = this.inputElement.nativeElement;
        this.renderer.removeStyle(hostDOM, 'width');
        this.renderer.setProperty(mirrorDOM, 'textContent', `${inputDOM.value}\u00a0`);
        this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(elementRef, renderer, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.bpsId = null;
        this.disabled = false;
        this.mirrorSync = false;
        this.showInput = true;
        this.focusTrigger = false;
        this.value = '';
        this.autofocus = false;
        this.valueChange = new EventEmitter();
        this.isComposingChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        const inputDOM = this.inputElement.nativeElement;
        const { focusTrigger, showInput } = changes;
        if (showInput) {
            if (this.showInput) {
                this.renderer.removeAttribute(inputDOM, 'readonly');
            }
            else {
                this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
            }
        }
        // IE11 cannot input value if focused before removing readonly
        if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
            inputDOM.focus();
        }
    }
    ngAfterViewInit() {
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
        if (this.autofocus) {
            this.focus();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectSearchComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.FocusMonitor }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectSearchComponent, selector: "bps-select-search", inputs: { bpsId: "bpsId", disabled: "disabled", mirrorSync: "mirrorSync", showInput: "showInput", focusTrigger: "focusTrigger", value: "value", autofocus: "autofocus" }, outputs: { valueChange: "valueChange", isComposingChange: "isComposingChange" }, host: { classAttribute: "ant-select-selection-search" }, providers: [{ provide: COMPOSITION_BUFFER_MODE, useValue: false }], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }, { propertyName: "mirrorElement", first: true, predicate: ["mirrorElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <input
      #inputElement
      [attr.id]="bpsId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectSearchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-search',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <input
      #inputElement
      [attr.id]="bpsId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
                    host: { class: 'ant-select-selection-search' },
                    providers: [{ provide: COMPOSITION_BUFFER_MODE, useValue: false }]
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.FocusMonitor }]; }, propDecorators: { bpsId: [{
                type: Input
            }], disabled: [{
                type: Input
            }], mirrorSync: [{
                type: Input
            }], showInput: [{
                type: Input
            }], focusTrigger: [{
                type: Input
            }], value: [{
                type: Input
            }], autofocus: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], isComposingChange: [{
                type: Output
            }], inputElement: [{
                type: ViewChild,
                args: ['inputElement', { static: true }]
            }], mirrorElement: [{
                type: ViewChild,
                args: ['mirrorElement', { static: false }]
            }] } });

class BpsSelectItemComponent {
    constructor() {
        this.disabled = false;
        this.label = null;
        this.deletable = false;
        this.removeIcon = null;
        this.contentTemplateOutletContext = null;
        this.contentTemplateOutlet = null;
        this.delete = new EventEmitter();
    }
    onDelete(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.disabled) {
            this.delete.next(e);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectItemComponent, selector: "bps-select-item", inputs: { disabled: "disabled", label: "label", deletable: "deletable", removeIcon: "removeIcon", contentTemplateOutletContext: "contentTemplateOutletContext", contentTemplateOutlet: "contentTemplateOutlet" }, outputs: { delete: "delete" }, host: { properties: { "attr.title": "label", "class.ant-select-selection-item-disabled": "disabled" }, classAttribute: "ant-select-selection-item" }, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <span nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></span>
    </span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectItemComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-item',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <ng-container *nzStringTemplateOutlet="contentTemplateOutlet; context: { $implicit: contentTemplateOutletContext }">
      <div class="ant-select-selection-item-content" *ngIf="deletable; else labelTemplate">{{ label }}</div>
      <ng-template #labelTemplate>{{ label }}</ng-template>
    </ng-container>
    <span *ngIf="deletable && !disabled" class="ant-select-selection-item-remove" (click)="onDelete($event)">
      <span nz-icon nzType="close" *ngIf="!removeIcon; else removeIcon"></span>
    </span>
  `,
                    host: {
                        class: 'ant-select-selection-item',
                        '[attr.title]': 'label',
                        '[class.ant-select-selection-item-disabled]': 'disabled'
                    }
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { disabled: [{
                type: Input
            }], label: [{
                type: Input
            }], deletable: [{
                type: Input
            }], removeIcon: [{
                type: Input
            }], contentTemplateOutletContext: [{
                type: Input
            }], contentTemplateOutlet: [{
                type: Input
            }], delete: [{
                type: Output
            }] } });

class BpsSelectPlaceholderComponent {
    constructor() {
        this.placeholder = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectPlaceholderComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectPlaceholderComponent, selector: "bps-select-placeholder", inputs: { placeholder: "placeholder" }, host: { classAttribute: "ant-select-selection-placeholder" }, ngImport: i0, template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectPlaceholderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-placeholder',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <ng-container *nzStringTemplateOutlet="placeholder">
      {{ placeholder }}
    </ng-container>
  `,
                    host: { class: 'ant-select-selection-placeholder' }
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { placeholder: [{
                type: Input
            }] } });

class BpsSelectTopControlComponent {
    updateTemplateVariable() {
        const isSelectedValueEmpty = this.listOfTopItem.length === 0;
        this.isShowPlaceholder = isSelectedValueEmpty && !this.isComposing && !this.inputValue;
        this.isShowSingleLabel = !isSelectedValueEmpty && !this.isComposing && !this.inputValue;
    }
    isComposingChange(isComposing) {
        this.isComposing = isComposing;
        this.updateTemplateVariable();
    }
    onInputValueChange(value) {
        if (value !== this.inputValue) {
            this.inputValue = value;
            this.updateTemplateVariable();
            this.inputValueChange.emit(value);
            this.tokenSeparate(value, this.tokenSeparators);
        }
    }
    tokenSeparate(inputValue, tokenSeparators) {
        const includesSeparators = (str, separators) => {
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < separators.length; ++i) {
                if (str.lastIndexOf(separators[i]) > 0) {
                    return true;
                }
            }
            return false;
        };
        const splitBySeparators = (str, separators) => {
            const reg = new RegExp(`[${separators.join()}]`);
            const array = str.split(reg).filter(token => token);
            return [...new Set(array)];
        };
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.mode !== 'default' &&
            includesSeparators(inputValue, tokenSeparators)) {
            const listOfLabel = splitBySeparators(inputValue, tokenSeparators);
            this.tokenize.next(listOfLabel);
        }
    }
    clearInputValue() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.clearInputValue();
        }
    }
    focus() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.focus();
        }
    }
    blur() {
        if (this.nzSelectSearchComponent) {
            this.nzSelectSearchComponent.blur();
        }
    }
    trackValue(_index, option) {
        return option.bpsValue;
    }
    onDeleteItem(item) {
        if (!this.disabled && !item.bpsDisabled) {
            this.deleteItem.next(item);
        }
    }
    constructor(elementRef, ngZone, noAnimation) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.bpsId = null;
        this.showSearch = false;
        this.placeHolder = null;
        this.open = false;
        this.maxTagCount = Infinity;
        this.autofocus = false;
        this.disabled = false;
        this.mode = 'default';
        this.customTemplate = null;
        this.maxTagPlaceholder = null;
        this.removeIcon = null;
        this.listOfTopItem = [];
        this.tokenSeparators = [];
        this.tokenize = new EventEmitter();
        this.inputValueChange = new EventEmitter();
        this.deleteItem = new EventEmitter();
        this.listOfSlicedItem = [];
        this.isShowPlaceholder = true;
        this.isShowSingleLabel = false;
        this.isComposing = false;
        this.inputValue = null;
        this.destroy$ = new Subject();
    }
    ngOnChanges(changes) {
        const { listOfTopItem, maxTagCount, customTemplate, maxTagPlaceholder } = changes;
        if (listOfTopItem) {
            this.updateTemplateVariable();
        }
        if (listOfTopItem || maxTagCount || customTemplate || maxTagPlaceholder) {
            const listOfSlicedItem = this.listOfTopItem.slice(0, this.maxTagCount).map(o => ({
                bpsLabel: o.bpsLabel,
                bpsValue: o.bpsValue,
                bpsDisabled: o.bpsDisabled,
                contentTemplateOutlet: this.customTemplate,
                contentTemplateOutletContext: o
            }));
            if (this.listOfTopItem.length > this.maxTagCount) {
                const exceededLabel = `+ ${this.listOfTopItem.length - this.maxTagCount} ...`;
                const listOfSelectedValue = this.listOfTopItem.map(item => item.bpsValue);
                const exceededItem = {
                    bpsLabel: exceededLabel,
                    bpsValue: '$$__nz_exceeded_item',
                    bpsDisabled: true,
                    contentTemplateOutlet: this.maxTagPlaceholder,
                    contentTemplateOutletContext: listOfSelectedValue.slice(this.maxTagCount)
                };
                listOfSlicedItem.push(exceededItem);
            }
            this.listOfSlicedItem = listOfSlicedItem;
        }
    }
    ngOnInit() {
        this.ngZone.runOutsideAngular(() => {
            fromEvent(this.elementRef.nativeElement, 'click')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                // `HTMLElement.focus()` is a native DOM API which doesn't require Angular to run change detection.
                if (event.target !== this.nzSelectSearchComponent.inputElement.nativeElement) {
                    this.nzSelectSearchComponent.focus();
                }
            });
            fromEvent(this.elementRef.nativeElement, 'keydown')
                .pipe(takeUntil(this.destroy$))
                .subscribe(event => {
                if (event.target instanceof HTMLInputElement) {
                    const inputValue = event.target.value;
                    if (event.keyCode === BACKSPACE &&
                        this.mode !== 'default' &&
                        !inputValue &&
                        this.listOfTopItem.length > 0) {
                        event.preventDefault();
                        // Run change detection only if the user has pressed the `Backspace` key and the following condition is met.
                        this.ngZone.run(() => this.onDeleteItem(this.listOfTopItem[this.listOfTopItem.length - 1]));
                    }
                }
            });
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectTopControlComponent, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }, { token: i1$1.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectTopControlComponent, selector: "bps-select-top-control", inputs: { bpsId: "bpsId", showSearch: "showSearch", placeHolder: "placeHolder", open: "open", maxTagCount: "maxTagCount", autofocus: "autofocus", disabled: "disabled", mode: "mode", customTemplate: "customTemplate", maxTagPlaceholder: "maxTagPlaceholder", removeIcon: "removeIcon", listOfTopItem: "listOfTopItem", tokenSeparators: "tokenSeparators" }, outputs: { tokenize: "tokenize", inputValueChange: "inputValueChange", deleteItem: "deleteItem" }, host: { classAttribute: "ant-select-selector" }, viewQueries: [{ propertyName: "nzSelectSearchComponent", first: true, predicate: BpsSelectSearchComponent, descendants: true }], exportAs: ["bpsSelectTopControl"], usesOnChanges: true, ngImport: i0, template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
        <bps-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].bpsLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></bps-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <bps-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.bpsLabel"
          [disabled]="item.bpsDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></bps-select-item>
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
      </ng-container>
    </ng-container>
    <bps-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></bps-select-placeholder>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2$1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i2$1.NgSwitchDefault, selector: "[ngSwitchDefault]" }, { kind: "component", type: BpsSelectItemComponent, selector: "bps-select-item", inputs: ["disabled", "label", "deletable", "removeIcon", "contentTemplateOutletContext", "contentTemplateOutlet"], outputs: ["delete"] }, { kind: "component", type: BpsSelectPlaceholderComponent, selector: "bps-select-placeholder", inputs: ["placeholder"] }, { kind: "component", type: BpsSelectSearchComponent, selector: "bps-select-search", inputs: ["bpsId", "disabled", "mirrorSync", "showInput", "focusTrigger", "value", "autofocus"], outputs: ["valueChange", "isComposingChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectTopControlComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-top-control',
                    exportAs: 'bpsSelectTopControl',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: `
    <!--single mode-->
    <ng-container [ngSwitch]="mode">
      <ng-container *ngSwitchCase="'default'">
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [showInput]="showSearch"
          [mirrorSync]="false"
          [autofocus]="autofocus"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
        <bps-select-item
          *ngIf="isShowSingleLabel"
          [deletable]="false"
          [disabled]="false"
          [removeIcon]="removeIcon"
          [label]="listOfTopItem[0].bpsLabel"
          [contentTemplateOutlet]="customTemplate"
          [contentTemplateOutletContext]="listOfTopItem[0]"
        ></bps-select-item>
      </ng-container>
      <ng-container *ngSwitchDefault>
        <!--multiple or tags mode-->
        <bps-select-item
          *ngFor="let item of listOfSlicedItem; trackBy: trackValue"
          [removeIcon]="removeIcon"
          [label]="item.bpsLabel"
          [disabled]="item.bpsDisabled || disabled"
          [contentTemplateOutlet]="item.contentTemplateOutlet"
          [deletable]="true"
          [contentTemplateOutletContext]="item.contentTemplateOutletContext"
          (delete)="onDeleteItem(item.contentTemplateOutletContext)"
        ></bps-select-item>
        <bps-select-search
          [bpsId]="bpsId"
          [disabled]="disabled"
          [value]="inputValue!"
          [autofocus]="autofocus"
          [showInput]="true"
          [mirrorSync]="true"
          [focusTrigger]="open"
          (isComposingChange)="isComposingChange($event)"
          (valueChange)="onInputValueChange($event)"
        ></bps-select-search>
      </ng-container>
    </ng-container>
    <bps-select-placeholder *ngIf="isShowPlaceholder" [placeholder]="placeHolder"></bps-select-placeholder>
  `,
                    host: { class: 'ant-select-selector' }
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }, { type: i1$1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { bpsId: [{
                type: Input
            }], showSearch: [{
                type: Input
            }], placeHolder: [{
                type: Input
            }], open: [{
                type: Input
            }], maxTagCount: [{
                type: Input
            }], autofocus: [{
                type: Input
            }], disabled: [{
                type: Input
            }], mode: [{
                type: Input
            }], customTemplate: [{
                type: Input
            }], maxTagPlaceholder: [{
                type: Input
            }], removeIcon: [{
                type: Input
            }], listOfTopItem: [{
                type: Input
            }], tokenSeparators: [{
                type: Input
            }], tokenize: [{
                type: Output
            }], inputValueChange: [{
                type: Output
            }], deleteItem: [{
                type: Output
            }], nzSelectSearchComponent: [{
                type: ViewChild,
                args: [BpsSelectSearchComponent]
            }] } });

class BpsSelectArrowComponent {
    constructor() {
        this.loading = false;
        this.search = false;
        this.showArrow = false;
        this.suffixIcon = null;
        this.feedbackIcon = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectArrowComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectArrowComponent, selector: "bps-select-arrow", inputs: { loading: "loading", search: "search", showArrow: "showArrow", suffixIcon: "suffixIcon", feedbackIcon: "feedbackIcon" }, host: { properties: { "class.ant-select-arrow-loading": "loading" }, classAttribute: "ant-select-arrow" }, ngImport: i0, template: `
    <span nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></span>
    <ng-template #defaultArrow>
      <ng-container *ngIf="showArrow && !suffixIcon; else suffixTemplate">
        <span nz-icon nzType="down" *ngIf="!search"></span>
        <span nz-icon nzType="search" *ngIf="search"></span>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <span *ngIf="suffixIcon" nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
      </ng-template>
    </ng-template>
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: ["nzStringTemplateOutletContext", "nzStringTemplateOutlet"], exportAs: ["nzStringTemplateOutlet"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectArrowComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-arrow',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <span nz-icon nzType="loading" *ngIf="loading; else defaultArrow"></span>
    <ng-template #defaultArrow>
      <ng-container *ngIf="showArrow && !suffixIcon; else suffixTemplate">
        <span nz-icon nzType="down" *ngIf="!search"></span>
        <span nz-icon nzType="search" *ngIf="search"></span>
      </ng-container>
      <ng-template #suffixTemplate>
        <ng-container *nzStringTemplateOutlet="suffixIcon; let suffixIcon">
          <span *ngIf="suffixIcon" nz-icon [nzType]="suffixIcon"></span>
        </ng-container>
      </ng-template>
    </ng-template>
    <ng-container *nzStringTemplateOutlet="feedbackIcon">{{ feedbackIcon }}</ng-container>
  `,
                    host: {
                        class: 'ant-select-arrow',
                        '[class.ant-select-arrow-loading]': 'loading'
                    }
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { loading: [{
                type: Input
            }], search: [{
                type: Input
            }], showArrow: [{
                type: Input
            }], suffixIcon: [{
                type: Input
            }], feedbackIcon: [{
                type: Input
            }] } });

class BpsSelectClearComponent {
    constructor() {
        this.clearIcon = null;
        this.clear = new EventEmitter();
    }
    onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.clear.emit(e);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectClearComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectClearComponent, selector: "bps-select-clear", inputs: { clearIcon: "clearIcon" }, outputs: { clear: "clear" }, host: { listeners: { "click": "onClick($event)" }, classAttribute: "ant-select-clear" }, ngImport: i0, template: `
    <span
      nz-icon
      nzType="close-circle"
      nzTheme="fill"
      *ngIf="!clearIcon; else clearIcon"
      class="ant-select-close-icon"
    ></span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3$2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectClearComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-clear',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <span
      nz-icon
      nzType="close-circle"
      nzTheme="fill"
      *ngIf="!clearIcon; else clearIcon"
      class="ant-select-close-icon"
    ></span>
  `,
                    host: {
                        class: 'ant-select-clear',
                        '(click)': 'onClick($event)'
                    }
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { clearIcon: [{
                type: Input
            }], clear: [{
                type: Output
            }] } });

const defaultFilterOption = (searchValue, item) => {
    if (item && item.bpsLabel) {
        return item.bpsLabel.toString().toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    }
    else {
        return false;
    }
};
const NZ_CONFIG_MODULE_NAME = 'select';
class BpsSelectComponent {
    set bpsShowArrow(value) {
        this._bpsShowArrow = value;
    }
    get bpsShowArrow() {
        return this._bpsShowArrow === undefined ? this.bpsMode === 'default' : this._bpsShowArrow;
    }
    generateTagItem(value) {
        return {
            bpsValue: value,
            bpsLabel: value,
            type: 'item'
        };
    }
    onItemClick(value) {
        this.activatedValue = value;
        if (this.bpsMode === 'default') {
            if (this.listOfValue.length === 0 || !this.compareWith(this.listOfValue[0], value)) {
                this.updateListOfValue([value]);
            }
            this.setOpenState(false);
        }
        else {
            const targetIndex = this.listOfValue.findIndex(o => this.compareWith(o, value));
            if (targetIndex !== -1) {
                const listOfValueAfterRemoved = this.listOfValue.filter((_, i) => i !== targetIndex);
                this.updateListOfValue(listOfValueAfterRemoved);
            }
            else if (this.listOfValue.length < this.bpsMaxMultipleCount) {
                const listOfValueAfterAdded = [...this.listOfValue, value];
                this.updateListOfValue(listOfValueAfterAdded);
            }
            this.focus();
            if (this.bpsAutoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    onItemDelete(item) {
        const listOfSelectedValue = this.listOfValue.filter(v => !this.compareWith(v, item.bpsValue));
        this.updateListOfValue(listOfSelectedValue);
        this.clearInput();
    }
    updateListOfContainerItem() {
        let listOfContainerItem = this.listOfTagAndTemplateItem
            .filter(item => !item.bpsHide)
            .filter(item => {
            if (!this.bpsServerSearch && this.searchValue) {
                return this.bpsFilterOption(this.searchValue, item);
            }
            else {
                return true;
            }
        });
        if (this.bpsMode === 'tags' && this.searchValue) {
            const matchedItem = this.listOfTagAndTemplateItem.find(item => item.bpsLabel === this.searchValue);
            if (!matchedItem) {
                const tagItem = this.generateTagItem(this.searchValue);
                listOfContainerItem = [tagItem, ...listOfContainerItem];
                this.activatedValue = tagItem.bpsValue;
            }
            else {
                this.activatedValue = matchedItem.bpsValue;
            }
        }
        const activatedItem = listOfContainerItem.find(item => item.bpsLabel === this.searchValue) ||
            listOfContainerItem.find(item => this.compareWith(item.bpsValue, this.activatedValue)) ||
            listOfContainerItem.find(item => this.compareWith(item.bpsValue, this.listOfValue[0])) ||
            listOfContainerItem[0];
        this.activatedValue = (activatedItem && activatedItem.bpsValue) || null;
        let listOfGroupLabel = [];
        if (this.isReactiveDriven) {
            listOfGroupLabel = [...new Set(this.bpsOptions.filter(o => o.groupLabel).map(o => o.groupLabel))];
        }
        else {
            if (this.listOfNzOptionGroupComponent) {
                listOfGroupLabel = this.listOfNzOptionGroupComponent.map(o => o.bpsLabel);
            }
        }
        /** insert group item **/
        listOfGroupLabel.forEach(label => {
            const index = listOfContainerItem.findIndex(item => label === item.groupLabel);
            if (index > -1) {
                const groupItem = { groupLabel: label, type: 'group', key: label };
                listOfContainerItem.splice(index, 0, groupItem);
            }
        });
        this.listOfContainerItem = [...listOfContainerItem];
        this.updateCdkConnectedOverlayPositions();
    }
    clearInput() {
        this.bpsSelectTopControlComponent.clearInputValue();
    }
    updateListOfValue(listOfValue) {
        const covertListToModel = (list, mode) => {
            if (mode === 'default') {
                if (list.length > 0) {
                    return list[0];
                }
                else {
                    return null;
                }
            }
            else {
                return list;
            }
        };
        const model = covertListToModel(listOfValue, this.bpsMode);
        if (this.value !== model) {
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.value = model;
            this.onChange(this.value);
        }
    }
    onTokenSeparate(listOfLabel) {
        const listOfMatchedValue = this.listOfTagAndTemplateItem
            .filter(item => listOfLabel.findIndex(label => label === item.bpsLabel) !== -1)
            .map(item => item.bpsValue)
            .filter(item => this.listOfValue.findIndex(v => this.compareWith(v, item)) === -1);
        if (this.bpsMode === 'multiple') {
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue]);
        }
        else if (this.bpsMode === 'tags') {
            const listOfUnMatchedLabel = listOfLabel.filter(label => this.listOfTagAndTemplateItem.findIndex(item => item.bpsLabel === label) === -1);
            this.updateListOfValue([...this.listOfValue, ...listOfMatchedValue, ...listOfUnMatchedLabel]);
        }
        this.clearInput();
    }
    onKeyDown(e) {
        if (this.bpsDisabled) {
            return;
        }
        const listOfFilteredOptionNotDisabled = this.listOfContainerItem
            .filter(item => item.type === 'item')
            .filter(item => !item.bpsDisabled);
        const activatedIndex = listOfFilteredOptionNotDisabled.findIndex(item => this.compareWith(item.bpsValue, this.activatedValue));
        switch (e.keyCode) {
            case UP_ARROW:
                e.preventDefault();
                if (this.bpsOpen && listOfFilteredOptionNotDisabled.length > 0) {
                    const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionNotDisabled.length - 1;
                    this.activatedValue = listOfFilteredOptionNotDisabled[preIndex].bpsValue;
                }
                break;
            case DOWN_ARROW:
                e.preventDefault();
                if (this.bpsOpen && listOfFilteredOptionNotDisabled.length > 0) {
                    const nextIndex = activatedIndex < listOfFilteredOptionNotDisabled.length - 1 ? activatedIndex + 1 : 0;
                    this.activatedValue = listOfFilteredOptionNotDisabled[nextIndex].bpsValue;
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.bpsOpen) {
                    if (isNotNil$1(this.activatedValue) && activatedIndex !== -1) {
                        this.onItemClick(this.activatedValue);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case SPACE:
                if (!this.bpsOpen) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                if (this.bpsSelectOnTab) {
                    if (this.bpsOpen) {
                        e.preventDefault();
                        if (isNotNil$1(this.activatedValue)) {
                            this.onItemClick(this.activatedValue);
                        }
                    }
                }
                else {
                    this.setOpenState(false);
                }
                break;
            case ESCAPE:
                /**
                 * Skip the ESCAPE processing, it will be handled in {@link onOverlayKeyDown}.
                 */
                break;
            default:
                if (!this.bpsOpen) {
                    this.setOpenState(true);
                }
        }
    }
    setOpenState(value) {
        if (this.bpsOpen !== value) {
            this.bpsOpen = value;
            this.bpsOpenChange.emit(value);
            this.onOpenChange();
            this.cdr.markForCheck();
        }
    }
    onOpenChange() {
        this.updateCdkConnectedOverlayStatus();
        this.clearInput();
    }
    onInputValueChange(value) {
        this.searchValue = value;
        this.updateListOfContainerItem();
        this.bpsOnSearch.emit(value);
        this.updateCdkConnectedOverlayPositions();
    }
    onClearSelection() {
        this.updateListOfValue([]);
    }
    onClickOutside(event) {
        if (!this.host.nativeElement.contains(event.target)) {
            this.setOpenState(false);
        }
    }
    focus() {
        this.bpsSelectTopControlComponent.focus();
    }
    blur() {
        this.bpsSelectTopControlComponent.blur();
    }
    onPositionChange(position) {
        const placement = getPlacementName(position);
        this.dropDownPosition = placement;
    }
    updateCdkConnectedOverlayStatus() {
        if (this.platform.isBrowser && this.originElement.nativeElement) {
            const triggerWidth = this.triggerWidth;
            cancelRequestAnimationFrame(this.requestId);
            this.requestId = reqAnimFrame(() => {
                // Blink triggers style and layout pipelines anytime the `getBoundingClientRect()` is called, which may cause a
                // frame drop. That's why it's scheduled through the `requestAnimationFrame` to unload the composite thread.
                this.triggerWidth = this.originElement.nativeElement.getBoundingClientRect().width;
                if (triggerWidth !== this.triggerWidth) {
                    // The `requestAnimationFrame` will trigger change detection, but we're inside an `OnPush` component which won't have
                    // the `ChecksEnabled` state. Calling `markForCheck()` will allow Angular to run the change detection from the root component
                    // down to the `nz-select`. But we'll trigger only local change detection if the `triggerWidth` has been changed.
                    this.cdr.detectChanges();
                }
            });
        }
    }
    updateCdkConnectedOverlayPositions() {
        reqAnimFrame(() => {
            this.cdkConnectedOverlay?.overlayRef?.updatePosition();
        });
    }
    constructor(ngZone, destroy$, nzConfigService, cdr, host, renderer, platform, focusMonitor, directionality, noAnimation, nzFormStatusService, nzFormNoStatusService) {
        this.ngZone = ngZone;
        this.destroy$ = destroy$;
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.host = host;
        this.renderer = renderer;
        this.platform = platform;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.nzFormStatusService = nzFormStatusService;
        this.nzFormNoStatusService = nzFormNoStatusService;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.bpsId = null;
        this.bpsSize = 'default';
        this.bpsStatus = '';
        this.bpsOptionHeightPx = 23;
        this.bpsOptionOverflowSize = 8;
        this.bpsDropdownClassName = null;
        this.bpsDropdownMatchSelectWidth = true;
        this.bpsDropdownStyle = null;
        this.bpsNotFoundContent = undefined;
        this.bpsPlaceHolder = null;
        this.bpsPlacement = null;
        this.bpsMaxTagCount = Infinity;
        this.bpsDropdownRender = null;
        this.bpsCustomTemplate = null;
        this.bpsSuffixIcon = null;
        this.bpsClearIcon = null;
        this.bpsRemoveIcon = null;
        this.bpsMenuItemSelectedIcon = null;
        this.bpsTokenSeparators = [];
        this.bpsMaxTagPlaceholder = null;
        this.bpsMaxMultipleCount = Infinity;
        this.bpsMode = 'default';
        this.bpsFilterOption = defaultFilterOption;
        this.compareWith = (o1, o2) => o1 === o2;
        this.bpsAllowClear = false;
        this.bpsBorderless = false;
        this.bpsShowSearch = false;
        this.bpsLoading = false;
        this.bpsAutoFocus = false;
        this.bpsAutoClearSearchValue = true;
        this.bpsServerSearch = false;
        this.bpsDisabled = false;
        this.bpsOpen = false;
        this.bpsSelectOnTab = false;
        this.bpsBackdrop = false;
        this.bpsOptions = [];
        this.bpsOnSearch = new EventEmitter();
        this.bpsScrollToBottom = new EventEmitter();
        this.bpsOpenChange = new EventEmitter();
        this.bpsBlur = new EventEmitter();
        this.bpsFocus = new EventEmitter();
        this.listOfValue$ = new BehaviorSubject([]);
        this.listOfTemplateItem$ = new BehaviorSubject([]);
        this.listOfTagAndTemplateItem = [];
        this.searchValue = '';
        this.isReactiveDriven = false;
        this.requestId = -1;
        this.isNzDisableFirstChange = true;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.dropDownPosition = 'bottomLeft';
        this.triggerWidth = null;
        this.listOfContainerItem = [];
        this.listOfTopItem = [];
        this.activatedValue = null;
        this.listOfValue = [];
        this.focused = false;
        this.dir = 'ltr';
        this.positions = [];
        // status
        this.prefixCls = 'ant-select';
        this.statusCls = {};
        this.status = '';
        this.hasFeedback = false;
    }
    writeValue(modelValue) {
        /** https://github.com/angular/angular/issues/14988 **/
        if (this.value !== modelValue) {
            this.value = modelValue;
            const covertModelToList = (model, mode) => {
                if (model === null || model === undefined) {
                    return [];
                }
                else if (mode === 'default') {
                    return [model];
                }
                else {
                    return model;
                }
            };
            const listOfValue = covertModelToList(modelValue, this.bpsMode);
            this.listOfValue = listOfValue;
            this.listOfValue$.next(listOfValue);
            this.cdr.markForCheck();
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.bpsDisabled = (this.isNzDisableFirstChange && this.bpsDisabled) || disabled;
        this.isNzDisableFirstChange = false;
        if (this.bpsDisabled) {
            this.setOpenState(false);
        }
        this.cdr.markForCheck();
    }
    ngOnChanges(changes) {
        const { bpsOpen, bpsDisabled, bpsOptions, bpsStatus, bpsPlacement } = changes;
        if (bpsOpen) {
            this.onOpenChange();
        }
        if (bpsDisabled && this.bpsDisabled) {
            this.setOpenState(false);
        }
        if (bpsOptions) {
            this.isReactiveDriven = true;
            const listOfOptions = this.bpsOptions || [];
            const listOfTransformedItem = listOfOptions.map(item => {
                return {
                    template: item.label instanceof TemplateRef ? item.label : null,
                    bpsTitle: this.getTitle(item.title, item.label),
                    bpsLabel: typeof item.label === 'string' || typeof item.label === 'number' ? item.label : null,
                    bpsValue: item.value,
                    bpsDisabled: item.disabled || false,
                    bpsHide: item.hide || false,
                    bpsCustomContent: item.label instanceof TemplateRef,
                    groupLabel: item.groupLabel || null,
                    type: 'item',
                    key: item.key === undefined ? item.value : item.key
                };
            });
            this.listOfTemplateItem$.next(listOfTransformedItem);
        }
        if (bpsStatus) {
            this.setStatusStyles(this.bpsStatus, this.hasFeedback);
        }
        if (bpsPlacement) {
            const { currentValue } = bpsPlacement;
            this.dropDownPosition = currentValue;
            const listOfPlacement = ['bottomLeft', 'topLeft', 'bottomRight', 'topRight'];
            if (currentValue && listOfPlacement.includes(currentValue)) {
                this.positions = [POSITION_MAP[currentValue]];
            }
            else {
                this.positions = listOfPlacement.map(e => POSITION_MAP[e]);
            }
        }
    }
    ngOnInit() {
        this.nzFormStatusService?.formStatusChanges
            .pipe(distinctUntilChanged((pre, cur) => {
            return pre.status === cur.status && pre.hasFeedback === cur.hasFeedback;
        }), withLatestFrom(this.nzFormNoStatusService ? this.nzFormNoStatusService.noFormStatus : of(false)), map(([{ status, hasFeedback }, noStatus]) => ({ status: noStatus ? '' : status, hasFeedback })), takeUntil(this.destroy$))
            .subscribe(({ status, hasFeedback }) => {
            this.setStatusStyles(status, hasFeedback);
        });
        this.focusMonitor
            .monitor(this.host, true)
            .pipe(takeUntil(this.destroy$))
            .subscribe(focusOrigin => {
            if (!focusOrigin) {
                this.focused = false;
                this.cdr.markForCheck();
                this.bpsBlur.emit();
                Promise.resolve().then(() => {
                    this.onTouched();
                });
            }
            else {
                this.focused = true;
                this.cdr.markForCheck();
                this.bpsFocus.emit();
            }
        });
        combineLatest([this.listOfValue$, this.listOfTemplateItem$])
            .pipe(takeUntil(this.destroy$))
            .subscribe(([listOfSelectedValue, listOfTemplateItem]) => {
            const listOfTagItem = listOfSelectedValue
                .filter(() => this.bpsMode === 'tags')
                .filter(value => listOfTemplateItem.findIndex(o => this.compareWith(o.bpsValue, value)) === -1)
                .map(value => this.listOfTopItem.find(o => this.compareWith(o.bpsValue, value)) || this.generateTagItem(value));
            this.listOfTagAndTemplateItem = [...listOfTemplateItem, ...listOfTagItem];
            this.listOfTopItem = this.listOfValue
                .map(v => [...this.listOfTagAndTemplateItem, ...this.listOfTopItem].find(item => this.compareWith(v, item.bpsValue)))
                .filter(item => !!item);
            this.updateListOfContainerItem();
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.nzConfigService
            .getConfigChangeEventForComponent('select')
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
        this.dir = this.directionality.value;
        this.ngZone.runOutsideAngular(() => fromEvent(this.host.nativeElement, 'click')
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            if ((this.bpsOpen && this.bpsShowSearch) || this.bpsDisabled) {
                return;
            }
            this.ngZone.run(() => this.setOpenState(!this.bpsOpen));
        }));
        // Caretaker note: we could've added this listener within the template `(overlayKeydown)="..."`,
        // but with this approach, it'll run change detection on each keyboard click, and also it'll run
        // `markForCheck()` internally, which means the whole component tree (starting from the root and
        // going down to the select component) will be re-checked and updated (if needed).
        // This is safe to do that manually since `setOpenState()` calls `markForCheck()` if needed.
        this.cdkConnectedOverlay.overlayKeydown.pipe(takeUntil(this.destroy$)).subscribe(event => {
            if (event.keyCode === ESCAPE) {
                this.setOpenState(false);
            }
        });
    }
    ngAfterContentInit() {
        if (!this.isReactiveDriven) {
            merge(this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes)
                .pipe(startWith(true), switchMap(() => merge(...[
                this.listOfNzOptionComponent.changes,
                this.listOfNzOptionGroupComponent.changes,
                ...this.listOfNzOptionComponent.map(option => option.changes),
                ...this.listOfNzOptionGroupComponent.map(option => option.changes)
            ]).pipe(startWith(true))), takeUntil(this.destroy$))
                .subscribe(() => {
                const listOfOptionInterface = this.listOfNzOptionComponent.toArray().map(item => {
                    const { template, bpsLabel, bpsValue, bpsKey, bpsDisabled, bpsHide, bpsCustomContent, groupLabel } = item;
                    return {
                        template,
                        bpsLabel,
                        bpsValue,
                        bpsDisabled,
                        bpsHide,
                        bpsCustomContent,
                        groupLabel,
                        bpsTitle: this.getTitle(item.bpsTitle, item.bpsLabel),
                        type: 'item',
                        key: bpsKey === undefined ? bpsValue : bpsKey
                    };
                });
                this.listOfTemplateItem$.next(listOfOptionInterface);
                this.cdr.markForCheck();
            });
        }
    }
    ngOnDestroy() {
        cancelRequestAnimationFrame(this.requestId);
        this.focusMonitor.stopMonitoring(this.host);
    }
    setStatusStyles(status, hasFeedback) {
        this.status = status;
        this.hasFeedback = hasFeedback;
        this.cdr.markForCheck();
        // render status if nzStatus is set
        this.statusCls = getStatusClassNames(this.prefixCls, status, hasFeedback);
        Object.keys(this.statusCls).forEach(status => {
            if (this.statusCls[status]) {
                this.renderer.addClass(this.host.nativeElement, status);
            }
            else {
                this.renderer.removeClass(this.host.nativeElement, status);
            }
        });
    }
    getTitle(title, label) {
        let rawTitle = undefined;
        if (title === undefined) {
            if (typeof label === 'string' || typeof label === 'number') {
                rawTitle = label.toString();
            }
        }
        else if (typeof title === 'string' || typeof title === 'number') {
            rawTitle = title.toString();
        }
        return rawTitle;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectComponent, deps: [{ token: i0.NgZone }, { token: i2$6.NzDestroyService }, { token: i2$3.NzConfigService }, { token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i3$3.Platform }, { token: i1.FocusMonitor }, { token: i2.Directionality, optional: true }, { token: i1$1.NzNoAnimationDirective, host: true, optional: true }, { token: i3$1.NzFormStatusService, optional: true }, { token: i3$1.NzFormNoStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsSelectComponent, selector: "bps-select", inputs: { bpsId: "bpsId", bpsSize: "bpsSize", bpsStatus: "bpsStatus", bpsOptionHeightPx: "bpsOptionHeightPx", bpsOptionOverflowSize: "bpsOptionOverflowSize", bpsDropdownClassName: "bpsDropdownClassName", bpsDropdownMatchSelectWidth: "bpsDropdownMatchSelectWidth", bpsDropdownStyle: "bpsDropdownStyle", bpsNotFoundContent: "bpsNotFoundContent", bpsPlaceHolder: "bpsPlaceHolder", bpsPlacement: "bpsPlacement", bpsMaxTagCount: "bpsMaxTagCount", bpsDropdownRender: "bpsDropdownRender", bpsCustomTemplate: "bpsCustomTemplate", bpsSuffixIcon: "bpsSuffixIcon", bpsClearIcon: "bpsClearIcon", bpsRemoveIcon: "bpsRemoveIcon", bpsMenuItemSelectedIcon: "bpsMenuItemSelectedIcon", bpsTokenSeparators: "bpsTokenSeparators", bpsMaxTagPlaceholder: "bpsMaxTagPlaceholder", bpsMaxMultipleCount: "bpsMaxMultipleCount", bpsMode: "bpsMode", bpsFilterOption: "bpsFilterOption", compareWith: "compareWith", bpsAllowClear: "bpsAllowClear", bpsBorderless: "bpsBorderless", bpsShowSearch: "bpsShowSearch", bpsLoading: "bpsLoading", bpsAutoFocus: "bpsAutoFocus", bpsAutoClearSearchValue: "bpsAutoClearSearchValue", bpsServerSearch: "bpsServerSearch", bpsDisabled: "bpsDisabled", bpsOpen: "bpsOpen", bpsSelectOnTab: "bpsSelectOnTab", bpsBackdrop: "bpsBackdrop", bpsOptions: "bpsOptions", bpsShowArrow: "bpsShowArrow" }, outputs: { bpsOnSearch: "bpsOnSearch", bpsScrollToBottom: "bpsScrollToBottom", bpsOpenChange: "bpsOpenChange", bpsBlur: "bpsBlur", bpsFocus: "bpsFocus" }, host: { properties: { "class.ant-select-in-form-item": "!!nzFormStatusService", "class.ant-select-lg": "bpsSize === \"large\"", "class.ant-select-sm": "bpsSize === \"small\"", "class.ant-select-show-arrow": "bpsShowArrow", "class.ant-select-disabled": "bpsDisabled", "class.ant-select-show-search": "(bpsShowSearch || bpsMode !== 'default') && !bpsDisabled", "class.ant-select-allow-clear": "bpsAllowClear", "class.ant-select-borderless": "bpsBorderless", "class.ant-select-open": "bpsOpen", "class.ant-select-focused": "bpsOpen || focused", "class.ant-select-single": "bpsMode === 'default'", "class.ant-select-multiple": "bpsMode !== 'default'", "class.ant-select-rtl": "dir === 'rtl'" }, classAttribute: "ant-select" }, providers: [
            NzDestroyService,
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => BpsSelectComponent),
                multi: true
            }
        ], queries: [{ propertyName: "listOfNzOptionComponent", predicate: BpsOptionComponent, descendants: true }, { propertyName: "listOfNzOptionGroupComponent", predicate: BpsOptionGroupComponent, descendants: true }], viewQueries: [{ propertyName: "originElement", first: true, predicate: CdkOverlayOrigin, descendants: true, read: ElementRef, static: true }, { propertyName: "cdkConnectedOverlay", first: true, predicate: CdkConnectedOverlay, descendants: true, static: true }, { propertyName: "bpsSelectTopControlComponent", first: true, predicate: BpsSelectTopControlComponent, descendants: true, static: true }, { propertyName: "bpsOptionGroupComponentElement", first: true, predicate: BpsOptionGroupComponent, descendants: true, read: ElementRef, static: true }, { propertyName: "bpsSelectTopControlComponentElement", first: true, predicate: BpsSelectTopControlComponent, descendants: true, read: ElementRef, static: true }], exportAs: ["bpsSelect"], usesOnChanges: true, ngImport: i0, template: `
    <bps-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [bpsId]="bpsId"
      [open]="bpsOpen"
      [disabled]="bpsDisabled"
      [mode]="bpsMode"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="bpsMaxTagPlaceholder"
      [removeIcon]="bpsRemoveIcon"
      [placeHolder]="bpsPlaceHolder"
      [maxTagCount]="bpsMaxTagCount"
      [customTemplate]="bpsCustomTemplate"
      [tokenSeparators]="bpsTokenSeparators"
      [showSearch]="bpsShowSearch"
      [autofocus]="bpsAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
    ></bps-select-top-control>
    <bps-select-arrow
      *ngIf="bpsShowArrow || (hasFeedback && !!status)"
      [showArrow]="bpsShowArrow"
      [loading]="bpsLoading"
      [search]="bpsOpen && bpsShowSearch"
      [suffixIcon]="bpsSuffixIcon"
      [feedbackIcon]="feedbackIconTpl"
    >
      <ng-template #feedbackIconTpl>
        <bps-form-item-feedback-icon *ngIf="hasFeedback && !!status" [status]="status"></bps-form-item-feedback-icon>
      </ng-template>
    </bps-select-arrow>

    <bps-select-clear
      *ngIf="bpsAllowClear && !bpsDisabled && listOfValue.length"
      [clearIcon]="bpsClearIcon"
      (clear)="onClearSelection()"
    ></bps-select-clear>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="bpsBackdrop"
      [cdkConnectedOverlayMinWidth]="$any(bpsDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(bpsDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="bpsDropdownClassName!"
      [cdkConnectedOverlayOpen]="bpsOpen"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
    >
      <bps-option-container
        [ngStyle]="bpsDropdownStyle"
        [itemSize]="bpsOptionHeightPx"
        [maxItemLength]="bpsOptionOverflowSize"
        [matchWidth]="bpsDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottomLeft'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'topLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="dropDownPosition === 'bottomRight'"
        [class.ant-select-dropdown-placement-topRight]="dropDownPosition === 'topRight'"
        [@slideMotion]="'enter'"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="bpsMenuItemSelectedIcon"
        [notFoundContent]="bpsNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="bpsDropdownRender"
        [compareWith]="compareWith"
        [mode]="bpsMode"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="bpsScrollToBottom.emit()"
      ></bps-option-container>
    </ng-template>
  `, isInline: true, styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none;max-width:calc(100% - 29px)}.ant-select-disabled .ant-select-selection{cursor:url(/assets/bps-icons/sps_inaccessible_icon_grey.svg),auto}.ant-select-open .ant-select-selection-selected-value{color:#666}\n"], dependencies: [{ kind: "directive", type: i2$1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2$1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2$4.CdkConnectedOverlay, selector: "[cdk-connected-overlay], [connected-overlay], [cdkConnectedOverlay]", inputs: ["cdkConnectedOverlayOrigin", "cdkConnectedOverlayPositions", "cdkConnectedOverlayPositionStrategy", "cdkConnectedOverlayOffsetX", "cdkConnectedOverlayOffsetY", "cdkConnectedOverlayWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayMinHeight", "cdkConnectedOverlayBackdropClass", "cdkConnectedOverlayPanelClass", "cdkConnectedOverlayViewportMargin", "cdkConnectedOverlayScrollStrategy", "cdkConnectedOverlayOpen", "cdkConnectedOverlayDisableClose", "cdkConnectedOverlayTransformOriginOn", "cdkConnectedOverlayHasBackdrop", "cdkConnectedOverlayLockPosition", "cdkConnectedOverlayFlexibleDimensions", "cdkConnectedOverlayGrowAfterOpen", "cdkConnectedOverlayPush"], outputs: ["backdropClick", "positionChange", "attach", "detach", "overlayKeydown", "overlayOutsideClick"], exportAs: ["cdkConnectedOverlay"] }, { kind: "directive", type: i2$4.CdkOverlayOrigin, selector: "[cdk-overlay-origin], [overlay-origin], [cdkOverlayOrigin]", exportAs: ["cdkOverlayOrigin"] }, { kind: "directive", type: i1$1.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }, { kind: "directive", type: i6.NzConnectedOverlayDirective, selector: "[cdkConnectedOverlay][nzConnectedOverlay]", inputs: ["nzArrowPointAtCenter"], exportAs: ["nzConnectedOverlay"] }, { kind: "component", type: BpsOptionContainerComponent, selector: "bps-option-container", inputs: ["notFoundContent", "menuItemSelectedIcon", "dropdownRender", "activatedValue", "listOfSelectedValue", "compareWith", "mode", "matchWidth", "itemSize", "maxItemLength", "listOfContainerItem"], outputs: ["itemClick", "scrollToBottom"], exportAs: ["bpsOptionContainer"] }, { kind: "component", type: BpsSelectArrowComponent, selector: "bps-select-arrow", inputs: ["loading", "search", "showArrow", "suffixIcon", "feedbackIcon"] }, { kind: "component", type: BpsSelectClearComponent, selector: "bps-select-clear", inputs: ["clearIcon"], outputs: ["clear"] }, { kind: "component", type: BpsSelectTopControlComponent, selector: "bps-select-top-control", inputs: ["bpsId", "showSearch", "placeHolder", "open", "maxTagCount", "autofocus", "disabled", "mode", "customTemplate", "maxTagPlaceholder", "removeIcon", "listOfTopItem", "tokenSeparators"], outputs: ["tokenize", "inputValueChange", "deleteItem"], exportAs: ["bpsSelectTopControl"] }, { kind: "component", type: BpsFormItemFeedbackIconComponent, selector: "bps-form-item-feedback-icon", inputs: ["status"], exportAs: ["bpsFormFeedbackIcon"] }], animations: [slideMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    WithConfig$1()
], BpsSelectComponent.prototype, "bpsSuffixIcon", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsAllowClear", void 0);
__decorate([
    WithConfig$1(),
    InputBoolean()
], BpsSelectComponent.prototype, "bpsBorderless", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsShowSearch", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsLoading", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsAutoFocus", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsAutoClearSearchValue", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsServerSearch", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsDisabled", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsOpen", void 0);
__decorate([
    InputBoolean()
], BpsSelectComponent.prototype, "bpsSelectOnTab", void 0);
__decorate([
    WithConfig$1(),
    InputBoolean()
], BpsSelectComponent.prototype, "bpsBackdrop", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsSelectComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-select', exportAs: 'bpsSelect', preserveWhitespaces: false, providers: [
                        NzDestroyService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(() => BpsSelectComponent),
                            multi: true
                        }
                    ], changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, animations: [slideMotion], template: `
    <bps-select-top-control
      cdkOverlayOrigin
      #origin="cdkOverlayOrigin"
      [bpsId]="bpsId"
      [open]="bpsOpen"
      [disabled]="bpsDisabled"
      [mode]="bpsMode"
      [@.disabled]="!!noAnimation?.nzNoAnimation"
      [nzNoAnimation]="noAnimation?.nzNoAnimation"
      [maxTagPlaceholder]="bpsMaxTagPlaceholder"
      [removeIcon]="bpsRemoveIcon"
      [placeHolder]="bpsPlaceHolder"
      [maxTagCount]="bpsMaxTagCount"
      [customTemplate]="bpsCustomTemplate"
      [tokenSeparators]="bpsTokenSeparators"
      [showSearch]="bpsShowSearch"
      [autofocus]="bpsAutoFocus"
      [listOfTopItem]="listOfTopItem"
      (inputValueChange)="onInputValueChange($event)"
      (tokenize)="onTokenSeparate($event)"
      (deleteItem)="onItemDelete($event)"
      (keydown)="onKeyDown($event)"
    ></bps-select-top-control>
    <bps-select-arrow
      *ngIf="bpsShowArrow || (hasFeedback && !!status)"
      [showArrow]="bpsShowArrow"
      [loading]="bpsLoading"
      [search]="bpsOpen && bpsShowSearch"
      [suffixIcon]="bpsSuffixIcon"
      [feedbackIcon]="feedbackIconTpl"
    >
      <ng-template #feedbackIconTpl>
        <bps-form-item-feedback-icon *ngIf="hasFeedback && !!status" [status]="status"></bps-form-item-feedback-icon>
      </ng-template>
    </bps-select-arrow>

    <bps-select-clear
      *ngIf="bpsAllowClear && !bpsDisabled && listOfValue.length"
      [clearIcon]="bpsClearIcon"
      (clear)="onClearSelection()"
    ></bps-select-clear>
    <ng-template
      cdkConnectedOverlay
      nzConnectedOverlay
      [cdkConnectedOverlayHasBackdrop]="bpsBackdrop"
      [cdkConnectedOverlayMinWidth]="$any(bpsDropdownMatchSelectWidth ? null : triggerWidth)"
      [cdkConnectedOverlayWidth]="$any(bpsDropdownMatchSelectWidth ? triggerWidth : null)"
      [cdkConnectedOverlayOrigin]="origin"
      [cdkConnectedOverlayTransformOriginOn]="'.ant-select-dropdown'"
      [cdkConnectedOverlayPanelClass]="bpsDropdownClassName!"
      [cdkConnectedOverlayOpen]="bpsOpen"
      [cdkConnectedOverlayPositions]="positions"
      (overlayOutsideClick)="onClickOutside($event)"
      (detach)="setOpenState(false)"
      (positionChange)="onPositionChange($event)"
    >
      <bps-option-container
        [ngStyle]="bpsDropdownStyle"
        [itemSize]="bpsOptionHeightPx"
        [maxItemLength]="bpsOptionOverflowSize"
        [matchWidth]="bpsDropdownMatchSelectWidth"
        [class.ant-select-dropdown-placement-bottomLeft]="dropDownPosition === 'bottomLeft'"
        [class.ant-select-dropdown-placement-topLeft]="dropDownPosition === 'topLeft'"
        [class.ant-select-dropdown-placement-bottomRight]="dropDownPosition === 'bottomRight'"
        [class.ant-select-dropdown-placement-topRight]="dropDownPosition === 'topRight'"
        [@slideMotion]="'enter'"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        [listOfContainerItem]="listOfContainerItem"
        [menuItemSelectedIcon]="bpsMenuItemSelectedIcon"
        [notFoundContent]="bpsNotFoundContent"
        [activatedValue]="activatedValue"
        [listOfSelectedValue]="listOfValue"
        [dropdownRender]="bpsDropdownRender"
        [compareWith]="compareWith"
        [mode]="bpsMode"
        (keydown)="onKeyDown($event)"
        (itemClick)="onItemClick($event)"
        (scrollToBottom)="bpsScrollToBottom.emit()"
      ></bps-option-container>
    </ng-template>
  `, host: {
                        class: 'ant-select',
                        '[class.ant-select-in-form-item]': '!!nzFormStatusService',
                        '[class.ant-select-lg]': 'bpsSize === "large"',
                        '[class.ant-select-sm]': 'bpsSize === "small"',
                        '[class.ant-select-show-arrow]': `bpsShowArrow`,
                        '[class.ant-select-disabled]': 'bpsDisabled',
                        '[class.ant-select-show-search]': `(bpsShowSearch || bpsMode !== 'default') && !bpsDisabled`,
                        '[class.ant-select-allow-clear]': 'bpsAllowClear',
                        '[class.ant-select-borderless]': 'bpsBorderless',
                        '[class.ant-select-open]': 'bpsOpen',
                        '[class.ant-select-focused]': 'bpsOpen || focused',
                        '[class.ant-select-single]': `bpsMode === 'default'`,
                        '[class.ant-select-multiple]': `bpsMode !== 'default'`,
                        '[class.ant-select-rtl]': `dir === 'rtl'`
                    }, styles: [".ant-select-dropdown{background-color:#363636;font-size:11px;border-radius:0 0 10px 10px;margin-top:0!important;box-shadow:none;max-width:calc(100% - 29px)}.ant-select-disabled .ant-select-selection{cursor:url(/assets/bps-icons/sps_inaccessible_icon_grey.svg),auto}.ant-select-open .ant-select-selection-selected-value{color:#666}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i2$6.NzDestroyService }, { type: i2$3.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3$3.Platform }, { type: i1.FocusMonitor }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i1$1.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }, { type: i3$1.NzFormStatusService, decorators: [{
                    type: Optional
                }] }, { type: i3$1.NzFormNoStatusService, decorators: [{
                    type: Optional
                }] }]; }, propDecorators: { bpsId: [{
                type: Input
            }], bpsSize: [{
                type: Input
            }], bpsStatus: [{
                type: Input
            }], bpsOptionHeightPx: [{
                type: Input
            }], bpsOptionOverflowSize: [{
                type: Input
            }], bpsDropdownClassName: [{
                type: Input
            }], bpsDropdownMatchSelectWidth: [{
                type: Input
            }], bpsDropdownStyle: [{
                type: Input
            }], bpsNotFoundContent: [{
                type: Input
            }], bpsPlaceHolder: [{
                type: Input
            }], bpsPlacement: [{
                type: Input
            }], bpsMaxTagCount: [{
                type: Input
            }], bpsDropdownRender: [{
                type: Input
            }], bpsCustomTemplate: [{
                type: Input
            }], bpsSuffixIcon: [{
                type: Input
            }], bpsClearIcon: [{
                type: Input
            }], bpsRemoveIcon: [{
                type: Input
            }], bpsMenuItemSelectedIcon: [{
                type: Input
            }], bpsTokenSeparators: [{
                type: Input
            }], bpsMaxTagPlaceholder: [{
                type: Input
            }], bpsMaxMultipleCount: [{
                type: Input
            }], bpsMode: [{
                type: Input
            }], bpsFilterOption: [{
                type: Input
            }], compareWith: [{
                type: Input
            }], bpsAllowClear: [{
                type: Input
            }], bpsBorderless: [{
                type: Input
            }], bpsShowSearch: [{
                type: Input
            }], bpsLoading: [{
                type: Input
            }], bpsAutoFocus: [{
                type: Input
            }], bpsAutoClearSearchValue: [{
                type: Input
            }], bpsServerSearch: [{
                type: Input
            }], bpsDisabled: [{
                type: Input
            }], bpsOpen: [{
                type: Input
            }], bpsSelectOnTab: [{
                type: Input
            }], bpsBackdrop: [{
                type: Input
            }], bpsOptions: [{
                type: Input
            }], bpsShowArrow: [{
                type: Input
            }], bpsOnSearch: [{
                type: Output
            }], bpsScrollToBottom: [{
                type: Output
            }], bpsOpenChange: [{
                type: Output
            }], bpsBlur: [{
                type: Output
            }], bpsFocus: [{
                type: Output
            }], originElement: [{
                type: ViewChild,
                args: [CdkOverlayOrigin, { static: true, read: ElementRef }]
            }], cdkConnectedOverlay: [{
                type: ViewChild,
                args: [CdkConnectedOverlay, { static: true }]
            }], bpsSelectTopControlComponent: [{
                type: ViewChild,
                args: [BpsSelectTopControlComponent, { static: true }]
            }], listOfNzOptionComponent: [{
                type: ContentChildren,
                args: [BpsOptionComponent, { descendants: true }]
            }], listOfNzOptionGroupComponent: [{
                type: ContentChildren,
                args: [BpsOptionGroupComponent, { descendants: true }]
            }], bpsOptionGroupComponentElement: [{
                type: ViewChild,
                args: [BpsOptionGroupComponent, { static: true, read: ElementRef }]
            }], bpsSelectTopControlComponentElement: [{
                type: ViewChild,
                args: [BpsSelectTopControlComponent, { static: true, read: ElementRef }]
            }] } });

class BpsComponentsLibModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsComponentsLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.2.12", ngImport: i0, type: BpsComponentsLibModule, declarations: [BpsModalComponent,
            BpsModalFooterDirective,
            BpsTreeComponent,
            BpsTreeNodeComponent,
            BpsDropDownDirective,
            BpsDropdownMenuComponent,
            BpsDropDownADirective,
            BpsTableComponent,
            BpsListComponent,
            BpsListItemComponent,
            BpsListItemMetaComponent,
            BpsTooltipDirective,
            BpsToolTipComponent,
            BpsPopoverDirective,
            BpsPopoverComponent,
            BpsComponentsLibComponent,
            BpsInputGroupComponent,
            BpsInputGroupSlotComponent,
            BpsTextareaCountComponent,
            BpsInputDirective,
            BpsAutosizeDirective,
            BpsOptionComponent,
            BpsOptionContainerComponent,
            BpsOptionGroupComponent,
            BpsOptionItemComponent,
            BpsOptionItemGroupComponent,
            BpsSelectComponent,
            BpsSelectArrowComponent,
            BpsSelectClearComponent,
            BpsSelectItemComponent,
            BpsSelectPlaceholderComponent,
            BpsSelectSearchComponent,
            BpsSelectTopControlComponent,
            BpsFormDirective,
            BpsFormExplainComponent,
            BpsFormControlComponent,
            BpsFormExtraComponent,
            BpsFormItemComponent,
            BpsFormLabelComponent,
            BpsFormSplitComponent,
            BpsFormTextComponent,
            BpsButtonComponent,
            BpsButtonGroupComponent,
            BpsSwitchComponent,
            BpsCheckboxGroupComponent,
            BpsCheckboxComponent,
            BpsRadioComponent,
            BpsRadioGroupComponent,
            BpsRadioButtonDirective,
            BpsCollapseComponent,
            BpsCollapsePanelComponent,
            BpsTableExpandablePanelComponent,
            BpsConfigurationSelectorComponent,
            BpsTextEditorComponent,
            BpsGridComponent,
            NzToCssUnitPipe,
            BpsFormItemFeedbackIconComponent,
            BpsDropdownMenuComponent,
            BpsDropdownButtonDirective], imports: [NzHighlightModule,
            NzTreeModule,
            NzModalControlServiceModule,
            CommonModule,
            NzAddOnModule,
            NzPipesModule,
            NzIconModule,
            OverlayModule,
            NzNoAnimationModule,
            NzToolTipModule,
            NzOverlayModule,
            NzEmptyModule,
            NzFormModule,
            FormsModule,
            ObserversModule,
            NzWaveModule,
            NzSpinModule,
            NzGridModule,
            NzAvatarModule,
            NzTableModule,
            EditorModule,
            NzMenuModule,
            NzResizableModule,
            NzSelectModule], exports: [NzTreeModule,
            BpsGridComponent,
            BpsModalComponent,
            BpsModalFooterDirective,
            BpsTreeComponent,
            BpsTreeNodeComponent,
            BpsDropDownDirective,
            BpsDropdownMenuComponent,
            BpsDropDownADirective,
            BpsConfigurationSelectorComponent,
            BpsTableComponent,
            BpsListComponent,
            BpsListItemComponent,
            BpsListItemMetaComponent,
            BpsPopoverDirective,
            BpsPopoverComponent,
            BpsComponentsLibComponent,
            BpsComponentsLibComponent,
            BpsInputGroupComponent,
            BpsInputDirective,
            BpsInputGroupComponent,
            BpsInputGroupSlotComponent,
            BpsTextareaCountComponent,
            BpsAutosizeDirective,
            BpsOptionComponent,
            BpsOptionContainerComponent,
            BpsOptionGroupComponent,
            BpsOptionItemComponent,
            BpsOptionItemGroupComponent,
            BpsSelectComponent,
            BpsSelectArrowComponent,
            BpsSelectClearComponent,
            BpsSelectItemComponent,
            BpsSelectPlaceholderComponent,
            BpsSelectSearchComponent,
            BpsSelectTopControlComponent,
            BpsFormDirective,
            NzGridModule,
            BpsFormExplainComponent,
            BpsFormControlComponent,
            BpsFormExtraComponent,
            BpsFormItemComponent,
            BpsFormLabelComponent,
            BpsFormSplitComponent,
            BpsFormTextComponent,
            BpsButtonComponent,
            BpsButtonGroupComponent,
            BpsSwitchComponent,
            BpsCheckboxGroupComponent,
            BpsCheckboxComponent,
            BpsRadioComponent,
            BpsRadioGroupComponent,
            BpsRadioButtonDirective,
            BpsCollapseComponent,
            BpsCollapsePanelComponent,
            BpsTooltipDirective,
            BpsToolTipComponent,
            BpsTableExpandablePanelComponent,
            BpsTextEditorComponent,
            NzFormModule,
            BpsDropdownMenuComponent,
            BpsDropdownButtonDirective,
            NzMenuModule,
            NzSelectModule] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsComponentsLibModule, providers: [
            { provide: NZ_I18N, useValue: en_US }
        ], imports: [NzHighlightModule,
            NzTreeModule,
            NzModalControlServiceModule,
            CommonModule,
            NzAddOnModule,
            NzPipesModule,
            NzIconModule,
            OverlayModule,
            NzNoAnimationModule,
            NzToolTipModule,
            NzOverlayModule,
            NzEmptyModule,
            NzFormModule,
            FormsModule,
            ObserversModule,
            NzWaveModule,
            NzSpinModule,
            NzGridModule,
            NzAvatarModule,
            NzTableModule,
            EditorModule,
            NzMenuModule,
            NzResizableModule,
            NzSelectModule, NzTreeModule,
            NzGridModule,
            NzFormModule,
            NzMenuModule,
            NzSelectModule] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsComponentsLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        BpsModalComponent,
                        BpsModalFooterDirective,
                        BpsTreeComponent,
                        BpsTreeNodeComponent,
                        BpsDropDownDirective,
                        BpsDropdownMenuComponent,
                        BpsDropDownADirective,
                        BpsTableComponent,
                        BpsListComponent,
                        BpsListItemComponent,
                        BpsListItemMetaComponent,
                        BpsTooltipDirective,
                        BpsToolTipComponent,
                        BpsPopoverDirective,
                        BpsPopoverComponent,
                        BpsComponentsLibComponent,
                        BpsInputGroupComponent,
                        BpsInputGroupSlotComponent,
                        BpsTextareaCountComponent,
                        BpsInputDirective,
                        BpsAutosizeDirective,
                        BpsOptionComponent,
                        BpsOptionContainerComponent,
                        BpsOptionGroupComponent,
                        BpsOptionItemComponent,
                        BpsOptionItemGroupComponent,
                        BpsSelectComponent,
                        BpsSelectArrowComponent,
                        BpsSelectClearComponent,
                        BpsSelectItemComponent,
                        BpsSelectPlaceholderComponent,
                        BpsSelectSearchComponent,
                        BpsSelectTopControlComponent,
                        BpsFormDirective,
                        BpsFormExplainComponent,
                        BpsFormControlComponent,
                        BpsFormExtraComponent,
                        BpsFormItemComponent,
                        BpsFormLabelComponent,
                        BpsFormSplitComponent,
                        BpsFormTextComponent,
                        BpsButtonComponent,
                        BpsButtonGroupComponent,
                        BpsSwitchComponent,
                        BpsCheckboxGroupComponent,
                        BpsCheckboxComponent,
                        BpsRadioComponent,
                        BpsRadioGroupComponent,
                        BpsRadioButtonDirective,
                        BpsCollapseComponent,
                        BpsCollapsePanelComponent,
                        BpsTableExpandablePanelComponent,
                        BpsConfigurationSelectorComponent,
                        BpsTextEditorComponent,
                        BpsGridComponent,
                        NzToCssUnitPipe,
                        BpsFormItemFeedbackIconComponent,
                        BpsDropdownMenuComponent,
                        BpsDropdownButtonDirective,
                    ],
                    imports: [
                        NzHighlightModule,
                        NzTreeModule,
                        NzModalControlServiceModule,
                        CommonModule,
                        NzAddOnModule,
                        NzPipesModule,
                        NzIconModule,
                        OverlayModule,
                        NzNoAnimationModule,
                        NzToolTipModule,
                        NzOverlayModule,
                        NzEmptyModule,
                        NzFormModule,
                        FormsModule,
                        ObserversModule,
                        NzWaveModule,
                        NzSpinModule,
                        NzGridModule,
                        NzAvatarModule,
                        NzTableModule,
                        EditorModule,
                        NzMenuModule,
                        NzResizableModule,
                        NzSelectModule
                    ],
                    exports: [
                        NzTreeModule,
                        BpsGridComponent,
                        BpsModalComponent,
                        BpsModalFooterDirective,
                        BpsTreeComponent,
                        BpsTreeNodeComponent,
                        BpsDropDownDirective,
                        BpsDropdownMenuComponent,
                        BpsDropDownADirective,
                        BpsConfigurationSelectorComponent,
                        BpsTableComponent,
                        BpsListComponent,
                        BpsListItemComponent,
                        BpsListItemMetaComponent,
                        BpsPopoverDirective,
                        BpsPopoverComponent,
                        BpsComponentsLibComponent,
                        BpsComponentsLibComponent,
                        BpsInputGroupComponent,
                        BpsInputDirective,
                        BpsInputGroupComponent,
                        BpsInputGroupSlotComponent,
                        BpsTextareaCountComponent,
                        BpsAutosizeDirective,
                        BpsOptionComponent,
                        BpsOptionContainerComponent,
                        BpsOptionGroupComponent,
                        BpsOptionItemComponent,
                        BpsOptionItemGroupComponent,
                        BpsSelectComponent,
                        BpsSelectArrowComponent,
                        BpsSelectClearComponent,
                        BpsSelectItemComponent,
                        BpsSelectPlaceholderComponent,
                        BpsSelectSearchComponent,
                        BpsSelectTopControlComponent,
                        BpsFormDirective,
                        NzGridModule,
                        BpsFormExplainComponent,
                        BpsFormControlComponent,
                        BpsFormExtraComponent,
                        BpsFormItemComponent,
                        BpsFormLabelComponent,
                        BpsFormSplitComponent,
                        BpsFormTextComponent,
                        BpsButtonComponent,
                        BpsButtonGroupComponent,
                        BpsSwitchComponent,
                        BpsCheckboxGroupComponent,
                        BpsCheckboxComponent,
                        BpsRadioComponent,
                        BpsRadioGroupComponent,
                        BpsRadioButtonDirective,
                        BpsCollapseComponent,
                        BpsCollapsePanelComponent,
                        BpsTooltipDirective,
                        BpsToolTipComponent,
                        BpsTableExpandablePanelComponent,
                        BpsTextEditorComponent,
                        NzFormModule,
                        BpsDropdownMenuComponent,
                        BpsDropdownButtonDirective,
                        NzMenuModule,
                        NzSelectModule
                    ],
                    providers: [
                        { provide: NZ_I18N, useValue: en_US }
                    ]
                }]
        }] });

/*
 * Public API Surface of bps-components-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { BpsAutosizeDirective, BpsButtonComponent, BpsButtonGroupComponent, BpsCheckboxComponent, BpsCheckboxGroupComponent, BpsCollapseComponent, BpsCollapsePanelComponent, BpsComponentsLibComponent, BpsComponentsLibModule, BpsComponentsLibService, BpsConfigurationSelectorComponent, BpsDropDownADirective, BpsDropDownDirective, BpsDropdownButtonDirective, BpsDropdownMenuComponent, BpsFormControlComponent, BpsFormDirective, BpsFormExplainComponent, BpsFormExtraComponent, BpsFormItemComponent, BpsFormLabelComponent, BpsFormSplitComponent, BpsFormTextComponent, BpsGridComponent, BpsInputDirective, BpsInputGroupComponent, BpsInputGroupSlotComponent, BpsListComponent, BpsListItemComponent, BpsListItemMetaComponent, BpsModalComponent, BpsModalFooterDirective, BpsOptionComponent, BpsOptionContainerComponent, BpsOptionGroupComponent, BpsOptionItemComponent, BpsOptionItemGroupComponent, BpsPopoverComponent, BpsPopoverDirective, BpsRadioButtonDirective, BpsRadioComponent, BpsRadioGroupComponent, BpsSelectArrowComponent, BpsSelectClearComponent, BpsSelectComponent, BpsSelectItemComponent, BpsSelectPlaceholderComponent, BpsSelectSearchComponent, BpsSelectTopControlComponent, BpsSwitchComponent, BpsTableComponent, BpsTableExpandablePanelComponent, BpsTextEditorComponent, BpsTextareaCountComponent, BpsToolTipComponent, BpsTooltipDirective, BpsTreeComponent, BpsTreeNodeComponent, CeldType, MODAL_ANIMATE_DURATION, NzCheckboxWrapperComponent, NzInputGroupWhitSuffixOrPrefixDirective, NzTreeNode, NzTreeServiceFactory, TemplateType, WRAP_CLASS_NAME };
//# sourceMappingURL=bps-components-lib.mjs.map
