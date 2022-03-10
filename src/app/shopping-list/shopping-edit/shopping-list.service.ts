import { Injectable, EventEmitter } from "@angular/core";
import { Ingredient } from "../../shared/ingredient.model";


@Injectable()

export class ShoppingListService {

    ingredientsChange = new EventEmitter<Ingredient[]>()

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
      ];

    getIngredient() {
        return this.ingredients.slice()
    }

    onIngredientAdded(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChange.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients)
        this.ingredientsChange.emit(this.ingredients.slice())
    }
}