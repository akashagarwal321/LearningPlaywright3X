
//normal func declaration
// function greet(){ 
//     console.log("Hello");
// }

// greet();

//function as expression
const greet = function (){
    console.log("Hello");
}

greet();

//why ?
// Functions are values in JavaScript.
// So we can:
    // store them
    // pass them
    // return them
// This is one of the things that makes JavaScript particularly flexible.

const greet1 = function sayHello(){     //func as expression - with func name
    console.log("Hello1");
}

greet1();
//sayHello(); // in func expression - this cannot be used as sayHello is function name and can be used within a function (recursion or anything)

//func expression with params

const add = function (a,b){
    return a+b;
}

console.log(add(10,20));s