import { Subject } from 'rxjs';
import { BpsModalRef } from './bps-modal-ref.class';
import * as i0 from "@angular/core";
export declare class BpsModalControlService {
    private parentService;
    get afterAllClose(): Subject<void>;
    get openModals(): BpsModalRef[];
    private rootOpenModals;
    private rootAfterAllClose;
    private rootRegisteredMetaMap;
    private get registeredMetaMap();
    constructor(parentService: BpsModalControlService);
    registerModal(modalRef: BpsModalRef): void;
    deregisterModal(modalRef: BpsModalRef): void;
    hasRegistered(modalRef: BpsModalRef): boolean;
    closeAll(): void;
    private removeOpenModal;
    static ɵfac: i0.ɵɵFactoryDeclaration<BpsModalControlService, [{ optional: true; skipSelf: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BpsModalControlService>;
}
//# sourceMappingURL=bps-modal-control.service.d.ts.map