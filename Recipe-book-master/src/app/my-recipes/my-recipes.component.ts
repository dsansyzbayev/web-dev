import {Component, OnInit, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {mockUser} from '../mock-users';
import {List} from '../list';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {
  savedRecipes: Recipe[];
  categories: Category[];
  userRecipes: Recipe[];
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
    this.savedRecipes = mockUser.saved_recipes;
    this.userRecipes = mockUser.user_recipes;
    this.userRecipes.push(List[3]);
    this.userRecipes.push(List[7]);
    this.userRecipes.push(List[9]);
  }

  getCategories() {
    this.categoryService.getCategories()
      .subscribe((category) => {
        this.categories = category;
      });
  }

  newRecipe() {
    mockUser.user_recipes.push(this.recipe);
  }
  delete(recipe: Recipe) {
  }

}
