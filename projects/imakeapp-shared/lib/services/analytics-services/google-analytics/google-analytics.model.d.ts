export interface add_to_cart_option_interface {
    currency?: string;
    value?: number;
    items?: add_to_cart_option_item_model[];
}
export interface add_to_cart_option_item_model {
    item_id?: number;
    item_name?: string;
    item_category?: string;
    price?: number;
    quantity?: number;
}
export type googleAnalyticsEventType = 'begin_checkout' | 'login' | 'sign_up' | 'view_cart' | 'purchase' | 'search' | 'add_payment_info' | 'add_shipping_info';
