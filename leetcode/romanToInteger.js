/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let numArr = []
    for(let i = 0; i< s.length; i++) {
        num = 0;
        switch(s[i]) {
            case "I":
                num = 1;
                break;
            case "V":
                num = 5;
                break;
            case "X":
                num = 10;
                break;
            case "L":
                num = 50;
                break;
            case "C":
                num = 100;
                break;
            case "D":
                num = 500;
                break;
            case "M":
                num = 1000;
        }
        numArr.push(num)
    }
    let sum = 0;
    for(let j = 0; j < numArr.length; j++) {
        if(j+1 == numArr.length) {
            sum += numArr[j]
            break
        }
        if(numArr[j] >= numArr[j+1]) {
            sum += numArr[j];
        }
        else {
            sum = sum + numArr[j+1] - numArr[j]
            j++;
        }
    }
    return sum;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("MCMXCIV")); // 1994
console.log(romanToInt("LVIII")); // 58


