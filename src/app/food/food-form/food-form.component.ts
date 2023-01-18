import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from 'src/app/models/food-item';
import { FoodList } from 'src/app/models/food-list';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss'],
})
export class FoodFormComponent {
  @Input() foodItem: FoodItem = {
    foodName: '',
    calorie: 0,
    quantity: 0,
    measure: '',
    meal: '',
  };

  @Output() formEvent: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  // @Output() formEventFoodItem: EventEmitter<FoodItem> =
  //   new EventEmitter<FoodItem>();

  btnClicked = () => {
    console.log('Button was clicked');

    // copying the actual object into o
    let o = { ...this.foodItem };

    // console.log(`foodList: ${this.foodList}`);

    this.formEvent.emit(o);
  };
}
