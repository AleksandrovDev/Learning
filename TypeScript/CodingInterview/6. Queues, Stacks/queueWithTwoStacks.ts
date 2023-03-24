// https://leetcode.com/problems/implement-queue-using-stacks/

// Implement FIFO (queue)
// Can only use push() and pop() because this is stack
// No indexes, no shift / unshift

class MyQueue {
  constructor(private stackIn: any[] = [], private stackOut: any[] = []) {}

  push(x: number): void {
    this.stackIn.push(x);
  }

  pop(): number {
    this.moveToStackOut();
    const lastElement = this.stackOut.pop();
    this.moveToStackIn();

    return lastElement;
  }

  peek(): number {
    this.moveToStackOut();
    const lastElement = this.stackOut[this.stackOut.length - 1];
    this.moveToStackIn();

    return lastElement;
  }

  empy(): boolean {
    return !this.stackIn.length;
  }

  private moveToStackOut() {
    this.stackOut.push(this.stackIn.pop());
  }

  private moveToStackIn() {
    this.stackIn.push(this.stackOut.pop());
  }
}
