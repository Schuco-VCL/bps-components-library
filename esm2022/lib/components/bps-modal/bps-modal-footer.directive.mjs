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
    static { this.ɵfac = function BpsModalFooterDirective_Factory(t) { return new (t || BpsModalFooterDirective)(i0.ɵɵdirectiveInject(i1.NzModalRef, 8), i0.ɵɵdirectiveInject(i0.TemplateRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BpsModalFooterDirective, selectors: [["", "bpsModalFooter", ""]], exportAs: ["bpsModalFooter"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsModalFooterDirective, [{
        type: Directive,
        args: [{
                selector: '[bpsModalFooter]',
                exportAs: 'bpsModalFooter'
            }]
    }], () => [{ type: i1.NzModalRef, decorators: [{
                type: Optional
            }] }, { type: i0.TemplateRef }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnBzLW1vZGFsLWZvb3Rlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1tb2RhbC9icHMtbW9kYWwtZm9vdGVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBZSxNQUFNLGVBQWUsQ0FBQzs7O0FBT2pFLE1BQU0sT0FBTyx1QkFBdUI7SUFDbEMsWUFBZ0MsVUFBc0IsRUFBUyxXQUE0QjtRQUEzRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVMsZ0JBQVcsR0FBWCxXQUFXLENBQWlCO1FBQ3pGLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3hFLENBQUM7SUFDSCxDQUFDO3dGQUxVLHVCQUF1QjtvRUFBdkIsdUJBQXVCOztpRkFBdkIsdUJBQXVCO2NBSm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOztzQkFFYyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTnpNb2RhbFJlZiB9IGZyb20gJy4vbnotbW9kYWwtcmVmLmNsYXNzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Jwc01vZGFsRm9vdGVyXScsXHJcbiAgZXhwb3J0QXM6ICdicHNNb2RhbEZvb3RlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc01vZGFsRm9vdGVyRGlyZWN0aXZlIHtcclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBwcml2YXRlIG56TW9kYWxSZWY6IE56TW9kYWxSZWYsIHB1YmxpYyB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8e30+KSB7XHJcbiAgICBpZiAodGhpcy5uek1vZGFsUmVmKSB7XHJcbiAgICAgIHRoaXMubnpNb2RhbFJlZi5nZXRJbnN0YW5jZSgpLnNldEZvb3RlcldpdGhUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlUmVmKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19