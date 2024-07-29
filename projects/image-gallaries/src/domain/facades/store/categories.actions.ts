
/************************** Cart Action ***************************/

import { Action } from "@ngrx/store";
import * as types from './constants/constants';
import { Gallery } from '../../entities/model/GalleryModel';



export class getGalleryLoadedAction implements Action
{

   readonly type: string = types.getGalleryLoaded;
   constructor(public data:Gallery[]){}

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
export type ActionsUnion = getGalleryLoadedAction;
