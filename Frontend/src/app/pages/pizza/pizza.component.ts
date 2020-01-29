import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Pizza } from 'src/app/models/pizza.model';
import { PizzaService } from 'src/app/services/pizza.service';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {

  pizza = new Pizza()
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
        .subscribe(pizza =>{
          console.log(pizza);
          this.pizza = pizza;
          
        } )
    }
  }

  guardar(f: NgForm) {
    this.pizzaService.addPizza(this.pizza)
      .subscribe(pizza => {
        if (pizza._id.length > 0)
          alert('Pizza saved');
        this.router.navigate(['/list-pizzas']);
      });
  }

  cancelar(f: NgForm) {
    this.router.navigate(['/list-pizzas']);
  }

}
