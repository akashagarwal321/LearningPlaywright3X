
let sep = (value=null)=> value ? console.log(`******* ${value} ********`) : console.log("******* Sep ********");


//For Browser -- only

// const input = prompt("Enter your age");

// const age = Number(input); //Convert into Number as inputs are string by default

// console.log(name);


//First Way - Old and traditional way
// sep("********** First Way ***************");
// const readline = require("readline"); // importing node built in module

// const rl = readline.createInterface({ //creating and interface to take input from here and send output here
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter your age: ",(age) => { //Ask Questions ? -- pass fallback function
//     console.log("The age is:" ,age);
//     rl.close();
// })

//prompt way -- will need package - propmt sync to be installed
sep("********** prompt sync way ***************");
// const prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number: "));
// if (num % 2 === 0) {
//     console.log(num + " is Even");
// } else {
//     console.log(num + " is Odd");
// }

console.log("Enter the number!");
const data = require('fs').readFileSync(0, 'utf8');
console.log("Hi", data);