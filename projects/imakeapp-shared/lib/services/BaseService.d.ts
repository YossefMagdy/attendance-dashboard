import { OnDestroy } from "@angular/core";
import { LanguageService } from "../../public-api";
import { Subscription } from "rxjs";
import * as i0 from "@angular/core";
export declare class BaseService implements OnDestroy {
    language_s: LanguageService;
    lang: string;
    userID: number;
    subscriptions: Subscription[];
    constructor(language_s: LanguageService);
    ngOnDestroy(): void;
    generateCode(length: number): string;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BaseService>;
}
