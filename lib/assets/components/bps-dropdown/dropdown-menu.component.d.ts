import { AnimationEvent } from '@angular/animations';
import { Direction, Directionality } from '@angular/cdk/bidi';
import { AfterContentInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core/no-animation';
import { IndexableObject, NzSafeAny } from 'ng-zorro-antd/core/types';
import { MenuService } from 'ng-zorro-antd/menu';
import * as i0 from "@angular/core";
export type NzPlacementType = 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
export declare class BpsDropdownMenuComponent implements AfterContentInit, OnDestroy, OnInit {
    private cdr;
    private elementRef;
    private renderer;
    viewContainerRef: ViewContainerRef;
    nzMenuService: MenuService;
    private directionality;
    noAnimation?: NzNoAnimationDirective;
    mouseState$: BehaviorSubject<boolean>;
    isChildSubMenuOpen$: BehaviorSubject<boolean>;
    descendantMenuItemClick$: Subject<any>;
    animationStateChange$: EventEmitter<AnimationEvent>;
    bpsOverlayClassName: string;
    bpsOverlayStyle: IndexableObject;
    templateRef: TemplateRef<NzSafeAny>;
    bpsPlacement: string;
    dir: Direction;
    private destroy$;
    onAnimationEvent(event: AnimationEvent): void;
    setMouseState(visible: boolean): void;
    setValue<T extends keyof BpsDropdownMenuComponent>(key: T, value: this[T]): void;
    constructor(cdr: ChangeDetectorRef, elementRef: ElementRef, renderer: Renderer2, viewContainerRef: ViewContainerRef, nzMenuService: MenuService, directionality: Directionality, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsDropdownMenuComponent, [null, null, null, null, null, { optional: true; }, { optional: true; host: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BpsDropdownMenuComponent, "bps-dropdown-menu", ["bpsDropdownMenu"], {}, {}, never, ["*"], false, never>;
}
//# sourceMappingURL=dropdown-menu.component.d.ts.map