import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaingsRoutingModule } from './compaings-routing.module';
import { AddcompaignsComponent } from './addcompaigns/addcompaigns.component';
import { IndexcompaignsComponent } from './indexcompaigns/indexcompaigns.component';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { GenericService } from 'projects/image-gallaries/src/domain/services/generic.service';
import { RatesRoutingModule } from '../rates/rates-routing.module';
import { SharedModule } from 'projects/imakeapp-shared';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ImageModule } from 'primeng/image';
import { NzTableModule } from 'ng-zorro-antd/table';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    AddcompaignsComponent,
    IndexcompaignsComponent
  ],
  imports: [
    CommonModule,
    CompaingsRoutingModule,
    SharedModule,
    RatesRoutingModule,NzFormModule,ImageModule,NzTableModule,
    QRCodeModule,

  ],providers:[    GenericService,DynamicDialogConfig
  ]
})
export class CompaingsModule { }
