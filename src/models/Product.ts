export interface Product {
  planDayDietItemId: string;
  source: string;
  name: string;
  foodType: "PRODUCT" | "MEAL";
  measureId: number;
  measureName: string;
  measureQuantity: number;
  energy: number;
  protein: number;
  fat: number;
  carbohydrate: number;
  weight: number;
  capacity: number;
  fiber: null;
  cholesterol: null | number;
  saturatedFat: null | number;
  sugars: null | number;
  salt: null | number;
  sodium: null | number;
  iron: null | number;
  eaten: boolean;
  productId: number;
  brand: string;
}
