import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pizza } from '../models/pizza.model';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzas() {
    const url = '/Service/pizza/getPizzas';
    return this.http.get(url).pipe(map((resp: any) => {
      let pizzasList: Pizza[] = <Pizza[]>resp.data
      return pizzasList;
    }));
  }

  getPizza(id: string) {
    const url = '/Service/pizza/getPizza/' + id;
    return this.http.get(url).pipe(map((resp: any) => {
      let pizza = new Pizza();
      pizza._id = <string>resp.data._id;
      pizza.Name = <string>resp.data.name;
      pizza.Description = <string>resp.data.description;
      return pizza;
    }));
  }

  addPizza(pizza: Pizza) {
    const url = '/Service/pizza/addPizza/';
    return this.http.post(url, pizza).pipe(map((resp: any) => {
      pizza = <Pizza>resp.data;
      return pizza;
    }));
  }

  deletePizza(pizza: Pizza) {
    const url = '/Service/pizza/deletePizza/' + pizza._id;
    return this.http.delete(url).pipe(map((resp: any) => {
      console.log('deleted');
      return resp.result;
    }));
  }

  addToppingToPizza(topping: Topping, id: string){
    const url = '/Service/pizza/addToppingToPizza/' + id;
    return this.http.put(url, {"idTopping": topping._id}).pipe(map((resp: any) => {
      console.log('Added');
      return resp.result;
    }));
  }

  deleteToppingFromPizza(topping: Topping, pizza: Pizza){
    const url = '/Service/pizza/deleteToppingFromPizza/' + pizza._id;
    return this.http.put(url, {"_id": topping._id}).pipe(map((resp: any) => {
      console.log('deleted');
      return resp.result;
    }));
  }

  getToppingsForPizza(id: string) {
    const url = '/Service/pizza/getToppingsForPizza/' + id;
    return this.http.get(url).pipe(map((resp: any) => {
      let topping: Topping[] = [];
      topping = <Topping[]>resp.data;
      return topping;
    }));
  }

  getAvailableToppingsForPizza(id: string) {
    const url = '/Service/pizza/getAvailableToppingsForPizza/' + id;
    return this.http.get(url).pipe(map((resp: any) => {
      let topping: Topping[] = [];
      topping = <Topping[]>resp.data;
      return topping;
    }));
  }
}
