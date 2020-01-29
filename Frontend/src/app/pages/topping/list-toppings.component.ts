import { Component, OnInit } from '@angular/core';
import { ToppingService } from 'src/app/services/topping.service';
import { Topping } from 'src/app/models/topping.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-list-toppings',
  templateUrl: './list-toppings.component.html',
  styleUrls: ['./list-toppings.component.scss']
})
export class ListToppingsComponent implements OnInit {

  toppingsList: Topping[] = [];
  id: string = '';

  constructor(private toppingService: ToppingService,
    private pizzaService: PizzaService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id
    });
  }

  ngOnInit() {
    if (this.id)
      this.loadAvailableList();
    else
      this.loadList();
  }

  loadList() {
    this.toppingService.getToppings()
      .subscribe(toppingsList => {
        this.toppingsList = toppingsList;
        console.log(this.toppingsList);
      });
  }

  loadAvailableList() {
    this.pizzaService.getAvailableToppingsForPizza(this.id)
      .subscribe(toppingsList => {
        this.toppingsList = toppingsList;
        console.log(this.toppingsList);
      });
  }

  deleteTopping(topping: Topping) {
    this.toppingService.deleteTopping(topping).subscribe(resp => {
      console.log(resp)
      this.loadList();
    });
  }

  selectTopping(topping: Topping) {
    this.pizzaService.addToppingToPizza(topping, this.id).subscribe(resp => {
      this.router.navigate(['/pizza-details', this.id]);
    });
  }

}
