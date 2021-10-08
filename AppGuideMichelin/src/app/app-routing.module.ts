import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RestaurantSmartComponent} from "./GuideMichelin/pages/restaurant-smart/restaurant-smart.component";

//Définition des routes
const routes: Routes = [
  {path: '', component: RestaurantSmartComponent, pathMatch: "full"},
  //{path: 'restaurant/:id', component: RestaurantSmartComponent},
  //{path: '', component: RestaurantSmartComponent},
  //{path: '', component: RestaurantSmartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
