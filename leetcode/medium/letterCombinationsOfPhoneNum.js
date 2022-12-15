// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 0 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let numbers = [];
    let output = [];
    for(let i = 0; i < digits.length; i++){
        switch (digits[i]){
            case "2":
                numbers.push(["a","b","c"]);
                break
            case "3":
                numbers.push(["d","e","f"]);
                break
            case "4":
                numbers.push(["g","h","i"]);
                break
            case "5":
                numbers.push(["j","k","l"]);
                break
            case "6":
                numbers.push(["m","n","o"]);
                break
            case "7":
                numbers.push(["p","q","r","s"]);
                break
            case "8":
                numbers.push(["t","u","v"]);
                break
            case "9":
                numbers.push(["w","x","y","z"]);
                break
        }
    }
    if(digits.length == 0){
        return output;
    }
    else if(digits.length == 1){
        return numbers[0];
    }
    for(let i = 0; i < numbers[0].length; i++){
        for(let j = 0; j < numbers[1].length; j++){
            if(digits.length == 2){
                let tempStr = ""
                tempStr = tempStr + numbers[0][i] + numbers[1][j];
                output.push(tempStr);
                continue
            }
            for(let k = 0; k < numbers[2].length; k++){
                if(digits.length < 3){
                    break;
                }
                else if(digits.length === 3) {
                    let tempStr = ""
                    tempStr = tempStr + numbers[0][i] + numbers[1][j] + numbers[2][k];
                    output.push(tempStr);
                    continue
                }
                for(let l = 0; l < numbers[3].length; l++){
                    if(digits.length < 4){
                        break;
                    }
                    else {
                        let tempStr = ""
                        tempStr = tempStr + numbers[0][i] + numbers[1][j] + numbers[2][k] + numbers[3][l];
                        output.push(tempStr);
                    }
                }
            }
        }
    }
    return output;
};