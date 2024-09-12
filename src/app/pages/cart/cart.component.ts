import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartService = inject(CartService);

  getTotal() {
    return this.cartService.getCart().reduce((acc, product) => acc + product.price, 0);
  }

  removeFromCart(product: any) {
    this.cartService.removeProduct(product);
  }

}
