//A Map stores key → value pairs.

const testStatus = new Map();
testStatus.set("Login","PASS");
testStatus.set("Search","PASS");
testStatus.set("Checkout","FAIL");

//getting a value

console.log(testStatus.get("Login"));

//veriying
console.log(testStatus.has("Search"))

testStatus.delete("Checkout")
console.log(testStatus);

//Major Difference between Map and Objects
//Object keys are strings/symbols
//MAP keys can be anything

testStatus.set(101,"PASS");
testStatus.set(102,"FAIL");
console.log(testStatus);
console.log(testStatus.get(101));

//we can even use objects as keys
const test = {
    name: "Login"
}

testStatus.set(test,"PASS");
console.log(testStatus);
console.log(testStatus.get(test));

//
console.log(testStatus.size);
console.log(testStatus.has("Search"))

//Updating a value
testStatus.set("Login","FAIL"); // if key exists already then only update
console.log(testStatus);

//Looping through Maps

//
for (const [key, value] of testStatus) {
    console.log(key,"and", value);
}

//Map.keys(), Map.values(), Map.entries() - same

console.log([...testStatus.keys()]); //as .keys wil return iterators not array directly