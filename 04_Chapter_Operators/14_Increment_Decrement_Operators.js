let sep = (text) => { 
    console.log("*".repeat(20),text,"*".repeat(20));
};




let count = 1;

count = count + 1;


console.log(count);


//we can do increment

count++;
console.log(count);
++count;
console.log(count);

count--;
console.log(count);
--count;
console.log(count);


//pre and post difference
sep("Difference between pre and post increment/decrement")

let a1 = 10;
let post = a1++;

console.log(a1);
console.log(post);


a1=10;
let pre = ++a1;

console.log(a1);
console.log(pre);


a1 = 20;
console.log(a1++); // prints 20 only as increment will happen post this line

a1=20;
console.log(++a1); // a is already 21 and printed as increment happens before

sep("compex example 1")

let a2 = 10;

let b2 = a2++; // b = 10, a=11

let c2 = ++a2; // c = 12, a=12

console.log(a2); //12
console.log(b2); //10
console.log(c2); //12

sep("Practice")
// let a = 10;
// console.log(++a + a); // 11+11 = 22
// console.log(a); //11

// let a = 10;
// console.log(++a + a + a++); // 11 + 11 + 11 = 33
// console.log(a); //12

// let i = 1;
// let result = i++ + ++i; // 1 + 3 = 4
// console.log(result, i); // 4 3

// let a = 10;
// console.log(++a + ++a); //11 + 12 =23
// console.log(a); //12

// let a = 34;
// let result = a++; // r = 34, a == 35
// console.log(result); //34
// console.log(a); //35

// let a = 10;
// let b = --a;
// console.log(b); //9
// console.log(a); // 9

let a = 10;
let b = a--;
console.log(b); //10
console.log(a); //9
