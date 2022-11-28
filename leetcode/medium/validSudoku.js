// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

// Input: board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: true
// Example 2:

// Input: board = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]]
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Constraints:

// board.length == 9
// board[i].length == 9
// board[i][j] is a digit 1-9 or '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for(let i = 0; i < board.length; i++){
        let rowCounter = {};
        let columnCounter = {};
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] !== "." && rowCounter.hasOwnProperty(board[i][j])){
                return false
            }
            else {
                rowCounter[board[i][j]] = 1;
            }
        }
        for(let k = 0; k < board.length; k++) {
            if(board[k][i] !== "." && columnCounter.hasOwnProperty(board[k][i])) {
                return false;
            }
            else {
                columnCounter[board[k][i]] = 1;
            }
        }
    }
    for(let m = 0; m < 3; m++){
        for(let n = 0; n < 3; n++){
            let sqrCounter = {};
            for(let l = 0; l < 3; l++){
                for(let k = 0; k < 3; k++){
                    if(board[m*3+l][n*3+k] !== "." && sqrCounter.hasOwnProperty(board[m*3+l][n*3+k])){
                        return false;
                    }
                    else {
                        sqrCounter[board[m*3+l][n*3+k]] = 1;
                    } 
                }
            }
        }
    }
    return true
};