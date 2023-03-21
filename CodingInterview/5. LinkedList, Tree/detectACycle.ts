interface ListNode {
  data: number;
  next: ListNode | null;
}

function hasCycle(head: ListNode | null): boolean {
  const visitedNodes = new Set();

  if (!head) {
    return false;
  }

  let node = head;

  while (node.next !== null) {
    if (visitedNodes.has(node)) {
      return true;
    }

    visitedNodes.add(node);

    node = node.next;
  }

  return false;
}
