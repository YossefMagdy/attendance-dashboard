import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class countofusersService {
  constructor(private http: HttpClient) {}

  get() {
    return this.http.get(`${environment.ApiEndPoint}/reports/display`).toPromise();
  }

  indexbyrole(params: any) {
    return this.http
      .get(`${environment.ApiEndPoint2}/reports/display/indexbyrole/`+params)
      .toPromise();
  }

  search(name: string) {
    return this.http
      .post<any[]>(`${environment.ApiEndPoint}/reports/display/indexbyroleSearch`, {
        name,
      })
      .toPromise();
  }

  add(obj: any) {
    return this.http
      .post(`${environment.ApiEndPoint}/reports/display/add`, obj)
      .toPromise();
  }

  edit(user: any[], id: any) {
    return this.http
      .post(`${environment.ApiEndPoint}/reports/display/edit/${id}`, user)
      .toPromise();
  }

  delete(id: any) {
    return this.http
      .get(`${environment.ApiEndPoint}/reports/display/delete/${id}`);
  }
}
