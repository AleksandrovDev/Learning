import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Account } from './account/account';

@Component({
  selector: 'budget-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountListComponent implements OnChanges, OnDestroy {
  @Input() accounts: Account[] | null = [];
  @Input() title: string = '';
  @Input() currentSum!: number | null;
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

  ngOnDestroy(): void {
    console.log('Destoy account list called');
  }
}
