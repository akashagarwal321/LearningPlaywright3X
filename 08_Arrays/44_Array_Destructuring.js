let nums = [10,20,30,40,50];

let [a,b,c,d,e] = nums;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

//Destructuring is based on postiton

let [x,y,z] = nums; // will only take inital 3
console.log(x);
console.log(y);
console.log(z);

//skipping an element

let[num1,,num2] = nums;

console.log(num1);
console.log(num2);

//
let[,,num3] = nums;
console.log(num3);

//default values
let browsers = ["chrome","firefox"]
// let [browser1,browser2,browser3] = browsers;
// console.log(browser1);
// console.log(browser2);
// console.log(browser3); // undefined

let [browser1,browser2,browser3="edge"] = browsers;
console.log(browser1);
console.log(browser2);
console.log(browser3); // edge if browser 3 unavaialble


//swapping
let p = 1, q = 2;
[p, q] = [q, p];
console.log(p, q); // 2 1

//Destructuring with Rest

let [no1,no2,...no3] = nums;
console.log(no1);
console.log(no2);
console.log(no3);

