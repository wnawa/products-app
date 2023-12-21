import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css',
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartservice: CartService) {
    this.setCart();
  }
  // cartservice: CartService = new CartService();
  setCart() {
    this.cart = this.cartservice.getCart();
  }
  // cart= this.cartservice.getCart();
}
