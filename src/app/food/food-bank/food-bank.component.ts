import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from 'src/app/models/food-item';
import { FoodList } from 'src/app/models/food-list';
import { FoodCalorieCalculatorService } from 'src/app/services/food-calorie-calculator.service';

@Component({
  selector: 'app-food-bank',
  templateUrl: './food-bank.component.html',
  styleUrls: ['./food-bank.component.scss'],
})
export class FoodBankComponent {
  myFoodBank: string = 'My Food Bank';

  @Input() foodList: FoodList;

  @Input() foodItem: FoodItem = {
    foodName: '',
    calorie: 0,
    quantity: 0,
    measure: '',
    meal: '',
    editable: false,
  };

  @Output() foodEditHandler: EventEmitter<FoodItem> =
    new EventEmitter<FoodItem>();

  @Output() foodDeleteHandler: EventEmitter<FoodItem[]> = new EventEmitter<
    FoodItem[]
  >();

  deleteFoodItem = (id: FoodItem) => {
    // console.log(id);
    // console.log(this.foodList.foodItems);

    let index = this.foodList.foodItems.findIndex((el) => el == id);

    this.foodDeleteHandler.emit(this.foodList.foodItems.splice(index, 1));
  };

  editFoodItem = (food: FoodItem) => {
    // console.log(this.isEditable);
    // this.isEditable = true;
    // console.log(this.isEditable);
    let index = this.foodList.foodItems.findIndex((el) => el == food);
    this.foodList.foodItems[index].editable = true;
  };

  saveFoodItem = (food: FoodItem) => {
    let index = this.foodList.foodItems.findIndex((el) => el == food);
    this.foodList.foodItems[index].editable = false;
    // console.log(this.foodList.foodItems[index]);
    this.foodItem.id = index;
    this.foodItem.meal = this.foodList.foodItems[index].meal;
    this.foodItem.foodName = this.foodList.foodItems[index].foodName;
    this.foodItem.quantity = this.foodList.foodItems[index].quantity;
    this.foodItem.calorie = this.foodList.foodItems[index].calorie;
    this.foodItem.measure = this.foodList.foodItems[index].measure;
    this.foodItem.createdOn = this.foodList.foodItems[index].createdOn;

    // let o = { ...this.foodItem };
    // console.log(this.foodItem);
    // console.log(index);
    this.foodEditHandler.emit({ ...this.foodItem });
  };
}
