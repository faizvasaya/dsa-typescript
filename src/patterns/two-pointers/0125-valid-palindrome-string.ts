export function isPalindromeTwoPassExtraSpace(s: string): boolean {
  const cleanedStringChars: string[] = [];
  for (let index = 0; index < s.length; index++) {
    if (isAlphaNumeric(s.charAt(index))) cleanedStringChars.push(s.charAt(index).toLowerCase());
  }
  const cleanedString = cleanedStringChars.join('');
  let left = 0;
  let right = cleanedString.length - 1;
  while (left < right) {
    if (cleanedString.charAt(left) !== cleanedString.charAt(right)) return false;
    left++;
    right--;
  }

  return true;
}

export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    while (left < right && !isAlphaNumeric(s[left])) {
      left++;
    }
    while (left < right && !isAlphaNumeric(s[right])) {
      right--;
    }
    if (left < right && s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

export function isPalindromeUsingJS(s: string): boolean {
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '');

  // originalString.replace(/[^a-zA-Z0-9]/g, "");
  return cleanedString.toLowerCase() === cleanedString.toLowerCase().split('').reverse().join('');
}

function isAlphaNumeric(ch: string): boolean {
  return (ch >= '0' && ch <= '9') || (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
}

if (require.main === module) {
  {
    const cases = [
      { s: 'A man, a plan, a canal: Panama', expected: true },
      { s: 'race a car', expected: false },
    ];

    for (const { s, expected } of cases) {
      const result = isPalindrome(s);
      const pass = result === expected ? '✅ Passed' : '❌ Failed';
      console.log(`${pass} "${s}" => ${result} (expected ${expected})`);
    }
  }

  {
    const cases = [
      { s: 'A man, a plan, a canal: Panama', expected: true },
      { s: 'race a car', expected: false },
    ];

    for (const { s, expected } of cases) {
      const result = isPalindromeTwoPassExtraSpace(s);
      const pass = result === expected ? '✅ Passed' : '❌ Failed';
      console.log(`${pass} "${s}" => ${result} (expected ${expected})`);
    }
  }

  {
    const cases = [
      { s: 'A man, a plan, a canal: Panama', expected: true },
      { s: 'race a car', expected: false },
    ];

    for (const { s, expected } of cases) {
      const result = isPalindromeUsingJS(s);
      const pass = result === expected ? '✅ Passed' : '❌ Failed';
      console.log(`${pass} "${s}" => ${result} (expected ${expected})`);
    }
  }
}
