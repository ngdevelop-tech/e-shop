import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  products: Product[];
  loading: boolean;
  subscription: Subscription;
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.initializeProducts();
  }

  initializeProducts(){
    console.log('ngOnInit Started...')
    this.loading = true;
    this.subscription = this.productService.getProducts().subscribe(products=> {
      this.products = products;
      this.loading = false;
    });
    console.log('ngOnInit Completed...')
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
