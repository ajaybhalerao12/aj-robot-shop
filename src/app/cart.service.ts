import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';
import { HttpClient } from '@angular/common/http';

interface ILineItem {
  id: number;
  qty: number;
  product: IProduct;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // private cart: ILineItem[] = [];
  private cart: IProduct[] = [];

  constructor(private http: HttpClient) {}

  // getTotalPrice() {
  //   return (
  //     Math.round(
  //       this.cart.reduce<number>((prev, cur) => {
  //         return (
  //           prev + cur.qty * (cur.product.price * (1 - cur.product.discount))
  //         );
  //         0;
  //       }, 0) * 100
  //     ) / 100
  //   );
  // }

  // findLineItem(product:IProduct) {
  //   return this.cart.find((lineItem) => lineItem.product.id === product.id);
  // }

  add(product: IProduct) {
    this.cart.push(product);
    this.http.post('/api/cart', this.cart).subscribe(()=>{
      console.log(`Product with id ${product.id} added to cart`);
    });
    // let lineItem = this.findLineItem(product);
    // if(lineItem != undefined){
    //   lineItem.qty++;
    // }else{
    //   lineItem = { product: product, qty: 1, id: product.id };
    //   this.cart.push(lineItem);
    // }
    // console.log(`Product with id ${product.id} added to cart`);
    // console.log(`Total price: ${this.getTotalPrice()}`);
    // this.cart.push(product);
    // console.log(`Product with id ${product.id} added to cart`);
  }
}
