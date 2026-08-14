//A callback is a function that we pass to another function, so that the other function can call it later.

// Function
//    ↓
// can be stored in a variable

// Function
//    ↓
// can be passed to another function

// Function passed to another function
//    ↓
// CALLBACK



function greet(){
    console.log("hello");
}

function execute(callback){ //passing a function as as an argument
    callback();
}

execute(greet); // prints hello - notice we passed greet... not greet()


//calling same execute now with arrow function

execute(()=>console.log("hello"));

//relating it with real case - array for each

const numbers = [1,2,3,4];

numbers.forEach((number)=>console.log(number)); // here also we actually pass a function as a callback func

//map

const doubled = numbers.map((number)=>number*2);
console.log(doubled);

//callback received arguments
function execute_1(callback){
    callback("Login");
}

execute_1((text)=>{console.log("Printing the text:",text)}); // while calling parent function - we pass the definition of function as argument

///More realistic example
console.log("*".repeat(20));
function processTest(testName, callback){
    console.log("starting",testName);

    callback();

    console.log("Finished",testName);
}

processTest("Login Test", ()=>{console.log("Running Login Test")});
console.log("*".repeat(20));
console.log("*".repeat(20));

//callback with data

function processTestData(testName,callback){
    const status = "Passed";
    callback(testName,status);
}

processTestData("Login Test - valid",(x,y)=>console.log(`The Result for test "${x}" is ${y}`));

//
const numbers1 = [1, 2, 3];

const result = numbers1.map((number) => {
    return number + 10;
});

console.log(result);


//
console.log("*".repeat(20));

function runTest(testName,browser,callback){
    //when to call 
    console.log("Waiting for something or deciding the condition");
    console.log("done with the work... can call callback");
    callback(testName,browser);
}

runTest("Login","Chromium",(name,brow)=>console.log(`Runinng the test ${name} on the browser ${brow}`));
