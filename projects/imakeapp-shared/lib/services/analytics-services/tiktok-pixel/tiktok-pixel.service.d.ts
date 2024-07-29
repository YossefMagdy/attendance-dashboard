import { add_to_cart_interface, tiktokPixelEventType, tiktokPixelParamsModel } from './tiktok-pixel-model.model';
import * as i0 from "@angular/core";
export declare class TiktokPixelService {
    currencyCode: string;
    constructor();
    generalEvent(event: tiktokPixelEventType, params: tiktokPixelParamsModel): void;
    CompleteRegistration(content_id: any, name: any): void;
    AddToWishlist(content_id: any, name: any, price: any): void;
    addToCart(addToCartParams: add_to_cart_interface): void;
    InitiateCheckout(id: any, name: any, price: any, description: any, cart: any): void;
    PlaceAnOrder(id: any, name: any, price: any, quantity: any, description: any, cart: any): void;
    ViewContent(id: any, name: any, price: any, quantity: any, description: any): void;
    Subscribe(): void;
    SubmitForm(): void;
    Search(): void;
    Download(): void;
    Contact(): void;
    ClickButton(): void;
    AddPaymentInfo(): void;
    CompletePayment(id: any, name: any, price: any, quantity: any, description: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TiktokPixelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TiktokPixelService>;
}
