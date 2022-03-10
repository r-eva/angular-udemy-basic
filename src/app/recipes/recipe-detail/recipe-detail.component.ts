import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeServices } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe
  constructor(private recipeService: RecipeServices) { }

  ngOnInit(): void {
  }

  onAddShoppingList() {
    this.recipeService.addIngridientsToShoppingList(this.recipe.ingredients)
  }

}
