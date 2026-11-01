//object stores related data using key-value pairs

const user = {
    name:"Akash", //each item is a property
    age: 34,
    city: "Pune"
}

//can be accessed in two ways

console.log(user.name); // Dot notation - generally preffered
console.log(user["name"]); //bracket notation

//main difference is when we want to use variables
//

const parameter = "name"; //or let's say age or city -- basically looking for parameter 
console.log(user.prop); // undefined - this doesn't work as it tries to 
                        // find a key named "parameter" rather than "name"

//but
console.log(user[parameter]); //Akash -- this works - it tries to look for "name"
//this is called dynamic property access


console.log("****".repeat(10),"Separator","****".repeat(10));
//Adding and Updating properties
const user1 = {
    name: "Akash"
};

//add a new property
user1.age = 34;

console.log(user1); // prints user1 with name and age

//updating a property
user1.age = 35;
console.log(user1); // age is updated

console.log("****".repeat(10),"Separator","****".repeat(10));
//Deleting Properties

delete user1.age;
console.log(user1);

console.log("****".repeat(10),"Separator","****".repeat(10));
//Objects can store different types

const testCase ={
    name:"Login Test",
    priority: 1,
    automated: true,
    tags:["smoke","login"],
    timeout: 30000
}

console.log("****".repeat(10),"Separator","****".repeat(10));
//Objects can contain functions

const TestCase = {
    name: "Login Test",
    run: function(){                        //a function stored inside an object is called a method
        console.log("runnning test")
    }
}

console.log(TestCase.name); //property
TestCase.run(); //method

console.log("****".repeat(10),"Separator","****".repeat(10));
//this with object

const testCase1 = {
    name: "Login Test",
    status: "PASS",

    printResult: function () {
        console.log(`${this.name}: ${this.status}`);
    }
};

testCase1.printResult();


console.log("****".repeat(10),"Separator","****".repeat(10));
//Exercise


const trytest = {
    name: "Login Test",
    browser: "Chrome",
    status: "PASS"
};

// Then do the following yourself:

// Print the test name.
console.log(trytest.name);
// Print the browser using bracket notation.
console.log(trytest["browser"]);
// Change the status to "FAIL".
trytest["status"] = "FAIL"; //or trytest.status = "FAIL"
console.log(trytest);
// Add a new property: duration: 250
trytest["duration"] = 250; //or trytest.duration = 250
console.log(trytest);
// Add a method called printSummary() that prints: Login Test | Chrome | FAIL | 250ms
trytest.printSummary = function(){
    console.log(`${this.name} | ${this.browser} | ${this.status} | ${this.duration}ms`);
}
trytest.printSummary()


