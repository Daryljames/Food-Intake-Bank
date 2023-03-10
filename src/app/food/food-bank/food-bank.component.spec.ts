import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodBankComponent } from './food-bank.component';

describe('FoodBankComponent', () => {
  let component: FoodBankComponent;
  let fixture: ComponentFixture<FoodBankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodBankComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
