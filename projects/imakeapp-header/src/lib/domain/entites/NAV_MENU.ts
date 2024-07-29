export interface NavMenuModel {
  id?:                   number;
  title?:                string;
  color?:                string;
  icon?:                 string;
  title_en?:             string;
  path?:                 string;
  role?:                 number;
  class?:                Class;
  extralink?:            number;
  sort?:                 number;
  created_by?:           number;
  modified_by?:          number;
  vendor_id?:            number;
  mainmenu_category_id?: number;
  roles?:                Role[];
  sub?:              Submenu[];
}

export type Class = "" | "has-arrow";

export interface Role {
  id?:                   number;
  parent_id?:            number;
  name?:                 string;
  description?:          null;
  registration_allowed?: number;
  created?:              Date;
  modified?:             Date;
  redirect_url?:         string;
  created_by?:           null;
  modified_by?:          null;
  vendor_id?:            number;
}

export interface Submenu {
  id?:                   number;
  title?:                string;
  color?:                string;
  icon?:                 string;
  title_en?:             string;
  path?:                 string;
  role?:                 number;
  sub?:                  number;
  class?:                Class;
  extralink?:            number;
  sort?:                 number;
  created_by?:           number;
  modified_by?:          number;
  vendor_id?:            number;
  mainmenu_category_id?: number;
  submenu?:              Submenu[];
}
