import { HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment.prod";
import { BehaviorSubject } from "rxjs";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class LanguageService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2ltYWtlYXBwLXNoYXJlZC9zcmMvbGliL3NlcnZpY2VzL2xhbmd1YWdlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFjLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9ELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7OztBQVF2QyxNQUFNLE9BQU8sZUFBZTtJQWlCZDtJQWRILGNBQWMsR0FBK0I7UUFDbEQsU0FBUyxFQUFFLEVBQUU7UUFDYixlQUFlLEVBQUU7WUFDZCxJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxJQUFJO1NBQ1o7UUFDRCxhQUFhLEVBQUUsRUFBRTtLQUNuQixDQUFDO0lBRU0sa0JBQWtCLEdBQUcsSUFBSSxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzlELDBCQUEwQixHQUFHLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRzdELFlBQ1csSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUUzQixDQUFDO0lBS0MsS0FBSyxDQUFDLHNCQUFzQjtRQUczQixPQUFPLE1BQU0sSUFBSSxPQUFPLENBQ3JCLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFDLEVBQUU7WUFHdEIsSUFBSSxXQUFXLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBR3BCLE1BQU0sU0FBUyxHQUFPLE1BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FB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Q0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFHRCx5QkFBeUI7UUFFdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQU1ELDRCQUE0QjtJQUM1QixlQUFlLENBQUMsZUFBbUM7UUFLaEQsSUFBSSxDQUFDLGNBQWMsR0FBRztZQUNuQixHQUFHLElBQUksQ0FBQyxjQUFjO1lBQ3RCLGVBQWUsRUFBRSxlQUFlO1NBQ2xDLENBQUM7UUFFRixJQUFJLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUd2QyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFJckIsQ0FBQzt1R0F2S1MsZUFBZTsyR0FBZixlQUFlLGNBREYsTUFBTTs7MkZBQ25CLGVBQWU7a0JBRDNCLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vZW52aXJvbm1lbnRzL2Vudmlyb25tZW50LnByb2RcIjtcbmltcG9ydCB7IGxhbmd1YWdlX2ludGVyZmFjZSwgbGFuZ3VhZ2VzX3N0YXRlX2ludGVyZmFjZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2xhbmd1YWdlLmludGVyZmFjZVwiO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSBcInJ4anNcIjtcblxuXG5cblxuXG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlXG57XG5cbiAgIHByaXZhdGUgX3NpdGVfbGFuZ3VhZ2UgOiBsYW5ndWFnZXNfc3RhdGVfaW50ZXJmYWNlID0ge1xuICAgICAgbGFuZ3VhZ2VzOiBbXSxcbiAgICAgIGFjdGl2ZV9sYW5ndWFnZToge1xuICAgICAgICAgbmFtZTogJ2FyJyxcbiAgICAgICAgIGNvZGU6ICdhcidcbiAgICAgIH0sXG4gICAgICBsYW5ndWFnZV9kYXRhOiB7fVxuICAgfTtcblxuICAgcHJpdmF0ZSBfc2l0ZV9sYW5ndWFnZV9CYXYgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRoaXMuX3NpdGVfbGFuZ3VhZ2UpO1xuICAgcHJpdmF0ZSBfc2l0ZV9hY3RpdmVfbGFuZ3VhZ2VfQ29kZSA9IG5ldyBCZWhhdmlvclN1YmplY3QoXCJcIik7XG5cblxuICAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnRcbiAgICl7XG4gICB9XG5cblxuXG5cbiAgICAgYXN5bmMgcmVxdWVzdF9zaXRlX2xhbmd1YWdlcygpXG4gICB7XG5cbiAgICAgIHJldHVybiBhd2FpdCBuZXcgUHJvbWlzZShcbiAgICAgICAgIGFzeW5jIChyZXNvbHZlLCByZWplY3QpPT57XG5cblxuICAgICAgICAgICAgbGV0IGFjdGl2ZV9sYW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZV9sYW5nJyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhY3RpdmVfbGFuZylcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgbGFuZ3VhZ2VzOmFueSA9IGF3YWl0ICB0aGlzLmh0dHAuZ2V0KGAke2Vudmlyb25tZW50LkFwaUVuZFBvaW50Mn0vbGFuZy9sYW5nc2ApLnRvUHJvbWlzZSgpXG5cbiAgICAgICAgICAgICAgICAgIC8vIHNhdmUgbGFuZ3VhZ2VzXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXRlX2xhbmd1YWdlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fc2l0ZV9sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmd1YWdlczogbGFuZ3VhZ2VzXG4gICAgICAgICAgICAgICAgICAgICB9O1xuY29uc29sZS5sb2codGhpcy5fc2l0ZV9sYW5ndWFnZSlcbiAgICAgICAgICAgICAgICAgIC8vIHNhdmUgYWN0aXZlIGxhbmdcbiAgICAgICAgICAgICAgICAgICAgIGlmICggYWN0aXZlX2xhbmcgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRfYWN0aXZlX2xhbmd1YWdlKHRoaXMuX3NpdGVfbGFuZ3VhZ2UuYWN0aXZlX2xhbmd1YWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NpdGVfYWN0aXZlX2xhbmd1YWdlX0NvZGUubmV4dCh0aGlzLl9zaXRlX2xhbmd1YWdlLmFjdGl2ZV9sYW5ndWFnZS5jb2RlKVxuXG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldF9hY3RpdmVfbGFuZ3VhZ2UobGFuZ3VhZ2VzIVswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXRlX2FjdGl2ZV9sYW5ndWFnZV9Db2RlLm5leHQobGFuZ3VhZ2VzIVswXS5jb2RlKVxuICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICBjb25zdCBsYW5ncyAgPSAgIGF3YWl0IHRoaXMuaHR0cC5nZXQoYCR7ZW52aXJvbm1lbnQuQXBpRW5kUG9pbnQyfS9sYW5nL2luZGV4YCwge1xuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7ICdsYW5nJyA6IHRoaXMuX3NpdGVfbGFuZ3VhZ2UuYWN0aXZlX2xhbmd1YWdlLmNvZGUgfSlcbiAgICAgICAgICAgICAgICAgICB9KS50b1Byb21pc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3NpdGVfbGFuZ3VhZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5fc2l0ZV9sYW5ndWFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZV9kYXRhOiBsYW5nc1xuICAgICAgICAgICAgICAgICAgICAgIH07XG5jb25zb2xlLmxvZyh0aGlzLl9zaXRlX2xhbmd1YWdlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2l0ZV9sYW5ndWFnZV9CYXYubmV4dCh0aGlzLl9zaXRlX2xhbmd1YWdlKVxuICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5fc2l0ZV9sYW5ndWFnZSlcbiAgICAgICAgICAgICAgICAgIC8vIGdldCBhbmQgc2F2ZSBsYW5ndWFnZXMgZGF0YSBiYXNlZCBvbiBhY3RpdmUgbGFuZ3VhZ2VcblxuXG5cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuXG5cblxuXG4gICB9XG5cblxuICAgc2V0X2FjdGl2ZV9sYW5ndWFnZShhY3RpdmVfbGFuZzogbGFuZ3VhZ2VfaW50ZXJmYWNlKVxuICAge1xuXG4gICAgICB0aGlzLl9zaXRlX2xhbmd1YWdlID0ge1xuICAgICAgICAgLi4udGhpcy5fc2l0ZV9sYW5ndWFnZSxcbiAgICAgICAgIGFjdGl2ZV9sYW5ndWFnZTogYWN0aXZlX2xhbmdcbiAgICAgIH07XG5cblxuICAgICAgdGhpcy5zYXZlX2FjdGl2ZV9sYW5ndWFnZV90b19zdG9yYWdlKCk7XG5cbiAgIH1cblxuXG5cbiAgIC8vIGdldHRlcnNcbiAgICBnZXRfc2l0ZV9sYW5ndWFnZXMoKVxuICAge1xuXG4gICAgICByZXR1cm4gdGhpcy5fc2l0ZV9sYW5ndWFnZV9CYXZcblxuICAgfVxuICAgLy8gZ2V0dGVycyBjb2RlXG4gICBnZXRfc2l0ZV9sYW5ndWFnZXNfY29kZSgpXG4gICB7XG5cbiAgICAgIHJldHVybiB0aGlzLl9zaXRlX2FjdGl2ZV9sYW5ndWFnZV9Db2RlXG5cbiAgIH1cblxuXG4gICBnZXRfc2l0ZV9hY3RpdmVfbGFuZ19jb2RlKCkgOiBzdHJpbmdcbiAgIHtcbiAgICAgIGxldCB0ZW1wID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FjdGl2ZV9sYW5nJyk7XG4gICAgICBsZXQgbGFuZ19jb2RlID0gdGVtcCA/IEpTT04ucGFyc2UodGVtcCkuY29kZSA6ICdhcic7XG5cbiAgICAgIHJldHVybiBsYW5nX2NvZGU7XG5cbiAgIH1cblxuICAgZ2V0X3NpdGVfbGFuZ19kYXRhKClcbiAgIHtcbiAgICAgIGxldCB0ZW1wID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdfZGF0YScpO1xuICAgICAgbGV0IGxhbmdfZGF0YSA9IHRlbXAgPyBKU09OLnBhcnNlKHRlbXApIDogW107XG5cbiAgICAgIHJldHVybiBsYW5nX2RhdGE7XG4gICB9XG5cblxuXG5cblxuXG4gICBzYXZlX2FjdGl2ZV9sYW5ndWFnZV90b19zdG9yYWdlKClcbiAgIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY3RpdmVfbGFuZycsIEpTT04uc3RyaW5naWZ5KHRoaXMuX3NpdGVfbGFuZ3VhZ2UuYWN0aXZlX2xhbmd1YWdlKSk7XG4gICB9XG5cblxuICAgc2F2ZV9sYW5nX2RhdGFfdG9fc3RvcmFnZSgpXG4gICB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFuZ19kYXRhJywgSlNPTi5zdHJpbmdpZnkodGhpcy5fc2l0ZV9sYW5ndWFnZS5sYW5ndWFnZV9kYXRhKSk7XG4gICB9XG5cblxuXG5cblxuICAgLy8gc2F2ZSBsYW5ndWFnZXMgdG8gc3RvcmFnZVxuICAgY2hhbmdlX2xhbmd1YWdlKGFjdGl2ZV9sYW5ndWFnZTogbGFuZ3VhZ2VfaW50ZXJmYWNlKVxuICAge1xuXG5cblxuICAgICAgdGhpcy5fc2l0ZV9sYW5ndWFnZSA9IHtcbiAgICAgICAgIC4uLnRoaXMuX3NpdGVfbGFuZ3VhZ2UsXG4gICAgICAgICBhY3RpdmVfbGFuZ3VhZ2U6IGFjdGl2ZV9sYW5ndWFnZVxuICAgICAgfTtcblxuICAgICAgdGhpcy5zYXZlX2FjdGl2ZV9sYW5ndWFnZV90b19zdG9yYWdlKCk7XG5cblxuICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG5cblxuXG4gICB9XG5cblxuXG5cbn1cbiJdfQ==