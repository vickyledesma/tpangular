import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { food } from './food';
import { reseñas } from './reseñas';

 const URL = 'https://62b5e10d42c6473c4b3c2a73.mockapi.io/api/data';
@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor( private http:HttpClient) { }

  public getAll(): Observable<food[]> {
    return this.http.get<food[]>(URL).
      pipe(
        tap((foods: food[]) => foods.forEach(food => food.quantity = 0))
    );
}
public Addresea(reseñas: { reseña: string; }){
  return this.http.post<food[]>(URL,reseñas)

    
  }

}