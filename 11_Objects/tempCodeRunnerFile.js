// const test = {
//     name: "Login",
//     browser: "Chrome",
//     status: "PASS"
// };

// const { name, status } = test;

// console.log(name);
// console.log(status);

// const test = {
//     name: "Login"
// };

// const { name, browser } = test;

// console.log(browser);

// const test = {
//     name: "Login",
//     browser: "Chrome"
// };

// const { name: testName, browser } = test;

// console.log(testName);
// console.log(name);


// function printTest({ name, status }) {
//     console.log(`${name} - ${status}`);
// }

// const test = {
//     name: "Login",
//     status: "PASS"
// };

// printTest(test);



const testCase = {
    name: "Login Test",
    browser: "Chrome",
    status: "PASS",
    execution: {
        duration: 250,
        environment: "QA"
    }
};

// Now use object destructuring to create variables for:

// name
// browser
// status
// duration
// environment
const {name,browser,status,execution:{duration,environment}} = testCase
console.log(name);
console.log(browser);
console.log(status);
console.log(duration);
console.log(environment);