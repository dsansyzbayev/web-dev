import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {Comment} from '../comment';
import {mockUser} from '../mock-users';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  selectedItem = List[0];
  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    this.findRecipe();
  }

  findRecipe() {
    let id = this.route.snapshot.paramMap.get('recipeId');
    id = id.substr(1);
    this.recipeService.getRecipe(id).subscribe(recipe => this.selectedItem = recipe);
  }

  back(): void {
    this.location.back();
  }

  save() {
    alert('saved');
  }

  send(): void {
    const id = (document.getElementById('comment') as HTMLInputElement).value;
    this.selectedItem.comments.push({
      id: 4,
      author: mockUser,
      title: 'comment',
      text: id,
      likes: 0
    });
  }
}
