let browsers = ['chromium', 'firefox', 'edge'] ; // first way

let scores = [];
let scores1 = new Array(3); // using array constructor - creates an array with empty

console.log(scores1); // empty array -- [ <3 empty items> ]

for(let i = 0; i < scores.length; i++){
    console.log(scores[i]); //prints undefined for each value as empty... not null
}


let scores2 = new Array(1,2,3,4); // using array constructor - creates an array with values which are passed as arguments

console.log(scores2);

scores[0]=1;
console.log(scores); // [ 1, <2 empty items> ]

//another way
let test = Array.of(10, 20, 30, 40, 50); // using Array.of
console.log(test);
console.log(test.length);


//Array.from String
let chars = Array.from("Hello");
console.log(chars);
