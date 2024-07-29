import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyIndexComponent } from './company-index/company-index.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SharedModule } from 'primeng/api';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';


@NgModule({
  declarations: [
    CompanyIndexComponent,
    CompanyFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyRoutingModule,
    NzPopconfirmModule,NzTableModule,NzSelectModule,NzDropDownModule,SharedModule,NzFormModule,ImageModule

  ]  ,providers: [GenericService,NzNotificationService,DynamicDialogConfig],

})
export class CompanyModule { }
