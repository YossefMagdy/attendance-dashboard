

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ImaDashboardCategoriesComponent } from './features/components/ima-dashboard-categories/ima-dashboard-categories.component';
import { categories_reducer } from './domain/facades/store/categories.reducers';
import { CategoriesEffects } from './domain/facades/store/categories.effects';
import { CategoriesService } from './domain/services/categories.service';





@NgModule({
  declarations: [
    ImaDashboardCategoriesComponent
  ],
  imports: [
  ],
  exports: [

  ],
  providers: [
    CategoriesService
  ]
})
export class ImaDashboardCategoriesModule { }
