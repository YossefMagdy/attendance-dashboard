import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
export declare class WebsiteAttributesService {
    private http;
    private _site_attributes;
    constructor(http: HttpClient);
    get_site_theme(): Promise<unknown>;
    format_attributes(attributes: any, resolve: any): void;
    save_site_attributes_to_storage(new_site_attributes: any): void;
    get_site_attributes(): BehaviorSubject<{}>;
    get_site_attributes_storage(): any;
    format_primary_color(new_site_attributes: any): string;
    set_theme_data(website_attributes: any): void;
    add_font_family(site_attr_value: any, root_reference: any): void;
    changeFavicon(faviconFileName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WebsiteAttributesService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<WebsiteAttributesService>;
}
