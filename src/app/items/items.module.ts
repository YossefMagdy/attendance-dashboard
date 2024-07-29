import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { IndexitemsComponent } from './indexitems/indexitems.component';
import { AdditemsComponent } from './additems/additems.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { RatesRoutingModule } from '../rates/rates-routing.module';
import { ImageModule } from 'primeng/image';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SharedModule } from 'projects/imakeapp-shared';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    IndexitemsComponent,
    AdditemsComponent
  ],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    SharedModule,
    RatesRoutingModule,ImageModule,NzTableModule,NzFormModule
  ],providers:[    GenericService,DynamicDialogConfig
  ]
})
export class ItemsModule { }
