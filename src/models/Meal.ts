import { Product } from "./Product";

export interface Meal {
  mealName: string;
  mealTime: string;
  recommendedEnergy: null | number;
  items: Array<Product>;
  recommendedPercent: number;
}
