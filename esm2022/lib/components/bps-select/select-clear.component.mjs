import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
function BpsSelectClearComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 1);
} }
export class BpsSelectClearComponent {
    constructor() {
        this.clearIcon = null;
        this.clear = new EventEmitter();
    }
    onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.clear.emit(e);
    }
    static { this.ɵfac = function BpsSelectClearComponent_Factory(t) { return new (t || BpsSelectClearComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsSelectClearComponent, selectors: [["bps-select-clear"]], hostAttrs: [1, "ant-select-clear"], hostBindings: function BpsSelectClearComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function BpsSelectClearComponent_click_HostBindingHandler($event) { return ctx.onClick($event); });
        } }, inputs: { clearIcon: "clearIcon" }, outputs: { clear: "clear" }, decls: 1, vars: 2, consts: [["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", "class", "ant-select-close-icon", 4, "ngIf", "ngIfElse"], ["nz-icon", "", "nzType", "close-circle", "nzTheme", "fill", 1, "ant-select-close-icon"]], template: function BpsSelectClearComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BpsSelectClearComponent_span_0_Template, 1, 0, "span", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", !ctx.clearIcon)("ngIfElse", ctx.clearIcon);
        } }, dependencies: [i1.NgIf, i2.NzIconDirective], encapsulation: 2, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsSelectClearComponent, [{
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
    }], () => [], { clearIcon: [{
            type: Input
        }], clear: [{
            type: Output
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsSelectClearComponent, { className: "BpsSelectClearComponent", filePath: "lib\\components\\bps-select\\select-clear.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNsZWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtY2xlYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7Ozs7SUFTbkIsMEJBTVE7O0FBT1osTUFBTSxPQUFPLHVCQUF1QjtJQUlsQztRQUhTLGNBQVMsR0FBa0MsSUFBSSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBRTNDLENBQUM7SUFFaEIsT0FBTyxDQUFDLENBQWE7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDO3dGQVZVLHVCQUF1QjtvRUFBdkIsdUJBQXVCO1lBQXZCLGtHQUFBLG1CQUFlLElBQVE7O1lBYmhDLDBFQU1DOztZQUZvQixBQUFsQixxQ0FBa0IsMkJBQWM7OztpRkFTMUIsdUJBQXVCO2NBbEJuQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7b0JBQ3pCLFNBQVMsRUFBRSxpQkFBaUI7aUJBQzdCO2FBQ0Y7b0JBRVUsU0FBUztrQkFBakIsS0FBSztZQUNhLEtBQUs7a0JBQXZCLE1BQU07O2tGQUZJLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy1zZWxlY3QtY2xlYXInLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxzcGFuXHJcbiAgICAgIG56LWljb25cclxuICAgICAgbnpUeXBlPVwiY2xvc2UtY2lyY2xlXCJcclxuICAgICAgbnpUaGVtZT1cImZpbGxcIlxyXG4gICAgICAqbmdJZj1cIiFjbGVhckljb247IGVsc2UgY2xlYXJJY29uXCJcclxuICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LWNsb3NlLWljb25cIlxyXG4gICAgPjwvc3Bhbj5cclxuICBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LXNlbGVjdC1jbGVhcicsXHJcbiAgICAnKGNsaWNrKSc6ICdvbkNsaWNrKCRldmVudCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzU2VsZWN0Q2xlYXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNsZWFySWNvbjogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBvbkNsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmNsZWFyLmVtaXQoZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==