/* 
Given in an alumni interview in 2021.
String Encode
You are given a string that may contain sequences of consecutive characters.
Create a function to shorten a string by including the character,
then the number of times it appears. 


If final result is not shorter (such as "bb" => "b2" ),
return the original string.
  */

const str1 = "aaaabbcdddaaa";
// const expected1 = "a4b2c1d3a3";
const expected1 = "a4bbcd3a3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

function encodeStr(str) {
    new_str = "";
    var count = 1;
    for(var i = 0; i < str.length; i++) {
        if (str[i] == str[i+1]) {
            count += 1;
        }
        else {
            if (count > 2) {
                new_str = new_str + str[i] + count;
                count = 1;
            }
            else if (count == 2) {
                new_str = new_str + str[i] + str[i];
                count = 1;
            }
            else if (count == 1) {
                new_str = new_str + str[i];
                count = 1;
            }
        }
    }
    return new_str;
}

// console.log(encodeStr(str1));
// console.log(encodeStr(str2));
// console.log(encodeStr(str3));
// console.log(encodeStr(str4));

/**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */

/*****************************************************************************/
/* 
String Decode  
*/

const two_str1 = "a3b2c1d3";
const two_expected1 = "aaabbcddd";

const two_str2 = "a3b2c12d10";
const two_expected2 = "aaabbccccccccccccdddddddddd";

//this doesn't work yet for multi digit numbers
function decodeStr(str) {
    new_str = "";
    for(var i = 0; i < str.length; i++) {
        var j = i+1;
        var num_count_str = "";
        while (j < str.length-i) {
            // console.log(num_count_str);
            if (isNaN(parseInt(str[j])) === false) {
                num_count_str += str[j];
                console.log(num_count_str);
                j++;
            }
            else {
                break;
            }
        }
        var num_count = parseInt(num_count_str);
        for (var k = 0; k < num_count; k++) {
            new_str = new_str + str[i];
        }
    }
    return new_str
}

console.log(decodeStr(two_str1));
console.log(decodeStr(two_str2));

/**
   * Decodes the given string by duplicating each character by the following int
   * amount if there is an int after the character.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str An encoded string with characters that may have an int
   *    after indicating how many times the character occurs.
   * @returns {string} The given str decoded / expanded.
   */

//Instructor solution
function decodeStr2(str) {
    let decoded = ""
    
    let i = 0
    while (i < str.length){
        let char = str[i++]
        let numStr = ""

        let isNumber = isNaN(parseInt(str[i])) === false

        while (i < str.length && isNumber) {
            numStr += str[i++]
            isNumber = isNaN(parseInt(str[i])) === false
        }
        decoded += char.repeat(numStr)
    }
    return decoded
}