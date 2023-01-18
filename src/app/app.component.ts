import { Component } from '@angular/core';
import { FoodItem } from './models/food-item';
import { FoodList } from './models/food-list';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'My Food Intake Bank';

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

  formEventHandler = (payload: FoodItem) => {
    console.log('Handling formEventHandler...');
    console.log(payload);

    this.foodLists.forEach((o) => {
      if (o.meal == payload.meal) {
        o.foodItems.push({ ...payload });
      }
    });
  };
}
