import { Component, OnInit } from '@angular/core';
import {mobiles} from '../products';
import {Product}  from '../product';
import {ProductDetailsService} from '../product-details.service'

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent {
  mobiles = mobiles;
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
