
import { categories_states, categories_states_interface } from "../../entities/model/categories-states.interface";
import { ActionsUnion } from "./categories.actions";
import { AllCategoriesLoaded, AllSubCategoriesLoaded, getAllCategories } from "./constants/constants";






function getIntialState()
{
  let initialState: categories_states  = {
    categories: [],
    sub_categories: [],

    laoding: false,
    has_error: ""
  };

  return initialState
}



export function categories_reducer (state = getIntialState(), action: any)
{

  switch ( action.type )
  {

    case AllCategoriesLoaded:
    return {
      ...state,
      categories: action.data
    };


    case AllSubCategoriesLoaded:
    return {
      ...state,
      sub_categories: action.data
    };
    default:
    return state;

  }

}
