import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  product;
  
  public initializeProduct(product : Product) : void{
    this.product = product;
  }

  public returnProduct() : Product{
    return this.product;
  }
}
