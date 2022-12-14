/*
    Input: arr, callback
    Output: arr (with elements removed)
    Remove every element in the array, starting from idx 0,
    until the callback function returns true when passed the
    iterated element.
    Return an empty array if the callback never returns true
*/
//            v
const arr1 = [1, 4, 3, 6, 9, 3];
const callback1 = (elem) => {
    return elem > 5;
};
const expected1 = [6, 9, 3];




const arr2 = [1, 4, 3, 6, 9, 3];
const callback2 = (elem) => {
    return elem > 2;
};
const expected2 = [4, 3, 6, 9, 3];




const arr3 = [1, 4, 3, 6, 9, 3];
const callback3 = (elem) => false;
const expected3 = [];




function dropIt(arr, callback) { 
    while(arr.length > 0) {
        if(callback(arr[0])) {
            return arr;
        }
        else {
            arr = arr.slice(1);
        }
    }
    return [];
}

function dropIt2 (arr, callback) {
    let copyArr = [];
    for(let i = arr.length -1; i >= 0; i--) {
        copyArr.push(arr[i]);
    }
    while(copyArr.length > 0) {
        if(callback(copyArr[copyArr.length-1])) {
            let returnArr = []
            for(let j = copyArr.length -1; j >= 0; j--) {
                returnArr.push(copyArr[j]);
            }
            return returnArr
        }
        else {
            copyArr.pop();
        }
    }
    return [];
}

// app.get("/api", (req, res) => {
//     res.json
// })


console.log(dropIt(arr1, callback1));
console.log("****************************")
console.log(dropIt(arr2, callback2));
console.log("****************************")
console.log(dropIt(arr3, callback3));

// console.log(dropIt2(arr1, callback1));
// console.log("****************************")
// console.log(dropIt2(arr2, callback2));
// console.log("****************************")
// console.log(dropIt2(arr3, callback3));