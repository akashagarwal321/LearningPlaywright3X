//before coalesence

// let name1 = "Akash"
// let username1 = name1 || "default"; 
// console.log(username1); // works fine

// let name1 = null
// let username1 = name1 || "default"; 
// console.log(username1); // also works fine

// let name1 = undefined
// let username1 = name1 || "default"; 
// console.log(username1); // also works fine

//but

// let input = 18
// let age = input || 18;
// console.log(age); // this works fine

// let input = 0
// let age = input || 18;
// console.log(age); // here it fails -- as expected is 0 (valid number - not null) but it will give 18 - reason is that || don't check for nullness but truthiness




//Thus, for null - null coalescense --
console.log("****************** Null Coalescense ******************");

let name = null;  
let username = name ?? "default";               //for null or undefined - will got to "default" else name
console.log(username);

let input = 0;
let age = input ?? 18;

console.log(age); // this will print 0 only as 0 is not null

const isAdmin = false;
console.log(isAdmin??true); // expected is false only as this is not null;


console.log(null ?? "Guest"); // prints Guest - as left side is null
console.log(undefined ?? "Guest"); //prints Guest - as left side is undefined
console.log("" ?? "Default"); //prints ""
console.log("" || "Default"); //prints "Default" - "" is falsy

console.log(0 ?? 100); // prints 0
console.log(0 || 100); //prints 100

console.log(false ?? true); //prints false
console.log(false || true); //prints true - as left is falsy (|| works with truthy or falsy)