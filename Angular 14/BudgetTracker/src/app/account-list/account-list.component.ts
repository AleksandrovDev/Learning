import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Account } from '../account/account';

@Component({
  selector: 'budget-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListComponent implements OnChanges {
  @Input() accounts: Account[] = [];
  @Input() title: string = '';
  @Output() updatedAccount = new EventEmitter<Account>();

  showUpdateMessage(account: Account) {
    this.updatedAccount.emit(account);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // triggers only when your input property gets new value

    if (changes['title']) {
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
}
