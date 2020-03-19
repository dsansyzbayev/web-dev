import { Component, OnInit } from '@angular/core';
import {laptops} from '../products';
import {Product}  from '../product';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent {
  
  laptops = laptops;

  constructor(private productDetService: ProductDetailsService) { }

  onSelect(product : Product): void {
    this.productDetService.initializeProduct(product);
  }


  share(productName) {
    window.alert('The ' + productName +' has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
