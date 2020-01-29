import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPizzaComponent } from './pages/pizza/list-pizza.component';
import { PizzaComponent } from './pages/pizza/pizza.component';
import { ToppingComponent } from './pages/topping/topping.component';
import { PizzaDetailsComponent } from './pages/pizza/pizza-details.component';
import { ListToppingsComponent } from './pages/topping/list-toppings.component';

const routes: Routes = [
  {path: 'list-pizzas', component: ListPizzaComponent, data: {tittle: 'List of Pizzas'}},
  {path: 'pizza/:id', component: PizzaComponent, data: {tittle: 'Edit Pizza'}},
  {path: 'pizza-details/:id', component: PizzaDetailsComponent, data: {tittle: 'Pizza details'}},
  {path: 'topping', component: ToppingComponent, data: {tittle: 'Edit Topping'}},
  {path: 'list-toppings/:id', component: ListToppingsComponent, data: {tittle: 'List of Topping'}},
  {path: 'list-toppings', component: ListToppingsComponent, data: {tittle: 'List of Topping'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
