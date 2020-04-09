import { Injectable } from '@angular/core';
import {List} from './list';
import {Recipe} from './recipe';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  list: Recipe[];
  constructor() {
    this.chooseList(1);
  }
  getRecipes(): Observable<Recipe[]>{
    return of(List);
  }

  getRecipe(id: number): Observable<Recipe[]> {
    this.list = List.filter(
      recipe => recipe.category.id === id
    );
    return of (this.list);
  }
  chooseList(id: number): void {
    this.getRecipe(id).subscribe(list => this.list = list);
  }

  addRecipe(recipe: Recipe): void {
    this.list.push(recipe);
    alert('Recipe added');
  }

}
