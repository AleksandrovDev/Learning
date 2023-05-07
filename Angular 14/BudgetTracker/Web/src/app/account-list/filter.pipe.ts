import { Pipe, PipeTransform } from '@angular/core';
import { Account } from './account/account';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(accounts: Account[] | null, sum: number): Account[] {
    return accounts?.filter((account) => account.currentSum <= sum) || [];
  }
}
