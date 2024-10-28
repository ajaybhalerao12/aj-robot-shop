import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buyProduct = new EventEmitter();

  getImageUrl(product: IProduct): string {
    if (!product) {
      return '';
    }
    return `/images/robot-parts/${product.imageName}`;
  }
  getDiscountedClasses(
    product: IProduct
  ):
    | string
    | string[]
    | Set<string>
    | { [klass: string]: any }
    | null
    | undefined {
    if (product.discount > 0) {
      return ['strikethrough'];
    } else {
      return '';
    }
  }

  buyProductClicked(product: IProduct): void {
    console.log(`Product ${product.name} added to cart`);
    this.buyProduct.emit();
  }
}
