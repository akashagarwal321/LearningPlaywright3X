//Ternary Operator is like if condition - result = age > 18 ? "pass" : "fail"; //// condition ?  value(if true)  : value (if false)

let age = 17;

let isAdult = age >= 18 ? "true":"false";

console.log(isAdult);

const isHeadless = false;

const browser = isHeadless ? "Chromium" : "Chrome";
console.log(browser);


let username = null;

const user = username ? username : "Default";

console.log(user);

//Nested Ternary

console.log("****************nested ternary********************");

// >= 90  → A

// >= 75  → B

// >= 60  → C

// else   → Fail

let marks = 59;
let grade = marks >= 90 ? "A" : marks >= 75 ? "B" : marks >= 60 ? "C" : "Fail";
console.log(grade);


console.log("****************nested ternary more********************");

const role  = "Manager";

const access = role === "Admin" ? "All" : role === "Manager" ? "Limited" : "Guest";
console.log(access);




