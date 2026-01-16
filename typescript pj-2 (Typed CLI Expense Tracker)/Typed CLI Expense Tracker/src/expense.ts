import { Expense, NewExpenseInput, Result, Category } from "./types";


let expenses: Expense[] = [];

export function addExpense(input: NewExpenseInput): Result<Expense> {
    if (input.amount <= 0) {
    return { success: false, error: "Amount must be greater than 0" };
  }
  
  const expense: Expense = {
    id: Date.now(),
    title: input.title,
    amount: input.amount,
    category: input.category ?? Category.OTHER,
    createdAt: new Date(),
};

  expenses.push(expense);

  return { success: true, data: expense };
}


export function listExpenses(): Result<Expense[]> {
  return { success: true, data: expenses };
}


export function calculateTotal(): Result<number> {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  return { success: true, data: total };
}

export function deleteExpense(id: number): Result<null> {
  const index = expenses.findIndex(e => e.id === id);

  if (index === -1) {
    return { success: false, error: "Expense not found" };
  }

  expenses.splice(index, 1);
  return { success: true, data: null };
}
