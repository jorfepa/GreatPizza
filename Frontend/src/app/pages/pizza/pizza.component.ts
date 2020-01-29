import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizza = new Pizza()
  constructor(private pizzaService: PizzaService,
              private router: Router) {
  }

  // Declaration of messages
  Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000
  })

  ngOnInit() {
  }

  save(f: NgForm) {
    this.pizzaService.addPizza(this.pizza)
      .subscribe(pizza => {
        if (pizza._id.length > 0)
        this.Toast.fire({
          icon: 'success',
          title: 'Saved successfully'
        });
        this.router.navigate(['/list-pizzas']);
      });
  }

  cancel(f: NgForm) {
    this.router.navigate(['/list-pizzas']);
  }

}
