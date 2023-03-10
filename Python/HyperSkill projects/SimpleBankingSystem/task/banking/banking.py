# Write your code here
import random
import sqlite3


class Account:
    def __init__(self, card_number):
        self.card_number = card_number
        self.pin_code = None
        self.balance = 0

    def create_an_account(self):
        print("Your card has been created")
        Account.generate_card_number(self)
        print("Your card number:")

        print(Account.luhn_algoritm(self))
        Account.generate_pin_code(self)
        print("Your card PIN:")
        print(self.pin_code)

    def generate_card_number(self):
        first_six_digits = 400000
        random.seed()
        second_to_last_digit = random.randint(1000000000, 9999999999)
        self.card_number = "" + str(first_six_digits) + str(second_to_last_digit)

    def luhn_algoritm(self):
        card_number_list_final = list(self.card_number)
        card_number_list = list(self.card_number)
        summ = 0
        for number in range(15):
            if number % 2 == 0:
                if int(card_number_list[number]) * 2 > 9:
                    card_number_list[number] = int(card_number_list[number]) * 2 - 9
                else:
                    card_number_list[number] = int(card_number_list[number]) * 2
            summ += int(card_number_list[number])
        if summ % 10 == 0:
            card_number_list_final[15] = "0"
            self.card_number = ''.join(card_number_list_final)
            return self.card_number
        else:
            last_digit = 10 - summ % 10
            card_number_list_final[15] = str(last_digit)
            self.card_number = ''.join(card_number_list_final)
            return self.card_number

    def generate_pin_code(self):
        self.pin_code = str(random.randint(1000, 9999))

    def add_to_database(self):
        conn = sqlite3.connect('card.s3db')
        cur = conn.cursor()
        cur.execute("SELECT max(id) FROM card")
        id_last = cur.fetchone()
        try:
            number = int(''.join(map(str, id_last)))
        except:
            number = 0
        cur.execute("INSERT INTO card (id, number, pin) VALUES (?,?,?)", (number + 1, self.card_number, self.pin_code))
        conn.commit()


def check_balance(card_number):
    conn = sqlite3.connect('card.s3db')
    cur = conn.cursor()
    cur.execute("SELECT balance FROM card WHERE number='%s';" % card_number)
    balance = cur.fetchone()
    balance = str(''.join(map(str, balance)))
    conn.commit()
    print("Balance: {}".format(balance))


def login(card_number):
    # search in database
    conn = sqlite3.connect('card.s3db')
    cur = conn.cursor()
    sql = f"""
    SELECT pin 
    FROM card 
    WHERE number = '{card_number}'
    """
    try:
        cur.execute(sql)
        correct_pin = cur.fetchone()
        print(correct_pin)
        correct_pin = str(''.join(map(str, correct_pin)))
        #print(correct_pin)
        conn.commit()
        print("Enter your PIN:")
        pin_code = input()
        if pin_code == correct_pin:
            print("You have successfully logged in!")
            return True
        else:
            print("Wrong card number or PIN!")
            return False
    except:
        print("Wrong card number or PIN!")

def create_database():
    conn = sqlite3.connect('card.s3db')
    cur = conn.cursor()
    try:
        cur.execute("CREATE TABLE card (id INTEGER, number TEXT, pin TEXT, balance INTEGER DEFAULT 0);")
    except:
        pass
    conn.commit()


def main_menu_display():
    print("1. Create an account")
    print("2. Log into account")
    print("0. Exit")


def login_menu_display():
    print("1. Balance")
    print("2. Add income")
    print("3. Do transfer")
    print("4. Close account")
    print("5. Log out")
    print("0. Exit")


def add_income(card_number):
    print("Enter income:")
    income = int(input())
    conn = sqlite3.connect('card.s3db')
    cur = conn.cursor()
    cur.execute("SELECT balance FROM card WHERE number='%s';" % card_number)
    balance = cur.fetchone()
    balance = int(''.join(map(str, balance))) + income
    sql = f"""
    UPDATE card
    SET balance = "{balance}"
    WHERE number = "{card_number}";
    """
    cur.execute(sql)
    conn.commit()
    print("Income was added!")


def do_transfer(card_number):
    print("Enter the card number:")
    transfer_card_number = input()
    new_card = Account(transfer_card_number)
    correct_number = new_card.luhn_algoritm()
    print(correct_number)
    conn = sqlite3.connect('card.s3db')
    cur = conn.cursor()
    # check if it is the same account
    if transfer_card_number == card_number:
        print("You can't transfer money to the same account!")
    # check if it's passed Luhn algorithm
    elif transfer_card_number[15] == correct_number[15]:
        try:
            sql = f"""
                        SELECT balance 
                        FROM card 
                        WHERE number = '{transfer_card_number}';
                        """

            sql_balance_account = f"""
                        SELECT balance 
                        FROM card 
                        WHERE number = '{card_number}';
                        """

            cur.execute(sql)
            transfer_balance = cur.fetchone()
            transfer_balance = int(''.join(map(str, transfer_balance)))
            print("Enter how much money you want to transfer:")
            transfer_money = int(input())

            cur.execute(sql_balance_account)
            account_balance = cur.fetchone()
            account_balance = int(''.join(map(str, account_balance)))

            if transfer_money > account_balance:
                print("Not enough money!")
            else:
                print(transfer_balance)
                print(transfer_money)
                transfer_balance += transfer_money
                sql_update = f"""
                    UPDATE card
                    SET balance = '{transfer_balance}'
                    WHERE number = '{transfer_card_number}';
                    """
                cur.execute(sql_update)
                sql_update_account = f"""
                UPDATE card
                SET balance = '{account_balance-transfer_balance}'
                WHERE number = '{card_number}';
                """
                cur.execute(sql_update_account)
                print("Success!")
                conn.commit()
        except:
            print("Such a card does not exist.")
    # check
    else:
        print("Probably you made a mistake in the card number. Please try again!")


def close_account(card_number):
    conn = sqlite3.connect('card.s3db')
    cur = conn.cursor()
    sql = f"""
    DELETE
    FROM card
    WHERE number = '{card_number}'
    """
    cur.execute(sql)
    conn.commit()
    print("The account has been closed!")


# main
condition = True
condition2 = False
conn = sqlite3.connect('card.s3db')
cur = conn.cursor()
while condition:
    #create_database()
    main_menu_display()
    vvod = input()
    if vvod == "1":
        new_account = Account(0)
        new_account.create_an_account()
        new_account.add_to_database()
    elif vvod == "2":
        print("Enter your card number:")
        card_number = input()
        condition2 = login(card_number)
        while condition2:
            login_menu_display()
            vvod = input()
            if vvod == "1":
                check_balance(card_number)
            elif vvod == "2":
                add_income(card_number)
            elif vvod == "3":
                do_transfer(card_number)
            elif vvod == "4":
                close_account(card_number)
                break
            elif vvod == "5":
                print("You have successfully logged out!")
                break
            elif vvod == "0":
                print("Bye!")
                condition = False
                break
            else:
                print("Wrong number!")
    elif vvod == "0":
        print("Bye!")
        break
    else:
        main_menu_display()
conn.commit()
# main finish
