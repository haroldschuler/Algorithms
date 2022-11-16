/* 
    Given a square matrix (2d array) of integers
    Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/
const squareMatrix1 = [
    [1, 2, 3], // arr[0][0]    arr[0][2]                           
    [4, 5, 6], // arr[1][1]    arr[1][1]                          
    [9, 8, 9], // arr[2][2]    arr[2][0]                            
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5], // arr[0][0]    arr[0][4]
    [1, 2, 3, 4, 5], // arr[1][1]    arr[1][3]
    [1, 2, 3, 4, 5], // arr[2][2]    arr[2][2]
    [1, 2, 3, 4, 5], // arr[3][3]    arr[3][1]
    [1, 2, 3, 4, 5], // arr[4][4]    arr[4][0]
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/


function diagonalDifference(sqrMatrix) {
    let diagonalOne = 0;
    let diagonalTwo = 0;
    for (let i = 0; i < sqrMatrix.length; i++) {
        diagonalOne += sqrMatrix[i][i];
    }
    for (let j = 0; j < sqrMatrix.length; j++) {
        diagonalTwo += sqrMatrix[j][sqrMatrix.length-1-j];
    }
    return Math.abs(diagonalOne-diagonalTwo);
}

function diagonalDifference2(sqrMatrix) {
    let sum = 0;
    for(let i = 0; i < sqrMatrix.length; i++) {
        sum = sum + sqrMatrix[i][i] - sqrMatrix[i][sqrMatrix.length -1 -i];
    }
    return Math.abs(sum);
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));
console.log(diagonalDifference([[3,5],[7,1]]));
console.log(diagonalDifference([[3]]));

console.log("*************** METHOD 2 ***************")
console.log(diagonalDifference2(squareMatrix1));
console.log(diagonalDifference2(squareMatrix2));
console.log(diagonalDifference2([[3,5],[7,1]]));
console.log(diagonalDifference2([[3]]));