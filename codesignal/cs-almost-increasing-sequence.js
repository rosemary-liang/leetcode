// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

//   Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.Sequence containing only one element is also considered to be strictly increasing.

//     Example

//     For sequence= [1, 3, 2, 1], the output should be
// solution(sequence) = false.

// There is no one element in this array that can be removed in order to get a strictly increasing sequence.

// For sequence = [1, 3, 2], the output should be
// solution(sequence) = true.

// You can remove 3 from the array to get the strictly increasing sequence[1, 2].Alternately, you can remove 2 to get the strictly increasing sequence[1, 3].

//   Input / Output

//   [execution time limit]4 seconds(js)

//   [input] array.integer sequence

// Guaranteed constraints:
// 2 ≤ sequence.length ≤ 105,
//   -105 ≤ sequence[i] ≤ 105.

//   [output] boolean

// Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.

function solution(sequence) {
  const s = sequence;
  let falseCounter = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i] <= s[i - 1]) {
      falseCounter++
      if (falseCounter > 1) return false;
      if (s[i] <= s[i - 2] && s[i + 1] <= s[i - 1]) return false;
    }
  }
  return true;
}

/*
Can you remove only 1 element from array to achieve increasing sequence?
does not need to be incremental, only increasing

loop through array
initialize counter for false
if not in increasing order, increment false counter
if false counter === 1 or 0, return true
if false counter > 1, return false

*/
