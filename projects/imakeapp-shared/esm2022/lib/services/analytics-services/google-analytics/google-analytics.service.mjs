import { Injectable } from '@angular/core';
import { NavigationStart } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../../language.service";
export class GoogleAnalyticsService {
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
        console.log(params, 'params');
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
            console.log(addToCartParams);
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: GoogleAnalyticsService, deps: [{ token: i1.Router }, { token: i2.LanguageService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: GoogleAnalyticsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: GoogleAnalyticsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.LanguageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLWFuYWx5dGljcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvaW1ha2VhcHAtc2hhcmVkL3NyYy9saWIvc2VydmljZXMvYW5hbHl0aWNzLXNlcnZpY2VzL2dvb2dsZS1hbmFseXRpY3MvZ29vZ2xlLWFuYWx5dGljcy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBVSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBYTFELE1BQU0sT0FBTyxzQkFBc0I7SUFTdkI7SUFDQTtJQU5WLFlBQVksR0FBVyxNQUFNLENBQUM7SUFDOUIsSUFBSSxHQUFJLElBQUksQ0FBQztJQUdiLFlBQ1UsTUFBYyxFQUNkLFVBQTJCO1FBRDNCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFpQjtJQUNuQyxDQUFDO0lBR0gsUUFBUTtRQUdOLENBQUM7SUFFSCxDQUFDO0lBSUQsY0FBYztRQUVaLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQztZQUMzQixJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDakIsSUFBSSxRQUFRLFlBQVksZUFBZSxFQUFFO29CQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7aUJBQ3pEO1lBQ0gsQ0FBQztTQUNGLENBQUMsQ0FBQztJQUNMLENBQUM7SUFHRCxRQUFRLENBQUMsTUFBVztRQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztRQUU5QixJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUMvQixJQUFJLENBQUMs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LFFBQVE7UUFFTixJQUFJLE9BQU8sSUFBSSxLQUFLLFdBQVcsRUFBRTtZQUMvQixJQUFJLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUdELFFBQVEsQ0FBQyxNQUFXO1FBQ2xCLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFTO1FBQ2QsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQ25DO0lBRUgsQ0FBQztJQUVELGNBQWMsQ0FBQyxNQUFXO1FBQ3hCLElBQUksT0FBTyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQy9CLElBQUksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0M7SUFDSCxDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQVc7UUFDekIsSUFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDL0IsSUFBSSxDQUFDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7dUdBeExVLHNCQUFzQjsyR0FBdEIsc0JBQXNCLGNBRnJCLE1BQU07OzJGQUVQLHNCQUFzQjtrQkFIbEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGFkZF90b19jYXJ0X29wdGlvbl9pbnRlcmZhY2UgfSBmcm9tICcuL2dvb2dsZS1hbmFseXRpY3MubW9kZWwnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbGFuZ3VhZ2Uuc2VydmljZSc7XG5cblxuXG5kZWNsYXJlIGxldCBndGFnOiBhbnk7XG5cblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgR29vZ2xlQW5hbHl0aWNzU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdFxue1xuXG5cbiAgY3VycmVuY3lDb2RlOiBzdHJpbmcgPSAnaGFoYSc7XG4gIGxhbmcgPSAgJ2VuJztcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBsYW5ndWFnZV9zOiBMYW5ndWFnZVNlcnZpY2VcbiAgKXt9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkXG4gIHtcblxuICAgIDtcblxuICB9XG5cblxuXG4gIGhhbmRsZUNsaWVudElkKClcbiAge1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoe1xuICAgICAgbmV4dDogKHJlc29wbnNlKSA9PiB7XG4gICAgICAgIGlmIChyZXNvcG5zZSBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCkge1xuICAgICAgICAgIHRoaXMucGFnZVZpZXcoeyBjbGllbnRfaWQ6ICcyMScsIGxhbmd1YWdlOiB0aGlzLmxhbmcgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuXG4gIHBhZ2VWaWV3KHBhcmFtczogYW55KVxuICB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zLCAncGFyYW1zJyk7XG5cbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBndGFnKCdldmVudCcsICdwYWdlX3ZpZXcnLCBwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgYWRkVG9DYXJ0KGFkZFRvQ2FydFBhcmFtczogYWRkX3RvX2NhcnRfb3B0aW9uX2ludGVyZmFjZSlcbiAge1xuICAgIGlmICh0eXBlb2YgZ3RhZyAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgZ3RhZygnZXZlbnQnLCAnYWRkX3RvX2NhcnQnLCBhZGRUb0NhcnRQYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgUmVtb3ZlRnJvbUNhcnQocHJvZHVjdDogYW55LCBxdWFudGl0eTogYW55LCBwcmljZTogYW55KVxuICB7XG5cblxuICAgIGlmICh0eXBlb2YgZ3RhZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBhZGRUb0NhcnRQYXJhbXMgPSB7XG4gICAgICAgIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5Q29kZSxcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaXRlbV9pZDogSlNPTi5zdHJpbmdpZnkocHJvZHVjdC5pZCksXG4gICAgICAgICAgICBpdGVtX25hbWU6IHByb2R1Y3QubmFtZSxcbiAgICAgICAgICAgIGl0ZW1fY2F0ZWdvcnk6IHByb2R1Y3QuY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgICAgcXVhbnRpdHksXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH07XG4gICAgICBjb25zb2xlLmxvZyhhZGRUb0NhcnRQYXJhbXMpO1xuXG4gICAgICBndGFnKCdldmVudCcsICdyZW1vdmVfZnJvbV9jYXJ0JywgYWRkVG9DYXJ0UGFyYW1zKTtcbiAgICB9XG4gIH1cblxuXG4gIEFkZFRvV2lzaGxpc3QocHJpY2U6IGFueSwgaXRlbV9pZDogYW55LCBpdGVtX25hbWU6IGFueSwgaXRlbV9jYXRlZ29yeTogYW55KVxuICB7XG5cblxuICAgIGlmICh0eXBlb2YgZ3RhZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBhZGRUb0NhcnRQYXJhbXMgPSB7XG4gICAgICAgIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5Q29kZSxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpdGVtX2lkLFxuICAgICAgICAgICAgaXRlbV9uYW1lLFxuICAgICAgICAgICAgaXRlbV9jYXRlZ29yeSxcbiAgICAgICAgICAgIHByaWNlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9O1xuICAgICAgZ3RhZygnZXZlbnQnLCAnYWRkX3RvX3dpc2hsaXN0JywgYWRkVG9DYXJ0UGFyYW1zKTtcbiAgICB9XG5cblxuICB9XG5cblxuICBCZWdpbkNoZWNrb3V0KHRvdGFsOiBhbnksIGNhcnQ6IGFueSlcbiAge1xuXG5cbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgaXRlbXMgPSAoY2FydCBhcyBBcnJheTxhbnk+KS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpdGVtX2lkOiBpdGVtLnByb2R1Y3QuaWQsXG4gICAgICAgICAgaXRlbV9uYW1lOiBpdGVtLnByb2R1Y3QubmFtZSxcbiAgICAgICAgICBpdGVtX2NhdGVnb3J5OiBpdGVtLnByb2R1Y3QuY2F0ZWdvcnkubmFtZSxcbiAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgdmFyIEJlZ2luQ2hlY2tvdXRQYXJhbXMgPSB7XG4gICAgICAgIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5Q29kZSxcbiAgICAgICAgdmFsdWU6IHRvdGFsLFxuICAgICAgICBpdGVtcyxcbiAgICAgIH07XG4gICAgICBndGFnKCdldmVudCcsICdiZWdpbl9jaGVja291dCcsIEJlZ2luQ2hlY2tvdXRQYXJhbXMpO1xuICAgIH1cblxuICB9XG5cblxuICBMb2dpbihtZXRob2Q6IGFueSlcbiAge1xuXG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIExvZ2luUGFyYW1zID0ge1xuICAgICAgICBtZXRob2QsXG4gICAgICB9O1xuICAgICAgZ3RhZygnZXZlbnQnLCAnbG9naW4nLCBMb2dpblBhcmFtcyk7XG4gICAgfVxuXG4gIH1cblxuXG4gIFNpZ25VcChtZXRob2Q6IGFueSlcbiAge1xuXG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIExvZ2luUGFyYW1zID0ge1xuICAgICAgICBtZXRob2QsXG4gICAgICB9O1xuICAgICAgZ3RhZygnZXZlbnQnLCAnc2lnbl91cCcsIExvZ2luUGFyYW1zKTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgVmlld0NhcnQoKVxuICB7XG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZ3RhZygnZXZlbnQnLCAndmlld19jYXJ0Jyk7XG4gICAgfVxuICB9XG5cblxuICBwdXJjaGFzZShwYXJhbXM6IGFueSkge1xuICAgIGlmICh0eXBlb2YgZ3RhZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGd0YWcoJ2V2ZW50JywgJ3B1cmNoYXNlJywgcGFyYW1zKTtcbiAgICB9XG4gIH1cblxuICBzZWFyY2godGV4dDogYW55KSB7XG4gICAgaWYgKHR5cGVvZiBndGFnICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZ3RhZygnZXZlbnQnLCAnc2VhcmNoJywgeyB0ZXh0IH0pO1xuICAgIH1cblxuICB9XG5cbiAgYWRkUGF5bWVudEluZm8ocGFyYW1zOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBndGFnKCdldmVudCcsICdhZGRfcGF5bWVudF9pbmZvJywgcGFyYW1zKTtcbiAgICB9XG4gIH1cblxuICBhZGRTaGlwcGluZ0luZm8ocGFyYW1zOiBhbnkpIHtcbiAgICBpZiAodHlwZW9mIGd0YWcgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBndGFnKCdldmVudCcsICdhZGRfc2hpcHBpbmdfaW5mbycsIHBhcmFtcyk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==