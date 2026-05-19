export class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

export function arrayToLinkedList(arr: number[]): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

export function linkedListToArray(head: ListNode | null): number[] {
  const arr: number[] = [];
  let current = head;

  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }

  return arr;
}

export function buildLinkedListWithCycle(arr: number[], cyclePos: number = -1): ListNode | null {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;
  let cycleNode: ListNode | null = cyclePos === 0 ? head : null;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
    if (i === cyclePos) {
      cycleNode = current;
    }
  }

  if (cyclePos >= 0 && cycleNode !== null) {
    current.next = cycleNode;
  }

  return head;
}

export function printLinkedList(head: ListNode | null, maxNodes: number = 50): string {
  const parts: string[] = [];
  let current = head;
  let count = 0;

  while (current !== null && count < maxNodes) {
    parts.push(String(current.val));
    current = current.next;
    count++;
  }

  if (current !== null) {
    parts.push('... (truncated)');
  }

  return parts.join(' -> ');
}

export function getNodeAtIndex(head: ListNode | null, index: number): ListNode | null {
  if (index < 0) return null;
  let current = head;
  let i = 0;
  while (current != null && i < index) {
    current = current.next;
    i++;
  }

  return current;
}

export function buildIntersectingLists(
  arrA: number[],
  arrB: number[],
  sharedTail: number[],
): [ListNode | null, ListNode | null, ListNode | null] {
  const sharedHead = arrayToLinkedList(sharedTail);

  const headA = arrayToLinkedList(arrA);
  if (headA === null) {
    return [sharedHead, attachTail(arrayToLinkedList(arrB), sharedHead), sharedHead];
  }
  let tailA = headA;
  while (tailA.next !== null) tailA = tailA.next;
  tailA.next = sharedHead;

  const headB = arrayToLinkedList(arrB);
  if (headB === null) {
    return [headA, sharedHead, sharedHead];
  }

  let tailB = headB;
  while (tailB.next !== null) tailB = tailB.next;
  tailB.next = sharedHead;

  return [headA, headB, sharedHead];
}

function attachTail(head: ListNode | null, tail: ListNode | null): ListNode | null {
  if (head === null) return null;

  let curr = head;
  while (curr.next !== null) curr = curr.next;
  curr.next = tail;
  return head;
}
