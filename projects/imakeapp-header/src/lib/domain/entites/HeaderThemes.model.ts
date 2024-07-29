
import { MenuItem } from 'primeng/api';

export interface HeaderTheme1 {
  data?: HeaderTheme1Data;
}

export interface HeaderTheme1Data {
  subCategories?: Category[];
  categories?:    Category[];
}

export interface Category {
  id?:           number;
  name?:         string;
  photo?:        string;
  home_visible?: number;
  vendor_id?:    number;
}


export interface HeaderState {

  HeaderTheme1?: HeaderTheme1Data;
  display_map?: boolean;
  show_header_auth_modal?: boolean;
  user?: any;
  cart_display_status?: boolean;
  active_location?: boolean;
  show_header_cart?: boolean;
  redirect?: string;
  voucher_percentage?: number;
  cart_total_with_voucher?: number;
  active_user_address?: UserAddressInterface;
  voucher_code?: string;
  cart_total?: number;
  header_categories?: CategoryInterface[];
  cart_list?: CartItemInterface[];
  naviagation_items?:MenuItem[]
  is_nav_open?:boolean
  branches_modal?: branch_modal_inteface;
  auth_modal?: auth_modal_inteface;
  mobile_search_view?: mobile_search_view_inteface
}


export interface auth_modal_inteface
{
  type?: number
}


export interface branch_modal_inteface
{
  show?: boolean,
  vendor_branches?: vendor_branch_inteface[],
  active_branch?: vendor_branch_inteface
}



export interface vendor_branch_inteface
{
  branchId?: number,
  name?: string,
  address?: string,
  phone?: string,
  phone_two?: string,
  latitude?: number,
  longitude?: number,
  gallery?: any
}



export interface CartItemInterface
{
  id: number,
  cart_product_specification: any[],
  amount: number,
  price: number,
  product: any
}


export interface UserAddressInterface
{
  id?: number,
  first_name?: string,
  phone?: number | string,
  address?: string,
  floor_number?: number | string,
  apartment_number?: number | string,
  area_id?: number
  selected?:boolean
  building_number?:number
  haveDelivery?:boolean
  areas?:any
}


export interface CheckVoucherInteface
{
  area_id: string,
  code: string,
  ordertotal: string
}




export interface CategoryInterface
{
   id: number,
   name: string,
   name_en: string,
   name_ar: string,
   menu_photo: string,
   sub_categories: SubCategoryInterface[],
   subCategory: any
}



export interface SubCategoryInterface
{
   id: number,
   name: string,
   name_en: string,
   name_ar: string
}





export interface CategoryInterface
{
   id: number,
   name: string,
   name_en: string,
   name_ar: string,
   menu_photo: string,
   sub_categories: SubCategoryInterface[],
   subCategory: any
}


export interface SubCategoryInterface
{
   id: number,
   name: string,
   name_en: string,
   name_ar: string
}


export interface mobile_search_view_inteface
{
  display?: boolean;
  search_text?: string;
  search_result?: search_result_interface[];
}


export interface search_result_interface
{
  id: number,
  name: string,
  photo: string,
  brand: search_result_brand_interface
}


export interface search_result_brand_interface
{
  name: string;
}
