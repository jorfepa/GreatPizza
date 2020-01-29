import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/models/pizza.model';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './list-pizza.component.html',
  styleUrls: ['./list-pizza.component.scss']
})
export class ListPizzaComponent implements OnInit {

  pizzasList: Pizza[] = [];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    this.loadList();
  }

  loadList(){
    this.pizzaService.getPizzas()
      .subscribe(pizzasList=>{        
        console.log(pizzasList);
        this.pizzasList = pizzasList;
      });
  }

  deletePizza(pizza){
    this.pizzaService.deletePizza(pizza).subscribe(resp=>console.log(resp));
  }

}
