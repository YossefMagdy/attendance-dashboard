import { getAllCategories } from './constants/constants';

/************************** Cart Action ***************************/

import { Action } from "@ngrx/store";
import * as types from './constants/constants';
import { categories_states_interface } from '../../entities/model/categories-states.interface';






export class getAllCategoriesAction implements Action
{

   readonly type: string = types.getAllCategories;
   constructor(){}

}


export class getAllSubCategoriesAction implements Action
{

   readonly type: string = types.getAllSubCategories;
   constructor(){}

}


export class getAllSubCategoriesLoaddedAction implements Action
{

   readonly type: string = types.AllSubCategoriesLoaded;
   constructor(public data:categories_states_interface){}

}
export class AllCategoriesLoadedAction implements Action
{

   readonly type: string = types.AllCategoriesLoaded;
   constructor(public data:categories_states_interface){}

}

export class EditCategoryAction implements Action
{

   readonly type: string = types.EditCategory;
   constructor(public data:categories_states_interface){}

}


export class DeleteCategoryAction implements Action
{

   readonly type: string = types.DeleteCategory;
   constructor(public id:number){}

}
export class LoadingCategoryAction implements Action
{

   readonly type: string = types.loading;
   constructor( public key:boolean){}

}
export class HasErrorAction implements Action
{

   readonly type: string = types.hasError;
   constructor(public key:string){}

}
export type ActionsUnion = AllCategoriesLoadedAction | LoadingCategoryAction | HasErrorAction  | getAllCategoriesAction | DeleteCategoryAction | EditCategoryAction;
