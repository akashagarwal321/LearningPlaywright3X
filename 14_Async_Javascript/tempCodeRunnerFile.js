const promise9 = new Promise((resolve, reject) => {
    
     setTimeout(() => {
        reject("Test failed");
    }, 2000);
    
});

promise9.catch((result)=>console.log(result));