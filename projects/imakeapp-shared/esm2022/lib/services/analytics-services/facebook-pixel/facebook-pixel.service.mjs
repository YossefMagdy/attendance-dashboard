import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class FacebookPixelService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZWJvb2stcGl4ZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ltYWtlYXBwLXNoYXJlZC9zcmMvbGliL3NlcnZpY2VzL2FuYWx5dGljcy1zZXJ2aWNlcy9mYWNlYm9vay1waXhlbC9mYWNlYm9vay1waXhlbC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBWTNDLE1BQU0sT0FBTyxvQkFBb0I7SUFHL0IsWUFBWSxHQUFXLEtBQUssQ0FBQztJQUc3QixnQkFBZSxDQUFDO0lBR2hCLFlBQVksQ0FBQyxLQUE2QixFQUFFLE1BQWdDO1FBRTFFLElBQUksT0FBTyxHQUFHLEtBQUssV0FBVyxFQUFFO1lBQzlCLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUdELFNBQVMsQ0FBQyxlQUE2QztRQUVyRCxJQUFJLE9BQU8sR0FBRyxLQUFLLFdBQVcsRUFBRTtZQUU5QixHQUFHLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQztTQUM1QztJQUNILENBQUM7dUdBdkJVLG9CQUFvQjsyR0FBcEIsb0JBQW9CLGNBRm5CLE1BQU07OzJGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBhZGRfdG9fY2FydF9vcHRpb25faW50ZXJmYWNlLCBmYWNlYm9va1BpeGVsRXZlbnRUeXBlLCBmYWNlYm9va1BpeGVsUGFyYW1zTW9kZWwgfSBmcm9tICcuL2ZhY2Vib29rLXBpeGVsLW1vZGVsLm1vZGVsJztcblxuXG5kZWNsYXJlIGxldCBmYnE6IGFueTtcblxuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZhY2Vib29rUGl4ZWxTZXJ2aWNlIFxue1xuXG4gIGN1cnJlbmN5Q29kZTogc3RyaW5nID0gJ3VzZCc7XG5cblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cblxuICBnZW5lcmFsRXZlbnQoZXZlbnQ6IGZhY2Vib29rUGl4ZWxFdmVudFR5cGUsIHBhcmFtczogZmFjZWJvb2tQaXhlbFBhcmFtc01vZGVsKSBcbiAge1xuICAgIGlmICh0eXBlb2YgZmJxICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgZmJxKCd0cmFjaycsIGV2ZW50LCBwYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cbiAgYWRkVG9DYXJ0KGFkZFRvQ2FydFBhcmFtczogYWRkX3RvX2NhcnRfb3B0aW9uX2ludGVyZmFjZSkgXG4gIHtcbiAgICBpZiAodHlwZW9mIGZicSAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgZmJxKCd0cmFjaycsICdBZGRUb0NhcnQnLCBhZGRUb0NhcnRQYXJhbXMpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiJdfQ==