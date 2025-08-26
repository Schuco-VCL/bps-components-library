import { __decorate } from "tslib";
import { Directive, Input, Optional, Self } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged, filter, takeUntil } from 'rxjs/operators';
import { NzFormItemFeedbackIconComponent } from 'ng-zorro-antd/core/form';
import { InputBoolean, getStatusClassNames } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/form";
export class BpsInputDirective {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsInputDirective, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i2.Directionality, optional: true }, { token: i3.NzFormStatusService, optional: true }, { token: i3.NzFormNoStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: BpsInputDirective, selector: "input[bps-input],textarea[bps-input]", inputs: { borderless: "borderless", size: "size", nzStepperless: "nzStepperless", nzStatus: "nzStatus", opened: "opened", disabled: "disabled" }, host: { properties: { "class.bps-input-opened": "opened", "class.ant-input-disabled": "disabled", "class.ant-input-borderless": "borderless", "class.ant-input-lg": "size === 'large'", "class.ant-input-sm": "size === 'small'", "attr.disabled": "disabled || null", "class.ant-input-rtl": "dir=== 'rtl'", "class.ant-input-stepperless": "nzStepperless" }, classAttribute: "ant-input" }, exportAs: ["bpsInput"], usesOnChanges: true, ngImport: i0 }); }
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
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsInputDirective, decorators: [{
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
        }], ctorParameters: () => [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3.NzFormStatusService, decorators: [{
                    type: Optional
                }] }, { type: i3.NzFormNoStatusService, decorators: [{
                    type: Optional
                }] }], propDecorators: { borderless: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWlucHV0L2Jwcy1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCxTQUFTLEVBRVQsS0FBSyxFQUlMLFFBQVEsRUFFUixJQUFJLEVBR0wsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSwrQkFBK0IsRUFBOEMsTUFBTSx5QkFBeUIsQ0FBQztBQUV0SCxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBaUI1RSxNQUFNLE9BQU8saUJBQWlCO0lBUTVCLElBQ0ksUUFBUTtRQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN2RCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ2pDLENBQUM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUNELElBQUksUUFBUSxDQUFDLEtBQWM7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLEdBQUcsS0FBSyxFQUFFLEtBQUssT0FBTyxDQUFDO0lBQzNELENBQUM7SUFhRCxZQUM2QixTQUFvQixFQUN2QyxRQUFtQixFQUNuQixVQUFzQixFQUNwQixRQUEwQixFQUNoQixjQUE4QixFQUM5QixtQkFBeUMsRUFDMUMscUJBQTZDO1FBTnJDLGNBQVMs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QUNHLElBQUk7c0JBQVosS0FBSztnQkFDbUIsYUFBYTtzQkFBckMsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNtQixNQUFNO3NCQUE5QixLQUFLO2dCQUVGLFFBQVE7c0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFJlbmRlcmVyMixcclxuICBTZWxmLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpGb3JtSXRlbUZlZWRiYWNrSWNvbkNvbXBvbmVudCwgTnpGb3JtTm9TdGF0dXNTZXJ2aWNlLCBOekZvcm1TdGF0dXNTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2Zvcm0nO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE5nQ2xhc3NJbnRlcmZhY2UsIE56U2l6ZUxEU1R5cGUsIE56U3RhdHVzLCBOelZhbGlkYXRlU3RhdHVzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuLCBnZXRTdGF0dXNDbGFzc05hbWVzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpbnB1dFticHMtaW5wdXRdLHRleHRhcmVhW2Jwcy1pbnB1dF0nLFxyXG4gIGV4cG9ydEFzOiAnYnBzSW5wdXQnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWlucHV0JyxcclxuICAgICdbY2xhc3MuYnBzLWlucHV0LW9wZW5lZF0nOiAnb3BlbmVkJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ib3JkZXJsZXNzXSc6ICdib3JkZXJsZXNzJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWxnXSc6IGBzaXplID09PSAnbGFyZ2UnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXNtXSc6IGBzaXplID09PSAnc21hbGwnYCxcclxuICAgICdbYXR0ci5kaXNhYmxlZF0nOiAnZGlzYWJsZWQgfHwgbnVsbCcsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1ydGxdJzogYGRpcj09PSAncnRsJ2AsXHJcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zdGVwcGVybGVzc10nOiBgbnpTdGVwcGVybGVzc2BcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNJbnB1dERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9kaXNhYmxlZDogQm9vbGVhbklucHV0O1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9ib3JkZXJsZXNzOiBCb29sZWFuSW5wdXQ7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGJvcmRlcmxlc3MgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelN0ZXBwZXJsZXNzOiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBuelN0YXR1czogTnpTdGF0dXMgPSAnJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgb3BlbmVkID0gZmFsc2U7XHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgJiYgdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmRpc2FibGVkO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xyXG4gIH1cclxuICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2Rpc2FibGVkID0gdmFsdWUgIT0gbnVsbCAmJiBgJHt2YWx1ZX1gICE9PSAnZmFsc2UnO1xyXG4gIH1cclxuICBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBkaXNhYmxlZCQgPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgLy8gc3RhdHVzXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWlucHV0JztcclxuICBzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMgPSAnJztcclxuICBzdGF0dXNDbHM6IE5nQ2xhc3NJbnRlcmZhY2UgPSB7fTtcclxuICBoYXNGZWVkYmFjazogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGZlZWRiYWNrUmVmOiBDb21wb25lbnRSZWY8TnpGb3JtSXRlbUZlZWRiYWNrSWNvbkNvbXBvbmVudD4gfCBudWxsID0gbnVsbDtcclxuICBjb21wb25lbnRzOiBBcnJheTxDb21wb25lbnRSZWY8TnpGb3JtSXRlbUZlZWRiYWNrSWNvbkNvbXBvbmVudD4+ID0gW107XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQFNlbGYoKSBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcm90ZWN0ZWQgaG9zdFZpZXc6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgbnpGb3JtU3RhdHVzU2VydmljZT86IE56Rm9ybVN0YXR1c1NlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgbnpGb3JtTm9TdGF0dXNTZXJ2aWNlPzogTnpGb3JtTm9TdGF0dXNTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56Rm9ybVN0YXR1c1NlcnZpY2U/LmZvcm1TdGF0dXNDaGFuZ2VzXHJcbiAgICAgIC5waXBlKFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwcmUsIGN1cikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHByZS5zdGF0dXMgPT09IGN1ci5zdGF0dXMgJiYgcHJlLmhhc0ZlZWRiYWNrID09PSBjdXIuaGFzRmVlZGJhY2s7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoeyBzdGF0dXMsIGhhc0ZlZWRiYWNrIH0pID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyhzdGF0dXMsIGhhc0ZlZWRiYWNrKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMubmdDb250cm9sKSB7XHJcbiAgICAgIHRoaXMubmdDb250cm9sLnN0YXR1c0NoYW5nZXNcclxuICAgICAgICA/LnBpcGUoXHJcbiAgICAgICAgICBmaWx0ZXIoKCkgPT4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQgIT09IG51bGwpLFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5kaXNhYmxlZCQubmV4dCh0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBkaXNhYmxlZCwgbnpTdGF0dXMgfSA9IGNoYW5nZXM7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5kaXNhYmxlZCQubmV4dCh0aGlzLmRpc2FibGVkKTtcclxuICAgIH1cclxuICAgIGlmIChuelN0YXR1cykge1xyXG4gICAgICB0aGlzLnNldFN0YXR1c1N0eWxlcyh0aGlzLm56U3RhdHVzLCB0aGlzLmhhc0ZlZWRiYWNrKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFN0YXR1c1N0eWxlcyhzdGF0dXM6IE56VmFsaWRhdGVTdGF0dXMsIGhhc0ZlZWRiYWNrOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAvLyBzZXQgaW5uZXIgc3RhdHVzXHJcbiAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuaGFzRmVlZGJhY2sgPSBoYXNGZWVkYmFjaztcclxuICAgIHRoaXMucmVuZGVyRmVlZGJhY2tJY29uKCk7XHJcbiAgICAvLyByZW5kZXIgc3RhdHVzIGlmIG56U3RhdHVzIGlzIHNldFxyXG4gICAgdGhpcy5zdGF0dXNDbHMgPSBnZXRTdGF0dXNDbGFzc05hbWVzKHRoaXMucHJlZml4Q2xzLCBzdGF0dXMsIGhhc0ZlZWRiYWNrKTtcclxuICAgIE9iamVjdC5rZXlzKHRoaXMuc3RhdHVzQ2xzKS5mb3JFYWNoKHN0YXR1cyA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnN0YXR1c0Nsc1tzdGF0dXNdKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgc3RhdHVzKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdGF0dXMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVuZGVyRmVlZGJhY2tJY29uKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnN0YXR1cyB8fCAhdGhpcy5oYXNGZWVkYmFjayB8fCAhIXRoaXMubnpGb3JtTm9TdGF0dXNTZXJ2aWNlKSB7XHJcbiAgICAgIC8vIHJlbW92ZSBmZWVkYmFja1xyXG4gICAgICB0aGlzLmhvc3RWaWV3LmNsZWFyKCk7XHJcbiAgICAgIHRoaXMuZmVlZGJhY2tSZWYgPSBudWxsO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5mZWVkYmFja1JlZiA9IHRoaXMuZmVlZGJhY2tSZWYgfHwgdGhpcy5ob3N0Vmlldy5jcmVhdGVDb21wb25lbnQoTnpGb3JtSXRlbUZlZWRiYWNrSWNvbkNvbXBvbmVudCk7XHJcbiAgICB0aGlzLmZlZWRiYWNrUmVmLmxvY2F0aW9uLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYW50LWlucHV0LXN1ZmZpeCcpO1xyXG4gICAgdGhpcy5mZWVkYmFja1JlZi5pbnN0YW5jZS5zdGF0dXMgPSB0aGlzLnN0YXR1cztcclxuICAgIHRoaXMuZmVlZGJhY2tSZWYuaW5zdGFuY2UudXBkYXRlSWNvbigpO1xyXG4gIH1cclxufVxyXG4iXX0=