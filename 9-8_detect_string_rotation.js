/* 
Create the function isRotation(str1,str2) that
returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected1 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected2 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected3 = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {
    var amnt = s1.length;
    if(s1.length != s2.length) {
        return false;
    }
    for(let k = 0; k <= amnt; k++) {
        var newStr = "";
        for(let i = s1.length-1; i >= s1.length - k; i--) {
            newStr = s1[i] + newStr;
        }
        for(let j = 0; j < s1.length - k; j++) {
            newStr = newStr + s1[j];
        }
        if(newStr == s2) {
            return true;
        }
    }
    return false;
}

console.log(isRotation(strA1,strB1));
console.log(isRotation(strA2,strB2));
console.log(isRotation(strA3,strB3));

//Instructor solution
function isRotation2(s1 = "", s2 = "") {
    if (s1.length !== s2.length || s1 === s2) {
        return false;
    }
    return (s1 + s1).includes(s2);
}

console.log(isRotation2(strA1,strB1));
console.log(isRotation2(strA2,strB2));
console.log(isRotation2(strA3,strB3));