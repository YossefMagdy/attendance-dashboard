import { add_to_cart_option_interface, facebookPixelEventType, facebookPixelParamsModel } from './facebook-pixel-model.model';
import * as i0 from "@angular/core";
export declare class FacebookPixelService {
    currencyCode: string;
    constructor();
    generalEvent(event: facebookPixelEventType, params: facebookPixelParamsModel): void;
    addToCart(addToCartParams: add_to_cart_option_interface): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<FacebookPixelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FacebookPixelService>;
}
