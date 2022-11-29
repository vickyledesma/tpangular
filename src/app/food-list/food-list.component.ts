import { Component, OnInit } from '@angular/core';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { food } from '../food';
import { FoodCartService } from '../food-cart.service';
import { FoodDataService } from '../food-data.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods: food[] = [];

  
  constructor( 
    private cart: FoodCartService,
    private foodservice: FoodDataService,
    )
  {
  
   }

  ngOnInit(): void {
    this.foodservice.getAll()
    .subscribe(foods => this.foods = foods);
  }
  
  addToCart(food: food) : void {
    this.cart.addToCart(food);
    food.stock -= food.quantity;
    food.stock = 0;
  }

  maxReached(m: string) {
    alert(m);
    }
  

  
    }



