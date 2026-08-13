//normal expression

const add = function (a,b) {
    return a+b;
}

//converts to arrow function as:

const add1 = (a,b) => {
    return a+b;
};

//or
//implicit return
const add2 = (a,b) => a+b ; // shortcut way to write arrow func with one return statement

//arrow func with one param

const square = (number) => {
    return number * number;
}

//can be writtem as

const square1 = number => number*number; //for one param, even paranthesis can be skipped


//arrow functions with no params

const greet = function(){
    console.log("Hello")
}

//conv to arrow
const greet1 = () => console.log("Hello");

greet1();

////Now relate to map function

const arr = [2,3,6,8];

const arr_doubled = arr.map(x=>x*2);

console.log(arr_doubled);

// or even numbers
const arr1 = [1,2,3,4,5,6,7,8,9,10]

const arr_even = arr1.filter(x=>x%2 ===0);

console.log(arr_even);


//arrow functions with multiple params
const add3 = (a,b)=>a+b;
console.log(add1(2,5));


//Arrow returning an object

const getUser = ()=>{
    name: "Akash"
}; // issue - this will return undefined as it treat these curly brace as function block... not an object

console.log(getUser());

const getUser1 = ()=>({
    name:"Akash", age: "34"
})


console.log(getUser1());
console.log(getUser1().name);
console.log(getUser1().age);