import { Inject, Injectable, Optional } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, mapTo } from 'rxjs/operators';
import { NZ_CONFIG } from './config';
import * as i0 from "@angular/core";
const isDefined = function (value) {
    return value !== undefined;
};
export class NzConfigService {
    constructor(defaultConfig) {
        this.configUpdated$ = new Subject();
        this.config = defaultConfig || {};
    }
    getConfigForComponent(componentName) {
        return this.config[componentName];
    }
    getConfigChangeEventForComponent(componentName) {
        return this.configUpdated$.pipe(filter(n => n === componentName), mapTo(undefined));
    }
    set(componentName, value) {
        this.config[componentName] = { ...this.config[componentName], ...value };
        this.configUpdated$.next(componentName);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzConfigService, deps: [{ token: NZ_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzConfigService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NzConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NZ_CONFIG]
                }] }] });
// tslint:disable:no-invalid-this
// tslint:disable:no-any
/**
 * This decorator is used to decorate properties. If a property is decorated, it would try to load default value from
 * config.
 */
// tslint:disable-next-line:typedef
export function WithConfig(componentName, innerDefaultValue) {
    return function ConfigDecorator(target, propName, originalDescriptor) {
        const privatePropName = `$$__assignedValue__${propName}`;
        if (Object.prototype.hasOwnProperty.call(target, privatePropName)) {
            console.warn(`The prop "${privatePropName}" is already exist, it will be override by ${componentName} decorator.`);
        }
        Object.defineProperty(target, privatePropName, {
            configurable: true,
            writable: true,
            enumerable: false
        });
        return {
            get() {
                const originalValue = originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
                if (isDefined(originalValue)) {
                    return originalValue;
                }
                const componentConfig = this.nzConfigService.getConfigForComponent(componentName) || {};
                const configValue = componentConfig[propName];
                return isDefined(configValue) ? configValue : innerDefaultValue;
            },
            set(value) {
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(value);
                }
                else {
                    this[privatePropName] = value;
                }
            },
            configurable: true,
            enumerable: true
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL3RyZWUvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFNUQsTUFBTSxTQUFTLEdBQUcsVUFBUyxLQUFXO0lBQ3BDLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUM3QixDQUFDLENBQUM7QUFLRixNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUEyQyxhQUF3QjtRQUwzRCxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO1FBTXJELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUJBQXFCLENBQXdCLGFBQWdCO1FBQzNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQWdDLENBQUMsYUFBMEI7UUFDekQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxFQUNoQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQsR0FBRyxDQUF3QixhQUFnQixFQUFFLEtBQWtCO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDOytHQXhCVSxlQUFlLGtCQU1NLFNBQVM7bUhBTjlCLGVBQWUsY0FGZCxNQUFNOzs0RkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBT2MsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxTQUFTOztBQXFCM0MsaUNBQWlDO0FBQ2pDLHdCQUF3QjtBQUV4Qjs7O0dBR0c7QUFDSCxtQ0FBbUM7QUFDbkMsTUFBTSxVQUFVLFVBQVUsQ0FBSSxhQUEwQixFQUFFLGlCQUFxQjtJQUM3RSxPQUFPLFNBQVMsZUFBZSxDQUFDLE1BQVcsRUFBRSxRQUFhLEVBQUUsa0JBQStDO1FBQ3pHLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixRQUFRLEVBQUUsQ0FBQztRQUV6RCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUUsQ0FBQztZQUNsRSxPQUFPLENBQUMsSUFBSSxDQUNWLGFBQWEsZUFBZSw4Q0FBOEMsYUFBYSxhQUFhLENBQ3JHLENBQUM7UUFDSixDQUFDO1FBRUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFO1lBQzdDLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFFBQVEsRUFBRSxJQUFJO1lBQ2QsVUFBVSxFQUFFLEtBQUs7U0FDbEIsQ0FBQyxDQUFDO1FBRUgsT0FBTztZQUNMLEdBQUc7Z0JBQ0QsTUFBTSxhQUFhLEdBQ2pCLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRTdHLElBQUksU0FBUyxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUM7b0JBQzdCLE9BQU8sYUFBYSxDQUFDO2dCQUN2QixDQUFDO2dCQUVELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN4RixNQUFNLFdBQVcsR0FBRyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRTlDLE9BQU8sU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1lBQ2xFLENBQUM7WUFDRCxHQUFHLENBQUMsS0FBUztnQkFDWCxJQUFJLGtCQUFrQixJQUFJLGtCQUFrQixDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNqRCxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxDQUFDO3FCQUFNLENBQUM7b0JBQ04sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDaEMsQ0FBQztZQUNILENBQUM7WUFDRCxZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUUsSUFBSTtTQUNqQixDQUFDO0lBQ0osQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgZmlsdGVyLCBtYXBUbyB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IE56Q29uZmlnLCBOekNvbmZpZ0tleSwgTlpfQ09ORklHIH0gZnJvbSAnLi9jb25maWcnO1xyXG5cclxuY29uc3QgaXNEZWZpbmVkID0gZnVuY3Rpb24odmFsdWU/OiBhbnkpOiBib29sZWFuIHtcclxuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q29uZmlnU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBjb25maWdVcGRhdGVkJCA9IG5ldyBTdWJqZWN0PGtleW9mIE56Q29uZmlnPigpO1xyXG5cclxuICAvKiogR2xvYmFsIGNvbmZpZyBob2xkaW5nIHByb3BlcnR5LiAqL1xyXG4gIHByaXZhdGUgY29uZmlnOiBOekNvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQEluamVjdChOWl9DT05GSUcpIGRlZmF1bHRDb25maWc/OiBOekNvbmZpZykge1xyXG4gICAgdGhpcy5jb25maWcgPSBkZWZhdWx0Q29uZmlnIHx8IHt9O1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZmlnRm9yQ29tcG9uZW50PFQgZXh0ZW5kcyBOekNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCk6IE56Q29uZmlnW1RdIHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXTtcclxuICB9XHJcblxyXG4gIGdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KGNvbXBvbmVudE5hbWU6IE56Q29uZmlnS2V5KTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWdVcGRhdGVkJC5waXBlKFxyXG4gICAgICBmaWx0ZXIobiA9PiBuID09PSBjb21wb25lbnROYW1lKSxcclxuICAgICAgbWFwVG8odW5kZWZpbmVkKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHNldDxUIGV4dGVuZHMgTnpDb25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQsIHZhbHVlOiBOekNvbmZpZ1tUXSk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0gPSB7IC4uLnRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdLCAuLi52YWx1ZSB9O1xyXG4gICAgdGhpcy5jb25maWdVcGRhdGVkJC5uZXh0KGNvbXBvbmVudE5hbWUpO1xyXG4gIH1cclxufVxyXG5cclxuLy8gdHNsaW50OmRpc2FibGU6bm8taW52YWxpZC10aGlzXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWFueVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZGVjb3JhdG9yIGlzIHVzZWQgdG8gZGVjb3JhdGUgcHJvcGVydGllcy4gSWYgYSBwcm9wZXJ0eSBpcyBkZWNvcmF0ZWQsIGl0IHdvdWxkIHRyeSB0byBsb2FkIGRlZmF1bHQgdmFsdWUgZnJvbVxyXG4gKiBjb25maWcuXHJcbiAqL1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHlwZWRlZlxyXG5leHBvcnQgZnVuY3Rpb24gV2l0aENvbmZpZzxUPihjb21wb25lbnROYW1lOiBOekNvbmZpZ0tleSwgaW5uZXJEZWZhdWx0VmFsdWU/OiBUKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIENvbmZpZ0RlY29yYXRvcih0YXJnZXQ6IGFueSwgcHJvcE5hbWU6IGFueSwgb3JpZ2luYWxEZXNjcmlwdG9yPzogVHlwZWRQcm9wZXJ0eURlc2NyaXB0b3I8VD4pOiBhbnkge1xyXG4gICAgY29uc3QgcHJpdmF0ZVByb3BOYW1lID0gYCQkX19hc3NpZ25lZFZhbHVlX18ke3Byb3BOYW1lfWA7XHJcblxyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSkpIHtcclxuICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgIGBUaGUgcHJvcCBcIiR7cHJpdmF0ZVByb3BOYW1lfVwiIGlzIGFscmVhZHkgZXhpc3QsIGl0IHdpbGwgYmUgb3ZlcnJpZGUgYnkgJHtjb21wb25lbnROYW1lfSBkZWNvcmF0b3IuYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByaXZhdGVQcm9wTmFtZSwge1xyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZ2V0KCk6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVmFsdWUgPVxyXG4gICAgICAgICAgb3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5nZXQgPyBvcmlnaW5hbERlc2NyaXB0b3IuZ2V0LmJpbmQodGhpcykoKSA6IHRoaXNbcHJpdmF0ZVByb3BOYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKGlzRGVmaW5lZChvcmlnaW5hbFZhbHVlKSkge1xyXG4gICAgICAgICAgcmV0dXJuIG9yaWdpbmFsVmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjb21wb25lbnRDb25maWcgPSB0aGlzLm56Q29uZmlnU2VydmljZS5nZXRDb25maWdGb3JDb21wb25lbnQoY29tcG9uZW50TmFtZSkgfHwge307XHJcbiAgICAgICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb21wb25lbnRDb25maWdbcHJvcE5hbWVdO1xyXG5cclxuICAgICAgICByZXR1cm4gaXNEZWZpbmVkKGNvbmZpZ1ZhbHVlKSA/IGNvbmZpZ1ZhbHVlIDogaW5uZXJEZWZhdWx0VmFsdWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIHNldCh2YWx1ZT86IFQpOiB2b2lkIHtcclxuICAgICAgICBpZiAob3JpZ2luYWxEZXNjcmlwdG9yICYmIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQpIHtcclxuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvci5zZXQuYmluZCh0aGlzKSh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXNbcHJpdmF0ZVByb3BOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXHJcbiAgICB9O1xyXG4gIH07XHJcbn1cclxuIl19