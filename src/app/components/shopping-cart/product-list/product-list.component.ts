import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product.model';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Product[]=[];
  wishList:number[]=[]
  
  constructor(
    private productService : ProductService,
    private wishlistService : WishlistService
    ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadWishList();
  }
  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{
      this.productList = products;
    });
  }

  loadWishList(){
    this.wishlistService.getWishtlist().subscribe(productsIds => this.wishList = productsIds);
  }
}
