
/************************** Products Action ***************************/

import { Action } from "@ngrx/store";
import * as types from './constants/constants';
import { ProductModel, ProductsData, ProductsFilter, productFormViewState, productsIndexViewState } from "../../entities/productModel";
import { ProductExcel } from "../../entities/ExcelModels";






export class getAllProductsAction implements Action
{

   readonly type: string = types.getAllProducts;
   constructor(){}

}


export class getAllSubProductsAction implements Action
{

   readonly type: string = types.getAllProducts;
   constructor(){}

}


export class getAllSubProductsLoaddedAction implements Action
{

   readonly type: string = types.AllSubProductsLoaded;
   constructor(public data:ProductModel){}

}
export class AllProductsLoadedAction implements Action
{

   readonly type: string = types.AllProductsLoaded;
   constructor(public data:ProductsData){}

}

export class EditProductsAction implements Action
{

   readonly type: string = types.EditProducts;
   constructor(public data:ProductModel){}

}

export class EditProductWithPhotoAction implements Action
{

   readonly type: string = types.EditProductWithPhoto;
   constructor(public data:ProductModel,file:any){}

}
export class EditProductWithPhotoLoadedAction implements Action
{

   readonly type: string = types.EditProductWithPhotoLoaded;
   constructor(){}

}

export class AddProductsByExcelAction implements Action
{

   readonly type: string = types.AddProductByExcel;
   constructor(public data:ProductExcel[]){}

}


export class GetProductForExcelAction implements Action
{

   readonly type: string = types.GetProductForExport;
   constructor(){}

}


export class LoadProductForExcelAction implements Action
{

   readonly type: string = types.ProductForExportLoaded;
   constructor(public data:ProductModel[]){}

}
export class DeleteProductAction implements Action
{

   readonly type: string = types.DeleteProduct;
   constructor(public id:number){}

}
export class DeleteMultipleProductAction implements Action
{

   readonly type: string = types.DeleteMultipleProduct;
   constructor(public selectedProducts:ProductModel[]){}

}
export class DeleteProductLoadedAction implements Action
{

   readonly type: string = types.DeleteProductLoaded;
   constructor(){}

}
export class LoadingProductsyAction implements Action
{

   readonly type: string = types.loading;
   constructor( public key:boolean){}

}
export class HasErrorAction implements Action
{

   readonly type: string = types.hasError;
   constructor(public key:string){}

}
export class ChangeProductsIndexViewState implements Action
{

   readonly type: string = types.ChangeProductsIndexViewState;
   constructor(public productsIndexViewState: productsIndexViewState){}

}
export class ChangeProductFormViewState implements Action
{
   
   readonly type: string = types.ChangeProductFormViewState;
   constructor(public productformViewState: productFormViewState){}

}
export class GetProductFormDropdowns implements Action
{
   readonly type: string = types.GetProductFormDropdowns;
   constructor(){}
}
export class GetProductFormDropdownsLoaded implements Action
{
   readonly type: string = types.GetProductFormDropdownsLoaded;
   constructor(public productformViewState: productFormViewState){}
}

export type ActionsUnion = AllProductsLoadedAction | LoadingProductsyAction | HasErrorAction  | getAllProductsAction
