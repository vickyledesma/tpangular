import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

import {FormsModule} from '@angular/forms';

import { CartComponent } from './cart/cart.component';
import { RouterModule} from '@angular/router';
import { HappydogAboutComponent } from './happydog-about/happydog-about.component';
import { HappydogFoodComponent } from './happydog-food/happydog-food.component';



@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    CartComponent,
    HappydogAboutComponent,
    HappydogFoodComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
