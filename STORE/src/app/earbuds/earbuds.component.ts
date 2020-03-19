import { Component, OnInit } from '@angular/core';
import {earBuds} from '..//products';
import {Product}  from '../product';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-earbuds',
  templateUrl: './earbuds.component.html',
  styleUrls: ['./earbuds.component.css']
})
export class EarbudsComponent{

  earbuds = earBuds;
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
