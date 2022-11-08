// findObjectsFilter({searchFor}, [itemsArr])

// given a {search for} object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
    // make a return array
    let searchResults = [];
    // loop through item objects
    for(let item of items) {
        // create a match object with a "false" value set at 0
        let match = {"false": 0};
        // loop through each key in the search criteria object
        for(let key in searchObj) {
            // check if the item object has a key matching the current search criteria key
            if(!item.hasOwnProperty(key)) {
                // if not add 1 to the match object and skip the remainder of the for loop
                match["false"] += 1;
                continue;
            }
            // else check if the value of the current key in the item object matches the the value in the search criteria object
            else if(item[key] !== searchObj[key]){
                // if not add 1 to the match object and skip the remainder of the for loop
                match["false"] += 1;
                continue;
            }
        }
        // check if the "false" value of the match object is equal to 0
        if(match["false"] == 0) {
            // if so add the current item object to the return array
            searchResults.push(item);
        }
        // end the for loop and reset the match array "false" value to 0
    }
    return searchResults;
}


console.log(findObjectsFilter(searchFor1, items));
console.log(findObjectsFilter(searchFor2, items));


