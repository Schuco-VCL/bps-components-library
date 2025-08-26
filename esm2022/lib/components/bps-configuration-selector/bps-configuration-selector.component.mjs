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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsConfigurationSelectorComponent, deps: [{ token: i0.ChangeDetectorRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsConfigurationSelectorComponent, selector: "bps-configuration-selector", inputs: { currentDisplayedData: "currentDisplayedData", propertyName: "propertyName", disabled: "disabled", data: "data" }, outputs: { currentDisplayedDataChange: "currentDisplayedDataChange" }, exportAs: ["bpsConfigurationSelector"], ngImport: i0, template: "<div class=\"bps-configuration-selector-left-arrow\"\r\n     [class.bps-configuration-selector-left-arrow-disabled]=\"!currentDisplayedDataIndex || disabled\"\r\n     (click)=\"getPrevElement()\"></div>\r\n\r\n<div class=\"bps-configuration-selector-wrapper\"\r\n     [class.bps-configuration-selector-wrapper-disabled]=\"disabled\">\r\n  <div class=\"bps-configuration-selector-inner\"\r\n       [class.bps-configuration-selector-inner-disabled]=\"_currentDisplayedData && _currentDisplayedData.disabled\">\r\n    {{_currentDisplayedData && propertyName ? _currentDisplayedData[propertyName] : ' '}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bps-configuration-selector-right-arrow\"\r\n     (click)=\"getNextElement()\"\r\n     [class.bps-configuration-selector-right-arrow-disabled]=\"currentDisplayedDataIndex + 1 === _data.length || disabled\"></div>\r\n", styles: [".bps-configuration-selector-wrapper{display:inline-block;width:inherit;min-height:25px;padding:0 15px;border-radius:8px;border:solid 1px #00a2d1;color:#fff;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left}.bps-configuration-selector-inner{white-space:nowrap;max-width:100%;padding:7px 0;overflow:hidden;text-overflow:ellipsis}.bps-configuration-selector-inner-disabled{color:#474747}.bps-configuration-selector-left-arrow{display:inline-block;position:relative;top:-4px;padding-right:10px;cursor:pointer}.bps-configuration-selector-wrapper-disabled{border:solid 1px #474747;color:#474747}.bps-configuration-selector-right-arrow{display:inline-block;position:relative;top:-4px;padding-left:10px;cursor:pointer}.bps-configuration-selector-right-arrow:after{content:url(/assets/bps-icons/sps_right_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow:after{content:url(/assets/bps-icons/sps_left_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow-disabled{content:url(/assets/bps-icons/sps_left_report_icon_disabled.svg);cursor:not-allowed}.bps-configuration-selector-right-arrow-disabled{content:url(/assets/bps-icons/sps_right_report_icon_disabled.svg);cursor:not-allowed}\n"], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
__decorate([
    InputBoolean()
], BpsConfigurationSelectorComponent.prototype, "disabled", void 0);
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsConfigurationSelectorComponent, decorators: [{
            type: Component,
            args: [{ selector: 'bps-configuration-selector', exportAs: 'bpsConfigurationSelector', changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"bps-configuration-selector-left-arrow\"\r\n     [class.bps-configuration-selector-left-arrow-disabled]=\"!currentDisplayedDataIndex || disabled\"\r\n     (click)=\"getPrevElement()\"></div>\r\n\r\n<div class=\"bps-configuration-selector-wrapper\"\r\n     [class.bps-configuration-selector-wrapper-disabled]=\"disabled\">\r\n  <div class=\"bps-configuration-selector-inner\"\r\n       [class.bps-configuration-selector-inner-disabled]=\"_currentDisplayedData && _currentDisplayedData.disabled\">\r\n    {{_currentDisplayedData && propertyName ? _currentDisplayedData[propertyName] : ' '}}\r\n  </div>\r\n</div>\r\n\r\n<div class=\"bps-configuration-selector-right-arrow\"\r\n     (click)=\"getNextElement()\"\r\n     [class.bps-configuration-selector-right-arrow-disabled]=\"currentDisplayedDataIndex + 1 === _data.length || disabled\"></div>\r\n", styles: [".bps-configuration-selector-wrapper{display:inline-block;width:inherit;min-height:25px;padding:0 15px;border-radius:8px;border:solid 1px #00a2d1;color:#fff;font-size:12px;font-weight:400;font-stretch:normal;font-style:normal;line-height:.75;letter-spacing:normal;text-align:left}.bps-configuration-selector-inner{white-space:nowrap;max-width:100%;padding:7px 0;overflow:hidden;text-overflow:ellipsis}.bps-configuration-selector-inner-disabled{color:#474747}.bps-configuration-selector-left-arrow{display:inline-block;position:relative;top:-4px;padding-right:10px;cursor:pointer}.bps-configuration-selector-wrapper-disabled{border:solid 1px #474747;color:#474747}.bps-configuration-selector-right-arrow{display:inline-block;position:relative;top:-4px;padding-left:10px;cursor:pointer}.bps-configuration-selector-right-arrow:after{content:url(/assets/bps-icons/sps_right_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow:after{content:url(/assets/bps-icons/sps_left_report_icon_enabled.svg)}.bps-configuration-selector-left-arrow-disabled{content:url(/assets/bps-icons/sps_left_report_icon_disabled.svg);cursor:not-allowed}.bps-configuration-selector-right-arrow-disabled{content:url(/assets/bps-icons/sps_right_report_icon_disabled.svg);cursor:not-allowed}\n"] }]
        }], ctorParameters: () => [{ type: i0.ChangeDetectorRef }], propDecorators: { currentDisplayedData: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci9icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFVdkQsa0NBQWtDO0FBQ2xDLE1BQU0sT0FBTyxpQ0FBaUM7SUFPNUMsSUFDSSxvQkFBb0IsQ0FBQyxLQUFLO1FBQzVCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFBQSxDQUFDO0lBS0YsSUFDSSxJQUFJLENBQUMsSUFBSTtRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxxQkFB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UmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIElucHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPdXRwdXQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdicHMtY29uZmlndXJhdGlvbi1zZWxlY3RvcicsXHJcbiAgZXhwb3J0QXM6ICdicHNDb25maWd1cmF0aW9uU2VsZWN0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3IuY29tcG9uZW50LmNzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuZXhwb3J0IGNsYXNzIEJwc0NvbmZpZ3VyYXRpb25TZWxlY3RvckNvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBjdXJyZW50RGlzcGxheWVkRGF0YUluZGV4ID0gbnVsbDtcclxuICBfZGF0YSA9IFtdO1xyXG4gIF9jdXJyZW50RGlzcGxheWVkRGF0YSA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGN1cnJlbnREaXNwbGF5ZWREYXRhKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9jdXJyZW50RGlzcGxheWVkRGF0YSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4ID0gdGhpcy5nZXRDdXJyZW50RWxlbWVudEluZGV4KCk7XHJcbiAgfTtcclxuXHJcbiAgQElucHV0KCkgcHJvcGVydHlOYW1lID0gJyc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIGN1cnJlbnREaXNwbGF5ZWREYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGEoZGF0YSkge1xyXG4gICAgdGhpcy5fZGF0YSA9IGRhdGE7XHJcbiAgICBpZiAodGhpcy5fZGF0YS5sZW5ndGgpIHtcclxuICAgICAgaWYgKCF0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudERpc3BsYXllZERhdGEgPSB0aGlzLl9kYXRhWzBdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleCA9IDA7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4ID0gdGhpcy5nZXRDdXJyZW50RWxlbWVudEluZGV4KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7ICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnRFbGVtZW50SW5kZXgoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgaWYgKHRoaXMuX2RhdGFbaV0gPT09IHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFByZXZFbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleCAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXgtLTtcclxuICAgICAgdGhpcy5fY3VycmVudERpc3BsYXllZERhdGEgPSB0aGlzLl9kYXRhW3RoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleF07XHJcbiAgICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFDaGFuZ2UuZW1pdCh0aGlzLl9jdXJyZW50RGlzcGxheWVkRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXROZXh0RWxlbWVudCgpIHtcclxuICAgIGlmICh0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggKyAxIDwgdGhpcy5fZGF0YS5sZW5ndGggJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4Kys7XHJcbiAgICAgIHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhID0gdGhpcy5fZGF0YVt0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXhdO1xyXG4gICAgICB0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhQ2hhbmdlLmVtaXQodGhpcy5fY3VycmVudERpc3BsYXllZERhdGEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImJwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLWxlZnQtYXJyb3dcIlxyXG4gICAgIFtjbGFzcy5icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci1sZWZ0LWFycm93LWRpc2FibGVkXT1cIiFjdXJyZW50RGlzcGxheWVkRGF0YUluZGV4IHx8IGRpc2FibGVkXCJcclxuICAgICAoY2xpY2spPVwiZ2V0UHJldkVsZW1lbnQoKVwiPjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImJwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLXdyYXBwZXJcIlxyXG4gICAgIFtjbGFzcy5icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci13cmFwcGVyLWRpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgPGRpdiBjbGFzcz1cImJwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLWlubmVyXCJcclxuICAgICAgIFtjbGFzcy5icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci1pbm5lci1kaXNhYmxlZF09XCJfY3VycmVudERpc3BsYXllZERhdGEgJiYgX2N1cnJlbnREaXNwbGF5ZWREYXRhLmRpc2FibGVkXCI+XHJcbiAgICB7e19jdXJyZW50RGlzcGxheWVkRGF0YSAmJiBwcm9wZXJ0eU5hbWUgPyBfY3VycmVudERpc3BsYXllZERhdGFbcHJvcGVydHlOYW1lXSA6ICcgJ319XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPGRpdiBjbGFzcz1cImJwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLXJpZ2h0LWFycm93XCJcclxuICAgICAoY2xpY2spPVwiZ2V0TmV4dEVsZW1lbnQoKVwiXHJcbiAgICAgW2NsYXNzLmJwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLXJpZ2h0LWFycm93LWRpc2FibGVkXT1cImN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggKyAxID09PSBfZGF0YS5sZW5ndGggfHwgZGlzYWJsZWRcIj48L2Rpdj5cclxuIl19