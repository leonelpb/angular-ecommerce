import { Component, OnInit, Input } from '@angular/core';

import { CartService } from 'src/app/services/cart.service';
import { MsgServiceService } from 'src/app/services/msg-service.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  
  @Input() cartItem:any;
  
  constructor(
    private cartservices:CartService,
    private msg:MsgServiceService
  ) { }
  ngOnInit(): void {
  }
  handleRemoveFromCart(){
    this.cartservices.removeProductFromCart(this.cartItem).subscribe(()=>{
      this.msg.sendMsg(this.cartItem);
    })
  }
}
