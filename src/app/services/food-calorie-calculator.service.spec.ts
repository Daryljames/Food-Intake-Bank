import { TestBed } from '@angular/core/testing';

import { FoodCalorieCalculatorService } from './food-calorie-calculator.service';

describe('FoodCalorieCalculatorService', () => {
  let service: FoodCalorieCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodCalorieCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
