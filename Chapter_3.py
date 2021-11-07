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




