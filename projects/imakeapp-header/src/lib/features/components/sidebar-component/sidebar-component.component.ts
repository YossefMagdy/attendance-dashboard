import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { HeadersFacade } from '../../../domain/facades/facades';
import { GET_NAV_MENU_ACTION } from '../../../domain/facades/store/HeaderThemes.actions';
import { MenuItem } from 'primeng/api';
import { AnyFn } from '@ngrx/store/src/selector';
import { LanguageService } from 'projects/imakeapp-shared';

@Component({
  selector: 'lib-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.css']
})
export class SidebarComponentComponent implements OnInit {
  sidebarVisible1 = false
  categories: any[] = [
    {
        "title": "شركات",
        "icon": "fas fa-globe",
        "path": "/",
        "role": "652b13ae99bd7c1b529fef05",
        "class": "has-arrow",
        "id": "659494c71723f692afd8afab",
        "sub": [
            {
                "title": "اضافة",
                "icon": "",
                "path": "/home/companies/add",
                "role": "652b13ae99bd7c1b529fef05",
                "class": "",
                "_id": "659494c71723f692afd8afac"
            },
            {
                "title": "عرض",
                "icon": "",
                "path": "/home/companies/all",
                "role": "652b13ae99bd7c1b529fef05",
                "class": "",
                "_id": "659494c71723f692afd8afad"
            }
        ]
    }
];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }

  constructor(
    private store: Store,
    public router: Router,
    private cookie_s: CookieService,
    public  language_s: LanguageService,
    public headerFacades:HeadersFacade,

  ) {
    this.get_data()

    this.listen_to_data()

  }
  get_data()
  {

    this.store.dispatch( new GET_NAV_MENU_ACTION() );


  }

  listen_to_data()
  {

    this.headerFacades.navigation_menu_selector$.subscribe(
      (categories: any)=>{
        if ( !categories?.length ) return;
        // save categories
        console.log(categories)
       // this.categories = JSON.parse(JSON.stringify(categories));



      }

    );

  }


}
