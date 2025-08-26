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
    static { this.ɵfac = function NzConfigService_Factory(t) { return new (t || NzConfigService)(i0.ɵɵinject(NZ_CONFIG, 8)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: NzConfigService, factory: NzConfigService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzConfigService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [NZ_CONFIG]
            }] }], null); })();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL3RyZWUvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFNUQsTUFBTSxTQUFTLEdBQUcsVUFBUyxLQUFXO0lBQ3BDLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUM3QixDQUFDLENBQUM7QUFLRixNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUEyQyxhQUF3QjtRQUwzRCxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO1FBTXJELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUJBQXFCLENBQXdCLGFBQWdCO1FBQzNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQWdDLENBQUMsYUFBMEI7UUFDekQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxFQUNoQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQsR0FBRyxDQUF3QixhQUFnQixFQUFFLEtBQWtCO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDO2dGQXhCVSxlQUFlLGNBTU0sU0FBUzt1RUFOOUIsZUFBZSxXQUFmLGVBQWUsbUJBRmQsTUFBTTs7aUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7O3NCQU9jLFFBQVE7O3NCQUFJLE1BQU07dUJBQUMsU0FBUzs7QUFxQjNDLGlDQUFpQztBQUNqQyx3QkFBd0I7QUFFeEI7OztHQUdHO0FBQ0gsbUNBQW1DO0FBQ25DLE1BQU0sVUFBVSxVQUFVLENBQUksYUFBMEIsRUFBRSxpQkFBcUI7SUFDN0UsT0FBTyxTQUFTLGVBQWUsQ0FBQyxNQUFXLEVBQUUsUUFBYSxFQUFFLGtCQUErQztRQUN6RyxNQUFNLGVBQWUsR0FBRyxzQkFBc0IsUUFBUSxFQUFFLENBQUM7UUFFekQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxFQUFFLENBQUM7WUFDbEUsT0FBTyxDQUFDLElBQUksQ0FDVixhQUFhLGVBQWUsOENBQThDLGFBQWEsYUFBYSxDQUNyRyxDQUFDO1FBQ0osQ0FBQztRQUVELE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLGVBQWUsRUFBRTtZQUM3QyxZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUMsQ0FBQztRQUVILE9BQU87WUFDTCxHQUFHO2dCQUNELE1BQU0sYUFBYSxHQUNqQixrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUU3RyxJQUFJLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDO29CQUM3QixPQUFPLGFBQWEsQ0FBQztnQkFDdkIsQ0FBQztnQkFFRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEYsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUU5QyxPQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRSxDQUFDO1lBQ0QsR0FBRyxDQUFDLEtBQVM7Z0JBQ1gsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsQ0FBQztvQkFDakQsa0JBQWtCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsQ0FBQztxQkFBTSxDQUFDO29CQUNOLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7Z0JBQ2hDLENBQUM7WUFDSCxDQUFDO1lBQ0QsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFLElBQUk7U0FDakIsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGZpbHRlciwgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBOekNvbmZpZywgTnpDb25maWdLZXksIE5aX0NPTkZJRyB9IGZyb20gJy4vY29uZmlnJztcclxuXHJcbmNvbnN0IGlzRGVmaW5lZCA9IGZ1bmN0aW9uKHZhbHVlPzogYW55KTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekNvbmZpZ1NlcnZpY2Uge1xyXG4gIHByaXZhdGUgY29uZmlnVXBkYXRlZCQgPSBuZXcgU3ViamVjdDxrZXlvZiBOekNvbmZpZz4oKTtcclxuXHJcbiAgLyoqIEdsb2JhbCBjb25maWcgaG9sZGluZyBwcm9wZXJ0eS4gKi9cclxuICBwcml2YXRlIGNvbmZpZzogTnpDb25maWc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBJbmplY3QoTlpfQ09ORklHKSBkZWZhdWx0Q29uZmlnPzogTnpDb25maWcpIHtcclxuICAgIHRoaXMuY29uZmlnID0gZGVmYXVsdENvbmZpZyB8fCB7fTtcclxuICB9XHJcblxyXG4gIGdldENvbmZpZ0ZvckNvbXBvbmVudDxUIGV4dGVuZHMgTnpDb25maWdLZXk+KGNvbXBvbmVudE5hbWU6IFQpOiBOekNvbmZpZ1tUXSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb25maWdbY29tcG9uZW50TmFtZV07XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChjb21wb25lbnROYW1lOiBOekNvbmZpZ0tleSk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnVXBkYXRlZCQucGlwZShcclxuICAgICAgZmlsdGVyKG4gPT4gbiA9PT0gY29tcG9uZW50TmFtZSksXHJcbiAgICAgIG1hcFRvKHVuZGVmaW5lZClcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBzZXQ8VCBleHRlbmRzIE56Q29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBULCB2YWx1ZTogTnpDb25maWdbVF0pOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdID0geyAuLi50aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSwgLi4udmFsdWUgfTtcclxuICAgIHRoaXMuY29uZmlnVXBkYXRlZCQubmV4dChjb21wb25lbnROYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRzbGludDpkaXNhYmxlOm5vLWludmFsaWQtdGhpc1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1hbnlcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRlY29yYXRvciBpcyB1c2VkIHRvIGRlY29yYXRlIHByb3BlcnRpZXMuIElmIGEgcHJvcGVydHkgaXMgZGVjb3JhdGVkLCBpdCB3b3VsZCB0cnkgdG8gbG9hZCBkZWZhdWx0IHZhbHVlIGZyb21cclxuICogY29uZmlnLlxyXG4gKi9cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnR5cGVkZWZcclxuZXhwb3J0IGZ1bmN0aW9uIFdpdGhDb25maWc8VD4oY29tcG9uZW50TmFtZTogTnpDb25maWdLZXksIGlubmVyRGVmYXVsdFZhbHVlPzogVCkge1xyXG4gIHJldHVybiBmdW5jdGlvbiBDb25maWdEZWNvcmF0b3IodGFyZ2V0OiBhbnksIHByb3BOYW1lOiBhbnksIG9yaWdpbmFsRGVzY3JpcHRvcj86IFR5cGVkUHJvcGVydHlEZXNjcmlwdG9yPFQ+KTogYW55IHtcclxuICAgIGNvbnN0IHByaXZhdGVQcm9wTmFtZSA9IGAkJF9fYXNzaWduZWRWYWx1ZV9fJHtwcm9wTmFtZX1gO1xyXG5cclxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUpKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgVGhlIHByb3AgXCIke3ByaXZhdGVQcm9wTmFtZX1cIiBpcyBhbHJlYWR5IGV4aXN0LCBpdCB3aWxsIGJlIG92ZXJyaWRlIGJ5ICR7Y29tcG9uZW50TmFtZX0gZGVjb3JhdG9yLmBcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcml2YXRlUHJvcE5hbWUsIHtcclxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogZmFsc2VcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGdldCgpOiBUIHwgdW5kZWZpbmVkIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID1cclxuICAgICAgICAgIG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3IuZ2V0ID8gb3JpZ2luYWxEZXNjcmlwdG9yLmdldC5iaW5kKHRoaXMpKCkgOiB0aGlzW3ByaXZhdGVQcm9wTmFtZV07XHJcblxyXG4gICAgICAgIGlmIChpc0RlZmluZWQob3JpZ2luYWxWYWx1ZSkpIHtcclxuICAgICAgICAgIHJldHVybiBvcmlnaW5hbFZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29tcG9uZW50Q29uZmlnID0gdGhpcy5uekNvbmZpZ1NlcnZpY2UuZ2V0Q29uZmlnRm9yQ29tcG9uZW50KGNvbXBvbmVudE5hbWUpIHx8IHt9O1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZ1ZhbHVlID0gY29tcG9uZW50Q29uZmlnW3Byb3BOYW1lXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGlzRGVmaW5lZChjb25maWdWYWx1ZSkgPyBjb25maWdWYWx1ZSA6IGlubmVyRGVmYXVsdFZhbHVlO1xyXG4gICAgICB9LFxyXG4gICAgICBzZXQodmFsdWU/OiBUKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKG9yaWdpbmFsRGVzY3JpcHRvciAmJiBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0KSB7XHJcbiAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3Iuc2V0LmJpbmQodGhpcykodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzW3ByaXZhdGVQcm9wTmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxyXG4gICAgfTtcclxuICB9O1xyXG59XHJcbiJdfQ==