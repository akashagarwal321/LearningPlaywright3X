


console.log(10 > 5);
console.log(5 < 10);
console.log(5>=5);
console.log(5<=6);



// Loose(==) vs Strict(===) Comparison
sep("Loose vs Strict comparison")

console.log("10" == 10); // true - as implicity js converts "10" to 10 and then compare
console.log("10" === 10); //false - as strict comparison check everything including datatype

//More Examples of loose comparisons
sep("More Examples for loose comparison")
console.log(1 == true); //true because 1 can be compared to true

console.log(1 === true); // false

console.log("1" == true); // true because "1" is converted to 1 while doing loose compare

console.log("true" == true); //false because "true" cannot be coverted to boolean

console.log(false == 0); // true
console.log(false === 0); //false

//Loose and Strict Not equal to
sep("Loose and Strict Not Equal")


console.log("10" != 10); // false because "10" is equal to 10 in loose comparison
console.log("10" !== 10); // true


//creating a reusable function for printing separator with message
function sep(text) { 
    console.log("*".repeat(20),text,"*".repeat(20));
};





