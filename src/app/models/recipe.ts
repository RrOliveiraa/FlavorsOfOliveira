export interface Ingredient {
  name: string;
  quantity: number;
  unit: string;
}

export interface Recipe {
  title: string;
  description: string;
  difficulty: string;
  duration: string;
  userName: string;
  ingredients: Ingredient[];
}