//My solution - not the most elegant way because you could be running this loop for a while in some cases
// function rollDie() {
//     var num = 0;
//     while (num < 1 || num >= 7) {
//         num = Math.floor(10*Math.random());
//     }
//     return num;
// }
// console.log(rollDie());

//small group answer
// function rollDie2(min,max) {
//     return Math.floor(Math.random()*max-min+1)+min;
// }
// console.log(rollDie2(1,6));

//instructor solution
function rollDie3() {
    var x = Math.ceil(Math.random()*6);
    return x;
}
console.log(rollDie3());