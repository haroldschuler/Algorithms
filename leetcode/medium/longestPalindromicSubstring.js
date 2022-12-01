// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxCount = 1;
    let startIdx = 0;
    let endIdx = 0;
    for(let i = 0; i < s.length; i++) {
        for(let j = s.length - 1; j >= 0; j--){
            let count = 0;
            let frontIdx = i;
            let backIdx = j;
            while(frontIdx < backIdx){
                if(s[frontIdx] === s[backIdx]) {
                    count += 2;
                }
                else if(s[frontIdx] !== s[backIdx]) {
                    count = 0;
                    break;
                }
                
                if(backIdx - frontIdx === 2) {
                    count += 1;
                }

                frontIdx++;
                backIdx--;
            }
            if(count > maxCount) {
                maxCount = count;
                startIdx = i;
                endIdx = j;
            }
        }
        
    }
    let newStr = "";
    for(let k = startIdx; k <= endIdx; k++){
        newStr = newStr + s[k];
    }
    return newStr;
};