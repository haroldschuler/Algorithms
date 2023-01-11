// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 1){
        return strs[0];
    }
    let prefix = "";
    let count = 0;
    let breakPoint = false;
    while(breakPoint == false){
        let temp = "";
        for(let i = 0; i < strs.length; i++){
            if(count == strs[i].length){
                breakPoint = true;
                break;
            }
            if(i == 0){
                temp = strs[i][count];
            }
            else if(i < strs.length - 1) {
                if(strs[i][count] == temp){
                    continue;
                }
                else {
                    return prefix;
                }
            }
            else if(i == strs.length - 1){
                if(strs[i][count] == temp){
                    prefix = prefix + temp;
                }
                else {
                    return prefix;
                }
            }
        }
        count += 1;
    }
    return prefix;
};