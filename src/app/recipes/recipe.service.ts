import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a Test',
      'https://static.onecms.io/wp-content/uploads/sites/44/2022/03/01/cucumber-sandwich.jpg',
      [new Ingredient('Eggs', 2), new Ingredient('liver', 3)]
    ),
    new Recipe(
      'Toast Mayai',
      'This is Toast Mayai',
      'https://i.guim.co.uk/img/media/ab57a5ddd2dda167ceae93b79579256261fcb66c/536_716_6442_3867/master/6442.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ac2414eb9522d2a576af91a0ffeb1d7f',
      [new Ingredient('mayai', 7), new Ingredient('manduai', 4)]
    ),
  ];
  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientsToShoppinglist(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
