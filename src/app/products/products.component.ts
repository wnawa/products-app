import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Product } from '../shared/models/Product';
import { ProductServices } from '../services/Product/products.services';
import { CartService } from '../services/cart/cart.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  //start Pipe Lecture
  todayDAte = new Date();
  // // personWeight = 100.5;
  classPageTitle: string = 'text-center';
  stylePageTitle = {
    margin: 'auto',
  };
  // mainThemeColor = 'Green';
  isLogin = true;
  //End Pipe Lecture

  //start services Model Lecture 14
  pruductArr: Product[];
  /////////Injection
  constructor(private productServices:ProductServices, private cartservice:CartService) {
   
    this.pruductArr = productServices.getAllProducts();
  }
  addCartItem(product:Product)
  {
    this.cartservice.addToCart(product)
  }
  
}
