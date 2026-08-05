//Data types identity the type of data
// Imp - Data types belongs to Values not variables

let a = 3; // 3 is a literal/value with data type number - there is no datatype of a in javascript (it supports dynamic typing)

a = "Akash"; // now a is pointing to another value with data type as string (this assignment of any new data type literal to same variable is called dynamic typing)

//1. number data type  (nothing like integer, float just Number)
let age = 18; // integers are also just Numbers in js
let price = 10.33; //float are also just numbers in js
let negNum = -10;


console.log("*****".repeat(5));


//2. string data type
let name = "Akash";
let city = "Pune";
let grade = "B"; //even single char are strings

console.log(typeof name);
console.log(typeof city);
console.log(typeof grade);
console.log("*****".repeat(5));


//3. boolean
let status = "true"; // will be treated as string.. not boolean
let isCompleted = true;
let isDone = false;

//let reponseReceived = True --- only true or fale (small case sentitive is considered boolean) - True is being treated like a variable which is not defined yet

// Log the types of the boolean variables
console.log(typeof isCompleted);
console.log(typeof isDone);
console.log(typeof status);
console.log("*****".repeat(5));


//4. Undefined
let salary;

console.log(salary); //value is undefined
console.log(typeof salary); //type is also undefined
console.log("*****".repeat(5));


//5. Null

const manager = null; 

console.log(manager); //value is null
console.log(typeof manager); //but type is object -- historical bug in js where null type of was kept as object
console.log("*****".repeat(5));

//6. Symbol

const id = Symbol("id");

console.log(id);
console.log(typeof id);
console.log("*****".repeat(5));

//7. Big INT

const population = 123456789012345678901234567890n;

console.log(population);
console.log(typeof population);



