// given an array and a number N, return the array in the same order with any instances of each number more than N removed
// use an object to store number of occurrences

function deleteNth(arr,n) {
    var frequency = {};
    var output = [];

    for (var i = 0; i < arr.length; i++) {
        if (frequency[arr[i]] == undefined) {
            frequency[arr[i]] = 1;
            output.push(arr[i]);
        }
        else {
            frequency[arr[i]] += 1;
            if (frequency[arr[i]] <= n) {
                output.push(arr[i]);
            }
        }
    } 
    return output;
}