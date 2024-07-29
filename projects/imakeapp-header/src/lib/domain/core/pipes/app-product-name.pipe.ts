import { Pipe, PipeTransform } from "@angular/core";







@Pipe({
   name: 'app_product_name_pipe'   
})
export class AppProductNamePipe implements PipeTransform
{


   constructor(
   ){}

   transform(value: any, ...args: any[]) 
   {

      let product_name = value;
      let new_name = '';

      // check length of name
      let name_size = product_name.length;

      if ( name_size < 120 )
      {
         // do nothing
         new_name = product_name;
      }
      else
      {
         new_name = product_name.slice(0,120) +   "...more";
      }

      return new_name;
   }


}