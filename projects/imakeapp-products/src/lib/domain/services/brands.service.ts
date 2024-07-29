import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GraphQLService } from './graphql.service';
import { GET_BRANDS_DROPDOWN_QUERY } from './brands.queries';

@Injectable({
  providedIn: 'root',
})
export class BrandsService {
  graphQLURL: string = environment.graphqlendpoint;
  constructor(
    private http: HttpClient,
    private graphQLService: GraphQLService
  ) {}

  getForDropdown() {
    return this.graphQLService.query(GET_BRANDS_DROPDOWN_QUERY);
  }
}
