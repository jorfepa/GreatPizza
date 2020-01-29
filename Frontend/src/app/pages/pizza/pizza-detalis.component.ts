import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza-detalis',
  templateUrl: './pizza-detalis.component.html',
  styleUrls: ['./pizza-detalis.component.scss']
})
export class PizzaDetalisComponent implements OnInit {

  pizza = new Pizza();
  constructor(private pizzaService: PizzaService,
    private router: Router,
    public activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => this.pizza._id = params.id);
  }

  ngOnInit() {
    this.loadPizza();
  }

  loadPizza() {
    if (this.pizza._id.length > 0) {
      this.pizzaService.getPizza(this.pizza._id)
        .subscribe(pizza => {
          console.log(pizza);
          this.pizza = pizza;
        })
    }
  }

}
