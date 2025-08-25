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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzStringTemplateOutletDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.2.12", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzStringTemplateOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nzStringTemplateOutlet]',
                    exportAs: 'nzStringTemplateOutlet'
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, propDecorators: { nzStringTemplateOutletContext: [{
                type: Input
            }], nzStringTemplateOutlet: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY29yZS9hZGRvbi9zdHJpbmdfdGVtcGxhdGVfb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUlMLFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQzs7QUFNdkIsTUFBTSxPQUFPLCtCQUErQjtJQVUxQyxJQUVJLHNCQUFzQixDQUFDLEtBQWdDO1FBQ3pELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLGlEQUFpRDtZQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDeEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO29CQUN4QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQ3pELElBQUksQ0FBQyxlQUFlLEVBQ3BCLElBQUksQ0FBQyw2QkFBNkIsQ0FDbkMsQ0FBQztpQkFDSDthQUNGO1NBQ0Y7YUFBTTtZQUNMLG9EQUFvRDtZQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUN0QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQ3ZELElBQUksQ0FBQyxhQUFhLEVBQ2xC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LENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7YUFDMUI7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsNkJBQTZCLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQzthQUNoRTtTQUNGO0lBQ0gsQ0FBQzsrR0EvR1UsK0JBQStCO21HQUEvQiwrQkFBK0I7OzRGQUEvQiwrQkFBK0I7a0JBSjNDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLHdCQUF3QjtpQkFDbkM7aUlBU1UsNkJBQTZCO3NCQUFyQyxLQUFLO2dCQUlGLHNCQUFzQjtzQkFGekIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbbnpTdHJpbmdUZW1wbGF0ZU91dGxldF0nLFxyXG4gIGV4cG9ydEFzOiAnbnpTdHJpbmdUZW1wbGF0ZU91dGxldCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56U3RyaW5nVGVtcGxhdGVPdXRsZXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgaXNUZW1wbGF0ZTogYm9vbGVhbjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBpbnB1dFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+IHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbnB1dFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVmYXVsdFZpZXdSZWY6IEVtYmVkZGVkVmlld1JlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgQElucHV0KCkgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQ6IGFueSB8IG51bGwgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBzZXQgbnpTdHJpbmdUZW1wbGF0ZU91dGxldCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8YW55Pikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pbnB1dFRlbXBsYXRlID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlzVGVtcGxhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlY3JlYXRlVmlldygpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5pc1RlbXBsYXRlKSB7XHJcbiAgICAgIC8qKiB1c2UgZGVmYXVsdCB0ZW1wbGF0ZSB3aGVuIGlucHV0IGlzIHN0cmluZyAqKi9cclxuICAgICAgaWYgKCF0aGlzLmRlZmF1bHRWaWV3UmVmKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICB0aGlzLmRlZmF1bHRWaWV3UmVmID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyhcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0VGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvKiogdXNlIGlucHV0IHRlbXBsYXRlIHdoZW4gaW5wdXQgaXMgdGVtcGxhdGVSZWYgKiovXHJcbiAgICAgIGlmICghdGhpcy5pbnB1dFZpZXdSZWYpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dFRlbXBsYXRlKSB7XHJcbiAgICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIGdldFR5cGUodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pOiAndGVtcGxhdGUnIHwgJ3N0cmluZycge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpIHtcclxuICAgICAgcmV0dXJuICd0ZW1wbGF0ZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJ3N0cmluZyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNob3VsZFJlY3JlYXRlVmlldyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCB7IG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0LCBuelN0cmluZ1RlbXBsYXRlT3V0bGV0IH0gPSBjaGFuZ2VzO1xyXG4gICAgbGV0IHNob3VsZE91dGxldFJlY3JlYXRlID0gZmFsc2U7XHJcbiAgICBpZiAobnpTdHJpbmdUZW1wbGF0ZU91dGxldCkge1xyXG4gICAgICBpZiAobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5maXJzdENoYW5nZSkge1xyXG4gICAgICAgIHNob3VsZE91dGxldFJlY3JlYXRlID0gdHJ1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c091dGxldFR5cGUgPSB0aGlzLmdldFR5cGUobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5wcmV2aW91c1ZhbHVlKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50T3V0bGV0VHlwZSA9IHRoaXMuZ2V0VHlwZShuelN0cmluZ1RlbXBsYXRlT3V0bGV0LmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgc2hvdWxkT3V0bGV0UmVjcmVhdGUgPSAhKHByZXZpb3VzT3V0bGV0VHlwZSA9PT0gJ3N0cmluZycgJiYgY3VycmVudE91dGxldFR5cGUgPT09ICdzdHJpbmcnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvdWxkQ29udGV4dFJlY3JlYXRlID1cclxuICAgICAgbnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQgJiYgdGhpcy5oYXNDb250ZXh0U2hhcGVDaGFuZ2VkKG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KTtcclxuICAgIHJldHVybiBzaG91bGRDb250ZXh0UmVjcmVhdGUgfHwgc2hvdWxkT3V0bGV0UmVjcmVhdGU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0NvbnRleHRTaGFwZUNoYW5nZWQoY3R4Q2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHByZXZDdHhLZXlzID0gT2JqZWN0LmtleXMoY3R4Q2hhbmdlLnByZXZpb3VzVmFsdWUgfHwge30pO1xyXG4gICAgY29uc3QgY3VyckN0eEtleXMgPSBPYmplY3Qua2V5cyhjdHhDaGFuZ2UuY3VycmVudFZhbHVlIHx8IHt9KTtcclxuXHJcbiAgICBpZiAocHJldkN0eEtleXMubGVuZ3RoID09PSBjdXJyQ3R4S2V5cy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBjdXJyQ3R4S2V5cykge1xyXG4gICAgICAgIGlmIChwcmV2Q3R4S2V5cy5pbmRleE9mKHByb3BOYW1lKSA9PT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIHVwZGF0ZUV4aXN0aW5nQ29udGV4dChjdHg6IGFueSk6IHZvaWQge1xyXG4gICAgZm9yIChjb25zdCBwcm9wTmFtZSBvZiBPYmplY3Qua2V5cyhjdHgpKSB7XHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgKHRoaXMuaW5wdXRWaWV3UmVmIS5jb250ZXh0IGFzIGFueSlbcHJvcE5hbWVdID0gdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dFtwcm9wTmFtZV07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsIHByaXZhdGUgZGVmYXVsdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPikge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVjcmVhdGVWaWV3ID0gdGhpcy5zaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlcyk7XHJcbiAgICBpZiAocmVjcmVhdGVWaWV3KSB7XHJcbiAgICAgIGlmICh0aGlzLnZpZXdDb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLnZpZXdDb250YWluZXIuY2xlYXIoKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRWaWV3UmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlucHV0Vmlld1JlZiA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5yZWNyZWF0ZVZpZXcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmlucHV0Vmlld1JlZiAmJiB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0KSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFeGlzdGluZ0NvbnRleHQodGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19