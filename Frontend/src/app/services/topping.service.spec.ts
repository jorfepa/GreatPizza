import { TestBed } from '@angular/core/testing';

import { ToppingService } from './topping.service';

describe('ToppingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToppingService = TestBed.get(ToppingService);
    expect(service).toBeTruthy();
  });
});
