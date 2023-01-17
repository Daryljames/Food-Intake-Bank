import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  appName: string = 'Food Intake Bank';
  description: string =
    'Track your food intake like you would with your bank account!';
}
