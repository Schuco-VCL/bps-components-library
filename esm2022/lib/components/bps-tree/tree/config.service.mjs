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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzConfigService, deps: [{ token: NZ_CONFIG, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzConfigService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: NzConfigService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [NZ_CONFIG]
                }] }]; } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9icHMtY29tcG9uZW50cy1saWIvc3JjL2xpYi9jb21wb25lbnRzL2Jwcy10cmVlL3RyZWUvY29uZmlnLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxPQUFPLEVBQXlCLFNBQVMsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7QUFFNUQsTUFBTSxTQUFTLEdBQUcsVUFBUyxLQUFXO0lBQ3BDLE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQztBQUM3QixDQUFDLENBQUM7QUFLRixNQUFNLE9BQU8sZUFBZTtJQU0xQixZQUEyQyxhQUF3QjtRQUwzRCxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFrQixDQUFDO1FBTXJELElBQUksQ0FBQyxNQUFNLEdBQUcsYUFBYSxJQUFJLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUJBQXFCLENBQXdCLGFBQWdCO1FBQzNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQWdDLENBQUMsYUFBMEI7UUFDekQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLGFBQWEsQ0FBQyxFQUNoQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQsR0FBRyxDQUF3QixhQUFnQixFQUFFLEtBQWtCO1FBQzdELElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUN6RSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUMxQyxDQUFDOytHQXhCVSxlQUFlLGtCQU1NLFNBQVM7bUhBTjlCLGVBQWUsY0FGZCxNQUFNOzs0RkFFUCxlQUFlO2tCQUgzQixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7MEJBT2MsUUFBUTs7MEJBQUksTUFBTTsyQkFBQyxTQUFTOztBQXFCM0MsaUNBQWlDO0FBQ2pDLHdCQUF3QjtBQUV4Qjs7O0dBR0c7QUFDSCxtQ0FBbUM7QUFDbkMsTUFBTSxVQUFVLFVBQVUsQ0FBSSxhQUEwQixFQUFFLGlCQUFxQjtJQUM3RSxPQUFPLFNBQVMsZUFBZSxDQUFDLE1BQVcsRUFBRSxRQUFhLEVBQUUsa0JBQStDO1FBQ3pHLE1BQU0sZUFBZSxHQUFHLHNCQUFzQixRQUFRLEVBQUUsQ0FBQztRQUV6RCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLEVBQUU7WUFDakUsT0FBTyxDQUFDLElBQUksQ0FDVixhQUFhLGVBQWUsOENBQThDLGFBQWEsYUFBYSxDQUNyRyxDQUFDO1NBQ0g7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxlQUFlLEVBQUU7WUFDN0MsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUUsS0FBSztTQUNsQixDQUFDLENBQUM7UUFFSCxPQUFPO1lBQ0wsR0FBRztnQkFDRCxNQUFNLGFBQWEsR0FDakIsa0JBQWtCLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFFN0csSUFBSSxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQUU7b0JBQzVCLE9BQU8sYUFBYSxDQUFDO2lCQUN0QjtnQkFFRCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDeEYsTUFBTSxXQUFXLEdBQUcsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUU5QyxPQUFPLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztZQUNsRSxDQUFDO1lBQ0QsR0FBRyxDQUFDLEtBQVM7Z0JBQ1gsSUFBSSxrQkFBa0IsSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLEVBQUU7b0JBQ2hELGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzFDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxLQUFLLENBQUM7aUJBQy9CO1lBQ0gsQ0FBQztZQUNELFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVUsRUFBRSxJQUFJO1NBQ2pCLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBmaWx0ZXIsIG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgTnpDb25maWcsIE56Q29uZmlnS2V5LCBOWl9DT05GSUcgfSBmcm9tICcuL2NvbmZpZyc7XHJcblxyXG5jb25zdCBpc0RlZmluZWQgPSBmdW5jdGlvbih2YWx1ZT86IGFueSk6IGJvb2xlYW4ge1xyXG4gIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xyXG59O1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpDb25maWdTZXJ2aWNlIHtcclxuICBwcml2YXRlIGNvbmZpZ1VwZGF0ZWQkID0gbmV3IFN1YmplY3Q8a2V5b2YgTnpDb25maWc+KCk7XHJcblxyXG4gIC8qKiBHbG9iYWwgY29uZmlnIGhvbGRpbmcgcHJvcGVydHkuICovXHJcbiAgcHJpdmF0ZSBjb25maWc6IE56Q29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0NPTkZJRykgZGVmYXVsdENvbmZpZz86IE56Q29uZmlnKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IGRlZmF1bHRDb25maWcgfHwge307XHJcbiAgfVxyXG5cclxuICBnZXRDb25maWdGb3JDb21wb25lbnQ8VCBleHRlbmRzIE56Q29uZmlnS2V5Pihjb21wb25lbnROYW1lOiBUKTogTnpDb25maWdbVF0ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29uZmlnW2NvbXBvbmVudE5hbWVdO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoY29tcG9uZW50TmFtZTogTnpDb25maWdLZXkpOiBPYnNlcnZhYmxlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLmNvbmZpZ1VwZGF0ZWQkLnBpcGUoXHJcbiAgICAgIGZpbHRlcihuID0+IG4gPT09IGNvbXBvbmVudE5hbWUpLFxyXG4gICAgICBtYXBUbyh1bmRlZmluZWQpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgc2V0PFQgZXh0ZW5kcyBOekNvbmZpZ0tleT4oY29tcG9uZW50TmFtZTogVCwgdmFsdWU6IE56Q29uZmlnW1RdKTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZ1tjb21wb25lbnROYW1lXSA9IHsgLi4udGhpcy5jb25maWdbY29tcG9uZW50TmFtZV0sIC4uLnZhbHVlIH07XHJcbiAgICB0aGlzLmNvbmZpZ1VwZGF0ZWQkLm5leHQoY29tcG9uZW50TmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1pbnZhbGlkLXRoaXNcclxuLy8gdHNsaW50OmRpc2FibGU6bm8tYW55XHJcblxyXG4vKipcclxuICogVGhpcyBkZWNvcmF0b3IgaXMgdXNlZCB0byBkZWNvcmF0ZSBwcm9wZXJ0aWVzLiBJZiBhIHByb3BlcnR5IGlzIGRlY29yYXRlZCwgaXQgd291bGQgdHJ5IHRvIGxvYWQgZGVmYXVsdCB2YWx1ZSBmcm9tXHJcbiAqIGNvbmZpZy5cclxuICovXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp0eXBlZGVmXHJcbmV4cG9ydCBmdW5jdGlvbiBXaXRoQ29uZmlnPFQ+KGNvbXBvbmVudE5hbWU6IE56Q29uZmlnS2V5LCBpbm5lckRlZmF1bHRWYWx1ZT86IFQpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gQ29uZmlnRGVjb3JhdG9yKHRhcmdldDogYW55LCBwcm9wTmFtZTogYW55LCBvcmlnaW5hbERlc2NyaXB0b3I/OiBUeXBlZFByb3BlcnR5RGVzY3JpcHRvcjxUPik6IGFueSB7XHJcbiAgICBjb25zdCBwcml2YXRlUHJvcE5hbWUgPSBgJCRfX2Fzc2lnbmVkVmFsdWVfXyR7cHJvcE5hbWV9YDtcclxuXHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lKSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYFRoZSBwcm9wIFwiJHtwcml2YXRlUHJvcE5hbWV9XCIgaXMgYWxyZWFkeSBleGlzdCwgaXQgd2lsbCBiZSBvdmVycmlkZSBieSAke2NvbXBvbmVudE5hbWV9IGRlY29yYXRvci5gXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJpdmF0ZVByb3BOYW1lLCB7XHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBnZXQoKTogVCB8IHVuZGVmaW5lZCB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxWYWx1ZSA9XHJcbiAgICAgICAgICBvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLmdldCA/IG9yaWdpbmFsRGVzY3JpcHRvci5nZXQuYmluZCh0aGlzKSgpIDogdGhpc1twcml2YXRlUHJvcE5hbWVdO1xyXG5cclxuICAgICAgICBpZiAoaXNEZWZpbmVkKG9yaWdpbmFsVmFsdWUpKSB7XHJcbiAgICAgICAgICByZXR1cm4gb3JpZ2luYWxWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENvbmZpZyA9IHRoaXMubnpDb25maWdTZXJ2aWNlLmdldENvbmZpZ0ZvckNvbXBvbmVudChjb21wb25lbnROYW1lKSB8fCB7fTtcclxuICAgICAgICBjb25zdCBjb25maWdWYWx1ZSA9IGNvbXBvbmVudENvbmZpZ1twcm9wTmFtZV07XHJcblxyXG4gICAgICAgIHJldHVybiBpc0RlZmluZWQoY29uZmlnVmFsdWUpID8gY29uZmlnVmFsdWUgOiBpbm5lckRlZmF1bHRWYWx1ZTtcclxuICAgICAgfSxcclxuICAgICAgc2V0KHZhbHVlPzogVCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChvcmlnaW5hbERlc2NyaXB0b3IgJiYgb3JpZ2luYWxEZXNjcmlwdG9yLnNldCkge1xyXG4gICAgICAgICAgb3JpZ2luYWxEZXNjcmlwdG9yLnNldC5iaW5kKHRoaXMpKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpc1twcml2YXRlUHJvcE5hbWVdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWVcclxuICAgIH07XHJcbiAgfTtcclxufVxyXG4iXX0=