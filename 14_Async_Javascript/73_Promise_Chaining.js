//Promise Chaining → .then().then().then()

//.then() -- actually returns a promise -- whatever return statement we write in .then... that becomes result for next .then in the chain


//Example

const promise = new Promise((resolve,reject)=>{
    resolve(2)

})

promise.then((result)=>{
    console.log(result);
})

promise.then((result)=>{
    return result++
}).then((result)=>{
    return result++
}).then((result)=>{
    return result+20
}).then((result)=>{
    return result*2
}).then((result)=>{
    console.log(result);
});



Promise.resolve(5)
    .then((result) => {
        return result + 10;
    })
    .then((result) => result*2 ) // arrow functions can be used without return keyword
    .then((result) => {
        console.log(result);
    });



Promise.resolve(5)
.then((result) => {
    result + 10;
})
.then((result) => {
    console.log(result);
});


Promise.resolve(10)
.then((x)=>x+5)
.then((x)=>x*3)
.then((x)=>x-10)
.then((x)=>console.log(x))