import { environment } from "src/environments/environment";

export const productUrl = environment.production ? 'https://api.shoppingcart.com': 'https://fakestoreapi.com/products' ;
export const cartUrl= 'https://my-json-server.typicode.com/leonelpb/dbjson/cart';
export const wishListUrl = 'https://my-json-server.typicode.com/leonelpb/dbjson/wishList';