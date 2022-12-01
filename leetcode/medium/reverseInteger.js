// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Constraints:

// -231 <= x <= 231 - 1

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let numArr =[];
    let isNeg = false;
    let tempNum = Math.abs(x)
    if(x < 0) {
        isNeg = true;
    }
    let numStr = tempNum.toString();
    let revStr = "";
    for(let i = 0; i < numStr.length; i++){
        revStr = numStr[i] + revStr;
    }
    let revNum = parseInt(revStr);
    if(isNeg == true){
        revNum = revNum * -1;
    }
    if(revNum > Math.pow(2,31)-1 || revNum < Math.pow(-2,31)){
        return 0;
    }
    else {
        return revNum;
    }
};