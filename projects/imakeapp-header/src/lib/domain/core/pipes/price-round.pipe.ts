import { Injectable, Pipe, PipeTransform } from "@angular/core";





@Pipe({
    name : "price_round"
})
export class PriceRoundPipe implements PipeTransform
{

    transform(value: number) 
    {

        if ( isNaN(value) )
        {
            return value;
        }

        // this is done to handle if 'value' is integer -> toFixed throw error
        let temp : number | string;
        temp = (parseFloat(String(value)).toFixed(2))

        return temp;
        
    }


}