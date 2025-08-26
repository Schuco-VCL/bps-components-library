import { __decorate } from "tslib";
import { Component, forwardRef, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "./bps-checkbox.component";
export class BpsCheckboxGroupComponent {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsCheckboxGroupComponent, deps: [{ token: i0.ElementRef }, { token: i1.FocusMonitor }, { token: i0.ChangeDetectorRef }, { token: i2.Directionality, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsCheckboxGroupComponent, selector: "bps-checkbox-group", inputs: { bpsDisabled: "bpsDisabled" }, host: { properties: { "class.ant-checkbox-group-rtl": "dir === 'rtl'" }, classAttribute: "ant-checkbox-group" }, providers: [
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
  `, isInline: true, dependencies: [{ kind: "directive", type: i3.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i4.BpsCheckboxComponent, selector: "[bps-checkbox]", inputs: ["bpsValue", "bpsAutoFocus", "bpsDisabled", "bpsIndeterminate", "bpsChecked", "bpsId", "bpsType"], outputs: ["bpsCheckedChange"], exportAs: ["bpsCheckbox"] }], encapsulation: i0.ViewEncapsulation.None }); }
}
__decorate([
    InputBoolean()
], BpsCheckboxGroupComponent.prototype, "bpsDisabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsCheckboxGroupComponent, decorators: [{
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
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }], propDecorators: { bpsDisabled: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNoZWNrYm94LWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLWNoZWNrYm94L2Jwcy1jaGVja2JveC1ncm91cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFFTCxTQUFTLEVBRVQsVUFBVSxFQUNWLEtBQUssRUFHTCxRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUczQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQXNDdkQsTUFBTSxPQUFPLHlCQUF5QjtJQWFwQyxhQUFhLENBQUMsQ0FBUyxFQUFFLE1BQWlDO1FBQ3hELE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWlDLEVBQUUsT0FBZ0I7UUFDakUsTUFBTSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELFlBQ1UsVUFBc0IsRUFDdEIsWUFBMEIsRUFDMUIsR0FBc0IsRUFDVixjQUE4QjtRQUgxQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ1YsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdkJwRCxhQUFRLEdBQWlCLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNuQyxjQUFTLEdBQWtCLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNyQyxZQUFPLEdBQWdDLEVBQUUsQ0FBQztRQUNqQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUU3QyxRQUFHLEdBQWMsS0FBSyxDQUFDO1FBRWYsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsMkJBQXNCLEdBQVksSUFBSSxDQUFDO0lBZ0IzQyxDQUFDO0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZO2FBQ2QsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDO2FBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQzlCLFNBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2pCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDakQsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBRUwsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFvQixFQUFFLEVBQUU7WUFDNUYsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUM7WUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDdkMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxVQUFVLENBQUMsS0FBa0M7UUFDM0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBZ0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQWlCO1FBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFpQjtRQUNoQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsSUFBSSxDQUFDLHNCQUFzQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxRQUFRLENBQUM7UUFDakYsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEtBQUssQ0FBQztRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7K0dBdEVVLHlCQUF5QjttR0FBekIseUJBQXlCLHNNQVp6QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3hELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRiwwREFsQlM7Ozs7Ozs7Ozs7O0dBV1Q7O0FBbUJ3QjtJQUFmLFlBQVksRUFBRTs4REFBcUI7NEZBTmxDLHlCQUF5QjtrQkE3QnJDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtvQkFDRCxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsMEJBQTBCLENBQUM7NEJBQ3hELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO29CQUNELElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsb0JBQW9CO3dCQUMzQixnQ0FBZ0MsRUFBRSxlQUFlO3FCQUNsRDtpQkFDRjs7MEJBMkJJLFFBQVE7eUNBcEJjLFdBQVc7c0JBQW5DLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQsIE9uQ2hhbmdlVHlwZSwgT25Ub3VjaGVkVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpDaGVja0JveE9wdGlvbkludGVyZmFjZSB7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicHMtY2hlY2tib3gtZ3JvdXAnLFxyXG4gIGV4cG9ydEFzOiAnYnBzQ2hlY2tib3hHcm91cCcsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGxhYmVsXHJcbiAgICAgIGJwcy1jaGVja2JveFxyXG4gICAgICBjbGFzcz1cImFudC1jaGVja2JveC1ncm91cC1pdGVtXCJcclxuICAgICAgKm5nRm9yPVwibGV0IG8gb2Ygb3B0aW9uczsgdHJhY2tCeTogdHJhY2tCeU9wdGlvblwiXHJcbiAgICAgIFticHNEaXNhYmxlZF09XCJvLmRpc2FibGVkIHx8IGJwc0Rpc2FibGVkXCJcclxuICAgICAgW2Jwc0NoZWNrZWRdPVwiby5jaGVja2VkIVwiXHJcbiAgICAgIChicHNDaGVja2VkQ2hhbmdlKT1cIm9uQ2hlY2tlZENoYW5nZShvLCAkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPHNwYW4+e3sgby5sYWJlbCB9fTwvc3Bhbj5cclxuICAgIDwvbGFiZWw+XHJcbiAgYCxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEJwc0NoZWNrYm94R3JvdXBDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtY2hlY2tib3gtZ3JvdXAnLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2hlY2tib3gtZ3JvdXAtcnRsXSc6IGBkaXIgPT09ICdydGwnYFxyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0NoZWNrYm94R3JvdXBDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9uekRpc2FibGVkOiBCb29sZWFuSW5wdXQ7XHJcblxyXG4gIG9uQ2hhbmdlOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB7IH07XHJcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4geyB9O1xyXG4gIG9wdGlvbnM6IE56Q2hlY2tCb3hPcHRpb25JbnRlcmZhY2VbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBicHNEaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG5cclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIGlzTnpEaXNhYmxlRmlyc3RDaGFuZ2U6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICB0cmFja0J5T3B0aW9uKF86IG51bWJlciwgb3B0aW9uOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBvcHRpb24udmFsdWU7XHJcbiAgfVxyXG5cclxuICBvbkNoZWNrZWRDaGFuZ2Uob3B0aW9uOiBOekNoZWNrQm94T3B0aW9uSW50ZXJmYWNlLCBjaGVja2VkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBvcHRpb24uY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB0aGlzLm9uQ2hhbmdlKHRoaXMub3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3JcclxuICAgICAgLm1vbml0b3IodGhpcy5lbGVtZW50UmVmLCB0cnVlKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xyXG4gICAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3Iuc3RvcE1vbml0b3JpbmcodGhpcy5lbGVtZW50UmVmKTtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpDaGVja0JveE9wdGlvbkludGVyZmFjZVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogT25Ub3VjaGVkVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuYnBzRGlzYWJsZWQgPSAodGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlICYmIHRoaXMuYnBzRGlzYWJsZWQpIHx8IGRpc2FibGVkO1xyXG4gICAgdGhpcy5pc056RGlzYWJsZUZpcnN0Q2hhbmdlID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19