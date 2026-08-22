const result = 10 / 0;
console.log(result); // gives infinity ... no error

const user = null;
//console.log(user.name); // throws error

try{
    console.log("This is trying")
    console.log(user.name);
} catch (error){
    console.log("this is catch or error block");
    console.log(error.name);
    console.log(error.message);
} finally{
    console.log("this will anyways run");
}

console.log("Code continues...")

// in SDET
try {
    // execute test
} catch (error) {
    // record failure
} finally {
    // cleanup
}

//throw

try {
    const age = 15;
    if (age < 18){
        throw new Error("This is a custom Error for age");
    }

} catch (error) {
    console.log(error.message);
    
} finally {
    console.log("in  finall  block")

}

/////

const testResult = {
    name: "Login Test",
    status: "FAIL"
};

try{
    if (testResult.status !== "Login Test"){
        throw new Error("Login Test failed")
    }
}
catch (error){
    console.log(error.message);
}
finally{
    console.log("Test execution completed");
}
