export interface FoodItem {
  id?: number;
  foodName: string;
  calorie: number;
  quantity: number;
  measure: string;
  meal: string;
  editable: boolean;
  createdOn?: string;
  lastUpdatedOn?: string;
}
