import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-edit/shopping-list.service';
import { Recipe } from './recipe.model'

@Injectable()
export class RecipeServices {

    recipeSelected = new EventEmitter<Recipe>()

    recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty Schnitzel - just awesome!',
            'https://pngimg.com/uploads/schnitzel/schnitzel_PNG7.png',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger',
            'What else you need to say ?',
            'https://www.pngall.com/wp-content/uploads/2016/05/Burger-PNG.png',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
      ];
    
      constructor(private shoppingListService: ShoppingListService) { 
        
      }
      
      
      ngOnInit(): void {
      }
    
      getRecipe() {
          return this.recipes.slice()
      }
      
      addIngridientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients)
      }
}