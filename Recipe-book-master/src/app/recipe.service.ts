import {Injectable} from '@angular/core';
import {List} from './list';
import {Recipe} from './recipe';
import {Observable, of} from 'rxjs';
import {Category} from './category';
import {filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  list: Recipe[];

  constructor() {
    this.chooseList(1);
  }

  getRecipes(): Observable<Recipe[]> {
    return of(this.list);
  }

  getRecipe(id: string): Observable<Recipe> {
    return of(List.find(recipe => recipe.id.toString() === id));
  }

  getList(id: number): Observable<Recipe[]> {
    this.list = List.filter(recipe => recipe.category.id === id);
    return of(this.list);
  }

  chooseList(id: number): void {
    this.getList(id).subscribe(list => this.list = list);
  }

}
