import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Apollo } from "apollo-angular";
import { CookieService } from "ngx-cookie-service";
import { DELETE_CART_QUERY, FETCH_CART_QUERY, GET_CATEGORIES_QUERY, GET_Header_QUERY_THEME1, SEARCHING_ITEMS_QUERY } from "./QUERIES";
import { environment } from "../../../environments/environment";
import { BaseService, LanguageService, SharedFacade } from "projects/imakeapp-shared";
import { Observable } from "rxjs";







@Injectable({ providedIn: 'root' })
export class HeaderThemesService extends BaseService implements OnInit
{





  constructor(
    private http: HttpClient,
    private apollo: Apollo,
    private cookie_s: CookieService,
    public override language_s: LanguageService,
    private shared_facades: SharedFacade
  )
  {
    super(language_s);
  }


  ngOnInit(): void
  {

    
  }




  GETHeader_QUERY_THEME1()
  {




    return this.apollo.watchQuery({
      query: GET_Header_QUERY_THEME1(this.lang),
      fetchPolicy: 'no-cache'
    }).valueChanges;

  }

  get_cart_header(variables: any)
  {
    return this.apollo.watchQuery({
      query: FETCH_CART_QUERY(this.lang),
      variables: variables,
    }).valueChanges;

  }
  get_naviagtion_menu(params: any)
  {
    return this.http
    .get(`${environment.ApiEndPoint2}/mainmenu/indexByRole/${JSON.parse(this.cookie_s.get("usergroup"))}`)

  }
  sign_up(data: any)
  {
    return this.http.post(`${environment.ApiEndPoint2}/createUser`, data);
  }


  sign_in(data: any):Observable<any>
  {
    return this.http.post<any>(`${environment.school_url}/schoolslogin`, {
      email: data.username,
      password: data.password
    });
  }


  searching(search_string: string)
  {


    ;

    return this.apollo.watchQuery({
      query: SEARCHING_ITEMS_QUERY(this.lang),
      variables: {
        name: search_string
      },
      fetchPolicy: 'no-cache'
    }).valueChanges;
  }


  get_areas()
  {
    return this.http.get(`${environment.ApiEndPoint2}/Cities/getCitiesForApp`);
  }


  check_voucher(body: any)
  {

     return this.http.post(`${environment.ApiEndPoint2}/vouchers/checkVoucher`, body);

  }


  get_header_categories()
  {


    ;

    return this.apollo.watchQuery({
      query: GET_CATEGORIES_QUERY(this.lang),
    }).valueChanges;

  }


  getNotifications()
  {

    let user = this.cookie_s.get('user');
    let area_id = this.cookie_s.get('area_id');

    if ( user )
    {
      return this.http.get( `${ environment.ApiEndPoint2 }/Notification/index?town_id=${  area_id || 0}`);
    }
    else
    {
      return this.http.get( `${ environment.ApiEndPoint2 }/Notification/index?town_id=${  area_id || 0}&user_id=${ user ? JSON.parse(user)?.user?.id : 0 }`
      );
    }

  }

  delete_cart(variables: any)
  {
    return this.apollo.watchQuery({
      query: DELETE_CART_QUERY,
      variables: variables,
      fetchPolicy: 'no-cache'
    }).valueChanges;

  }


  get_vendor_branches()
  {
    return this.http.get(`${environment.ApiEndPoint2}/gallery/index`);
  }





}
