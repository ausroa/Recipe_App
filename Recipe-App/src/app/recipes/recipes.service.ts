import {EventEmitter, Injectable, Input} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Steak', 'This is simply a test', 'https://cdn.pixabay.com/photo/2017/07/16/10/43/recipe-2508859_960_720.jpg', [
      new Ingredient('Steak', 1),
      new Ingredient('Parsley', 1),
      new Ingredient('Garlic', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredient(ingredients);
  }
}
