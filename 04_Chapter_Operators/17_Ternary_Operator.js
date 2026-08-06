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