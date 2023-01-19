import { Injectable } from '@angular/core';
import { FoodItem } from '../models/food-item';
import { FoodList } from '../models/food-list';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class FoodCalorieCalculatorService {
  constructor() {}

  computeAllCalories = (foodList: FoodList[]): number => {
    let total = 0.0;
    // iterate all fooditems

    foodList.forEach((item: FoodList) => {
      item.foodItems.forEach((food: FoodItem) => {
        total += food.calorie * food.quantity;
      });
    });
    // console.log(total);
    return total;
  };

  computeRemainingCalories = (user: User[], calorie: number): number => {
    let remainingCalories = 0;
    // let totalFoodCalories = this.computeAllCalories(foodItem);

    user.forEach((user: User) => {
      remainingCalories = user.calorieGoal - calorie;
    });
    return remainingCalories;
  };

  // computeRemainingCalories = (user: User, foodItem: FoodItem[]): number => {
  //   let remainingCalories = 0;
  //   let totalFoodCalories = this.computeAllCalories(foodItem);

  //   remainingCalories = user.calorieGoal - totalFoodCalories
  //   return remainingCalories
  // };
}
