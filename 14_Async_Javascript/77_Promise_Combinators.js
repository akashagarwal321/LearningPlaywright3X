// 1. Promise.all() — wait for all results -- but for pass - get all results in then or in fail - get resul in catch
// 2. Promise.allSettled() — get every outcome -- in then itself all the results will come irrespective of passed or failed 
// 3. Promise.race() — the first settled Promise wins
// 4. Promise.any()

//-----------------------------------------------------------------------------
// //Promise . all ()

// const userPromise = Promise.resolve("Akash");
// const configPromise = Promise.resolve("QA");
// const productPromise = Promise.resolve("Laptop");

// Promise.all( [userPromise, configPromise, productPromise] )     // -- -takes an array of Promises or other iterables
//   .then(results => {                                            // then is executed once all promises are fulfilled
//     console.log(results);                                       // results is an array - and it preserves the input order- not promise settlement order
//   });                                                           // Output is : [ 'Akash', 'QA', 'Laptop' ]
  
// const p1 = Promise.resolve("User loaded");
// const p2 = Promise.reject("Config failed");
// const p3 = Promise.resolve("Products loaded");

// Promise.all([p1, p2, p3])
//   .then(results => console.log(results))                        // in case any of the promise failed - the .then handler will not run and it goes to catch - with failed result
//   .catch(error => console.log(error));                          //Output is : Config failed



// const pr1 = Promise.resolve("User loaded");
// const pr2 = Promise.reject("Config failed");
// const pr3 = Promise.resolve("Products loaded");

//--------------------------------------------------------------------------------------

// Promise.allSettled([pr1, pr2, pr3])
//   .then(results => console.log(results));  

// //Output:
// // [
// //   { status: 'fulfilled', value: 'User loaded' },
// //   { status: 'rejected', reason: 'Config failed' },
// //   { status: 'fulfilled', value: 'Products loaded' }
// // ]

//------------------------------------------------------------------------------------------

// const p1 = new Promise(resolve =>
//   setTimeout(() => resolve("API 1"), 2000)
// );

// const p2 = new Promise(resolve =>
//   setTimeout(() => resolve("API 2"), 1000)
// );

// Promise.race([p1, p2])
//   .then(result => console.log(result))              // output is : API 2 


//---------------------------------------------

// const p1 = Promise.resolve("A");
// const p2 = Promise.reject("B failed");

// Promise.race([p1, p2])
//   .then(result => console.log("Success:", result))
//   .catch(error => console.log("Error:", error)); // Output is : Success: A --- because first promise is settled...

// ----------------------------------------------------------

// const p1 = new Promise(resolve =>
//   setTimeout(() => resolve("API 1"), 2000)
// );

// const p2 = new Promise((resolve,reject) =>
//   setTimeout(() => reject("API 2"), 1000)
// );

// Promise.race([p1, p2])
//   .then(result => console.log("Suceess:"+result))
//   .catch(error => console.log("Error:",error))          //output is - Failure: API 2 ---- as API 2 is settled before and since it is failure.. it will go to catch


//----------------------------------------------------------------------------------------------

// const p1 = new Promise(resolve =>
//   setTimeout(() => resolve("A"), 2000)
// );

// const p2 = new Promise((resolve, reject) =>
//   setTimeout(() => reject("B failed"), 1000)
// );

// Promise.race([p1, p2])
//   .then(result => console.log("Success:", result))
//   .catch(error => console.log("Error:", error));  // Output is Error: B Failed


//-----------------------------------------------

const p1 = Promise.reject("Server 1 failed");
const p2 = Promise.resolve("Server 2 success");
const p3 = Promise.resolve("Server 3 success");

Promise.any([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.log(error)); //Output is Server 2 success
