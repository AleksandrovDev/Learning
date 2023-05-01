export class CreateAccountDto {
  id: string;
  currency: string;
  currentSum: number;
  exchangeRate: number;
  incomes: Transaction[];
  expenses: Transaction[];
  isToggled: boolean;
}

export interface Transaction {
  time: Date,
  amount: number,
}
