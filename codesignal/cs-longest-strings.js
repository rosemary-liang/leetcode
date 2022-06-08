// Given an array of strings, return another array containing all of its longest strings.

//   Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] array.string inputArray

// A non - empty array.

// Guaranteed constraints:
// 1 ≤ inputArray.length ≤ 10,
//   1 ≤ inputArray[i].length ≤ 10.

//   [output] array.string

// Array of the longest strings, stored in the same order as in the inputArray


function solution(inputArray) {
  const arr = inputArray;


  let max = 0;
  let results = []; // ["abac"]

  for (let i = 0; i < arr.length; i++) { // i = 4
    const length = arr[i].length;
    if (length === max) {
      results.push(arr[i]); // "vcd"
    }
    if (length > max) {
      max = length; // 4
      results = [];
      results.push(arr[i]) // "abac"
    }
  }
  return results;
}


/*
given array of strings
return array of longest strings (can have multiple items in array)

edge cases:
    all items same length

initialize max length = 0
initialize result array = []
loop through array
find length of each element at i

if length === max
    push element into result array

if length > max
    set max = length
    reset result to empty array;
    push element into result array

else continue

return result array



 */
