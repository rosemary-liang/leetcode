/*383. Ransom Note
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true


Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters. */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

// use MAP
// Runtime: 110 ms, faster than 70.63% of JavaScript online submissions for Ransom Note.
//Memory Usage: 45.1 MB, less than 50.47% of JavaScript online submissions for Ransom Note.

var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  //map all chars of magazine
  for (let char of magazine) {
    // map[char] ? map[char]++ : (map[char] = 1);
    if (!map[char]) {
      map[char] = 1;
    } else {
      map[char]++;
    }
  }

  // check if chars of ransomNote are in magazine
  for (let char of ransomNote) {
    if (!map[char]) return false;
    map[char]--;
  }
  return true;
};
