import { ChangeDetectionStrategy, Component, EventEmitter, Host, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { slideMotion } from 'ng-zorro-antd/core/animation';
import { MenuService, NzIsMenuInsideDropDownToken } from 'ng-zorro-antd/menu';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/menu";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "ng-zorro-antd/core/no-animation";
import * as i4 from "@angular/common";
const _c0 = ["*"];
function BpsDropdownMenuComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 0);
    i0.ɵɵlistener("@slideMotion.done", function BpsDropdownMenuComponent_ng_template_0_Template_div_animation_slideMotion_done_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onAnimationEvent($event)); })("mouseenter", function BpsDropdownMenuComponent_ng_template_0_Template_div_mouseenter_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setMouseState(true)); })("mouseleave", function BpsDropdownMenuComponent_ng_template_0_Template_div_mouseleave_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setMouseState(false)); });
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("ant-dropdown-placement-bottomLeft", ctx_r1.bpsPlacement === "bottomLeft")("ant-dropdown-placement-bottomCenter", ctx_r1.bpsPlacement === "bottomCenter")("ant-dropdown-placement-bottomRight", ctx_r1.bpsPlacement === "bottomRight")("ant-dropdown-placement-topLeft", ctx_r1.bpsPlacement === "topLeft")("ant-dropdown-placement-topCenter", ctx_r1.bpsPlacement === "topCenter")("ant-dropdown-placement-topRight", ctx_r1.bpsPlacement === "topRight")("ant-dropdown-placement-rightTop", ctx_r1.bpsPlacement === "rightTop")("ant-dropdown-rtl", ctx_r1.dir === "rtl");
    i0.ɵɵproperty("ngClass", ctx_r1.bpsOverlayClassName)("ngStyle", ctx_r1.bpsOverlayStyle)("@slideMotion", undefined)("@.disabled", !!(ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation))("nzNoAnimation", ctx_r1.noAnimation == null ? null : ctx_r1.noAnimation.nzNoAnimation);
} }
export class BpsDropdownMenuComponent {
    onAnimationEvent(event) {
        this.animationStateChange$.emit(event);
    }
    setMouseState(visible) {
        this.mouseState$.next(visible);
    }
    setValue(key, value) {
        this[key] = value;
        this.cdr.markForCheck();
    }
    constructor(cdr, elementRef, renderer, viewContainerRef, nzMenuService, directionality, noAnimation) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.nzMenuService = nzMenuService;
        this.directionality = directionality;
        this.noAnimation = noAnimation;
        this.mouseState$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = this.nzMenuService.isChildSubMenuOpen$;
        this.descendantMenuItemClick$ = this.nzMenuService.descendantMenuItemClick$;
        this.animationStateChange$ = new EventEmitter();
        this.bpsOverlayClassName = '';
        this.bpsOverlayStyle = {};
        this.bpsPlacement = '';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterContentInit() {
        this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function BpsDropdownMenuComponent_Factory(t) { return new (t || BpsDropdownMenuComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.MenuService), i0.ɵɵdirectiveInject(i2.Directionality, 8), i0.ɵɵdirectiveInject(i3.NzNoAnimationDirective, 9)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BpsDropdownMenuComponent, selectors: [["bps-dropdown-menu"]], viewQuery: function BpsDropdownMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.templateRef = _t.first);
        } }, exportAs: ["bpsDropdownMenu"], features: [i0.ɵɵProvidersFeature([
                MenuService,
                /** menu is inside dropdown-menu component **/
                {
                    provide: NzIsMenuInsideDropDownToken,
                    useValue: true
                }
            ])], ngContentSelectors: _c0, decls: 1, vars: 0, consts: [[1, "ant-dropdown", "bps-dropdown", 3, "mouseenter", "mouseleave", "ngClass", "ngStyle", "nzNoAnimation"]], template: function BpsDropdownMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, BpsDropdownMenuComponent_ng_template_0_Template, 2, 21, "ng-template");
        } }, dependencies: [i4.NgClass, i4.NgStyle, i3.NzNoAnimationDirective], styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before,.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-16px;transition:all .3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:6px;right:calc(100% - 8px);-webkit-transition:all .3s;transition:all .3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover:before{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:hover:before{background-color:#262626!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}\n"], encapsulation: 2, data: { animation: [slideMotion] }, changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BpsDropdownMenuComponent, [{
        type: Component,
        args: [{ selector: `bps-dropdown-menu`, exportAs: `bpsDropdownMenu`, animations: [slideMotion], providers: [
                    MenuService,
                    /** menu is inside dropdown-menu component **/
                    {
                        provide: NzIsMenuInsideDropDownToken,
                        useValue: true
                    }
                ], template: `
    <ng-template>
      <div
        class="ant-dropdown bps-dropdown"
        [class.ant-dropdown-placement-bottomLeft]="bpsPlacement === 'bottomLeft'"
        [class.ant-dropdown-placement-bottomCenter]="bpsPlacement === 'bottomCenter'"
        [class.ant-dropdown-placement-bottomRight]="bpsPlacement === 'bottomRight'"
        [class.ant-dropdown-placement-topLeft]="bpsPlacement === 'topLeft'"
        [class.ant-dropdown-placement-topCenter]="bpsPlacement === 'topCenter'"
        [class.ant-dropdown-placement-topRight]="bpsPlacement === 'topRight'"
        [class.ant-dropdown-placement-rightTop]="bpsPlacement === 'rightTop'"
        [class.ant-dropdown-rtl]="dir === 'rtl'"
        [ngClass]="bpsOverlayClassName"
        [ngStyle]="bpsOverlayStyle"
        @slideMotion
        (@slideMotion.done)="onAnimationEvent($event)"
        [@.disabled]="!!noAnimation?.nzNoAnimation"
        [nzNoAnimation]="noAnimation?.nzNoAnimation"
        (mouseenter)="setMouseState(true)"
        (mouseleave)="setMouseState(false)"
      >
        <ng-content></ng-content>
      </div>
    </ng-template>
  `, preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before,.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-16px;transition:all .3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:6px;right:calc(100% - 8px);-webkit-transition:all .3s;transition:all .3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover:before{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:hover:before{background-color:#262626!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}\n"] }]
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i1.MenuService }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }, { type: i3.NzNoAnimationDirective, decorators: [{
                type: Host
            }, {
                type: Optional
            }] }], { templateRef: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BpsDropdownMenuComponent, { className: "BpsDropdownMenuComponent", filePath: "lib\\components\\bps-dropdown\\dropdown-menu.component.ts", lineNumber: 73 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1kcm9wZG93bi9kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUdKLFFBQVEsRUFFUixXQUFXLEVBQ1gsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7O0lBbUJ4RSw4QkFrQkM7SUFEQyxBQURBLEFBSEEsZ09BQXFCLCtCQUF3QixLQUFDLHNMQUdoQyxxQkFBYyxJQUFJLENBQUMsS0FBQyxzTEFDcEIscUJBQWMsS0FBSyxDQUFDLEtBQUM7SUFFbkMsa0JBQXlCO0lBQzNCLGlCQUFNOzs7SUFYSixBQURBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSxBQURBLHlGQUF5RSwrRUFDSSw2RUFDRixxRUFDUix5RUFDSSx1RUFDRix1RUFDQSwwQ0FDN0I7SUFNeEMsQUFEQSxBQUZBLEFBREEsQUFEQSxvREFBK0IsbUNBQ0osMkJBQ2Ysd0ZBRStCLHVGQUNDOztBQWFwRCxNQUFNLE9BQU8sd0JBQXdCO0lBY25DLGdCQUFnQixDQUFDLEtBQXFCO1FBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENB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SSxtQkFDcEIsdUJBQXVCLENBQUMsTUFBTTs7c0JBbUM1QyxRQUFROztzQkFDUixJQUFJOztzQkFBSSxRQUFRO3FCQTNCdUIsV0FBVztrQkFBcEQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztrRkFQN0Isd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0aW9uRXZlbnQgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBzbGlkZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL25vLWFuaW1hdGlvbic7XHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCwgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgTWVudVNlcnZpY2UsIE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVudSc7XHJcbmltcG9ydCB7IGdldFBsYWNlbWVudE5hbWUgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbic7XHJcblxyXG5leHBvcnQgdHlwZSBOelBsYWNlbWVudFR5cGUgPSAnYm90dG9tTGVmdCcgfCAnYm90dG9tQ2VudGVyJyB8ICdib3R0b21SaWdodCcgfCAndG9wTGVmdCcgfCAndG9wQ2VudGVyJyB8ICd0b3BSaWdodCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogYGJwcy1kcm9wZG93bi1tZW51YCxcclxuICBleHBvcnRBczogYGJwc0Ryb3Bkb3duTWVudWAsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIE1lbnVTZXJ2aWNlLFxyXG4gICAgLyoqIG1lbnUgaXMgaW5zaWRlIGRyb3Bkb3duLW1lbnUgY29tcG9uZW50ICoqL1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOeklzTWVudUluc2lkZURyb3BEb3duVG9rZW4sXHJcbiAgICAgIHVzZVZhbHVlOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPG5nLXRlbXBsYXRlPlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3M9XCJhbnQtZHJvcGRvd24gYnBzLWRyb3Bkb3duXCJcclxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21MZWZ0XT1cImJwc1BsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21DZW50ZXJdPVwiYnBzUGxhY2VtZW50ID09PSAnYm90dG9tQ2VudGVyJ1wiXHJcbiAgICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtYm90dG9tUmlnaHRdPVwiYnBzUGxhY2VtZW50ID09PSAnYm90dG9tUmlnaHQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0XT1cImJwc1BsYWNlbWVudCA9PT0gJ3RvcExlZnQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC10b3BDZW50ZXJdPVwiYnBzUGxhY2VtZW50ID09PSAndG9wQ2VudGVyJ1wiXHJcbiAgICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1wbGFjZW1lbnQtdG9wUmlnaHRdPVwiYnBzUGxhY2VtZW50ID09PSAndG9wUmlnaHQnXCJcclxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC1yaWdodFRvcF09XCJicHNQbGFjZW1lbnQgPT09ICdyaWdodFRvcCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tcnRsXT1cImRpciA9PT0gJ3J0bCdcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cImJwc092ZXJsYXlDbGFzc05hbWVcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImJwc092ZXJsYXlTdHlsZVwiXHJcbiAgICAgICAgQHNsaWRlTW90aW9uXHJcbiAgICAgICAgKEBzbGlkZU1vdGlvbi5kb25lKT1cIm9uQW5pbWF0aW9uRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAgICAgW0AuZGlzYWJsZWRdPVwiISFub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgW256Tm9BbmltYXRpb25dPVwibm9BbmltYXRpb24/Lm56Tm9BbmltYXRpb25cIlxyXG4gICAgICAgIChtb3VzZWVudGVyKT1cInNldE1vdXNlU3RhdGUodHJ1ZSlcIlxyXG4gICAgICAgIChtb3VzZWxlYXZlKT1cInNldE1vdXNlU3RhdGUoZmFsc2UpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnBzLWRyb3Bkb3duLW1lbnUuY29tcG9uZW50LmNzcyddLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBtb3VzZVN0YXRlJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGlzQ2hpbGRTdWJNZW51T3BlbiQgPSB0aGlzLm56TWVudVNlcnZpY2UuaXNDaGlsZFN1Yk1lbnVPcGVuJDtcclxuICBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQgPSB0aGlzLm56TWVudVNlcnZpY2UuZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skO1xyXG4gIGFuaW1hdGlvblN0YXRlQ2hhbmdlJCA9IG5ldyBFdmVudEVtaXR0ZXI8QW5pbWF0aW9uRXZlbnQ+KCk7XHJcbiAgYnBzT3ZlcmxheUNsYXNzTmFtZTogc3RyaW5nID0gJyc7XHJcbiAgYnBzT3ZlcmxheVN0eWxlOiBJbmRleGFibGVPYmplY3QgPSB7fTtcclxuICBAVmlld0NoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogdHJ1ZSB9KSB0ZW1wbGF0ZVJlZiE6IFRlbXBsYXRlUmVmPE56U2FmZUFueT47XHJcblxyXG4gIGJwc1BsYWNlbWVudCA9ICcnO1xyXG5cclxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBvbkFuaW1hdGlvbkV2ZW50KGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xyXG4gICAgdGhpcy5hbmltYXRpb25TdGF0ZUNoYW5nZSQuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZXRNb3VzZVN0YXRlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMubW91c2VTdGF0ZSQubmV4dCh2aXNpYmxlKTtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlPFQgZXh0ZW5kcyBrZXlvZiBCcHNEcm9wZG93bk1lbnVDb21wb25lbnQ+KGtleTogVCwgdmFsdWU6IHRoaXNbVF0pOiB2b2lkIHtcclxuICAgIHRoaXNba2V5XSA9IHZhbHVlO1xyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHB1YmxpYyB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHVibGljIG56TWVudVNlcnZpY2U6IE1lbnVTZXJ2aWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBkaXJlY3Rpb25hbGl0eTogRGlyZWN0aW9uYWxpdHksXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcclxuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlyID0gdGhpcy5kaXJlY3Rpb25hbGl0eS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19