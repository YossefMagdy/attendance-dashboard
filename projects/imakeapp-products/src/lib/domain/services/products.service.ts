import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { gql } from 'apollo-angular';
import { GraphQLService } from './graphql.service';
import {
  PRODUCTS_DATA_QUERY,
  PRODUCT_EDIT_WITH_PHOTO_QUERY,
  PRODUCT_EDIT_QUERY,
  ExportProductToExcelFile,
  PRODCUT_DELETE_QUERY,
} from './products.query';
import { ProductsFilter } from '../entities/productModel';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  graphQLURL: string = environment.graphqlendpoint;
  constructor(
    private http: HttpClient,
    private graphQLService: GraphQLService
  ) {}

  get(ProductsFilter : ProductsFilter) {
    return this.graphQLService.getData(
      'products',
      PRODUCTS_DATA_QUERY,
      ProductsFilter.page,
      ProductsFilter.limit,
      ProductsFilter.filter
    );
  }
  getProductsSuggetions(key: any, value: any) {
    return this.graphQLService.query(
      gql`
          {
            products(${key}Like:"%${value}%"){
              id
              name_ar
              name_en
            }
          }
          `
    );
  }

  getBySubCategory(sub_category_id: number) {
    return this.graphQLService.query(gql`
      {
        products(sub_category_id: ${sub_category_id}){
          id
          name_ar
        }
      }
    `);
  }

  GetProductForExport() {
    return this.graphQLService.query(ExportProductToExcelFile);
  }

  add(data: any) {
    return this.http.post(`${environment.ApiEndPoint2}/products/add`, data);
  }
  addByExcel(data: any) {
    return this.http.post(
      `${environment.ApiEndPoint}/users/createMultipleUser`,
      data
    );
  }
  editWithPhoto(data: any, file: any) {
    const formData = new FormData();
    formData.append('query', PRODUCT_EDIT_WITH_PHOTO_QUERY);
    if (file) formData.append('photo', file);
    formData.append(
      'variables',
      JSON.stringify({ photoKey: 'photo', ...data })
    );

    return this.http.post(`${this.graphQLURL}`, formData);
  }

  edit(data: any) {
    return this.graphQLService.query(
      gql`
        ${PRODUCT_EDIT_QUERY}
      `,
      data
    );
  }
  delete(id: number) {
    return this.graphQLService.query(PRODCUT_DELETE_QUERY, { id });
  }
}
