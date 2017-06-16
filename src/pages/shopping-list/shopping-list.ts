import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";

import { ShoppingListService } from "../../services/shopping-list";
import { Ingredient } from "../../models/ingredient";
/**
 * Generated class for the ShoppingList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingList {
  private listIngredients: Ingredient[] = [];
  constructor(private slService: ShoppingListService){

}

  onAddItem(form: NgForm){
    this.slService.addIngredient(new Ingredient(form.value.ingredientName, parseInt(form.value.amount)));
    this.refreshIngredients();
    form.reset();
  }

  ionViewWillEnter(){
    this.refreshIngredients();
  }

  private refreshIngredients(){
    this.listIngredients = this.slService.getIngredients();
  }

  onClickIngredient(ingredient: Ingredient){
    this.slService.removeIngredient(ingredient);
    this.refreshIngredients();
  }

}
