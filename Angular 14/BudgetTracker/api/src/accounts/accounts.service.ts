import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Injectable()
export class AccountsService {
  create(createAccountDto: CreateAccountDto) {
    return 'This action adds a new account';
  }

  findAll() {
    return [
      {
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
    ];;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
