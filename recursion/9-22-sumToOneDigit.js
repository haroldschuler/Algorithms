/*
Sum To One Digit
Implement a function sumToOne(num)​ that,
given a number, sums that number’s digits
repeatedly until the sum is only one digit. Return
that final one digit result.
Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;

const num3 = 25;
const expected3 = 7;

const num4 = 2576
const expected4 = 2

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
// function sumToOneDigit(num,sum) {
//     num = num.toString()
//     var total = sum + parseInt(num)
//     if(num.length == 1) {
//         // return parseInt(num);
//         if(total.toString().length == 1) {
//             return parseInt(num);
//         }
//         return sumToOneDigit(num,sum)
//     }
//     var sum = parseInt(num[num.length-1])
//     num = num.slice(0,num.length-1)

//     return sum + sumToOneDigit(num,sum)
// }
// var numx = parseInt(len)
// var len = num.toString().length

function sumToOneDigit(num) {
    num = num.toString()
    var sum = 0;
    for(let i = 0; i < num.length; i++) {
        sum += parseInt(num[i]);
    }
    if(sum.toString().length > 1) {
        return sumToOneDigit(sum)
    }
    return sum
}


console.log(sumToOneDigit(num1));
console.log(sumToOneDigit(num2));
console.log(sumToOneDigit(num3));
console.log(sumToOneDigit(num4));
console.log(sumToOneDigit(99));