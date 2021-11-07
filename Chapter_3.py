"""
Simple network with single input and output
"""

inputs = [8.5, 9, 1]
weights = [0.1, 2, 0.4]
class NeuralNetwork:
    @staticmethod
    def neural_network(input, weight):
        prediction = input * weight
        return prediction


n = NeuralNetwork()
print(n.neural_network(inputs[0], weights[0]))

"""
Several inputs
"""


class NeuralNetwork:
    def __init__(self, input, weights):
        self.input = input
        self.weights = weights

    def w_sum(self, a, b):
        assert len(a) == len(b)
        output = 0
        for i in range(len(a)):
            output += a[i] * b[i]
        return output

    def neural_network(self, input, weights):
        pred = self.w_sum(input, weights)
        return pred

input = [8.5, 0.65, 1.20]
weights = [0.1, 0.2, 0.0]
n = NeuralNetwork(input, weights)
print(n.neural_network(input, weights))


"""
Several outputs
"""

class NeuralNetwork:
    def __init__(self, input, weights):
        self.input = input
        self.weights = weights
        self.output = [0 for i in range(len(weights))]

    def ele_mul(self, number, vector):
        assert len(self.output) == len(vector)
        for i in range(len(vector)):
            self.output[i] = number * vector[i]
        return self.output

    def neural_network(self, input, weights):
        pred = self.ele_mul(input, weights)
        return pred

input = 0.65
weights = [0.3, 0.2, 0.9]

net = NeuralNetwork(input, weights)
print(net.neural_network(input, weights))


"""
Several inputs and several outputs
"""

class NeuralNetwork():
    weights = [
        [0.1, 0.1, -0.3],
        [0.1, 0.2, 0.0],
        [0.0, 1.3, 0.1]
    ]
    toes = [8.5, 9.5, 9.9, 9.0]
    wlrec = [0.65, 0.8, 0.8, 0.9]
    nfans = [1.2, 1.3, 0.5, 1.0]

    input = [toes[0], wlrec[0], nfans[0]]
    #output = [0 for i in range(len(input))]


    def w_sum(self, a, b):
        assert len(a) == len(b)
        output = 0  # elementswise multiplication
        for i in range(len(a)):
            output += (a[i] * b[i])
        return output

    def vect_mat_mul(self, vect, matrix):
        output = [0, 0, 0]
        for i in range(len(vect)):
            output[i] = self.w_sum(vect, matrix[i])  # vect = input, matrix[i] = weights for the 1st output
        return output  # get outputs for every pair input * weights[i]

    def neural_network(self, input, weights):
        pred = self.vect_mat_mul(input, weights)
        return pred

    def get_result(self):
        print('Several inputs and several outputs: ', self.neural_network(self.input, self.weights))


net = NeuralNetwork()
net.get_result()


"""
Predictions based on predictions
"""



















