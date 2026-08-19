const testResults = {
    login: "PASS",
    search: "PASS",
    checkout: "FAIL"
};

const keys = Object.keys(testResults);

for (const key of keys){
    console.log(key);
}

for (const key of Object.keys(testResults)){
    console.log(testResults[key]);
}


//cleaner

for(const [key,value] of Object.entries(testResults)){
    console.log(key, value);
}

//for in --- similar to arrays.. gives keys

for(const key in testResults){
    console.log(key);
    console.log(testResults[key]);
}



//Optional Chaining in objects
console.log("*".repeat(50));

const test = {
    name: "Login"
    // , execution:{
    //     browser:"chrome"
    //}
};

console.log(test.name);
//console.log(test.execution.browser);
console.log(test?.execution?.browser);

//Optional Chaining in arrays
console.log("*".repeat(50));

const tests = [{name:"Akash",desc:"Employee"}];
console.log(tests[0].name);
//console.log(test[1].name);// error

console.log(tests[0]?.name);
console.log(tests[1]?.name);

//Optional Chaining in methods
console.log("*".repeat(50));


const obj_data = {
    name:"AKash",
    desc: "Employee",
    getInfo:function(){
        console.log(this.name,this.desc);
    },

    setInfo: function(n,d){
        this.name = n;
        this.desc =d;
    }//,
    // testfunc:function(){
    //     console.log("This is a test function");
    // }

}


obj_data.getInfo();
obj_data.setInfo("Abhi","Not Employee");
obj_data.getInfo();

//obj_data.testfunc(); //error - as test function not found

obj_data.testfunc?.(); //will not call if ther is nothing -- -rember.. optional testfunc?.() ... not ?.testfunc()


//Null coalescing vs optional chanings
console.log("*".repeat(50));
const testobj = {
    name: "Login Test",
    execution:{
        browser:null
        // ,headless:"True"
    }
};

console.log(testobj.execution?.browser ?? "chrome");

console.log(testobj.execution?.headless); //this will take care if headless property is not available
console.log(testobj.execution?.headless ?? "False"); // this will give default as -> testobj.execution.headless is undefined
                                                    // and ?? for undefined will give the right side value
const testobjnew = {};

console.log(testobjnew?.execution?.browser ?? "chrome"); // this will in all cases

// .? protects when something is missing
// ?? gives a fallback when null or undefined