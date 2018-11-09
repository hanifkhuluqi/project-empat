import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable(

)
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('Rawon','Rawon is a traditional food from East Java in the form of meat soup with black sauce. The black color of Rawon sauce is made from kluwak and cooked with special spices to produce a distinctive aroma and taste so it is very appetizing.'
    ,'../src/app/img/rawon.jpg',
  [
    new Ingredient('meal',1),
    new Ingredient('pepper',2),
    new Ingredient('kluwek',2),
  ]),
  new Recipe('Burger','Burger or Hamburger is a kind of Sandwich food. Consisting of round bread slightly flat and halved. In the middle there is a slice of seasoned minced meat, served with slada leaves, sliced ​​tomatoes, cucumber and various sauces.'
  ,'../src/app/img/burger.jpg',
  
[
  new Ingredient('beff',1),
  new Ingredient('cheese',3),
  new Ingredient('egg',1),
  new Ingredient('tomato',1)
]),  
];

  getRecipes(){
    return this.recipes.slice();
  }
  //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  //tambahkan parameter pada construktor
constructor(private slsService: ShoppingListService) { }

}