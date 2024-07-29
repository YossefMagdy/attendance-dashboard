import { HttpClient } from "@angular/common/http";
import { language_interface, languages_state_interface } from "../interfaces/language.interface";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export declare class LanguageService {
    private http;
    private _site_language;
    private _site_language_Bav;
    private _site_active_language_Code;
    constructor(http: HttpClient);
    request_site_languages(): Promise<unknown>;
    set_active_language(active_lang: language_interface): void;
    get_site_languages(): BehaviorSubject<languages_state_interface>;
    get_site_languages_code(): BehaviorSubject<string>;
    get_site_active_lang_code(): string;
    get_site_lang_data(): any;
    save_active_language_to_storage(): void;
    save_lang_data_to_storage(): void;
    change_language(active_language: language_interface): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LanguageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LanguageService>;
}
