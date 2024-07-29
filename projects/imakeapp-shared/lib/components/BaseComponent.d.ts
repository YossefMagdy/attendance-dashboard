import { OnDestroy, OnInit } from "@angular/core";
import { WebsiteAttributesService } from "../services/website-attributes.service";
import { LanguageService } from "../services/language.service";
import { Subscription } from "rxjs";
import { DynamicDialogRef } from "primeng/dynamicdialog";
import * as i0 from "@angular/core";
export declare class BaseComponent implements OnInit, OnDestroy {
    language_s?: LanguageService | undefined;
    attrService?: WebsiteAttributesService | undefined;
    currency: string;
    attributesObject?: any;
    lang: string;
    subscriptions: Subscription[];
    ref: DynamicDialogRef | undefined;
    constructor(language_s?: LanguageService | undefined, attrService?: WebsiteAttributesService | undefined);
    ngOnInit(): void;
    set_currency(): void;
    set_language(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BaseComponent, "app-product-cell-mobile", never, {}, {}, never, never, false, never>;
}
