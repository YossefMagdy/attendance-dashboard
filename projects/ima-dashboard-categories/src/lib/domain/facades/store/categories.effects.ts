import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { mergeMap, tap } from "rxjs/operators";
import { CategoriesService } from "../../services/categories.service";
import { EditCategory, getAllCategories, getAllSubCategories } from "./constants/constants";
import { AllCategoriesLoadedAction, HasErrorAction, getAllSubCategoriesAction, getAllSubCategoriesLoaddedAction } from "./categories.actions";








@Injectable()
export class CategoriesEffects
{


  constructor(
    private store: Store,
    private actions$: Actions,
    private service:CategoriesService
  ) {}


  getAllCategories$ = createEffect(
    () => { return this.actions$
        .pipe(
            ofType(getAllCategories),

            mergeMap(async action  => {
                  this.service.getCategoriesDropdown().subscribe(
                    (response: any)=>{
                      console.log(response)
                this.store.dispatch(new AllCategoriesLoadedAction(response.data.categories))
              },
              (err: any)=>{
                this.store.dispatch(new HasErrorAction(err.message))

              })




            })

        )
},{dispatch:false})


getAllSubCategories$ = createEffect(
  () => { return this.actions$
      .pipe(
          ofType(getAllSubCategories),

          mergeMap(async action  => {
            console.log(action)
                this.service.getSubCategoriesDropdown().subscribe(
                  (response: any)=>{

              this.store.dispatch(new getAllSubCategoriesLoaddedAction(response.data.subCategories))
            },
            (err: any)=>{
              this.store.dispatch(new HasErrorAction(err.message))

            })




          })

      )
},{dispatch:false})

AddCategories$ = createEffect(
  () => { return this.actions$
      .pipe(
          ofType(EditCategory),

        tap(
          (action:any)=>{
                this.service.add(action.data).subscribe(
                  (response: any)=>{
              this.store.dispatch(new AllCategoriesLoadedAction(response.data))
            },
            (err: any)=>{
              this.store.dispatch(new HasErrorAction(err.message))
            })




          })

      )
},{dispatch:false})
EditCategories$ = createEffect(
  () => { return this.actions$
      .pipe(
          ofType(EditCategory),

        tap(
          (action:any)=>{
                this.service.edit(action.data).subscribe(
                  (response: any)=>{
              this.store.dispatch(new AllCategoriesLoadedAction(response.data))
            },
            (err: any)=>{
              this.store.dispatch(new HasErrorAction(err.message))
            })




          })

      )
},{dispatch:false})


DeleteCategories$ = createEffect(
  () => { return this.actions$
      .pipe(
          ofType(EditCategory),

        tap(
          (action:any)=>{
                this.service.delete(action.data).subscribe(
                  (response: any)=>{
              this.store.dispatch(new AllCategoriesLoadedAction(response.data))
            },
            (err: any)=>{
              this.store.dispatch(new HasErrorAction(err.message))
            })




          })

      )
},{dispatch:false})

}
