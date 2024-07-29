import { Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../services/language.service";
import * as i2 from "../services/website-attributes.service";
export class BaseComponent {
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
                console.log(subscription);
                if (subscription) {
                    subscription.unsubscribe();
                }
            });
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseComponent, deps: [{ token: i1.LanguageService }, { token: i2.WebsiteAttributesService }], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.5", type: BaseComponent, selector: "app-product-cell-mobile", ngImport: i0, template: '', isInline: true });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseComponent, decorators: [{
            type: Component,
            args: [{
                    template: '',
                    selector: 'app-product-cell-mobile',
                }]
        }], ctorParameters: function () { return [{ type: i1.LanguageService }, { type: i2.WebsiteAttributesService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ltYWtlYXBwLXNoYXJlZC9zcmMvbGliL2NvbXBvbmVudHMvQmFzZUNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7OztBQVk3RCxNQUFNLE9BQU8sYUFBYTtJQVVQO0lBQW1DO0lBUHBELFFBQVEsR0FBVyxLQUFLLENBQUM7SUFDekIsZ0JBQWdCLENBQUs7SUFDckIsSUFBSSxHQUFXLElBQUksQ0FBQztJQUNiLGFBQWEsR0FBb0IsRUFBRSxDQUFDO0lBQzNDLEdBQUcsQ0FBK0I7SUFHcEMsWUFBbUIsVUFBMkIsRUFBUSxXQUFxQztRQUF4RSxlQUFVLEdBQVYsVUFBVSxDQUFpQjtRQUFRLGdCQUFXLEdBQVgsV0FBVyxDQUEwQjtJQUczRixDQUFDO0lBRUMsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUNELFlBQVk7UUFJVixzQkFBc0I7UUFDdEIsSUFBSSxRQUFRLEdBQVMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRCxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFakQseUJBQXlCO1FBRXpCLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBSyxFQUFDLEVBQUU7WUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFFLENBQUMsUUFBUyxDQUFDO1lBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLENBQUE7UUFDM0IsQ0FBQyxDQUFFLENBQ0YsQ0FBQTtJQUdILENBQUM7SUFHRCxZQUFZO1FBRVYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLHlCQUF5QixFQUFFLElBQUksSUFBSSxDQUFDO0lBRW5FLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRTtnQkFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtnQkFDekIsSUFBRyxZQUFZLEVBQUM7b0JBQ2xCLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztpQkFDeEI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0QsQ0FBQzt1R0F0RFUsYUFBYTsyRkFBYixhQUFhLCtEQUpmLEVBQUU7OzJGQUlBLGFBQWE7a0JBTHpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFDLEVBQUU7b0JBQ1gsUUFBUSxFQUFFLHlCQUF5QjtpQkFFcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFdlYnNpdGVBdHRyaWJ1dGVzU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy93ZWJzaXRlLWF0dHJpYnV0ZXMuc2VydmljZVwiO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBEeW5hbWljRGlhbG9nUmVmIH0gZnJvbSBcInByaW1lbmcvZHluYW1pY2RpYWxvZ1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTonJyxcbiAgc2VsZWN0b3I6ICdhcHAtcHJvZHVjdC1jZWxsLW1vYmlsZScsXG5cbn0pXG5leHBvcnQgY2xhc3MgQmFzZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCxPbkRlc3Ryb3lcbntcblxuICBjdXJyZW5jeTogc3RyaW5nID0gJ0VHUCc7XG4gIGF0dHJpYnV0ZXNPYmplY3Q/OmFueVxuICBsYW5nOnN0cmluZyA9ICAnZW4nO1xuICBwdWJsaWMgc3Vic2NyaXB0aW9ucyA6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHJlZjogRHluYW1pY0RpYWxvZ1JlZiB8IHVuZGVmaW5lZDtcblxuXG5jb25zdHJ1Y3RvcihwdWJsaWMgbGFuZ3VhZ2Vfcz86TGFuZ3VhZ2VTZXJ2aWNlLHB1YmxpYyBhdHRyU2VydmljZT86V2Vic2l0ZUF0dHJpYnV0ZXNTZXJ2aWNlKXtcblxuXG59XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRfbGFuZ3VhZ2UoKVxuICAgIHRoaXMuc2V0X2N1cnJlbmN5KClcbiAgfVxuICBzZXRfY3VycmVuY3koKVxuICB7XG5cblxuICAgIC8vIGNhdGNoIGNzcyB2YXJpYWJsZXNcbiAgICBsZXQgY3NzX3Jvb3QgOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIik7XG4gICAgbGV0IGdjc19yb290ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoY3NzX3Jvb3QpO1xuXG4gICAgLy8gZ2V0IGNzcyB2YXJpYmFsZXMgZGF0YVxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zPy5wdXNoKFxuICAgICAgdGhpcy5hdHRyU2VydmljZT8uZ2V0X3NpdGVfYXR0cmlidXRlcygpLnN1YnNjcmliZSgoZTphbnkpPT57XG4gICAgICB0aGlzLmN1cnJlbmN5ID0gZSEuY3VycmVuY3khO1xuICAgICAgdGhpcy5hdHRyaWJ1dGVzT2JqZWN0ID0gZVxuICAgIH0pIVxuICAgIClcblxuXG4gIH1cblxuXG4gIHNldF9sYW5ndWFnZSgpXG4gIHtcbiAgICB0aGlzLmxhbmcgPSB0aGlzLmxhbmd1YWdlX3M/LmdldF9zaXRlX2FjdGl2ZV9sYW5nX2NvZGUoKSB8fCAnYXInO1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYodGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucz8uZm9yRWFjaCgoc3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHN1YnNjcmlwdGlvbilcbiAgICAgICAgaWYoc3Vic2NyaXB0aW9uKXtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG4gIH1cbiAgfVxuXG5cbn1cbiJdfQ==