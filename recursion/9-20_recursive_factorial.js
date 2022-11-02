

const num1 = 3;
const expected1 = 6;

const num2 = 6.8;
const expected2 = 720;

const num3 = 0;
const expected3 = 1;

function factorial(n) {
    n = n - 1;
    if(n == 0) {
        return 1;
    }
    return n * factorial(n);
}

// console.log(factorial(Math.floor(num1)+1));
// console.log(factorial(Math.floor(num2)+1));
// console.log(factorial(Math.floor(num3)+1));

function factorial2(n) {
    n = Math.floor(n);
    if(n == 0) {
        return 1;
    }
    return n * factorial2(n-1);
}

console.log(factorial2(num1));
console.log(factorial2(num2));
console.log(factorial2(num3));