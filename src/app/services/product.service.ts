import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

import { productUrl } from '../config/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

 
  products:Product[]=[]

  constructor( private http:HttpClient) { }

  getProducts():Observable<Product[]>{
     return this.http.get<Product[]>(productUrl)
  }
}
