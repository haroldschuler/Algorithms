/* 
Balance Index
Here, a balance point is ON an index, not between indices.
Return the balance index where sums are equal on either side
(exclude its own value).

Return -1 if none exist.

*/

const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [9, 4, 3, 3, 3];
const expected3 = 1;

const nums4 = [9, 14, -18, 6, 3, 2, 9];
const expected4 = 4;


/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
    var sum_left = nums[0];
    var index_left = 1;
    var sum_right = 0;
    var index_right = nums.length-1;
    if(nums.length<3) {
        return -1;
    }
    for(let i=1; i<nums.length; i++) {
        if(sum_left <= sum_right) {
            if(index_right - index_left == 1 && sum_left == sum_right) {
                return index_left;
            }
            sum_left += nums[index_left];
            index_left += 1;
            console.log("left sum =" + sum_left);
            console.log("left index =" + index_left);
        }
        else if (sum_left > sum_right) {
            sum_right += nums[index_right];
            index_right -= 1;
            console.log("right sum =" + sum_right);
            console.log("right index =" + index_right);
            if(index_right - index_left == 0 && sum_left == sum_right) {
                return index_left;
            }
        }
    }
    return -1;
}

// this has problems

console.log(balanceIndex(nums1));
console.log(balanceIndex(nums2));
console.log(balanceIndex(nums3));
console.log(balanceIndex(nums4));