import { Component, OnInit } from '@angular/core';
import {smartWatches} from '../products';
import {Product} from '../product';
import {ProductDetailsService} from '../product-details.service';

@Component({
  selector: 'app-smartwatch',
  templateUrl: './smartwatch.component.html',
  styleUrls: ['./smartwatch.component.css']
})
export class SmartwatchComponent {
  smartWatches = smartWatches;
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
