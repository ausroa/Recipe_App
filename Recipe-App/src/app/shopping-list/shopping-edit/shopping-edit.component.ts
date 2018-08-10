import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredients = new EventEmitter<Ingredient>();
  ingredients: Ingredient;
  name: string;
  amount: number;
  constructor() { }

  ngOnInit() {
  }

  onAdd(name, amount) {
    this.name = name;
    this.amount = amount;

    this.ingredients = new Ingredient(name, amount);

    this.addIngredients.emit(this.ingredients);
  }
}
