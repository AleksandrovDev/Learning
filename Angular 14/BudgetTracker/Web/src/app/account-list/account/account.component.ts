import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'budget-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent {
  @Input() account: Account | null = null;
  @Output() updatedAccount = new EventEmitter<Account>();

  toggleHistory(account: Account) {
    account.isToggled = !account.isToggled;
  }

  addTransaction(amount: string) {
    if (this.account) {
      this.account.currentSum += +amount;
    }

    if (+amount < 0) {
      this.account?.expenses.push({
        time: new Date(),
        amount: +amount,
      });
    } else {
      this.account?.incomes.push({
        time: new Date(),
        amount: +amount,
      });
    }

    this.updatedAccount.emit(this.account!);
  }
}
