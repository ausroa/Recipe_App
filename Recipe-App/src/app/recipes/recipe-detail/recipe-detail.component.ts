import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';
import {ShoppingListService} from '../../shopping-list/shopping-list.service';
import {RecipesService} from '../recipes.service';
import {Ingredient} from '../../shared/ingredient.model';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() ingredients: Ingredient;
  recipes: Recipe[] = [];

  constructor(private shoppingListService: ShoppingListService,
              private recipeService: RecipesService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onSendToShoppingList() {
    this.recipeService.getIngredients(this.recipe.ingredients);
  }
}
