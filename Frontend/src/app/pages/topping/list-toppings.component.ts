import { Component, OnInit } from '@angular/core';
import { ToppingService } from 'src/app/services/topping.service';
import { Topping } from 'src/app/models/topping.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-toppings',
  templateUrl: './list-toppings.component.html',
  styleUrls: ['./list-toppings.component.scss']
})
export class ListToppingsComponent implements OnInit {

  toppingsList: Topping[] = [];
  id: string = '';

  // Declaration of messages
  Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000
  });

  constructor(private toppingService: ToppingService,
    private pizzaService: PizzaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    // Getting the topping id from router
    activatedRoute.params.subscribe(params => this.id = params.id );
  }

  ngOnInit() {
    // This method verify if the id exists for load the list or available 
    // list of toppings for the pizza id
    if (this.id)
      this.loadAvailableList();
    else
      this.loadList();
  }

  // Load the list of toppings
  loadList() {
    this.toppingService.getToppings()
      .subscribe(toppingsList => {
        this.toppingsList = toppingsList;
      });
  }

  // Load the available list of toppings for the pizza id
  loadAvailableList() {
    this.pizzaService.getAvailableToppingsForPizza(this.id)
      .subscribe(toppingsList => {
        this.toppingsList = toppingsList;
      });
  }

  deleteTopping(topping: Topping) {

    Swal.fire({
      title: 'Do you want to delete this topping?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        // Deleting topping
        this.toppingService.deleteTopping(topping).subscribe(resp => {
          this.loadList();
        });
        //Message
        this.Toast.fire({
          icon: 'info',
          title: 'Deleted successfully'
        })
      }
    });
  }

  // It select the topping and is add to the pizza
  selectTopping(topping: Topping) {
    this.pizzaService.addToppingToPizza(topping, this.id).subscribe(resp => {
      this.router.navigate(['/pizza-details', this.id]);
    });
  }

}
