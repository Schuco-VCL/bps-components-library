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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropdownMenuComponent, deps: [{ token: i0.ChangeDetectorRef }, { token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i0.ViewContainerRef }, { token: i1.MenuService }, { token: i2.Directionality, optional: true }, { token: i3.NzNoAnimationDirective, host: true, optional: true }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.2.12", type: BpsDropdownMenuComponent, selector: "bps-dropdown-menu", providers: [
            MenuService,
            /** menu is inside dropdown-menu component **/
            {
                provide: NzIsMenuInsideDropDownToken,
                useValue: true
            }
        ], viewQueries: [{ propertyName: "templateRef", first: true, predicate: TemplateRef, descendants: true, static: true }], exportAs: ["bpsDropdownMenu"], ngImport: i0, template: `
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
  `, isInline: true, styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before,.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-16px;transition:all .3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:6px;right:calc(100% - 8px);transition:all .3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover:before{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:hover:before{background-color:#262626!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}\n"], dependencies: [{ kind: "directive", type: i4.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i4.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i3.NzNoAnimationDirective, selector: "[nzNoAnimation]", inputs: ["nzNoAnimation"], exportAs: ["nzNoAnimation"] }], animations: [slideMotion], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: BpsDropdownMenuComponent, decorators: [{
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
  `, preserveWhitespaces: false, encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, styles: [".bps-dropdown ul.ant-dropdown-menu{box-shadow:0 3px 12px #000000e6!important;background-color:#262626!important;padding:10px 0!important;border-radius:10px!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item.ant-dropdown-menu-item-selected,.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item{padding:7px 15px!important;background-color:#262626!important;color:#fff!important;font-size:12px!important;font-weight:300!important;font-stretch:normal!important;font-style:normal!important;line-height:.75!important;letter-spacing:normal!important;text-align:left!important;max-height:27px!important;height:27px!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item:hover{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-bottomRight:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before,.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-top:transparent;border-left:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:-16px;transition:all .3s;left:calc(100% - 29px)}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) .ant-dropdown-menu-item:first-child:before{content:\"\";opacity:1;margin:0 auto;display:table;width:14px;position:absolute;border-left:transparent;border-bottom:transparent;height:14px;background-color:#262626;transform:rotate(-135deg);-webkit-transform:rotate(-135deg);top:6px;right:calc(100% - 8px);transition:all .3s}.bps-dropdown.ant-dropdown-placement-rightTop:not(.bps-forced-updated-position) ul.ant-dropdown-menu{top:-9px!important;left:13px!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position ul.ant-dropdown-menu{top:11px!important;left:6px!important}.bps-dropdown.ant-dropdown-placement-rightTop .ant-dropdown-menu-item:first-child:hover:before{background-color:#353535!important}.bps-dropdown.ant-dropdown-placement-rightTop.bps-forced-updated-position .ant-dropdown-menu-item:first-child:hover:before{background-color:#262626!important}.bps-dropdown ul.ant-dropdown-menu .ant-dropdown-menu-item-disabled{color:#666!important}\n"] }]
        }], ctorParameters: function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i1.MenuService }, { type: i2.Directionality, decorators: [{
                    type: Optional
                }] }, { type: i3.NzNoAnimationDirective, decorators: [{
                    type: Host
                }, {
                    type: Optional
                }] }]; }, propDecorators: { templateRef: [{
                type: ViewChild,
                args: [TemplateRef, { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24tbWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy1kcm9wZG93bi9kcm9wZG93bi1tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBRUwsdUJBQXVCLEVBRXZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osSUFBSSxFQUdKLFFBQVEsRUFFUixXQUFXLEVBQ1gsU0FBUyxFQUVULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRzNELE9BQU8sRUFBRSxXQUFXLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7O0FBK0M5RSxNQUFNLE9BQU8sd0JBQXdCO0lBY25DLGdCQUFnQixDQUFDLEtBQXFCO1FBQ3BDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFnQjtRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsUUFBUSxDQUEyQyxHQUFNLEVBQUUsS0FBYztRQUN2RSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFlBQ1UsR0FBc0IsRUFDdEIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDcEIsZ0JBQWtDLEVBQ2xDLGFBQTBCLEVBQ2IsY0FBOEIsRUFDdkIsV0FBb0M7UUFOdkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ3BCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDYixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDdkIsZ0JBQVcsR0FBWCxXQUFXLENBQXlCO1FBakNqRSxnQkFBVyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBQ2xELHdCQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUM7UUFDN0QsNkJBQXdCLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQztRQUN2RSwwQkFBcUIsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUMzRCx3QkFBbUIsR0FBVyxFQUFFLENBQUM7UUFDakMsb0JBQWUsR0FBb0IsRUFBRSxDQUFDO1FBR3RDLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQXVCcEMsQ0FBQztJQUNKLFFBQVE7UUFDTixJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQW9CLEVBQUUsRUFBRTtZQUM1RixJQUFJLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztZQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUN2QyxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwSCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOytHQXBEVSx3QkFBd0I7bUdBQXhCLHdCQUF3Qiw0Q0F0Q3hCO1lBQ1QsV0FBVztZQUNYLDhDQUE4QztZQUM5QztnQkFDRSxPQUFPLEVBQUUsMkJBQTJCO2dCQUNwQyxRQUFRLEVBQUUsSUFBSTthQUNmO1NBQ0YsdUVBc0NVLFdBQVcsNkZBckNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQsaXhGQWpDVyxDQUFDLFdBQVcsQ0FBQzs7NEZBdUNkLHdCQUF3QjtrQkExQ3BDLFNBQVM7K0JBQ0UsbUJBQW1CLFlBQ25CLGlCQUFpQixjQUNmLENBQUMsV0FBVyxDQUFDLGFBQ2Q7d0JBQ1QsV0FBVzt3QkFDWCw4Q0FBOEM7d0JBQzlDOzRCQUNFLE9BQU8sRUFBRSwyQkFBMkI7NEJBQ3BDLFFBQVEsRUFBRSxJQUFJO3lCQUNmO3FCQUNGLFlBQ1M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdCVCx1QkFFb0IsS0FBSyxpQkFDWCxpQkFBaUIsQ0FBQyxJQUFJLG1CQUNwQix1QkFBdUIsQ0FBQyxNQUFNOzswQkFtQzVDLFFBQVE7OzBCQUNSLElBQUk7OzBCQUFJLFFBQVE7NENBM0J1QixXQUFXO3NCQUFwRCxTQUFTO3VCQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3QsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHNsaWRlTW90aW9uIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2FuaW1hdGlvbic7XHJcbmltcG9ydCB7IE56Tm9BbmltYXRpb25EaXJlY3RpdmUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvbm8tYW5pbWF0aW9uJztcclxuaW1wb3J0IHsgSW5kZXhhYmxlT2JqZWN0LCBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSwgTnpJc01lbnVJbnNpZGVEcm9wRG93blRva2VuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZW51JztcclxuaW1wb3J0IHsgZ2V0UGxhY2VtZW50TmFtZSB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UGxhY2VtZW50VHlwZSA9ICdib3R0b21MZWZ0JyB8ICdib3R0b21DZW50ZXInIHwgJ2JvdHRvbVJpZ2h0JyB8ICd0b3BMZWZ0JyB8ICd0b3BDZW50ZXInIHwgJ3RvcFJpZ2h0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBgYnBzLWRyb3Bkb3duLW1lbnVgLFxyXG4gIGV4cG9ydEFzOiBgYnBzRHJvcGRvd25NZW51YCxcclxuICBhbmltYXRpb25zOiBbc2xpZGVNb3Rpb25dLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgTWVudVNlcnZpY2UsXHJcbiAgICAvKiogbWVudSBpcyBpbnNpZGUgZHJvcGRvd24tbWVudSBjb21wb25lbnQgKiovXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE56SXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbixcclxuICAgICAgdXNlVmFsdWU6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8bmctdGVtcGxhdGU+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cImFudC1kcm9wZG93biBicHMtZHJvcGRvd25cIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRdPVwiYnBzUGxhY2VtZW50ID09PSAnYm90dG9tTGVmdCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUNlbnRlcl09XCJicHNQbGFjZW1lbnQgPT09ICdib3R0b21DZW50ZXInXCJcclxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC1ib3R0b21SaWdodF09XCJicHNQbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tcGxhY2VtZW50LXRvcExlZnRdPVwiYnBzUGxhY2VtZW50ID09PSAndG9wTGVmdCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tcGxhY2VtZW50LXRvcENlbnRlcl09XCJicHNQbGFjZW1lbnQgPT09ICd0b3BDZW50ZXInXCJcclxuICAgICAgICBbY2xhc3MuYW50LWRyb3Bkb3duLXBsYWNlbWVudC10b3BSaWdodF09XCJicHNQbGFjZW1lbnQgPT09ICd0b3BSaWdodCdcIlxyXG4gICAgICAgIFtjbGFzcy5hbnQtZHJvcGRvd24tcGxhY2VtZW50LXJpZ2h0VG9wXT1cImJwc1BsYWNlbWVudCA9PT0gJ3JpZ2h0VG9wJ1wiXHJcbiAgICAgICAgW2NsYXNzLmFudC1kcm9wZG93bi1ydGxdPVwiZGlyID09PSAncnRsJ1wiXHJcbiAgICAgICAgW25nQ2xhc3NdPVwiYnBzT3ZlcmxheUNsYXNzTmFtZVwiXHJcbiAgICAgICAgW25nU3R5bGVdPVwiYnBzT3ZlcmxheVN0eWxlXCJcclxuICAgICAgICBAc2xpZGVNb3Rpb25cclxuICAgICAgICAoQHNsaWRlTW90aW9uLmRvbmUpPVwib25BbmltYXRpb25FdmVudCgkZXZlbnQpXCJcclxuICAgICAgICBbQC5kaXNhYmxlZF09XCIhIW5vQW5pbWF0aW9uPy5uek5vQW5pbWF0aW9uXCJcclxuICAgICAgICBbbnpOb0FuaW1hdGlvbl09XCJub0FuaW1hdGlvbj8ubnpOb0FuaW1hdGlvblwiXHJcbiAgICAgICAgKG1vdXNlZW50ZXIpPVwic2V0TW91c2VTdGF0ZSh0cnVlKVwiXHJcbiAgICAgICAgKG1vdXNlbGVhdmUpPVwic2V0TW91c2VTdGF0ZShmYWxzZSlcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFsnLi9icHMtZHJvcGRvd24tbWVudS5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnBzRHJvcGRvd25NZW51Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIG1vdXNlU3RhdGUkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgaXNDaGlsZFN1Yk1lbnVPcGVuJCA9IHRoaXMubnpNZW51U2VydmljZS5pc0NoaWxkU3ViTWVudU9wZW4kO1xyXG4gIGRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJCA9IHRoaXMubnpNZW51U2VydmljZS5kZXNjZW5kYW50TWVudUl0ZW1DbGljayQ7XHJcbiAgYW5pbWF0aW9uU3RhdGVDaGFuZ2UkID0gbmV3IEV2ZW50RW1pdHRlcjxBbmltYXRpb25FdmVudD4oKTtcclxuICBicHNPdmVybGF5Q2xhc3NOYW1lOiBzdHJpbmcgPSAnJztcclxuICBicHNPdmVybGF5U3R5bGU6IEluZGV4YWJsZU9iamVjdCA9IHt9O1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIHRlbXBsYXRlUmVmITogVGVtcGxhdGVSZWY8TnpTYWZlQW55PjtcclxuXHJcbiAgYnBzUGxhY2VtZW50ID0gJyc7XHJcblxyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIG9uQW5pbWF0aW9uRXZlbnQoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLmFuaW1hdGlvblN0YXRlQ2hhbmdlJC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHNldE1vdXNlU3RhdGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5tb3VzZVN0YXRlJC5uZXh0KHZpc2libGUpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWU8VCBleHRlbmRzIGtleW9mIEJwc0Ryb3Bkb3duTWVudUNvbXBvbmVudD4oa2V5OiBULCB2YWx1ZTogdGhpc1tUXSk6IHZvaWQge1xyXG4gICAgdGhpc1trZXldID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHVibGljIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSxcclxuICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge31cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZCh0aGlzLnJlbmRlcmVyLnBhcmVudE5vZGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLCB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxufVxyXG4iXX0=