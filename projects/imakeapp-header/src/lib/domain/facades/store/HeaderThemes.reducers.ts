import { ActionsUnion,  } from "./HeaderThemes.actions";
import {  GET_NAV_MENU_LOADED, GetHeaderThemeLoaded, Open_Full_Nav, SET_ACTIVE_USER_ADDRESS, SET_REDIRECT, SIGN_IN, SIGN_OUT, SITE_THEME_LOADED, mobile_searching, recalculate_cart_total, set_active_branch, set_active_location,   set_auth_modal_type,   set_mobile_search_results,   set_vendor_branches,   set_voucher, set_voucher_percentage, show_branches_modal, show_header_cart, toggle_map, update_auth_modal_status, update_cart_display_status, update_mobile_search_bar_display } from "./constants/constants";
import { HeaderState } from "../../entites/HeaderThemes.model";
import { NavMenuModel } from "../../entites/NAV_MENU";



function getIntialState()
{
  let initialState : HeaderState  = {
    HeaderTheme1 :   {},
    display_map: false,
    show_header_auth_modal: false,
    user: {},
    cart_display_status: false,
    active_location: false,
    show_header_cart: true,
    redirect: '',
    voucher_percentage: 0,
    cart_total_with_voucher: 0,
    active_user_address: {},
    voucher_code: '',
    naviagation_items:[],
    cart_total: 0,
    header_categories : [],
    cart_list: [],
    is_nav_open:false,
    branches_modal: {
      show: false,
      vendor_branches: [],
      active_branch: {}
    },
    auth_modal: {
      type: 1
    },
    mobile_search_view: {
      display: false,
      search_text: '',
      search_result: []
    }
  };

  return initialState
}

export function HeaderReducer (state = getIntialState(), action: ActionsUnion) {

  switch ( action.type )
  {

    case GetHeaderThemeLoaded:
    return {...state,SubCategories:action.data};

    case toggle_map:
    return {
      ...state,
      display_map: action.data
    };

    case update_auth_modal_status:
    return {
      ...state,
      show_header_auth_modal: action.data
    };

    case SIGN_OUT:
    return {
      ...state,
      user: getIntialState().user
    };

    case update_cart_display_status:
      console.log(action.data)
    return {...state,cart_display_status:action.data};

    case set_active_location:
    return {
      ...state,
      active_location: action.data
    };


    case show_header_cart:
    return {
      ...state,
      show_header_cart: action.data
    };

    case SET_REDIRECT:
      return {
        ...state,
        redirect: action.data
      };

    break;

    case SIGN_IN:
    return {
      ...state,
      user: action.data
    };
    break;

    case set_voucher_percentage:
    return {
      ...state,
      voucher_percentage: action.data
    };
    break;


    case SET_ACTIVE_USER_ADDRESS:
    return{
      ...state,
      active_user_address: action.data
    };

    case set_voucher:
    return {
      ...state,
      voucher_code: action.data
    };

    case recalculate_cart_total:
    return {
      ...state,
      cart_total: action.data
    };


    case GET_NAV_MENU_LOADED:
const data:any = action.data
    const items = data?.map((item:NavMenuModel) => {
      console.log(item.sub!.length)

      if(item.sub!.length || 0 > 0 ){
        return {label: item.title,
          icon: item.icon,
          items:convertSubMenu(item.sub)
        }
      }else {
          return {label: item.title,
            icon: item.icon
          }
        }
    });
console.log(items)
    return {
      ...state,
      naviagation_items:items
    };


    case SITE_THEME_LOADED:
    return {
      ...state,
      site_theme: action.data
    };

case Open_Full_Nav :
return {...state,
  is_nav_open:true

}



    default:
    return state;

  }

}
const convertSubMenu = (submenus: any) => {
  // console.log(submenus)
  return submenus.map((item:any) =>
    {
      if(item.submenu?.length || 0 > 0 ){
        return {label: item.title,
          icon: item.icon,
          items: item.submenu != undefined ? convertSubMenu(item.submenu) : undefined
        }
      }else {
          return {label: item.title,
            icon: item.icon,routerLink:'/'+item.path
          }
        }
      });
};
