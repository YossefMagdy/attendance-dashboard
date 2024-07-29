export class MenuItemsTopics {
  id: any;
  name?: string;
  name_en?: string;
  menu_topic_type_id?: number;
  menu_categories_items_id?: number;
  required?: number;
  max_check?: number;
  price?: number;
  max_option_checks?: number;
  item_name?: string;
  menu_options: MenuOption[] = [];
  Attr: number | undefined;
  attributes_options_id: any;
  MenuItemsTopics: any;
  is_photo: any;
  attributesOptions: any;
  disabled: boolean = false;
  showInstruction: boolean = false;
  showInstructionofis_base_price: boolean = false;
}

export class MenuOption {
  id?: number;
  name?: string;
  name_en?: string;
  price?: number;
  tmp_price?: number;
  item_name?: string;
  created?: Date;
  modified?: Date;
  attr: any;
  topic_name?: string;
  menu_options_topics_id?: number;
  required?: number;
  max_check?: number;
  attributes_options_id: any;
  img: any;
  imgsrc?: string | ArrayBuffer;
  imgName?: string;
  imgfile?: File;
  imgInput: any;
  product_optionsId: any;
  disable: boolean = true;
}
export class CategoriesModel {
  id?: number;
  name?: string;
  name_ar?: string;
sku?:string
  name_en?: string;
  photo?: string;
  categories: CategoriesModel = new CategoriesModel;
  sub_categories?: CategoriesModel
}
