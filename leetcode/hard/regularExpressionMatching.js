/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
 var isMatch = function(s, p) {
    let idx1 = 0;
    let idx2 = 0;
    while(s[idx1]){
        if(p[idx2] === "*"){
            if(p[idx2-1]==="."){
                return true;
            }
            else {
                if(s[idx1] === p[idx2-1]){
                    idx1 += 1;
                    continue;
                }
            }
            idx2 += 1;
        }
        else if(p[idx2] === "."){
            idx1 += 1;
            idx2 += 1;
        }
        else {
            if(p[idx2+1] && p[idx2+1] === "*" && s[idx1] !== p[idx2]){
                idx2 += 2;
                continue;   
            }
            else if(s[idx1] !== p[idx2]){
                return false;
            }
            idx1 += 1;
            idx2 += 1;
        }
    }
    return true;
};