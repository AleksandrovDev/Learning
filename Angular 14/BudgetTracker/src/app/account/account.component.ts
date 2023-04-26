import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from './account';

@Component({
  selector: 'budget-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent {
  @Input() account: Account | null = null;
  @Output() updatedAccount = new EventEmitter<Account>();
  
  toggleHistory(account: Account) {
    account.isToggled = !account.isToggled;
  }
  
  addTransaction(amount: string) {
    if (this.account) {
      this.account.currentSum += +amount
    }
    
    this.updatedAccount.emit(this.account!);
  }
}
