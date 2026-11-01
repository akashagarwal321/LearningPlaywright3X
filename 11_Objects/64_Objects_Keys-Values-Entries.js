const testCase = {
    name: "Login Test",
    browser: "Chrome",
    status: "PASS"
};

const keys = Object.keys(testCase); //returns an array
console.log(keys); // 
console.log(keys.length);
keys.forEach((x)=>console.log(x));


const values = Object.values(testCase);
console.log(values);

const entries = Object.entries(testCase); //key,value pairs -- an array of arrays
console.log(entries);


//destructing with entries

for (const [key,value] of Object.entries(testCase)){
    console.log(key,value);

}

console.log("*".repeat(60));
//SDET Example
const config = {
    browser: "Chrome",
    environment: "QA",
    timeout: 30000
};

Object.entries(config).forEach(([key,value])=>console.log(key,value));

//PRactice
console.log("*".repeat(60));
console.log("*".repeat(60));
console.log("*".repeat(60));

const testResults = {
    login: "PASS",
    search: "PASS",
    checkout: "FAIL",
    logout: "PASS"
};

Object.keys(testResults).forEach((key)=>console.log(key))
console.log("*".repeat(60));

console.log(Object.values(testResults).filter((value)=>value==="PASS").length);

Object.entries(testResults).forEach(([key,value])=>{console.log(`${key} -> ${value}`)});


