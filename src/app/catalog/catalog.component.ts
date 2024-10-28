import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './product.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { CartService } from '../cart.service';
import { ProductService } from './product.service';
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  products: any;
  filter: string = '';
  // private cartSvc: CartService = inject(CartService); // This line is added to the constructor

  constructor(private cartSvc: CartService, private prodSvc: ProductService) {}
  ngOnInit(): void {
    this.prodSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addToCart(product: IProduct) {
    console.log(`Product with id ${product.id} added to cart`);
    this.cartSvc.add(product);
  }

  getFilteredProducts(): IProduct[] {
    if (this.filter === '') {
      return this.products;
    }
    return this.products.filter((product: any) =>
      product.category.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}
