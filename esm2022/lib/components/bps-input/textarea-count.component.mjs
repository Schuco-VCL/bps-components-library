import { ChangeDetectionStrategy, Component, ContentChild, Input, isDevMode } from '@angular/core';
import { EMPTY, merge, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { BpsInputDirective } from './bps-input.directive';
import * as i0 from "@angular/core";
export class BpsTextareaCountComponent {
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
        const inputValue = isNotNil(value) ? String(value) : '';
        const currentCount = this.bpsComputeCharacterCount(inputValue);
        const dataCount = this.bpsFormatter(currentCount, this.bpsMaxCharacterCount);
        this.renderer.setAttribute(this.elementRef.nativeElement, 'data-count', dataCount);
    }
    ngOnDestroy() {
        this.configChange$.complete();
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsTextareaCountComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsTextareaCountComponent, selector: "bps-textarea-count", inputs: { bpsMaxCharacterCount: "bpsMaxCharacterCount", bpsComputeCharacterCount: "bpsComputeCharacterCount", bpsFormatter: "bpsFormatter" }, host: { classAttribute: "ant-input-textarea-show-count" }, queries: [{ propertyName: "nzInputDirective", first: true, predicate: BpsInputDirective, descendants: true, static: true }], ngImport: i0, template: ` <ng-content select="textarea[bps-input]"></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsTextareaCountComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-textarea-count',
                    template: ` <ng-content select="textarea[bps-input]"></ng-content> `,
                    host: {
                        class: 'ant-input-textarea-show-count'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: () => [{ type: i0.Renderer2 }, { type: i0.ElementRef }], propDecorators: { nzInputDirective: [{
                type: ContentChild,
                args: [BpsInputDirective, { static: true }]
            }], bpsMaxCharacterCount: [{
                type: Input
            }], bpsComputeCharacterCount: [{
                type: Input
            }], bpsFormatter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY291bnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtaW5wdXQvdGV4dGFyZWEtY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFFWixLQUFLLEVBQ0wsU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBVTFELE1BQU0sT0FBTyx5QkFBeUI7SUFTcEMsWUFBb0IsUUFBbUIsRUFBVSxVQUFtQztRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFQM0UseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBQ2pDLDZCQUF3QixHQUEwQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDaEUsaUJBQVksR0FBeUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUU5RixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFFOEMsQ0FBQztJQUV6RixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsRUFBRSxDQUFDO1lBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsd0VBQXdFLENBQUMsQ0FBQztRQUM1RixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDcEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDO1lBQzNFLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQkFDcEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNoRCxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFlLENBQUMsQ0FDM0Q7aUJBQ0EsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hELE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMvRCxNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDM0IsQ0FBQzsrR0F6Q1UseUJBQXlCO21HQUF6Qix5QkFBeUIsaVRBQ3RCLGlCQUFpQiw4REFQckIsMERBQTBEOzs0RkFNekQseUJBQXlCO2tCQVJyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFFBQVEsRUFBRSwwREFBMEQ7b0JBQ3BFLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsK0JBQStCO3FCQUN2QztvQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7dUdBRW9ELGdCQUFnQjtzQkFBbEUsWUFBWTt1QkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ3hDLG9CQUFvQjtzQkFBNUIsS0FBSztnQkFDRyx3QkFBd0I7c0JBQWhDLEtBQUs7Z0JBQ0csWUFBWTtzQkFBcEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgaXNEZXZNb2RlLFxyXG4gIE9uRGVzdHJveSxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRU1QVFksIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbmltcG9ydCB7IEJwc0lucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icHMtaW5wdXQuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXRleHRhcmVhLWNvdW50JyxcclxuICB0ZW1wbGF0ZTogYCA8bmctY29udGVudCBzZWxlY3Q9XCJ0ZXh0YXJlYVticHMtaW5wdXRdXCI+PC9uZy1jb250ZW50PiBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWlucHV0LXRleHRhcmVhLXNob3ctY291bnQnXHJcbiAgfSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzVGV4dGFyZWFDb3VudENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XHJcbiAgQENvbnRlbnRDaGlsZChCcHNJbnB1dERpcmVjdGl2ZSwgeyBzdGF0aWM6IHRydWUgfSkgbnpJbnB1dERpcmVjdGl2ZSE6IEJwc0lucHV0RGlyZWN0aXZlO1xyXG4gIEBJbnB1dCgpIGJwc01heENoYXJhY3RlckNvdW50OiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIGJwc0NvbXB1dGVDaGFyYWN0ZXJDb3VudDogKHY6IHN0cmluZykgPT4gbnVtYmVyID0gdiA9PiB2Lmxlbmd0aDtcclxuICBASW5wdXQoKSBicHNGb3JtYXR0ZXI6IChjdXI6IG51bWJlciwgbWF4OiBudW1iZXIpID0+IHN0cmluZyA9IChjLCBtKSA9PiBgJHtjfSR7bSA+IDAgPyBgLyR7bX1gIDogYGB9YDtcclxuXHJcbiAgcHJpdmF0ZSBjb25maWdDaGFuZ2UkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+KSB7IH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLm56SW5wdXREaXJlY3RpdmUgJiYgaXNEZXZNb2RlKCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdbbnotdGV4dGFyZWEtY291bnRdOiBDb3VsZCBub3QgZmluZCBtYXRjaGluZyB0ZXh0YXJlYVtuei1pbnB1dF0gY2hpbGQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wpIHtcclxuICAgICAgY29uc3QgdmFsdWVDaGFuZ2VzID0gdGhpcy5ueklucHV0RGlyZWN0aXZlLm5nQ29udHJvbC52YWx1ZUNoYW5nZXMgfHwgRU1QVFk7XHJcbiAgICAgIG1lcmdlKHZhbHVlQ2hhbmdlcywgdGhpcy5jb25maWdDaGFuZ2UkKVxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpLFxyXG4gICAgICAgICAgbWFwKCgpID0+IHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWUpLFxyXG4gICAgICAgICAgc3RhcnRXaXRoKHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWUgYXMgc3RyaW5nKVxyXG4gICAgICAgIClcclxuICAgICAgICAuc3Vic2NyaWJlKHZhbHVlID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YUNvdW50KHZhbHVlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERhdGFDb3VudCh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gaXNOb3ROaWwodmFsdWUpID8gU3RyaW5nKHZhbHVlKSA6ICcnO1xyXG4gICAgY29uc3QgY3VycmVudENvdW50ID0gdGhpcy5icHNDb21wdXRlQ2hhcmFjdGVyQ291bnQoaW5wdXRWYWx1ZSk7XHJcbiAgICBjb25zdCBkYXRhQ291bnQgPSB0aGlzLmJwc0Zvcm1hdHRlcihjdXJyZW50Q291bnQsIHRoaXMuYnBzTWF4Q2hhcmFjdGVyQ291bnQpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkYXRhLWNvdW50JywgZGF0YUNvdW50KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWdDaGFuZ2UkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==