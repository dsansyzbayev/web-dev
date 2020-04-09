import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {mockUser} from '../mock-users';
import {List} from '../list';
import { RecipeService} from '../recipe.service';
import {Recipe} from '../recipe';
import { CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {
  savedRecipes: Recipe[];
  categories: Category[];
  @Input() recipe: Recipe;

  constructor(
    private categoryService: CategoryService,
    private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.getRecipes();
    this.getCategories();
  }
  getRecipes() {
    this.recipeService.getRecipes()
      .subscribe((recipe) => {
        this.savedRecipes = recipe;
      });
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe((category) => {
        this.categories = category;
      });
  }

  newRecipe() {
    this.recipeService.addRecipe(this.recipe);
  }

}
