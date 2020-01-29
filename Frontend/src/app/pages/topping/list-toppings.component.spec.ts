import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToppingsComponent } from './list-toppings.component';

describe('ListToppingsComponent', () => {
  let component: ListToppingsComponent;
  let fixture: ComponentFixture<ListToppingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListToppingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListToppingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
