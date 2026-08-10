let arr = [1, 2, 3, 4, 5, 6, 7, 8, 10];

console.log("*********** Map ***************");
//map - transform each value

//example - new array with values as doubled

let sq_arr = arr.map((x) => x * 2); // array with each value multiplied by 2 in previous array
console.log(sq_arr); //always remember - map gives and array with same length
console.log(arr); // original array is intact


console.log("*********** Map - Examples***************");
const names = ["akash", "rahul", "priya"];
let caps_names = names.map((name) => name.toUpperCase());
//OR
let = caps_names_alt = names.map((name) => {
    return name.toUpperCase();
})
console.log(caps_names);
console.log(caps_names);


//with objects
//example only print names
const users = [
    { name: "Akash", age: 34 },
    { name: "Rahul", age: 30 }
];

console.log(users.map((user) => user.name));

console.log("*********** Map - with index etc (just like forrach - element, filter, array)***************");

const browsers = ["chromium", "firefox", "webkit"];

const res_browsers = browsers.map((browser, index) => `${index} : ${browser}`);
console.log(res_browsers);





const numbers = [1, 2, 3];

const result = numbers.map((number) => {
    console.log(number);
});
//but

console.log(result); //[ undefined, undefined, undefined ] - because while creating result... we didn't return values in map


console.log("*********** filter ***************");

console.log("*********** filter ***************");
//filter - only give values based on condition;

//example - find only odd numbers in the array

odd_arr = arr.filter((x) => x % 2 !== 0); // comparing each element with condition... and will only give the ones with conditions satisified
console.log(odd_arr); // lenght of array can change
console.log(arr);


const marks = [45, 72, 81, 33, 91, 60];
const passingMarks = marks.filter((num) => num >= 60);

console.log(passingMarks);



console.log("*********** Filter - with index etc (just like forrach - elememt,index, array)***************");

const browsers1 = ["chromium", "firefox", "webkit"];

const res_browsers1 = browsers.filter((browser, index) => index >= 1);  // condition on index
console.log(res_browsers1);

console.log("*********** Filter - real world example)***************");

const testCases = [
    "Login",
    "Search",
    "Payment",
    "Checkout",
    "Logout"
];

const selectedTests = testCases.filter((test) => {
    return test === "Payment" || test === "Checkout"; //run tests which are payment or checkout
});

console.log(selectedTests);



console.log("*********** Map and Filter combined***************");

const nums = [1, 2, 3, 4, 5, 6]; // only doubled even numbers

const db_ev_nums = (nums.filter(x => x % 2 == 0)).map(x => x * 2);

console.log(db_ev_nums);