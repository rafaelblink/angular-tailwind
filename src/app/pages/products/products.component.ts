import { Component, inject } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productsService = inject(ProductsService);
  cartService = inject(CartService);

  products$ = this.productsService.getAllProducts$();

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

}
