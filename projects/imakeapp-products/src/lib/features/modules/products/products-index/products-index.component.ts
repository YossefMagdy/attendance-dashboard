import { ProductsFacade } from '../../../../domain/facades/products.facades';

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as xlsx from 'xlsx';

import { Paginator } from 'primeng/paginator';
import { Table } from 'primeng/table';
import { CategoriesFacade } from 'projects/ima-dashboard-categories/src/public-api';
import {
  ConfirmationService,
  MessageService,
  ConfirmEventType,
} from 'primeng/api';
import {
  ProductModel,
  productsIndexViewState,
} from './../../../../domain/entities/productModel';
import { ExcelProcessor } from '../../../../domain/facades/AddProductExcelHelpter';
import exportExcel from 'projects/imakeapp-products/src/lib/domain/facades/ExportProductExcel';
import {
  BaseComponent,
  LanguagePipe,
  LanguageService,
  WebsiteAttributesService,
} from 'projects/imakeapp-shared';

@Component({
  selector: 'app-products-index',
  templateUrl: './products-index.component.html',
  styleUrls: ['./products-index.component.scss'],
})
export class ProductsIndexComponent extends BaseComponent implements OnInit {
  @ViewChild('myPaginator', { static: true }) myPaginator?: Paginator;
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;

  @ViewChild('table', { static: true }) table?: Table;

  productsIndexViewState: productsIndexViewState = new productsIndexViewState();

  selectedProducts: ProductModel[] = [];
  productFormModalVisibility: boolean = false;

  constructor(
    private router: Router,
    private categoriesFacade: CategoriesFacade,
    private ProductFacade: ProductsFacade,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public override attrService: WebsiteAttributesService,
    public override language_s: LanguageService,
    public lang_Pipe: LanguagePipe
  ) {
    super(language_s, attrService);
  }

  override ngOnInit() {
    super.ngOnInit();
    this.getDropdownData();
    this.getProductsIndexViewState();
  }

  getProductsIndexViewState() {
    this.ProductFacade.productsIndexViewStateSelector$.subscribe({
      next: (data) => {
        console.log(data)
        this.productsIndexViewState = data;
        this.productFormModalVisibility = data.productFormModalVisibility;
      },
    });
  }

  getDropdownData() {
    this.getSubCategories();
    this.getCategories();
  }

  getCategories() {
    this.categoriesFacade.getAllCategories();
    this.categoriesFacade.categories_selector$.subscribe({
      next: this.handleGetCategoriesOnSuccess(),
      error: this.handleGetCategoriesOnFail(),
    });
  }

  handleGetCategoriesOnSuccess() {
    return (response: any[]) => {
      let filterInputs = JSON.parse(
        JSON.stringify(this.productsIndexViewState.filterInputs)
      );
      filterInputs[0].options = response;
      this.ProductFacade.ChangeProductsIndexViewState({
        ...this.productsIndexViewState,
        filterInputs,
      });
    };
  }
  handleGetCategoriesOnFail() {
    return () => {
      this.messageService.add({
        severity: 'error',
        summary: 'التصنيفات الرئيسية',
        detail: 'حدث خطا ما',
      });
    };
  }
  getSubCategories() {
    this.categoriesFacade.getAllSubCategoryCategories();
    this.categoriesFacade.subCat_selector$.subscribe({
      next: this.handleGetSubCategoriesOnSuccess(),
      error: this.handleGetSubCategoriesOnFail(),
    });
  }
  handleGetSubCategoriesOnSuccess() {
    return (response: any[]) => {
      let filterInputs = JSON.parse(
        JSON.stringify(this.productsIndexViewState.filterInputs)
      );
      filterInputs[1].options = response;
      this.ProductFacade.ChangeProductsIndexViewState({
        ...this.productsIndexViewState,
        filterInputs,
      });
    };
  }
  handleGetSubCategoriesOnFail() {
    return () => {
      this.messageService.add({
        severity: 'error',
        summary: 'التصنيفات الفرعية',
        detail: 'حدث خطا ما',
      });
    };
  }

  onRowEditInit(product: any, index: number) {
    let clonedProduct = this.productsIndexViewState.clonedProduct;
    let rowData = this.productsIndexViewState.rowData;

    clonedProduct[product.id] = { ...product };
    rowData[index] = {
      name_ar: product.name_ar,
      name_en: product.name_en,
      price: product.price,
      id: product.id,
      attributes: [],
    };

    this.ProductFacade.ChangeProductsIndexViewState({
      ...this.productsIndexViewState,
      clonedProduct,
      rowData,
    });
  }
  onRowEditSave(product: any, index: number) {
    // this.productsService
    //   .editWithPhoto(this.rowData[index], this.productPhotoFile)
    //   .subscribe({
    //     next: (response) => {
    //       delete this.clonedProduct[product.id];
    //       this.get();
    //       this.genericService.showNotification(
    //         "success",
    //         "تعديل المنتج",
    //         "تم التعديل بنجاح"
    //       );
    //     },
    //     error: (error) => {
    //       this.genericService.showNotification(
    //         "error",
    //         "تعديل المنتج",
    //         "حدث خطا ما"
    //       );
    //     },
    //   });
  }

  onRowEditCancel(product: any, index: number) {
    let products = this.productsIndexViewState.products;
    products[index] = this.productsIndexViewState.clonedProduct[product.id];
    delete this.productsIndexViewState.clonedProduct[product.id];

    this.ProductFacade.ChangeProductsIndexViewState({
      ...this.productsIndexViewState,
      products,
    });
  }

  get() {
    this.ProductFacade.getAllProducts();
    this.ProductFacade.Products_selector$.subscribe({
      next: (response) => {
        let products = JSON.parse(
          JSON.stringify(this.productsIndexViewState.products || '')
        );
        let totalProducts = this.productsIndexViewState.totalProducts;

        products = response!.products?.results!;
        totalProducts = response!.products?.total;

        this.ProductFacade.ChangeProductsIndexViewState({
          ...this.productsIndexViewState,
          products,
          totalProducts,
        });
      },
    });
  }

  edit(product: any) {
    this.ProductFacade.ChangeProductsIndexViewState({
      ...this.productsIndexViewState,
      selectedProduct: product,
      productFormModalVisibility: true,
    });
  }

  hideProductFormModal(): void {
    this.ProductFacade.ChangeProductsIndexViewState({
      ...this.productsIndexViewState,
      productFormModalVisibility: false,
    });
  }

  quickEditProduct(data: { id: number; key: string; value: any }) {
    // this.productsService
    //   .edit({ id: data.id, [data.key]: +data.value })
    //   .subscribe({
    //     next: (response: any) => {
    //       console.log(response);
    //       if (response.data.products.length > 0) {
    //         this.get();
    //         this.genericService.showNotification(
    //           "success",
    //           "تعديل المنتج",
    //           "تمت العملية بنجاح"
    //         );
    //       } else {
    //         this.quickEditProductOnFail();
    //       }
    //     },
    //     error: (error: any) => {
    //       this.quickEditProductOnFail();
    //     },
    //   });
  }
  quickEditProductOnFail() {
    this.messageService.add({
      severity: 'error',
      summary: 'تعديل المنتج',
      detail: 'حدث خطا ما',
    });
  }
  confirmationForDeleteingProduct(id: number): void {
    this.confirmationService.confirm({
      header: 'هل تريد مسح هذا المنتج ؟',
      acceptLabel: 'نعم',
      rejectLabel: 'لا',
      accept: () => {
        this.delete(id);
      },
    });
  }
  delete(id: any) {
    this.ProductFacade.deleteProduct(id);
  }

  isRTL(s: any) {
    var ltrChars =
        'A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF' +
        '\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF',
      rtlChars = '\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC',
      rtlDirCheck = new RegExp('^[^' + ltrChars + ']*[' + rtlChars + ']');

    return rtlDirCheck.test(s);
  }

  filter(values: any) {
    let filterData: any = `Function: "Details"`;

    Object.keys(values).forEach((key) => {
      let value: any = values[key];
      if (value) {
        if (key == 'name' && this.productsIndexViewState.selectedProduct) {
          filterData += `
            name_arLike: "${this.productsIndexViewState.selectedProduct}"
          `;
        } else if (
          ['sub_category_id', 'category_id'].includes(key) &&
          value.length > 0
        ) {
          filterData += `
            ${key}In: [${value}]
          `;
        } else {
          filterData += `
          ${key}Eq: ${value}
          `;
        }
      }
    });

    //if filter changed
    if (filterData != this.productsIndexViewState.productsFilter.filter) {
      this.myPaginator?.changePage(0);
      this.ProductFacade.ChangeProductsIndexViewState({
        ...this.productsIndexViewState,
        productsFilter: {
          ...this.productsIndexViewState.productsFilter,
          page: 1,
          filter: filterData,
        },
      });
      this.get();
    }
  }
  paginate(event: any) {
    let limit: number = event.rows;
    let page: number = event.page + 1;
    this.ProductFacade.ChangeProductsIndexViewState({
      ...this.productsIndexViewState,
      productsFilter: {
        ...this.productsIndexViewState.productsFilter,
        page,
        limit,
      },
    });
    this.get();
  }

  showAttributeOptionsModal(productIndex?: number, attributeIndex?: number) {
    let selectedAttributeOptions =
      this.productsIndexViewState.selectedAttributeOptions;
    let attributeOptionsModalVisibility =
      this.productsIndexViewState.attributeOptionsModalVisibility;

    productIndex = productIndex ?? this.productsIndexViewState.productIndex;
    attributeIndex =
      attributeIndex ?? this.productsIndexViewState.attributeIndex;

    selectedAttributeOptions =
      this.productsIndexViewState.products[productIndex]?.attributes[
        attributeIndex
      ].attributes_options;
    attributeOptionsModalVisibility = true;

    this.ProductFacade.ChangeProductsIndexViewState({
      ...this.productsIndexViewState,
      selectedAttributeOptions,
      attributeOptionsModalVisibility,
      productIndex,
      attributeIndex,
    });
  }
  hideAttributeOptionsModal() {
    let attributeOptionsModalVisibility =
      this.productsIndexViewState.attributeOptionsModalVisibility;

    attributeOptionsModalVisibility = false;
    this.ProductFacade.ChangeProductsIndexViewState({
      ...this.productsIndexViewState,
      attributeOptionsModalVisibility,
    });
  }

  handleFilterDropdownChange(values: any) {
    let key = Object.keys(values)[0];

    switch (Object.keys(values)[0]) {
      case 'name':
        this.getproductsSuggestions(values[key]);
        break;
    }
  }
  ///@fix
  getproductsSuggestions(name: any) {
    clearTimeout(this.productsIndexViewState.timer);
    this.productsIndexViewState.selectedProduct = undefined;

    if (name.id) {
      this.productsIndexViewState.selectedProduct = name.name_ar;
    } else if (name) {
      this.productsIndexViewState.timer = setTimeout(() => {
        let isRTL = this.isRTL(name) ? '_ar' : '_en';
        let key = 'name' + isRTL;
        this.productsIndexViewState.filterInputs[3].field = 'name' + isRTL;
        // this.productsService.getProductsSuggetions(key, name).subscribe({
        //   next: (response: any) => {
        //     this.productsIndexViewState.filterInputs[3].options = response.data.products;
        //   },
        //   error: (error: any) => { },
        // });
      }, 1000);
    }
    this.ProductFacade.ChangeProductsIndexViewState({
      ...this.productsIndexViewState,
    });
  }
  updateProductImage(file: any): void {
    let productPhotoFile = this.productsIndexViewState.productPhotoFile;

    productPhotoFile = file.files[0];
    this.ProductFacade.ChangeProductsIndexViewState({
      ...this.productsIndexViewState,
      productPhotoFile,
    });
  }
  confirmDeleteSelectedProducts(): void {
    this.confirmationService.confirm({
      header: 'هل تريد مسح هذه المنتجات ؟',
      acceptLabel: 'نعم',
      rejectLabel: 'لا',
      accept: () => {
        this.deleteSelectedProducts();
      },
    });
  }
  deleteSelectedProducts(): void {
    this.ProductFacade.DeleteMultipleProduct(this.selectedProducts);
  }
  UploadExcel(event: any) {
    let file = event.target.files[0];

    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var workBook = xlsx.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.productsIndexViewState.ExcelData = xlsx.utils.sheet_to_json(
        workBook.Sheets[sheetNames[0]]
      );
      this.confirmationService.confirm({
        message: `لقد قمت بتحميل ${this.productsIndexViewState.ExcelData.length} منتجات`,
        header: 'تاكيد تحميل المنتجات',
        icon: 'pi pi-info-circle',
        accept: () => {
          console.log(workBook);
          new ExcelProcessor(
            this.productsIndexViewState.ExcelData!,
            workBook,
            this.ProductFacade
          );
          // this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
          this.resetFileInput();
        },
        reject: (type: ConfirmEventType) => {
          switch (type) {
            case ConfirmEventType.REJECT:
              this.messageService.add({
                severity: 'error',
                summary: 'Rejected',
                detail: 'You have rejected',
              });
              break;
            case ConfirmEventType.CANCEL:
              this.messageService.add({
                severity: 'warn',
                summary: 'Cancelled',
                detail: 'You have cancelled',
              });
              break;
            default:
              this.messageService.add({
                severity: 'warn',
                summary: 'Cancelled',
                detail: 'You have cancelled',
              });
          }
        },
      });
    };
  }

  resetFileInput() {
    if (this.fileInput) {
      this.fileInput.nativeElement.value = '';
    }
  }

  getProductForExcel() {
    this.ProductFacade.GetProductsForExcel();
    this.ProductFacade.ProductsForExcel_selector$.subscribe((data) => {
      console.log(data);
      new exportExcel().exportExcel(data as any);
    });
  }
}
