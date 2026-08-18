console.log("****".repeat(10), "Separator", "****".repeat(10));
//Nested objects

const testCase = {
    name: "Login Test",
    execution: {
        browser: "Chrome",
        environment: "QA",
        status: "PASS"
    }
};

console.log(testCase.execution.browser);
console.log(testCase["execution"]["browser"]); // this way also works

console.log("****".repeat(10), "Separator", "****".repeat(10));
//Objects can contain arrays

const testCase1 = {
    name: "Login Test",
    browsers: ["Chrome", "Edge", "Firefox"]
}

console.log(testCase1.browsers[1]);

console.log("****".repeat(10), "Separator", "****".repeat(10));
//Arrays can contain Objects

const testCases = [
    {
        name: "Login Test",
        status: "PASS"
    },
    {
        name: "Checkout Test",
        status: "FAIL"
    }
];

console.log(testCases[0].name);
console.log(testCases[1]["status"]);


console.log("****".repeat(10), "Separator", "****".repeat(10));
//Combining Objects + Arrays + Array Methods

const newTestCases = [
    { name: "Login", status: "PASS" },
    { name: "Search", status: "PASS" },
    { name: "Checkout", status: "FAIL" }
];

newTestCases.filter((tc)=>tc.status === "FAIL").forEach((x)=>console.log(x.name))



console.log("****".repeat(10), "Separator", "****".repeat(10));
//Deep Nested

const response = {
    test: {
        execution: {
            browser: {
                name: "Chrome",
                version: "151"
            }
        }
    }
};

console.log(response.test.execution.browser.version)
console.log(response?.test?.execution?.browser?.name) // use with optional chaining


const tests = [
    { name: "Login", status: "PASS" },
    { name: "Checkout", status: "FAIL" },
    { name: "Search", status: "PASS" }
];

const passed = tests.filter(test => test.status === "PASS");
console.log(passed);
console.log(passed.length);
console.log(passed[0].name);