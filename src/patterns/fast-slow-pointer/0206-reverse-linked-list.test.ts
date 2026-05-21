import { arrayToLinkedList, linkedListToArray } from '../../helpers/linked-list';
import { reverseList } from './0206-reverse-linked-list';

describe('LC 206 - Reverse Linked List - Iteratively', () => {
  test('reverse of [1,2,3,4,5] - odd length', () => {
    const head = arrayToLinkedList([1, 2, 3, 4, 5]);
    const result = reverseList(head);
    expect(linkedListToArray(result)).toEqual([5, 4, 3, 2, 1]);
  });

  test('reverse of [1,2,3,4] - even length', () => {
    const head = arrayToLinkedList([1, 2, 3, 4]);
    const result = reverseList(head);
    expect(linkedListToArray(result)).toEqual([4, 3, 2, 1]);
  });

  test('reverse of [1] - single element', () => {
    const head = arrayToLinkedList([1]);
    const result = reverseList(head);
    expect(linkedListToArray(result)).toEqual([1]);
  });

  test('reverse of [1,1,1,1] - duplicate elements', () => {
    const head = arrayToLinkedList([1, 1, 1, 1]);
    const result = reverseList(head);
    expect(linkedListToArray(result)).toEqual([1, 1, 1, 1]);
  });

  test('reverse of [5000,4999,28,-5000,-4999] - boundary elements', () => {
    const head = arrayToLinkedList([5000, 4999, 28, -5000, -4999]);
    const result = reverseList(head);
    expect(linkedListToArray(result)).toEqual([-4999, -5000, 28, 4999, 5000]);
  });

  test('reverse of [5000,4999,28,-5000,-4999] - boundary elements', () => {
    const SIZE = 5 * 10 ** 4;
    const arr = Array.from({ length: SIZE }, (v, k) => k);
    const head = arrayToLinkedList(arr);
    const result = reverseList(head);
    const resultArr = linkedListToArray(result);

    expect(resultArr.length).toBe(SIZE);
    expect(resultArr[0]).toBe(SIZE - 1);
    expect(resultArr[SIZE - 1]).toBe(0);
  });

  test('empty list returns null', () => {
    expect(reverseList(null)).toBeNull();
  });
});
