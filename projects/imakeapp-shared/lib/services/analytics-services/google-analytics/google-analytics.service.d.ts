import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { add_to_cart_option_interface } from './google-analytics.model';
import { LanguageService } from '../../language.service';
import * as i0 from "@angular/core";
export declare class GoogleAnalyticsService implements OnInit {
    private router;
    private language_s;
    currencyCode: string;
    lang: string;
    constructor(router: Router, language_s: LanguageService);
    ngOnInit(): void;
    handleClientId(): void;
    pageView(params: any): void;
    addToCart(addToCartParams: add_to_cart_option_interface): void;
    RemoveFromCart(product: any, quantity: any, price: any): void;
    AddToWishlist(price: any, item_id: any, item_name: any, item_category: any): void;
    BeginCheckout(total: any, cart: any): void;
    Login(method: any): void;
    SignUp(method: any): void;
    ViewCart(): void;
    purchase(params: any): void;
    search(text: any): void;
    addPaymentInfo(params: any): void;
    addShippingInfo(params: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GoogleAnalyticsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GoogleAnalyticsService>;
}
