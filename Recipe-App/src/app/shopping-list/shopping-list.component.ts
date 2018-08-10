import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Input() newIngredients: Ingredient;

  ingredients:  Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }

  addIngredients(newIngredients: Ingredient) {
    this.ingredients.push(newIngredients);
  }
}
