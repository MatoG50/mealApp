import { Component, Input, OnInit } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  constructor(private recipeService: RecipeService) {}
  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppinglist(this.recipe.ingredients);
  }
  ngOnInit(): void {}
}
