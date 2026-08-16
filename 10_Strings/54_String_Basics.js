//Strings are indexed
const browser = "Chrome" // C-0, h-1, r-2, o-3, m-4, e-5

console.log(browser[0]); // C
console.log(browser[2]); // r
console.log(browser[4]); // m

//Length

console.log(browser.length); // prints 6 - lenth of word Chrome
console.log("Akash Agarwal".length); //prints length including space
//we write length.. not length()

//Important - Unlike array - we cannot change strings - Strings are immutable

//e.g,

console.log(browser[0]); //print C - this is possibe
browser[0] = "X";   // this is not possible
console.log(browser); //still prindts C

//important String methods
//toUpperCase()
console.log("akash".toUpperCase());
//toLowerCase()
console.log("AKASH".toLowerCase());
//trim()
console.log("   sunakshi   ".trim());
//includes
console.log("Akash".includes("s"));
console.log("Login Successful".includes("Successful"));

//Case sensitivity
const browser1 = "Chrome";

console.log(browser1.includes("chrome")); // false
console.log(browser1.toLowerCase().includes("chrome")); //chrome

//startswith and endswith
const fileName = "test-results.json";
console.log(fileName.startsWith("test"));
console.log(fileName.endsWith(".json"));

//exercise
const testResult = "   Login Test Passed   ";
new_testResult = testResult.trim().toUpperCase()
console.log(new_testResult);
console.log(new_testResult.includes("LOGIN"));
console.log(new_testResult.endsWith("PASSED"));



