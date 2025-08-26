import { AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { BpsButtonGroupComponent } from '../bps-button/bps-button-group.component';
import * as i0 from "@angular/core";
export declare class BpsDropdownButtonDirective implements AfterViewInit {
    private renderer;
    private nzButtonGroupComponent;
    private elementRef;
    constructor(renderer: Renderer2, nzButtonGroupComponent: BpsButtonGroupComponent, elementRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsDropdownButtonDirective, [null, { optional: true; host: true; }, null]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BpsDropdownButtonDirective, "[bps-button][bps-dropdown]", never, {}, {}, never, never, false, never>;
}
//# sourceMappingURL=dropdown-button.directive.d.ts.map