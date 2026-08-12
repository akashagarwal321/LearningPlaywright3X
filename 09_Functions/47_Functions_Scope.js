//Function create its own scope

// function test(){
//     const message = "Hello"; // this is fine
//     console.log(message);
// }

// test();



// function test(){
//     const message = "Hello"; // this is fine
   
// }

// console.log(message);// cannot access message


const message = "hello";

function test(){
    console.log(message); // this works - as outside variables can be accessed
}
test(); 


// Function Parameters Are Also Local

function greet(name){
    console.log(name);
}

greet("akash");
//console.log(name); //cannot access name - as name is a local variable inside functions

//Local variables with the same name

const name = "Akash";

function greet1(){
    const name = "Abhishek";
    console.log(name);
}

greet1();
console.log(name);

//Var behaviour

function test() {
    let x = 10;
    const y = 20;
    var z = 30;
}

test();
//console.log(x); --cnnot access
//console.log(y); -- cannot access
//console.log(z); -- cannot access

//but things change for blocks -- let and const are block scoped.. but var is not--var is function scoped

function scopeTest(){

    if(true){
        let x = 10;
        const y = 20;
        var z = 30;
    }

    //console.log(x);
    //console.log(y);
    console.log(z); // but this works as var are accessible outside block
}

scopeTest();



//Functions Can Modify Outer Variables
let count = 0;

function increment(){
    count++;
}

increment();
increment();

console.log(count); // count is 2 as 