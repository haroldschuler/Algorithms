/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n < 0) {
        x = 1 / x;
        console.log(x);
    }
    let product = 1;
    for(let i = 1; i <= n; i++){
        product = x * product;
    }
    return product;
};

console.log(myPow(2.00000,10)); // 1024.00000
console.log(myPow(2.10000,3)); // 9.26100
console.log(myPow(2.00000,-2)); // 0.25


