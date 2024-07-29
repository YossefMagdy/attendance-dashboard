






export interface categories_states_interface
{
   name: any;
   id:number
}


export interface categories_states
{
   categories: categories_states_interface[];
   sub_categories: categories_states_interface[];
   laoding:boolean
   has_error:string

}
