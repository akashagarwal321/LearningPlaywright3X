
//JS functions ---

import { log } from "node:console";
import { PassThrough } from "node:stream";

// function login(username,password){
//     console.log(`Logging in ${username}`)
// }


//TS ---

function login(username:string, password:string):void{
    console.log(`Loggin in as ${username}`);
}

login("akash","TestUser123");
//login("akash",12345); Error as 12345 is not string


//Return Type

function calculateTotal(price:number, quantity:number):number{
    return price*quantity;
}

function getUsername(): string {
    return "Akash";
}

function isTestPassed(): boolean {
    return true;
}

function printResult(): void {
    console.log("Test completed");
}


//Optional Parameters

function loginApplication(
    username:string,
    password:string,
    role?:string                //Optional Parameters
):void{
    console.log(username);
    console.log(password);
    if(role){
        console.log(role)
    }
}

loginApplication("admin","123afafa");
loginApplication("testUsername","pass2331","tester")

//Optional Parameters should come at last

//Default parameters

function launchBrowser(browser:string="chromium"){
    console.log(`Launching ${browser}`);
}

launchBrowser();
launchBrowser("Edge")


//function return types with unions

function getTestResult():string|number{
    return "passed";
}



//Async Functions and Promise Return Types

async function getUsernameAsync():Promise<string>{
    return "Akash"
} // always return a promise which will resolve to string


async function loginTest():Promise<void> {
    console.log("Login Completed")
    
}

//Playwright 

//just for example since Page type is not available here
type Page = {goto: (url:string)=>{}};

async function openApplication(page:Page): Promise<void> {
    await page.goto("https://google.com");
}



//Function Types:

type Calculator = (a:number,b:number)=>number;

const add:Calculator = (a,b)=>{return a+b};

const multiply:Calculator = (a,b) => {return a-b};

// const subtract: Calculator = (a, b) => {
//     return "Difference";
// };                                               //this is invalid as return type is sting


//Callback functions in TypeScript

// function processTest(testfunction){
//     testfunction();
// }                                        // normal callback in JS

function processTest(testfunction:()=>void):void{
    testfunction();
 }

 processTest(()=>{
    console.log("Test Completed")
 })


 //Another Example

 function processResult(callback:(status:string)=>void):void{
    callback("passed");
 }

 processResult((status)=>{
    console.log(status)
 })



 ///Putting it all together - Reuable Login helper


 type LoginResult = "Success" | "Failure";

 async function login123(
    username:string,
    password:string,
    rememberMe:boolean = false
 ):Promise<LoginResult>
 {
    console.log(`Logging in ${username}`);

    if (rememberMe) {
        console.log("Remember me enabled");
    }

    return "Success";
 }

 const result123 = await login123(
    "akash123","pass123",true
 )

 console.log(result123)




 //Practice Exercise

 function BrowserConfiguration(
    browserName:"chromium"|"webkit"|"firefox",
    headless:boolean = true
 ):string{
    return `Launching the browser ${browserName}, as headless: ${headless}`
 }



const test_result = async function (testID:number):Promise<"Passed"|"Failed">{
    return "Passed"
}


//
function callbackfunction(testname:string,testcallbackfunction:(status:string)=>void){
    testcallbackfunction("Completed")
}
