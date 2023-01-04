// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:
// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:
// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

// -2^31 <= x <= 2^31 - 1

// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    for(let i = 0; i < str.length/2; i++){
        if(i === str.length - i - 1){
            break;
        }
        if(str[i] !== str[str.length - i - 1]){
            return false;
        }
    }
    return true;
};

// Solution by not converting to string
var isPalindrome2 = function(x) {
    if(x < 0){
        return false;
    }
    let arr = [];
    let divisor = 10;
    let expCount = 0;
    while(divisor / 10 <= x){
        let remainder = x % divisor;
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            sum = sum + arr[i] * 10**i;
        }
        remainder = remainder - sum;
        remainder = remainder / 10**expCount;
        arr.push(remainder);
        expCount += 1;
        divisor = divisor * 10;
    }
    for(let j = 0; j < arr.length; j++){
        if(j === arr.length - 1 - j){
            break;
        }
        if(arr[j] !== arr[arr.length - 1 - j]){
            return false;
        }
    }
    return true;
};