// 💻 Coding Exercise

// Create this yourself:

const testSuite = {
    name: "Smoke Suite",


    tests: [
        {
            name: "Login",
            status: "PASS"
        },
        {
            name: "Search",
            status: "PASS"
        },
        {
            name: "Checkout",
            status: "FAIL"
        }
    ]
};

// Now write code to:

// 1. Print: Smoke Suite
console.log(testSuite.name);
// 2. Print the name of the second test: Search
console.log(testSuite.tests[1].name);
// 3. Create a new array containing only failed tests.
let failedTests = testSuite.tests.filter((test)=>test.status === "FAIL");
console.log(failedTests);
// 4. Print the name of the failed test.
console.log(failedTests[0].name);
// 5. Use map() to create:  ["Login", "Search", "Checkout"]
testNames = testSuite.tests.map((test)=>test.name);
console.log(testNames);