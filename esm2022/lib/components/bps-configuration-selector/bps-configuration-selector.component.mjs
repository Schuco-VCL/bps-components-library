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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci9icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUdULHVCQUF1QixFQUN2QixLQUFLLEVBQ0wsWUFBWSxFQUNaLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFVdkQsa0NBQWtDO0FBQ2xDLE1BQU0sT0FBTyxpQ0FBaUM7SUFPNUMsSUFDSSxvQkFBb0IsQ0FBQyxLQUFLO1FBQzVCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ2pFLENBQUM7SUFBQSxDQUFDO0lBS0YsSUFDSSxJQUFJLENBQUMsSUFBSTtRQUNYLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxDQUFDLENBQUM7YUFDcEM7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2FBQ2hFO1NBQ0Y7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxZQUNVLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBN0J4QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN2Qyw4QkFBeUIsR0FBRyxJQUFJLENBQUM7UUFDakMsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLDBCQUFxQixHQUFHLElBQUksQ0FBQztRQVFwQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNGLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDaEMsK0JBQTBCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFpQjdFLENBQUM7SUFFTixRQUFRO0lBQ1IsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQkFBc0I7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMscUJBQXFCLEVBQUU7Z0JBQ2hELE9BQU8sQ0FBQyxDQUFDO2FBQ1Y7U0FDRjtJQUNILENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxJQUFJLENBQUMseUJBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BELElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBRUQsY0FBYztRQUNaLElBQUksSUFBSSxDQUFDLHlCQUF5QixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUUsSUFBSSxDQUFDLHlCQUF5QixFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDeEUsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztTQUNsRTtJQUNILENBQUM7K0dBcEVVLGlDQUFpQzttR0FBakMsaUNBQWlDLDZTQ3hCOUMsNDFCQWVBOztBRHVCMkI7SUFBZixZQUFZLEVBQUU7bUVBQWtCOzRGQWQvQixpQ0FBaUM7a0JBVDdDLFNBQVM7K0JBRUUsNEJBQTRCLFlBQzVCLDBCQUEwQixtQkFHbkIsdUJBQXVCLENBQUMsTUFBTTt3R0FXM0Msb0JBQW9CO3NCQUR2QixLQUFLO2dCQU1HLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ21CLFFBQVE7c0JBQWhDLEtBQUs7Z0JBQ0ksMEJBQTBCO3NCQUFuQyxNQUFNO2dCQUVILElBQUk7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgSW5wdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE91dHB1dCxcclxuICBBZnRlclZpZXdJbml0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yJyxcclxuICBleHBvcnRBczogJ2Jwc0NvbmZpZ3VyYXRpb25TZWxlY3RvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Jwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtY29uZmlndXJhdGlvbi1zZWxlY3Rvci5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIG5vLWFueVxyXG5leHBvcnQgY2xhc3MgQnBzQ29uZmlndXJhdGlvblNlbGVjdG9yQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xyXG4gIFxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIGN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggPSBudWxsO1xyXG4gIF9kYXRhID0gW107XHJcbiAgX2N1cnJlbnREaXNwbGF5ZWREYXRhID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgY3VycmVudERpc3BsYXllZERhdGEodmFsdWUpIHtcclxuICAgIHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhID0gdmFsdWU7XHJcbiAgICB0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggPSB0aGlzLmdldEN1cnJlbnRFbGVtZW50SW5kZXgoKTtcclxuICB9O1xyXG5cclxuICBASW5wdXQoKSBwcm9wZXJ0eU5hbWUgPSAnJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgY3VycmVudERpc3BsYXllZERhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLl9kYXRhID0gZGF0YTtcclxuICAgIGlmICh0aGlzLl9kYXRhLmxlbmd0aCkge1xyXG4gICAgICBpZiAoIXRoaXMuY3VycmVudERpc3BsYXllZERhdGEpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50RGlzcGxheWVkRGF0YSA9IHRoaXMuX2RhdGFbMF07XHJcbiAgICAgICAgdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4ID0gMDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggPSB0aGlzLmdldEN1cnJlbnRFbGVtZW50SW5kZXgoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHsgIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudEVsZW1lbnRJbmRleCgpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICBpZiAodGhpcy5fZGF0YVtpXSA9PT0gdGhpcy5fY3VycmVudERpc3BsYXllZERhdGEpIHtcclxuICAgICAgICByZXR1cm4gaTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJldkVsZW1lbnQoKSB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4ICYmICF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleC0tO1xyXG4gICAgICB0aGlzLl9jdXJyZW50RGlzcGxheWVkRGF0YSA9IHRoaXMuX2RhdGFbdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUluZGV4XTtcclxuICAgICAgdGhpcy5jdXJyZW50RGlzcGxheWVkRGF0YUNoYW5nZS5lbWl0KHRoaXMuX2N1cnJlbnREaXNwbGF5ZWREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE5leHRFbGVtZW50KCkge1xyXG4gICAgaWYgKHRoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleCArIDEgPCB0aGlzLl9kYXRhLmxlbmd0aCAmJiAhdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLmN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXgrKztcclxuICAgICAgdGhpcy5fY3VycmVudERpc3BsYXllZERhdGEgPSB0aGlzLl9kYXRhW3RoaXMuY3VycmVudERpc3BsYXllZERhdGFJbmRleF07XHJcbiAgICAgIHRoaXMuY3VycmVudERpc3BsYXllZERhdGFDaGFuZ2UuZW1pdCh0aGlzLl9jdXJyZW50RGlzcGxheWVkRGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3ItbGVmdC1hcnJvd1wiXHJcbiAgICAgW2NsYXNzLmJwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLWxlZnQtYXJyb3ctZGlzYWJsZWRdPVwiIWN1cnJlbnREaXNwbGF5ZWREYXRhSW5kZXggfHwgZGlzYWJsZWRcIlxyXG4gICAgIChjbGljayk9XCJnZXRQcmV2RWxlbWVudCgpXCI+PC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3Itd3JhcHBlclwiXHJcbiAgICAgW2NsYXNzLmJwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLXdyYXBwZXItZGlzYWJsZWRdPVwiZGlzYWJsZWRcIj5cclxuICA8ZGl2IGNsYXNzPVwiYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3ItaW5uZXJcIlxyXG4gICAgICAgW2NsYXNzLmJwcy1jb25maWd1cmF0aW9uLXNlbGVjdG9yLWlubmVyLWRpc2FibGVkXT1cIl9jdXJyZW50RGlzcGxheWVkRGF0YSAmJiBfY3VycmVudERpc3BsYXllZERhdGEuZGlzYWJsZWRcIj5cclxuICAgIHt7X2N1cnJlbnREaXNwbGF5ZWREYXRhICYmIHByb3BlcnR5TmFtZSA/IF9jdXJyZW50RGlzcGxheWVkRGF0YVtwcm9wZXJ0eU5hbWVdIDogJyAnfX1cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcblxyXG48ZGl2IGNsYXNzPVwiYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3ItcmlnaHQtYXJyb3dcIlxyXG4gICAgIChjbGljayk9XCJnZXROZXh0RWxlbWVudCgpXCJcclxuICAgICBbY2xhc3MuYnBzLWNvbmZpZ3VyYXRpb24tc2VsZWN0b3ItcmlnaHQtYXJyb3ctZGlzYWJsZWRdPVwiY3VycmVudERpc3BsYXllZERhdGFJbmRleCArIDEgPT09IF9kYXRhLmxlbmd0aCB8fCBkaXNhYmxlZFwiPjwvZGl2PlxyXG4iXX0=