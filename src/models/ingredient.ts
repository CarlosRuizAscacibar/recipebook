export class Ingredient {
  constructor(public name: string, public amount: number){}

  copy(){
    return new Ingredient(this.name, this.amount);
  }
}
