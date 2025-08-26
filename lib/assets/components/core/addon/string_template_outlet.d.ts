import { OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NzStringTemplateOutletDirective implements OnChanges {
    private viewContainer;
    private defaultTemplate;
    private isTemplate;
    private inputTemplate;
    private inputViewRef;
    private defaultViewRef;
    nzStringTemplateOutletContext: any | null;
    set nzStringTemplateOutlet(value: string | TemplateRef<any>);
    recreateView(): void;
    private getType;
    private shouldRecreateView;
    private hasContextShapeChanged;
    private updateExistingContext;
    constructor(viewContainer: ViewContainerRef, defaultTemplate: TemplateRef<void>);
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NzStringTemplateOutletDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<NzStringTemplateOutletDirective, "[nzStringTemplateOutlet]", ["nzStringTemplateOutlet"], { "nzStringTemplateOutletContext": { "alias": "nzStringTemplateOutletContext"; "required": false; }; "nzStringTemplateOutlet": { "alias": "nzStringTemplateOutlet"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=string_template_outlet.d.ts.map