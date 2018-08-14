import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  ingredients: Ingredient;
  name: string;
  amount: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAdd(name, amount) {
    this.name = name;
    this.amount = amount;

    this.ingredients = new Ingredient(name, amount);

    this.shoppingListService.addIngredients(this.ingredients);
  }
}
