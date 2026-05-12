import { arrayToLinkedList, linkedListToArray, ListNode } from '../../helpers/linked-list';

export function middleNodeWithSingleParse(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (slow != null && fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

export function middleNodeWithTwoParse(head: ListNode | null): ListNode | null {
  let current = head;
  let countOfNodes = 0;

  while (current != null) {
    countOfNodes++;
    current = current.next;
  }

  let countOfNodeForSecondParse = 0;
  let endCount;
  current = head;

  if (countOfNodes % 2 === 0) {
    endCount = countOfNodes / 2;
  } else {
    endCount = countOfNodes / 2 - 1;
  }

  while (countOfNodeForSecondParse < endCount && current !== null) {
    countOfNodeForSecondParse++;
    current = current.next;
  }

  return current;
}

if (require.main === module) {
  const cases = [
    {
      arr: [1, 2, 3, 4, 5],
      expected: [3, 4, 5],
    },
    {
      arr: [1, 2, 3, 4, 5, 6],
      expected: [4, 5, 6],
    },
  ];

  for (const { arr, expected } of cases) {
    const head = arrayToLinkedList(arr);
    const middleNode = middleNodeWithTwoParse(head);
    const resultArr = linkedListToArray(middleNode);
    const pass = JSON.stringify(resultArr) === JSON.stringify(expected) ? '✅ Passed' : '❌ Failed';
    console.log(
      `middleNodeWithTwoParse ${pass} arr=${JSON.stringify(arr)} result=${JSON.stringify(resultArr)}`,
    );
  }

  for (const { arr, expected } of cases) {
    const head = arrayToLinkedList(arr);
    const middleNode = middleNodeWithSingleParse(head);
    const resultArr = linkedListToArray(middleNode);
    const pass = JSON.stringify(resultArr) === JSON.stringify(expected) ? '✅ Passed' : '❌ Failed';
    console.log(
      `middleNodeWithSingleParse ${pass} arr=${JSON.stringify(arr)} result=${JSON.stringify(resultArr)}`,
    );
  }
}
