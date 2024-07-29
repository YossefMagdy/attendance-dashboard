import { Directive, HostListener, Input } from "@angular/core";
import * as i0 from "@angular/core";
export class Validation_Directive {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9pbWFrZWFwcC1zaGFyZWQvc3JjL2xpYi9kaXJlY3RpdmVzL3ZhbGlkYXRpb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7O0FBWXpGLE1BQU0sT0FBTyxvQkFBb0I7SUFHckIsUUFBUSxDQUFnQztJQUN4QyxNQUFNLENBQU07SUFHRSxLQUFLO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFFbEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7SUFFaEMsQ0FBQztJQUV5QixRQUFRO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDZCxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUVoQyxDQUFDO0lBRTJCLFlBQVk7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUMxQixDQUFDO0lBRXlCLFVBQVU7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUUxQixDQUFDO0lBRUQscUJBQXFCO1FBSWxCLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ2xDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBRXBDLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMvRixDQUFDO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFHbEIsSUFBSyxVQUFVLEVBQ2Y7WUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLE9BQU8sQ0FBQTtZQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1lBRS9CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1NBRTlDO2FBRUQ7WUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1lBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztTQUU3QjtJQUVKLENBQUM7dUdBekRTLG9CQUFvQjsyRkFBcEIsb0JBQW9COzsyRkFBcEIsb0JBQW9CO2tCQUhoQyxTQUFTO21CQUFDO29CQUNSLFFBQVEsRUFBRSxZQUFZO2lCQUN4Qjs4QkFJVyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFHaUIsS0FBSztzQkFBM0IsWUFBWTt1QkFBQyxPQUFPO2dCQU9LLFFBQVE7c0JBQWpDLFlBQVk7dUJBQUMsVUFBVTtnQkFNSSxZQUFZO3NCQUF2QyxZQUFZO3VCQUFDLFlBQVk7Z0JBSUEsVUFBVTtzQkFBbkMsWUFBWTt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc3R5bGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IHZhbGlkYXRpb25fb3B0aW9uc19pbnRlcmZhY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLmludGVyZmFjZVwiO1xuXG5cblxuXG5cblxuXG5ARGlyZWN0aXZlKHtcbiAgIHNlbGVjdG9yOiAnW3ZhbGlkYXRlXSdcbn0pXG5leHBvcnQgY2xhc3MgVmFsaWRhdGlvbl9EaXJlY3RpdmVcbntcblxuICAgQElucHV0KCkgdmFsaWRhdGUhOiB2YWxpZGF0aW9uX29wdGlvbnNfaW50ZXJmYWNlO1xuICAgQElucHV0KCkgbXV0YXRlOiBhbnk7XG5cblxuICAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBpbnB1dCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImZpZWVkXCIpXG5cbiAgICAgIHRoaXMudmFsaWRhdGVfZm9ybV9jb250cm9sKCk7XG5cbiAgIH1cblxuICAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKSBmb2N1c291dCgpIHtcbmNvbnNvbGUubG9nKFwiZmllZWRcIilcbiAgICAgIHRoaXMudmFsaWRhdGVfZm9ybV9jb250cm9sKCk7XG5cbiAgIH1cblxuICAgQEhvc3RMaXN0ZW5lcigndG91Y2hzdGFydCcpIG9uVG91Y2hTdGFydCgpIHtcbiAgICBjb25zb2xlLmxvZyhcInRvdWNoc3RhcnRcIilcbiAgIH1cblxuICAgQEhvc3RMaXN0ZW5lcigndG91Y2hlbmQnKSBvbnRvdWNoZW5kKCkge1xuICAgIGNvbnNvbGUubG9nKFwidG91Y2hzdGFydFwiKVxuXG4gICB9XG5cbiAgIHZhbGlkYXRlX2Zvcm1fY29udHJvbCgpXG4gICB7XG5cblxuICAgICAgbGV0IGZnID0gdGhpcy52YWxpZGF0ZS5mb3JtX2dyb3VwO1xuICAgICAgbGV0IGZjID0gdGhpcy52YWxpZGF0ZS5jb250cm9sX25hbWU7XG5cbiAgICAgIGxldCB2YWxpZGF0aW9uID0gZmcuY29udHJvbHNbZmNdLmludmFsaWQgJiYgKGZnLmNvbnRyb2xzW2ZjXS5kaXJ0eSB8fCBmZy5jb250cm9sc1tmY10udG91Y2hlZCk7XG4gICAgICA7XG5jb25zb2xlLmxvZyh0aGlzLm11dGF0ZSlcblxuXG4gICAgICBpZiAoIHZhbGlkYXRpb24gKVxuICAgICAge1xuICAgICAgICAgdGhpcy5tdXRhdGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JlZCc7XG4gICAgICAgICB0aGlzLm11dGF0ZS5zdHlsZVsndGV4dC1hbGlnbiddID0gJ3N0YXJ0J1xuICAgICAgICAgdGhpcy5tdXRhdGUuc3R5bGUuY29sb3IgPSAncmVkJ1xuXG4gICAgICAgICB0aGlzLm11dGF0ZS5pbm5lclRleHQgPSB0aGlzLnZhbGlkYXRlLmVycm9yO1xuXG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICB0aGlzLm11dGF0ZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzdlODU5Yic7XG4gICAgICAgICB0aGlzLm11dGF0ZS5pbm5lclRleHQgPSAnJztcblxuICAgICAgfVxuXG4gICB9XG5cblxuXG59XG4iXX0=