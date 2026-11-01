


Promise.reject(10)
.then((result)=>console.log(result))
.catch((result)=>console.log(`Failed result is: ${result}`)) // it will run catch


Promise.reject(10)
.then((result)=>result++)
.then((result) =>result++)
.then((result)=>result++)
.catch((result)=>console.log(`Failed result is: ${result}`)) // it will run catch


Promise.resolve(10)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>{
    result++;
    throw new Error(`Error with current result ${result}`)
})
.catch((result)=>console.log(`Failed result is: ${result}`)) 
// it will run run till the passed steps - result 14 and then go to catch

Promise.resolve(10)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>{
    result++;
    throw new Error(`Error with current result ${result}`)
})
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.catch((result)=>console.log(`Failed result is: ${result}`)) 
// it will run run till the passed result 14 and go to catch and skip everything later


//************************** */
//catch() doesn't necessarily end a Promise chain. 
// If it successfully returns a value, the chain can recover and continue
Promise.resolve(10)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>{
    result++;
    throw new Error(`Error with current result ${result}`)
})
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.catch((result)=>
    {
        console.log(`Failed result is: ${result}`)
        return 100
    }
)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>++result)
.then((result)=>console.log(result))

// it will run run till the passed result 14 and go to catch and again starts as catch returned 100
// will continue the then post catch again - prints 103


//another Example

// Promise.reject("Login failed")
//   .catch(error => {
//     console.log(error);
//     return "Guest";
//   })
//   .then(result => {
//     console.log(result);
//   });


