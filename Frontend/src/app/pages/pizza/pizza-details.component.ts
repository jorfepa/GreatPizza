import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';
import { Topping } from 'src/app/models/topping.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.scss']
})
export class PizzaDetailsComponent implements OnInit {

  pizza = new Pizza();
  toppings: Topping[] = [];

  // Declaration of messages
  Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000
  });

  constructor(private pizzaService: PizzaService,
    private router: Router,
    public activatedRoute: ActivatedRoute) {
    // Getting the pizza id from router
    activatedRoute.params.subscribe(params => this.pizza._id = params.id);
  }

  ngOnInit() {
    this.loadPizza();
  }

  // This method loads the pizza with the pizza id
  loadPizza() {
    if (this.pizza._id.length > 0) {
      this.pizzaService.getPizza(this.pizza._id)
        .subscribe(pizza => {
          this.pizza = pizza;
          this.loadToppings(pizza._id);
        })
    }
  }

  // This method loads the list of toppings with the pizza id
  loadToppings(id: string) {
    this.pizzaService.getToppingsForPizza(id)
      .subscribe(toppings => { this.toppings = toppings });
  }

  deleteTopping(topping: Topping) {
    Swal.fire({
      title: 'Do you want to delete this topping from ' + this.pizza.Name + ' Pizza?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        // Deleting topping from pizza
        this.pizzaService.deleteToppingFromPizza(topping, this.pizza)
          .subscribe(resp => {
            this.loadToppings(this.pizza._id);
          });
        //Message
        this.Toast.fire({
          icon: 'info',
          title: 'Deleted successfully'
        })
      }
    });
  }
}
