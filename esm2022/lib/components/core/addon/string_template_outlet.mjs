import { Directive, Input, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export class NzStringTemplateOutletDirective {
    set nzStringTemplateOutlet(value) {
        if (value instanceof TemplateRef) {
            this.isTemplate = true;
            this.inputTemplate = value;
        }
        else {
            this.isTemplate = false;
        }
    }
    recreateView() {
        if (!this.isTemplate) {
            /** use default template when input is string **/
            if (!this.defaultViewRef) {
                if (this.defaultTemplate) {
                    this.defaultViewRef = this.viewContainer.createEmbeddedView(this.defaultTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
        else {
            /** use input template when input is templateRef **/
            if (!this.inputViewRef) {
                if (this.inputTemplate) {
                    this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate, this.nzStringTemplateOutletContext);
                }
            }
        }
    }
    // tslint:disable-next-line:no-any
    getType(value) {
        if (value instanceof TemplateRef) {
            return 'template';
        }
        else {
            return 'string';
        }
    }
    shouldRecreateView(changes) {
        const { nzStringTemplateOutletContext, nzStringTemplateOutlet } = changes;
        let shouldOutletRecreate = false;
        if (nzStringTemplateOutlet) {
            if (nzStringTemplateOutlet.firstChange) {
                shouldOutletRecreate = true;
            }
            else {
                const previousOutletType = this.getType(nzStringTemplateOutlet.previousValue);
                const currentOutletType = this.getType(nzStringTemplateOutlet.currentValue);
                shouldOutletRecreate = !(previousOutletType === 'string' && currentOutletType === 'string');
            }
        }
        const shouldContextRecreate = nzStringTemplateOutletContext && this.hasContextShapeChanged(nzStringTemplateOutletContext);
        return shouldContextRecreate || shouldOutletRecreate;
    }
    hasContextShapeChanged(ctxChange) {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
            for (const propName of currCtxKeys) {
                if (prevCtxKeys.indexOf(propName) === -1) {
                    return true;
                }
            }
            return false;
        }
        else {
            return true;
        }
    }
    // tslint:disable-next-line:no-any
    updateExistingContext(ctx) {
        for (const propName of Object.keys(ctx)) {
            // tslint:disable-next-line:no-any
            this.inputViewRef.context[propName] = this.nzStringTemplateOutletContext[propName];
        }
    }
    constructor(viewContainer, defaultTemplate) {
        this.viewContainer = viewContainer;
        this.defaultTemplate = defaultTemplate;
        // tslint:disable-next-line:no-any
        this.inputTemplate = null;
        this.inputViewRef = null;
        this.defaultViewRef = null;
        // tslint:disable-next-line:no-any
        this.nzStringTemplateOutletContext = null;
    }
    ngOnChanges(changes) {
        const recreateView = this.shouldRecreateView(changes);
        if (recreateView) {
            if (this.viewContainer) {
                this.viewContainer.clear();
                this.defaultViewRef = null;
                this.inputViewRef = null;
            }
            this.recreateView();
        }
        else {
            if (this.inputViewRef && this.nzStringTemplateOutletContext) {
                this.updateExistingContext(this.nzStringTemplateOutletContext);
            }
        }
    }
    static { this.ɵfac = function NzStringTemplateOutletDirective_Factory(t) { return new (t || NzStringTemplateOutletDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NzStringTemplateOutletDirective, selectors: [["", "nzStringTemplateOutlet", ""]], inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], features: [i0.ɵɵNgOnChangesFeature] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzStringTemplateOutletDirective, [{
        type: Directive,
        args: [{
                selector: '[nzStringTemplateOutlet]',
                exportAs: 'nzStringTemplateOutlet'
            }]
    }], () => [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }], { nzStringTemplateOutletContext: [{
            type: Input
        }], nzStringTemplateOutlet: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY29yZS9hZGRvbi9zdHJpbmdfdGVtcGxhdGVfb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUlMLFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQzs7QUFNdkIsTUFBTSxPQUFPLCtCQUErQjtJQVUxQyxJQUVJLHNCQUFzQixDQUFDLEtBQWdDO1FBQ3pELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDekQsSUFBSSxDQUFDLGVBQWUsRUFDcEIsSUFBSSxDQUFDLDZCQUE2QixDQUNuQyxDQUFDO2dCQUNKLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQzthQUFNLENBQUM7WUFDTixvREFBb0Q7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FB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LFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNqQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7Z0JBQzVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7Z0dBL0dVLCtCQUErQjtvRUFBL0IsK0JBQStCOztpRkFBL0IsK0JBQStCO2NBSjNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzJFQVNVLDZCQUE2QjtrQkFBckMsS0FBSztZQUlGLHNCQUFzQjtrQkFGekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnpTdHJpbmdUZW1wbGF0ZU91dGxldF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpTdHJpbmdUZW1wbGF0ZU91dGxldCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgaXNUZW1wbGF0ZTogYm9vbGVhbjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBpbnB1dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbnB1dFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVmYXVsdFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQ6IGFueSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgbnpTdHJpbmdUZW1wbGF0ZU91dGxldCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbnB1dFRlbXBsYXRlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzVGVtcGxhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlY3JlYXRlVmlldygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc1RlbXBsYXRlKSB7XHJcbiAgICAgIC8qKiB1c2UgZGVmYXVsdCB0ZW1wbGF0ZSB3aGVuIGlucHV0IGlzIHN0cmluZyAqKi9cclxuICAgICAgaWYgKCF0aGlzLmRlZmF1bHRWaWV3UmVmKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICB0aGlzLmRlZmF1bHRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvKiogdXNlIGlucHV0IHRlbXBsYXRlIHdoZW4gaW5wdXQgaXMgdGVtcGxhdGVSZWYgKiovXHJcbiAgICAgIGlmICghdGhpcy5pbnB1dFZpZXdSZWYpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGdldFR5cGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pOiAndGVtcGxhdGUnIHwgJ3N0cmluZycge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgcmV0dXJuICd0ZW1wbGF0ZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ3N0cmluZyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3VsZFJlY3JlYXRlVmlldyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB7IG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0LCBuelN0cmluZ1RlbXBsYXRlT3V0bGV0IH0gPSBjaGFuZ2VzO1xyXG4gICAgbGV0IHNob3VsZE91dGxldFJlY3JlYXRlID0gZmFsc2U7XHJcbiAgICBpZiAobnpTdHJpbmdUZW1wbGF0ZU91dGxldCkge1xyXG4gICAgICBpZiAobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5maXJzdENoYW5nZSkge1xyXG4gICAgICAgIHNob3VsZE91dGxldFJlY3JlYXRlID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c091dGxldFR5cGUgPSB0aGlzLmdldFR5cGUobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5wcmV2aW91c1ZhbHVlKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50T3V0bGV0VHlwZSA9IHRoaXMuZ2V0VHlwZShuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSAhKHByZXZpb3VzT3V0bGV0VHlwZSA9PT0gJ3N0cmluZycgJiYgY3VycmVudE91dGxldFR5cGUgPT09ICdzdHJpbmcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvdWxkQ29udGV4dFJlY3JlYXRlID1cclxuICAgICAgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQgJiYgdGhpcy5oYXNDb250ZXh0U2hhcGVDaGFuZ2VkKG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcclxuICAgIHJldHVybiBzaG91bGRDb250ZXh0UmVjcmVhdGUgfHwgc2hvdWxkT3V0bGV0UmVjcmVhdGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0NvbnRleHRTaGFwZUNoYW5nZWQoY3R4Q2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHByZXZDdHhLZXlzID0gT2JqZWN0LmtleXMoY3R4Q2hhbmdlLnByZXZpb3VzVmFsdWUgfHwge30pO1xyXG4gICAgY29uc3QgY3VyckN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UuY3VycmVudFZhbHVlIHx8IHt9KTtcclxuXHJcbiAgICBpZiAocHJldkN0eEtleXMubGVuZ3RoID09PSBjdXJyQ3R4S2V5cy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBjdXJyQ3R4S2V5cykge1xyXG4gICAgICAgIGlmIChwcmV2Q3R4S2V5cy5pbmRleE9mKHByb3BOYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIHVwZGF0ZUV4aXN0aW5nQ29udGV4dChjdHg6IGFueSk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjdHgpKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgKHRoaXMuaW5wdXRWaWV3UmVmIS5jb250ZXh0IGFzIGFueSlbcHJvcE5hbWVdID0gdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFtwcm9wTmFtZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgZGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVjcmVhdGVWaWV3ID0gdGhpcy5zaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlcyk7XHJcbiAgICBpZiAocmVjcmVhdGVWaWV3KSB7XHJcbiAgICAgIGlmICh0aGlzLnZpZXdDb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRWaWV3UmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWNyZWF0ZVZpZXcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0Vmlld1JlZiAmJiB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFeGlzdGluZ0NvbnRleHQodGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19