// 704. Binary Search
// Easy

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.If target exists, then return its index.Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

//   Example 1:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


// Constraints:
// 1 <= nums.length <= 104
//   - 104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = (nums, target) => {
  let start = 0;
  let end = nums.length - 1
  while (start <= end) {
    // set mid as by rounding down start + end / 2
    // if nums[min] is target, return it
    // if nums[min] not target... narrow the window by chopping off half
      // if nums[min] > target, change start to be 1 index greater than current mid
      // if nums[min] < target, change end to be 1 index less than current mid
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid -1;
    }
  }
  return -1;
}



