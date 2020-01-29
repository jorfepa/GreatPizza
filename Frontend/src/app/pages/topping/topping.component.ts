import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Topping } from 'src/app/models/topping.model';
import { ToppingService } from 'src/app/services/topping.service';

@Component({
  selector: 'app-topping',
  templateUrl: './topping.component.html',
  styleUrls: ['./topping.component.scss']
})
export class ToppingComponent implements OnInit {

  topping = new Topping()  

  constructor(private toppingService: ToppingService,
    private router: Router) { }

  ngOnInit() {
  }

  save(f: NgForm) {
    this.toppingService.addTopping(this.topping)
    .subscribe(topping => {
        this.router.navigate(['/list-toppings']);
      });
  }

  cancel(f: NgForm) {
    this.router.navigate(['/list-toppings']);
  }

}
