import { Component, Input } from '@angular/core';
import { FoodItem } from 'src/app/models/food-item';
import { FoodList } from 'src/app/models/food-list';

@Component({
  selector: 'app-food-bank',
  templateUrl: './food-bank.component.html',
  styleUrls: ['./food-bank.component.scss'],
})
export class FoodBankComponent {
  myFoodBank: string = 'My Food Bank';

  @Input() foodList: FoodList;

  deleteFoodItem = (id: FoodItem) => {
    console.log(id);
    console.log(this.foodList.foodItems);

    let index = this.foodList.foodItems.findIndex((el) => el == id);

    this.foodList.foodItems.splice(index, 1);
  };
}
