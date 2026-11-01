//indexOf()
const message = "Login Test Passed";
console.log(message.indexOf("Test")); //will give index of the starting of word here
console.log(message.indexOf("Failed")) //-1 when string not found
//remember - indexof doesn't return fail/pass

//slice()

const browser = "Chrome";
console.log(browser.slice(0,5)); //Chrom --- Start included, end excluded.


//Megative index with Slice()
const fileName = "report.json";

console.log(fileName.slice(-5)); // prints .json from -5 to end
console.log(fileName.slice(-5,-3)); //prints -3

//substring

const name = "Akash Agarwal";
console.log(name.substring(0,5)); //Akash
console.log(name.substring(0))// Akash Agarwal
console.log(name.substring(5,2)); //ash

//substring is similar to slice but treats negative indexes differently
console.log(name.slice(-5)); // will print last 5
console.log(name.substring(-5)); // will print "Akash Agarwal"

//replace() -only replaces the first match
let message1 = "Login failed";
const updated = message1.replace("failed","passed");
console.log(updated);

const test1 = "test test test"
console.log(test1.replace("test","TEST"));

//replaceAll
console.log(test1.replaceAll("test","TEST"))

//Split() - Important reverse of join

const test_arr = ["A", "k", "a", "s","h"];
console.log(test_arr.join("")); //

console.log("Chrome,Firefox,Edge".split(","));
console.log("Akash".split("")); //provide splittler -- "" in case there is nothing
console.log("This is a test String.".split(" "));



//Practice
const text = "JavaScript";

console.log(text.indexOf("Script"));//4
console.log(text.indexOf("Python"));//-1

console.log(text.slice(0,5)); //JavaS
console.log(text.slice(-5)); //cript

///Coding questions
const url = "https://exmaple.com/users/12345"
console.log(url.split("//")[1].split("/")[0]);
console.log(url.split("//")[1].split("/")[2]);





