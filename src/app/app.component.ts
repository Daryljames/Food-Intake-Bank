import { Component } from '@angular/core';
import { FoodItem } from './models/food-item';
import { FoodList } from './models/food-list';
import { User } from './models/user';
import { FoodCalorieCalculatorService } from './services/food-calorie-calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private foodCalorie: FoodCalorieCalculatorService) {}

  title: string = 'My Food Intake Bank';

  foodItem: FoodItem[] = [];

  foodLists: FoodList[] = [
    {
      meal: 'Breakfast',
      foodItems: [],
    },
    { meal: 'Lunch', foodItems: [] },
    { meal: 'Dinner', foodItems: [] },
    { meal: 'Snack', foodItems: [] },
  ];

  users: User[] = [
    {
      id: 1,
      firstName: 'John',
      middleName: 'Powers',
      lastName: 'Smith',
      age: 20,
      weight: 80,
      weightType: 'kilogram',
      height: 5.4,
      heightType: 'inch',
      userType: 'user',
      calorieGoal: 2000,
      email: 'test@email.com',
      password: '123test',
    },
  ];

  totalFoodCalories: number = 0;

  remainingCalories: number = 0;

  formEventHandler = (payload: FoodItem) => {
    // console.log('Handling formEventHandler...');
    // console.log(payload);

    this.foodLists.forEach((o) => {
      if (o.meal == payload.meal) {
        o.foodItems.push({ ...payload });

        // computes all calories
        this.totalFoodCalories = this.foodCalorie.computeAllCalories(
          this.foodLists
        );
        // console.log(this.totalFoodCalories);
        // console.log(this.remainingCalories);
      }
    });
    this.remainingCalories = this.foodCalorie.computeRemainingCalories(
      this.users,
      this.totalFoodCalories
    );
  };

  foodEditHandler = (payload: FoodItem) => {
    let index = payload.id;

    this.foodLists.forEach((o) => {
      if (o.meal == payload.meal) {
        o.foodItems[index!].foodName = payload.foodName;
        o.foodItems[index!].calorie = payload.calorie;
        o.foodItems[index!].measure = payload.measure;
        o.foodItems[index!].quantity = payload.quantity;
        o.foodItems[index!].createdOn = payload.createdOn;

        console.log(o.foodItems[index!]);

        this.totalFoodCalories = this.foodCalorie.computeAllCalories(
          this.foodLists
        );
      }
    });
    this.remainingCalories = this.foodCalorie.computeRemainingCalories(
      this.users,
      this.totalFoodCalories
    );
  };

  foodDeleteHandler = (payload: FoodItem[]) => {
    console.log(payload);

    payload.forEach((o) => {
      let removedCal = o.calorie;
      let removedQuantity = o.quantity;
      console.log(removedCal);
      console.log(removedQuantity);

      this.totalFoodCalories = this.foodCalorie.caloriesAfterRemoval(
        removedCal,
        removedQuantity,
        this.totalFoodCalories
      );

      this.remainingCalories = this.foodCalorie.computeRemainingCalories(
        this.users,
        this.totalFoodCalories
      );
    });
  };
}
