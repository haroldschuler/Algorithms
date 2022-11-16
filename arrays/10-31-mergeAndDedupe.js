// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,];
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10,];

function mergeDedupe(arr1, arr2) {
    let newArr = [];
    let idx1 = 0;
    let idx2 = 0;

    for(let i = 0; i < arr1.length + arr2.length; i++) {
        // checks if arr1 is completely added and only focuses on arr2
        if(idx1 == arr1.length) {
            if(newArr[newArr.length-1] == arr2[idx2]) {
                idx2++;
                continue;
            }
            else {
                newArr.push(arr2[idx2]);
                idx2++;
                continue;
            }
        }
        // checks if arr2 is completely added and only focuses on arr1
        else if(idx2 == arr2.length) {
            if(newArr[newArr.length-1] == arr1[idx1]) {
                idx1++;
                continue;
            }
            else {
                newArr.push(arr1[idx1]);
                idx1++;
                continue;
            }
        }
        // adds arr1 value 
        if(arr1[idx1] < arr2[idx2]) {
            if(newArr[newArr.length-1] == arr1[idx1]) {
                idx1++;
            }
            else {
                newArr.push(arr1[idx1]);
                idx1++;
            }
        }
        // adds arr2 value 
        else if(arr1[idx1] > arr2[idx2]){
            if(newArr[newArr.length-1] == arr2[idx2]) {
                idx2++;
            }
            else {
                newArr.push(arr2[idx2]);
                idx2++;
            }
        }
        // adds arr1 value and increments both
        else if (arr1[idx1] == arr2[idx2]) {
            if(newArr[newArr.length-1] == arr1[idx1]) {
                idx1++;
                idx2++;
                i++;
            }
            else {
                newArr.push(arr1[idx1]);
                idx1++;
                idx2++;
                i++;
            }
        }
    }
    return newArr;
}




// try out some other tests
console.log(mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]) );
// [ 1, 3, 4, 5, 8, 10 ]

console.log(mergeDedupe([2,3,3,5,8,10,12], [1,3,4,6])); // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//   a -> 
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]

console.log(mergeDedupe([1, 3, 3, 3, 3, 10], [2]) ); // [1, 2, 3, 10]