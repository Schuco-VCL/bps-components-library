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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsInputDirective, deps: [{ token: i1.NgControl, optional: true, self: true }, { token: i0.Renderer2 }, { token: i0.ElementRef }, { token: i0.ViewContainerRef }, { token: i2.Directionality, optional: true }, { token: i3.NzFormStatusService, optional: true }, { token: i3.NzFormNoStatusService, optional: true }], target: i0.ɵɵFactoryTarget.Directive }); }
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
        }], ctorParameters: function () { return [{ type: i1.NgControl, decorators: [{
                    type: Optional
                }, {
                    type: Self
                }] }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ViewContainerRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3.NzFormStatusService, decorators: [{
                    type: Optional
                }] }, { type: i3.NzFormNoStatusService, decorators: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWlucHV0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWlucHV0L2Jwcy1pbnB1dC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFFTCxTQUFTLEVBRVQsS0FBSyxFQUlMLFFBQVEsRUFFUixJQUFJLEVBR0wsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSwrQkFBK0IsRUFBOEMsTUFBTSx5QkFBeUIsQ0FBQztBQUV0SCxPQUFPLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBaUI1RSxNQUFNLE9BQU8saUJBQWlCO0lBUTVCLElBQ0ksUUFBUTtRQUNWLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDdEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztTQUNoQztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssSUFBSSxJQUFJLElBQUksR0FBRyxLQUFLLEVBQUUsS0FBSyxPQUFPLENBQUM7SUFDM0QsQ0FBQztJQWFELFlBQzZCLFNBQW9CLEVBQ3ZDLFFBQW1CLEVBQ25CLFVBQXNCLEVBQ3BCLFFBQTBCLEVBQ2hCLGNBQThCLEVBQzlCLG1CQUF5QyxFQUMxQyxxQkFBNkM7UUFOckMsY0FBUyxHQUFULFNBQVMs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Q21CLE1BQU07c0JBQTlCLEtBQUs7Z0JBRUYsUUFBUTtzQkFEWCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBDb21wb25lbnRSZWYsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNlbGYsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekZvcm1JdGVtRmVlZGJhY2tJY29uQ29tcG9uZW50LCBOekZvcm1Ob1N0YXR1c1NlcnZpY2UsIE56Rm9ybVN0YXR1c1NlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvZm9ybSc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgTmdDbGFzc0ludGVyZmFjZSwgTnpTaXplTERTVHlwZSwgTnpTdGF0dXMsIE56VmFsaWRhdGVTdGF0dXMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4sIGdldFN0YXR1c0NsYXNzTmFtZXMgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2lucHV0W2Jwcy1pbnB1dF0sdGV4dGFyZWFbYnBzLWlucHV0XScsXHJcbiAgZXhwb3J0QXM6ICdicHNJbnB1dCcsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtaW5wdXQnLFxyXG4gICAgJ1tjbGFzcy5icHMtaW5wdXQtb3BlbmVkXSc6ICdvcGVuZWQnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtZGlzYWJsZWRdJzogJ2Rpc2FibGVkJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LWJvcmRlcmxlc3NdJzogJ2JvcmRlcmxlc3MnLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtbGddJzogYHNpemUgPT09ICdsYXJnZSdgLFxyXG4gICAgJ1tjbGFzcy5hbnQtaW5wdXQtc21dJzogYHNpemUgPT09ICdzbWFsbCdgLFxyXG4gICAgJ1thdHRyLmRpc2FibGVkXSc6ICdkaXNhYmxlZCB8fCBudWxsJyxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXJ0bF0nOiBgZGlyPT09ICdydGwnYCxcclxuICAgICdbY2xhc3MuYW50LWlucHV0LXN0ZXBwZXJsZXNzXSc6IGBuelN0ZXBwZXJsZXNzYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0lucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2JvcmRlcmxlc3M6IEJvb2xlYW5JbnB1dDtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYm9yZGVybGVzcyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U3RlcHBlcmxlc3M6IGJvb2xlYW4gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56U3RhdHVzOiBOelN0YXR1cyA9ICcnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBvcGVuZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKVxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLm5nQ29udHJvbCAmJiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZGlzYWJsZWQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG4gIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fZGlzYWJsZWQgPSB2YWx1ZSAhPSBudWxsICYmIGAke3ZhbHVlfWAgIT09ICdmYWxzZSc7XHJcbiAgfVxyXG4gIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG4gIGRpc2FibGVkJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICAvLyBzdGF0dXNcclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtaW5wdXQnO1xyXG4gIHN0YXR1czogTnpWYWxpZGF0ZVN0YXR1cyA9ICcnO1xyXG4gIHN0YXR1c0NsczogTmdDbGFzc0ludGVyZmFjZSA9IHt9O1xyXG4gIGhhc0ZlZWRiYWNrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZmVlZGJhY2tSZWY6IENvbXBvbmVudFJlZjxOekZvcm1JdGVtRmVlZGJhY2tJY29uQ29tcG9uZW50PiB8IG51bGwgPSBudWxsO1xyXG4gIGNvbXBvbmVudHM6IEFycmF5PENvbXBvbmVudFJlZjxOekZvcm1JdGVtRmVlZGJhY2tJY29uQ29tcG9uZW50Pj4gPSBbXTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBAU2VsZigpIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByb3RlY3RlZCBob3N0VmlldzogVmlld0NvbnRhaW5lclJlZixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekZvcm1TdGF0dXNTZXJ2aWNlPzogTnpGb3JtU3RhdHVzU2VydmljZSxcclxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBuekZvcm1Ob1N0YXR1c1NlcnZpY2U/OiBOekZvcm1Ob1N0YXR1c1NlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpGb3JtU3RhdHVzU2VydmljZT8uZm9ybVN0YXR1c0NoYW5nZXNcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHByZSwgY3VyKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcHJlLnN0YXR1cyA9PT0gY3VyLnN0YXR1cyAmJiBwcmUuaGFzRmVlZGJhY2sgPT09IGN1ci5oYXNGZWVkYmFjaztcclxuICAgICAgICB9KSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKVxyXG4gICAgICAuc3Vic2NyaWJlKCh7IHN0YXR1cywgaGFzRmVlZGJhY2sgfSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHN0YXR1cywgaGFzRmVlZGJhY2spO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wpIHtcclxuICAgICAgdGhpcy5uZ0NvbnRyb2wuc3RhdHVzQ2hhbmdlc1xyXG4gICAgICAgID8ucGlwZShcclxuICAgICAgICAgIGZpbHRlcigoKSA9PiB0aGlzLm5nQ29udHJvbC5kaXNhYmxlZCAhPT0gbnVsbCksXHJcbiAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmRpc2FibGVkJC5uZXh0KHRoaXMubmdDb250cm9sLmRpc2FibGVkISk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IGRpc2FibGVkLCBuelN0YXR1cyB9ID0gY2hhbmdlcztcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmRpc2FibGVkJC5uZXh0KHRoaXMuZGlzYWJsZWQpO1xyXG4gICAgfVxyXG4gICAgaWYgKG56U3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdHVzU3R5bGVzKHRoaXMubnpTdGF0dXMsIHRoaXMuaGFzRmVlZGJhY2spO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0U3RhdHVzU3R5bGVzKHN0YXR1czogTnpWYWxpZGF0ZVN0YXR1cywgaGFzRmVlZGJhY2s6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIC8vIHNldCBpbm5lciBzdGF0dXNcclxuICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgdGhpcy5oYXNGZWVkYmFjayA9IGhhc0ZlZWRiYWNrO1xyXG4gICAgdGhpcy5yZW5kZXJGZWVkYmFja0ljb24oKTtcclxuICAgIC8vIHJlbmRlciBzdGF0dXMgaWYgbnpTdGF0dXMgaXMgc2V0XHJcbiAgICB0aGlzLnN0YXR1c0NscyA9IGdldFN0YXR1c0NsYXNzTmFtZXModGhpcy5wcmVmaXhDbHMsIHN0YXR1cywgaGFzRmVlZGJhY2spO1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5zdGF0dXNDbHMpLmZvckVhY2goc3RhdHVzID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdHVzQ2xzW3N0YXR1c10pIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBzdGF0dXMpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHN0YXR1cyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXJGZWVkYmFja0ljb24oKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdHVzIHx8ICF0aGlzLmhhc0ZlZWRiYWNrIHx8ICEhdGhpcy5uekZvcm1Ob1N0YXR1c1NlcnZpY2UpIHtcclxuICAgICAgLy8gcmVtb3ZlIGZlZWRiYWNrXHJcbiAgICAgIHRoaXMuaG9zdFZpZXcuY2xlYXIoKTtcclxuICAgICAgdGhpcy5mZWVkYmFja1JlZiA9IG51bGw7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmZlZWRiYWNrUmVmID0gdGhpcy5mZWVkYmFja1JlZiB8fCB0aGlzLmhvc3RWaWV3LmNyZWF0ZUNvbXBvbmVudChOekZvcm1JdGVtRmVlZGJhY2tJY29uQ29tcG9uZW50KTtcclxuICAgIHRoaXMuZmVlZGJhY2tSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtaW5wdXQtc3VmZml4Jyk7XHJcbiAgICB0aGlzLmZlZWRiYWNrUmVmLmluc3RhbmNlLnN0YXR1cyA9IHRoaXMuc3RhdHVzO1xyXG4gICAgdGhpcy5mZWVkYmFja1JlZi5pbnN0YW5jZS51cGRhdGVJY29uKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==