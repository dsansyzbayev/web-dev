import { Component, OnInit } from '@angular/core';
import {Category} from '../category';
import { CategoryService } from '../category.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: Category[];
  constructor(private catService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories():void{
    this.catService.getCategories()
        .subscribe(categories => this.categories = categories);
  }

}
