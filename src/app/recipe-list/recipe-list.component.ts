import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a Test',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg'
    ),
    new Recipe(
      'Toast Mayai',
      'This is Toast Mayai',
      'https://i.guim.co.uk/img/media/ab57a5ddd2dda167ceae93b79579256261fcb66c/536_716_6442_3867/master/6442.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ac2414eb9522d2a576af91a0ffeb1d7f'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
