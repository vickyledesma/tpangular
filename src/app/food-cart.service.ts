import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { food } from './food';


@Injectable({
  providedIn: 'root'
})
export class FoodCartService {

  private _cartList : food[] = [];
  cartList: BehaviorSubject<food[]> = new BehaviorSubject(this._cartList);
  constructor() { }

  addToCart(food : food) {
    let item = this._cartList.find((v1) => v1.name == food.name);
    if (!item) {
      this._cartList.push({...food});
    } else {
      item.quantity += food.quantity;

    }
    console.log(this._cartList);
    

  }

} 
