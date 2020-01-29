import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPizzaComponent } from './pages/pizza/list-pizza.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { ToppingComponent } from './pages/topping/topping.component';
import { PizzaDetalisComponent } from './pages/pizza/pizza-detalis.component';


const routes: Routes = [
  {path: 'list-pizzas', component: ListPizzaComponent, data: {tittle: 'List of Pizzas'}},
  {path: 'pizza/:id', component: PizzaComponent, data: {tittle: 'Edit Pizza'}},
  {path: 'pizza-details/:id', component: PizzaDetalisComponent, data: {tittle: 'Pizza details'}},
  {path: 'topping/:id', component: ToppingComponent, data: {tittle: 'Edit Topping'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
