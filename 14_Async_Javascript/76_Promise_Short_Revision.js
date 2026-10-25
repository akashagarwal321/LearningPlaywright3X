// function getdata(num) {

//     return new Promise((resolve, reject) => {
//         console.log(`The double of ${num} is being calculated`);
//         if (typeof(num) !== "number" || !Number.isFinite(num) ){
//             reject(`${num} is not an number`)
//         }
                  
//         setTimeout(() => {
//             console.log(`The double for ${num} is here now and that is ${2 * num}`);
//             resolve(num * 2);
//         }, 3000);
//     }

//     )
// }

// getdata(5).then((res) => {
//     console.log(res);
//     return getdata(res);
// }
// ).then((res)=>{
//     console.log(res)
//     return getdata(res)
// }).then((res)=>{
// console.log(res);
// return getdata("NA")}
// ).catch(error => console.log("Error:", error));



//Basics - again
// console.log("Start");

// setTimeout(() => {
//     console.log("Customer data received");
// }, 1000);

// console.log("Continue testing");

// // Output is:
// // Start
// // Continue testing              ------- JS doesn't wait and move forward 
// // Customer data received        ---- once the settimeout is finished - it gives that result

//Promises help us manage these asynchronous operations and their results.

//Mental model: A Promise is an object representing the eventual success or failure of an operation.

//Promise have three states --- Pending, Fulfilled or Rejected --- basically two stages - Pending and then Promise either fulfilled or Rejected

// const promise = new Promise((resolve,reject)=>{

//     const marks = 30;

//     if (marks >= 40) {
//         resolve("Passed");
//     }
//     else {
//         reject("Failed")
//         //reject(new Error("Failed"));
//         //throw new Error("Failed")

//     }
// });

// promise
// .then(res=>console.log(res))
// .catch(err=>console.log(err))


//Promise chaining with error handling (when error happens inside a then)

// Promise.resolve(10)
// .then(result => {
//     console.log(result);
//     return result+=20;
// }
// )
// .then(result => {
//     console.log(result);
//     return result+=35;
// }
// )
// .then(result =>{
//     console.log(result)
//     throw new Error("Result is beyong 65 now...")
// }
// )
// .catch(()=>{
//     console.log("Inside catch ... let's make the result 10 again")
//     return 10;
// })
// .then(result => {
//     console.log(result);
//     return result+=20;
// }
// )
// .then(result => {
//     console.log(result);
//     return result+=35;
// }
// )
// .finally(result => {
//     console.log(`The final result is ${result}. This runs anyways in the last`)
// })



// Promise.resolve(10)
//     .then(result => {
//         console.log("A:", result);
//         return result + 5;
//     })
//     .then(result => {
//         console.log("B:", result);
//         throw new Error("Test failed");
//     })
//     .then(result => {
//         console.log("C:", result);
//     })
//     .catch(error => {
//         console.log("D:", error.message);
//         return 100;
//     })
//     .then(result => {
//         console.log("E:", result);
//     })
//     .finally(() => {
//         console.log("F: Cleanup");
//     });




    ///

function openBrowser(){
    return new Promise(function(resolve){
        // time 15, 10
        resolve("Browser has been opened!");
    })
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}


openBrowser()
    .then(msg=>{
        console.log("Step 1", msg);
        return goToLogin();
    }).then(msg=> {
        console.log("Step 2 :", msg);
        return enterCredentials();
    }).then(msg=>{
        console.log("Step 3 :", msg);
        return clickLogin();
    }).then(msg=> {
        console.log("Step 4 :", msg);
    }).catch(msg=>{
        console.log("Error:", error);
    }).finally(()=>{
        console.log("Done execution!");
    });