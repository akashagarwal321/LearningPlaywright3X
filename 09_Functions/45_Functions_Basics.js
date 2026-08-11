

//Definitions
function greet() {
    console.log("Hello");
}

//Calling
greet();    

//Function with input
function greet(name) {                      // name is a parameter
    console.log("Hello, "+name);      
}

greet("Akash");                         // name is an argument

// parameter → variable/place-holder in function definition

// argument → actual value supplied when calling


function add(a, b) {
    console.log(a + b);
}    

add(10, 20);
add(100, 50);

function addnew(a, b) {
    return a + b;
}

const result = addnew(10, 20);

console.log(result);

//function can return anything - even an array
function getBrowsers() {
    return ["chromium", "firefox", "webkit"];
}

console.log(getBrowsers());

//return ends the function
function test() {
    console.log("A");

    return 10;

    console.log("B"); // never runs
}

test();


//what if return is not mentioned and wjat is the default return -- undefined 

function greet(name) {
    console.log("Hello " + name);
}

const result1 = greet("Akash");

console.log(result1);

//Functions with conditions inside

function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}
console.log(checkAge(25));
console.log(checkAge(15));

//functions with arrrays

function getTotal(numbers) {

    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

const result2 = getTotal([10, 20, 30, 40]);

console.log(result2);

function introduce(name, age) {
    console.log(name);
    console.log(age);
}

introduce("Akash"); // if we are passing one argument only -- no error

function add(a, b) {
    return a + b; // 
}

console.log(add(10)); // ---> a=10 and b=undefined ---> a+b is also undefined

//Extra Arguments
function greet(name) {
    console.log(name);
}

greet("Akash", 34, "Pune"); // no error... extra arguments are removed