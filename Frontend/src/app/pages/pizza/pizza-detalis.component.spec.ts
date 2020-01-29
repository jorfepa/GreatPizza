import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaDetalisComponent } from './pizza-detalis.component';

describe('PizzaDetalisComponent', () => {
  let component: PizzaDetalisComponent;
  let fixture: ComponentFixture<PizzaDetalisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaDetalisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
