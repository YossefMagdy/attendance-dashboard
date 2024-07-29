
export interface GalleryModel {
  gallery?: Gallery[];
}

export interface Gallery {
  id?:              number;
  photo?:           string;
  gallery_type_id?: number;
}
