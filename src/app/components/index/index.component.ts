import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/models/food-item';
import { FoodList } from 'src/app/models/food-list';
import { User } from 'src/app/models/user';
import { FoodCalorieCalculatorService } from 'src/app/services/food-calorie-calculator.service';
import { FoodItemsService } from 'src/app/services/food-items.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  title: string = 'My Food Intake Bank';

  foodItem: FoodItem[] = [];

  foodLists: FoodList[] = [];

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

  constructor(
    private foodCalorie: FoodCalorieCalculatorService,
    private foodItemsService: FoodItemsService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit() fired for AppComponent');

    this.foodItemsService.getall().subscribe((foodItems) => {
      this.foodLists = foodItems;
      // console.log(foodItems);
      this.totalFoodCalories = this.foodCalorie.computeAllCalories(
        this.foodLists
      );
      console.log(this.totalFoodCalories);
      this.remainingCalories = this.foodCalorie.computeRemainingCalories(
        this.users,
        this.totalFoodCalories
      );
    });
  }

  formEventHandler = (payload: FoodItem) => {
    // console.log('Handling formEventHandler...');
    // console.log(payload);

    this.foodLists.forEach((o) => {
      if (o.meal == payload.meal) {
        o.foodItems.push({ ...payload });
        console.log(this.totalFoodCalories);
        console.log(payload);
        // computes all calories
        this.totalFoodCalories = this.foodCalorie.computeAllCalories(
          this.foodLists
        );
        console.log(this.totalFoodCalories);
        console.log(this.remainingCalories);
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
      console.log(payload);
      this.remainingCalories = this.foodCalorie.computeRemainingCalories(
        this.users,
        this.totalFoodCalories
      );
    });
  };
}
