import * as i0 from '@angular/core';
import { Injectable, Pipe, NgModule, Component, Input, Directive, HostListener, EventEmitter, Output } from '@angular/core';
import * as i1 from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import * as i1$1 from '@angular/router';
import { NavigationStart, RouterModule } from '@angular/router';
import * as i1$2 from '@angular/platform-browser';
import * as i3$1 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule as CarouselModule$1 } from 'ngx-owl-carousel-o';
import { TabViewModule } from 'primeng/tabview';
import { CheckboxModule } from 'primeng/checkbox';
import * as i5 from 'primeng/multiselect';
import { MultiSelectModule } from 'primeng/multiselect';
import * as i6 from 'primeng/calendar';
import { CalendarModule } from 'primeng/calendar';
import * as i7 from 'primeng/dropdown';
import { DropdownModule } from 'primeng/dropdown';
import * as i8 from 'primeng/inputtext';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { SliderModule } from 'primeng/slider';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ToastModule } from 'primeng/toast';
import * as i3 from 'primeng/skeleton';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogModule } from 'primeng/dialog';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { EditorModule } from 'primeng/editor';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import * as moment from 'moment/moment';
import { isArray } from '@apollo/client/cache/inmemory/helpers';
import * as i4 from 'primeng/api';
import * as i9 from 'primeng/inputnumber';
import { InputNumberModule } from 'primeng/inputnumber';
import * as i10 from 'primeng/autocomplete';
import { AutoCompleteModule } from 'primeng/autocomplete';

class SharedService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

// Create a signal
class BaseService {
    language_s;
    lang = 'ar';
    userID = 0;
    subscriptions = [];
    constructor(language_s) {
        this.language_s = language_s;
        this.subscriptions?.push(this.language_s.get_site_languages_code().subscribe((response) => {
            if (response != null) {
                this.lang = response;
            }
        }));
        //user
    }
    ngOnDestroy() {
        if (this.subscriptions) {
            this.subscriptions?.forEach((subscription) => {
                if (subscription) {
                    subscription.unsubscribe();
                }
            });
        }
    }
    generateCode(length) {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return (result +
            new Date().getDate() +
            "" +
            new Date().getUTCMonth());
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseService, deps: [{ token: LanguageService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: LanguageService }]; } });

let base_url = 'https://imake-app.com';
const environment = {
    production: true,
    ApiEndPoint2: `${base_url}:1116/api`,
};

class WebsiteAttributesService {
    http;
    _site_attributes = new BehaviorSubject({});
    constructor(http) {
        this.http = http;
    }
    get_site_theme() {
        return new Promise((resolve, reject) => {
            this.http.get(`${environment.ApiEndPoint2}/Attributes/Mapindex`).subscribe((data) => {
                this.format_attributes(data, resolve);
            }, (err) => {
                console.error(err);
            });
        });
    }
    format_attributes(attributes, resolve) {
        // calculate new primary color format
        // append new primary color to attributes object
        let new_primary_color = this.format_primary_color(attributes);
        attributes.new_primary_color = new_primary_color;
        // set website attributes to app style
        this.set_theme_data(attributes);
        // set app headers data
        this.changeFavicon(attributes['logo']);
        this._site_attributes.next(attributes);
        this.save_site_attributes_to_storage(attributes);
        resolve(attributes);
    }
    save_site_attributes_to_storage(new_site_attributes) {
        localStorage.setItem('site_attributes', JSON.stringify(new_site_attributes));
    }
    get_site_attributes() {
        return this._site_attributes;
    }
    get_site_attributes_storage() {
        let temp = localStorage.getItem('site_attributes');
        let site_attributes = temp ? JSON.parse(temp) : [];
        return site_attributes;
    }
    format_primary_color(new_site_attributes) {
        let primary_color = new_site_attributes['primary_color'];
        let primary_color_without_hash = primary_color.split('#')[1];
        let primart_color_red_hexa = primary_color_without_hash.slice(0, 2);
        let primart_color_green_hexa = primary_color_without_hash.slice(2, 4);
        let primart_color_blue_hexa = primary_color_without_hash.slice(4, 6);
        let primart_color_red_decimal = parseInt(primart_color_red_hexa, 16);
        let primart_color_green_decimal = parseInt(primart_color_green_hexa, 16);
        let primart_color_blue_decimal = parseInt(primart_color_blue_hexa, 16);
        let opacity = 0.05;
        let primary_color_rgba = `rgba(${primart_color_red_decimal},${primart_color_green_decimal},${primart_color_blue_decimal},${opacity})`;
        return primary_color_rgba;
    }
    set_theme_data(website_attributes) {
        // catch css variables
        let css_root = document.querySelector(":root");
        css_root.style.setProperty('--primary-color', website_attributes['primary_color']);
        css_root.style.setProperty('--primary-color-rgba', website_attributes['new_primary_color']);
        css_root.style.setProperty('--secondary-color', website_attributes['secondary_color']);
        css_root.style.setProperty('--font-color', website_attributes['text_color']);
        css_root.style.setProperty('--logo', `url("${website_attributes['logo']}")`);
        css_root.style.setProperty('--logo_splash', `url("${website_attributes['logo_splash']}")`);
        css_root.style.setProperty('--currency', website_attributes['currency']);
        this.add_font_family(website_attributes['font_family_1'], css_root);
    }
    add_font_family(site_attr_value, root_reference) {
        let temp = site_attr_value.split("###");
        let font_family_el_content = temp[0];
        let font_family_name = temp[1];
        let custom_el = document.createElement("div");
        custom_el.innerHTML = font_family_el_content;
        document.body.appendChild(custom_el);
        root_reference.style.setProperty('--font-family-1', font_family_name);
    }
    changeFavicon(faviconFileName) {
        let favIcon = document.querySelector('#appIcon');
        let favIconApple = document.querySelector('#appIconApple');
        favIcon.href = faviconFileName;
        favIconApple.href = faviconFileName;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: WebsiteAttributesService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: WebsiteAttributesService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: WebsiteAttributesService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class LanguageService {
    http;
    _site_language = {
        languages: [],
        active_language: {
            name: 'ar',
            code: 'ar'
        },
        language_data: {}
    };
    _site_language_Bav = new BehaviorSubject(this._site_language);
    _site_active_language_Code = new BehaviorSubject("");
    constructor(http) {
        this.http = http;
    }
    async request_site_languages() {
        return await new Promise(async (resolve, reject) => {
            let active_lang = localStorage.getItem('active_lang');
            const languages = await this.http.get(`${environment.ApiEndPoint2}/lang/langs`).toPromise();
            // save languages
            this._site_language = {
                ...this._site_language,
                languages: languages
            };
            // save active lang
            if (active_lang != undefined) {
                this.set_active_language(this._site_language.active_language);
                this._site_active_language_Code.next(this._site_language.active_language.code);
            }
            else {
                this.set_active_language(languages[0]);
                this._site_active_language_Code.next(languages[0].code);
            }
            const langs = await this.http.get(`${environment.ApiEndPoint2}/lang/index`, {
                headers: new HttpHeaders({ 'lang': this._site_language.active_language.code })
            }).toPromise();
            this._site_language = {
                ...this._site_language,
                language_data: langs
            };
            this._site_language_Bav.next(this._site_language);
            resolve(this._site_language);
            // get and save languages data based on active language
        });
    }
    set_active_language(active_lang) {
        this._site_language = {
            ...this._site_language,
            active_language: active_lang
        };
        this.save_active_language_to_storage();
    }
    // getters
    get_site_languages() {
        return this._site_language_Bav;
    }
    // getters code
    get_site_languages_code() {
        return this._site_active_language_Code;
    }
    get_site_active_lang_code() {
        let temp = localStorage.getItem('active_lang');
        let lang_code = temp ? JSON.parse(temp).code : 'ar';
        return lang_code;
    }
    get_site_lang_data() {
        let temp = localStorage.getItem('lang_data');
        let lang_data = temp ? JSON.parse(temp) : [];
        return lang_data;
    }
    save_active_language_to_storage() {
        localStorage.setItem('active_lang', JSON.stringify(this._site_language.active_language));
    }
    save_lang_data_to_storage() {
        localStorage.setItem('lang_data', JSON.stringify(this._site_language.language_data));
    }
    // save languages to storage
    change_language(active_language) {
        this._site_language = {
            ...this._site_language,
            active_language: active_language
        };
        this.save_active_language_to_storage();
        location.reload();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LanguageService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LanguageService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LanguageService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

class FacebookPixelService {
    currencyCode = 'usd';
    constructor() { }
    generalEvent(event, params) {
        if (typeof fbq !== 'undefined') {
            fbq('track', event, params);
        }
    }
    addToCart(addToCartParams) {
        if (typeof fbq !== 'undefined') {
            fbq('track', 'AddToCart', addToCartParams);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: FacebookPixelService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: FacebookPixelService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: FacebookPixelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class LoadPixelAdService {
    constructor() { }
    InitTiktokPixel(TiktokPixelId) {
        const node = document.createElement('script');
        const script = `
    !function (w, d, t) {
      w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
      ttq.load('${TiktokPixelId}');
      ttq.page();
    }(window, document, 'ttq');`;
        node.async = true;
        node.defer = true;
        node.innerHTML = script;
        document.head.appendChild(node);
    }
    InitGoogleAnalytics(GoogleAnalyticsId) {
        const node1 = document.createElement('script');
        node1.async = true;
        node1.src = `https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsId}`;
        const node2 = document.createElement('script');
        node2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GoogleAnalyticsId}');`;
        document.head.appendChild(node1);
        document.head.appendChild(node2);
    }
    InitFacebookPixel(facebookId) {
        const node1 = document.createElement('script');
        const script = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '${facebookId}');
    fbq('track', 'PageView');;`;
        const node2 = document.createElement('noscript');
        const script2 = `
    <img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=${facebookId}&ev=PageView&noscript=1"
     />
    `;
        node1.innerHTML = script;
        document.head.appendChild(node1);
        node2.innerHTML = script;
        document.head.appendChild(node2);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LoadPixelAdService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LoadPixelAdService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LoadPixelAdService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class GoogleAnalyticsService {
    router;
    language_s;
    currencyCode = 'haha';
    lang = 'en';
    constructor(router, language_s) {
        this.router = router;
        this.language_s = language_s;
    }
    ngOnInit() {
        ;
    }
    handleClientId() {
        this.router.events.subscribe({
            next: (resopnse) => {
                if (resopnse instanceof NavigationStart) {
                    this.pageView({ client_id: '21', language: this.lang });
                }
            },
        });
    }
    pageView(params) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', params);
        }
    }
    addToCart(addToCartParams) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'add_to_cart', addToCartParams);
        }
    }
    RemoveFromCart(product, quantity, price) {
        if (typeof gtag !== 'undefined') {
            var addToCartParams = {
                currency: this.currencyCode,
                value: 0,
                items: [
                    {
                        item_id: JSON.stringify(product.id),
                        item_name: product.name,
                        item_category: product.category.name,
                        price,
                        quantity,
                    },
                ],
            };
            gtag('event', 'remove_from_cart', addToCartParams);
        }
    }
    AddToWishlist(price, item_id, item_name, item_category) {
        if (typeof gtag !== 'undefined') {
            var addToCartParams = {
                currency: this.currencyCode,
                items: [
                    {
                        item_id,
                        item_name,
                        item_category,
                        price,
                    },
                ],
            };
            gtag('event', 'add_to_wishlist', addToCartParams);
        }
    }
    BeginCheckout(total, cart) {
        if (typeof gtag !== 'undefined') {
            let items = cart.map((item) => {
                return {
                    item_id: item.product.id,
                    item_name: item.product.name,
                    item_category: item.product.category.name,
                    quantity: item.quantity,
                    price: item.price,
                };
            });
            var BeginCheckoutParams = {
                currency: this.currencyCode,
                value: total,
                items,
            };
            gtag('event', 'begin_checkout', BeginCheckoutParams);
        }
    }
    Login(method) {
        if (typeof gtag !== 'undefined') {
            var LoginParams = {
                method,
            };
            gtag('event', 'login', LoginParams);
        }
    }
    SignUp(method) {
        if (typeof gtag !== 'undefined') {
            var LoginParams = {
                method,
            };
            gtag('event', 'sign_up', LoginParams);
        }
    }
    ViewCart() {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'view_cart');
        }
    }
    purchase(params) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'purchase', params);
        }
    }
    search(text) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'search', { text });
        }
    }
    addPaymentInfo(params) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'add_payment_info', params);
        }
    }
    addShippingInfo(params) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'add_shipping_info', params);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: GoogleAnalyticsService, deps: [{ token: i1$1.Router }, { token: LanguageService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: GoogleAnalyticsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: GoogleAnalyticsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1$1.Router }, { type: LanguageService }]; } });

class TiktokPixelService {
    currencyCode = '';
    constructor() { }
    generalEvent(event, params) {
        if (typeof ttq !== 'undefined') {
            ttq.track(event, params);
        }
    }
    CompleteRegistration(content_id, name) {
        if (typeof ttq !== 'undefined') {
            var CompleteRegistrationParams = {
                content_id,
                content_name: name,
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('CompleteRegistration', CompleteRegistrationParams);
        }
    }
    AddToWishlist(content_id, name, price) {
        if (typeof ttq !== 'undefined') {
            var AddToWishlistParams = {
                content_id,
                content_type: name,
                value: price,
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('AddToWishlist', AddToWishlistParams);
        }
    }
    addToCart(addToCartParams) {
        if (typeof ttq !== 'undefined') {
            ttq.track('AddToCart', addToCartParams);
        }
    }
    InitiateCheckout(id, name, price, description, cart) {
        if (typeof ttq !== 'undefined') {
            let contents = cart.map((item) => {
                return {
                    content_id: item.product.id,
                    content_name: item.product.name,
                    quantity: item.quantity,
                    price: item.price,
                };
            });
            var InitiateCheckoutParams = {
                content_id: JSON.stringify(id),
                content_type: name,
                contents,
                description,
                currency: this.currencyCode,
                value: price,
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('InitiateCheckout', InitiateCheckoutParams);
        }
    }
    PlaceAnOrder(id, name, price, quantity, description, cart) {
        if (typeof ttq !== 'undefined') {
            let contents = cart.map((item) => {
                return {
                    content_id: item.product.id,
                    content_name: item.product.name,
                    quantity: item.quantity,
                    price: item.price,
                };
            });
            var PlaceAnOrderParams = {
                content_id: JSON.stringify(id),
                content_type: name,
                quantity,
                contents,
                description,
                currency: this.currencyCode,
                value: price,
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('PlaceAnOrder', PlaceAnOrderParams);
        }
    }
    ViewContent(id, name, price, quantity, description) {
        if (typeof ttq !== 'undefined') {
            var ViewContentParams = {
                content_id: JSON.stringify(id),
                content_type: name,
                quantity,
                description,
                currency: this.currencyCode,
                value: price,
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('ViewContent', ViewContentParams);
        }
    }
    Subscribe() {
        if (typeof ttq !== 'undefined') {
            var SubscribeParams = {
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('Subscribe', SubscribeParams);
        }
    }
    SubmitForm() {
        if (typeof ttq !== 'undefined') {
            var SubmitFormParams = {
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('SubmitForm', SubmitFormParams);
        }
    }
    Search() {
        if (typeof ttq !== 'undefined') {
            var SearchParams = {
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('Search', SearchParams);
        }
    }
    Download() {
        if (typeof ttq !== 'undefined') {
            var DownloadParams = {
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('Download', DownloadParams);
        }
    }
    Contact() {
        if (typeof ttq !== 'undefined') {
            var ContactParams = {
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('Contact', ContactParams);
        }
    }
    ClickButton() {
        if (typeof ttq !== 'undefined') {
            var ClickButtonParams = {
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('ClickButton', ClickButtonParams);
        }
    }
    AddPaymentInfo() {
        if (typeof ttq !== 'undefined') {
            var AddPaymentInfoParams = {
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('AddPaymentInfo', AddPaymentInfoParams);
        }
    }
    CompletePayment(id, name, price, quantity, description) {
        if (typeof ttq !== 'undefined') {
            var CompletePaymentParams = {
                content_id: JSON.stringify(id),
                content_type: name,
                quantity,
                description,
                currency: this.currencyCode,
                value: price,
                event_time: Date.now(), // Optional: Timestamp of the event
            };
            ttq.track('CompletePayment', CompletePaymentParams);
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: TiktokPixelService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: TiktokPixelService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: TiktokPixelService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return []; } });

class AppProductNamePipe {
    constructor() { }
    transform(value, ...args) {
        let product_name = value;
        let new_name = '';
        // check length of name
        let name_size = product_name.length;
        if (name_size < 120) {
            // do nothing
            new_name = product_name;
        }
        else {
            new_name = product_name.slice(0, 120) + "...more";
        }
        return new_name;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: AppProductNamePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: AppProductNamePipe, name: "app_product_name_pipe" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: AppProductNamePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'app_product_name_pipe'
                }]
        }], ctorParameters: function () { return []; } });

class ArrayFromAmountPipe {
    transform(value) {
        if (isNaN(value)) {
            return [1];
        }
        // this is done to handle if 'value' is integer -> toFixed throw error
        let temp;
        temp = Array(value).fill(undefined).map((number, index) => ++index);
        return temp;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ArrayFromAmountPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: ArrayFromAmountPipe, name: "array_from_amount" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ArrayFromAmountPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "array_from_amount"
                }]
        }] });

class DynamicRoundPipe {
    transform(value, ...args) {
        if (isNaN(value)) {
            return value;
        }
        // this is done to handle if 'value' is integer -> toFixed throw error
        let temp;
        temp = (parseFloat(String(value)).toFixed(args[0]));
        return temp;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: DynamicRoundPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: DynamicRoundPipe, name: "dynamic_round" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: DynamicRoundPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "dynamic_round"
                }]
        }] });

class PriceRoundPipe {
    transform(value) {
        if (isNaN(value)) {
            return value;
        }
        // this is done to handle if 'value' is integer -> toFixed throw error
        let temp;
        temp = (parseFloat(String(value)).toFixed(2));
        return temp;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PriceRoundPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: PriceRoundPipe, name: "price_round" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PriceRoundPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: "price_round"
                }]
        }] });

class SafeURLPipe {
    sanitizer;
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SafeURLPipe, deps: [{ token: i1$2.DomSanitizer }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: SafeURLPipe, name: "safe" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SafeURLPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'safe',
                }]
        }], ctorParameters: function () { return [{ type: i1$2.DomSanitizer }]; } });

class LanguagePipe {
    lang_s;
    constructor(lang_s) {
        this.lang_s = lang_s;
    }
    transform(word, ...args) {
        // word to translate
        let word_to_translate = word;
        // all languages data
        let language_data = this.lang_s.get_site_languages().getValue().language_data;
        // if word have no translate header return the word as its
        if (!language_data[args[0]])
            return '';
        // else, get translated word
        let new_word = language_data[args[0]][word_to_translate];
        // if translatione exist
        if (new_word) {
            return new_word;
        }
        else {
            return '';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LanguagePipe, deps: [{ token: LanguageService }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: LanguagePipe, name: "translate" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LanguagePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translate'
                }]
        }], ctorParameters: function () { return [{ type: LanguageService }]; } });

var Vendor_Types;
(function (Vendor_Types) {
    Vendor_Types[Vendor_Types["resturants"] = 461] = "resturants";
    Vendor_Types[Vendor_Types["select"] = 2] = "select";
})(Vendor_Types || (Vendor_Types = {}));

class PrimeNGUIModules {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PrimeNGUIModules, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: PrimeNGUIModules, exports: [TabViewModule,
            CheckboxModule,
            MultiSelectModule,
            CalendarModule,
            DropdownModule,
            InputTextModule,
            CarouselModule,
            SliderModule,
            RadioButtonModule,
            ToastModule,
            SkeletonModule,
            DialogModule,
            ConfirmDialogModule,
            NzPopoverModule,
            EditorModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PrimeNGUIModules, imports: [TabViewModule,
            CheckboxModule,
            MultiSelectModule,
            CalendarModule,
            DropdownModule,
            InputTextModule,
            CarouselModule,
            SliderModule,
            RadioButtonModule,
            ToastModule,
            SkeletonModule,
            DialogModule,
            ConfirmDialogModule,
            NzPopoverModule,
            EditorModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: PrimeNGUIModules, decorators: [{
            type: NgModule,
            args: [{
                    exports: [
                        TabViewModule,
                        CheckboxModule,
                        MultiSelectModule,
                        CalendarModule,
                        DropdownModule,
                        InputTextModule,
                        CarouselModule,
                        SliderModule,
                        RadioButtonModule,
                        ToastModule,
                        SkeletonModule,
                        DialogModule,
                        ConfirmDialogModule,
                        NzPopoverModule,
                        EditorModule,
                    ],
                }]
        }] });

class SharedComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: SharedComponent, selector: "lib-shared", ngImport: i0, template: `
    <p>
      shared works!
    </p>
  `, isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-shared', template: `
    <p>
      shared works!
    </p>
  ` }]
        }], ctorParameters: function () { return []; } });

class SkeltonComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SkeltonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: SkeltonComponent, selector: "app-skelton", ngImport: i0, template: "\n<section class=\"row row-cols-2 row-cols-md-3 row-cols-xl-4\">\n\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n</section>\n", styles: [""], dependencies: [{ kind: "component", type: i3.Skeleton, selector: "p-skeleton", inputs: ["styleClass", "style", "shape", "animation", "borderRadius", "size", "width", "height"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SkeltonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-skelton', template: "\n<section class=\"row row-cols-2 row-cols-md-3 row-cols-xl-4\">\n\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n  <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n      <div class=\"custom-skeleton p-4\">\n          <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n          <div class=\"align-items-center d-flex flex-column flex-sm-row gap-2 gap-sm-0 justify-content-between mt-3\">\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n              <p-skeleton width=\"4rem\" height=\"2rem\"></p-skeleton>\n          </div>\n      </div>\n  </div>\n\n</section>\n" }]
        }], ctorParameters: function () { return []; } });

class SectionSkeletonComponent {
    shimmer_list = [1, 2, 3];
    section_type = 'normal';
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SectionSkeletonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: SectionSkeletonComponent, selector: "app-section-skeleton", inputs: { section_type: "section_type" }, ngImport: i0, template: "<div *ngFor=\"let shimmer of shimmer_list; let i = index\" class=\"container-fluid p-0 mt-5\">\n\n\n   <!-- for: special section -->\n   <div class=\"ms-4 d-flex flex-column gap-3\" *ngIf=\"section_type === 'special'\">\n     <p-skeleton width=\"16rem\" height=\"2rem\"></p-skeleton>\n     <p-skeleton width=\"8rem\" height=\"2rem\"></p-skeleton>\n   </div>\n\n   <!-- for: normal sections -->\n   <div class=\"ms-4 d-flex justify-content-center\" *ngIf=\"section_type === 'normal'\">\n      <p-skeleton width=\"16rem\" height=\"2rem\"></p-skeleton>\n   </div>\n\n   <app-skelton></app-skelton>\n\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.Skeleton, selector: "p-skeleton", inputs: ["styleClass", "style", "shape", "animation", "borderRadius", "size", "width", "height"] }, { kind: "component", type: SkeltonComponent, selector: "app-skelton" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SectionSkeletonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'app-section-skeleton', template: "<div *ngFor=\"let shimmer of shimmer_list; let i = index\" class=\"container-fluid p-0 mt-5\">\n\n\n   <!-- for: special section -->\n   <div class=\"ms-4 d-flex flex-column gap-3\" *ngIf=\"section_type === 'special'\">\n     <p-skeleton width=\"16rem\" height=\"2rem\"></p-skeleton>\n     <p-skeleton width=\"8rem\" height=\"2rem\"></p-skeleton>\n   </div>\n\n   <!-- for: normal sections -->\n   <div class=\"ms-4 d-flex justify-content-center\" *ngIf=\"section_type === 'normal'\">\n      <p-skeleton width=\"16rem\" height=\"2rem\"></p-skeleton>\n   </div>\n\n   <app-skelton></app-skelton>\n\n</div>\n" }]
        }], ctorParameters: function () { return []; }, propDecorators: { section_type: [{
                type: Input,
                args: ['section_type']
            }] } });

class SharedFacade {
    language_s;
    constructor(language_s) {
        this.language_s = language_s;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedFacade, deps: [{ token: LanguageService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedFacade, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedFacade, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: LanguageService }]; } });

class BaseComponent {
    language_s;
    attrService;
    currency = 'EGP';
    attributesObject;
    lang = 'en';
    subscriptions = [];
    ref;
    constructor(language_s, attrService) {
        this.language_s = language_s;
        this.attrService = attrService;
    }
    ngOnInit() {
        this.set_language();
        this.set_currency();
    }
    set_currency() {
        // catch css variables
        let css_root = document.querySelector(":root");
        let gcs_root = window.getComputedStyle(css_root);
        // get css varibales data
        this.subscriptions?.push(this.attrService?.get_site_attributes().subscribe((e) => {
            this.currency = e.currency;
            this.attributesObject = e;
        }));
    }
    set_language() {
        this.lang = this.language_s?.get_site_active_lang_code() || 'ar';
    }
    ngOnDestroy() {
        if (this.subscriptions.length > 0) {
            this.subscriptions?.forEach((subscription) => {
                if (subscription) {
                    subscription.unsubscribe();
                }
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseComponent, deps: [{ token: LanguageService }, { token: WebsiteAttributesService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: BaseComponent, selector: "app-product-cell-mobile", ngImport: i0, template: '', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseComponent, decorators: [{
            type: Component,
            args: [{
                    template: '',
                    selector: 'app-product-cell-mobile',
                }]
        }], ctorParameters: function () { return [{ type: LanguageService }, { type: WebsiteAttributesService }]; } });

class HomeSectionSkeletonComponent extends BaseComponent {
    lang_s;
    constructor(lang_s) {
        super(lang_s);
        this.lang_s = lang_s;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: HomeSectionSkeletonComponent, deps: [{ token: LanguageService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: HomeSectionSkeletonComponent, selector: "lib-home-section-skeleton", usesInheritance: true, ngImport: i0, template: "\n\n\n<div\nclass=\"py-4\"\n[ngClass]=\"{ 'dir-ltr': lang == 'en' }\"\n>\n\n\n   <div class=\"px-4\">\n      <p-skeleton width=\"30%\" height=\"1.5rem\" styleClass=\"mb-2\"></p-skeleton>\n   </div>\n   \n   \n   <div class=\"custom-skeleton p-4 row row-cols-2 row-cols-lg-4 row-cols-md-3\">\n      \n      <!-- #card -->\n      <div>\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n         \n         <div class=\"flex mb-3 mt-2\">\n            <p-skeleton width=\"85%\" height=\"1.4rem\" styleClass=\"mb-2\"></p-skeleton>\n            <p-skeleton width=\"70%\" height=\"1.3rem\" styleClass=\"mb-2\"></p-skeleton>\n         </div>\n      </div>\n   \n      <!-- #card -->\n      <div>\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n         \n         <div class=\"flex mb-3 mt-2\">\n            <p-skeleton width=\"85%\" height=\"1.4rem\" styleClass=\"mb-2\"></p-skeleton>\n            <p-skeleton width=\"70%\" height=\"1.3rem\" styleClass=\"mb-2\"></p-skeleton>\n         </div>\n      </div>\n   \n   \n      <!-- #card -->\n      <div>\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n         \n         <div class=\"flex mb-3 mt-2\">\n            <p-skeleton width=\"85%\" height=\"1.4rem\" styleClass=\"mb-2\"></p-skeleton>\n            <p-skeleton width=\"70%\" height=\"1.3rem\" styleClass=\"mb-2\"></p-skeleton>\n         </div>\n      </div>\n      \n   \n      <!-- #card -->\n      <div>\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n         \n         <div class=\"flex mb-3 mt-2\">\n            <p-skeleton width=\"85%\" height=\"1.4rem\" styleClass=\"mb-2\"></p-skeleton>\n            <p-skeleton width=\"70%\" height=\"1.3rem\" styleClass=\"mb-2\"></p-skeleton>\n         </div>\n      </div>\n   \n   </div>\n\n\n</div>\n", styles: [""], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i3.Skeleton, selector: "p-skeleton", inputs: ["styleClass", "style", "shape", "animation", "borderRadius", "size", "width", "height"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: HomeSectionSkeletonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-home-section-skeleton', template: "\n\n\n<div\nclass=\"py-4\"\n[ngClass]=\"{ 'dir-ltr': lang == 'en' }\"\n>\n\n\n   <div class=\"px-4\">\n      <p-skeleton width=\"30%\" height=\"1.5rem\" styleClass=\"mb-2\"></p-skeleton>\n   </div>\n   \n   \n   <div class=\"custom-skeleton p-4 row row-cols-2 row-cols-lg-4 row-cols-md-3\">\n      \n      <!-- #card -->\n      <div>\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n         \n         <div class=\"flex mb-3 mt-2\">\n            <p-skeleton width=\"85%\" height=\"1.4rem\" styleClass=\"mb-2\"></p-skeleton>\n            <p-skeleton width=\"70%\" height=\"1.3rem\" styleClass=\"mb-2\"></p-skeleton>\n         </div>\n      </div>\n   \n      <!-- #card -->\n      <div>\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n         \n         <div class=\"flex mb-3 mt-2\">\n            <p-skeleton width=\"85%\" height=\"1.4rem\" styleClass=\"mb-2\"></p-skeleton>\n            <p-skeleton width=\"70%\" height=\"1.3rem\" styleClass=\"mb-2\"></p-skeleton>\n         </div>\n      </div>\n   \n   \n      <!-- #card -->\n      <div>\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n         \n         <div class=\"flex mb-3 mt-2\">\n            <p-skeleton width=\"85%\" height=\"1.4rem\" styleClass=\"mb-2\"></p-skeleton>\n            <p-skeleton width=\"70%\" height=\"1.3rem\" styleClass=\"mb-2\"></p-skeleton>\n         </div>\n      </div>\n      \n   \n      <!-- #card -->\n      <div>\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n         \n         <div class=\"flex mb-3 mt-2\">\n            <p-skeleton width=\"85%\" height=\"1.4rem\" styleClass=\"mb-2\"></p-skeleton>\n            <p-skeleton width=\"70%\" height=\"1.3rem\" styleClass=\"mb-2\"></p-skeleton>\n         </div>\n      </div>\n   \n   </div>\n\n\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: LanguageService }]; } });

class ProfileOrdersSkeletonComponent {
    lang_s;
    lang = 'en';
    constructor(lang_s) {
        this.lang_s = lang_s;
    }
    ngOnInit() {
        this.set_lang();
    }
    set_lang() {
        this.lang = this.lang_s.get_site_active_lang_code();
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ProfileOrdersSkeletonComponent, deps: [{ token: LanguageService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: ProfileOrdersSkeletonComponent, selector: "lib-profile-orders-skeleton", ngImport: i0, template: "<div class=\"grid formgrid\">\n   <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n\n      <div class=\"custom-skeleton p-4\">\n         \n         <div class=\"d-flex flex justify-content-between mb-3\">\n\n            <div>\n               <p-skeleton width=\"10rem\" styleClass=\"mb-2\"></p-skeleton>\n               <p-skeleton width=\"5rem\" styleClass=\"mb-2\"></p-skeleton>\n            </div>\n\n            <div\n            [ngClass]=\"{ 'dir-rtl': lang === 'en', 'dir-ltr': lang === 'ar' }\"\n            >\n               <p-skeleton width=\"10rem\" styleClass=\"mb-2\"></p-skeleton>\n               <p-skeleton width=\"5rem\" styleClass=\"mb-2\"></p-skeleton>\n            </div>\n\n         </div>\n\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n\n      </div>\n\n   </div>\n</div>", styles: [".dir-rtl{direction:rtl}\n"], dependencies: [{ kind: "directive", type: i2.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "component", type: i3.Skeleton, selector: "p-skeleton", inputs: ["styleClass", "style", "shape", "animation", "borderRadius", "size", "width", "height"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ProfileOrdersSkeletonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-profile-orders-skeleton', template: "<div class=\"grid formgrid\">\n   <div class=\"field col-12 md:col-6 md:pr-6 pr-0\">\n\n      <div class=\"custom-skeleton p-4\">\n         \n         <div class=\"d-flex flex justify-content-between mb-3\">\n\n            <div>\n               <p-skeleton width=\"10rem\" styleClass=\"mb-2\"></p-skeleton>\n               <p-skeleton width=\"5rem\" styleClass=\"mb-2\"></p-skeleton>\n            </div>\n\n            <div\n            [ngClass]=\"{ 'dir-rtl': lang === 'en', 'dir-ltr': lang === 'ar' }\"\n            >\n               <p-skeleton width=\"10rem\" styleClass=\"mb-2\"></p-skeleton>\n               <p-skeleton width=\"5rem\" styleClass=\"mb-2\"></p-skeleton>\n            </div>\n\n         </div>\n\n         <p-skeleton width=\"100%\" height=\"150px\"></p-skeleton>\n\n      </div>\n\n   </div>\n</div>", styles: [".dir-rtl{direction:rtl}\n"] }]
        }], ctorParameters: function () { return [{ type: LanguageService }]; } });

class BannerSkeletonComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BannerSkeletonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: BannerSkeletonComponent, selector: "ima-banner-skeleton", ngImport: i0, template: "\n\n<div>\n   <p-skeleton width=\"100%\" height=\"300px\"></p-skeleton>\n</div>", styles: [""], dependencies: [{ kind: "component", type: i3.Skeleton, selector: "p-skeleton", inputs: ["styleClass", "style", "shape", "animation", "borderRadius", "size", "width", "height"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BannerSkeletonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ima-banner-skeleton', template: "\n\n<div>\n   <p-skeleton width=\"100%\" height=\"300px\"></p-skeleton>\n</div>" }]
        }], ctorParameters: function () { return []; } });

class ImaToastComponent {
    constructor() { }
    ngOnInit() {
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ImaToastComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: ImaToastComponent, selector: "ima-toast", ngImport: i0, template: "\n\n\n\n<div class=\"toast-container custom-toast-container d-flex gap-2\">\n\n\n   <!-- single toast -->\n   <div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-bs-delay=\"5000\">\n   \n      <div class=\"d-flex bg-success\">\n         <div class=\"toast-body text-white\">\n            Hello, world! This is a toast message.\n         </div>\n         <button type=\"button\" class=\"btn-close btn-close-white me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n      </div>\n   \n   </div>\n\n</div>", styles: [".custom-toast-container{width:300px;height:70px;position:fixed;top:10px;right:17px;z-index:999}\n"] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: ImaToastComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ima-toast', template: "\n\n\n\n<div class=\"toast-container custom-toast-container d-flex gap-2\">\n\n\n   <!-- single toast -->\n   <div class=\"toast\" role=\"alert\" aria-live=\"assertive\" aria-atomic=\"true\" data-bs-delay=\"5000\">\n   \n      <div class=\"d-flex bg-success\">\n         <div class=\"toast-body text-white\">\n            Hello, world! This is a toast message.\n         </div>\n         <button type=\"button\" class=\"btn-close btn-close-white me-2 m-auto\" data-bs-dismiss=\"toast\" aria-label=\"Close\"></button>\n      </div>\n   \n   </div>\n\n</div>", styles: [".custom-toast-container{width:300px;height:70px;position:fixed;top:10px;right:17px;z-index:999}\n"] }]
        }], ctorParameters: function () { return []; } });

class Validation_Directive {
    validate;
    mutate;
    input() {
        this.validate_form_control();
    }
    focusout() {
        this.validate_form_control();
    }
    onTouchStart() {
    }
    ontouchend() {
    }
    validate_form_control() {
        let fg = this.validate.form_group;
        let fc = this.validate.control_name;
        let validation = fg.controls[fc].invalid && (fg.controls[fc].dirty || fg.controls[fc].touched);
        ;
        if (validation) {
            this.mutate.style.backgroundColor = 'red';
            this.mutate.style['text-align'] = 'start';
            this.mutate.style.color = 'red';
            this.mutate.innerText = this.validate.error;
        }
        else {
            this.mutate.style.backgroundColor = '#7e859b';
            this.mutate.innerText = '';
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: Validation_Directive, deps: [], target: i0.ɵɵFactoryTarget.Directive });
    static ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "16.1.5", type: Validation_Directive, selector: "[validate]", inputs: { validate: "validate", mutate: "mutate" }, host: { listeners: { "input": "input()", "focusout": "focusout()", "touchstart": "onTouchStart()", "touchend": "ontouchend()" } }, ngImport: i0 });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: Validation_Directive, decorators: [{
            type: Directive,
            args: [{
                    selector: '[validate]'
                }]
        }], propDecorators: { validate: [{
                type: Input
            }], mutate: [{
                type: Input
            }], input: [{
                type: HostListener,
                args: ['input']
            }], focusout: [{
                type: HostListener,
                args: ['focusout']
            }], onTouchStart: [{
                type: HostListener,
                args: ['touchstart']
            }], ontouchend: [{
                type: HostListener,
                args: ['touchend']
            }] } });

class OutputData {
    outputObj = {};
    constructor(inputs) {
        inputs.forEach((el) => {
            switch (el.type) {
                case "search":
                case "text":
                case "tel":
                case "percintage":
                    this.outputObj[el.name] = "";
                    break;
                case "number":
                    this.outputObj[el.name] = undefined;
                    break;
                case "date":
                    if ((el.name.includes("date_to") ||
                        el.name.includes("startto") ||
                        el.name.includes("end_date") ||
                        el.name.includes("enddate") ||
                        el.name.includes("modified") ||
                        el.isStartDateToday == true) &&
                        el.ignoreStartDate != true) {
                        this.outputObj[el.name] = moment().toDate();
                    }
                    else if ((el.name.includes("date_from") ||
                        el.name.includes("startfrom") ||
                        el.name.includes("start_date") ||
                        el.name.includes("startdate") ||
                        el.name.includes("created")) &&
                        el.ignoreStartDate != true) {
                        this.outputObj[el.name] = moment().startOf("month").toDate();
                    }
                    else {
                        this.outputObj[el.name] = "";
                    }
                    break;
                case "dropdown":
                    if (el.hideClear)
                        this.outputObj[el.name] = null;
                    break;
                case "month":
                    this.outputObj[el.name] = moment().startOf("month").toDate();
                    break;
                case "multiSelect":
                    this.outputObj[el.name] = null;
                    break;
            }
        });
        return this.outputObj;
    }
}

class GenericFilterComponent {
    activatedRoute;
    router;
    inputs = [];
    filterOnStart = true;
    emptyFilter = true;
    filter = new EventEmitter();
    onDropDownChange = new EventEmitter();
    outputObj;
    outputObjCopy;
    queryParams;
    constructor(activatedRoute, router) {
        this.activatedRoute = activatedRoute;
        this.router = router;
    }
    ngOnInit() {
        this.outputObj = new OutputData(this.inputs);
        this.handleQueryParams();
        if (this.filterOnStart) {
            this.emitFilterData("");
        }
    }
    handleQueryParams() {
        this.queryParams = { ...this.activatedRoute.snapshot.queryParams };
        Object.keys(this.queryParams).forEach((param) => {
            //is number parse it
            if (!isNaN(this.queryParams[param])) {
                this.queryParams[param] = JSON.parse(this.queryParams[param]);
            }
            else if (isArray(this.queryParams[param])) {
                //prase numbers in array
                this.queryParams[param].forEach((element, index) => {
                    if (!isNaN(element)) {
                        this.queryParams[param][index] = parseInt(this.queryParams[param][index]);
                    }
                });
            }
        });
        if (this.queryParams.date_to) {
            this.queryParams.date_to = new Date(this.queryParams.date_to);
        }
        if (this.queryParams.date_from) {
            this.queryParams.date_from = new Date(this.queryParams.date_from);
        }
        this.outputObj = { ...this.queryParams };
    }
    deleteEmptyKeys(key) {
        delete this.outputObjCopy[key];
    }
    formatDates(i) {
        let currentDateValue = this.outputObjCopy[this.inputs[i].name];
        if (!currentDateValue) {
            let currentDateLabel = this.inputs[i].name;
            // Returns the first day of the month if the date from is undefined or null
            if ((currentDateLabel.includes("date_from") ||
                currentDateLabel.includes("startfrom") ||
                currentDateLabel.includes("start_date") ||
                currentDateLabel.includes("enddate") ||
                currentDateLabel.includes("created") ||
                currentDateLabel.includes("modified")) &&
                this.inputs[i].ignoreStartDate != true) {
                this.outputObjCopy[currentDateLabel] = moment()
                    .clone()
                    .startOf("month")
                    .format("YYYY-MM-DD");
            }
            // Returns the date of today if the date is undefined or null
            else if ((currentDateLabel.includes("date_to") ||
                currentDateLabel.includes("startto") ||
                currentDateLabel.includes("end_date") ||
                currentDateLabel.includes("startdate")) &&
                this.inputs[i].ignoreStartDate != true) {
                this.outputObjCopy[currentDateLabel] = moment()
                    .clone()
                    .format("YYYY-MM-DD");
            }
        }
        // Formats the date before sending it
        else {
            this.outputObjCopy[this.inputs[i].name] = moment(currentDateValue)
                .clone()
                .format("YYYY-MM-DD");
        }
    }
    emitFilterData(buttonType) {
        // Sets the output object copy
        this.handleFilterData();
        // Emits the manipulated filter object
        if (buttonType != "reset" &&
            !this.emptyFilter &&
            Object.values(this.outputObjCopy).length == 0) {
            //this.genericService.showNotification("error ", "يجب ان تحدد الفلتر", "");
        }
        else {
            this.filter.emit(this.outputObjCopy);
        }
        // Resets the output copy object
        this.outputObjCopy = this.outputObj;
    }
    handleFilterData() {
        this.outputObjCopy = { ...this.outputObj };
        Object.entries(this.inputs).forEach(([key, value], i) => {
            if (this.inputs[i].type == "date") {
                this.formatDates(i);
            }
            else if (this.inputs[i].type == "month") {
                this.outputObjCopy[this.inputs[i].name] = moment(this.outputObjCopy[this.inputs[i].name]).format("YYYY-MM");
            }
            if ((this.outputObjCopy[this.inputs[i].name] === null ||
                this.outputObjCopy[this.inputs[i].name] === undefined ||
                this.outputObjCopy[this.inputs[i].name] === "") &&
                this.inputs[i].type != "date") {
                this.deleteEmptyKeys(this.inputs[i].name);
            }
        });
        if (!this.outputObjCopy?.date_to &&
            "date_to" in this.outputObj &&
            this.outputObjCopy?.date_from) {
            this.outputObjCopy.date_to = moment().clone().format("YYYY-MM-DD");
        }
    }
    emitDropDownValue(object, id) {
        const data = {};
        data[`${id}`] = object.value || object;
        this.onDropDownChange.emit(data);
    }
    resetData() {
        this.outputObj = new OutputData(this.inputs);
        this.emitFilterData("reset");
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: GenericFilterComponent, deps: [{ token: i1$1.ActivatedRoute }, { token: i1$1.Router }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: GenericFilterComponent, selector: "app-generic-filter", inputs: { inputs: "inputs", filterOnStart: "filterOnStart", emptyFilter: "emptyFilter" }, outputs: { filter: "filter", onDropDownChange: "onDropDownChange" }, ngImport: i0, template: "<div class=\"row\">\n  <div class=\"mt-3 col-md-4\" *ngFor=\"let input of inputs; let i = index\">\n    <div class=\"w-100\" [ngSwitch]=\"input.type\">\n      <input\n        [(ngModel)]=\"outputObj[input.name]\"\n        class=\"w-100\"\n        pInputText\n        *ngSwitchCase=\"'text'\"\n        [type]=\"input.type\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n      />\n      <p-inputNumber\n        [(ngModel)]=\"outputObj[input.name]\"\n        class=\"w-100\"\n        pInputNumber\n        *ngSwitchCase=\"'number'\"\n        [id]=\"input.name\"\n        [placeholder]=\"input!.placeholder!\"\n      ></p-inputNumber>\n      <input\n        [(ngModel)]=\"outputObj[input.name]\"\n        class=\"w-100\"\n        pInputText\n        *ngSwitchCase=\"'tel'\"\n        [type]=\"input.type\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n      />\n      <!-- <p-dropdown [(ngModel)]=\"outputObj[input.name]\" class=\"w-100\" *ngSwitchCase=\"'dropdown'\" [id]=\"input.name\" [placeholder]=\"input.placeholder\" [options]=\"input.options\" [optionLabel]=\"input.label\" [optionValue]=\"input.value\" showClear=\"true\"></p-dropdown> -->\n\n      <p-dropdown\n        (onChange)=\"emitDropDownValue($event, input.name)\"\n        [(ngModel)]=\"outputObj[input.name]\"\n        class=\"w-100\"\n        *ngSwitchCase=\"'dropdown'\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n        [options]=\"input.options\"\n        [optionLabel]=\"input.label\"\n        [optionValue]=\"input.value\"\n        [filter]=\"true\"\n        [filterBy]=\"input.label\"\n        [showClear]=\"!input.hideClear\"\n        [autoDisplayFirst]=\"input!.autoDisplayFirst!\"\n      >\n        <ng-template let-item pTemplate=\"item\">\n          <div>{{ item[input!.label!] }}</div>\n        </ng-template>\n      </p-dropdown>\n\n      <p-calendar\n        [(ngModel)]=\"outputObj[input.name]\"\n        *ngSwitchCase=\"'date'\"\n        [minDate]=\"input.name == 'date_to' ? outputObj['date_from'] : ''\"\n        [maxDate]=\"input.name == 'date_from' ? outputObj['date_to'] : ''\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n        dateFormat=\"dd-mm-yy\"\n      ></p-calendar>\n      <p-multiSelect\n        *ngSwitchCase=\"'multiSelect'\"\n        [id]=\"input.name\"\n        styleClass=\"w-100\"\n        [name]=\"input.name\"\n        ngDefaultControl\n        [(ngModel)]=\"outputObj[input.name]\"\n        (onChange)=\"emitDropDownValue($event, input.name)\"\n        [placeholder]=\"input.placeholder\"\n        [options]=\"input.options\"\n        [optionLabel]=\"input.label\"\n        [optionValue]=\"input.value\"\n        [showClear]=\"input.hideClear!\"\n        display=\"chip\"\n        [filter]=\"true\"\n        [filterBy]=\"input.label\"\n      >\n        <ng-template let-item pTemplate=\"item\">\n          <div>{{ item[input.label!] }}</div>\n        </ng-template>\n      </p-multiSelect>\n\n      <p-autoComplete\n        *ngSwitchCase=\"'search'\"\n        [(ngModel)]=\"outputObj[input.name]\"\n        (ngModelChange)=\"emitDropDownValue($event, input.name)\"\n        [suggestions]=\"input!.options!\"\n        [field]=\"input!.field!\"\n        [placeholder]=\"input!.placeholder!\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        styleClass=\"w-100\"\n      >\n      </p-autoComplete>\n      <p-inputNumber\n        *ngSwitchCase=\"'percintage'\"\n        [(ngModel)]=\"outputObj[input.name]\"\n        (ngModelChange)=\"emitDropDownValue($event, input.name)\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        styleClass=\"w-100\"\n        [id]=\"input.name\"\n        mode=\"currency\"\n        currency=\"EGP\"\n      >\n      </p-inputNumber>\n      <p-calendar\n        [(ngModel)]=\"outputObj[input.name]\"\n        *ngSwitchCase=\"'month'\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n        dateFormat=\"mm-yy\"\n        view=\"month\"\n      ></p-calendar>\n    </div>\n  </div>\n</div>\n<div class=\"row d-flex m-auto\">\n  <div class=\"col-md-4 mt-3 d-flex align-items-end\">\n    <button class=\"w-100 btn btn-success p-2\" (click)=\"emitFilterData('')\">\n      \u062A\u0635\u0641\u064A\u0629\n    </button>\n  </div>\n  <div class=\"col-md-4 mt-3 d-flex align-items-end\">\n    <button class=\"w-100 btn btn-secondary p-2\" (click)=\"resetData()\">\n      \u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637\n    </button>\n  </div>\n  <!-- <div class=\"col-md-4 mt-3 d-flex align-items-end\">\n    <button\n      class=\"w-100 btn btn-info p-2\"\n      (click)=\"shareFilter()\"\n    >\n      \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u062A\u0635\u0641\u064A\u0629\n    </button>\n  </div> -->\n</div>\n", styles: ["::ng-deep .p-calendar,::ng-deep .p-inputtext,::ng-deep .p-inputnumber,::ng-deep .p-dropdown{width:100%}::ng-deep .p-slider{margin-top:.75rem}::ng-deep .p-autocomplete .p-autocomplete-loader{right:unset;left:.75rem}\n"], dependencies: [{ kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i3$1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3$1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3$1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i4.PrimeTemplate, selector: "[pTemplate]", inputs: ["type", "pTemplate"] }, { kind: "component", type: i5.MultiSelect, selector: "p-multiSelect", inputs: ["style", "styleClass", "panelStyle", "panelStyleClass", "inputId", "disabled", "readonly", "group", "filter", "filterPlaceHolder", "filterLocale", "overlayVisible", "tabindex", "appendTo", "dataKey", "name", "label", "ariaLabelledBy", "displaySelectedLabel", "maxSelectedLabels", "selectionLimit", "selectedItemsLabel", "showToggleAll", "emptyFilterMessage", "emptyMessage", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "showHeader", "filterBy", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "filterMatchMode", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "display", "autocomplete", "showClear", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "defaultLabel", "placeholder", "options", "filterValue", "itemSize"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onClear", "onPanelShow", "onPanelHide", "onLazyLoad", "onRemove"] }, { kind: "component", type: i6.Calendar, selector: "p-calendar", inputs: ["style", "styleClass", "inputStyle", "inputId", "name", "inputStyleClass", "placeholder", "ariaLabelledBy", "iconAriaLabel", "disabled", "dateFormat", "multipleSeparator", "rangeSeparator", "inline", "showOtherMonths", "selectOtherMonths", "showIcon", "icon", "appendTo", "readonlyInput", "shortYearCutoff", "monthNavigator", "yearNavigator", "hourFormat", "timeOnly", "stepHour", "stepMinute", "stepSecond", "showSeconds", "required", "showOnFocus", "showWeek", "showClear", "dataType", "selectionMode", "maxDateCount", "showButtonBar", "todayButtonStyleClass", "clearButtonStyleClass", "autoZIndex", "baseZIndex", "panelStyleClass", "panelStyle", "keepInvalid", "hideOnDateTimeSelect", "touchUI", "timeSeparator", "focusTrap", "showTransitionOptions", "hideTransitionOptions", "tabindex", "minDate", "maxDate", "disabledDates", "disabledDays", "yearRange", "showTime", "responsiveOptions", "numberOfMonths", "firstDayOfWeek", "locale", "view", "defaultDate"], outputs: ["onFocus", "onBlur", "onClose", "onSelect", "onClear", "onInput", "onTodayClick", "onClearClick", "onMonthChange", "onYearChange", "onClickOutside", "onShow"] }, { kind: "component", type: i7.Dropdown, selector: "p-dropdown", inputs: ["scrollHeight", "filter", "name", "style", "panelStyle", "styleClass", "panelStyleClass", "readonly", "required", "editable", "appendTo", "tabindex", "placeholder", "filterPlaceholder", "filterLocale", "inputId", "selectId", "dataKey", "filterBy", "autofocus", "resetFilterOnHide", "dropdownIcon", "optionLabel", "optionValue", "optionDisabled", "optionGroupLabel", "optionGroupChildren", "autoDisplayFirst", "group", "showClear", "emptyFilterMessage", "emptyMessage", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "overlayOptions", "ariaFilterLabel", "ariaLabel", "ariaLabelledBy", "filterMatchMode", "maxlength", "tooltip", "tooltipPosition", "tooltipPositionStyle", "tooltipStyleClass", "autofocusFilter", "overlayDirection", "disabled", "itemSize", "autoZIndex", "baseZIndex", "showTransitionOptions", "hideTransitionOptions", "filterValue", "options"], outputs: ["onChange", "onFilter", "onFocus", "onBlur", "onClick", "onShow", "onHide", "onClear", "onLazyLoad"] }, { kind: "directive", type: i8.InputText, selector: "[pInputText]" }, { kind: "component", type: i9.InputNumber, selector: "p-inputNumber", inputs: ["showButtons", "format", "buttonLayout", "inputId", "styleClass", "style", "placeholder", "size", "maxlength", "tabindex", "title", "ariaLabel", "ariaRequired", "name", "required", "autocomplete", "min", "max", "incrementButtonClass", "decrementButtonClass", "incrementButtonIcon", "decrementButtonIcon", "readonly", "step", "allowEmpty", "locale", "localeMatcher", "mode", "currency", "currencyDisplay", "useGrouping", "minFractionDigits", "maxFractionDigits", "prefix", "suffix", "inputStyle", "inputStyleClass", "showClear", "disabled"], outputs: ["onInput", "onFocus", "onBlur", "onKeyDown", "onClear"] }, { kind: "component", type: i10.AutoComplete, selector: "p-autoComplete", inputs: ["minLength", "delay", "style", "panelStyle", "styleClass", "panelStyleClass", "inputStyle", "inputId", "inputStyleClass", "placeholder", "readonly", "disabled", "scrollHeight", "lazy", "virtualScroll", "virtualScrollItemSize", "virtualScrollOptions", "maxlength", "name", "required", "size", "appendTo", "autoHighlight", "forceSelection", "type", "autoZIndex", "baseZIndex", "ariaLabel", "dropdownAriaLabel", "ariaLabelledBy", "dropdownIcon", "unique", "group", "completeOnFocus", "showClear", "field", "dropdown", "showEmptyMessage", "dropdownMode", "multiple", "tabindex", "dataKey", "emptyMessage", "showTransitionOptions", "hideTransitionOptions", "autofocus", "autocomplete", "optionGroupChildren", "optionGroupLabel", "overlayOptions", "suggestions", "itemSize"], outputs: ["completeMethod", "onSelect", "onUnselect", "onFocus", "onBlur", "onDropdownClick", "onClear", "onKeyUp", "onShow", "onHide", "onLazyLoad"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: GenericFilterComponent, decorators: [{
            type: Component,
            args: [{ selector: "app-generic-filter", template: "<div class=\"row\">\n  <div class=\"mt-3 col-md-4\" *ngFor=\"let input of inputs; let i = index\">\n    <div class=\"w-100\" [ngSwitch]=\"input.type\">\n      <input\n        [(ngModel)]=\"outputObj[input.name]\"\n        class=\"w-100\"\n        pInputText\n        *ngSwitchCase=\"'text'\"\n        [type]=\"input.type\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n      />\n      <p-inputNumber\n        [(ngModel)]=\"outputObj[input.name]\"\n        class=\"w-100\"\n        pInputNumber\n        *ngSwitchCase=\"'number'\"\n        [id]=\"input.name\"\n        [placeholder]=\"input!.placeholder!\"\n      ></p-inputNumber>\n      <input\n        [(ngModel)]=\"outputObj[input.name]\"\n        class=\"w-100\"\n        pInputText\n        *ngSwitchCase=\"'tel'\"\n        [type]=\"input.type\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n      />\n      <!-- <p-dropdown [(ngModel)]=\"outputObj[input.name]\" class=\"w-100\" *ngSwitchCase=\"'dropdown'\" [id]=\"input.name\" [placeholder]=\"input.placeholder\" [options]=\"input.options\" [optionLabel]=\"input.label\" [optionValue]=\"input.value\" showClear=\"true\"></p-dropdown> -->\n\n      <p-dropdown\n        (onChange)=\"emitDropDownValue($event, input.name)\"\n        [(ngModel)]=\"outputObj[input.name]\"\n        class=\"w-100\"\n        *ngSwitchCase=\"'dropdown'\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n        [options]=\"input.options\"\n        [optionLabel]=\"input.label\"\n        [optionValue]=\"input.value\"\n        [filter]=\"true\"\n        [filterBy]=\"input.label\"\n        [showClear]=\"!input.hideClear\"\n        [autoDisplayFirst]=\"input!.autoDisplayFirst!\"\n      >\n        <ng-template let-item pTemplate=\"item\">\n          <div>{{ item[input!.label!] }}</div>\n        </ng-template>\n      </p-dropdown>\n\n      <p-calendar\n        [(ngModel)]=\"outputObj[input.name]\"\n        *ngSwitchCase=\"'date'\"\n        [minDate]=\"input.name == 'date_to' ? outputObj['date_from'] : ''\"\n        [maxDate]=\"input.name == 'date_from' ? outputObj['date_to'] : ''\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n        dateFormat=\"dd-mm-yy\"\n      ></p-calendar>\n      <p-multiSelect\n        *ngSwitchCase=\"'multiSelect'\"\n        [id]=\"input.name\"\n        styleClass=\"w-100\"\n        [name]=\"input.name\"\n        ngDefaultControl\n        [(ngModel)]=\"outputObj[input.name]\"\n        (onChange)=\"emitDropDownValue($event, input.name)\"\n        [placeholder]=\"input.placeholder\"\n        [options]=\"input.options\"\n        [optionLabel]=\"input.label\"\n        [optionValue]=\"input.value\"\n        [showClear]=\"input.hideClear!\"\n        display=\"chip\"\n        [filter]=\"true\"\n        [filterBy]=\"input.label\"\n      >\n        <ng-template let-item pTemplate=\"item\">\n          <div>{{ item[input.label!] }}</div>\n        </ng-template>\n      </p-multiSelect>\n\n      <p-autoComplete\n        *ngSwitchCase=\"'search'\"\n        [(ngModel)]=\"outputObj[input.name]\"\n        (ngModelChange)=\"emitDropDownValue($event, input.name)\"\n        [suggestions]=\"input!.options!\"\n        [field]=\"input!.field!\"\n        [placeholder]=\"input!.placeholder!\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        styleClass=\"w-100\"\n      >\n      </p-autoComplete>\n      <p-inputNumber\n        *ngSwitchCase=\"'percintage'\"\n        [(ngModel)]=\"outputObj[input.name]\"\n        (ngModelChange)=\"emitDropDownValue($event, input.name)\"\n        [ngModelOptions]=\"{ standalone: true }\"\n        styleClass=\"w-100\"\n        [id]=\"input.name\"\n        mode=\"currency\"\n        currency=\"EGP\"\n      >\n      </p-inputNumber>\n      <p-calendar\n        [(ngModel)]=\"outputObj[input.name]\"\n        *ngSwitchCase=\"'month'\"\n        [id]=\"input.name\"\n        [placeholder]=\"input.placeholder\"\n        dateFormat=\"mm-yy\"\n        view=\"month\"\n      ></p-calendar>\n    </div>\n  </div>\n</div>\n<div class=\"row d-flex m-auto\">\n  <div class=\"col-md-4 mt-3 d-flex align-items-end\">\n    <button class=\"w-100 btn btn-success p-2\" (click)=\"emitFilterData('')\">\n      \u062A\u0635\u0641\u064A\u0629\n    </button>\n  </div>\n  <div class=\"col-md-4 mt-3 d-flex align-items-end\">\n    <button class=\"w-100 btn btn-secondary p-2\" (click)=\"resetData()\">\n      \u0625\u0639\u0627\u062F\u0629 \u0636\u0628\u0637\n    </button>\n  </div>\n  <!-- <div class=\"col-md-4 mt-3 d-flex align-items-end\">\n    <button\n      class=\"w-100 btn btn-info p-2\"\n      (click)=\"shareFilter()\"\n    >\n      \u0645\u0634\u0627\u0631\u0643\u0629 \u0627\u0644\u062A\u0635\u0641\u064A\u0629\n    </button>\n  </div> -->\n</div>\n", styles: ["::ng-deep .p-calendar,::ng-deep .p-inputtext,::ng-deep .p-inputnumber,::ng-deep .p-dropdown{width:100%}::ng-deep .p-slider{margin-top:.75rem}::ng-deep .p-autocomplete .p-autocomplete-loader{right:unset;left:.75rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1$1.ActivatedRoute }, { type: i1$1.Router }]; }, propDecorators: { inputs: [{
                type: Input
            }], filterOnStart: [{
                type: Input,
                args: ["filterOnStart"]
            }], emptyFilter: [{
                type: Input,
                args: ["emptyFilter"]
            }], filter: [{
                type: Output
            }], onDropDownChange: [{
                type: Output
            }] } });

class SharedModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: SharedModule, declarations: [SharedComponent,
            SectionSkeletonComponent,
            SkeltonComponent,
            PriceRoundPipe,
            DynamicRoundPipe,
            AppProductNamePipe,
            LanguagePipe,
            BaseComponent,
            HomeSectionSkeletonComponent,
            ProfileOrdersSkeletonComponent,
            BannerSkeletonComponent,
            ImaToastComponent,
            Validation_Directive,
            GenericFilterComponent], imports: [CommonModule,
            CarouselModule$1,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            PrimeNGUIModules,
            SkeletonModule,
            CarouselModule$1,
            LazyLoadImageModule,
            InputNumberModule,
            AutoCompleteModule], exports: [CommonModule,
            SharedComponent,
            DynamicRoundPipe,
            CarouselModule$1,
            PrimeNGUIModules,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            PriceRoundPipe,
            AppProductNamePipe,
            CarouselModule$1,
            SectionSkeletonComponent,
            LanguagePipe,
            BaseComponent,
            HomeSectionSkeletonComponent,
            ProfileOrdersSkeletonComponent,
            BannerSkeletonComponent,
            ImaToastComponent,
            Validation_Directive,
            GenericFilterComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedModule, providers: [
            BaseService,
            FacebookPixelService,
            GoogleAnalyticsService,
            LoadPixelAdService,
            TiktokPixelService,
            SharedFacade,
        ], imports: [CommonModule,
            CarouselModule$1,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            PrimeNGUIModules,
            SkeletonModule,
            CarouselModule$1,
            LazyLoadImageModule,
            InputNumberModule,
            AutoCompleteModule, CommonModule,
            CarouselModule$1,
            PrimeNGUIModules,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            CarouselModule$1] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SharedComponent,
                        SectionSkeletonComponent,
                        SkeltonComponent,
                        PriceRoundPipe,
                        DynamicRoundPipe,
                        AppProductNamePipe,
                        LanguagePipe,
                        BaseComponent,
                        HomeSectionSkeletonComponent,
                        ProfileOrdersSkeletonComponent,
                        BannerSkeletonComponent,
                        ImaToastComponent,
                        Validation_Directive,
                        GenericFilterComponent
                    ],
                    imports: [
                        CommonModule,
                        CarouselModule$1,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        PrimeNGUIModules,
                        SkeletonModule,
                        CarouselModule$1,
                        LazyLoadImageModule,
                        InputNumberModule,
                        AutoCompleteModule
                    ],
                    exports: [
                        CommonModule,
                        SharedComponent,
                        DynamicRoundPipe,
                        CarouselModule$1,
                        PrimeNGUIModules,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        PriceRoundPipe,
                        AppProductNamePipe,
                        CarouselModule$1,
                        SectionSkeletonComponent,
                        LanguagePipe,
                        BaseComponent,
                        HomeSectionSkeletonComponent,
                        ProfileOrdersSkeletonComponent,
                        BannerSkeletonComponent,
                        ImaToastComponent,
                        Validation_Directive,
                        GenericFilterComponent
                    ],
                    providers: [
                        BaseService,
                        FacebookPixelService,
                        GoogleAnalyticsService,
                        LoadPixelAdService,
                        TiktokPixelService,
                        SharedFacade,
                    ]
                }]
        }] });

/*
 * Public API Surface of shared
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AppProductNamePipe, ArrayFromAmountPipe, BannerSkeletonComponent, BaseComponent, BaseService, DynamicRoundPipe, FacebookPixelService, GenericFilterComponent, GoogleAnalyticsService, HomeSectionSkeletonComponent, ImaToastComponent, LanguagePipe, LanguageService, LoadPixelAdService, PriceRoundPipe, PrimeNGUIModules, ProfileOrdersSkeletonComponent, SafeURLPipe, SectionSkeletonComponent, SharedComponent, SharedFacade, SharedModule, SharedService, SkeltonComponent, TiktokPixelService, Validation_Directive, Vendor_Types, WebsiteAttributesService };
//# sourceMappingURL=imakeapp-shared.mjs.map
