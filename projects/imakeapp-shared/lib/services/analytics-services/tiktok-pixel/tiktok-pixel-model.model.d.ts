export interface tiktokPixelParamsModel {
    content_type?: 'product' | 'product_group';
    contents?: object[];
    price?: number;
    quantity?: number;
    content_id?: string;
    content_category?: string;
    content_name?: string;
    brand?: string;
    currency?: string;
    value?: number;
    query?: string;
    description?: string;
    status?: string;
}
export interface add_to_cart_interface {
    content_id?: string;
    content_name?: string;
    descriptions?: string;
    quantity?: number;
    price?: number;
    value?: number;
    currency?: string;
}
export type tiktokPixelEventType = 'AddPaymentInfo' | 'AddToCart' | 'AddToWishlist' | 'ClickButton' | 'CompletePayment' | 'CompleteRegistration' | 'Contact' | 'Download' | 'InitiateCheckout' | 'PlaceAnOrder' | 'Search' | 'SubmitForm' | 'Subscribe' | 'ViewContent';
