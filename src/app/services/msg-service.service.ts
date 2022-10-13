import { Injectable } from '@angular/core';
import { Subject } from 'rxjs'
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class MsgServiceService {

  subject= new Subject();
  constructor() { }

  sendMsg(product:Product){
    this.subject.next(product);
  }
  getMsg(){
    return this.subject.asObservable();
  }
}
