import { arrayToLinkedList, linkedListToArray, ListNode } from '../../helpers/linked-list';

export function reorderList(head: ListNode | null): void {
  if (head === null || head.next === null) return;

  let fast: ListNode | null = head;
  let slow: ListNode | null = head;
  let prev: ListNode | null = null;
  while (fast !== null && fast.next !== null && slow !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  if (prev !== null) {
    prev.next = null;
  }

  let current = slow;
  let revPrev = null;

  while (current !== null) {
    const next = current.next;
    current.next = revPrev;
    revPrev = current;
    current = next;
  }

  let currentA: ListNode | null = head;
  let currentB = revPrev;
  while (currentA !== null && currentB !== null) {
    const nextA: ListNode | null = currentA.next;
    const nextB = currentB.next;
    currentA.next = currentB;
    if (nextA) {
      currentB.next = nextA;
    }
    currentA = nextA;
    currentB = nextB;
  }
}

if (require.main === module) {
  const cases = [
    {
      arr: [1, 2, 3, 4],
      expected: [1, 4, 2, 3],
      label: 'even length',
    },
    {
      arr: [1, 2, 3, 4, 5],
      expected: [1, 5, 2, 4, 3],
      label: 'odd length',
    },
  ];

  for (const { arr, expected, label } of cases) {
    const head = arrayToLinkedList(arr);
    reorderList(head);
    const resultArr = linkedListToArray(head);
    const pass = JSON.stringify(resultArr) === JSON.stringify(expected) ? '✅ Passed' : '❌ Failed';
    console.log(`${pass} ${label}: arr=${JSON.stringify(arr)} -> ${JSON.stringify(resultArr)}`);
  }
}
