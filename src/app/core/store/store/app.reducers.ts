import { AppState } from "../../Entites/AppState";
import { ActionsUnion,  } from "./app.actions";
import { Open_Full_Nav } from "./constants/constants";




function getIntialState()
{
  let initialState : AppState  = {
    HeaderStat :   {},

  };

  return initialState
}

export function AppReducer (state = getIntialState(), action: ActionsUnion) {

  switch ( action.type )
  {




case Open_Full_Nav :
return {...state,
  is_nav_open:true

}



    default:
    return state;

  }

}

