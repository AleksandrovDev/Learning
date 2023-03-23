// https://leetcode.com/problems/lru-cache

class LRUcache {
  private readonly cacheMap = new Map();

  constructor(private readonly capacity: number) {}

  get(key: number): number {
    if (!this.cacheMap.has(key)) {
      return -1;
    }

    const value = this.cacheMap.get(key);

    this.cacheMap.delete(key);
    this.cacheMap.set(key, value);

    return value;
  }

  put(key: number, value: number): void {
    if (this.cacheMap.has(key)) {
      this.cacheMap.delete(key);
      this.cacheMap.set(key, value);
      return;
    }

    if (this.cacheMap.size < this.capacity) {
      this.cacheMap.set(key, value);
    } else {
      const oldestKey = this.cacheMap.keys().next().value;
      this.cacheMap.delete(oldestKey);
      this.cacheMap.set(key, value);
    }
  }
}
// Can we use only One way linked list here? Only with next?

class ListNode {
  constructor(
    public readonly key?: number,
    public value?: number,
    public prevValue?: ListNode,
    public nextValue?: ListNode,
  ) {}
}

// We have our linked list
// Update:
//   if Node exists:
//     1. we should remove node from the current position
//     2. add it to the beginning
//   if Node new:
//     1. Check free capacity
//     if no capacity:
//        1. Delete last element from linked list
//        2. Insert this node to the beginning
//     if capacity:
//        1. Insert this node to the beginning

// head and tail is dummy references

class LRUcacheLinkedList {
  public readonly cacheMap = new Map<number, ListNode>();

  private head = new ListNode();
  private tail = new ListNode();

  constructor(private readonly capacity: number) {
    this.head.nextValue = this.tail;
    this.tail.prevValue = this.head;
  }

  get(key: number): number {
    const node = this.cacheMap.get(key);
    if (node) {
      this.removeNode(node!);
      this.addNodeToStart(node!);
      return node?.value!;
    }
    return -1;
  }

  put(key: number, value: number): void {
    const node = this.cacheMap.get(key);

    if (node) {
      this.removeNode(node);
      node.value = value;
      this.addNodeToStart(node);
      return;
    }

    if (this.cacheMap.size === this.capacity) {
      const keyToDelete = this.tail.prevValue?.key;

      this.removeNode(this.tail.prevValue!);
      this.cacheMap.delete(keyToDelete!);
    }

    const newNode = new ListNode(key, value);

    this.cacheMap.set(key, newNode);
    this.addNodeToStart(newNode);
  }

  addNodeToStart(node: ListNode): void {
    const oldFirstValue = this.head.nextValue;

    oldFirstValue!.prevValue = node;
    this.head.nextValue = node;

    node.prevValue = this.head;
    node.nextValue = oldFirstValue;
  }

  removeNode(node: ListNode): void {
    const prevNode = node.prevValue;
    const nextNode = node.nextValue;

    prevNode!.nextValue = nextNode;
    nextNode!.prevValue = prevNode;
  }
}

const LRUcacheInstance = new LRUcacheLinkedList(2);

LRUcacheInstance.put(1, 1);
LRUcacheInstance.put(2, 2);
console.log(LRUcacheInstance.cacheMap);
console.log(LRUcacheInstance.get(1));
LRUcacheInstance.put(3, 3);
console.log(LRUcacheInstance.cacheMap);
console.log(LRUcacheInstance.get(2));
LRUcacheInstance.put(4, 4);
console.log(LRUcacheInstance.cacheMap);
console.log(LRUcacheInstance.get(1));
console.log(LRUcacheInstance.get(3));
console.log(LRUcacheInstance.get(4));
