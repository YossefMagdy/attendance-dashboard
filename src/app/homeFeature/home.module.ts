import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ThemeLoaderDirective } from '../core/directives/themes-loader.directive';
import { HeaderThemesModule } from 'projects/imakeapp-header/src/public-api';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { ToastModule } from 'primeng/toast';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@NgModule({
  declarations: [
    HomeComponent,ThemeLoaderDirective,SidebarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderThemesModule,
    PanelMenuModule,
    ToastModule,
    NgxUiLoaderModule.forRoot({}),

  ],providers:[NzNotificationService]
})
export class HomeModule { }
