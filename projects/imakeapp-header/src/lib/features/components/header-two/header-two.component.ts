import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { CategoryInterface } from '../../../domain/entites/HeaderThemes.model';

import { Router } from '@angular/router';
import { BaseComponent, LanguageService } from 'projects/imakeapp-shared';
import { GET_NAV_MENU_ACTION } from '../../../domain/facades/store/HeaderThemes.actions';
import { HeadersFacade } from '../../../domain/facades/facades';
import { MenuItem } from 'primeng/api';








@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
})
export class HeaderTwoComponent extends BaseComponent implements OnInit
{





  lazyLoadImage = '../../../../../assets/loading.gif';
  categories: MenuItem[] = [
    {
      "label": "مدراس",
      "icon": "fas fa-globe",
      "items": [
          {
              "label": "اضافة",
              "icon": "",
              "routerLink": "//home/school/add"
          },
          {
              "label": "عرض",
              "icon": "",
              "routerLink": "//home/school/all"
          }
      ]
  }
  ]

  constructor(
    public router: Router,
    public override language_s: LanguageService,
    public headerFacades:HeadersFacade,

  ) {
    super(language_s);
  }

  override ngOnInit(): void
  {

    this.set_language();
  }

}
