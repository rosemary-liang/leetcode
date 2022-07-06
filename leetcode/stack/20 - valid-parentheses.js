// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

//  @param {string} s
//  @return {boolean}

/* // solution 5/25
// set up object to hold parenthesis as key value pairs
// set up stack array
// use for of loop to check if complement exists (if open bracket). If true, push it to the stack
// if complement does not exist, pop the most recent item and check if it is the complemenet to current character
// final length of stack should be 0 if true */

const isValid = (s) => {
  const complement = {
    "}": "{",
    ")": "(",
    "]": "[",
  };
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
};

/* solution 7/6
return a boolean
set up an object holding key/value pairs
initialize empty stack

loop through string by char
if char is a key of object, push to stack
  if not, check if char !== stack.pop(), return false

end loop
if stack.length = 0 return true

*/

const isValid = (s) => {
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (!map[el]) {
      stack.push(el);
    } else {
      if (map[el] !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
};

/*
return a boolean

edge: empty is false

set up map object containing parentheses as key/value pairs, key is closing paren
initialize empty stack

for loop, iterate through chars
  check if opening paren, if true push to stack
    if false, check if map[char] !== stack.pop() --> return false

exit loop
check if stack.length is 0 return true
*/
const isValid = (s) => {
  if (s.length === 0) return false;

  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const el = s[i];

    if (!map[el]) {
      stack.push(el);
    } else {
      if (map[el] !== stack.pop()) return false;
    }
  }
  return stack.length === 0;
};
