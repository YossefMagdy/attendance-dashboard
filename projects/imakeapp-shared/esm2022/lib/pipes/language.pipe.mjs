import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../services/language.service";
export class LanguagePipe {
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
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LanguagePipe, deps: [{ token: i1.LanguageService }], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: LanguagePipe, name: "translate" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: LanguagePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'translate'
                }]
        }], ctorParameters: function () { return [{ type: i1.LanguageService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ltYWtlYXBwLXNoYXJlZC9zcmMvbGliL3BpcGVzL2xhbmd1YWdlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7OztBQWNwRCxNQUFNLE9BQU8sWUFBWTtJQUlYO0lBRFgsWUFDVyxNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtJQUNoQyxDQUFDO0lBR0gsU0FBUyxDQUFDLElBQVMsRUFBRSxHQUFHLElBQVc7UUFHaEMsb0JBQW9CO1FBQ3BCLElBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBRTdCLHFCQUFxQjtRQUNyQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsYUFBYSxDQUFDO1FBQzlFLDBEQUEwRDtRQUMxRCxJQUFLLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFHLE9BQU8sRUFBRSxDQUFDO1FBRXpDLDRCQUE0QjtRQUM1QixJQUFJLFFBQVEsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUV6RCx3QkFBd0I7UUFDeEIsSUFBSyxRQUFRLEVBQ2I7WUFDRyxPQUFPLFFBQVEsQ0FBQztTQUNsQjthQUVEO1lBQ0csT0FBTyxFQUFFLENBQUM7U0FDWjtJQUlKLENBQUM7dUdBbENTLFlBQVk7cUdBQVosWUFBWTs7MkZBQVosWUFBWTtrQkFIeEIsSUFBSTttQkFBQztvQkFDSCxJQUFJLEVBQUUsV0FBVztpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9sYW5ndWFnZS5zZXJ2aWNlXCI7XG5cblxuXG5cblxuXG5cblxuXG5AUGlwZSh7XG4gICBuYW1lOiAndHJhbnNsYXRlJ1xufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtXG57XG5cbiAgIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBsYW5nX3M6IExhbmd1YWdlU2VydmljZVxuICAgKXt9XG5cblxuICAgdHJhbnNmb3JtKHdvcmQ6IGFueSwgLi4uYXJnczogYW55W10pXG4gICB7XG5cbiAgICAgIC8vIHdvcmQgdG8gdHJhbnNsYXRlXG4gICAgICBsZXQgd29yZF90b190cmFuc2xhdGUgPSB3b3JkO1xuXG4gICAgICAvLyBhbGwgbGFuZ3VhZ2VzIGRhdGFcbiAgICAgIGxldCBsYW5ndWFnZV9kYXRhID0gdGhpcy5sYW5nX3MuZ2V0X3NpdGVfbGFuZ3VhZ2VzKCkuZ2V0VmFsdWUoKS5sYW5ndWFnZV9kYXRhO1xuICAgICAgLy8gaWYgd29yZCBoYXZlIG5vIHRyYW5zbGF0ZSBoZWFkZXIgcmV0dXJuIHRoZSB3b3JkIGFzIGl0c1xuICAgICAgaWYgKCAhbGFuZ3VhZ2VfZGF0YVthcmdzWzBdXSApIHJldHVybiAnJztcblxuICAgICAgLy8gZWxzZSwgZ2V0IHRyYW5zbGF0ZWQgd29yZFxuICAgICAgbGV0IG5ld193b3JkID0gbGFuZ3VhZ2VfZGF0YVthcmdzWzBdXVt3b3JkX3RvX3RyYW5zbGF0ZV07XG5cbiAgICAgIC8vIGlmIHRyYW5zbGF0aW9uZSBleGlzdFxuICAgICAgaWYgKCBuZXdfd29yZCApXG4gICAgICB7XG4gICAgICAgICByZXR1cm4gbmV3X3dvcmQ7XG4gICAgICB9XG4gICAgICBlbHNlXG4gICAgICB7XG4gICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG5cblxuXG4gICB9XG5cblxuXG5cbn1cbiJdfQ==