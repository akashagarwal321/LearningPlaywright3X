// /A closure happens when a function remembers variables from the scope where it was created,
//  even after that outer function has finished executing.

// function outer() {
//     let message = "Hello";

//     function inner() {
//         console.log(message);
//     }

//     inner();
// }

// outer(); // prints hello ... normal

//but

function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    return inner; // attention... we are returning function..  that;s why inner; not inner();
}

const myfunction = outer(); // we returned the inner funtion into myfunction -- the outer function
// is completed here

myfunction(); ///but, this returns "Hello" - still it has access to message variable even after outer is finished.

//another example

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());


//ideallly
//console.log(count); -- count is not accessible as it is local to CreateCounter
//but counter() can access count


//another example

console.log("*".repeat(30));

function makeCounter(start = 0){
    let count = start;

    function increment(){count++; return count;};
    function decrement(){count--; return count;};

    return {increment, decrement}
}

let baseCounter = makeCounter(1);
console.log(baseCounter.increment());
console.log(baseCounter.decrement());
console.log(baseCounter.decrement());


///
console.log("**************** Separator ***************");

//Function scope
function test() {
    let value = 10;
}

//value is local to test().

//Closure
function test() {
    let value = 10;

    return function () {
        return value;
    };
}

const new_func = test();
console.log(new_func()); // return 10

console.log(test()()); //or in short

//Now the returned function retains access to value after test() has finished.
function createCounter1() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter1 = createCounter1();

console.log(counter());
console.log(counter());

console.log("**************** Separator ***************");


const countera = createCounter1();
const counterb = createCounter1();

console.log(countera()); //1
console.log(countera()); //2
console.log(counterb()); //1 -- as counter 2 have a separate instance of count 
console.log(countera()); //3 -- counter1 was 2 before

console.log("**************** Separator ***************");
console.log("**************** Separator ***************");

function createTestIdGenerator(){
    let id = 1000;

    return function(){
        id++;
        return `TEST-${id}`;
    }
}

const generateTestId = createTestIdGenerator();
console.log(generateTestId());
console.log(generateTestId());
console.log(generateTestId());
console.log(generateTestId());

//
console.log("**************** Separator ***************");
console.log("**************** Separator ***************");

function maxRetryTracker(max){
    let attempts = 0;

    function tryAgain(testName){
        attempts++;
        if (attempts > max){
            return `${testName} execeeded max retries (${max})`
        }
        return `Attempt ${attempts}/${max} for ${testName}`;
    }

    return tryAgain;
}

let runTCRetry = maxRetryTracker(3);
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));
console.log(runTCRetry("Login"));



console.log("**************** Separator ***************");
console.log("**************** Separator ***************");


function makeRateLimiter(limit){
    let call = 0;
    function check(){
        call++;
        return call <= limit;
    }

    return check;
}

let limiter = makeRateLimiter(3);
console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());

console.log(limiter());

console.log(limiter());
console.log(limiter());
console.log(limiter());
console.log(limiter());