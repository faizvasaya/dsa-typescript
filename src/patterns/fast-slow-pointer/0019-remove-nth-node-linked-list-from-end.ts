import { arrayToLinkedList, linkedListToArray, ListNode } from '../../helpers/linked-list';
/**
 * TC: O(N) + O(N)
 * SC: O(1)
 */
export function removeNthFromEndWithoutDummyNode(
  head: ListNode | null,
  n: number,
): ListNode | null {
  let current = head;
  let size = 0;
  while (current !== null) {
    size++;
    current = current.next;
  }
  current = head;
  let prev = null;
  let index = 0;
  while (current !== null && index < size - n) {
    index++;
    prev = current;
    current = current.next;
  }

  if (prev !== null && current !== null) {
    prev.next = current.next;
  } else if (current == head && current && current.next !== null && head !== null) {
    head = head.next;
  } else {
    head = null;
  }

  return head;
}

/**
 * TC: O(N) + O(N)
 * SC: O(1)
 */
export function removeNthFromEndWithDummyNode(head: ListNode | null, n: number): ListNode | null {
  let current = head;
  let size = 0;
  const dummyNode = new ListNode(0, head);
  while (current !== null) {
    size++;
    current = current.next;
  }

  let index = 0;
  let prev = dummyNode;
  while (index < size - n) {
    if (prev.next === null) return prev.next;
    index++;
    prev = prev.next;
  }

  if (prev.next !== null) prev.next = prev.next.next;

  return dummyNode.next;
}

/**
 * TC: O(N) + O(N)
 * SC: O(1)
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyNode = new ListNode(0, head);
  let fast = dummyNode;
  let slow = dummyNode;
  let initialGap = 0;
  while (initialGap < n && fast.next !== null) {
    fast = fast.next;
    initialGap++;
  }
  while (fast.next !== null && slow.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next!.next;

  return dummyNode.next;
}

if (require.main === module) {
  const cases = [
    {
      arr: [1, 2, 3, 4, 5],
      n: 2,
      expected: [1, 2, 3, 5],
      label: 'remove from middle',
    },
    {
      arr: [1, 2, 3, 4, 5],
      n: 5,
      expected: [2, 3, 4, 5],
      label: 'remove from head',
    },
    {
      arr: [1, 2, 3, 4, 5],
      n: 1,
      expected: [1, 2, 3, 4],
      label: 'remove from tail',
    },
    {
      arr: [1],
      n: 1,
      expected: [],
      label: 'single node removed, empty linked list',
    },
    {
      arr: [1, 2],
      n: 1,
      expected: [1],
      label: 'two nodes, remove tail',
    },
    {
      arr: [1, 2],
      n: 2,
      expected: [2],
      label: 'two nodes, remove head',
    },
  ];

  for (const { arr, expected, label, n } of cases) {
    const head = arrayToLinkedList(arr);
    const result = removeNthFromEndWithoutDummyNode(head, n);
    const resultArr = linkedListToArray(result);
    const pass = JSON.stringify(resultArr) === JSON.stringify(expected) ? '✅ Passed' : '❌ Failed';
    console.log(
      `${pass} ${label} arr=${JSON.stringify(arr)}, n=${n} -> ${JSON.stringify(resultArr)} (expected ${JSON.stringify(expected)}`,
    );
  }

  for (const { arr, expected, label, n } of cases) {
    const head = arrayToLinkedList(arr);
    const result = removeNthFromEndWithDummyNode(head, n);
    const resultArr = linkedListToArray(result);
    const pass = JSON.stringify(resultArr) === JSON.stringify(expected) ? '✅ Passed' : '❌ Failed';
    console.log(
      `${pass} ${label} arr=${JSON.stringify(arr)}, n=${n} -> ${JSON.stringify(resultArr)} (expected ${JSON.stringify(expected)}`,
    );
  }
}
