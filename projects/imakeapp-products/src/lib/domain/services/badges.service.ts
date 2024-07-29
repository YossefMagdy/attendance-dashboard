import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GraphQLService } from './graphql.service';
import { GET_BADGES_DROPDOWN_QUERY } from './badges.queries';

@Injectable({
  providedIn: 'root',
})
export class BadgesService {
  graphQLURL: string = environment.graphqlendpoint;
  constructor(
    private http: HttpClient,
    private graphQLService: GraphQLService
  ) {}

  getForDropdown() {
    return this.graphQLService.query(GET_BADGES_DROPDOWN_QUERY);
  }
}
