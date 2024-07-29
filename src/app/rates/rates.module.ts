import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RatesRoutingModule } from './rates-routing.module';
import { IndexRateComponent } from './index-rate/index-rate.component';
import { AddRateComponent } from './add-rate/add-rate.component';
import { SharedModule } from 'projects/imakeapp-shared';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ImageModule } from 'primeng/image';
import { RatingModule } from 'primeng/rating';


@NgModule({
  declarations: [
    IndexRateComponent,
    AddRateComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RatesRoutingModule,
    ImageModule,
    RatingModule,
    NzTableModule,

  ],providers:[    DynamicDialogConfig
  ]
})
export class RatesModule { }
