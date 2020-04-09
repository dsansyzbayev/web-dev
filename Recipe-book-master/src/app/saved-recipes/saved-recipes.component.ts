import {Component, OnInit} from '@angular/core';
import {List} from '../list';

@Component({
  selector: 'app-saved-recipes',
  templateUrl: './saved-recipes.component.html',
  styleUrls: ['./saved-recipes.component.css']
})
export class SavedRecipesComponent implements OnInit {
  savedRecipes = List;

  constructor() {
  }

  ngOnInit(): void {
  }

}
