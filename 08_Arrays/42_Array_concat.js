//concatenating arrays

arr1 = [1,2,3,4];
arr2 = [5,6,7,8];

new_arr1 = arr1.concat(arr2);
console.log(new_arr1);

const frontend = ["HTML", "CSS"];
const backend = ["Node", "Java"];

const skills = frontend.concat(backend);

console.log(skills);

const result = [1,2].concat([3,4],[5,6],"Akash",NaN,true); // anything can be concatenated

console.log(result);

const new_result = result.concat("a","b"); //adding individual values
console.log(new_result);

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);

// spread (modern way) - concatenation. (...)
// ... all the eleement
let d = [...a,...b];
console.log(d);

// Join 
// array into one string
let s = ["pass", "fail", "skip"].join(" | ");
console.log(s);