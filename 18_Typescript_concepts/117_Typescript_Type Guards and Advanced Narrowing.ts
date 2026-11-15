// //Imagine re

// type ApiResult = {
//     status: "success";
//     data: string;
// } | {
//     status: "error";
//     message: string;
// };

// const response: ApiResult = {
//     status: "success",
//     data: "User Created"
// }

// //now data is available only in success case... not failure case
// //we need narrowing

// //using in as a typeguard - ex in above case


// function handleReponse(response: ApiResult) {
//     if ("data" in response) {
//         console.log(response.data)
//     }
//     else {
//         console.log(response.message)
//     }
// }


// //Using typeof as a guard

// function printValue(value: string | number) {
//     if (typeof value === "string") {
//         console.log(value.toUpperCase())
//     }
//     else {
//         console.log(value.toFixed(2))
//     }
// }



// //Using instanceof

// function handleError(error: Error | string) {
//     if (error instanceof Error) {
//         console.log(error.message)
//     }
//     else {
//         console.log(error.toUpperCase())
//     }
// }


// //Custom typeguards
// //when typeof, in and instanceof are not enough

// //we can create our own using is

// interface User {
//     id: number;
//     name: string;
//     email: string;
// }

// const apiData: unknown = {
//     id: 101,
//     name: "Akash",
//     email: "akash@example.com"
// };


// function isUser(value: unknown): value is User {

//     if (typeof value != "object" || value === null) {
//         return false;
//     }

//     return (
//         "id" in value &&
//         typeof value.id === "number" &&
//         "name" in value &&
//         typeof value.name === "string" &&
//         "email" in value &&
//         typeof value.email === "string"

//     )
// }

// if (isUser(apiData)) {
//     console.log(apiData.name);
//     console.log(apiData.email);
// } else {
//     console.log("Invalid user response");
// }



// //Dicriminated unions - connect with API testing

// type LoginResult = {
//     status: "success";
//     token: string;
// }
//     |
// {
//     status: "failure";
//     errorMessage: string;
// }

// function processLogin(result: LoginResult) {

//     switch (result.status) {
//         case "success":
//             console.log("Token", result.token)
//             break;
//         case "failure":
//             console.log("Error", result.errorMessage)
//             break;
//     }
// }




// // //Quick comparison
// // Type guard	When to use
// // typeof	Primitive types
// // in	Check object properties
// // instanceof	Class instances and built-in objects
// // Custom is	Validate your own expected structure
// // Discriminated union	Different object variants using a common property



// //Practice

// function getValuePrac(value:string|number|boolean){
//     switch(typeof value){
//         case "string":
//             return value.toUpperCase()
//         case "number":
//             return value*2
//         case "boolean":
//             if(value){
//                 console.log("Enabled")
//             }
//             else{
//                 console.log("Disabled")
//             }
//     }
// }


// interface Tester{
//     name:string;
//     tool:string;
// }

// interface Developer{
//     name:string;
//     language:string;
// }

// function getSkill(value:Tester|Developer){
//     if("tool" in value){
//         console.log(`Tester, Name: ${value.name}, and Tool: ${value.tool}`)
//     }
//     else{
//         console.log(`Developer, Name: ${value.name}, and Tool: ${value.language}`)
//     }
// }


// interface TestResult{
//     testId:number;
//     testName:string;
//     passed:boolean;
// }



// function isTestResult(value:unknown):value is TestResult{

//     if(typeof value !== "object" || value === null){
//         return false;
//     }

//     return (
//         "testId" in value && typeof value.testId === "number"
//         &&
//         "testName" in value && typeof value.testName ==="string"
//         &&
//         "passed" in value && typeof value.passed == "boolean"
    
//     )
// }