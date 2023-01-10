/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let front = 0;
    let back = s.length - 1;
    while(front <= back){
        while(isLetter(s[front]) == false){
            front += 1;
        }
        while(isLetter(s[back]) == false){
            back -= 1;
        }
        if(s[front].toLowerCase() != s[back].toLowerCase()){
            return false;
        }
        front += 1;
        back -= 1;
    }
    return true;
};

function isLetter(char){
    return char.toUpperCase() != char.toLowerCase();
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))