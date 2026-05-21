import { arrayToLinkedList, linkedListToArray, ListNode } from '../../helpers/linked-list';

export function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

if (require.main === module) {
  const arr = [1, 2, 3, 4, 5];
  const expected = [5, 4, 3, 2, 1];

  const head = arrayToLinkedList(arr);
  const result = reverseList(head);
  const resultArr = linkedListToArray(result);

  const pass = JSON.stringify(resultArr) === JSON.stringify(expected) ? '✅ Passed' : '❌ Failed';
  console.log(
    `${pass} arr=${JSON.stringify(arr)} -> ${JSON.stringify(resultArr)} (expected ${JSON.stringify(expected)})`,
  );
}
