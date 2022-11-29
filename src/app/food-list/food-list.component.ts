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

  foods : food[] = [ {

    "name" : "RAZA",
    "brand" : "RAZA",
    "age": "Adulto",
    "image" :"https://www.alimentoraza.com/wp-content/uploads/2022/03/RAZA-PERROS-Razas-pequenas_3D_Sin-Kg-250x308.jpg",
    "stock" : 1,
    "price" : 203,
    "offer": true,
    "quantity" : 0,
    "clearance" : false,
    
  },
  {
    
    "name" : "Estampa Premium",
    "brand" : "Estampa",
    "age": "Cachorro",
    "image" :"https://www.alimentoraza.com/wp-content/uploads/2022/03/RAZA-PERROS-Razas-pequenas_3D_Sin-Kg-250x308.jpg",
    "stock" : 4,
    "price" : 203,
    "offer" : false,
    "quantity" : 0,
    "clearance" : false,
    
    
   },
  {
    
    "name" : "Royal Canin",
    "brand" : "Royal Canin",
    "age": "Adulto",
    "image" :"https://www.alimentoraza.com/wp-content/uploads/2022/03/RAZA-PERROS-Razas-pequenas_3D_Sin-Kg-250x308.jpg",
    "price" : 203,
    "stock" : 1,
    "offer": false,
    "quantity" : 0,
    "clearance" : true,
    
    
}]
  
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



