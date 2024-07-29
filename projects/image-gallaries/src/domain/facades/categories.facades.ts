import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { getAllCategoriesAction, getAllSubCategoriesAction } from "./store/categories.actions";
import { getAllCategoriesSelector, getAllSubCategoriesSelector } from "./store/categories.selectors";
import { Observable } from "rxjs";
import { categories_states_interface } from "../entities/model/categories-states.interface";








@Injectable({ providedIn: 'root' })
export class CategoriesFacade
{




   constructor(
      public store: Store<any>,
   ) {}

   categories_selector$: Observable<categories_states_interface[]> = this.store.pipe( select(getAllCategoriesSelector) );
   subCat_selector$: Observable<categories_states_interface[]> = this.store.pipe( select(getAllSubCategoriesSelector) );

getAllCategories(){
this.store.dispatch(new getAllCategoriesAction())
}

getAllSubCategoryCategories(){
  this.store.dispatch(new getAllSubCategoriesAction())
  }


editCategory(id:number){

}
addCategory(oaram:any){

}


deleteCategory(id:any){

}
}
