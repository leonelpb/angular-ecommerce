import { Component, OnInit } from '@angular/core';

import { MsgServiceService } from 'src/app/services/msg-service.service';
import { CartItem } from 'src/app/models/cart-item.model';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems:CartItem[]=[];

  cartTotal=0;
   

  constructor(
    private msg:MsgServiceService,
    private cartService:CartService
    ) 
    { }

  ngOnInit(): void {  
    this.handleSubscription();
    this.loadCartItems() ;
  }
  
  handleSubscription(){
    this.msg.getMsg().subscribe(()=>{
      this.loadCartItems()
    })
  }
  
  loadCartItems(){
    this.cartService.getCartItems().subscribe((items:CartItem[])=>{
      this.cartItems = items;
      this.calcCartTotal();
    })
  }

  calcCartTotal(){
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.price * item.qty)
    })
  }

}
