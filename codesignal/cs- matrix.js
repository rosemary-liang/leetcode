// After becoming famous, the CodeBots decided to move into a new building together.Each of the rooms has a different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of the free rooms.

// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room, your task is to return the total sum of all rooms that are suitable for the CodeBots(ie: add up all the values that don't appear below a 0).

// Example

// For

// matrix = [[0, 1, 1, 2],
//   [0, 5, 0, 0],
//   [2, 0, 3, 3]]
// the output should be
// solution(matrix) = 9.

function solution(matrix) {
  const m = matrix;
  let sum = 0;
  const bannedIndices = [];

  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] === 0) {
        bannedIndices.push(j);
      }
      if (!(bannedIndices.includes(j))) {
        sum += m[i][j];
      }
    }
  }
  return sum;
}


/*
given matrix of integers
return total sum of all rooms that don't appear below a zero


identify the element and array index at which 0 appears
initialize sum variable at 0

loop through the input matrix array
for each element, loop through the subarray and check if value is 0
    if yes, return subarray index and the element index and store this somewhere (key value pair?)

after loops finish
    store another thing
    increment element index, keep subarray index

new loop through matrix input
