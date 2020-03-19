import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductDetailsService} from '../product-details.service'
import {Product } from '../product'
 

@Component({
  selector: 'app-hero-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product; 


  constructor(private route: ActivatedRoute, private productDetService: ProductDetailsService) { }

  ngOnInit() {
    this.product = this.productDetService.returnProduct();
  }
}
