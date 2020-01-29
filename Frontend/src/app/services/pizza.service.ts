import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private http: HttpClient) { }

  getPizzas() {
    const url = '/Servicio/pizza/getPizzas';
    return this.http.get(url).pipe(map((resp: any) => {
      let pizzasList: Pizza[] = <Pizza[]>resp.data
      return pizzasList;
    }));
  }

  getPizza(id: string) {
    const url = '/Servicio/pizza/getPizza/' + id;
    return this.http.get(url).pipe(map((resp: any) => {
      console.log(resp);
      let pizza = new Pizza();
      pizza.Name = <string>resp.data.name;
      pizza.Description = <string>resp.data.description;
      return pizza;
    }));
  }

  addPizza(pizza: Pizza) {
    const url = '/Servicio/pizza/addPizza/';
    return this.http.post(url, pizza).pipe(map((resp: any) => {
      pizza = <Pizza>resp.data;
      return pizza;
    }));
  }

  deletePizza(pizza: Pizza) {
    const url = '/Servicio/pizza/deletePizza/' + pizza._id;
    return this.http.delete(url).pipe(map((resp: any) => {
      console.log('deleting');
      return resp.result;
    }));
  }
}
