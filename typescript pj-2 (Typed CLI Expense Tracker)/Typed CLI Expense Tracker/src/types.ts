export enum Category {
  FOOD = "food",
  TRAVEL = "travel",
  SHOPPING = "shopping",
  OTHER = "other",
}

export interface Expense  {
  readonly id: number;
  title: string;
  amount: number;
  category: Category;
  createdAt: Date;
}
export type Command =
  | { type: "add"; title: string; amount: number }
  | { type: "list" }
  | { type: "total" }
  | { type: "delete"; id: number };

export type Result<T> =
  | { success: true; data: T }
  | { success: false; error: string };

export type NewExpenseInput = {
  title: string;
  amount: number;
  category?: Category;
};
