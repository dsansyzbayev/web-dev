import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { mockUser} from '../mock-users';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css']
})
export class MyRecipesComponent implements OnInit {

  constructor() { }
  title = new FormControl('');
  description = new FormControl('');

  ngOnInit(): void {
  }

  newRecipe() {
    // tslint:disable-next-line:max-line-length
    mockUser.user_recipes.push({id: Math.random(), title: this.title.value, description: this.description.value, ingredients: [], steps: [], likes: 0, comments: [], front_image: '', images: [], category: null});
  }
}
