interface ListNode {
  data: number;
  next: ListNode | null;
}

function hasCycleFloydAlgorithm(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  
  while (slow && slow.next && fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;
    
    if (slow === fast) {
      return true; // intersection of slow and fast step => cycle detected
    }
  }
  
  return false;
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
