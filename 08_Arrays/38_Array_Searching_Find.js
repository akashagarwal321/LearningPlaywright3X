// Different from filter as find() Gives the first element that matches this condition.

const numbers = [10, 20, 30, 40];

const result_filter = numbers.filter(number => number > 15);
const result_find = numbers.find(number => number > 15);

console.log(result_filter); //an array with matching elements
console.log(result_find); // only one value

//finds stops early
const numbers1 = [5, 12, 18, 25, 30];

const result1 = numbers1.find(number => {
    console.log("Checking:", number);
    return number > 15;
});                                                 // doesn't try after 18


const numbers2 = [1, 2, 3];

const result2 = numbers2.find(number => number > 10); //if nothing matches

console.log(result2); // returns undefined


const browsers = [
    "chromium",
    "firefox",
    "webkit",
    "safari"
];

const result = browsers.find(browser => browser.includes("fire"));
console.log(result);

//find vs includes
//includes can do only simple match - browsers.include('firefox')
//finc can do condition matches - browsers.find((browser_name)=>browser_name.length > 5) --- will give browser where length exceeded 5


const users = [
    { name: "Akash", age: 34 },
    { name: "Rahul", age: 30 },
    { name: "Priya", age: 28 }
];

const user = users.find(user=>user.name === "Rahul");
console.log(user)

//findindex
const numbers3 = [5, 12, 18, 25, 30];

const result3 = numbers1.findIndex(number => number > 15);      //gives index of 18
console.log(result3);


//findlast
const numbers4 = [5, 12, 18, 25, 30];

const result4 = numbers4.findLast(number =>number > 15);
console.log(result4);

//findlastIndex

const numbers5 = [5, 12, 18, 25, 30];

const result5 = numbers5.findLastIndex(number => number > 15);       //gives index of 30
console.log(result5);