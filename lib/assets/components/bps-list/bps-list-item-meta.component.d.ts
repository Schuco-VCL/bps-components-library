import { ElementRef, Renderer2, TemplateRef } from '@angular/core';
import * as i0 from "@angular/core";
export declare class BpsListItemMetaComponent {
    elementRef: ElementRef;
    private renderer;
    avatarStr: string;
    avatarTpl: TemplateRef<void>;
    set bpsAvatar(value: string | TemplateRef<void>);
    bpsTitle: string | TemplateRef<void>;
    bpsDescription: string | TemplateRef<void>;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsListItemMetaComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsListItemMetaComponent, "bps-list-item-meta, [bps-list-item-meta]", ["bpsListItemMeta"], { "bpsAvatar": { "alias": "bpsAvatar"; "required": false; }; "bpsTitle": { "alias": "bpsTitle"; "required": false; }; "bpsDescription": { "alias": "bpsDescription"; "required": false; }; }, {}, never, never, false, never>;
}
//# sourceMappingURL=bps-list-item-meta.component.d.ts.map