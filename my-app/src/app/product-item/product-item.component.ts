import { Component, OnInit } from '@angular/core';
import { ShareButtons } from '@ngx-share/core';

import {products} from '../products';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products = products;
  
  constructor(public share: ShareButtons) { }

  ngOnInit(): void {
  }

}
