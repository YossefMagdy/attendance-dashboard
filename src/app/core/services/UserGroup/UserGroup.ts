import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { gql } from 'apollo-angular';
import { GraphQLService } from 'projects/ima-dashboard-categories/src/lib/domain/services/graphql.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserGroupService {

  constructor(private http: HttpClient,    private graphQLService: GraphQLService
    ) { }

    get() {
      return this.graphQLService.query(gql`{
       
        usergroups{
          id
          name
      }
  
    }`);
    }

  add(obj: any) {
    return this.http.post(`${environment.ApiEndPoint}/UserGroup/add`, obj).toPromise();
  } 
  
  edit(user: any, id: any) {
    return this.http.post(`${environment.ApiEndPoint}/UserGroup/edit/${id}`, user).toPromise();
  }  

  delete(id: any) {
    return this.http.get(`${environment.ApiEndPoint}/UserGroup/delete/${id}`).toPromise();
  }  

}
