<style>
  r {color: red}
  g {color: green}
</style>

# [Steps to solve algorithm problem](./7%20StepsToSolveAlgoProblems.md)

1. Understanding and defining the problem
2. Analyse the problem
3. Basic solution
4. Analysing the solution
5. Ways of improvement with pseudocode, another solutions
6. Implementing to code
7. Tests, measure the results

## Goog algorithm should be:

1. Correct
2. Efficient

<br>

# [Sortings](./Sortings/)

1. [Insertion](../TypeScript/CodingInterview/1.%20Basics/Sortings/insertionSorting.ts): Move from right subarray to the right place on the left subarray
2. [Selection](../TypeScript/CodingInterview/1.%20Basics/Sortings/selectionSorting.ts): Chose lowest in the right subarray and move it to the left subarray
3. [Merge](../TypeScript/CodingInterview/2.%20Recursion/mergeSort.ts): Split to 1 element, then collect sorted subarrays
   <br>

# [Graphs](../TypeScript/CodingInterview/Graphs/)

- Node (Vertex) and Edge(Connection)

- Undirected graph <->
- Directed graph ->
- Weighted graph (edges have weights)
- Cycle

- We can represent a graph using 2D array or List (Adjacency matrix, Adjacency list)

## [Graph traversals:](../TypeScript/CodingInterview/Graphs/airports.ts)

- Time complexity: O(Nodes + Vertexes) => O(n)

### [**BFS**](../TypeScript/CodingInterview/Graphs/airports.ts#L35): To search for all cases

1. From starting node
2. Add all it's children to the queue if not visited yet
3. Then check their children

### [**DFS**](../TypeScript/CodingInterview/Graphs/airports.ts#L62) (Can be implemented recursively) To search fastest way

1.  Start from random node
2.  Go to its first child then its first child
3.  If no child, back to the last node and continue the process

# [BinarySearch](../TypeScript//CodingInterview/3.%20Arrays%2C%20Strings/binarySearch.ts)

# BST

# DivideAndConquer

# Floyd's tortoise and hare

# Greedy

# Two Pointer

# Route finding algorithm (Djikstra)

# MinMax search algorithm

# Nearest insertion
