import { TemplateRef } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
export type NzSelectModeType = 'default' | 'multiple' | 'tags';
export interface NzSelectItemInterface {
    template?: TemplateRef<NzSafeAny> | null;
    bpsLabel: string | number | null;
    bpsValue: NzSafeAny | null;
    bpsTitle?: string | number | null;
    bpsDisabled?: boolean;
    bpsHide?: boolean;
    bpsCustomContent?: boolean;
    groupLabel?: string | number | TemplateRef<NzSafeAny> | null;
    type?: string;
    key?: NzSafeAny;
}
export interface NzSelectOptionInterface {
    label: string | number | null | TemplateRef<NzSafeAny>;
    value: NzSafeAny | null;
    title?: string | number | null;
    disabled?: boolean;
    hide?: boolean;
    groupLabel?: string | number | TemplateRef<NzSafeAny> | null;
    key?: string | number;
}
export type NzSelectTopControlItemType = Partial<NzSelectItemInterface> & {
    contentTemplateOutlet: TemplateRef<NzSafeAny> | null;
    contentTemplateOutletContext: NzSafeAny;
};
export type NzFilterOptionType = (input: string, option: NzSelectItemInterface) => boolean;
export type NzSelectPlacementType = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
//# sourceMappingURL=select.types.d.ts.map