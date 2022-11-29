import { Component, OnInit } from '@angular/core';
import { FoodDataService } from '../food-data.service';
import { reseñas } from '../reseñas';

@Component({
  selector: 'app-happydog-about',
  templateUrl: './happydog-about.component.html',
  styleUrls: ['./happydog-about.component.css']
})
export class HappydogAboutComponent implements OnInit {
  reseñas: reseñas[] = [];

  constructor( private foodservice: FoodDataService) { 
    
  }

  ngOnInit(): void {
    
  }

  public Addresea(){
    const  reseñas = { 'reseña': 'hlola',
    }
    this.foodservice.Addresea(reseñas).subscribe(body=>console.log(reseñas));
  }
  
  
}