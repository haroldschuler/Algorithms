const arrA1 = [1, 2, 3];
const arrB1 = ["a", "b", "c"];
const expected1 = [1, "a", 2, "b", 3, "c"];

const arrA2 = [1, 3];
const arrB2 = [2, 4, 6, 8];
const expected2 = [1, 2, 3, 4, 6, 8];

const arrA3 = [1, 3, 5, 7];
const arrB3 = [2, 4];
const expected3 = [1, 2, 3, 4, 5, 7];

const arrA4 = [];
const arrB4 = [42, 0, 6];
const expected4 = [42, 0, 6];

/**
 * Interleaves two arrays into a new array. Interleaving means alternating
 * the items starting from the first array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} arr1
 * @param {Array<any>} arr2
 * @returns {Array<any>} A new array of interleaved items.
 */
function interleaveArrays(arr1, arr2) {
    var new_arr =[];
    if(arr1.length <= arr2.length) {
        var short_arr = arr1;
        var long_arr = arr2;
    }
    else {
        var short_arr = arr2;
        var long_arr = arr1;
    }
    for(let i = 0; i < short_arr.length; i++) {
        new_arr.push(arr1[i]);
        new_arr.push(arr2[i]);
    }
    for(let j = short_arr.length; j < long_arr.length; j++) {
        new_arr.push(long_arr[j]);
    }
    return new_arr;
}

console.log(interleaveArrays(arrA1,arrB1));
console.log(interleaveArrays(arrA2,arrB2));
console.log(interleaveArrays(arrA3,arrB3));
console.log(interleaveArrays(arrA4,arrB4));

function interleaveArrays2(arr1, arr2) {
    var new_arr =[];
    var short_arr = arr1.length < arr2.length ? arr1 : arr2;
    var long_arr = arr1.length > arr2.length ? arr1 : arr2;
    for(let i = 0; i < short_arr.length; i++) {
        new_arr.push(arr1[i]);
        new_arr.push(arr2[i]);
    }
    for(let j = short_arr.length; j < long_arr.length; j++) {
        new_arr.push(long_arr[j]);
    }
    return new_arr;
}

console.log(interleaveArrays2(arrA1,arrB1));
console.log(interleaveArrays2(arrA2,arrB2));
console.log(interleaveArrays2(arrA3,arrB3));
console.log(interleaveArrays2(arrA4,arrB4));

function interleaveArrays3(arr1, arr2) {
    var new_arr =[];
    var length_arr = Math.max(arr1.length,arr2.length);
    for(let i = 0; i < length_arr; i++) {
        if(arr1[i] !== undefined) {
            new_arr.push(arr1[i]);
        }
        if(arr2[i] !== undefined) {
            new_arr.push(arr2[i]);
        }
    }
    return new_arr;
}

console.log(interleaveArrays3(arrA1,arrB1));
console.log(interleaveArrays3(arrA2,arrB2));
console.log(interleaveArrays3(arrA3,arrB3));
console.log(interleaveArrays3(arrA4,arrB4));