import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs';

import {  wishListUrl} from './../config/api';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor( private http: HttpClient) { }

  getWishtlist(){
    return this.http.get(wishListUrl).pipe(
      map((result:any) =>{
        let productsIds: number[] =[];
        
        result.forEach(
           (item: { id: number; }) => productsIds.push(item.id));
            
           return productsIds  
      })
    )
  }
  
  addToWishList(productItem:{id :number}){
    return this.http.post(wishListUrl,{ id: productItem.id })

  }

  removeFromWishList(productItem:{id:number}){
    return this.http.delete(wishListUrl + '/' + productItem.id);
  }

}
