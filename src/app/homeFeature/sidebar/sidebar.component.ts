import { Component } from '@angular/core';
import { HeadersFacade } from 'projects/imakeapp-header/src/public-api';
import { MenuItem } from 'src/app/core/Entites/categories';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {



  categories: MenuItem[] =  [
    {
      "label": "مدراس",
      "icon": "fas fa-globe",
      "items": [
          {
              "label": "اضافة",
              "icon": "",
              "routerLink": "/home/school/add"
          },
          {
              "label": "عرض",
              "icon": "",
              "routerLink": "/home/school/all"
          }
      ]
  }
  ]
constructor(private headerFacade:HeadersFacade){


}





}
