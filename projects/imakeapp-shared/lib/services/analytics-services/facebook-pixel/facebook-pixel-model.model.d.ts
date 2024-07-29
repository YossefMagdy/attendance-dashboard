export interface facebookPixelParamsModel {
    content_category?: string;
    content_ids?: number[];
    content_name?: string;
    content_type?: string;
    contents?: object[];
    currency?: string;
    num_items?: number;
    predicted_ltv?: number;
    search_string?: string;
    status?: boolean;
    value?: number;
}
export interface add_to_cart_option_interface {
    content_ids?: number[];
    content_name?: string;
    search_string?: string;
    value?: number;
    currency?: string;
    num_items?: number;
    item_id?: number;
}
export type facebookPixelEventType = 'AddPaymentInfo' | 'AddToCart' | 'AddToWishlist' | 'CustomizeProduct' | 'Lead' | 'Purchase' | 'Purchase' | 'Search' | 'StartTrial' | 'SubmitApplication' | 'Subscribe' | 'ViewContent' | 'Contact' | 'Donate' | 'FindLocation' | 'InitiateCheckout';
