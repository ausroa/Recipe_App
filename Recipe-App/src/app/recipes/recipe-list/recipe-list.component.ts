import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeDetailSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Steak', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg')
  ];

  onRecipeDetail(recipe: Recipe) {
    this.recipeDetailSelected.emit(recipe);
  }

  constructor() { }

  ngOnInit() {
  }

}
