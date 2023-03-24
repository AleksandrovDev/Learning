// https://leetcode.com/problems/min-stack/

class MinStack {
  constructor(
    private readonly minStack: number[] = [],
    private readonly stack: number[] = [],
  ) {}

  push(val: number): void {
    this.stack.push(val);

    if (
      !this.minStack.length ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop(): void {
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}
