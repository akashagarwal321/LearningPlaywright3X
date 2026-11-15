//1. Union types

import { time } from "node:console";

let timeout:number|string;

timeout=5000;
timeout="default";
//timeout=true;     //Error

//Playwright Example

function setTimeoutValue(timeout:number|string):void{
    console.log(timeout);
}

setTimeoutValue(5000);
setTimeoutValue("default");


//But 

//2. Type Narrowing

function setTimeoutValue1(timeout:number|string):void{
   // console.log(timeout.toUpperCase());  // Error as toUpperCase is not applicable if it is number
   //so we need type narrowing here


   if(typeof(timeout) === "string" && timeout !== null){
        console.log(timeout.toUpperCase()); // Now it works
   }
   else{
        console.log(timeout.toFixed(0));
   }
}

//3. Literal Types -- restricting values to scecific choices

let Browser:string = "chromium";

//this accepts anything but we want to restrict

let BrowserOptions:"chromium"|"webkit"|"firefox";

//BrowserOptions = "Edge"; -- Error
BrowserOptions = "webkit";

//Practical Example

type TestEnvironment = "qa" | "staging" | "production"; // This is called type alias

let environment1: TestEnvironment;

environment1 = "qa";
environment1 = "staging";

//environment1= "development"; // Error


//4. Combining union types and literal types
type BrowserName = "chromium" | "firefox" | "webkit";

function launchBrowser(browser: BrowserName) {
    console.log(`Launching ${browser}`);
}

launchBrowser("chromium");
launchBrowser("firefox");

//launchBrowser("safari"); // Error

//More practical Way ... Creating Discriminated Unions


//suppose - a successful api response
let apiSuccess = {
    status: "success",
    data: {
        username: "akash"
    }
}
// a failure looks like below
let apiFailure = {
    status: "error",
    message: "User not found"
}

//we can define the above as two different types

type Success = {
    status:"success";
    data:{
        username:string
    };
}

type Failure = {
    status:"error";
    message:string;
}

type ApiResponse = Success | Failure

function handleResponse(response:ApiResponse){
    if (response.status==="success"){
        console.log(response.data.username)
    }
    else
    {
        console.log(response.message);
    }
}


//Pracice

type BrowserName1 = "chromium" | 'webkit' | `firefox`;
type Environment1 = "qa"| "staging"|"production";


let timeoutvalue:Number|"default" = 13;
