// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
    Given a string, find the length of the longest substring without repeating characters.
*/
//                 👇
const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.
//              v
const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

//                👀
const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */
//              v
const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"


function lengthOfLongestSubString(str) {
    // add a counter for the max string
    let maxCount = 1;
    // iterate over the whole string
    for(let i = 0; i < str.length; i++) {
        // set a count to 1 and add the current character to a new dictionary
        count = 1;
        let letterDict = {[str[i]]: 1};
        // iterate over the following characters
        for(let j = i+1; j < str.length; j++) {
            // check if the character is in the dictionary. If not, add to the dictionary and increase count
            if(!letterDict.hasOwnProperty(str[j])) {
                letterDict[str[j]] = 1;
                count++;
            }
            // if not skip to the next outer iteration
            else {
                break;
            }
        }
        // check if the current count exceeds the maximum string length, if so, replace the max string length
        if(count > maxCount) {
            maxCount = count;
        }
    }
    return maxCount;
}

console.log(lengthOfLongestSubString(str1)); // 3
console.log(lengthOfLongestSubString(str2)); // 1
console.log(lengthOfLongestSubString(str3)); // 3
console.log(lengthOfLongestSubString(str4)); // 4