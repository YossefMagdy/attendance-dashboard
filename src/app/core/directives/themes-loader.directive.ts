import { Directive, Input, ViewContainerRef } from "@angular/core";
import { HeaderThemesLoaderService } from "./header_themes.sevice";


type theme_name = string;
type library_name = 'mobile-home-products-sections' | 'home-products-sections' | 'subcat-themes' | 'special-sections-themes' | 'header-themes' | 'footer-themes';



@Directive({
   selector: '[themeLoad]'
})
export class ThemeLoaderDirective
{

   @Input() set themeLoad(options: [ theme_name, library_name ] )
   {

      // if 'theme_name' empty
      if ( !options[0] ) return;

      console.log('🌻 theme loader: 🌻\n', 'theme name: ', options[0], '\n', 'library name: ', options[1]);

      switch(options[1])
      {


         case 'header-themes':
            this.header_s.loadComponent(options[0], this.viewContainerRef);
         break;



      }

   }



   constructor(
      private viewContainerRef: ViewContainerRef,

      private header_s: HeaderThemesLoaderService,
   ){}



}
