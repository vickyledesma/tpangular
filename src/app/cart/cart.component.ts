import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { food } from '../food';
import { FoodCartService } from '../food-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList$: Observable<food[]>;
  constructor(private cart: FoodCartService) { 
   this.cartList$ = cart.cartList.asObservable();
  }

  ngOnInit(): void {
  }

}
