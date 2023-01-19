import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FoodItem } from 'src/app/models/food-item';

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
    editable: false,
  };

  @Output() formEvent: EventEmitter<FoodItem> = new EventEmitter<FoodItem>();

  btnClicked = () => {
    // console.log('Button was clicked');
    // console.log(this.foodItem);
    // copying the actual object into o
    let o = { ...this.foodItem };
    // console.log(o);
    this.formEvent.emit(o);

    this.foodItem.foodName = '';
    this.foodItem.calorie = 0;
    this.foodItem.quantity = 0;
    this.foodItem.measure = '';
    this.foodItem.meal = '';
    this.foodItem.createdOn = '';
    this.foodItem.editable = false;
  };
}
