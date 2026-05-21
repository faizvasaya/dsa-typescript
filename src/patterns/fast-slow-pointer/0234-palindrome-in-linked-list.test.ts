import { arrayToLinkedList, linkedListToArray } from '../../helpers/linked-list';
import { isPalindrome, isPalindromeWithExtraSpace } from './0234-palindrome-in-linked-list';

it.each([
  { input: [1], expected: true },
  { input: [1, 2], expected: false },
  { input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], expected: true },
  {
    input: Array.from({ length: 10 ** 5 }, (v, k) => (k < 50000 ? k : 99999 - k)) as number[],
    expected: true,
  },
  { input: [], expected: true },
])('isPalindrome($input) === $expected and restores the list', ({ input, expected }) => {
  const head = arrayToLinkedList(input);
  expect(isPalindrome(head)).toBe(expected);
  expect(linkedListToArray(head)).toEqual(input);
});

it.each([
  { input: [1], expected: true },
  { input: [1, 2], expected: false },
  { input: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], expected: true },
  {
    input: Array.from({ length: 10 ** 5 }, (v, k) => (k < 50000 ? k : 99999 - k)) as number[],
    expected: true,
  },
  { input: [], expected: true },
])('isPalindrome($input) === $expected and restores the list', ({ input, expected }) => {
  const head = arrayToLinkedList(input);
  expect(isPalindromeWithExtraSpace(head)).toBe(expected);
  expect(linkedListToArray(head)).toEqual(input);
});
