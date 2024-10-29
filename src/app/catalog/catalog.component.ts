import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IProduct } from './product.model';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductService } from './product.service';
import { CartService } from '../cart/cart.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, ProductDetailsComponent, RouterLink],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent implements OnInit {
  products: any;
  filter: string = '';
  // private cartSvc: CartService = inject(CartService); // This line is added to the constructor

  constructor(private cartSvc: CartService, private prodSvc: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prodSvc.getProducts().subscribe((products) => {
      this.products = products;
    });
    // this.filter = this.route.snapshot.params['filter'] || '';
    this.route.params.subscribe((params) => {
      this.filter = params['filter'] || '';
    });
  }

  addToCart(product: IProduct) {
    console.log(`Product with id ${product.id} added to cart`);
    this.cartSvc.add(product);
    this.router.navigate(['/cart']);
  }

  getFilteredProducts(): IProduct[] {
    if (this.filter === '') {
      return this.products;
    }
    return this.products?.filter((product: any) =>
      product.category.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}
