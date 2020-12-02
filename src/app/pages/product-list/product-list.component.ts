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
  constructor(private productService: ProductService) {
    this.subscription = new Subscription();
   }

  ngOnInit(): void {
    this.reloadProducts();
  }

  reloadProducts(){
    console.log('ngOnInit Started...')
    this.loading = true;
    this.subscription.add(this.productService.getProducts().subscribe(products=> {
      this.products = products;
      this.loading = false;
    }));
    console.log('ngOnInit Completed...')
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onDelete(id: number){
    console.log(id, 'needs to be deleted...');
    this.productService.deleteProduct(id).subscribe(result=> {
      if(result){
        console.log(`${id} is deleted...`);
        this.reloadProducts();
      }else{
        console.log(`${id} not found...`);
      }
    })
  }

}
