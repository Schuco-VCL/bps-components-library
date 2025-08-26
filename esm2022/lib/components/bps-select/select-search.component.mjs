import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
export class BpsSelectSearchComponent {
    setCompositionState(isComposing) {
        this.isComposingChange.next(isComposing);
    }
    onValueChange(value) {
        this.value = value;
        this.valueChange.next(value);
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
    }
    clearInputValue() {
        const inputDOM = this.inputElement.nativeElement;
        inputDOM.value = '';
        this.onValueChange('');
    }
    syncMirrorWidth() {
        const mirrorDOM = this.mirrorElement.nativeElement;
        const hostDOM = this.elementRef.nativeElement;
        const inputDOM = this.inputElement.nativeElement;
        this.renderer.removeStyle(hostDOM, 'width');
        this.renderer.setProperty(mirrorDOM, 'textContent', `${inputDOM.value}\u00a0`);
        this.renderer.setStyle(hostDOM, 'width', `${mirrorDOM.scrollWidth}px`);
    }
    focus() {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    }
    blur() {
        this.inputElement.nativeElement.blur();
    }
    constructor(elementRef, renderer, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.focusMonitor = focusMonitor;
        this.bpsId = null;
        this.disabled = false;
        this.mirrorSync = false;
        this.showInput = true;
        this.focusTrigger = false;
        this.value = '';
        this.autofocus = false;
        this.valueChange = new EventEmitter();
        this.isComposingChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        const inputDOM = this.inputElement.nativeElement;
        const { focusTrigger, showInput } = changes;
        if (showInput) {
            if (this.showInput) {
                this.renderer.removeAttribute(inputDOM, 'readonly');
            }
            else {
                this.renderer.setAttribute(inputDOM, 'readonly', 'readonly');
            }
        }
        // IE11 cannot input value if focused before removing readonly
        if (focusTrigger && focusTrigger.currentValue === true && focusTrigger.previousValue === false) {
            inputDOM.focus();
        }
    }
    ngAfterViewInit() {
        if (this.mirrorSync) {
            this.syncMirrorWidth();
        }
        if (this.autofocus) {
            this.focus();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectSearchComponent, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.FocusMonitor }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: BpsSelectSearchComponent, selector: "bps-select-search", inputs: { bpsId: "bpsId", disabled: "disabled", mirrorSync: "mirrorSync", showInput: "showInput", focusTrigger: "focusTrigger", value: "value", autofocus: "autofocus" }, outputs: { valueChange: "valueChange", isComposingChange: "isComposingChange" }, host: { classAttribute: "ant-select-selection-search" }, providers: [{ provide: COMPOSITION_BUFFER_MODE, useValue: false }], viewQueries: [{ propertyName: "inputElement", first: true, predicate: ["inputElement"], descendants: true, static: true }, { propertyName: "mirrorElement", first: true, predicate: ["mirrorElement"], descendants: true }], usesOnChanges: true, ngImport: i0, template: `
    <input
      #inputElement
      [attr.id]="bpsId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `, isInline: true, dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: BpsSelectSearchComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'bps-select-search',
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: `
    <input
      #inputElement
      [attr.id]="bpsId"
      autocomplete="off"
      class="ant-select-selection-search-input"
      [ngModel]="value"
      [attr.autofocus]="autofocus ? 'autofocus' : null"
      [disabled]="disabled"
      [style.opacity]="showInput ? null : 0"
      (ngModelChange)="onValueChange($event)"
      (compositionstart)="setCompositionState(true)"
      (compositionend)="setCompositionState(false)"
    />
    <span #mirrorElement *ngIf="mirrorSync" class="ant-select-selection-search-mirror"></span>
  `,
                    host: { class: 'ant-select-selection-search' },
                    providers: [{ provide: COMPOSITION_BUFFER_MODE, useValue: false }]
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.FocusMonitor }], propDecorators: { bpsId: [{
                type: Input
            }], disabled: [{
                type: Input
            }], mirrorSync: [{
                type: Input
            }], showInput: [{
                type: Input
            }], focusTrigger: [{
                type: Input
            }], value: [{
                type: Input
            }], autofocus: [{
                type: Input
            }], valueChange: [{
                type: Output
            }], isComposingChange: [{
                type: Output
            }], inputElement: [{
                type: ViewChild,
                args: ['inputElement', { static: true }]
            }], mirrorElement: [{
                type: ViewChild,
                args: ['mirrorElement', { static: false }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1zZWxlY3Qvc2VsZWN0LXNlYXJjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7QUF5QnpELE1BQU0sT0FBTyx3QkFBd0I7SUFhbkMsbUJBQW1CLENBQUMsV0FBb0I7UUFDdEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDO1FBQ2pELFFBQVEsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELGVBQWU7UUFDYixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYyxDQUFDLGFBQWEsQ0FBQztRQUNwRCxNQUFNLE9BQU8sR0FBRyxJQUFJ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LE1BQU07b0JBQy9DLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7b0JBQ0QsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLDZCQUE2QixFQUFFO29CQUM5QyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ25FO2tJQUVVLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxZQUFZO3NCQUFwQixLQUFLO2dCQUNHLEtBQUs7c0JBQWIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNhLFdBQVc7c0JBQTdCLE1BQU07Z0JBQ1ksaUJBQWlCO3NCQUFuQyxNQUFNO2dCQUNzQyxZQUFZO3NCQUF4RCxTQUFTO3VCQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7Z0JBQ0ksYUFBYTtzQkFBM0QsU0FBUzt1QkFBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnBzLXNlbGVjdC1zZWFyY2gnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxpbnB1dFxyXG4gICAgICAjaW5wdXRFbGVtZW50XHJcbiAgICAgIFthdHRyLmlkXT1cImJwc0lkXCJcclxuICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgY2xhc3M9XCJhbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gtaW5wdXRcIlxyXG4gICAgICBbbmdNb2RlbF09XCJ2YWx1ZVwiXHJcbiAgICAgIFthdHRyLmF1dG9mb2N1c109XCJhdXRvZm9jdXMgPyAnYXV0b2ZvY3VzJyA6IG51bGxcIlxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICBbc3R5bGUub3BhY2l0eV09XCJzaG93SW5wdXQgPyBudWxsIDogMFwiXHJcbiAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChjb21wb3NpdGlvbnN0YXJ0KT1cInNldENvbXBvc2l0aW9uU3RhdGUodHJ1ZSlcIlxyXG4gICAgICAoY29tcG9zaXRpb25lbmQpPVwic2V0Q29tcG9zaXRpb25TdGF0ZShmYWxzZSlcIlxyXG4gICAgLz5cclxuICAgIDxzcGFuICNtaXJyb3JFbGVtZW50ICpuZ0lmPVwibWlycm9yU3luY1wiIGNsYXNzPVwiYW50LXNlbGVjdC1zZWxlY3Rpb24tc2VhcmNoLW1pcnJvclwiPjwvc3Bhbj5cclxuICBgLFxyXG4gIGhvc3Q6IHsgY2xhc3M6ICdhbnQtc2VsZWN0LXNlbGVjdGlvbi1zZWFyY2gnIH0sXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBDT01QT1NJVElPTl9CVUZGRVJfTU9ERSwgdXNlVmFsdWU6IGZhbHNlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCcHNTZWxlY3RTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGJwc0lkOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1pcnJvclN5bmMgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaG93SW5wdXQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGZvY3VzVHJpZ2dlciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHZhbHVlID0gJyc7XHJcbiAgQElucHV0KCkgYXV0b2ZvY3VzID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGlzQ29tcG9zaW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGlucHV0RWxlbWVudCE6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbWlycm9yRWxlbWVudCcsIHsgc3RhdGljOiBmYWxzZSB9KSBtaXJyb3JFbGVtZW50PzogRWxlbWVudFJlZjtcclxuXHJcbiAgc2V0Q29tcG9zaXRpb25TdGF0ZShpc0NvbXBvc2luZzogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc0NvbXBvc2luZ0NoYW5nZS5uZXh0KGlzQ29tcG9zaW5nKTtcclxuICB9XHJcblxyXG4gIG9uVmFsdWVDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5uZXh0KHZhbHVlKTtcclxuICAgIGlmICh0aGlzLm1pcnJvclN5bmMpIHtcclxuICAgICAgdGhpcy5zeW5jTWlycm9yV2lkdGgoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFySW5wdXRWYWx1ZSgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGlucHV0RE9NID0gdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudDtcclxuICAgIGlucHV0RE9NLnZhbHVlID0gJyc7XHJcbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoJycpO1xyXG4gIH1cclxuXHJcbiAgc3luY01pcnJvcldpZHRoKCk6IHZvaWQge1xyXG4gICAgY29uc3QgbWlycm9yRE9NID0gdGhpcy5taXJyb3JFbGVtZW50IS5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgaG9zdERPTSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgaW5wdXRET00gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZShob3N0RE9NLCAnd2lkdGgnKTtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkobWlycm9yRE9NLCAndGV4dENvbnRlbnQnLCBgJHtpbnB1dERPTS52YWx1ZX1cXHUwMGEwYCk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGhvc3RET00sICd3aWR0aCcsIGAke21pcnJvckRPTS5zY3JvbGxXaWR0aH1weGApO1xyXG4gIH1cclxuXHJcbiAgZm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgaW5wdXRET00gPSB0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50O1xyXG4gICAgY29uc3QgeyBmb2N1c1RyaWdnZXIsIHNob3dJbnB1dCB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAoc2hvd0lucHV0KSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dJbnB1dCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKGlucHV0RE9NLCAncmVhZG9ubHknKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dERPTSwgJ3JlYWRvbmx5JywgJ3JlYWRvbmx5Jyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBJRTExIGNhbm5vdCBpbnB1dCB2YWx1ZSBpZiBmb2N1c2VkIGJlZm9yZSByZW1vdmluZyByZWFkb25seVxyXG4gICAgaWYgKGZvY3VzVHJpZ2dlciAmJiBmb2N1c1RyaWdnZXIuY3VycmVudFZhbHVlID09PSB0cnVlICYmIGZvY3VzVHJpZ2dlci5wcmV2aW91c1ZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICBpbnB1dERPTS5mb2N1cygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWlycm9yU3luYykge1xyXG4gICAgICB0aGlzLnN5bmNNaXJyb3JXaWR0aCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYXV0b2ZvY3VzKSB7XHJcbiAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19