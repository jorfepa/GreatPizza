import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/models/pizza.model';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {

  pizzasList: Pizza[] = [];

  // Declaration of messages
  Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000
  });

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.loadList();
  }

  loadList() {
    this.pizzaService.getPizzas()
      .subscribe(pizzasList => {
        this.pizzasList = pizzasList;
      });
  }

  deletePizza(pizza) {
    // Message for the user
    Swal.fire({
      title: 'Do you want to delete this pizza?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        // Deleting pizza
        this.pizzaService.deletePizza(pizza).subscribe(resp => {
          this.loadList();
        });
        // Confirmation Message
        this.Toast.fire({
          icon: 'info',
          title: 'Deleted successfully'
        })
      }
    });
  }

}
