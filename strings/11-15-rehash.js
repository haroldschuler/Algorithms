/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//                         v
const str1 = "b70 a164 c32 a20 c10";
const expected1 = "a184 b70 c42";
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")


function rehash(str) {
    // make an iterator
    let i = 0;
    // make anew dictionary for the letters
    let dict = {};
    // while loop over the lenght of the string to separate out the numbers and letters
    while(str[i]) {
        let tempLetter = str[i]
        // check if the letter is an entry in the dictionary or not
        if(!dict.hasOwnProperty(str[i])) {
            // add a new dictionary entry if it isn't in the dictionary
            dict[str[i]] = 0;
        }
        i++;
        // make a temporary string to capture the numbers
        let tempStr = "";
        // run a while loop and add each set of consecutive numbers to the string
        while(str[i] && !isNaN(str[i])) {
            tempStr = tempStr + str[i];
            i++;
        }
        // add the numbers to the current dictionary entry
        dict[tempLetter] += parseInt(tempStr)
    }
    // make two separate arrays of numbers and letters
    let keys = Object.keys(dict);
    let values = Object.values(dict);
    // bubble sort the letters (keys) array along with the numbers (values) array
    for(let k = 0; k < keys.length; k++) {
        for(let j = 0; j < keys.length; j++) {
            if(keys[j] > keys[j+1]) {
                let temp1 = keys[j+1];
                let temp2 = values[j+1];
                keys[j+1] = keys[j];
                values[j+1] = values[j]
                keys[j] = temp1;
                values[j] = temp2;
            }
        }
    }
    // make a final return string that combines the letters and numbers one by one
    let returnFinal = "";
    for(let i = 0; i < keys.length; i++) {
        returnFinal = returnFinal + keys[i] + values[i];
    }

    return returnFinal;
}

console.log(rehash(str1));
console.log(rehash("c12n1234z54a5p2z9c103z42"))
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");






