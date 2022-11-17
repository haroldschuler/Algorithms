const strA1 = "yes";
const strB1 = "eys";
const expected1 = true;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listen";
const expected4 = true;

/**
 * Determines whether s1 and s2 are anagrams of each other.
 * Anagrams have all the same letters but in different orders.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether s1 and s2 are anagrams.
 */
function isAnagram(s1, s2) {
    obj1 = {};
    obj2 = {};
    for(var i =0; i<s1.length; i++) {
        if (s1[i].toLowerCase() in obj1) {
            obj1[s1[i].toLowerCase()] += 1;
        }
        else {
            obj1[s1[i].toLowerCase()] = 1;
        }
    }
    for(var i =0; i<s2.length; i++) {
        if (s2[i].toLowerCase() in obj2) {
            obj2[s2[i].toLowerCase()] += 1;
        }
        else {
            obj2[s2[i].toLowerCase()] = 1;
        }
    }
    console.log(obj1)    
    console.log(obj2)
    // if (obj1 == obj2) {
    //     return true
    // }
    // else {
    //     return false;
    // }
    // return obj1;
}

console.log(isAnagram(strA1,strB1));
console.log(isAnagram(strA2,strB2));
console.log(isAnagram(strA3,strB3));
console.log(isAnagram(strA4,strB4));