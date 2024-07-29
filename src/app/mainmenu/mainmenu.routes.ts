import { Routes } from "@angular/router";
import { MainmenuFormComponent } from "./mainmenu-form/mainmenu-form.component";
import { MainmenuIndexComponent } from "./mainmenu-index/mainmenu-index.component";


export const MainmenuRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'all',
                component: MainmenuIndexComponent,
                data: {
                    title: 'المينيو',
                },                              
            },
            {
                path: 'add',
                component: MainmenuFormComponent,
                data: {
                    title: 'اضافة منيو',
                }, 
                                              
            },
            {
                path: 'edit',
                component: MainmenuFormComponent,
                data: {
                    title: 'تعديل منيو',
                },                              
            }            
        ]
    }
]