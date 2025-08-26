import { __decorate } from "tslib";
import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
// tslint:disable-next-line no-any
export class BpsConfigurationSelectorComponent {
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
    static { this.ɵfac = function BpsConfigurationSelectorComponent_Factory(t) { return new (t || BpsConfigurationSelectorComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsConfigurationSelectorComponent, selectors: [["bps-configuration-selector"]], inputs: { currentDisplayedData: "currentDisplayedData", propertyName: "propertyName", disabled: "disabled", data: "data" }, outputs: { currentDisplayedDataChange: "currentDisplayedDataChange" }, exportAs: ["bpsConfigurationSelector"], decls: 5, vars: 9, consts: [[1, "bps-configuration-selector-left-arrow", 3, "click"], [1, "bps-configuration-selector-wrapper"], [1, "bps-configuration-selector-inner"], [1, "bps-configuration-selector-right-arrow", 3, "click"]], template: function BpsConfigurationSelectorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function BpsConfigurationSelectorComponent_Template_div_click_0_listener() { return ctx.getPrevElement(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "div", 1)(2, "div", 2);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "div", 3);
            i0.ɵɵlistener("click", function BpsConfigurationSelectorComponent_Template_div_click_4_listener() { return ctx.getNextElement(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("bps-configuration-selector-left-arrow-disabled", !ctx.currentDisplayedDataIndex || ctx.disabled);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("bps-configuration-selector-wrapper-disabled", ctx.disabled);
            i0.ɵɵadvance();
            i0.ɵɵclassProp("bps-configuration-selector-inner-disabled", ctx._currentDisplayedData && ctx._currentDisplayedData.disabled);
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate1(" ", ctx._currentDisplayedData && ctx.propertyName ? ctx._currentDisplayedData[ctx.propertyName] : " ", " ");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("bps-configuration-selector-right-arrow-disabled", ctx.currentDisplayedDataIndex + 1 === ctx._data.length || ctx.disabled);
        } }, styles: [".bps-configuration-selector-wrapper[_ngcontent-%COMP%]{display:inline-block;width:inherit;min-height:25px;padding:0 15px;border-radius:8px;border:solid 1px #00a2d1;color:#fff;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left}.bps-configuration-selector-inner[_ngcontent-%COMP%]{white-space:nowrap;max-width:100%;padding:7px 0;overflow:hidden;text-overflow:ellipsis}.bps-configuration-selector-inner-disabled[_ngcontent-%COMP%]{color:#474747}.bps-configuration-selector-left-arrow[_ngcontent-%COMP%]{display:inline-block;position:relative;top:-4px;padding-right:10px;cursor:pointer}.bps-configuration-selector-wrapper-disabled[_ngcontent-%COMP%]{border:solid 1px #474747;color:#474747}.bps-configuration-selector-right-arrow[_ngcontent-%COMP%]{display:inline-block;position:relative;top:-4px;padding-left:10px;cursor:pointer}.bps-configuration-selector-right-arrow[_ngcontent-%COMP%]:after{content:url(/assets/bps-icons/sps_right_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow[_ngcontent-%COMP%]:after{content:url(/assets/bps-icons/sps_left_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow-disabled[_ngcontent-%COMP%]{content:url(/assets/bps-icons/sps_left_report_icon_disabled.svg);cursor:not-allowed}.bps-configuration-selector-right-arrow-disabled[_ngcontent-%COMP%]{content:url(/assets/bps-icons/sps_right_report_icon_disabled.svg);cursor:not-allowed}"], changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], BpsConfigurationSelectorComponent.prototype, "disabled", void 0);
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsConfigurationSelectorComponent, [{
        type: Component,
        args: [{ selector: 'bps-configuration-selector', exportAs: 'bpsConfigurationSelector', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"bps-configuration-selector-left-arrow\"\r\n     [class.bps-configuration-selector-left-arrow-disabled]=\"!currentDisplayedDataIndex || disabled\"\r\n     (click)=\"getPrevElement()\"></div>\r\n\r\n<div class=\"bps-configuration-selector-wrapper\"\r\n     [class.bps-configuration-selector-wrapper-disabled]=\"disabled\">\r\n  <div class=\"bps-configuration-selector-inner\"\r\n       [class.bps-configuration-selector-inner-disabled]=\"_currentDisplayedData && _currentDisplayedData.disabled\">\r\n    {{_currentDisplayedData && propertyName ? _currentDisplayedData[propertyName] : ' '}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bps-configuration-selector-right-arrow\"\r\n     (click)=\"getNextElement()\"\r\n     [class.bps-configuration-selector-right-arrow-disabled]=\"currentDisplayedDataIndex + 1 === _data.length || disabled\"></div>\r\n", styles: [".bps-configuration-selector-wrapper{display:inline-block;width:inherit;min-height:25px;padding:0 15px;border-radius:8px;border:solid 1px #00a2d1;color:#fff;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left}.bps-configuration-selector-inner{white-space:nowrap;max-width:100%;padding:7px 0;overflow:hidden;text-overflow:ellipsis}.bps-configuration-selector-inner-disabled{color:#474747}.bps-configuration-selector-left-arrow{display:inline-block;position:relative;top:-4px;padding-right:10px;cursor:pointer}.bps-configuration-selector-wrapper-disabled{border:solid 1px #474747;color:#474747}.bps-configuration-selector-right-arrow{display:inline-block;position:relative;top:-4px;padding-left:10px;cursor:pointer}.bps-configuration-selector-right-arrow:after{content:url(/assets/bps-icons/sps_right_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow:after{content:url(/assets/bps-icons/sps_left_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow-disabled{content:url(/assets/bps-icons/sps_left_report_icon_disabled.svg);cursor:not-allowed}.bps-configuration-selector-right-arrow-disabled{content:url(/assets/bps-icons/sps_right_report_icon_disabled.svg);cursor:not-allowed}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }], { currentDisplayedData: [{
            type: Input
        }], propertyName: [{
            type: Input
        }], disabled: [{
            type: Input
        }], currentDisplayedDataChange: [{
            type: Output
        }], data: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsConfigurationSelectorComponent, { className: "BpsConfigurationSelectorComponent", filePath: "lib\\components\\bps-configuration-selector\\bps-configuration-selector.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci9icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFVdkQsa0NBQWtDO0FBQ2xDLE1BQU0sT0FBTyxpQ0FBaUM7SUFPNUMsSUFDSSxvQkFBb0IsQ0FBQyxLQUFLO1FBQzVCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFBQSxDQUFDO0lBS0YsSUFDSSxJQUFJLENBQUMsSUFBSTtRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxxQkFB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QUFrQjtpRkFkL0IsaUNBQWlDO2NBVDdDLFNBQVM7MkJBRUUsNEJBQTRCLFlBQzVCLDBCQUEwQixtQkFHbkIsdUJBQXVCLENBQUMsTUFBTTtrREFXM0Msb0JBQW9CO2tCQUR2QixLQUFLO1lBTUcsWUFBWTtrQkFBcEIsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ0ksMEJBQTBCO2tCQUFuQyxNQUFNO1lBRUgsSUFBSTtrQkFEUCxLQUFLOztrRkFoQkssaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBJbnB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT3V0cHV0LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3InLFxyXG4gIGV4cG9ydEFzOiAnYnBzQ29uZmlndXJhdGlvblNlbGVjdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLmNvbXBvbmVudC5jc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgbm8tYW55XHJcbmV4cG9ydCBjbGFzcyBCcHNDb25maWd1cmF0aW9uU2VsZWN0b3JDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgY3VycmVudERpc3BsYXllZERhdGFJbmRleCA9IG51bGw7XHJcbiAgX2RhdGEgPSBbXTtcclxuICBfY3VycmVudERpc3BsYXllZERhdGEgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBjdXJyZW50RGlzcGxheWVkRGF0YSh2YWx1ZSkge1xyXG4gICAgdGhpcy5fY3VycmVudERpc3BsYXllZERhdGEgPSB2YWx1ZTtcclxuICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEVsZW1lbnRJbmRleCgpO1xyXG4gIH07XHJcblxyXG4gIEBJbnB1dCgpIHByb3BlcnR5TmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBjdXJyZW50RGlzcGxheWVkRGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xyXG4gICAgaWYgKHRoaXMuX2RhdGEubGVuZ3RoKSB7XHJcbiAgICAgIGlmICghdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhID0gdGhpcy5fZGF0YVswXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggPSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleCA9IHRoaXMuZ2V0Q3VycmVudEVsZW1lbnRJbmRleCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkgeyAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50RWxlbWVudEluZGV4KCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICh0aGlzLl9kYXRhW2ldID09PSB0aGlzLl9jdXJyZW50RGlzcGxheWVkRGF0YSkge1xyXG4gICAgICAgIHJldHVybiBpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2RWxlbWVudCgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4LS07XHJcbiAgICAgIHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhID0gdGhpcy5fZGF0YVt0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXhdO1xyXG4gICAgICB0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhQ2hhbmdlLmVtaXQodGhpcy5fY3VycmVudERpc3BsYXllZERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dEVsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4ICsgMSA8IHRoaXMuX2RhdGEubGVuZ3RoICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleCsrO1xyXG4gICAgICB0aGlzLl9jdXJyZW50RGlzcGxheWVkRGF0YSA9IHRoaXMuX2RhdGFbdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4XTtcclxuICAgICAgdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUNoYW5nZS5lbWl0KHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJicHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci1sZWZ0LWFycm93XCJcclxuICAgICBbY2xhc3MuYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3ItbGVmdC1hcnJvdy1kaXNhYmxlZF09XCIhY3VycmVudERpc3BsYXllZERhdGFJbmRleCB8fCBkaXNhYmxlZFwiXHJcbiAgICAgKGNsaWNrKT1cImdldFByZXZFbGVtZW50KClcIj48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJicHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci13cmFwcGVyXCJcclxuICAgICBbY2xhc3MuYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3Itd3JhcHBlci1kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJicHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci1pbm5lclwiXHJcbiAgICAgICBbY2xhc3MuYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3ItaW5uZXItZGlzYWJsZWRdPVwiX2N1cnJlbnREaXNwbGF5ZWREYXRhICYmIF9jdXJyZW50RGlzcGxheWVkRGF0YS5kaXNhYmxlZFwiPlxyXG4gICAge3tfY3VycmVudERpc3BsYXllZERhdGEgJiYgcHJvcGVydHlOYW1lID8gX2N1cnJlbnREaXNwbGF5ZWREYXRhW3Byb3BlcnR5TmFtZV0gOiAnICd9fVxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuXHJcbjxkaXYgY2xhc3M9XCJicHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci1yaWdodC1hcnJvd1wiXHJcbiAgICAgKGNsaWNrKT1cImdldE5leHRFbGVtZW50KClcIlxyXG4gICAgIFtjbGFzcy5icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci1yaWdodC1hcnJvdy1kaXNhYmxlZF09XCJjdXJyZW50RGlzcGxheWVkRGF0YUluZGV4ICsgMSA9PT0gX2RhdGEubGVuZ3RoIHx8IGRpc2FibGVkXCI+PC9kaXY+XHJcbiJdfQ==