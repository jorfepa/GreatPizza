import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingService {

  constructor(private http: HttpClient) { }

  getToppings() {
    const url = '/Service/topping/getToppings';
    return this.http.get(url).pipe(map((resp: any) => {
      let toppingsList: Topping[] = <Topping[]>resp.data;
      return toppingsList;
    }));
  }

  addTopping(topping: Topping) {
    const url = '/Service/topping/addTopping/';
    return this.http.post(url, topping).pipe(map((resp: any) => {
      topping = <Topping>resp.data;
      return topping;
    }));
  }

  deleteTopping(topping: Topping) {
    const url = '/Service/topping/deleteTopping/' + topping._id;
    return this.http.delete(url).pipe(map((resp: any) => {
      console.log('deleted');
      return resp.result;
    }));
  }
}
