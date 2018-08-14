import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientAdded = new EventEmitter<Ingredient[]>();

  private ingredients:  Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  addIngredients(newIngredients: Ingredient) {
    this.ingredients.push(newIngredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
