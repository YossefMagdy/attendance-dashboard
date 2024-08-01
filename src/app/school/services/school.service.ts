import { gql } from 'apollo-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GraphQLService } from 'projects/image-gallaries/src/domain/services/graphql.service';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient, private graphQLService: GraphQLService) {}


  getSchoolsData():Observable<any>{
   return this.http.get<any>(`${environment.school_url}/schools`)
  }
  editSchoolsData(formData:any,id:number):Observable<any>{
    return this.http.put<any>(`${environment.school_url}/schools/${id}`,formData)
  }
  addSchoolsData(formData:any):Observable<any>{
    return this.http.post<any>(`${environment.school_url}/schools`,formData)
  }
  deleteSchoolsData(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.school_url}/schools/${id}`)
  }

}