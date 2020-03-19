import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CATEGORIES} from '../categories'

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  id;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('categoryId');
    });
  }
}
