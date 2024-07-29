import { NgModule } from '@angular/core';
import { HeaderThemesComponent } from './header-themes.component';
import { HeaderTheme1Component } from './features/header-theme1/header-theme1.component';
import { HeaderComponent } from './features/components/header/header.component';
import { HeaderTwoComponent } from './features/components/header-two/header-two.component';

import { StoreModule } from '@ngrx/store';
import { HeaderReducer } from './domain/facades/store/HeaderThemes.reducers';
import { EffectsModule } from '@ngrx/effects';
import { HeaderEffect } from './domain/facades/store/HeaderThemes.effects';
import { environment } from '../environments/environment';
import { NotificationsComponent } from './features/components/notifications/notifications.component';
import { NzMessageService } from 'ng-zorro-antd/message';
import { AppProductNamePipe } from './domain/core/pipes/app-product-name.pipe';
import { PriceRoundPipe } from './domain/core/pipes/price-round.pipe';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { BaseHeaderComponenetComponent } from './lib/features/base-header-componenet/base-header-componenet.component';

import { MenubarModule } from 'primeng/menubar';

import { MegaMenuModule } from 'primeng/megamenu';
import { SidebarComponentComponent } from './features/components/sidebar-component/sidebar-component.component';
import { SidebarModule } from 'primeng/sidebar';

import { PanelMenuModule } from 'primeng/panelmenu';
import { SharedModule } from 'projects/imakeapp-shared';


@NgModule({
  declarations: [
    HeaderThemesComponent,
    HeaderTheme1Component,
    HeaderComponent,
    HeaderTwoComponent,
    SidebarComponentComponent,
    BaseHeaderComponenetComponent,
    NotificationsComponent,
    AppProductNamePipe,
    PriceRoundPipe,


  ],
  imports: [

    SharedModule,
    NzSpinModule,
    LazyLoadImageModule,
    MegaMenuModule,
    PanelMenuModule,
    MenubarModule,
    SidebarModule
  ],
  exports: [
    HeaderThemesComponent,
  ],
  providers: [ NzMessageService  ]
})
export class HeaderThemesModule { }
