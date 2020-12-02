import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Product } from '../models/product.model';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      name: 'HP Laptop',
      model: 'E5123A',
      type: 'laptop',
      price: 50000,
      imgUrl: 'https://rukminim1.flixcart.com/image/312/312/k5fn3ww0/computer/c/n/f/hp-na-original-imafz4duhht4zbnx.jpeg?q=70'
    },
    {
      id: 2,
      name: 'Dell Laptop',
      model: 'D123A',
      type: 'laptop',
      price: 55000,
      imgUrl: 'https://rukminim1.flixcart.com/image/312/312/k5fn3ww0/computer/c/n/f/hp-na-original-imafz4duhht4zbnx.jpeg?q=70'
    }
  ];

  constructor() { }

  getProducts(){
    // console.log('Get Products Started...');
    // for (let index = 0; index < 10000; index++) {
    //   console.log(index);
    // }
    // console.log('Get Products Completed...');
    return of(this.products).pipe(
      delay(1000)
    );
  }

  addProduct(product: Product){

  }

  deleteProduct(id: number){
    let index = this.products.findIndex(p=> p.id === id );
    if(index !== -1){
      this.products.splice(index, 1);
      return of({success: true});
    }else{
      return of({success: false});
    }

  }
}
