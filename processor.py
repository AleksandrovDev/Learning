import sys
import math

choice = None


def getting_data(operation):
    if operation == "multiply_by_num" or operation == None:
        print("Enter size of matrix: ")
        size1 = input().split()
        print("Enter matrix: ")
        first_matrice = [list(map(lambda x: float(x), input().split())) for j in range(int(size1[0]))]
        # print(first_matrice)
        if operation == "multiply_by_num":
            print("Enter constant: ")
            multiplicator = int(input())
            return [first_matrice, size1, multiplicator]
        else:
            return [first_matrice, size1]
    else:
        print("Enter size of first matrix: ")
        size1 = input().split()
        print("Enter first matrix: ")
        first_matrice = [input().split() for j in range(int(size1[0]))]
        print("Enter size of second matrix: ")
        size2 = input().split()
        print("Enter second matrix: ")
        second_matrice = [input().split() for j in range(int(size2[0]))]
        return [first_matrice, size1, second_matrice, size2]


def addition():
    data_list = getting_data("add")
    mat1 = data_list[0]
    mat2 = data_list[2]
    size1 = data_list[1]
    size2 = data_list[3]
    if size1 == size2:
        return [[float(i) + float(j) for i, j in zip(f, s)] for f, s in zip(mat1, mat2)]
    else:
        return "ERROR"


def multiply_by_number():
    data_list = getting_data("multiply_by_num")
    mat = data_list[0]
    multiply_by = data_list[2]
    return [[str(float(j) * multiply_by) for j in i] for i in mat]


def multiplication():
    data_list = getting_data("multiplication")
    mat1 = data_list[0]
    size1 = data_list[1]
    mat2 = usual_transpone(data_list[2])
    size2 = data_list[3]
    result_list = []
    if size1[1] == size2[0]:
        for i in mat1:
            temp = []
            for k in mat2:
                sum = 0
                for j, m in zip(i, k):
                    # print(f"{float(j)}*{float(m)}")
                    sum += ((float(j) * float(m)))
                temp.append(str(sum))
            result_list.append(temp)
        return result_list
    else:
        return "ERROR"


def transpone_module():
    transpose_menu()
    choice = input()
    data_list = getting_data(None)
    mat = data_list[0]
    return transpone_dict[choice](mat)


def usual_transpone(mat):
    return list(map(list, (zip(*mat))))


def side_diagonal_transpone(mat):
    new_list2 = mat[::-1]  #
    new_list3 = [i[::-1] for i in new_list2]
    return list(map(list, list((zip(*new_list3)))))


def vertical_transpose(mat):
    return [i[::-1] for i in mat]


def horizontal_transpose(mat):
    return mat[::-1]


def calculate_determinant():
    data_list = getting_data(None)
    mat = data_list[0]
    size = int(data_list[1][0])
    return determinant_recursion(mat, size)


def determinant_recursion(mat, size):
    sum = 0
    if size == 1:
        return float(mat[0][0])
    elif size < 3:
        sum1 = 1
        sum2 = 1
        for i in range(size):
            sum1 *= float(mat[i][i])
            sum2 *= float(mat[i][len(mat[i]) - 1 - i])
        sum = sum1 - sum2
        return sum
    else:
        row = mat.pop(0)
        count = 1
        for i in range(0, len(row)):
            new_matrice = [[k[j] for j in range(0, len(k)) if j != i] for k in mat]
            # print(new_matrice)
            sum += (float(row[i]) * (-1) ** (1 + count)) * determinant_recursion(new_matrice, size - 1)
            count += 1
        return sum


def create_minors_matrix(mat, size):
    minor_list = []
    for i in range(len(mat)):
        for j in range(len(mat[i])):
            # print(f"i{i} j{j}")
            minor_matrix = [[mat[k][p] for p in range(len(mat[i])) if p != j] for k in range(len(mat)) if k != i]
            det_of_minor_matrix = determinant_recursion(minor_matrix, size - 1)
            minor_list.append(det_of_minor_matrix)
    # print(minor_list)
    count = 0
    multiplicator = -1
    for i in range(len(minor_list)):
        # if size is odd
        if size % 2 != 0:
            if i % 2 != 0:
                minor_list[i] = -minor_list[i]
        # if size is even and we need to change symbol
        else:
            if count != size:
                count+=1
                if i % 2 != 0:
                    minor_list[i] = minor_list[i]*multiplicator
                else:
                    minor_list[i] = minor_list[i] * -multiplicator
            else:
                count=0
                multiplicator = -multiplicator
                if i % 2 != 0:
                    minor_list[i] = minor_list[i]*multiplicator

                else:
                    minor_list[i] = minor_list[i] * -multiplicator
                count += 1


            pass
    return [minor_list[i:i + size] for i in range(0, len(minor_list), size)]


def main_menu():
    print("1. Add matrices")
    print("2. Multiply matrix by a constant")
    print("3. Multiply matrices")
    print("4. Transpose matrix")
    print("5. Calculate a determinant")
    print("6. Inverse matrix")
    print("0. Exit")


def transpose_menu():
    print("1. Main diagonal")
    print("2. Side diagonal")
    print("3. Vertical line")
    print("4. Horizontal line")


def printing_result(mat):
    if mat == "ERROR":
        print("The operation cannot be performed.")
    elif type(mat) == float:
        print(f"The result is:")
        print(mat)
    else:
        print("The result is:")
        for i in mat:
            for j in i:
                if j == 0:
                    print(round(j), end=" ")
                else:
                    print(j, end=" ")
            print()


def inverse_matrix():
    data_list = getting_data(None)
    mat = data_list[0]
    size = int(data_list[1][0])
    mat_copy = mat
    size_copy = size
    matrix_minors = usual_transpone(create_minors_matrix(mat_copy, size_copy))
    # print(f"minorstransponed {matrix_minors}")
    determinant = determinant_recursion(mat, size)
    # print(f"determin {determinant}")
    return [[i / determinant for i in j] for j in matrix_minors]


choices_dict = {"1": addition,
                "2": multiply_by_number,
                "3": multiplication,
                "4": transpone_module,
                "5": calculate_determinant,
                "6": inverse_matrix,
                "0": sys.exit}

transpone_dict = {"1": usual_transpone,
                  "2": side_diagonal_transpone,
                  "3": vertical_transpose,
                  "4": horizontal_transpose}

while choice != "0":
    main_menu()
    choice = input()
    result = choices_dict[choice]()
    printing_result(result)
