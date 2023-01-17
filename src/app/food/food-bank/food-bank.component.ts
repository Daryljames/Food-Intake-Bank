import { Component, Input } from '@angular/core';
import { FoodList } from 'src/app/models/food-list';

@Component({
  selector: 'app-food-bank',
  templateUrl: './food-bank.component.html',
  styleUrls: ['./food-bank.component.scss'],
})
export class FoodBankComponent {
  myFoodBank: string = 'My Food Bank';

  @Input() foodList: FoodList;
}
