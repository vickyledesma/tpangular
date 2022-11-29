import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodListComponent } from './food-list/food-list.component';

import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { RouterModule} from '@angular/router';
import { HappydogAboutComponent } from './happydog-about/happydog-about.component';
import { HappydogFoodComponent } from './happydog-food/happydog-food.component';
import {AppRoutingModule } from './app-routing.module';
import { InputIntegerComponent } from './input-integer/input-integer.component'



@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    CartComponent,
    HappydogAboutComponent,
    HappydogFoodComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
