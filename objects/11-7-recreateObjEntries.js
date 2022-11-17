/* 
Recreate Object.entries() method
Given an object,
return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];


const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};
const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

obj1.__proto__ = obj2;
  //   obj1.firstName = 'Jon';

function entries(obj) {
    let entries = [];
    let keys = Object.keys(obj);
    let values = Object.values(obj);

    for(let i = 0; i < keys.length; i++) {
        let entryArr = [];
        entryArr.push(keys[i]);
        entryArr.push(values[i]);
        entries.push(entryArr);
    }
    return entries;
}

function entries2(obj) {
    let entries = [];
    for(let key in obj) {
        let entryArr = [];
        if(obj.hasOwnProperty(key)){
            entryArr.push(key);
            entryArr.push(obj[key]);
            entries.push(entryArr)
        }
    }
    return entries;
}

// console.log(entries(obj1));
// console.log(entries(obj2));

// console.log(entries2(obj1));
// console.log(entries2(obj2));

/* ==== B O N U S ====
Given a table name string and an object whose key value pairs represent column names and values for the columns
return a SQL insert statement string
Tip: string interpolation (using back ticks, the key to the left of num 1 key)
Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA = "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

//   // Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expectedB = "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";

function insert(tableName, columnValuePairs) {
    let columnString = "";
    let valueString ="";
    console.log()
    for(key in columnValuePairs) {
        columnString = columnString + key + ", ";
        valueString = valueString + "'" + columnValuePairs[key] + "', ";
    }
    let newColumnString = columnString.slice(0,-2);
    let newValueString = valueString.slice(0,-2);
    return `INSERT INTO ${tableName} (${newColumnString}) VALUES (${newValueString})`

}

console.log(insert(table, insertData1));
console.log(insert(table, insertData2));