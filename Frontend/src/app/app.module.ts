import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";

import { PizzaComponent } from './pages/pizza/pizza.component';
import { ListPizzaComponent } from "./pages/pizza/list-pizza.component";
import { ToppingComponent } from './pages/topping/topping.component';
import { FormsModule } from '@angular/forms';
import { PizzaDetalisComponent } from './pages/pizza/pizza-detalis.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    ListPizzaComponent,
    ToppingComponent,
    PizzaDetalisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
