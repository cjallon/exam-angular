import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantTableComponent } from './GuideMichelin/components/restaurant-table/restaurant-table.component';
import { RestaurantSmartComponent } from './GuideMichelin/pages/restaurant-smart/restaurant-smart.component';
import {HttpClientModule} from "@angular/common/http";
import { RestaurantFormComponent } from './GuideMichelin/components/restaurant-form/restaurant-form.component';
import {FormsModule} from "@angular/forms";
import { CouleursDirective } from './GuideMichelin/directive/couleurs.directive';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableComponent,
    RestaurantSmartComponent,
    RestaurantFormComponent,
    CouleursDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
