// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.


// @param {string} s
// @param {string} t
// @return {boolean}

// my solution 5/23/22

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const sArray = [];
  const tArray = [];

  for (let i = 0; i < s.length; i++) {
    sArray.push(s[i]);
    tArray.push(t[i]);
  }

  sSorted = sArray.sort();
  tSorted = tArray.sort();

  for (let j = 0; j < sSorted.length; j++) {
    if (sSorted[j] !== tSorted[j]){
      return false;
    }
  }
  return true;
}


// recommended solution using map

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  const counts = {};
  for (let c in s) {
    // if counts[c] doesn't exist yet, start count at 0
    counts[c] = (counts[c] || 0) + 1
  }
  for (let c in t) {
    // if count doesn't exist yet, is false
    if (!counts[c]) {
      return false;
    }
    // if count exists, decrement it
    counts[c]--;
  }
  return true;
}
