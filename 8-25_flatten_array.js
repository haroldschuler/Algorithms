//this takes a 2D array and returns a single array
//ex. [[2,4,6],[1,3],[6,7,8,9]] -> [2,4,6,1,3,6,7,8,9]
function flatten(arr2d) {
    var flat = [];
    for (var i=0; i<arr2d.length; i++) {
        for (var j=0; j < arr2d[i].length; j++) {
            flat.push(arr2d[i][j]);
        }
    }
    return flat;
}

var x = [[2,4,6],[1,3],[6,7,8,9]];
x = flatten(x);
console.log(x);