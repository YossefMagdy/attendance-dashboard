import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import {
  AddProductByExcel,
  AddProducts,
  DeleteMultipleProduct,
  DeleteProduct,
  EditProductWithPhoto,
  EditProducts,
  GetProductForExport,
  GetProductFormDropdowns,
  getAllProducts,
  getAllSubProducts,
} from './constants/constants';
import { ProductsService } from '../../services/products.service';
import {
  AllProductsLoadedAction,
  ChangeProductFormViewState,
  DeleteProductLoadedAction,
  EditProductWithPhotoLoadedAction,
  GetProductFormDropdownsLoaded,
  HasErrorAction,
  LoadProductForExcelAction,
  getAllProductsAction,
} from './products.actions';
import { ProductState } from '../../entities/product.state';
import { productsIndexViewStateSelector } from './products.selectors';
import { ProductModel } from '../../entities/productModel';
import { combineLatest, forkJoin, merge } from 'rxjs';
import { BrandsService } from '../../services/brands.service';
import { BadgesService } from '../../services/badges.service';

@Injectable()
export class ProductsEffects {
  constructor(
    private store: Store<ProductState>,
    private actions$: Actions,
    private brandsService: BrandsService,
    private badgesService: BadgesService,
    private service: ProductsService
  ) {}

  getAllProducts$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(getAllProducts),
        withLatestFrom(this.store.select(productsIndexViewStateSelector)),
        tap(([action, productsIndexViewState]) => {
          this.service.get(productsIndexViewState.productsFilter).subscribe({
            next: (response: any) => {
              this.store.dispatch(new AllProductsLoadedAction(response.data));
            },
            error: (err: any) => {
              this.store.dispatch(new HasErrorAction(err.message));
            },
          });
        })
      );
    },
    { dispatch: false }
  );
  GetProductFormDropdowns$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GetProductFormDropdowns),
        tap((action) => {
          combineLatest({
            brands: this.brandsService.getForDropdown(),
            badges: this.badgesService.getForDropdown(),
          }).subscribe({
            next: (response: any) => {

              this.store.dispatch(
                new GetProductFormDropdownsLoaded({
                  brands: response.brands.data.brands,
                  badges: response.badges.data.badges,

                })
              );
            },
            error: (err: any) => {
              this.store.dispatch(new HasErrorAction(err.message));
            },
          });
        })
      );
    },
    { dispatch: false }
  );

  AddProducts$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AddProducts),

        tap((action: any) => {
          this.service.add(action.data).subscribe(
            (response: any) => {
              this.store.dispatch(new AllProductsLoadedAction(response.data));
            },
            (err: any) => {
              this.store.dispatch(new HasErrorAction(err.message));
            }
          );
        })
      );
    },
    { dispatch: false }
  );
  EditProducts$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(EditProducts),

        tap((action: any) => {
          this.service.edit(action.data).subscribe(
            (response: any) => {
              this.store.dispatch(new AllProductsLoadedAction(response.data));
            },
            (err: any) => {
              this.store.dispatch(new HasErrorAction(err.message));
            }
          );
        })
      );
    },
    { dispatch: false }
  );
  EditProductWithPhoto$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(EditProductWithPhoto),

        tap((action: any) => {
          this.service.editWithPhoto(action.data, action.file).subscribe(
            (response: any) => {
              this.store.dispatch(new getAllProductsAction());
              this.store.dispatch(new EditProductWithPhotoLoadedAction());
            },
            (err: any) => {
              this.store.dispatch(new HasErrorAction(err.message));
            }
          );
        })
      );
    },
    { dispatch: false }
  );

  DeleteProduct$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DeleteProduct),
        tap((action: any) => {
          this.service.delete(action.id).subscribe({
            next: (response: any) => {
              this.store.dispatch(new DeleteProductLoadedAction());
              this.store.dispatch(new getAllProductsAction());
            },
            error: (err: any) => {
              this.store.dispatch(new HasErrorAction(err.message));
            },
          });
        })
      );
    },
    { dispatch: false }
  );

  DeleteMultipleProduct$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(DeleteMultipleProduct),
        tap((action: any) => {
          let selectedProducts = action.selectedProducts;

          selectedProducts.forEach((product: ProductModel, index: number) => {
            this.service.delete(product.id!!).subscribe({
              next: (response: any) => {
                if (index == selectedProducts.length - 1) {
                  this.store.dispatch(new DeleteProductLoadedAction());
                  this.store.dispatch(new getAllProductsAction());
                }
              },
              error: (err: any) => {
                this.store.dispatch(new HasErrorAction(err.message));
              },
            });
          });
        })
      );
    },
    { dispatch: false }
  );

  AddProductByExcel$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AddProductByExcel),

        tap((action: any) => {
          this.service.addByExcel(action.data).subscribe(
            (response: any) => {
              this.store.dispatch(new getAllProductsAction());
            },
            (err: any) => {
              this.store.dispatch(new HasErrorAction(err.message));
            }
          );
        })
      );
    },
    { dispatch: false }
  );

  GetProductForExport$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(GetProductForExport),

        tap((action: any) => {
          this.service.GetProductForExport().subscribe(
            (response: any) => {
              this.store.dispatch(
                new LoadProductForExcelAction(response.data.products)
              );
            },
            (err: any) => {
              this.store.dispatch(new HasErrorAction(err.message));
            }
          );
        })
      );
    },
    { dispatch: false }
  );
}
