/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";

function reverseString(str) {
    var rev_string = "";
    for (var i = str.length - 1; i>=0; i--) {
        rev_string += str[i];
        //could go front to back by doing revString = srt[i] + revString instead
    }
    return rev_string;
}
console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));
console.log(reverseString(str4));

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 * 
 * pseudo code -> metacognition
 * - created a function that takes in a string
 */
// function reverseString(str) {}

/*****************************************************************************/

/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/

const two_str1 = "object oriented programming";
const two_expected1 = "OOP";

// The 4 pillars of OOP
const two_str2 = "abstraction polymorphism inheritance encapsulation";
const two_expected2 = "APIE";

const two_str3 = "software development life cycle";
const two_expected3 = "SDLC";

// Bonus: ignore extra spaces
const two_str4 = "  global   information tracker    ";
const two_expected4 = "GIT";

function acronymize(str) {
    // var cap_acr_str = str.split("");
    var cap_acr_str = "";
    // console.log(str.length);
    for (var i = 0; i < str.length; i++) {
        if (i == 0) {
            cap_acr_str += str[i];
            // console.log(cap_acr_str);
        }
        else if (str[i-1] == " ") {
            cap_acr_str += str[i];
            // console.log(cap_acr_str);
        }
    }
    return cap_acr_str.toUpperCase();
}

console.log(acronymize(two_str1));
console.log(acronymize(two_str2));
console.log(acronymize(two_str3));
//this doesn't work for the strings with extra spaces
console.log(acronymize(two_str4));

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
// function acronymize(str) {}

//instructor solution
function acronymizeWithSplit(wordsStr = "") {
    let acronym = "";
    const wordsArr = wordsStr.split(" ");
  
    for (const word of wordsArr) {
      // Splitting can result in empty strings.
      if (word !== "") {
        // upper case each letter as it's added so toUpperCase doesn't have
        // to loop over each acronym char at the end to upper case.
        acronym += word[0].toUpperCase();
      }
    }
    return acronym;
  }