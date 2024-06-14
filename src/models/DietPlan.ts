import { Meal } from "./Meal";

export interface DietPlan {
  breakfast: Meal;
  dinner: Meal;
  snack: Meal;
  supper: Meal;
}
