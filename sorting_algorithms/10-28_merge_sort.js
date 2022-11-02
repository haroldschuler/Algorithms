// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr) {
    if(arr.length == 1) {
        console.log(arr);
        return arr;
    }
    let arrFirstHalf = arr.slice(0,Math.floor(arr.length/2));
    let arrSecondHalf = arr.slice(Math.floor(arr.length/2));
    // console.log(arrFirstHalf);
    // console.log(arrSecondHalf);
    return mergeSortedArrays(mergeSort(arrFirstHalf),mergeSort(arrSecondHalf));
}

// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
var mergeArr2 = [55,66];
var mergeArr1 = [33,44];

var mergeArrA = [33,44,55];
var mergeArrB = [11,66];

var arrLeft = [22];
var arrRight = [11,33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) {
    let newArr = [];
    let idxOne = 0;
    let idxTwo = 0;
    for(let i = 0; i < arr1.length + arr2.length; i++) {
        // if(arr1.length == 0) {
        //     newArr.push(arr2[idxTwo]);
        //     return newArr;
        // }
        // else if(arr2.length == 0) {
        //     newArr.push(arr1[idxOne]);
        //     return newArr;
        // }
        if(arr1[idxOne] < arr2[idxTwo]) {
            newArr.push(arr1[idxOne]);
            console.log(newArr);
            idxOne ++;
        }
        else {
            newArr.push(arr2[idxTwo]);
            console.log(newArr);
            idxTwo ++;
        }
    }
    return newArr;
}

console.log(mergeSortedArrays([1,4,5],[2,3,6,7]));
console.log(mergeSortedArrays(mergeArr1,mergeArr2));
console.log(mergeSortedArrays(mergeArrA,mergeArrB));
console.log(mergeSortedArrays(arrLeft,arrRight));
console.log(mergeSortedArrays([1],[7]));

// console.log(mergeSort(testArr));