/* 704. Binary Search

Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
SEE DETAILED NOTES on paper
initialize low at index 0 and last index

while low < high
  assign mid variable
    high - low divided by 2... take floor and use upper mid
  LOWER MID PROBLEM - INIFINITE LOOP: if only 2 numbers left and logic falls into ELSE,  doesn't do anything and wil shrink into itself
`
TO AVOID INFINITY LOOP:
  IF CHOOSE UPPER MID, ELSE MUST BE low=mid
  IF CHOOSE LOWER MID, ELSE MUST BE high=mid

  compare target and nums[mid]
    if target is less than nums[mid], then adjust high
    else adjust low (if target = nums[mid] use low)

exit loop
return either the index or -1
*/

// time complexity: O(nlogn) if sorted

var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    let mid = low + Math.floor((high - low + 1) / 2);
    if (target < nums[mid]) {
      high = mid - 1;
    } else {
      low = mid;
    }
  }

  return target === nums[low] ? low : -1;
};
