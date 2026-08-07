// let user = {
//     name: "Akash",
//     address: {
//         city: "Pune",
//         state: "Maharashtra"
//     }
// };

// console.log(user.address.city); //prints Pune

//but let's say input to user is

// let user = {
//     name: "Akash"
// };

// console.log(user.address); //address is undefined
// console.log(user.address.pune); //throws error now.. as address is undefined


//to handle above situation - we have optional chaining but before optional chaining --
// let user = {
//     name: "Akash"
// };

// //first way
// if(user && user.address){
//     console.log(user.address.city);
// }

// //second way

// console.log(user && user.address && user.address.city);


//Optional Chainings --- //If this value exists, continue. Otherwise stop and return undefined.
console.log("************* Optional Chaining (?.) **************");

// let user = {
//     name: "Akash"
//     // ,
//     // address: {
//     //     // city: "Pune",
//     //     state: "Maharashtra"
//     //}
// };


// console.log(user?.address?.city);

console.log("************* Optional Chaining (?.) combined with (??) **************");

let response = {
    name: "Akash"
    ,
    address: {
        // city: "Pune",
        state: "Maharashtra"
    }
};

console.log(response?.address?.city ?? "Unknown"); // instead of undefined - it will print fall back - that is "Unknown" here


let config = {
    // timeout: 20000,
    url : "xyz"
}

const timeout =
    config?.timeout ?? 30000;

console.log(timeout);

console.log("************* Practice **************");

// const user = {
//     name: "Akash"
// };

// console.log(user?.name);

// const user = {
//     name: "Akash"
// };

// console.log(user?.address?.city);

// const user = null;

// console.log(user?.name);


const user = undefined;

console.log(user?.address?.city);
