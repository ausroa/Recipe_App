import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Recipe} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeDetail = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onSelection() {
    this.recipeDetail.emit();
  }
}
