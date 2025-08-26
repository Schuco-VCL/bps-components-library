import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ng-zorro-antd/icon";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectClearComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsSelectClearComponent, selector: "bps-select-clear", inputs: { clearIcon: "clearIcon" }, outputs: { clear: "clear" }, host: { listeners: { "click": "onClick($event)" }, classAttribute: "ant-select-clear" }, ngImport: i0, template: `
    <span
      nz-icon
      nzType="close-circle"
      nzTheme="fill"
      *ngIf="!clearIcon; else clearIcon"
      class="ant-select-close-icon"
    ></span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NzIconDirective, selector: "[nz-icon]", inputs: ["nzSpin", "nzRotate", "nzType", "nzTheme", "nzTwotoneColor", "nzIconfont"], exportAs: ["nzIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectClearComponent, decorators: [{
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
        }], ctorParameters: () => [], propDecorators: { clearIcon: [{
                type: Input
            }], clear: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWNsZWFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvYnBzLXNlbGVjdC9zZWxlY3QtY2xlYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxFQUVOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQzs7OztBQXNCdkIsTUFBTSxPQUFPLHVCQUF1QjtJQUlsQztRQUhTLGNBQVMsR0FBa0MsSUFBSSxDQUFDO1FBQ3RDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBRTNDLENBQUM7SUFFaEIsT0FBTyxDQUFDLENBQWE7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOytHQVZVLHVCQUF1QjttR0FBdkIsdUJBQXVCLGtOQWR4Qjs7Ozs7Ozs7R0FRVDs7NEZBTVUsdUJBQXVCO2tCQWxCbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO29CQUM1QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtvQkFDRCxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGtCQUFrQjt3QkFDekIsU0FBUyxFQUFFLGlCQUFpQjtxQkFDN0I7aUJBQ0Y7d0RBRVUsU0FBUztzQkFBakIsS0FBSztnQkFDYSxLQUFLO3NCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXNlbGVjdC1jbGVhcicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPHNwYW5cclxuICAgICAgbnotaWNvblxyXG4gICAgICBuelR5cGU9XCJjbG9zZS1jaXJjbGVcIlxyXG4gICAgICBuelRoZW1lPVwiZmlsbFwiXHJcbiAgICAgICpuZ0lmPVwiIWNsZWFySWNvbjsgZWxzZSBjbGVhckljb25cIlxyXG4gICAgICBjbGFzcz1cImFudC1zZWxlY3QtY2xvc2UtaWNvblwiXHJcbiAgICA+PC9zcGFuPlxyXG4gIGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtc2VsZWN0LWNsZWFyJyxcclxuICAgICcoY2xpY2spJzogJ29uQ2xpY2soJGV2ZW50KSdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNTZWxlY3RDbGVhckNvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgY2xlYXJJY29uOiBUZW1wbGF0ZVJlZjxOelNhZmVBbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG9uQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xlYXIuZW1pdChlKTtcclxuICB9XHJcbn1cclxuIl19