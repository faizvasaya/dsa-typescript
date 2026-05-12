import { isHappyWithExtraSpace, isHappyWithoutExtraSpace } from './0202-happy-number';

describe('LC 202 - Happy Number - Extra Space', () => {
  test('n=19 is happy number', () => {
    expect(isHappyWithExtraSpace(19)).toBe(true);
  });

  test('n=4 is happy number', () => {
    expect(isHappyWithExtraSpace(4)).toBe(false);
  });

  test('n=91 is happy number', () => {
    expect(isHappyWithExtraSpace(91)).toBe(true);
  });

  test('n=2 is happy number', () => {
    expect(isHappyWithExtraSpace(2)).toBe(false);
  });

  test('n=1 is happy number', () => {
    expect(isHappyWithExtraSpace(1)).toBe(true);
    expect(isHappyWithExtraSpace(1)).toBe(true);
  });

  test('n=2^31 is happy number', () => {
    expect(isHappyWithExtraSpace(2147483647)).toBe(false);
  });

  test('1000 is happy number', () => {
    expect(isHappyWithExtraSpace(1000)).toBe(true);
  });

  test('12121212 is happy number', () => {
    expect(isHappyWithExtraSpace(12121212)).toBe(false);
  });
});

describe('LC 202 - Happy Number - Without Extra Space', () => {
  test('n=19 is happy number', () => {
    expect(isHappyWithoutExtraSpace(19)).toBe(true);
  });

  test('n=4 is happy number', () => {
    expect(isHappyWithoutExtraSpace(4)).toBe(false);
  });

  test('n=91 is happy number', () => {
    expect(isHappyWithoutExtraSpace(91)).toBe(true);
  });

  test('n=2 is happy number', () => {
    expect(isHappyWithoutExtraSpace(2)).toBe(false);
  });

  test('n=1 is happy number', () => {
    expect(isHappyWithoutExtraSpace(1)).toBe(true);
    expect(isHappyWithoutExtraSpace(1)).toBe(true);
  });

  test('n=2^31 is happy number', () => {
    expect(isHappyWithoutExtraSpace(2147483647)).toBe(false);
  });

  test('1000 is happy number', () => {
    expect(isHappyWithoutExtraSpace(1000)).toBe(true);
  });

  test('12121212 is happy number', () => {
    expect(isHappyWithoutExtraSpace(12121212)).toBe(false);
  });
});
