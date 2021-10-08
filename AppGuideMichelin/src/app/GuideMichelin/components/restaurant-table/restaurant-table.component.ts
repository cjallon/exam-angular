import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from "../../models/Restaurant.model";
import {RestaurantService} from "../../services/restaurant.service";
import {CouleursDirective} from "../../directive/couleurs.directive";

@Component({
  selector: 'app-restaurant-table',
  templateUrl: './restaurant-table.component.html',
  styleUrls: ['./restaurant-table.component.css']
})
export class RestaurantTableComponent implements OnInit {

  @Input() restaurants: Restaurant[] = [];

  constructor() {
  }

  public calculMoyenne() {

  }

  ngOnInit(): void {
  }

}


//.subscribe(
//     ressources => {this.users = ressources},
//     err =>{console.log(err)}
