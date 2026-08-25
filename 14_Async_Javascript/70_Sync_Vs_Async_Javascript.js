//Sync --- run statements one by one.. wait for each to complete.
//Async -- will not wait as long waitings can be inefficient


//Example
//Sync 
console.log("A");
console.log("B");
console.log("C");

//Output it A B C
console.log("***".repeat(10));
//Async

console.log("A");
setTimeout(() => {console.log("B")  //this is a timeout function in js -- this will wait for 2000 ms as mentioned
    
}, 2000);
console.log("C"); //this will run just after console.log("A")

//Output is A C B (after 2 seconds)


//Important.. note js is not waiting for 2 seconds... it is scheduling the callback function to settimout to run later.


console.log("*****".repeat(20));
console.log("Start");

setTimeout(() => {
    console.log("First");
}, 3000);

setTimeout(() => {
    console.log("Second");
}, 1000);

console.log("End"); /// notice output

//Output for above 
//Start
//End
//Second after 1000ms
//B  after 2000ms    ---- this came from previous code on top
//First after 3000ms

console.log("*****".repeat(20));

console.log("A")

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C"); //
//outout - is still A C B ... even with 0 seconds... because JS is telling to wait for 0 seconds to B after current sync is completed.
