// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"

// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"


// Constraints:

// 1 <= s.length <= 1000
// s consists of English letters (lower-case and upper-case), ',' and '.'.
// 1 <= numRows <= 1000

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows == 1){
        return s;
    }
    let rowsArr = [];
    for(let i = 0; i < numRows; i++) {
        rowsArr.push([s[i]]);
    }
    let rowCounter = numRows -2;
    let direction = -1;
    let j = numRows;
    while(s[j]) {
        rowsArr[rowCounter].push(s[j]);
        if(rowCounter == 0) {
            direction = 1;
        }
        else if(rowCounter == numRows - 1) {
            direction = -1;
        }
        rowCounter += direction;
        j++;
    }
    let newStr = "";
    for(row of rowsArr) {
        let k = 0;
        while(row[k]){
            newStr += row[k];
            k++;
        }
    }
    return newStr;
};