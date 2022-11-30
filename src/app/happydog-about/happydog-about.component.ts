import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FoodDataService } from '../food-data.service';
import { form } from './form';


@Component({
  selector: 'app-happydog-about',
  templateUrl: './happydog-about.component.html',
  styleUrls: ['./happydog-about.component.css']  
})
export class HappydogAboutComponent implements OnInit {
form: any; 

  constructor(private foodservice: FoodDataService,) { 
    
  }

  ngOnInit(): void {
    
  }
  public Agregar(form: {resea: string}){
    this.foodservice.Agregar(form);
     };
 }

