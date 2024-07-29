import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PrimeNGUIModules } from './primeng-ui.module';
import { SharedComponent } from './shared.component';
import { SectionSkeletonComponent } from './section-skeleton/section-skeleton.component';
import { SkeltonComponent } from './skelton/skelton.component';
import { PriceRoundPipe } from './pipes/price-round.pipe';
import { DynamicRoundPipe } from './pipes/dynamic-round.pipe';
import { SkeletonModule } from 'primeng/skeleton';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AppProductNamePipe } from './pipes/app-product-name.pipe';
import { FacebookPixelService } from './services/analytics-services/facebook-pixel/facebook-pixel.service';
import { GoogleAnalyticsService } from './services/analytics-services/google-analytics/google-analytics.service';
import { LoadPixelAdService } from './services/analytics-services/load-pixel-ad/load-pixel-ad.service';
import { TiktokPixelService } from './services/analytics-services/tiktok-pixel/tiktok-pixel.service';
import { CommonModule } from '@angular/common';
import { SharedFacade } from './domain/facades/shared.facades';
import { LanguagePipe } from './pipes/language.pipe';
import { BaseComponent } from './components/BaseComponent';
import { BaseService } from './services/BaseService';
import { HomeSectionSkeletonComponent } from './components/home-section-skeleton/home-section-skeleton.component';
import { ProfileOrdersSkeletonComponent } from './components/profile-orders-skeleton/profile-orders-skeleton.component';
import { BannerSkeletonComponent } from './components/banner-skeleton/banner-skeleton.component';
import { ImaToastComponent } from './components/ima-toast/ima-toast.component';
import { Validation_Directive } from './directives/validation.directive';
import { GenericFilterComponent } from './components/generic-filter/generic-filter.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { AutoCompleteModule } from 'primeng/autocomplete';
import * as i0 from "@angular/core";
export class SharedModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "16.1.5", ngImport: i0, type: SharedModule, declarations: [SharedComponent,
            SectionSkeletonComponent,
            SkeltonComponent,
            PriceRoundPipe,
            DynamicRoundPipe,
            AppProductNamePipe,
            LanguagePipe,
            BaseComponent,
            HomeSectionSkeletonComponent,
            ProfileOrdersSkeletonComponent,
            BannerSkeletonComponent,
            ImaToastComponent,
            Validation_Directive,
            GenericFilterComponent], imports: [CommonModule,
            CarouselModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            PrimeNGUIModules,
            SkeletonModule,
            CarouselModule,
            LazyLoadImageModule,
            InputNumberModule,
            AutoCompleteModule], exports: [CommonModule,
            SharedComponent,
            DynamicRoundPipe,
            CarouselModule,
            PrimeNGUIModules,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            PriceRoundPipe,
            AppProductNamePipe,
            CarouselModule,
            SectionSkeletonComponent,
            LanguagePipe,
            BaseComponent,
            HomeSectionSkeletonComponent,
            ProfileOrdersSkeletonComponent,
            BannerSkeletonComponent,
            ImaToastComponent,
            Validation_Directive,
            GenericFilterComponent] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedModule, providers: [
            BaseService,
            FacebookPixelService,
            GoogleAnalyticsService,
            LoadPixelAdService,
            TiktokPixelService,
            SharedFacade,
        ], imports: [CommonModule,
            CarouselModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            PrimeNGUIModules,
            SkeletonModule,
            CarouselModule,
            LazyLoadImageModule,
            InputNumberModule,
            AutoCompleteModule, CommonModule,
            CarouselModule,
            PrimeNGUIModules,
            FormsModule,
            ReactiveFormsModule,
            RouterModule,
            CarouselModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.5", ngImport: i0, type: SharedModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        SharedComponent,
                        SectionSkeletonComponent,
                        SkeltonComponent,
                        PriceRoundPipe,
                        DynamicRoundPipe,
                        AppProductNamePipe,
                        LanguagePipe,
                        BaseComponent,
                        HomeSectionSkeletonComponent,
                        ProfileOrdersSkeletonComponent,
                        BannerSkeletonComponent,
                        ImaToastComponent,
                        Validation_Directive,
                        GenericFilterComponent
                    ],
                    imports: [
                        CommonModule,
                        CarouselModule,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        PrimeNGUIModules,
                        SkeletonModule,
                        CarouselModule,
                        LazyLoadImageModule,
                        InputNumberModule,
                        AutoCompleteModule
                    ],
                    exports: [
                        CommonModule,
                        SharedComponent,
                        DynamicRoundPipe,
                        CarouselModule,
                        PrimeNGUIModules,
                        FormsModule,
                        ReactiveFormsModule,
                        RouterModule,
                        PriceRoundPipe,
                        AppProductNamePipe,
                        CarouselModule,
                        SectionSkeletonComponent,
                        LanguagePipe,
                        BaseComponent,
                        HomeSectionSkeletonComponent,
                        ProfileOrdersSkeletonComponent,
                        BannerSkeletonComponent,
                        ImaToastComponent,
                        Validation_Directive,
                        GenericFilterComponent
                    ],
                    providers: [
                        BaseService,
                        FacebookPixelService,
                        GoogleAnalyticsService,
                        LoadPixelAdService,
                        TiktokPixelService,
                        SharedFacade,
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ltYWtlYXBwLXNoYXJlZC9zcmMvbGliL3NoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDekYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxRUFBcUUsQ0FBQztBQUMzRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx5RUFBeUUsQ0FBQztBQUNqSCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtRUFBbUUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFB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ZCxjQUFjO3dCQUNkLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixrQkFBa0I7cUJBQ25CO29CQUNELE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUNkLGdCQUFnQjt3QkFDaEIsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLFlBQVk7d0JBQ1osY0FBYzt3QkFDZCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2Qsd0JBQXdCO3dCQUN4QixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsNEJBQTRCO3dCQUM1Qiw4QkFBOEI7d0JBQzlCLHVCQUF1Qjt3QkFDdkIsaUJBQWlCO3dCQUNqQixvQkFBb0I7d0JBQ3BCLHNCQUFzQjtxQkFDdkI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULFdBQVc7d0JBQ1gsb0JBQW9CO3dCQUNwQixzQkFBc0I7d0JBQ3RCLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixZQUFZO3FCQUViO2lCQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhcm91c2VsTW9kdWxlIH0gZnJvbSAnbmd4LW93bC1jYXJvdXNlbC1vJztcbmltcG9ydCB7IFByaW1lTkdVSU1vZHVsZXMgfSBmcm9tICcuL3ByaW1lbmctdWkubW9kdWxlJztcbmltcG9ydCB7IFNoYXJlZENvbXBvbmVudCB9IGZyb20gJy4vc2hhcmVkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTZWN0aW9uU2tlbGV0b25Db21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb24tc2tlbGV0b24vc2VjdGlvbi1za2VsZXRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2tlbHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc2tlbHRvbi9za2VsdG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcmljZVJvdW5kUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJpY2Utcm91bmQucGlwZSc7XG5pbXBvcnQgeyBEeW5hbWljUm91bmRQaXBlIH0gZnJvbSAnLi9waXBlcy9keW5hbWljLXJvdW5kLnBpcGUnO1xuaW1wb3J0IHsgU2tlbGV0b25Nb2R1bGUgfSBmcm9tICdwcmltZW5nL3NrZWxldG9uJztcbmltcG9ydCB7IExhenlMb2FkSW1hZ2VNb2R1bGUgfSBmcm9tICduZy1sYXp5bG9hZC1pbWFnZSc7XG5pbXBvcnQgeyBXZWJzaXRlQXR0cmlidXRlc1NlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3dlYnNpdGUtYXR0cmlidXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEFwcFByb2R1Y3ROYW1lUGlwZSB9IGZyb20gJy4vcGlwZXMvYXBwLXByb2R1Y3QtbmFtZS5waXBlJztcbmltcG9ydCB7IEZhY2Vib29rUGl4ZWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbmFseXRpY3Mtc2VydmljZXMvZmFjZWJvb2stcGl4ZWwvZmFjZWJvb2stcGl4ZWwuc2VydmljZSc7XG5pbXBvcnQgeyBHb29nbGVBbmFseXRpY3NTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbmFseXRpY3Mtc2VydmljZXMvZ29vZ2xlLWFuYWx5dGljcy9nb29nbGUtYW5hbHl0aWNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTG9hZFBpeGVsQWRTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbmFseXRpY3Mtc2VydmljZXMvbG9hZC1waXhlbC1hZC9sb2FkLXBpeGVsLWFkLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGlrdG9rUGl4ZWxTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hbmFseXRpY3Mtc2VydmljZXMvdGlrdG9rLXBpeGVsL3Rpa3Rvay1waXhlbC5zZXJ2aWNlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTaGFyZWRGYWNhZGUgfSBmcm9tICcuL2RvbWFpbi9mYWNhZGVzL3NoYXJlZC5mYWNhZGVzJztcbmltcG9ydCB7IExhbmd1YWdlUGlwZSB9IGZyb20gJy4vcGlwZXMvbGFuZ3VhZ2UucGlwZSc7XG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL0Jhc2VDb21wb25lbnQnO1xuaW1wb3J0IHsgQmFzZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL0Jhc2VTZXJ2aWNlJztcbmltcG9ydCB7IEhvbWVTZWN0aW9uU2tlbGV0b25Db21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaG9tZS1zZWN0aW9uLXNrZWxldG9uL2hvbWUtc2VjdGlvbi1za2VsZXRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHJvZmlsZU9yZGVyc1NrZWxldG9uQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2ZpbGUtb3JkZXJzLXNrZWxldG9uL3Byb2ZpbGUtb3JkZXJzLXNrZWxldG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYW5uZXJTa2VsZXRvbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9iYW5uZXItc2tlbGV0b24vYmFubmVyLXNrZWxldG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbWFUb2FzdENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9pbWEtdG9hc3QvaW1hLXRvYXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBWYWxpZGF0aW9uX0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy92YWxpZGF0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBHZW5lcmljRmlsdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2dlbmVyaWMtZmlsdGVyL2dlbmVyaWMtZmlsdGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgSW5wdXROdW1iZXJNb2R1bGUgfSBmcm9tICdwcmltZW5nL2lucHV0bnVtYmVyJztcbmltcG9ydCB7IEF1dG9Db21wbGV0ZU1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvYXV0b2NvbXBsZXRlJztcblxuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNoYXJlZENvbXBvbmVudCxcbiAgICBTZWN0aW9uU2tlbGV0b25Db21wb25lbnQsXG4gICAgU2tlbHRvbkNvbXBvbmVudCxcbiAgICBQcmljZVJvdW5kUGlwZSxcbiAgICBEeW5hbWljUm91bmRQaXBlLFxuICAgIEFwcFByb2R1Y3ROYW1lUGlwZSxcbiAgICBMYW5ndWFnZVBpcGUsXG4gICAgQmFzZUNvbXBvbmVudCxcbiAgICBIb21lU2VjdGlvblNrZWxldG9uQ29tcG9uZW50LFxuICAgIFByb2ZpbGVPcmRlcnNTa2VsZXRvbkNvbXBvbmVudCxcbiAgICBCYW5uZXJTa2VsZXRvbkNvbXBvbmVudCxcbiAgICBJbWFUb2FzdENvbXBvbmVudCxcbiAgICBWYWxpZGF0aW9uX0RpcmVjdGl2ZSxcbiAgICBHZW5lcmljRmlsdGVyQ29tcG9uZW50XG4gIF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgQ2Fyb3VzZWxNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUHJpbWVOR1VJTW9kdWxlcyxcbiAgICBTa2VsZXRvbk1vZHVsZSxcbiAgICBDYXJvdXNlbE1vZHVsZSxcbiAgICBMYXp5TG9hZEltYWdlTW9kdWxlLFxuICAgIElucHV0TnVtYmVyTW9kdWxlLFxuICAgIEF1dG9Db21wbGV0ZU1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFNoYXJlZENvbXBvbmVudCxcbiAgICBEeW5hbWljUm91bmRQaXBlLFxuICAgIENhcm91c2VsTW9kdWxlLFxuICAgIFByaW1lTkdVSU1vZHVsZXMsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBSb3V0ZXJNb2R1bGUsXG4gICAgUHJpY2VSb3VuZFBpcGUsXG4gICAgQXBwUHJvZHVjdE5hbWVQaXBlLFxuICAgIENhcm91c2VsTW9kdWxlLFxuICAgIFNlY3Rpb25Ta2VsZXRvbkNvbXBvbmVudCxcbiAgICBMYW5ndWFnZVBpcGUgLFxuICAgIEJhc2VDb21wb25lbnQsXG4gICAgSG9tZVNlY3Rpb25Ta2VsZXRvbkNvbXBvbmVudCxcbiAgICBQcm9maWxlT3JkZXJzU2tlbGV0b25Db21wb25lbnQsXG4gICAgQmFubmVyU2tlbGV0b25Db21wb25lbnQsXG4gICAgSW1hVG9hc3RDb21wb25lbnQsXG4gICAgVmFsaWRhdGlvbl9EaXJlY3RpdmUsXG4gICAgR2VuZXJpY0ZpbHRlckNvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBCYXNlU2VydmljZSxcbiAgICBGYWNlYm9va1BpeGVsU2VydmljZSxcbiAgICBHb29nbGVBbmFseXRpY3NTZXJ2aWNlLFxuICAgIExvYWRQaXhlbEFkU2VydmljZSxcbiAgICBUaWt0b2tQaXhlbFNlcnZpY2UsXG4gICAgU2hhcmVkRmFjYWRlLFxuXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHt9XG4iXX0=