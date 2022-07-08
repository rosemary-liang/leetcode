//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//  @param {number[]} nums
//  @param {number} target
//  @return {number[]}

const twoSum = (nums, target) => {
  const results = [];
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === diff) {
        results.push(i);
        results.push(j);
        return results;
      }
    }
  }
};

// 6/25/22
// use a Map to hold element in nums array and index
// use a loop to iterate over nums array
// for each element, set variable complement = target - nums[i]
// if map.has(complement) is true, return the indices
// else map.set(nums[i], i)
const twoSum = (nums, target) => {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

// 7/5/22 
//return indices
/*
create a Map of complements
for loop,
const complement = target - num[i]
check if Map has complement
  // TRUE: return
  // FALSE: set with [nums[i], index]
  time: O(n)
  space: O(1)
*/

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    } else {
      map.set(nums[i], i);
    }
  }
  return null;
};
