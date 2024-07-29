import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { ProductsAttributesService } from "../../../../domain/services/products-attributes.service";


@Component({
  selector: "app-product-attribute-options",
  templateUrl: "./product-attribute-options.component.html",
  styleUrls: ["./product-attribute-options.component.scss"],
})
export class ProductAttributeOptionsComponent implements OnInit {
  @Input("attribute_options") attribute_options: any;
  @Output("showAttributeOptionsModal") showAttributeOptionsModal =
    new EventEmitter();
  heads: string[] = ["الاسم عربى", "الاسم انجليزى", "السعر", "العمليات"];
  clonedOption: { [id: number]: any } = {};
  rowData: { price: any; id: any }[] = [];

  constructor(
    private productsAttributesService: ProductsAttributesService
  ) {}

  ngOnInit(): void {}

  onRowEditInit(option: any, index: number) {
    console.log(index);

    this.clonedOption[index] = { ...option };
    this.rowData[index] = {
      price: option.price,
      id: option.product_optionsId
    };
  }
  onRowEditSave(option: any,index : number) {
    this.productsAttributesService.edit(this.rowData[index]).subscribe({
      next: this.OnEditSuccess(option,index),
      error: this.OnEditFail(),
    });
  }
  onRowEditCancel(index: number) {
    this.attribute_options[index] = {...this.clonedOption[index]};
    delete this.clonedOption[index];
  }

  OnEditSuccess(option: any,index : number) {
    return (response:any) => {
      delete this.clonedOption[option.product_optionsId];

      this.attribute_options[index].price = this.rowData[index].price;

    };
  }
  OnEditFail() {
    return (error:any) => {

    };
  }

}
