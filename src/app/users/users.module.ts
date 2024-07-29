import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { ImageModule } from 'primeng/image';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { SharedModule } from 'projects/imakeapp-shared';


@NgModule({
  declarations: [
    UsersIndexComponent,
    UsersFormComponent,
    
  ],
  imports: [
    CommonModule,
FormsModule,
SharedModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    NzPopconfirmModule,NzTableModule,NzSelectModule,NzDropDownModule,NzFormModule,ImageModule,ConfirmDialogModule,
    NzPaginationModule

  ]  ,providers: [GenericService,NzNotificationService,DynamicDialogConfig,DialogService,ConfirmationService],
  
  
})
export class UsersModule { }
