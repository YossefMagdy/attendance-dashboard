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
        "title": "مدارس",
        "icon": "fas fa-globe",
        "path": "/",
        "class": "has-arrow",
        "sub": [
            {
                "title": "اضافة",
                "icon": "",
                "path": "/home/school/add",
                "class": "",
            },
            {
                "title": "عرض",
                "icon": "",
                "path": "/home/school/all",
                "class": "",
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
       // this.categories = JSON.parse(JSON.stringify(categories));



      }

    );

  }


}
