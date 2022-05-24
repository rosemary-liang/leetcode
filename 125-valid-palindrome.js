// 125. Valid Palindrome
// Easy

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

//  @param {string} s
//   @return {boolean}

// my solution 5/24/22
const isPalindrome = (s) => {
  const removeSpecialChars = s.replace(/[^a-z0-9]/gi, '');
  const removeUnderscores = removeSpecialChars.replace('_', '');
  const lowerCased = removeUnderscores.toLowerCase();

  if (lowerCased.length % 2 === 0) {
    for (let i = 0; i < (lowerCased.length / 2); i++) {
      if (lowerCased[i] !== lowerCased[lowerCased.length - 1 - i]) {
        return false;
      }
    }
    return true;
  } else {
    for (let i = 0; i < Math.floor((lowerCased.length / 2)); i++) {
      if (lowerCased[i] !== lowerCased[lowerCased.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
}


// simple solution
// lowercase all and then replace all non-alphanumeric
const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}
