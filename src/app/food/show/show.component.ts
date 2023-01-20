import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from 'src/app/models/food-item';
import { FoodItemsService } from 'src/app/services/food-items.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss'],
})
export class ShowComponent implements OnInit {
  id: number;

  foodItem: FoodItem = {
    foodName: '',
    calorie: 0,
    quantity: 0,
    measure: '',
    meal: '',
    editable: false,
  };

  constructor(
    private route: ActivatedRoute,
    private foodItemService: FoodItemsService
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`show component for id ${this.id}`);

    this.foodItemService.getById(this.id).subscribe((food) => {
      this.foodItem = food;
    });
  }
}
