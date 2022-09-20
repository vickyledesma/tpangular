import { Component, OnInit } from '@angular/core';
import { food } from '../food';

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
    "stock" : 5,
    "price" : 203,
    "offer": true,
    "quantity" : 0,
    
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
    
   },
  {
    
    "name" : "Royal Canin",
    "brand" : "Royal Canin",
    "age": "Adulto",
    "image" :"https://www.alimentoraza.com/wp-content/uploads/2022/03/RAZA-PERROS-Razas-pequenas_3D_Sin-Kg-250x308.jpg",
    "price" : 203,
    "stock" : 0,
    "offer": false,
    "quantity" : 0,
    
    }]
  
  constructor() { }

  ngOnInit(): void {
  }
 Downquantity(food: food): void {
  if(food.quantity > 0)
    food.quantity--;
  
  }
  Upquantity(food: food): void {
    if(food.quantity < food.stock){ 
    food.quantity++;
   }
  }
  

  
    }



