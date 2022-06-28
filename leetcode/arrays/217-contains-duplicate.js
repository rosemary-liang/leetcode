// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


//  @param {number[]} nums
//  @return {boolean}

// attempt 5/22/22

const containsDuplicate = function (nums) {
  const numbers = [];
  for (let i = 0; i < nums.length; i++) {
    if (!numbers.includes(nums[i])) {
      numbers.push(nums[i]);
    } else {
      return true;
    }
  }
  return false;
};

// researched solution
// Set stores UNIQUE values
// Set.size returns number of unique elements in Set object
// if length of original array !== number of unique elements, return true
const containsDuplicate = (nums) => {
  return nums.length !== new Set(nums).size;
}
