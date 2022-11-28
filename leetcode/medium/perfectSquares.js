// Given an integer n, return the least number of perfect square numbers that sum to n.

// A perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

// Example 1:

// Input: n = 12
// Output: 3
// Explanation: 12 = 4 + 4 + 4.
// Example 2:

// Input: n = 13
// Output: 2
// Explanation: 13 = 4 + 9.
 

// Constraints:

// 1 <= n <= 104

/**
 * @param {number} n
 * @return {number}
 */

// 39 minutes still doesn't work (test case 43)
var numSquares = function(n) {
    if(Number.isInteger(Math.sqrt(n))) {
        return 1;
    }
    
    let numArr = [];
    for(let i = Math.floor(Math.sqrt(n)); i > 0; i--) {
        numArr.push(i**2)
    }
    let count = [];
    for(let i = 0; i < numArr.length; i++) {
        count.push(0);
        let sum = 0;
        for(let j = i; j < numArr.length; j++) {
            while(sum <= n) {
                sum += numArr[j];
                count[i] ++;
            }
            sum -= numArr[j];
            count[i]--;
            if(sum == n) {
                break;
            }
        }
    }
    return Math.min(...count)
};


function getMinSquares(n) {
    // base cases
    if (n <= 3)
        return n;

    // getMinSquares rest of the
    // table using recursive
    // formula

    // Maximum squares required is
    // n (1*1 + 1*1 + ..)
    let res = n;

    // Go through all smaller numbers
    // to recursively find minimum
    for(let x = 1; x <= n; x++)
    {
        let temp = x * x;
        
        if (temp > n)
            break;
        else
            res = Math.min(res,
            1 + getMinSquares(n - temp));
    }
    return res;
}

console.log(numSquares(16));
console.log(numSquares(13));
console.log(numSquares(12));
