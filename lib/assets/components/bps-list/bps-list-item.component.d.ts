import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, QueryList, Renderer2, TemplateRef, EventEmitter } from '@angular/core';
import { BpsListItemMetaComponent } from './bps-list-item-meta.component';
import { BpsListComponent } from './bps-list.component';
import * as i0 from "@angular/core";
export declare class BpsListItemComponent implements OnDestroy, AfterViewInit {
    private parentComp;
    private cdr;
    _onDeleteHover: boolean;
    metas: QueryList<BpsListItemMetaComponent>;
    bpsActions: Array<TemplateRef<void>>;
    bpsContent: string | TemplateRef<void>;
    bpsExtra: TemplateRef<void>;
    bpsNoFlex: boolean;
    bpsDelete: boolean;
    ondelete: EventEmitter<any>;
    ondeletehover: EventEmitter<any>;
    hover: EventEmitter<any>;
    private itemLayout;
    private itemLayout$;
    get isVerticalAndExtra(): boolean;
    onDeleteHover(event: any): void;
    onHover(event: any): void;
    onDelete(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, parentComp: BpsListComponent, cdr: ChangeDetectorRef);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsListItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsListItemComponent, "bps-list-item, [bps-list-item]", ["bpsListItem"], { "bpsActions": { "alias": "bpsActions"; "required": false; }; "bpsContent": { "alias": "bpsContent"; "required": false; }; "bpsExtra": { "alias": "bpsExtra"; "required": false; }; "bpsNoFlex": { "alias": "bpsNoFlex"; "required": false; }; "bpsDelete": { "alias": "bpsDelete"; "required": false; }; }, { "ondelete": "ondelete"; "ondeletehover": "ondeletehover"; "hover": "hover"; }, ["metas"], ["*"], false, never>;
}
//# sourceMappingURL=bps-list-item.component.d.ts.map