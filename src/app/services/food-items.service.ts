import { Injectable } from '@angular/core';
import { FoodItem } from '../models/food-item';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodList } from '../models/food-list';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class FoodItemsService {
  baseUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  getall = (): Observable<FoodList[]> => {
    let foods: Observable<FoodList[]>;

    foods = this.http.get<FoodList[]>(`${this.baseUrl}/my_foods`, httpOptions);

    return foods;
  };
}
