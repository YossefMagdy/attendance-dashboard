import { inject } from '@angular/core';
import { AttributesOption, SpecificationsOption, ProductsPhoto, CategoriesModelExcel, Specifications, ProductExcel, Brand, Badge } from "../entities/ExcelModels";
import * as xlsx from "xlsx";
import { ProductsFacade } from "./products.facades";

export class ExcelProcessor {
  private attributesBySKU: { [sku: string]: AttributesOption[] } = {};
  private specificationsBySKU: { [sku: string]: SpecificationsOption[] } = {};
  private productsPhotosBySKU: { [sku: string]: ProductsPhoto[] } = {};
  private categoryBySKU: { [sku: string]: CategoriesModelExcel } = {};

  constructor(public ExcelData: ProductExcel[], public workBook: any, public productFacade: ProductsFacade) { this.readExcel() }

  readExcel() {
//     const sheetNames = this.workBook.SheetNames;
//     const attributes: AttributesOption[] = xlsx.utils.sheet_to_json(this.workBook.Sheets[sheetNames[1]]);
//     const specifications: Specifications[] = xlsx.utils.sheet_to_json(this.workBook.Sheets[sheetNames[2]]);
//     const photos: ProductsPhoto[] = xlsx.utils.sheet_to_json(this.workBook.Sheets[sheetNames[3]]);
//     const categories: CategoriesModelExcel[] = xlsx.utils.sheet_to_json(this.workBook.Sheets[sheetNames[4]]);

//     this.groupAttributesBySKU(attributes);
//     this.groupSpecificationsBySKU(specifications);
//     this.groupPhotosBySKU(photos);
//      this.groupCategoriesBySKU(categories);
//     for (const product of this.ExcelData!) {
// if (product.id) {
//   this.EditExcel(product)

// }else {
//   this.AddByExcel(product)

// }
//   }
  this.productFacade?.addProductsByExcel(this.ExcelData)

}
AddByExcel(product:ProductExcel){
        //   adding Brands
        const badges: Badge = {
          name_ar: product.badge_ar || "",
          name_en: product.brand_en || ""

        }
        product.badge = badges

        //   adding Brands
        const brands: Brand = {
          name_ar: product.brand_ar || "",
          name_en: product.brand_en || ""

        }
        product.brand = brands
        this.addAttributesToProducts(product);
        this.addSpecificationsToProducts(product);
        this.addPhotosToProducts(product);
        this.addCategoriesToProducts(product);

        /// clean the object
        delete product.brand_en
        delete product.brand_ar
        delete product.badge_ar
        delete product.badge_en
        product.sku = product.sku.toString()


}
EditExcel(product:ProductExcel){
  //   adding Brands

  this.addAttributesToProducts(product);
  this.addSpecificationsToProducts(product);
  this.addPhotosToProducts(product);

  /// clean the object

  product.sku = product.sku.toString()


}
  private groupAttributesBySKU(attributes: AttributesOption[]) {
    for (const attribute of attributes) {
      if (!this.attributesBySKU[attribute.sku!]) {
        this.attributesBySKU[attribute.sku!] = [];
      }
      const attributeArray = this.convertAttributesToObjectArray(attribute);
      this.attributesBySKU[attribute.sku!].push(attributeArray);
    }
  }

  private groupSpecificationsBySKU(specifications: Specifications[]) {
    for (const specification of specifications) {
      if (!this.specificationsBySKU[specification.sku!]) {
        this.specificationsBySKU[specification.sku!] = [];
      }
      const specs = this.convertSpecificationToObjectArray(specification);
      this.specificationsBySKU[specification.sku!].push(specs);
    }
  }

  private groupPhotosBySKU(photos: ProductsPhoto[]) {
    for (const Singlephoto of photos) {
      if (!this.productsPhotosBySKU[Singlephoto.sku!]) {
        this.productsPhotosBySKU[Singlephoto.sku!] = [];
      }
     const photo:ProductsPhoto = {photo:Singlephoto.photo}

      this.productsPhotosBySKU[Singlephoto.sku!].push(photo);

    }
  }

  private groupCategoriesBySKU(categories: CategoriesModelExcel[]) {
    for (const category of categories) {
      const cat = this.convertCategoryToObjectArray(category);
      this.categoryBySKU[category.sku!] = cat;
    }
  }

  private addAttributesToProducts(product: ProductExcel) {
    if (this.attributesBySKU[product.sku]) {
      if (!product.attributes_options) {
        product.attributes_options = [];
      }
      product.attributes_options.push(...this.attributesBySKU[product.sku]);
    }

  }

  private addSpecificationsToProducts(product: ProductExcel) {
    if (this.specificationsBySKU[product.sku]) {
      if (!product.specifications_options) {
        product.specifications_options = [];
      }
      product.specifications_options.push(...this.specificationsBySKU[product.sku]);
    }

  }

  private addPhotosToProducts(product: ProductExcel) {
    if (this.productsPhotosBySKU[product.sku]) {
      if (!product.products_photos) {
        product.products_photos = [];
      }
      product.products_photos.push(...this.productsPhotosBySKU[product.sku]);
    }

  }

  private addCategoriesToProducts(product: ProductExcel) {
    if (this.categoryBySKU[product.sku]) {
      product.category = this.categoryBySKU[product.sku!];
    }
  }
  convertAttributesToObjectArray(inputObj: any): AttributesOption {

    const { sku, attribute_name_ar, required, attribute_name_en, is_base_price, max_checks,price ,options_name_ar,options_name_en} = inputObj
    const NewAttr = { name_en: attribute_name_en || "",name_ar: attribute_name_ar || "" }
    const attributeOptions = {
      name_ar:options_name_ar || "",
      name_en:options_name_en || "",
      price: price,
      max_checks,
      is_base_price,
      required,
      attribute: NewAttr,

    };
    return attributeOptions;
  }


  // convertAttributesToObjectArray(inputObj: any): AttributesOption[] {
  //   const attrOptionsAr: string[] = inputObj["attr_options_ar"].split("-");
  //   const attrOptionsEn: string[] = inputObj["attr_options_en"].split("-");
  //   const attrPriceList: number[] = inputObj["attr_price"].split("-").map(Number);
  //   const { sku, attribute_name_ar, required, attribute_name_en, is_base_price, max_checks } = inputObj
  //   const NewAttr = { name_en: attribute_name_en,name_ar: attribute_name_ar }
  //   const attributeOptions: AttributesOption[] = attrOptionsAr.map((optionAr, index) => ({
  //     name_ar: optionAr.trim(),
  //     name_en: attrOptionsEn[index].trim(),
  //     price: attrPriceList[index],
  //     max_checks,
  //     is_base_price,
  //     required,
  //     attribute: NewAttr,

  //   }));
  //   return attributeOptions;
  // }
  convertSpecificationToObjectArray(Specs: any): SpecificationsOption {

    const { sku, Specifications_name_en, Specifications_name_ar, options_name_ar, options_name_en } = Specs
    const NewSpecs = {

      name_ar: Specifications_name_ar.toString() || "",
      name_en: Specifications_name_en.toString() || "",
    }
    const SpecsOptions: SpecificationsOption = {
      name_ar: options_name_ar.toString() || "",
      name_en: options_name_en.toString() || "",
      specification: NewSpecs,
    };
    return SpecsOptions;
  }


  convertCategoryToObjectArray(Cateogry: CategoriesModelExcel): CategoriesModelExcel {

    const {  category_name_ar, category_name_en, subCat_name_ar, subCat_name_en } = Cateogry

    const SuBArray: any = {
      name_ar: subCat_name_ar?.toString() || "",
      name_en: subCat_name_en?.toString() || "",

    };
    const CatArray = {

      name_ar: category_name_ar?.toString() || "",
      name_en: category_name_en?.toString() || "",
      sub_categories: SuBArray
    }
    return CatArray;
  }
}
