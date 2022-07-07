// 125. Valid Palindrome
// Easy

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non - alphanumeric characters, it reads the same forward and backward.Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

//  @param {string} s
//   @return {boolean}

// simple solution
// lowercase all and then replace all non-alphanumeric
const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, ""); // regex, choose any char that is not a-z0-9, global, case insensitive
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
};

/* 7/7/22
return boolean
edge: special nonalphanumeric chars are removed, all lowercased

lowercase the string, remove nonalphanumeric chars

loop through string
  initialize i at 0
  initialize j at length-1

  loop until i meets j in the middle
  increment i, decrement j

if chars at i and j don't match, return false

exit loop
return true
*/

const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  for (let i = 0, j = s.length - 1; i <= j; i++ j--) {
    if (s[i] !== s[j]) return false;
  }
  return true
};

/* 7/7/22 part 2
return boolean
input: any string

convert to lowercase, remove all non alphanumeric

loop through string
  initialize i at 0 and j at last index
  condition when i and j meet
  i++ j--

  if char at i and j dont match, return false

exit loop
return true
*/

const isPalindrome = (s) => {
  s = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] !== s[j]) return false;
  }

  return true;
};
