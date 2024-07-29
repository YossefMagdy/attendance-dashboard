import { APP_INITIALIZER,NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { EffectsModule } from '@ngrx/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InMemoryCache } from '@apollo/client/core'
import { LanguagePipe, LanguageService, WebsiteAttributesService } from 'projects/imakeapp-shared';
import { CustomHttpInterceptorInterceptor } from './interceptors/custom-http-interceptor.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { AppEffect } from './core/store/store/app.effects';
import { AppReducer } from './core/store/store/app.reducers';
import { ProductsEffects } from 'projects/imakeapp-products/src/lib/domain/facades/store/products.effects';
import { Products_reducer } from 'projects/imakeapp-products/src/lib/domain/facades/store/products.reducers';
import { CategoriesEffects } from 'projects/ima-dashboard-categories/src/lib/domain/facades/store/categories.effects';
import { categories_reducer } from 'projects/ima-dashboard-categories/src/lib/domain/facades/store/categories.reducers';
import { HeaderReducer } from 'projects/imakeapp-header/src/lib/domain/facades/store/HeaderThemes.reducers';
import { HeaderEffect } from 'projects/imakeapp-header/src/lib/domain/facades/store/HeaderThemes.effects';
import { LoginComponent } from './AuthFeature/login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { ToastModule } from 'primeng/toast';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ThemeLoaderDirective } from './core/directives/themes-loader.directive';
import { SidebarComponent } from './homeFeature/sidebar/sidebar.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';


// export function appInitializerFactory(
//   languageService: LanguageService,
//   attributeThemeService: WebsiteAttributesService,
//   cookie_s:CookieService
// ) {
//   console.log(cookie_s)

//   return () => Promise.all([
//     languageService.request_site_languages(),
//     attributeThemeService.get_site_theme()
//   ]).then(() => {});

// }




@NgModule({
  declarations: [
    AppComponent,LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ConfirmDialogModule,
    ReactiveFormsModule,
    PanelMenuModule,
    ToastModule,
    AppRoutingModule,
     StoreModule.forRoot({}), // store singleton
    ApolloModule,
    EffectsModule.forRoot([ProductsEffects,CategoriesEffects,HeaderEffect]),
    StoreModule.forFeature("app_state" , AppReducer),
    StoreModule.forFeature('Products_state', Products_reducer),
    StoreModule.forFeature("categories_states", categories_reducer),
    StoreModule.forFeature('header_themes', HeaderReducer),
    NgxUiLoaderModule.forRoot({}),

 // start loader with notification
 NgxUiLoaderHttpModule.forRoot({
  loaderId: "loader",
  showForeground: true,
  // exclude: [
  //   `${environment.endpoint}/RestaurantAttachment/add`,
  //   `${environment.endpoint}/orders/ordersOperation`,
  // ],
}),
  ],
  providers: [
    CookieService,
    NzMessageService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializerFactory,
    //   deps: [LanguageService,WebsiteAttributesService,CookieService],
    //   multi: true
    // },
    { provide: NZ_I18N, useValue: en_US },

    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptorInterceptor,
      multi: true,
    },
    {

    provide: APOLLO_OPTIONS,
    useFactory(httpLink: HttpLink) {
      return {
          cache: new InMemoryCache(),
          queryDeduplication: false,
          link: httpLink.create({
            uri: environment.graphqlendpoint,

          })
        }
    },
    deps: [HttpLink]
  },MessageService,LanguagePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
