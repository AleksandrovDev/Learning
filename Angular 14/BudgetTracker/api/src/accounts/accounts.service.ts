import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class AccountsService {
  accounts = [
    {
      id: '0',
      currency: 'RUB',
      currentSum: 100000,
      exchangeRate: 0.012,
      isToggled: false,
      incomes: [
        {
          time: new Date(),
          amount: 100,
        },
      ],
      expenses: [
        {
          time: new Date(),
          amount: -200,
        },
      ],
    },
    {
      id: '1',
      currency: 'EUR',
      exchangeRate: 1.1,
      currentSum: 20000,
      isToggled: false,
      incomes: [
        {
          time: new Date(),
          amount: 100,
        },
      ],
      expenses: [],
    },
  ];

  create(createAccountDto: CreateAccountDto) {
    const newAccount = { ...createAccountDto, id: randomUUID() };
    this.accounts = [...this.accounts, newAccount];
    return newAccount;
  }

  findAll() {
    return this.accounts;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    this.accounts = this.accounts.map((account) => {
      return +account.id === id
        ? (account = { ...account, ...updateAccountDto })
        : account;
    });

    return this.accounts.find((account) => +account.id === id);
  }

  remove(id: number) {
    this.accounts = this.accounts.filter((account) => +account.id !== id);
    return;
  }
}
