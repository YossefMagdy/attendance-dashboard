import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class TiktokPixelService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlrdG9rLXBpeGVsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pbWFrZWFwcC1zaGFyZWQvc3JjL2xpYi9zZXJ2aWNlcy9hbmFseXRpY3Mtc2VydmljZXMvdGlrdG9rLXBpeGVsL3Rpa3Rvay1waXhlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBWTNDLE1BQU0sT0FBTyxrQkFBa0I7SUFJN0IsWUFBWSxHQUFXLEVBQUUsQ0FBQztJQUcxQixnQkFBZSxDQUFDO0lBR2hCLFlBQVksQ0FBQyxLQUEyQixFQUFFLE1BQThCO1FBRXRFLElBQUksT0FBTyxHQUFHLEtBQUssV0FBVyxFQUFFO1lBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUdELG9CQUFvQixDQUFDLFVBQWUsRUFBRSxJQUFTO1FBRTdDLElBQUksT0FBTyxHQUFHLEtBQUssV0FBVyxFQUFFO1lBQzlCLElBQUksMEJBQTBCLEdBQUc7Z0JBQy9CLFVBQVU7Z0JBQ1YsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFVBQVUsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsbUNBQW1DO2FBQzVELENBQUM7WUFDRixHQUFHLENBQUMsS0FBSyxDQUFDLHNCQUFzQixFQUFFLDBCQUEwQixDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDO0lBR0QsYUFBYSxDQUFDLFVBQWUsRUFBRSxJQUFTLEVBQUUsS0FBVTtRQUVsRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFdBQVcsRUFBRTtZQUM5QixJQUFJLG1CQUFtQixHQUFHO2dCQUN4QixVQUFVO2dCQUNWLFlBQVksRUFBRSxJQUFJO2dCQUNsQixLQUFLLEVBQUUsS0FBSztnQkFDWixVQUFVLEVBQUUsSUFBSSxDQUFDLEdBQUcs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RCxDQUFDO1lBQ0YsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQzt1R0ExT1Usa0JBQWtCOzJHQUFsQixrQkFBa0IsY0FGakIsTUFBTTs7MkZBRVAsa0JBQWtCO2tCQUg5QixVQUFVO21CQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFkZF90b19jYXJ0X2ludGVyZmFjZSwgdGlrdG9rUGl4ZWxFdmVudFR5cGUsIHRpa3Rva1BpeGVsUGFyYW1zTW9kZWwgfSBmcm9tICcuL3Rpa3Rvay1waXhlbC1tb2RlbC5tb2RlbCc7XG5cblxuXG5kZWNsYXJlIGxldCB0dHE6IGFueTtcblxuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBUaWt0b2tQaXhlbFNlcnZpY2UgXG57XG5cblxuICBjdXJyZW5jeUNvZGU6IHN0cmluZyA9ICcnO1xuXG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG5cbiAgZ2VuZXJhbEV2ZW50KGV2ZW50OiB0aWt0b2tQaXhlbEV2ZW50VHlwZSwgcGFyYW1zOiB0aWt0b2tQaXhlbFBhcmFtc01vZGVsKSBcbiAge1xuICAgIGlmICh0eXBlb2YgdHRxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdHRxLnRyYWNrKCBldmVudCwgcGFyYW1zKTtcbiAgICB9XG4gIH1cblxuXG4gIENvbXBsZXRlUmVnaXN0cmF0aW9uKGNvbnRlbnRfaWQ6IGFueSwgbmFtZTogYW55KSBcbiAge1xuICAgIGlmICh0eXBlb2YgdHRxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIENvbXBsZXRlUmVnaXN0cmF0aW9uUGFyYW1zID0ge1xuICAgICAgICBjb250ZW50X2lkLFxuICAgICAgICBjb250ZW50X25hbWU6IG5hbWUsXG4gICAgICAgIGV2ZW50X3RpbWU6IERhdGUubm93KCksIC8vIE9wdGlvbmFsOiBUaW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgICB9O1xuICAgICAgdHRxLnRyYWNrKCdDb21wbGV0ZVJlZ2lzdHJhdGlvbicsIENvbXBsZXRlUmVnaXN0cmF0aW9uUGFyYW1zKTtcbiAgICB9XG4gIH1cblxuXG4gIEFkZFRvV2lzaGxpc3QoY29udGVudF9pZDogYW55LCBuYW1lOiBhbnksIHByaWNlOiBhbnkpIFxuICB7XG4gICAgaWYgKHR5cGVvZiB0dHEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgQWRkVG9XaXNobGlzdFBhcmFtcyA9IHtcbiAgICAgICAgY29udGVudF9pZCxcbiAgICAgICAgY29udGVudF90eXBlOiBuYW1lLFxuICAgICAgICB2YWx1ZTogcHJpY2UsXG4gICAgICAgIGV2ZW50X3RpbWU6IERhdGUubm93KCksIC8vIE9wdGlvbmFsOiBUaW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgICB9O1xuICAgICAgdHRxLnRyYWNrKCdBZGRUb1dpc2hsaXN0JywgQWRkVG9XaXNobGlzdFBhcmFtcyk7XG4gICAgfVxuICB9XG5cblxuICBhZGRUb0NhcnQoYWRkVG9DYXJ0UGFyYW1zOiBhZGRfdG9fY2FydF9pbnRlcmZhY2UpIFxuICB7XG4gICAgaWYgKHR5cGVvZiB0dHEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0dHEudHJhY2soJ0FkZFRvQ2FydCcsIGFkZFRvQ2FydFBhcmFtcyk7XG4gICAgfVxuICB9XG5cblxuXG4gIEluaXRpYXRlQ2hlY2tvdXQoXG4gICAgaWQ6IGFueSxcbiAgICBuYW1lOiBhbnksXG4gICAgcHJpY2U6IGFueSxcbiAgICBkZXNjcmlwdGlvbjogYW55LFxuICAgIGNhcnQ6IGFueVxuICApIFxuICB7XG4gICAgaWYgKHR5cGVvZiB0dHEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBsZXQgY29udGVudHMgPSAoY2FydCBhcyBBcnJheTxhbnk+KS5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBjb250ZW50X2lkOiBpdGVtLnByb2R1Y3QuaWQsXG4gICAgICAgICAgY29udGVudF9uYW1lOiBpdGVtLnByb2R1Y3QubmFtZSxcbiAgICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eSxcbiAgICAgICAgICBwcmljZTogaXRlbS5wcmljZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgdmFyIEluaXRpYXRlQ2hlY2tvdXRQYXJhbXMgPSB7XG4gICAgICAgIGNvbnRlbnRfaWQ6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgY29udGVudF90eXBlOiBuYW1lLFxuICAgICAgICBjb250ZW50cyxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5Q29kZSxcbiAgICAgICAgdmFsdWU6IHByaWNlLFxuICAgICAgICBldmVudF90aW1lOiBEYXRlLm5vdygpLCAvLyBPcHRpb25hbDogVGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICAgfTtcbiAgICAgIHR0cS50cmFjaygnSW5pdGlhdGVDaGVja291dCcsIEluaXRpYXRlQ2hlY2tvdXRQYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cblxuICBQbGFjZUFuT3JkZXIoXG4gICAgaWQ6IGFueSxcbiAgICBuYW1lOiBhbnksXG4gICAgcHJpY2U6IGFueSxcbiAgICBxdWFudGl0eTogYW55LFxuICAgIGRlc2NyaXB0aW9uOiBhbnksXG4gICAgY2FydDogYW55XG4gICkgXG4gIHtcbiAgICBpZiAodHlwZW9mIHR0cSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGxldCBjb250ZW50cyA9IChjYXJ0IGFzIEFycmF5PGFueT4pLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbnRlbnRfaWQ6IGl0ZW0ucHJvZHVjdC5pZCxcbiAgICAgICAgICBjb250ZW50X25hbWU6IGl0ZW0ucHJvZHVjdC5uYW1lLFxuICAgICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5LFxuICAgICAgICAgIHByaWNlOiBpdGVtLnByaWNlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICB2YXIgUGxhY2VBbk9yZGVyUGFyYW1zID0ge1xuICAgICAgICBjb250ZW50X2lkOiBKU09OLnN0cmluZ2lmeShpZCksXG4gICAgICAgIGNvbnRlbnRfdHlwZTogbmFtZSxcbiAgICAgICAgcXVhbnRpdHksXG4gICAgICAgIGNvbnRlbnRzLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY3VycmVuY3k6IHRoaXMuY3VycmVuY3lDb2RlLFxuICAgICAgICB2YWx1ZTogcHJpY2UsXG4gICAgICAgIGV2ZW50X3RpbWU6IERhdGUubm93KCksIC8vIE9wdGlvbmFsOiBUaW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgICB9O1xuICAgICAgdHRxLnRyYWNrKCdQbGFjZUFuT3JkZXInLCBQbGFjZUFuT3JkZXJQYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cblxuICBWaWV3Q29udGVudChpZDogYW55LCBuYW1lOiBhbnksIHByaWNlOiBhbnksIHF1YW50aXR5OiBhbnksIGRlc2NyaXB0aW9uOiBhbnkpIFxuICB7XG4gICAgaWYgKHR5cGVvZiB0dHEgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgVmlld0NvbnRlbnRQYXJhbXMgPSB7XG4gICAgICAgIGNvbnRlbnRfaWQ6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgY29udGVudF90eXBlOiBuYW1lLFxuICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5Q29kZSxcbiAgICAgICAgdmFsdWU6IHByaWNlLFxuICAgICAgICBldmVudF90aW1lOiBEYXRlLm5vdygpLCAvLyBPcHRpb25hbDogVGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICAgfTtcbiAgICAgIHR0cS50cmFjaygnVmlld0NvbnRlbnQnLCBWaWV3Q29udGVudFBhcmFtcyk7XG4gICAgfVxuICB9XG5cblxuICBTdWJzY3JpYmUoKSBcbiAge1xuICAgIGlmICh0eXBlb2YgdHRxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIFN1YnNjcmliZVBhcmFtcyA9IHtcbiAgICAgICAgZXZlbnRfdGltZTogRGF0ZS5ub3coKSwgLy8gT3B0aW9uYWw6IFRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAgIH07XG4gICAgICB0dHEudHJhY2soJ1N1YnNjcmliZScsIFN1YnNjcmliZVBhcmFtcyk7XG4gICAgfVxuICB9XG5cblxuICBTdWJtaXRGb3JtKCkgXG4gIHtcbiAgICBpZiAodHlwZW9mIHR0cSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBTdWJtaXRGb3JtUGFyYW1zID0ge1xuICAgICAgICBldmVudF90aW1lOiBEYXRlLm5vdygpLCAvLyBPcHRpb25hbDogVGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICAgfTtcbiAgICAgIHR0cS50cmFjaygnU3VibWl0Rm9ybScsIFN1Ym1pdEZvcm1QYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgU2VhcmNoKCkgXG4gIHtcbiAgICBpZiAodHlwZW9mIHR0cSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBTZWFyY2hQYXJhbXMgPSB7XG4gICAgICAgIGV2ZW50X3RpbWU6IERhdGUubm93KCksIC8vIE9wdGlvbmFsOiBUaW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgICB9O1xuICAgICAgdHRxLnRyYWNrKCdTZWFyY2gnLCBTZWFyY2hQYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgRG93bmxvYWQoKSBcbiAge1xuICAgIGlmICh0eXBlb2YgdHRxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIERvd25sb2FkUGFyYW1zID0ge1xuICAgICAgICBldmVudF90aW1lOiBEYXRlLm5vdygpLCAvLyBPcHRpb25hbDogVGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICAgfTtcbiAgICAgIHR0cS50cmFjaygnRG93bmxvYWQnLCBEb3dubG9hZFBhcmFtcyk7XG4gICAgfVxuICB9XG5cblxuICBDb250YWN0KCkgXG4gIHtcbiAgICBpZiAodHlwZW9mIHR0cSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBDb250YWN0UGFyYW1zID0ge1xuICAgICAgICBldmVudF90aW1lOiBEYXRlLm5vdygpLCAvLyBPcHRpb25hbDogVGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICAgfTtcbiAgICAgIHR0cS50cmFjaygnQ29udGFjdCcsIENvbnRhY3RQYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgQ2xpY2tCdXR0b24oKSBcbiAge1xuICAgIGlmICh0eXBlb2YgdHRxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIENsaWNrQnV0dG9uUGFyYW1zID0ge1xuICAgICAgICBldmVudF90aW1lOiBEYXRlLm5vdygpLCAvLyBPcHRpb25hbDogVGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICAgfTtcbiAgICAgIHR0cS50cmFjaygnQ2xpY2tCdXR0b24nLCBDbGlja0J1dHRvblBhcmFtcyk7XG4gICAgfVxuICB9XG5cblxuICBBZGRQYXltZW50SW5mbygpXG4gIHtcbiAgICBpZiAodHlwZW9mIHR0cSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBBZGRQYXltZW50SW5mb1BhcmFtcyA9IHtcbiAgICAgICAgZXZlbnRfdGltZTogRGF0ZS5ub3coKSwgLy8gT3B0aW9uYWw6IFRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAgIH07XG4gICAgICB0dHEudHJhY2soJ0FkZFBheW1lbnRJbmZvJywgQWRkUGF5bWVudEluZm9QYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgQ29tcGxldGVQYXltZW50KFxuICAgIGlkOiBhbnksXG4gICAgbmFtZTogYW55LFxuICAgIHByaWNlOiBhbnksXG4gICAgcXVhbnRpdHk6IGFueSxcbiAgICBkZXNjcmlwdGlvbjogYW55XG4gICkgXG4gIHtcbiAgICBpZiAodHlwZW9mIHR0cSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBDb21wbGV0ZVBheW1lbnRQYXJhbXMgPSB7XG4gICAgICAgIGNvbnRlbnRfaWQ6IEpTT04uc3RyaW5naWZ5KGlkKSxcbiAgICAgICAgY29udGVudF90eXBlOiBuYW1lLFxuICAgICAgICBxdWFudGl0eSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGN1cnJlbmN5OiB0aGlzLmN1cnJlbmN5Q29kZSxcbiAgICAgICAgdmFsdWU6IHByaWNlLFxuICAgICAgICBldmVudF90aW1lOiBEYXRlLm5vdygpLCAvLyBPcHRpb25hbDogVGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICAgfTtcbiAgICAgIHR0cS50cmFjaygnQ29tcGxldGVQYXltZW50JywgQ29tcGxldGVQYXltZW50UGFyYW1zKTtcbiAgICB9XG4gIH1cbiAgXG5cblxufVxuIl19