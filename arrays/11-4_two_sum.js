/* https://leetcode.com/problems/two-sum/

Given an array of integers, return indices of the
two numbers such that they add up to a specific target.

You may assume that each input would have EXACTLY ONE SOLUTION,
and you may not use the same element twice.

the array is unsorted, contains no floats, and there may be duplicate values

Given arr = [2, 11, 7, 15], target = 9,
Because arr[0] + arr[2] = 2 + 7 = 9
return [0, 2].

example 1
given: [2, 11, 7, 15]
target: 9
output: [0,2]

example 2
given: [3,2,4]
target: 6
output: [1,2]

example 3
given: [3,3]
target: 6
output: [0,1]
*/

const myArray = [2,5,6,8];
const myTarget = 10;


function twoSums(arr, target) {
    let indices = []
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] == target) {
                indices.push(i);
                indices.push(j);
                return indices;
            }
        }
    }
}

function twoSums2(arr, target) {
    let indices = [];
    let keys = {};
    for (let i = 0; i < arr.length; i++) {
        if(target - arr[i] in keys) {
            indices.push(keys[target - arr[i]]);
            indices.push(i);
            return indices;
        }
        keys[arr[i]] = i;
        
    }
}

console.log(twoSums(myArray,myTarget)); // [0,3]
console.log(twoSums([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums([3, 2, 4], 6)); // [1,2]
console.log(twoSums([3, 3], 6)); // [0,1]

console.log("****************************************")
console.log(twoSums2(myArray,myTarget)); // [0,3]
console.log(twoSums2([2, 11, 7, 15], 9)); // [0,2]
console.log(twoSums2([3, 2, 4], 6)); // [1,2]
console.log(twoSums2([3, 3], 6)); // [0,1]