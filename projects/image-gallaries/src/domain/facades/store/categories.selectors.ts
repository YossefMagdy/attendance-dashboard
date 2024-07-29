import { createFeatureSelector, createSelector } from "@ngrx/store";
import { categories_states_interface ,categories_states} from "../../entities/model/categories-states.interface";




export const categories_state = createFeatureSelector<categories_states>('categories_states');



export const getAllCategoriesSelector = createSelector(
  categories_state, (states)=> {
    return states.categories;
  }
);

export const getAllSubCategoriesSelector = createSelector(
  categories_state, (states)=> {
    return states.sub_categories;
  }
);

