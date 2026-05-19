import {
  removeNthFromEnd,
  removeNthFromEndWithDummyNode,
  //   removeNthFromEndWithDummyNode,
  removeNthFromEndWithoutDummyNode,
} from './0019-remove-nth-node-linked-list-from-end';
import { arrayToLinkedList, linkedListToArray } from '../../helpers/linked-list';

describe('LC 19 - Remove Nth node from Linked List - removeNthFromEndWithoutDummyNode', () => {
  test('removes node from middle', () => {
    const head = arrayToLinkedList([1, 2, 3, 4, 5]);
    const result = removeNthFromEndWithoutDummyNode(head, 2);
    expect(linkedListToArray(result)).toEqual([1, 2, 3, 5]);
  });

  test('removes node from head', () => {
    const head = arrayToLinkedList([1, 2]);
    const result = removeNthFromEndWithoutDummyNode(head, 2);
    expect(linkedListToArray(result)).toEqual([2]);
  });

  test('removes node from tail', () => {
    const head = arrayToLinkedList([1, 2]);
    const result = removeNthFromEndWithoutDummyNode(head, 1);
    expect(linkedListToArray(result)).toEqual([1]);
  });

  test('removes when only one node', () => {
    const head = arrayToLinkedList([1]);
    const result = removeNthFromEndWithoutDummyNode(head, 1);
    expect(linkedListToArray(result)).toEqual([]);
  });

  test('removes from middle when 30 nodes', () => {
    const head = arrayToLinkedList(Array.from({ length: 30 }, (v, k) => k));
    const result = removeNthFromEndWithoutDummyNode(head, 8);
    expect(linkedListToArray(result)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26,
      27, 28, 29,
    ]);
  });

  test('removes from middle when 0-100 value in nodes', () => {
    const head = arrayToLinkedList([0, 100, 99, 55]);
    const result = removeNthFromEndWithoutDummyNode(head, 3);
    expect(linkedListToArray(result)).toEqual([0, 99, 55]);
  });

  test('removes from middle when 0 value in nodes', () => {
    const head = arrayToLinkedList([0, 0, 0, 0]);
    const result = removeNthFromEndWithoutDummyNode(head, 3);
    expect(linkedListToArray(result)).toEqual([0, 0, 0]);
  });
});

describe('LC 19 - Remove Nth node from Linked List - removeNthFromEndWithDummyNode', () => {
  test('removes node from middle', () => {
    const head = arrayToLinkedList([1, 2, 3, 4, 5]);
    const result = removeNthFromEndWithDummyNode(head, 2);
    expect(linkedListToArray(result)).toEqual([1, 2, 3, 5]);
  });

  test('removes node from head', () => {
    const head = arrayToLinkedList([1, 2]);
    const result = removeNthFromEndWithDummyNode(head, 2);
    expect(linkedListToArray(result)).toEqual([2]);
  });

  test('removes node from tail', () => {
    const head = arrayToLinkedList([1, 2]);
    const result = removeNthFromEndWithDummyNode(head, 1);
    expect(linkedListToArray(result)).toEqual([1]);
  });

  test('removes when only one node', () => {
    const head = arrayToLinkedList([1]);
    const result = removeNthFromEndWithDummyNode(head, 1);
    expect(linkedListToArray(result)).toEqual([]);
  });

  test('removes from middle when 30 nodes', () => {
    const head = arrayToLinkedList(Array.from({ length: 30 }, (v, k) => k));
    const result = removeNthFromEndWithDummyNode(head, 8);
    expect(linkedListToArray(result)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26,
      27, 28, 29,
    ]);
  });

  test('removes from middle when 0-100 value in nodes', () => {
    const head = arrayToLinkedList([0, 100, 99, 55]);
    const result = removeNthFromEndWithDummyNode(head, 3);
    expect(linkedListToArray(result)).toEqual([0, 99, 55]);
  });

  test('removes from middle when 0 value in nodes', () => {
    const head = arrayToLinkedList([0, 0, 0, 0]);
    const result = removeNthFromEndWithDummyNode(head, 3);
    expect(linkedListToArray(result)).toEqual([0, 0, 0]);
  });
});

describe('LC 19 - Remove Nth node from Linked List - removeNthFromEnd', () => {
  test('removes node from middle', () => {
    const head = arrayToLinkedList([1, 2, 3, 4, 5]);
    const result = removeNthFromEnd(head, 2);
    expect(linkedListToArray(result)).toEqual([1, 2, 3, 5]);
  });

  test('removes node from head', () => {
    const head = arrayToLinkedList([1, 2]);
    const result = removeNthFromEnd(head, 2);
    expect(linkedListToArray(result)).toEqual([2]);
  });

  test('removes node from tail', () => {
    const head = arrayToLinkedList([1, 2]);
    const result = removeNthFromEnd(head, 1);
    expect(linkedListToArray(result)).toEqual([1]);
  });

  test('removes when only one node', () => {
    const head = arrayToLinkedList([1]);
    const result = removeNthFromEnd(head, 1);
    expect(linkedListToArray(result)).toEqual([]);
  });

  test('removes from middle when 30 nodes', () => {
    const head = arrayToLinkedList(Array.from({ length: 30 }, (v, k) => k));
    const result = removeNthFromEnd(head, 8);
    expect(linkedListToArray(result)).toEqual([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 23, 24, 25, 26,
      27, 28, 29,
    ]);
  });

  test('removes from middle when 0-100 value in nodes', () => {
    const head = arrayToLinkedList([0, 100, 99, 55]);
    const result = removeNthFromEnd(head, 3);
    expect(linkedListToArray(result)).toEqual([0, 99, 55]);
  });

  test('removes from middle when 0 value in nodes', () => {
    const head = arrayToLinkedList([0, 0, 0, 0]);
    const result = removeNthFromEnd(head, 3);
    expect(linkedListToArray(result)).toEqual([0, 0, 0]);
  });
});
