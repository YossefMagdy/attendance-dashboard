import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { SharedModule } from "projects/imakeapp-shared";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzNotificationService } from "ng-zorro-antd/notification";
import { GenericService } from "projects/ima-dashboard-categories/src/lib/domain/services/generic.service";
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './features/index/reports.component';
import {BadgeModule} from 'primeng/badge';
import { ButtonModule } from "primeng/button";
import { NgChartsModule } from 'ng2-charts';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { MainmenuRoutes } from "../mainmenu/mainmenu.routes";
import { FormComponent } from "./features/form/form.component";
import { ImageModule } from 'primeng/image';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [ReportsComponent , FormComponent],
  imports: [NzTableModule,NzSelectModule,NzDropDownModule,SharedModule,
    CommonModule,
    ReportsRoutingModule,
    BadgeModule,
    ButtonModule,
    NgChartsModule,
    CanvasJSAngularChartsModule,
    ImageModule,
    InputTextareaModule,
    PanelModule,
    CardModule,
    TableModule,RouterModule,NzFormModule,RouterModule.forChild(MainmenuRoutes),NzFormModule],
  exports: [],
  providers: [GenericService,NzNotificationService],
})
export class ReportsModule {}
