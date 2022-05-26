// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.


//  @param {string} s
//  @return {boolean}


//solution 5/25
// set up object to hold parenthesis as key value pairs
// set up stack array
// use for of loop to check if complement exists (if open bracket). If true, push it to the stack
// if complement does not exist, pop the most recent item and check if it is the complemenet to current character
// final length of stack should be 0 if true

const isValid = (s) => {
  const complement = {
    '}': '{',
    ')': '(',
    ']': '['
  }
  const stack = [];

  for (char of s) {
    if (!complement[char]) {
      stack.push(char);
    } else {
      if (stack.pop() !== complement[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
