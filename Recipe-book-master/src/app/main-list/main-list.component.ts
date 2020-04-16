import {Component, OnInit} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  recipes: Recipe[];
  constructor(
    public recipeService: RecipeService
  ) {
  }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipes(): void {
    this.recipeService.getRecipes()
      .subscribe(recipes => this.recipes = recipes);
  }


}
