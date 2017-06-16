import {Ingredient} from "../models/ingredient";

export class ShoppingListService{

  ingredients: Ingredient[]

  constructor(){
    this.ingredients = [];
  }

  addIngredient(i: Ingredient){
    this.ingredients.push(i);
  }

  addIngredients(ings: Ingredient[]){
      var self = this;
      ings.forEach((i)=>{self.addIngredient(i)});
  }
  removeIngredient(i: Ingredient){
    var index = this.ingredients.findIndex((a)=>{return a.name === i.name});
    if(index >= 0){
      this.ingredients.splice(index,1);
    }
  }

  getIngredient(index: number){
    var ingredient: Ingredient = this.ingredients[index];
    return ingredient.copy();
  }

  getIngredientByName(name: string){
    return this.ingredients.find((a)=>{return a.name === name});
  }

  getIngredients(){
    return this.ingredients.map((a)=>{return a.copy()});
  }

}
