//Literal Unions

type Browser = "chromium"|"firefox"|"webkit";

let browser:Browser = "chromium";

browser = "firefox"
//browser = "safari"; //Error

//Enums

enum TestStatus {
    Passed,
    Failed,
    Skipped
}

let statusTC:TestStatus = TestStatus.Passed;

enum TestStatusDesc{
    Passed = "PASSED",
    Failed = "FAILED",
    Skipped = "SKIPPED"
}

let statusdec:TestStatusDesc = TestStatusDesc.Skipped;

enum EnvironmentD {
    Dev = "https://dev.api.com",
    Staging = "https://staging.api.com",
    QA = "https://qa.api.com",
    Prod = "https://api.com"
}
console.log(EnvironmentD.QA);


enum BrowserF {
    Chrome = "chrome",
    Firefox = "firefox",
    Safari = "safari",
    Edge = "edge"
}
function launchBrowser(browser: BrowserF): void {
    switch (browser) {
        case BrowserF.Chrome:
            console.log("Launching Chromium (Chrome v120)");
            break;
        case BrowserF.Firefox:
            console.log("Launching Gecko (Firefox v115)");
            break;
        case BrowserF.Safari:
            console.log("Launching WebKit (Safari v17)");
            break;
        case BrowserF.Edge:
            console.log("Launching Chromium (Edge v120)");
            break;
    }
}

launchBrowser(BrowserF.Chrome);


//Type Assertions (as)

const input = document.querySelector('#username') as HTMLInputElement;
input.value = "Akash"

const userName = "Akash" as string;



/////


// keyof - get the keys of a type

interface UserK {
    id:number;
    name:string;
    email:string
}

type UserKeys = keyof UserK;

//UserKeys becomes "id"|"name"|"email"

function getUserProperty(user:UserK,key:keyof UserK){
    return user[key]
}

const user1: UserK = {
    id: 101,
    name: "Akash",
    email: "akash@example.com"
};

console.log(getUserProperty(user1, "name")); // Valid
console.log(getUserProperty(user1, "email")); // Valid

//getUserProperty(user1, "password");// Error


//type of

const browerconfigobj = {
    browser:"chromium",
    headless:true,
    timeout:222233
}

//we can infer type of from the obj

type BrowserConfig = typeof browerconfigobj

const anotherconfig:BrowserConfig={
    browser: "chromium",
    headless: false,
    timeout: 50000
}



//Indexed Access Types

interface userind  {
    id:number;
    name:string;
    email:string;
}

//let's say we want only email type

type userEmail = userind["email"]; // will set userEmail type as String

type userDEtails = userind["email" | "name"] // again type will be string as both are strings



interface TestResult {
    testId: number;
    status: "passed" | "failed";
    duration: number;
}

type Status = TestResult["status"]; // here type will be "passed" | "failed" - basically will be reused


//Optional Chaining (?.)

interface ApiResponse1{
    user?:{
        profile?:{
            email?:string
        }
    }
}

const response1:ApiResponse1={
    user:{
        profile:{
            email:"akash@test.com"
        }
    }
}

const email = response1.user?.profile?.email // will return undegined if nothing comes



//null coalescing (??)

const email2 = response1.user?.profile?.email ?? "No Email avaialble"


// const value1 = 0 || 100;  // 100
// const value2 = 0 ?? 100;  // 0


//Practical Exercise

interface TestConfigX{
    browser:"chromium"|"firefox"|"webkit";
    headless:boolean;
    timeout:number;
    baseUrl?:string
}

type BrowserName = TestConfigX["browser"]
type ConfigKeys = keyof TestConfig

const useTestConfig:TestConfigX={
    browser:"webkit",
    headless:false,
    timeout:12,
    baseUrl:"tataat"}

type anotherTestConfig = typeof useTestConfig

function getConfigValue(config:TestConfigX,key:keyof TestConfigX){
    return config[key]
}

console.log(useTestConfig?.baseUrl ?? "default url")