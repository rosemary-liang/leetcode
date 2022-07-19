/* Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

NOTES
get product to left (prefix) and product to right(postfix), then multiply the products ==> O(n)

*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
initialize empty output array
initialize prefix and postfix to 1, pre is left, post is right

to minimize space complexity, directly modify the output instead of using multiple arrays

2 loops

1st loop
    loop left to right
    start with prefix
    assign output[i] to prefix
    multiply & assign prefix by nums[i]

2nd loop
    loop right to left
    already have stuff in output, multiply output[i] with postfix
    mult & assign output[i] with postfix
    "increment" postfix by mult & assign nums[i]


return output
 */

var productExceptSelf = function (nums) {
  const output = [];
  let prefix = 1;
  let postfix = 1;

  // loop 1
  // output is prefix, then multiply by nums[i]
  for (let i = 0; i < nums.length; i++) {
    output[i] = prefix;
    prefix *= nums[i];
  }

  // loop 2
  // output *= prefix,  then postfix *= nums[i]
  for (let j = nums.length - 1; j >= 0; j--) {
    output[j] *= postfix;
    postfix *= nums[j];
  }

  return output;
};
