import { gql } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GraphQLService } from 'projects/image-gallaries/src/domain/services/graphql.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComapanyService {

  constructor(private http: HttpClient,    private graphQLService: GraphQLService) {}



get() {
  return this.graphQLService.query(gql`{
   
    company{
      id
      name
      logo
  }

}`);
}

add(obj: any) {
return this.http.post(`${environment.ApiEndPoint}/companies/add`, obj).toPromise();
} 

edit(user: any, id: any) {
return this.http.post(`${environment.ApiEndPoint}/companies/edit/${id}`, user).toPromise();
}  

delete(id: any) {
return this.http.get(`${environment.ApiEndPoint}/companies/delete/${id}`).toPromise();
}  
}