//A Promise is an object representing the eventual result of an asynchronous operation.

//const result = getTestData(); //simple function call.. here getTestData can take some time

//Promise has three states - pending, fulfilled and rejected
//          Promise
//             |
//           Pending
//         /         \
//  Fulfilled         Rejected                  //whether failed or success -- it will be called settled at this stage
//  (success)          (Failure)

const promise = new Promise((resolve, reject)=>{

});


//resolve means success

const promise1 = new Promise((resolve,reject)=>{
    resolve("Test Completed");
})

promise1.then((result)=>{console.log(result)});


//reject means failure

// const promise2 = new Promise((resolve,reject)=>{
//     reject("Test failed")                                        //Note that rejection throws error- which should be handled somehow
// })

// console.log(promise2)


///Real example - with Async code

// const promise3 = new Promise((resolve,reject)=>{

//     setTimeout(() => {
//         resolve("Test Data received");
//         console.log("Test data is here")
//     }, 2000);
// })


///Creating a Promise does not automatically make the code inside it asynchronous. See below

const promise4 = new Promise((resolve, reject) => {
    console.log("Inside");
    resolve("Done");
});

console.log("Outside"); // output is Inside Outside --- as no async code written

// Promise with Async Code

// const promise5 = new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//         console.log("Asyn Inside")
//         resolve("Done");
//     },2000);
// })
// console.log("Async Outside");


////
const promise6 = new Promise((resolve, reject) => {
    console.log("Promise Pending")
    setTimeout(() => {
        console.log("Promise fulfilled")
        resolve("Test data");
    }, 2000);

});

console.log("A");
console.log(promise6);
console.log("B");

promise6.then((result)=>console.log(result)); // this will print the result of promise



console.log("A");

const promise7 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("B");
    }, 2000);
});

promise7.then((result) => {
    console.log(result);
});

console.log("C");


///

const promise8 = new Promise((resolve) => {
        resolve({
        name: "Login",
        status: "PASS"
    });
});

promise8.then((result) => {
    console.log(result.name);
});

//////
console.log("***************** Separator ********************");

//Rejections

const promise9 = new Promise((resolve, reject) => {
    
     setTimeout(() => {
        reject("Test failed");
    }, 2000);
    
});

promise9.catch((result)=>console.log(result));