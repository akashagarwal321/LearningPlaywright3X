//creating a reusable function for printing separator with message
let sep = (text) => { 
    console.log("*".repeat(20),text,"*".repeat(20));
};
sep("Logical operator - basics")

let a = true;
let b = false;



console.log(a && b);
console.log(a || b);
console.log(!a);
console.log(!b);


sep("Logical Operators - && More");
const age = 25;
console.log(age > 18 && age < 60);

console.log(10 > 20 && 5 < 10);


const currentAge = 34;
const hasLicense = true;

console.log(currentAge >=18 && hasLicense);


sep("Logical Operators - || More");

let day = "saturday"

console.log(day === "saturday" || day == "sunday")

