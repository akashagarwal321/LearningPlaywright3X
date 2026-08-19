const testCase = {
    name: "Login Test",
    browser: "Chrome",
    status: "PASS"
};

// const name = testCase.name;
// const browser = testCase.browser;
// const status = testCase.status;

// console.log(name,browser,status);

//another way
//Destructuring

const {name,browser,status} = testCase; //please note - destructuring needs the names to match with property names
//const {a,b,c} = testCase; //in this case.. a,b and c will undefined - Destructuring matches property names.. not positions
console.log(name,browser,status) // valid

//if we need to add into new variables

const {name:a, browser:b, status:c} = testCase;

console.log(a,b,c);

const{testName}= testCase;
console.log(testName);
const{name:testName1} = testCase; // aliasing or giving new name for variable
console.log(testName1); // 


///
const testCase1 = {name1: "Login Test"};

const {name1,status1="Not Run"} = testCase1;
console.log(name1,status1); //status1 will take default as it was not found in object

///

const {name1:newName, status1:newStatus} = testCase1;
console.log(newName, newStatus); // newStatus is undefined as was not found and no default

///Nested Destructuring

const testCase2 = {
    name2: "Login",
    execution2: {
        browser2: "Chrome",
        status2: "PASS"
    }
};

const {name2, execution2: {browser2,status2} } = testCase2;
console.log(name2,browser2,status2);



//Destructing Function Parameters;
testCase_3 = {
    name: "Akash TEst",
    status: "Will Run"
}


function printTest(testCase){
    console.log(testCase.name);
    console.log(testCase.status);
}

printTest(testCase_3); //one way

printTest({name:"Ajash new",status:"will run never"});

//but we can create
function printTestNew({name,status}){

    console.log(name);
    console.log(status);
}

//then

printTestNew(testCase_3);
printTestNew({name:"Hello TEst",status:"This will run"});



//
const test_json = {
    "name": "Akash",
    "age": "34",
    3 : "test"
}

console.log(test_json)
//console.log(test_json.3) // cannot work
console.log(test_json[3])
console.log(test_json["3"]);


