import { Injectable } from '@angular/core';
import {Restaurant} from "../models/Restaurant.model";
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Evaluation} from "../models/Evaluation.model";

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants: BehaviorSubject<Restaurant[]> = new BehaviorSubject<Restaurant[]>([]);

  constructor(private httpClient: HttpClient) {
    this.loadRestaurants();
  }

  public getRestaurants(): Observable<Restaurant[]>{
    return this.restaurants;
  }



  public loadRestaurants(): void {
    this.httpClient.get<Restaurant[]>("http://localhost:3005/restaurants").subscribe(value => this.restaurants.next(value))
  }

  public addRestaurant(restaurant: Restaurant): void{
    this.httpClient.post("http://localhost:3005/restaurants", restaurant).subscribe(value => this.restaurants.next([...this.restaurants.getValue(),restaurant]))
  }
}
