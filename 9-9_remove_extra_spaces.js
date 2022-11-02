/* 
Given a string that may have extra spaces at the start and the end,
return a new string that has the extra spaces at the start and the end trimmed (removed)
do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */

function trim(str) { 
    var newString="";
    var newerString="";
    for(var i = 0; i < str.length-1; i+=2){
        if(str[i]==" " && str[i+1] == " "){
            continue;
        }
        
        else {
            newString += str[i] + str[i+1];
        }


        // if(str[i] !=  " "){
            // newString+=str[i];
        // }
        // else if(str[i]== " " && str[i+1]!=" " && str[i-1] != " "){
            // newString=+str[i];
        // }


    }
    if(newString[0]== " "){
        newString = newString.substring(1,newString.length);}
    if(newString[newString.length] == " "){
        newString = newString.pop();
    }
    console.log(newString);
    console.log(newerString);
}

trim("oh no it's broken")