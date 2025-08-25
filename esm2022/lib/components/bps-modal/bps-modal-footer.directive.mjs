import { Directive, Optional } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./nz-modal-ref.class";
export class BpsModalFooterDirective {
    constructor(nzModalRef, templateRef) {
        this.nzModalRef = nzModalRef;
        this.templateRef = templateRef;
        if (this.nzModalRef) {
            this.nzModalRef.getInstance().setFooterWithTemplate(this.templateRef);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsModalFooterDirective, deps: [{ token: i1.NzModalRef, optional: true }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: BpsModalFooterDirective, selector: "[bpsModalFooter]", exportAs: ["bpsModalFooter"], ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsModalFooterDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[bpsModalFooter]',
                    exportAs: 'bpsModalFooter'
                }]
        }], ctorParameters: function () { return [{ type: i1.NzModalRef, decorators: [{
                    type: Optional
                }] }, { type: i0.TemplateRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW1vZGFsLWZvb3Rlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1tb2RhbC9icHMtbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2pFLE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBZ0MsVUFBc0IsRUFBUyxXQUE0QjtRQUEzRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQ3pGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUN2RTtJQUNILENBQUM7K0dBTFUsdUJBQXVCO21HQUF2Qix1QkFBdUI7OzRGQUF2Qix1QkFBdUI7a0JBSm5DLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7OzBCQUVjLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIE9wdGlvbmFsLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1vZGFsUmVmIH0gZnJvbSAnLi9uei1tb2RhbC1yZWYuY2xhc3MnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYnBzTW9kYWxGb290ZXJdJyxcclxuICBleHBvcnRBczogJ2Jwc01vZGFsRm9vdGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzTW9kYWxGb290ZXJEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIHByaXZhdGUgbnpNb2RhbFJlZjogTnpNb2RhbFJlZiwgcHVibGljIHRlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjx7fT4pIHtcclxuICAgIGlmICh0aGlzLm56TW9kYWxSZWYpIHtcclxuICAgICAgdGhpcy5uek1vZGFsUmVmLmdldEluc3RhbmNlKCkuc2V0Rm9vdGVyV2l0aFRlbXBsYXRlKHRoaXMudGVtcGxhdGVSZWYpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=