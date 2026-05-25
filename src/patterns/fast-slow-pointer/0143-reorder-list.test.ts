import { arrayToLinkedList, linkedListToArray } from '../../helpers/linked-list';
import { reorderList } from './0143-reorder-list';

describe('LC 0143 - reorder list', () => {
  test('even length', () => {
    const head = arrayToLinkedList([1, 2, 3, 4]);
    reorderList(head);
    expect(linkedListToArray(head)).toEqual([1, 4, 2, 3]);
  });

  test('odd length', () => {
    const head = arrayToLinkedList([1, 2, 3, 4, 5]);
    reorderList(head);
    expect(linkedListToArray(head)).toEqual([1, 5, 2, 4, 3]);
  });

  test('single length', () => {
    const head = arrayToLinkedList([1]);
    reorderList(head);
    expect(linkedListToArray(head)).toEqual([1]);
  });

  test('empty length', () => {
    const head = arrayToLinkedList([]);
    reorderList(head);
    expect(linkedListToArray(head)).toEqual([]);
  });

  test('same values', () => {
    const head = arrayToLinkedList([1, 1, 1, 1, 1]);
    reorderList(head);
    expect(linkedListToArray(head)).toEqual([1, 1, 1, 1, 1]);
  });

  test('5 x 10 ** 4', () => {
    const SIZE = 5 * 10 ** 4;
    const inputArray = Array.from({ length: SIZE }, (v, k) => k + 1);
    const head = arrayToLinkedList(inputArray);
    reorderList(head);
    const resultArr = linkedListToArray(head);
    expect(resultArr.length).toEqual(5 * 10 ** 4);
    expect(new Set(resultArr)).toEqual(new Set(inputArray));
    expect(resultArr[0]).toBe(1);
    expect(resultArr[1]).toBe(SIZE);
    expect(resultArr[2]).toBe(2);
    expect(resultArr[3]).toBe(SIZE - 1);
  });
});
