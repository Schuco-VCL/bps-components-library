import { AfterContentInit, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { BpsInputDirective } from './bps-input.directive';
import * as i0 from "@angular/core";
export declare class BpsTextareaCountComponent implements AfterContentInit, OnDestroy {
    private renderer;
    private elementRef;
    nzInputDirective: BpsInputDirective;
    bpsMaxCharacterCount: number;
    bpsComputeCharacterCount: (v: string) => number;
    bpsFormatter: (cur: number, max: number) => string;
    private configChange$;
    private destroy$;
    constructor(renderer: Renderer2, elementRef: ElementRef<HTMLElement>);
    ngAfterContentInit(): void;
    setDataCount(value: string): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsTextareaCountComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsTextareaCountComponent, "bps-textarea-count", never, { "bpsMaxCharacterCount": { "alias": "bpsMaxCharacterCount"; "required": false; }; "bpsComputeCharacterCount": { "alias": "bpsComputeCharacterCount"; "required": false; }; "bpsFormatter": { "alias": "bpsFormatter"; "required": false; }; }, {}, ["nzInputDirective"], ["textarea[bps-input]"], false, never>;
}
//# sourceMappingURL=textarea-count.component.d.ts.map