//charAt()

const browser = "Chrome";
console.log(browser[0]); // C

//another way
console.log(browser.charAt(0));

//padStart()
const id = "7";
console.log(id.padStart(3,"0")); //007 --- total length will will 3 and remaining chars are 0 in the start

const num = "42";
console.log(num.padStart(5,"0")); //00042 --- total length will be 5,,, so 3 zeroes at start


//Example
const number = "7";

const testId = `TC-${number.padStart(3, "0")}`; // pads 0 when upto 3 digits

console.log(testId);


//padEnd
const browser1 = "Chrome";
console.log(browser1.padEnd(10,".")); //Chrome....  --- total length to be 10 so Chrome and 4 "."

//Template Literals

const name = "Akash";
console.log(`Hello ${name}`);

//example
const _browser = "Chrome";
const status = "PASS";

console.log("Browser: " + _browser + ", Status: " + status);

//Expressions in Template Literals
const price = 100;
const quantity = 3;

console.log(`Total: ${price * quantity}`);

//even methods can be called

const __browser = "chrome";
console.log(`Browser is ${__browser.toUpperCase()}`);

//Multiline Strings

const message = `
Test Name: Login
Browser: Chrome
Status: PASS
`;
console.log(message);

//String Conversion to number

const num2 = "10";

console.log(typeof num2);
console.log(num2 + 20); //will do concatenation - 1020

console.log(typeof Number(num2));
console.log(Number(num2)+20); // will work now

//NUmber() vs parseInt()

console.log(Number("100px")); //NaN
console.log(parseInt("100px")); //100 -- extracts only num part from the beginning of the staring
console.log(parseInt("px100")); //NaN -- remember - only from starting

//Number to String conversion
const num3 = 100;
const text = String(num3);

console.log(typeof text);
//or
console.log(num3.toString());

//SDET Execise

const testCase = "    tc-login-7     ";
// Produce:

// TC-LOGIN-007

// Your code should:

// Remove the surrounding spaces.
// Convert the result to uppercase.
// Split it using -.
// Convert the test number (7) into 007.
// Reconstruct the final test ID.

let step1 = testCase.trim();
let step2 = step1.toUpperCase();
let step3 = step2.split("-");
step3[2] = step3[2].padStart(3,"0");
console.log(step3)
let step4 = step3.join("-");
console.log(step4);



