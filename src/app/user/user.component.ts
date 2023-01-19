import { Component, Input } from '@angular/core';
import { User } from '../models/user';
// import { FoodCalorieCalculatorService } from '../services/food-calorie-calculator.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  // constructor(private foodCalorie: FoodCalorieCalculatorService) {}

  @Input() user: User;

  @Input() totalFoodCalories: number = 0;

  @Input() remainingCalories: number = 0;
}
