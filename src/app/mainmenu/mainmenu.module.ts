import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MainmenuFormComponent } from "./mainmenu-form/mainmenu-form.component";
import { MainmenuIndexComponent } from "./mainmenu-index/mainmenu-index.component";
import { MainmenuRoutes } from "./mainmenu.routes";
import { SharedModule } from "projects/imakeapp-shared";
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzNotificationService } from "ng-zorro-antd/notification";
import { GenericService } from "projects/ima-dashboard-categories/src/lib/domain/services/generic.service";
import { NzPopconfirmModule } from "ng-zorro-antd/popconfirm";


@NgModule({
  declarations: [MainmenuIndexComponent, MainmenuFormComponent],
  imports: [NzPopconfirmModule,NzTableModule,NzSelectModule,NzDropDownModule,SharedModule,RouterModule.forChild(MainmenuRoutes),NzFormModule],
  exports: [],
  providers: [GenericService,NzNotificationService],
})
export class MainmenuModule {}
