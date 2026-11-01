




function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Akash");
        }, 2000);
    });
}


// console.log(getUser()); // this returns  promise -- which is  pending - doesn't wait for promise fulfilment

// getUser().then(name=>console.log(name)) // waits for promise to fulfilled and gives the promise result


//Same thing by using await

// const name = await getUser(); // waits for the promise to fulfilled
// console.log(name);
// console.log("Continue")

//but always should be used within an sync function  - else whole code freezes will promise fulfilled


// async function main(){
//     const name = await getUser();
//     console.log(name);
// }

// main();                                             
// console.log("Continue")



//Example - real



// function getUser() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Akash");
//         }, 2000);
//     });
// }

// async function main() {
//     console.log("A");

//     const name = await getUser();

//     console.log("B", name);
//     console.log("C");
// }

// main();                         //Prints A and then waits
// console.log("D");               //D is printed just after A.. as whole js code is not freezed
//                                 // B and name is printed once promise is completed and then the C


//// Sequential vs concurrent

async function getData(id) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Data ${id}`);
        }, 1000);
    });
}

//Sequential
// async function main1() {

//    const a = await getData(1);
//    const b = await getData(2);
//    const c = await getData(3);

//    console.log(a,b,c)
// }

// main1()


//Concurrent

async function main2() {
    const pr1 = getData(1);
    const pr2 = getData(2);
    const pr3 = getData(3);

    console.log(await Promise.all([pr1,pr2,pr3]));
    
}
main2();











// async function getName(){
//     return "Akash"                                  //Conceptually, the returned Promise fulfills with "Akash"
// }


// console.log("Start")
// let name = getName();
// console.log(name)                   //returns Promise but doesn's wait
// console.log("Continue")


// console.log("Start")
// let name = await getName();
// console.log(name)                   //returns "Akash" as await waits for promise to fulfill
// console.log("Continue")



//------------------------------
// async function getNamewaiting(){
//     return new Promise(resolve=>{
//         resolve("Akash")
//     })                                 //equivalent to above
// }

// console.log("Start")
// let name = await getNamewaiting();
// console.log(name)                   //returns "Akash" as await waits for promise to fulfill
// console.log("Continue")

// async function getNamewaiting(){
//     return new Promise(resolve=>{
//         setTimeout(()=>{
//             resolve("Akash")
//         },2000)  
//     })                             
// }


// console.log("Start")
// let name = await getNamewaiting();
// console.log(name)                   //returns "Akash" after waiting for 2 seconds and then continue
// console.log("Continue")



