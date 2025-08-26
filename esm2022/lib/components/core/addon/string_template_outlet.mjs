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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzStringTemplateOutletDirective, deps: [{ token: i0.ViewContainerRef }, { token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: NzStringTemplateOutletDirective, selector: "[nzStringTemplateOutlet]", inputs: { nzStringTemplateOutletContext: "nzStringTemplateOutletContext", nzStringTemplateOutlet: "nzStringTemplateOutlet" }, exportAs: ["nzStringTemplateOutlet"], usesOnChanges: true, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzStringTemplateOutletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[nzStringTemplateOutlet]',
                    exportAs: 'nzStringTemplateOutlet'
                }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }, { type: i0.TemplateRef }], propDecorators: { nzStringTemplateOutletContext: [{
                type: Input
            }], nzStringTemplateOutlet: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX3RlbXBsYXRlX291dGxldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2Jwcy1jb21wb25lbnRzLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY29yZS9hZGRvbi9zdHJpbmdfdGVtcGxhdGVfb3V0bGV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBRVQsS0FBSyxFQUlMLFdBQVcsRUFFWixNQUFNLGVBQWUsQ0FBQzs7QUFNdkIsTUFBTSxPQUFPLCtCQUErQjtJQVUxQyxJQUVJLHNCQUFzQixDQUFDLEtBQWdDO1FBQ3pELElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7YUFBTSxDQUFDO1lBQ04sSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQztJQUNILENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUNyQixpREFBaUQ7WUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDekIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FDekQsSUFBSSxDQUFDLGVBQWUsRUFDcEIsSUFBSSxDQUFDLDZCQUE2QixDQUNuQyxDQUFDO2dCQUNKLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQzthQUFNLENBQUM7WUFDTixvREFBb0Q7WUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQ3ZCLElBQUksQ0FB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LFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxZQUFZLEVBQUUsQ0FBQztZQUNqQixJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQzNCLENBQUM7WUFDRCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLDZCQUE2QixFQUFFLENBQUM7Z0JBQzVELElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztZQUNqRSxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7K0dBL0dVLCtCQUErQjttR0FBL0IsK0JBQStCOzs0RkFBL0IsK0JBQStCO2tCQUozQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7b0JBQ3BDLFFBQVEsRUFBRSx3QkFBd0I7aUJBQ25DOytHQVNVLDZCQUE2QjtzQkFBckMsS0FBSztnQkFJRixzQkFBc0I7c0JBRnpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbWJlZGRlZFZpZXdSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256U3RyaW5nVGVtcGxhdGVPdXRsZXRdJyxcclxuICBleHBvcnRBczogJ256U3RyaW5nVGVtcGxhdGVPdXRsZXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelN0cmluZ1RlbXBsYXRlT3V0bGV0RGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGlzVGVtcGxhdGU6IGJvb2xlYW47XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgaW5wdXRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgaW5wdXRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIGRlZmF1bHRWaWV3UmVmOiBFbWJlZGRlZFZpZXdSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIEBJbnB1dCgpIG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0OiBhbnkgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgQElucHV0KClcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgc2V0IG56U3RyaW5nVGVtcGxhdGVPdXRsZXQodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPGFueT4pIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHRoaXMuaXNUZW1wbGF0ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW5wdXRUZW1wbGF0ZSA9IHZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc1RlbXBsYXRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWNyZWF0ZVZpZXcoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNUZW1wbGF0ZSkge1xyXG4gICAgICAvKiogdXNlIGRlZmF1bHQgdGVtcGxhdGUgd2hlbiBpbnB1dCBpcyBzdHJpbmcgKiovXHJcbiAgICAgIGlmICghdGhpcy5kZWZhdWx0Vmlld1JlZikge1xyXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1JlZiA9IHRoaXMudmlld0NvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcoXHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdFRlbXBsYXRlLFxyXG4gICAgICAgICAgICB0aGlzLm56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLyoqIHVzZSBpbnB1dCB0ZW1wbGF0ZSB3aGVuIGlucHV0IGlzIHRlbXBsYXRlUmVmICoqL1xyXG4gICAgICBpZiAoIXRoaXMuaW5wdXRWaWV3UmVmKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dFZpZXdSZWYgPSB0aGlzLnZpZXdDb250YWluZXIuY3JlYXRlRW1iZWRkZWRWaWV3KFxyXG4gICAgICAgICAgICB0aGlzLmlucHV0VGVtcGxhdGUsXHJcbiAgICAgICAgICAgIHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHRcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSBnZXRUeXBlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxhbnk+KTogJ3RlbXBsYXRlJyB8ICdzdHJpbmcnIHtcclxuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XHJcbiAgICAgIHJldHVybiAndGVtcGxhdGUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICdzdHJpbmcnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzaG91bGRSZWNyZWF0ZVZpZXcoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgeyBuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCwgbnpTdHJpbmdUZW1wbGF0ZU91dGxldCB9ID0gY2hhbmdlcztcclxuICAgIGxldCBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IGZhbHNlO1xyXG4gICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQpIHtcclxuICAgICAgaWYgKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgICBzaG91bGRPdXRsZXRSZWNyZWF0ZSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNPdXRsZXRUeXBlID0gdGhpcy5nZXRUeXBlKG56U3RyaW5nVGVtcGxhdGVPdXRsZXQucHJldmlvdXNWYWx1ZSk7XHJcbiAgICAgICAgY29uc3QgY3VycmVudE91dGxldFR5cGUgPSB0aGlzLmdldFR5cGUobnpTdHJpbmdUZW1wbGF0ZU91dGxldC5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIHNob3VsZE91dGxldFJlY3JlYXRlID0gIShwcmV2aW91c091dGxldFR5cGUgPT09ICdzdHJpbmcnICYmIGN1cnJlbnRPdXRsZXRUeXBlID09PSAnc3RyaW5nJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHNob3VsZENvbnRleHRSZWNyZWF0ZSA9XHJcbiAgICAgIG56U3RyaW5nVGVtcGxhdGVPdXRsZXRDb250ZXh0ICYmIHRoaXMuaGFzQ29udGV4dFNoYXBlQ2hhbmdlZChuelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCk7XHJcbiAgICByZXR1cm4gc2hvdWxkQ29udGV4dFJlY3JlYXRlIHx8IHNob3VsZE91dGxldFJlY3JlYXRlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNDb250ZXh0U2hhcGVDaGFuZ2VkKGN0eENoYW5nZTogU2ltcGxlQ2hhbmdlKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBwcmV2Q3R4S2V5cyA9IE9iamVjdC5rZXlzKGN0eENoYW5nZS5wcmV2aW91c1ZhbHVlIHx8IHt9KTtcclxuICAgIGNvbnN0IGN1cnJDdHhLZXlzID0gT2JqZWN0LmtleXMoY3R4Q2hhbmdlLmN1cnJlbnRWYWx1ZSB8fCB7fSk7XHJcblxyXG4gICAgaWYgKHByZXZDdHhLZXlzLmxlbmd0aCA9PT0gY3VyckN0eEtleXMubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgY3VyckN0eEtleXMpIHtcclxuICAgICAgICBpZiAocHJldkN0eEtleXMuaW5kZXhPZihwcm9wTmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgcHJpdmF0ZSB1cGRhdGVFeGlzdGluZ0NvbnRleHQoY3R4OiBhbnkpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgb2YgT2JqZWN0LmtleXMoY3R4KSkge1xyXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICAgICh0aGlzLmlucHV0Vmlld1JlZiEuY29udGV4dCBhcyBhbnkpW3Byb3BOYW1lXSA9IHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHRbcHJvcE5hbWVdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3Q29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCBwcml2YXRlIGRlZmF1bHRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD4pIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlY3JlYXRlVmlldyA9IHRoaXMuc2hvdWxkUmVjcmVhdGVWaWV3KGNoYW5nZXMpO1xyXG4gICAgaWYgKHJlY3JlYXRlVmlldykge1xyXG4gICAgICBpZiAodGhpcy52aWV3Q29udGFpbmVyKSB7XHJcbiAgICAgICAgdGhpcy52aWV3Q29udGFpbmVyLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0Vmlld1JlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZpZXdSZWYgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucmVjcmVhdGVWaWV3KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5pbnB1dFZpZXdSZWYgJiYgdGhpcy5uelN0cmluZ1RlbXBsYXRlT3V0bGV0Q29udGV4dCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRXhpc3RpbmdDb250ZXh0KHRoaXMubnpTdHJpbmdUZW1wbGF0ZU91dGxldENvbnRleHQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==