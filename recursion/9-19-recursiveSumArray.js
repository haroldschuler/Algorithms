/* 
Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */

// this works
function sumArr(nums, iterator = -1) {
    
    if (iterator == nums.length - 1){
        return 0;
    }
    iterator ++;
    return nums[iterator] + sumArr(nums, iterator)
}
// console.log(sumArr(nums1));
// console.log(sumArr(nums2));
// console.log(sumArr(nums3));

// this does too
function sumArr2(nums, i) {
    if(i <= 0) {
        return 0;
    }
    i--;
    return nums[i] + sumArr2(nums, i);
}
console.log(sumArr2(nums1, nums1.length));
console.log(sumArr2(nums2, nums2.length));
console.log(sumArr2(nums3, nums3.length));
