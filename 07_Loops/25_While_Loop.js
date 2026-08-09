let sep = (value=null)=> value ? console.log(`******* ${value} ********`) : console.log("******* Sep ********");

//While condition is true - Loop the statements
// while (condition) {
//     // code
// }

let i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

sep("Example")  ;

let age = 10;

while(true){
    if (age >= 18){
        console.log("Now an adult as age is ",age);
        break;
        
    }
    else{
        console.log("Not an adult as age is ",age); 
    }
    age++;
}

sep("Sum Example using while");

let sum = 0;

let counter = 1;

while(counter <= 5){
    sum+=counter;
    counter++;
}
console.log(sum);

sep("print even numbers Example using while");

let j = 2;

while(j <= 20){
    console.log(j);
    j+=2;
}

sep("Another example");
let attempts = 0;
const maxAttempts = 3;

while(attempts<maxAttempts){
    attempts++;
    console.log(`Attempt ${attempts}`);
};


