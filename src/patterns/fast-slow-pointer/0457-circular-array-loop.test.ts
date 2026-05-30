import { circularArrayLoop, circularArrayLoopWithMarking } from './0457-circular-array-loop';

describe('LC 457 - Circular array loop - circularArrayLoop', () => {
  test('Valid forward cycle', () => {
    expect(circularArrayLoop([2, -1, 1, 2, 2])).toEqual(true);
  });

  test('Self loop, no valid cycle', () => {
    expect(circularArrayLoop([-1, 2])).toEqual(false);
  });

  test('Mix back cycle, valid cycle', () => {
    expect(circularArrayLoop([1, -1, 5, 1, 4])).toEqual(true);
  });
});

describe('LC 457 - Circular array loop - circularArrayLoopWithMarking', () => {
  test('Valid forward cycle', () => {
    expect(circularArrayLoopWithMarking([2, -1, 1, 2, 2])).toEqual(true);
  });

  test('Self loop, no valid cycle', () => {
    expect(circularArrayLoopWithMarking([-1, 2])).toEqual(false);
  });

  test('Mix back cycle, valid cycle', () => {
    expect(circularArrayLoopWithMarking([1, -1, 5, 1, 4])).toEqual(true);
  });
});
