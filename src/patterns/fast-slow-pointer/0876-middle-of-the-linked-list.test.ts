import {
  middleNodeWithSingleParse,
  middleNodeWithTwoParse,
} from './0876-middle-of-the-linked-list';
import { arrayToLinkedList, linkedListToArray } from '../../helpers/linked-list';

describe('LC 876 - Middle of the Linked List - middleNodeWithTwoParse', () => {
  test('odd-length list [1,2,3,4,5] returns node 3 with tail [3,4,5]', () => {
    const head = arrayToLinkedList([1, 2, 3, 4, 5]);
    const result = middleNodeWithTwoParse(head);
    expect(linkedListToArray(result)).toEqual([3, 4, 5]);
  });

  test('even-length list [1,2,3,4,5,6] returns node 3 with tail [4,5,6]', () => {
    const head = arrayToLinkedList([1, 2, 3, 4, 5, 6]);
    const result = middleNodeWithTwoParse(head);
    expect(linkedListToArray(result)).toEqual([4, 5, 6]);
  });

  test('single-length list [1] returns node 1 with tail [1]', () => {
    const head = arrayToLinkedList([1]);
    const result = middleNodeWithTwoParse(head);
    expect(linkedListToArray(result)).toEqual([1]);
  });

  test('0-length list [] returns - with tail []', () => {
    const head = arrayToLinkedList([]);
    const result = middleNodeWithTwoParse(head);
    expect(linkedListToArray(result)).toEqual([]);
  });

  test('100 length', () => {
    const head = arrayToLinkedList(Array.from({ length: 100 }, (v, k) => k));
    const result = middleNodeWithTwoParse(head);
    const resultToEqual = Array.from({ length: 50 }, (v, k) => k + 50);
    expect(linkedListToArray(result)).toEqual(resultToEqual);
  });

  test('identical inputs', () => {
    const head = arrayToLinkedList([1, 1, 1, 1, 1, 1]);
    const result = middleNodeWithTwoParse(head);
    expect(linkedListToArray(result)).toEqual([1, 1, 1]);
  });

  test('negative inputs', () => {
    const head = arrayToLinkedList([-10, -5, -6]);
    const result = middleNodeWithTwoParse(head);
    expect(linkedListToArray(result)).toEqual([-5, -6]);
  });
});

describe('LC 876 - Middle of the Linked List - middleNodeWithSingleParse', () => {
  test('odd-length list [1,2,3,4,5] returns node 3 with tail [3,4,5]', () => {
    const head = arrayToLinkedList([1, 2, 3, 4, 5]);
    const result = middleNodeWithSingleParse(head);
    expect(linkedListToArray(result)).toEqual([3, 4, 5]);
  });

  test('even-length list [1,2,3,4,5,6] returns node 3 with tail [4,5,6]', () => {
    const head = arrayToLinkedList([1, 2, 3, 4, 5, 6]);
    const result = middleNodeWithSingleParse(head);
    expect(linkedListToArray(result)).toEqual([4, 5, 6]);
  });

  test('single-length list [1] returns node 1 with tail [1]', () => {
    const head = arrayToLinkedList([1]);
    const result = middleNodeWithSingleParse(head);
    expect(linkedListToArray(result)).toEqual([1]);
  });

  test('0-length list [] returns - with tail []', () => {
    const head = arrayToLinkedList([]);
    const result = middleNodeWithSingleParse(head);
    expect(linkedListToArray(result)).toEqual([]);
  });

  test('100 length', () => {
    const head = arrayToLinkedList(Array.from({ length: 100 }, (v, k) => k));
    const result = middleNodeWithSingleParse(head);
    const resultToEqual = Array.from({ length: 50 }, (v, k) => k + 50);
    expect(linkedListToArray(result)).toEqual(resultToEqual);
  });

  test('identical inputs', () => {
    const head = arrayToLinkedList([1, 1, 1, 1, 1, 1]);
    const result = middleNodeWithSingleParse(head);
    expect(linkedListToArray(result)).toEqual([1, 1, 1]);
  });

  test('negative inputs', () => {
    const head = arrayToLinkedList([-10, -5, -6]);
    const result = middleNodeWithSingleParse(head);
    expect(linkedListToArray(result)).toEqual([-5, -6]);
  });
});
