//used when we are mostly aware on how many iterations to do

let sep = (value=null)=> value ? console.log(`******* ${value} ********`) : console.log("******* Sep ********");


// for (initialization; condition; update) {
//     // code
// }


sep("Simple For loops - increment");
for(let i = 1; i <= 10; i++){
    console.log(i);
}


sep("Simple For loops - decrement");
for(let i = 10; i >= 1; i--){
    console.log(i);
}

sep("even numbers");

for(let i = 2; i <= 20; i+=2){
    console.log(i)
}

sep("Odd numbers");

for(let i = 1; i <= 20; i+=2){
    console.log(i)
}

sep("Example - total from 1 to 5");
let sum = 0;
for(let i = 1;i<=5;i++){
    sum+=i;
}
console.log(sum);



sep("Example");
const totalTests = 5;

for(let i = 1; i <= 5; i++){
    console.log(`Executing Test ${i}`);
}