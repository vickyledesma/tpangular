import { Injectable } from '@angular/core';
import { food } from './food';


@Injectable({
  providedIn: 'root'
})
export class FoodCartService {

   cartList :  food [] = [];
  constructor() { }

  addToCart(food : food) {
    let item = this.cartList.find((v1) => v1.name == food.name);
    if (!item) {
      this.cartList.push({...food});
    } else {
      item.quantity += food.quantity;

    }
    console.log(this.cartList);
    

  }

} 
