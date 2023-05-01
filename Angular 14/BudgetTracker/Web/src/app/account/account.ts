export interface Account {
  id: string;
  currency: string;
  currentSum: number;
  exchangeRate: number;
  incomes: Transaction[];
  expenses: Transaction[];
  isToggled: boolean;
}

export interface CreateAccountDto extends Partial<Account> {}

export interface Transaction {
  time: Date;
  amount: number;
}
