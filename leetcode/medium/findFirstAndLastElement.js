// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]

// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 10^5
// -10^9 <= nums[i] <= 10^9
// nums is a non-decreasing array.
// -10^9 <= target <= 10^9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let output = [];
    let start = -1;
    let end = -1;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === target) {
            start = i;
            end = i;
            break;
        }
    }
    for(let j = end + 1; j < nums.length; j++){
        if(nums[j] === target){
            end = j;
        }
    }
    output.push(start);
    output.push(end);
    return output;
};