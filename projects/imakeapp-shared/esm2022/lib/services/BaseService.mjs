import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../../public-api";
// Create a signal
export class BaseService {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseService, deps: [{ token: i1.LanguageService }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseService });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: BaseService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.LanguageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pbWFrZWFwcC1zaGFyZWQvc3JjL2xpYi9zZXJ2aWNlcy9CYXNlU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFvQixNQUFNLGVBQWUsQ0FBQzs7O0FBSzdELGtCQUFrQjtBQUdsQixNQUFNLE9BQU8sV0FBVztJQU9MO0lBSm5CLElBQUksR0FBRyxJQUFJLENBQUE7SUFDWCxNQUFNLEdBQVUsQ0FBQyxDQUFBO0lBQ1QsYUFBYSxHQUFtQixFQUFFLENBQUM7SUFFM0MsWUFBbUIsVUFBMEI7UUFBMUIsZUFBVSxHQUFWLFVBQVUsQ0FBZ0I7UUFFekMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLFNBQVMsQ0FDOUUsQ0FBQyxRQUFjLEVBQUMsRUFBRTtZQUNoQixJQUFHLFFBQVEsSUFBSSxJQUFJLEVBQUM7Z0JBQ3BCLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFBO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNqQjtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUE7UUFFTCxNQUFNO0lBRU4sQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3pCLElBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxDQUFDLFlBQVksRUFBRSxFQUFFO2dCQUMzQyxJQUFHLFlBQVksRUFBQztvQkFDaEIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUMxQjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0Y7SUFDSCxDQUFDO0lBQ0QsWUFBWSxDQUFDLE1BQWE7UUFDeEIsTUFBTSxVQUFVLEdBQ2QsZ0VBQWdFLENBQUM7UUFDbkUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQy9CLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQztTQUMzRTtRQUNELE9BQU8sQ0FDTCxNQUFNO1lBQ04sSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7WUFDcEIsRUFBRTtZQUNGLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBRXpCLENBQUM7SUFDSixDQUFDO3VHQTlDWSxXQUFXOzJHQUFYLFdBQVc7OzJGQUFYLFdBQVc7a0JBRnZCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3ksIFNpZ25hbH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSwgbGFuZ3VhZ2VzX3N0YXRlX2ludGVyZmFjZSB9IGZyb20gXCIuLi8uLi9wdWJsaWMtYXBpXCI7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSBcIm5neC1jb29raWUtc2VydmljZVwiO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIjtcblxuLy8gQ3JlYXRlIGEgc2lnbmFsXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBCYXNlU2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveVxue1xuXG5sYW5nID0gJ2FyJ1xudXNlcklEOm51bWJlciA9IDBcbiBwdWJsaWMgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcblxuY29uc3RydWN0b3IocHVibGljIGxhbmd1YWdlX3M6TGFuZ3VhZ2VTZXJ2aWNlXG4gICl7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zPy5wdXNoKHRoaXMubGFuZ3VhZ2Vfcy5nZXRfc2l0ZV9sYW5ndWFnZXNfY29kZSgpLnN1YnNjcmliZShcbiAgKHJlc3BvbnNlIDogYW55KT0+e1xuICAgIGlmKHJlc3BvbnNlICE9IG51bGwpe1xuICAgIHRoaXMubGFuZyA9IHJlc3BvbnNlXG5jb25zb2xlLmxvZyh0aGlzLmxhbmcpXG4gICAgfVxuICB9KSlcblxuLy91c2VyXG5cbn1cblxubmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIGNvbnNvbGUubG9nKFwiaW4gZGVzdHJveVwiKVxuICBpZih0aGlzLnN1YnNjcmlwdGlvbnMpIHtcbiAgdGhpcy5zdWJzY3JpcHRpb25zPy5mb3JFYWNoKChzdWJzY3JpcHRpb24pID0+IHtcbiAgICBpZihzdWJzY3JpcHRpb24pe1xuICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfSk7XG4gIH1cbn1cbmdlbmVyYXRlQ29kZShsZW5ndGg6bnVtYmVyKSB7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPVxuICAgIFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIjtcbiAgbGV0IHJlc3VsdCA9IFwiXCI7XG4gIGNvbnN0IGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICByZXN1bHQgK1xuICAgIG5ldyBEYXRlKCkuZ2V0RGF0ZSgpICtcbiAgICBcIlwiICtcbiAgICBuZXcgRGF0ZSgpLmdldFVUQ01vbnRoKClcblxuICApO1xufVxufVxuIl19