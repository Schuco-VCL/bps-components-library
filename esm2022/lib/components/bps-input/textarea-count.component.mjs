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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTextareaCountComponent, deps: [{ token: i0.Renderer2 }, { token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsTextareaCountComponent, selector: "bps-textarea-count", inputs: { bpsMaxCharacterCount: "bpsMaxCharacterCount", bpsComputeCharacterCount: "bpsComputeCharacterCount", bpsFormatter: "bpsFormatter" }, host: { classAttribute: "ant-input-textarea-show-count" }, queries: [{ propertyName: "nzInputDirective", first: true, predicate: BpsInputDirective, descendants: true, static: true }], ngImport: i0, template: ` <ng-content select="textarea[bps-input]"></ng-content> `, isInline: true, changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsTextareaCountComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-textarea-count',
                    template: ` <ng-content select="textarea[bps-input]"></ng-content> `,
                    host: {
                        class: 'ant-input-textarea-show-count'
                    },
                    changeDetection: ChangeDetectionStrategy.OnPush
                }]
        }], ctorParameters: function () { return [{ type: i0.Renderer2 }, { type: i0.ElementRef }]; }, propDecorators: { nzInputDirective: [{
                type: ContentChild,
                args: [BpsInputDirective, { static: true }]
            }], bpsMaxCharacterCount: [{
                type: Input
            }], bpsComputeCharacterCount: [{
                type: Input
            }], bpsFormatter: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY291bnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYnBzLWNvbXBvbmVudHMtbGliL3NyYy9saWIvY29tcG9uZW50cy9icHMtaW5wdXQvdGV4dGFyZWEtY291bnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFFWixLQUFLLEVBQ0wsU0FBUyxFQUdWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7O0FBVTFELE1BQU0sT0FBTyx5QkFBeUI7SUFTcEMsWUFBb0IsUUFBbUIsRUFBVSxVQUFtQztRQUFoRSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFQM0UseUJBQW9CLEdBQVcsQ0FBQyxDQUFDO1FBQ2pDLDZCQUF3QixHQUEwQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDaEUsaUJBQVksR0FBeUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztRQUU5RixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDOUIsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFFOEMsQ0FBQztJQUV6RixrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxTQUFTLEVBQUUsRUFBRTtZQUN6QyxNQUFNLElBQUksS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7U0FDM0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUU7WUFDbkMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUksS0FBSyxDQUFDO1lBQzNFLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQztpQkFDcEMsSUFBSSxDQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQ3hCLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUNoRCxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxLQUFlLENBQUMsQ0FDM0Q7aUJBQ0EsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDSCxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQWE7UUFDeEIsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN4RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzNCLENBQUM7K0dBekNVLHlCQUF5QjttR0FBekIseUJBQXlCLGlUQUN0QixpQkFBaUIsOERBUHJCLDBEQUEwRDs7NEZBTXpELHlCQUF5QjtrQkFSckMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsMERBQTBEO29CQUNwRSxJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLCtCQUErQjtxQkFDdkM7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEO3lIQUVvRCxnQkFBZ0I7c0JBQWxFLFlBQVk7dUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO2dCQUN4QyxvQkFBb0I7c0JBQTVCLEtBQUs7Z0JBQ0csd0JBQXdCO3NCQUFoQyxLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIGlzRGV2TW9kZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEVNUFRZLCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5pbXBvcnQgeyBCcHNJbnB1dERpcmVjdGl2ZSB9IGZyb20gJy4vYnBzLWlucHV0LmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Jwcy10ZXh0YXJlYS1jb3VudCcsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQgc2VsZWN0PVwidGV4dGFyZWFbYnBzLWlucHV0XVwiPjwvbmctY29udGVudD4gYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1pbnB1dC10ZXh0YXJlYS1zaG93LWNvdW50J1xyXG4gIH0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc1RleHRhcmVhQ291bnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBDb250ZW50Q2hpbGQoQnBzSW5wdXREaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIG56SW5wdXREaXJlY3RpdmUhOiBCcHNJbnB1dERpcmVjdGl2ZTtcclxuICBASW5wdXQoKSBicHNNYXhDaGFyYWN0ZXJDb3VudDogbnVtYmVyID0gMDtcclxuICBASW5wdXQoKSBicHNDb21wdXRlQ2hhcmFjdGVyQ291bnQ6ICh2OiBzdHJpbmcpID0+IG51bWJlciA9IHYgPT4gdi5sZW5ndGg7XHJcbiAgQElucHV0KCkgYnBzRm9ybWF0dGVyOiAoY3VyOiBudW1iZXIsIG1heDogbnVtYmVyKSA9PiBzdHJpbmcgPSAoYywgbSkgPT4gYCR7Y30ke20gPiAwID8gYC8ke219YCA6IGBgfWA7XHJcblxyXG4gIHByaXZhdGUgY29uZmlnQ2hhbmdlJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PikgeyB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ueklucHV0RGlyZWN0aXZlICYmIGlzRGV2TW9kZSgpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignW256LXRleHRhcmVhLWNvdW50XTogQ291bGQgbm90IGZpbmQgbWF0Y2hpbmcgdGV4dGFyZWFbbnotaW5wdXRdIGNoaWxkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sKSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlQ2hhbmdlcyA9IHRoaXMubnpJbnB1dERpcmVjdGl2ZS5uZ0NvbnRyb2wudmFsdWVDaGFuZ2VzIHx8IEVNUFRZO1xyXG4gICAgICBtZXJnZSh2YWx1ZUNoYW5nZXMsIHRoaXMuY29uZmlnQ2hhbmdlJClcclxuICAgICAgICAucGlwZShcclxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSxcclxuICAgICAgICAgIG1hcCgoKSA9PiB0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sLnZhbHVlKSxcclxuICAgICAgICAgIHN0YXJ0V2l0aCh0aGlzLm56SW5wdXREaXJlY3RpdmUubmdDb250cm9sLnZhbHVlIGFzIHN0cmluZylcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSh2YWx1ZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldERhdGFDb3VudCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXREYXRhQ291bnQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGlzTm90TmlsKHZhbHVlKSA/IFN0cmluZyh2YWx1ZSkgOiAnJztcclxuICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IHRoaXMuYnBzQ29tcHV0ZUNoYXJhY3RlckNvdW50KGlucHV0VmFsdWUpO1xyXG4gICAgY29uc3QgZGF0YUNvdW50ID0gdGhpcy5icHNGb3JtYXR0ZXIoY3VycmVudENvdW50LCB0aGlzLmJwc01heENoYXJhY3RlckNvdW50KTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnZGF0YS1jb3VudCcsIGRhdGFDb3VudCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnQ2hhbmdlJC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KHRydWUpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=