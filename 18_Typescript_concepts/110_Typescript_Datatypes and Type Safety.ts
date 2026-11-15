//------------------------------------------
//1. Primitive Data Types
//------------------------------------------

import { count } from "node:console";


//string, number and boolean

let username:string = "akash@test.com";
let retryCount:number = 3; //number covers integers and decimals
let isHeadless: boolean = true;

//username = 100; //error
//retryCount = "three" //error
//isHeadless = "yes" //error

//Playwright reference

const browserName:string = "chromium";
const timeout:number=40000;
const isMobile:boolean=false;

//------------------------------------------
//2.any datatype -- avoid using it
//------------------------------------------


let response:any = {
    username:"akash",
    age:34
}

console.log(response.username);
response = "Hello"; //no error
response = 100; //no error

//but

console.log(response.user.profile.name); //No error will come - so avoid any datatype



//------------------------------------------
//3.unknown - datatype
//------------------------------------------
//kind of safer alternative to any

let responseObj: unknown = {
    username:"akash",
    age:34
}

//console.log(responseObj.username); //error - as typescript don't know the datatype
//thus, unlike any, TS requires you to verify the type before using it.

let responseUnknown: unknown = {
    username: "akash",
    age: 34
};

if (typeof responseUnknown === "object" && responseUnknown !== null) {
    console.log("Response is an object");
}


// any - simply means - don't check the ts type but unkown says it's not known yet 

//4. Arrays Typescript


let browsers:string[] = [
    "chromium",
    "firefox",
    "webkit"
]

//OR

let browsers1:Array<string>=[
    "chromium",
    "firefox",
    "webkit"
]


browsers.push("webkit");
//browsers.push(100); // Error

//Automation Example:
const testUsers: string[]=[
    "admin",
    "tester",
    "viewer"
]

testUsers.forEach(user => console.log(user)); // here user for arrow needs no extra annotation
//ts automatically annotates.

//5. Array containing Objects:

const users = [
    {
        username:"akash",
        password:"admin123"
    },
    {
        username:"tester",
        password:"test123"
    }
]

console.log(users[0].username); //no error - ts infers the structure of array
//console.log(users[0].role); // Error -  email is not part of inferred object structure


//6. Tuple - When position and type matter
//tuple is an array with defined structure and type at particular positions

let user:[string,number] = ["Akash", 34];

user = ["Abhishek",25]; // allowed
//user = [35, "Sunakshi"] // not allowed

//Automation Example

function getTestStatus():[number,string]{
    return [200, "Success"]
}

const result = getTestStatus();

console.log(result[0]);
console.log(result[1]);

//7. null and undefined

let username11:string = "Akash";
//username11 = null; // Error

//to allow null explicitly
let username12: string|null = "Akash";
username12 = null; // Allowed


//Automation Example

let browser1:string|undefined;

browser1 = undefined;
browser1 = "chromium";

//
let accessToken: string|undefined;

if(accessToken !== undefined){
    console.log(accessToken.length);
}

//8. Typescript Strict Mode

// When you create a TypeScript project, you'll eventually configure tsconfig.json.

// One important setting is:
// {
//     "compilerOptions": {
//         "strict": true
//     }
// }


// This enables a collection of stricter type-checking options, including:
// - strictNullChecks
// - noImplicitAny
// - strictFunctionTypes
// - Other strictness checks




//Practice

//
let b:string = "chrome";
let timer:number = 232;
let isHeadlesss:boolean = true;

//
let browsers11:Array<string> = ["c","e","f","s"];

//Tuple
let testcase:[number,string,boolean]=[123,"Login TC",true]

//
let x:unknown = {
    status:"success",
    count:10
}

//x.status // error

if(typeof x === "object" && x !== null && "status" in x){
    console.log(x.status);
}


