def determinant_recursion(mat, size):
    sum = 0
    if size == 1:
        return float(mat[0][0])
    elif size < 3:
        sum1 = 1
        sum2 = 1
        for i in range(size):
            #print(f"mat[i][i]{mat[i][i]}")
            #print(f"mat[i][len(mat[i]){mat[i][len(mat[i])-1-i]}")
            sum1 *= float(mat[i][i])
            sum2 *= float(mat[i][len(mat[i]) - 1 - i])
        #print(sum1)
        #print(sum2)
        sum = sum1 - sum2
        return sum
    else:
        row = mat.pop(0)
        count = 1
        for i in range(0, len(row)):
            new_matrice = [[k[j] for j in range(0, len(k)) if j != i] for k in mat]
            #print(new_matrice)
            sum += (float(row[i]) * (-1) ** (1 + count)) * determinant_recursion(new_matrice, size - 1)
            count += 1
        return sum


def create_minors_matrix(mat, size):
    minor_list = []
    for i in range(len(mat)):
        for j in range(len(mat[i])):
            #print(f"i{i} j{j}")
            minor_matrix = [[mat[k][p] for p in range(len(mat[i])) if p!=j] for k in range(len(mat)) if k!=i]
            det_of_minor_matrix = determinant_recursion(minor_matrix, size-1)
            minor_list.append(det_of_minor_matrix)
    for i in range(len(minor_list)):
        if i%2!=0:
            minor_list[i]=-minor_list[i]
    return [minor_list[i:i+4] for i in range(0, len(minor_list), 4)]



def usual_transpone(mat):
    return list(map(list, (zip(*mat))))


def inverse_matrix(mat, size):
    return determinant_recursion(mat, size)

transponed_matrix = (create_minors_matrix([[2.65, 3.54, 3.88, 8.99], [3.12, 5.45, 7.77, 5.56], [5.31, 2.23, 2.33, 9.81],[1.67, 1.67, 1.01, 9.99]], 4))
print(transponed_matrix)
print(determinant_recursion([[2.65, 3.54, 3.88, 8.99], [3.12, 5.45, 7.77, 5.56], [5.31, 2.23, 2.33, 9.81],[1.67, 1.67, 1.01, 9.99]], 4))
#res = inverse_matrix([[3, 0, 2], [2, 0, -2], [0, 1, 1]], 3)
#print(res)
