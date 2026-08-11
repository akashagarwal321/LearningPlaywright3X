

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

greet("Akash", 34, "Pune"); // The extra arguments don't automatically cause an error. The function simply doesn't use them.


//Default arguments
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Akash"); // Hello Akash
greet(); //Hello Guest
greet(undefined); //Hello Guest
greet(null); //Hello null --- //important... default is called only when no thing provided or undefined


//Functions can be stored in variables

function greet() {
    console.log("Hello");
}

const myFunction = greet; // here we are not calling greet() - but only writing greet which means function itself --> assiging greet function to myFunction variable

greet(); //calling greet
myFunction(); //callingmyFunction


//Return values can be passed to another function
function square(number) {
    return number * number;
}

function double(number) {
    return number * 2;
}

const result = double(square(5));
console.log(result);

