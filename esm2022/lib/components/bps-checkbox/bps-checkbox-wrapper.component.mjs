import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
export class NzCheckboxWrapperComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtY2hlY2tib3gvYnBzLWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFpQjVHLE1BQU0sT0FBTywwQkFBMEI7SUFYdkM7UUFZcUIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFDeEQsaUJBQVksR0FBMkIsRUFBRSxDQUFDO0tBY25EO0lBWkMsV0FBVyxDQUFDLEtBQTJCO1FBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxjQUFjLENBQUMsS0FBMkI7UUFDeEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7K0dBZlUsMEJBQTBCO21HQUExQiwwQkFBMEIsbUxBTDNCLDZCQUE2Qjs7NEZBSzVCLDBCQUEwQjtrQkFYdEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsb0JBQW9CO3FCQUM1QjtpQkFDRjs4QkFFb0IsVUFBVTtzQkFBNUIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuXHJcbmltcG9ydCB7IEJwc0NoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9icHMtY2hlY2tib3guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbnotY2hlY2tib3gtd3JhcHBlcicsXHJcbiAgZXhwb3J0QXM6ICduekNoZWNrYm94V3JhcHBlcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudD48L25nLWNvbnRlbnQ+IGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtY2hlY2tib3gtZ3JvdXAnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQge1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOelNhZmVBbnlbXT4oKTtcclxuICBwcml2YXRlIGNoZWNrYm94TGlzdDogQnBzQ2hlY2tib3hDb21wb25lbnRbXSA9IFtdO1xyXG5cclxuICBhZGRDaGVja2JveCh2YWx1ZTogQnBzQ2hlY2tib3hDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tib3hMaXN0LnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlQ2hlY2tib3godmFsdWU6IEJwc0NoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5zcGxpY2UodGhpcy5jaGVja2JveExpc3QuaW5kZXhPZih2YWx1ZSksIDEpO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UoKTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0T2ZDaGVja2VkVmFsdWUgPSB0aGlzLmNoZWNrYm94TGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLmJwc0NoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0uYnBzVmFsdWUpO1xyXG4gICAgdGhpcy5uek9uQ2hhbmdlLmVtaXQobGlzdE9mQ2hlY2tlZFZhbHVlKTtcclxuICB9XHJcbn1cclxuIl19