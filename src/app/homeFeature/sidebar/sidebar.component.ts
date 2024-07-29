import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { HeadersFacade } from 'projects/imakeapp-header/src/public-api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {



  categories: any[] = [
   
];
constructor(private headerFacade:HeadersFacade){

this.listen_to_data()

}


  listen_to_data()
  {

    this.headerFacade.navigation_menu_selector$.subscribe(
      (categories: any)=>{
        if ( !categories?.length ) return;
        // save categories
        console.log(categories)
        this.categories = JSON.parse(JSON.stringify(categories));



      }

    );

  }


}
