import {
  isPalindrome,
  isPalindromeTwoPassExtraSpace,
  isPalindromeUsingJS,
} from './0125-valid-palindrome-string';

describe('LC 125 - Valid Palindrome - isPalindrome', () => {
  it('happy case - truth', () => {
    const string = 'A man, a plan, a canal: Panama';
    expect(isPalindrome(string)).toBe(true);
  });

  it('happy case - falsy', () => {
    const string = 'race a car';
    expect(isPalindrome(string)).toBe(false);
  });

  it('happy case only special characters - falsy', () => {
    const string = '!,()./;';
    expect(isPalindrome(string)).toBe(true);
  });

  it('happy case empty string', () => {
    const string = '    ';
    expect(isPalindrome(string)).toBe(true);
  });

  it('happy case single input', () => {
    const string = 'a';
    expect(isPalindrome(string)).toBe(true);
  });

  it('happy case 2 * 10 ** 5', () => {
    const SIZE = 2 * 10 ** 5;
    const firstHalf = 'a'.repeat(SIZE / 2);
    const secondHalf = firstHalf.split('').reverse().join('');
    const string = firstHalf + secondHalf;
    expect(isPalindrome(string)).toBe(true);
  });

  it('happy case 2 * 10 ** 5', () => {
    const SIZE = 2 * 10 ** 5;
    const firstHalf = 'a'.repeat(SIZE / 2);
    const secondHalf = 'b'.repeat(SIZE / 2);
    const string = firstHalf + secondHalf;
    expect(isPalindrome(string)).toBe(false);
  });
});

describe('LC 125 - Valid Palindrome - isPalindromeTwoPassExtraSpace', () => {
  it('happy case - truth', () => {
    const string = 'A man, a plan, a canal: Panama';
    expect(isPalindromeTwoPassExtraSpace(string)).toBe(true);
  });

  it('happy case - falsy', () => {
    const string = 'race a car';
    expect(isPalindromeTwoPassExtraSpace(string)).toBe(false);
  });

  it('happy case only special characters - falsy', () => {
    const string = '!,()./;';
    expect(isPalindromeTwoPassExtraSpace(string)).toBe(true);
  });

  it('happy case empty string', () => {
    const string = '    ';
    expect(isPalindromeTwoPassExtraSpace(string)).toBe(true);
  });

  it('happy case single input', () => {
    const string = 'a';
    expect(isPalindromeTwoPassExtraSpace(string)).toBe(true);
  });

  it('happy case 2 * 10 ** 5', () => {
    const SIZE = 2 * 10 ** 5;
    const firstHalf = 'a'.repeat(SIZE / 2);
    const secondHalf = firstHalf.split('').reverse().join('');
    const string = firstHalf + secondHalf;
    expect(isPalindromeTwoPassExtraSpace(string)).toBe(true);
  });

  it('happy case 2 * 10 ** 5', () => {
    const SIZE = 2 * 10 ** 5;
    const firstHalf = 'a'.repeat(SIZE / 2);
    const secondHalf = 'b'.repeat(SIZE / 2);
    const string = firstHalf + secondHalf;
    expect(isPalindromeTwoPassExtraSpace(string)).toBe(false);
  });
});

describe('LC 125 - Valid Palindrome - isPalindromeUsingJS', () => {
  it('happy case - truth', () => {
    const string = 'A man, a plan, a canal: Panama';
    expect(isPalindromeUsingJS(string)).toBe(true);
  });

  it('happy case - falsy', () => {
    const string = 'race a car';
    expect(isPalindromeUsingJS(string)).toBe(false);
  });

  it('happy case only special characters - falsy', () => {
    const string = '!,()./;';
    expect(isPalindromeUsingJS(string)).toBe(true);
  });

  it('happy case empty string', () => {
    const string = '    ';
    expect(isPalindromeUsingJS(string)).toBe(true);
  });

  it('happy case single input', () => {
    const string = 'a';
    expect(isPalindromeUsingJS(string)).toBe(true);
  });

  it('happy case 2 * 10 ** 5', () => {
    const SIZE = 2 * 10 ** 5;
    const firstHalf = 'a'.repeat(SIZE / 2);
    const secondHalf = firstHalf.split('').reverse().join('');
    const string = firstHalf + secondHalf;
    expect(isPalindromeUsingJS(string)).toBe(true);
  });

  it('happy case 2 * 10 ** 5', () => {
    const SIZE = 2 * 10 ** 5;
    const firstHalf = 'a'.repeat(SIZE / 2);
    const secondHalf = 'b'.repeat(SIZE / 2);
    const string = firstHalf + secondHalf;
    expect(isPalindromeUsingJS(string)).toBe(false);
  });
});
