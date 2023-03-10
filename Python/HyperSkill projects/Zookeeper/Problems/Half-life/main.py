atoms_quantity = float(input())
final_quantity = int(input())
halflife_day = 0

while atoms_quantity >= final_quantity:
    atoms_quantity /= 2
    halflife_day += 12
print(halflife_day)
