import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../services/language.service";
export class SharedFacade {
    language_s;
    constructor(language_s) {
        this.language_s = language_s;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedFacade, deps: [{ token: i1.LanguageService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedFacade, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedFacade, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: function () { return [{ type: i1.LanguageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmZhY2FkZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pbWFrZWFwcC1zaGFyZWQvc3JjL2xpYi9kb21haW4vZmFjYWRlcy9zaGFyZWQuZmFjYWRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFTM0MsTUFBTSxPQUFPLFlBQVk7SUFNWDtJQURYLFlBQ1csVUFBMkI7UUFBM0IsZUFBVSxHQUFWLFVBQVUsQ0FBaUI7SUFDbkMsQ0FBQzt1R0FQTSxZQUFZOzJHQUFaLFlBQVksY0FEQyxNQUFNOzsyRkFDbkIsWUFBWTtrQkFEeEIsVUFBVTttQkFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlXCI7XG5cblxuXG5cblxuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNoYXJlZEZhY2FkZVxue1xuXG5cblxuICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGxhbmd1YWdlX3M6IExhbmd1YWdlU2VydmljZVxuICAgKSB7fVxuXG5cblxuXG5cblxufVxuIl19