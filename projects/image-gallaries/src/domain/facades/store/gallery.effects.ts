import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { mergeMap, tap } from "rxjs/operators";
import { CategoriesService } from "../../services/categories.service";
import { getGallery, getGalleryLoaded } from "./constants/constants";
import { getGalleryLoadedAction } from "./categories.actions";








@Injectable()
export class CategoriesEffects
{


  constructor(
    private store: Store,
    private actions$: Actions,
    private service:CategoriesService
  ) {}


  getGalleryByType$ = createEffect(
    () => { return this.actions$
        .pipe(
            ofType(getGallery),

            mergeMap(async action  => {
                  this.service.getGalleryByType().subscribe(
                    (response: any)=>{
                this.store.dispatch(new getGalleryLoadedAction(response.data.categories))
              },
              (err: any)=>{
                 this.store.dispatch(new HasErrorAction(err.message))

              })




            })

        )
},{dispatch:false})


}
