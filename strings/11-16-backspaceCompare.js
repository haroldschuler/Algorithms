/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//          v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""

const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function helper(arr) {
    let idx = 0;
    while(arr[idx]) {
        if(arr[idx] == "#") {
            let i = idx;
            let count = 0;
            while(arr[i] == "#" && arr[i]) {
                count ++;
                i++;
            }
            if(idx-count < 0) {
                arr.splice(0,idx+count);
            }
            else {
                arr.splice(idx-count,count*2);
            }
        }
        else {
            idx++;
        }
    }
    return arr;
}

function backspaceStringCompare(S, T) {
    let sArr = S.split("");
    let tArr = T.split("");

    helper(sArr)
    helper(tArr)

    return sArr.join("") == tArr.join("") ? true : false;
}

//---------------------

console.log(backspaceStringCompare(S1, T1))
console.log("*****************************")
console.log(backspaceStringCompare(S2, T2))
console.log("*****************************")
console.log(backspaceStringCompare(S3, T3))
console.log("*****************************")
console.log(backspaceStringCompare(S4, T4))
console.log("*****************************")
console.log(backspaceStringCompare("a###b", T4))