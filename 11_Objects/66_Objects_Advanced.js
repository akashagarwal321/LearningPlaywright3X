//checkin whether a property exists ?



const test = {
    name:"Login",
    status: "PASS"
}

console.log("name" in test); //true
console.log("browser" in test); //false
console.log(test?.browser); //mostly we will use this
console.log(test.browser ?? "Unknown"); //mostly

//checking whether a value is an object propery

console.log(Object.hasOwn(test,"status"));
console.log(Object.hasOwn(test,"browser"));

//Immutability in Objects

test.name = "Not Login"; //allowed
console.log(test);

Object.freeze(test);
test.name = "Checkout"; //will not work
console.log(test);


//Conditional Object Proprties

const includeRetry = true;

const config ={
    browser: "Chrome",
    ...(includeRetry && {retries: "2"}) // the way it works is... (includeRetry && {retries: "2"}) --> this give out {retries:"2"} and ...{retries:"2"} will do spread
}

console.log(config);


//quickly doing all
const user = {
    name: "Akash",
    age: 34
};


//accessing
console.log(user.name);
console.log(user["name"]);

//Dynamic ACcess
const property = "name";
console.log(user[property]);

//updating
user.age = 36;
console.log(user);

//Adding

user.city = "Pune";
console.log(user);

//Deleting
delete user.city;

//methods

const newuser = {
    name:"Abhi",
    age:40,
    address:{
        city:"Pune"
    },
    greet: function(){
        console.log(`Hello - ${this.name}`)
    }
}

newuser.greet();

//nested objects

console.log(newuser.address.city);

//Destructing

const {name,age} = newuser;
console.log(name);
console.log(age);

//Destructing with Rename

const {name:NewName, age:NewAge} = newuser;
console.log(NewName);
console.log(NewAge);

const {browser = "DefaultBrowser"} = newuser;
console.log(browser);

//keys
Object.keys(newuser);
newuser.keys;
//values
Object.values(newuser);
//Enteries
Object.entries(newuser);

//safe nestted access

console.log(newuser.address?.state);

//fallback
console.log(newuser.address?.state ?? "Unknown");

//propery Existence
console.log("name" in newuser);
console.log(Object.hasOwn(newuser,"name"));


//More practical example

const testSuite = {
    name: "Smoke Suite",

    tests: [
        {
            name: "Login",
            browser: "Chrome",
            status: "PASS"
        },
        {
            name: "Checkout",
            browser: "Firefox",
            status: "FAIL"
        }
    ]
};

//access
console.log(testSuite.tests[0].name);

//Destructure
const {name:SuiteName,tests} = testSuite;

//filter
const failed = tests.filter((x)=>x.status==="FAIL");
console.log(failed);

//map
const names = tests.map(test => test.name);
console.log(names);

//Loop

for (const [key,value] of Object.entries(tests[0])){
    console.log(key,value);
}

//safely access
testSuite.tests[0]?.browser;

//MOdified Copy

const updatedTest = {
    ...tests[0],
    status: "FAIL"
}


//
const testSuiteNew = {
    name: "Regression Suite",

    tests: [
        {
            name: "Login",
            status: "PASS",
            duration: 200
        },
        {
            name: "Search",
            status: "PASS",
            duration: 350
        },
        {
            name: "Checkout",
            status: "FAIL",
            duration: 500
        }
    ]
};

console.log(testSuiteNew.tests.reduce((sum,x)=>sum+=x.duration,0))