import { NgModule } from '@angular/core';
import { ImakeDashboardProductsComponent } from './features/components/imake-dashboard-products/imake-dashboard-products.component';
import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from './products.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductsEffects } from './domain/facades/store/products.effects';
import { ProductsService } from './domain/services/products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'projects/imakeapp-shared/src/public-api';
import { Products_reducer } from './domain/facades/store/products.reducers';



@NgModule({
  declarations: [
    ImakeDashboardProductsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PRODUCTS_ROUTES)
    ,SharedModule,

  ],
  exports: [

  ],
  providers: [
    ProductsService
  ]
})
export class ImakeDashboardProductsModule { }
