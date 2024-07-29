import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { CategoryInterface } from '../../../domain/entites/HeaderThemes.model';

import { Router } from '@angular/router';
import { BaseComponent, LanguageService } from 'projects/imakeapp-shared';
import { GET_NAV_MENU_ACTION } from '../../../domain/facades/store/HeaderThemes.actions';
import { HeadersFacade } from '../../../domain/facades/facades';








@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
})
export class HeaderTwoComponent extends BaseComponent implements OnInit
{

  @ViewChild('menu') menu: any;
  @ViewChild('cat') cat: any;
  @ViewChild('active') active: any;



  lazyLoadImage = '../../../../../assets/loading.gif';
  categories: any[] = [
    {
        "title": "المشرفين",
        "title_en": "supervisor",
        "icon": "fas fa-book-reader",
        "path": "/test",
        "role": "652b13a399bd7c1b529fef02",
        "class": "class",
        "extraLink": "test",
        "sort": 1,
        "id": "653afa02be2bb2d083d9df99",
        "sub": [
            {
                "title": "اضافة",
                "title_en": "add",
                "icon": "test",
                "path": "/home/leaders/add",
                "role": "652b13a399bd7c1b529fef02",
                "class": "class",
                "extraLink": "test",
                "sort": 1,
                "_id": "653afa02be2bb2d083d9df9a"
            },
            {
                "title": "عرض",
                "title_en": "index",
                "icon": "test",
                "path": "/home/leaders/all",
                "role": "652b13a399bd7c1b529fef02",
                "class": "class",
                "extraLink": "test",
                "sort": 2,
                "_id": "653afa02be2bb2d083d9df9b"
            }
        ]
    },
    {
        "title": "الموظفين",
        "title_en": "employees",
        "icon": "fas fa-user-tie",
        "path": "/test",
        "role": "652b13a399bd7c1b529fef02",
        "class": "class",
        "extraLink": "test",
        "sort": 1,
        "id": "653afd07be2bb2d083d9dfa5",
        "sub": [
            {
                "title": "اضافة",
                "title_en": "add",
                "icon": "test",
                "path": "/home/users/add",
                "role": "652b13a399bd7c1b529fef02",
                "class": "class",
                "extraLink": "test",
                "sort": 1,
                "_id": "653afd07be2bb2d083d9dfa6"
            },
            {
                "title": "عرض",
                "title_en": "index",
                "icon": "test",
                "path": "/home/users/all",
                "role": "652b13a399bd7c1b529fef02",
                "class": "class",
                "extraLink": "test",
                "sort": 2,
                "_id": "653afd07be2bb2d083d9dfa7"
            }
        ]
    },
    {
        "title": "الفروع",
        "title_en": "branches",
        "icon": "fas fa-code-branch",
        "path": "/test",
        "role": "652b13a399bd7c1b529fef02",
        "class": "class",
        "extraLink": "test",
        "sort": 1,
        "id": "653afd86be2bb2d083d9dfad",
        "sub": [
            {
                "title": "اضافة",
                "title_en": "add",
                "icon": "test",
                "path": "/home/branches/add",
                "role": "652b13a399bd7c1b529fef02",
                "class": "class",
                "extraLink": "test",
                "sort": 1,
                "_id": "653afd86be2bb2d083d9dfae"
            },
            {
                "title": "عرض",
                "title_en": "index",
                "icon": "test",
                "path": "/home/branches/all",
                "role": "652b13a399bd7c1b529fef02",
                "class": "class",
                "extraLink": "test",
                "sort": 2,
                "_id": "653afd86be2bb2d083d9dfaf"
            }
        ]
    },
    {
        "title": "التقارير",
        "icon": "fas fa-globe",
        "path": "home/reports/display/",
        "role": "652b13a399bd7c1b529fef02",
        "class": "",
        "id": "6544e52b73c45af161536e85",
        "sub": [
            {
                "title": "عرض",
                "icon": "",
                "path": "home/reports/display/",
                "role": "652b13a399bd7c1b529fef02",
                "class": "",
                "_id": "6544e54573c45af161536e9e"
            }
        ]
    },
    {
        "title": "الحضور والانصارف",
        "icon": "fas fa-globe",
        "path": "/",
        "role": "652b13a399bd7c1b529fef02",
        "class": "has-arrow",
        "id": "6627c2b74b234ba1d864e625",
        "sub": [
            {
                "title": "اضافة",
                "icon": "",
                "path": "/home/leaders/all",
                "role": "652b13a399bd7c1b529fef02",
                "class": "",
                "_id": "6627c2b74b234ba1d864e626"
            }
        ]
    }
];
  active_cat: CategoryInterface = {
      id: 0,
      name: '',
      name_en: '',
      name_ar: '',
      menu_photo: '',
      sub_categories: [],
      subCategory: []
  };





  constructor(
    private store: Store,
    public router: Router,
    private cookie_s: CookieService,
    public override language_s: LanguageService,
    public headerFacades:HeadersFacade,

  ) {
    super(language_s);
  }

  override ngOnInit(): void
  {

    this.set_language();

    this.get_data();

    this.listen_to_data();

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
        this.categories = categories;

        // set init category
        if ( categories.length != 0 )
        {
          this.active_cat = this.categories[0];
        }

      }

    );

  }

  hoverTimer: any;

  onMouseEnter(isShow: boolean): void {

    if ( !this.menu ) return;

    this.hoverTimer = setTimeout(() => {
      // Handle the long hover event logic here
      this.menu.nativeElement.classList.add('menu_show');

      // Additional code...
    }, 500); // Set the duration for long hover (in milliseconds)
  }


  onMouseEnterNoDelay(isShow: boolean): void {
    this.menu.nativeElement.classList.add('menu_show');
  }

  onMouseLeave(): void {
    if ( !this.menu ) return;
    this.menu.nativeElement.classList.remove('menu_show');
    clearTimeout(this.hoverTimer);
  }

  override ngOnDestroy(): void {
    clearTimeout(this.hoverTimer);
  }

  showCat(isShow: boolean) {
    if (isShow) this.cat.nativeElement.classList.add('menu_show');
    else this.cat.nativeElement.classList.remove('menu_show');
  }

  showelement(isShow: boolean, i: number) {

  }
  public swtichToProductList(SubId:number){
    this.router!!.navigate(['/products/products-list'],  {
      queryParams:  {  SubCatId:  SubId},
    });
  }
  public swtichToProductListForCat(CatId:number){
    this.router!!.navigate(['/products/products-list'],  {
      queryParams:  {  category_id:  CatId},
    });
  }
  get_sub_cat(cat: any)
  {

    // set active cat
    this.active_cat = cat;


  }




}
