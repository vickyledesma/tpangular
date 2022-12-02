import { Component, OnInit } from '@angular/core';
import { FoodDataService } from '../food-data.service';
import { forms } from '../form';


@Component({
  selector: 'app-happydog-about',
  templateUrl: './happydog-about.component.html',
  styleUrls: ['./happydog-about.component.css']  
})
export class HappydogAboutComponent implements OnInit {

  form: forms[] = [];
  

  constructor(private foodservice: FoodDataService,) { 
    
  }

  ngOnInit(): void {

  }
  public Agregar(forms: {resea: string}){
    this.foodservice.Agregar(forms);
  }
  public mensaje(){
    alert('Su reseña ha sido enviada');
  }
}

