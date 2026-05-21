import { arrayToLinkedList, linkedListToArray, ListNode } from '../../helpers/linked-list';

export function isPalindromeWithExtraSpace(head: ListNode | null): boolean {
  const arr = [];
  let current = head;
  while (current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

export function isPalindrome(head: ListNode | null): boolean {
  let result = true;
  const middle = findMiddle(head);
  const prev: ListNode | null = reverseLinkedList(middle);
  let currentFirstHalf = head;
  let currentSecondHalf = prev;
  while (currentFirstHalf !== null && currentSecondHalf !== null) {
    if (currentFirstHalf.val !== currentSecondHalf.val) {
      result = false;
      break;
    }
    currentFirstHalf = currentFirstHalf.next;
    currentSecondHalf = currentSecondHalf.next;
  }

  reverseLinkedList(prev);

  return result;
}

function findMiddle(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null && slow !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return slow;
}

function reverseLinkedList(head: ListNode | null): ListNode | null {
  let current: ListNode | null = head;
  let prev: ListNode | null = null;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

if (require.main === module) {
  {
    const examples: number[][] = [
      [1, 2, 1],
      [1, 2, 3, 3, 1],
    ];

    for (const input of examples) {
      const head = arrayToLinkedList(input);
      const result = isPalindrome(head);
      const afterCall = linkedListToArray(head);
      const restored = JSON.stringify(input) === JSON.stringify(afterCall);

      console.log(`Input:       [${input.join(', ')}]`);
      console.log(`Palindrome?  ${result}`);
      console.log(`After call:  [${afterCall.join(', ')}]`);
      console.log(`Restored:    ${restored}`);
      console.log(`-----`);
    }
  }

  {
    const examples: number[][] = [
      [1, 2, 1],
      [1, 2, 3, 3, 1],
    ];

    for (const input of examples) {
      const head = arrayToLinkedList(input);
      const result = isPalindromeWithExtraSpace(head);
      const afterCall = linkedListToArray(head);
      const restored = JSON.stringify(input) === JSON.stringify(afterCall);

      console.log(`Input:       [${input.join(', ')}]`);
      console.log(`Palindrome?  ${result}`);
      console.log(`After call:  [${afterCall.join(', ')}]`);
      console.log(`Restored:    ${restored}`);
      console.log(`-----`);
    }
  }
}
