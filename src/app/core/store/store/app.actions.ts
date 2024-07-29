
import { Action } from "@ngrx/store";
import * as types from './constants/constants';





export class GetHeaderTheme implements Action {
    readonly type = types.Open_Full_Nav;
    constructor() { }
}






export type ActionsUnion = GetHeaderTheme
