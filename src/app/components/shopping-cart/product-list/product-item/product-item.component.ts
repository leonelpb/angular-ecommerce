import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { MsgServiceService } from 'src/app/services/msg-service.service';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem!:Product;
  @Input() addedToWishList:boolean=false;

  constructor( 
    private msg:MsgServiceService,
    private cartService:CartService,
    private wishlistService: WishlistService
    ) 
   { }

  ngOnInit(): void {
  }

  handleAddToCart(){

    this.cartService.addProductToCart(this.productItem).subscribe(() =>{
      this.msg.sendMsg(this.productItem);
    })
   
  }

  handleAddToWishList(){
    this.wishlistService.addToWishList(this.productItem).subscribe(()=>{
      this.addedToWishList = true
    });
  }

  handleRemoveFromWishList(){
    this.wishlistService.removeFromWishList(this.productItem).subscribe(()=>{
      this.addedToWishList = false;
    });
  }

}
