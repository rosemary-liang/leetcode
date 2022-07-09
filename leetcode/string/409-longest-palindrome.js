/* 409. Longest Palindrome
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:
Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:
Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

Constraints:
1 <= s.length <= 2000
s consists of lowercase and/or uppercase English letters only. */

/**
 * @param {string} s
 * @return {number}
 */

// Runtime: 107 ms, faster than 35.49% of JavaScript online submissions for Longest Palindrome.
// Memory Usage: 43.8 MB, less than 66.11% of JavaScript online submissions for Longest Palindrome.
var longestPalindrome = function (s) {
  const set = new Set();
  let count = 0;

  for (let char of s) {
    if (set.has(char)) {
      set.delete(char);
      count += 2;
    } else {
      set.add(char);
    }
  }

  const addtl = set.size > 0 ? 1 : 0; // if set has remaining items, only 1 letter can be added to maintain symmetry
  return count + addtl;
};

/* 7/8/22 part 2
return the length

initialize a new set
initialize counter at 0

loop through char of s
  if set has char, delete it and increment counter
  else set.add char

exit loop
initialize remainder, set to 0 or 1 depending on if set.size truthy/falsy
return counter + remainder
 */

const longestPalindrome = (s) => {
  const set = new Set();
  let counter = 0;

  for (let char of s) {
    if (set.has(char)) {
      set.delete(char);
      counter += 2;
    } else {
      set.add(char);
    }
  }

  const remainder = set.size ? 1 : 0;
  return counter + remainder;
};
