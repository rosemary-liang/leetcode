// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non - negative integer size.Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.Help him figure out the minimum number of additional statues needed.

//   Example

// For statues = [6, 2, 3, 8], the output should be
// solution(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

// Input / Output
// [execution time limit]4 seconds(js)

// [input] array.integer statues
// An array of distinct non - negative integers.

// Guaranteed constraints:
// 1 ≤ statues.length ≤ 10,
//   0 ≤ statues[i] ≤ 20.

//   [output] integer


function solution(statues) {
  let counter = 0;
  const sortedArray = statues.sort((a, b) => a - b)
  for (let i = 0; i < sortedArray.length - 1; i++) {
    const diff = sortedArray[i + 1] - sortedArray[i];
    if (diff !== 1) {
      counter += (diff - 1);
      console.log('counter', counter)
    }
  }
  return counter;
}


/*
arrange smallest to largest, increments of 1
add statues to accomplish this
return - how many statues need to be added?

loop through array and sort it smallest to largest

loop through sorted array
    if statement to check whether each element increments by 1
        if no, then increment counter
        if yes, move on to next element

return counter after loop finishes


*/
