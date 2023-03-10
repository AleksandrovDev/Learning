# write your code here
import sys

# sys.setrecursionlimit(10000)
global count
count = 0


# @ Divide by base casese and another cases
def base_cases(regex_ex, symbol):
    if regex_ex == []:
        print(True)
    elif symbol == []:
        print(False)
    elif regex_ex[0] == symbol[0]:
        regex_ex.pop(0)
        symbol.pop(0)
        regex(regex_ex, symbol)
    else:
        symbol.pop(0)
        regex(regex_ex, symbol)


def regex(regex_ex, symbol):
    global count
    # print(f"{regex_ex} and {symbol}")
    if len(regex_ex)>1 and regex_ex[0]=="\\":
        regex_ex.pop(0)
        base_cases(regex_ex,symbol)


    elif len(regex_ex) > 1 and regex_ex[1] == "?":
        count += 1
        question_case(regex_ex, symbol)
    elif regex_ex == []:
        print(True)
    elif regex_ex[0] == "^":
        regex_ex.pop(0)
        count += 1
        regex(regex_ex, symbol)
    elif symbol == []:
        print(False)
    elif len(regex_ex) > 1 and regex_ex[1] == "$" and len(symbol) == 1:
        if regex_ex[0] == "." or regex_ex[0] == symbol[0]:
            regex_ex.pop(0)
            regex_ex.pop(0)
            symbol.pop(0)
            regex(regex_ex, symbol)
        else:
            print(False)
    elif len(regex_ex) > 1 and regex_ex[1] == "*":
        multiply_case(regex_ex, symbol)
    elif len(regex_ex) > 1 and regex_ex[1] == "+":
        add_case(regex_ex, symbol)
    elif regex_ex[0] == ".":
        if len(regex_ex) > 1 and regex_ex[1] == "$":
            symbol.pop(0)
            regex(regex_ex, symbol)
        else:
            regex_ex.pop(0)
            symbol.pop(0)
            regex(regex_ex, symbol)
    elif regex_ex[0] == symbol[0]:
        regex_ex.pop(0)
        symbol.pop(0)
        regex(regex_ex, symbol)
    elif count >= 1:
        print(False)
    else:
        symbol.pop(0)
        regex(regex_ex, symbol)


def add_case(regex_ex, symbol):
    # print(f"{regex_ex} and {symbol} in add")
    if len(symbol) > 1 and regex_ex[0] == symbol[0] == symbol[1] or len(symbol) > 1 and regex_ex[0] == "." and symbol[
        0] == symbol[1]:
        symbol.pop(0)
        if symbol == []:
            regex_ex.pop(0)
            regex_ex.pop(0)
        regex(regex_ex, symbol)
    elif regex_ex[0] == symbol[0] or regex_ex[0] == ".":
        symbol.pop(0)
        regex_ex.pop(0)
        regex_ex.pop(0)
        regex(regex_ex, symbol)
    else:
        print(False)


def escape_cases(regex_ex, symbol):
    pass



def multiply_case(regex_ex, symbol):
    # print(f"{regex_ex} and {symbol} in multiply")
    if regex_ex[0] == symbol[0] or regex_ex[0] == ".":
        symbol.pop(0)
        if symbol == []:
            regex_ex.pop(0)
            regex_ex.pop(0)
        regex(regex_ex, symbol)
    else:
        regex_ex.pop(0)
        regex_ex.pop(0)
        regex(regex_ex, symbol)


def question_case(regex_ex, symbol):
    if regex_ex[0] == symbol[0] or regex_ex[0] == ".":
        symbol.pop(0)
        regex_ex.pop(0)
        regex_ex.pop(0)
        regex(regex_ex, symbol)
    else:
        regex_ex.pop(0)
        regex_ex.pop(0)
        regex(regex_ex, symbol)


def check_word(input):
    str_list = input.split("|")
    regex_exp = list(str_list[0])
    symbol = list(str_list[1])
    regex(regex_exp, symbol)


check_word(input())
