//Generics is useful for reusable utilities

//Consider a situation as below:

function getString(value:string):string{
    return value;
}

function getNumber(value:number):number{
    return value;
}

function getFlag(value:boolean):boolean{
    return value;
}

//now for above - we have written three functions for three types

function getValue<T>(value:T):T{
    return value;
}

//now

const firstName = getValue<string>("Akash");

const age = getValue<number>(35);

const active = getValue<boolean>(true);

//Do we need to always define <t> ? no.. ts can infere

getValue("Abhishek");
getValue(33);
getValue(true);


//Usefullness for Automation --- let's say API Responses

const res1 = {
    username: "akash",
    role: "admin"
}

const res2 = {
    productId: 101,
    price: 500
}

//we want a common handler

interface ApiResponse<X>{       //we can write anything not necessary <T>
    status:number;
    message:string;
    data:X
}

//let's now define our data structures

interface User {
    username: string;
    role: string;
}

interface Product {
    productId: number;
    price: number;
}

//For user

const userResponse:ApiResponse<User> = {
    status:200,
    message:"success",
    data:{
        username:"test",
        role:"lead"
    }
}

//for Product

const productResponse:ApiResponse<Product> = {
    status:200,
    message:"success",
    data:{
        productId:3232,
        price:2444
    }
}


//Generic Functions

function extractData<T>(response:ApiResponse<T>):T{
    return response.data;
}

//automatically it infers the type as user
const user = extractData(userResponse);
// //or
// const user = extractData<User>(userResponse); //explicitly if needed to tell

console.log(user.username);

//automatically below will understand type as Product
const product = extractData(productResponse);

console.log(product.price);



//Generic constraints

// function getId<T>(value:T):T{
//     return value.id;
// }    //Error as T could be string or anything and might not have .id


//Solution
function getId<T extends {id:number}>(value:T):number {
    return value.id;
}   //now T must have an id property with type number

//usage
const userGeneric = {
    id: 101,
    username: "akash"
};

console.log(getId(userGeneric)); // works

//but

//Error console.log(getId("Akash"));// Error


//Generic classes

class DataStore<T>{
    constructor(private data:T){}
    getData():T{
        return this.data;
    }
}

//Now
const userStore = new DataStore<User>({
    username: "akash",
    role: "admin"
});

const user12 = userStore.getData();

console.log(user12.username);

//OR

const numberStore = new DataStore<number>(100);

console.log(numberStore.getData());

//We can have multiple generic types
function testfunction<T,U,V,W>(a:T,b:U,C:V):W{
    return "" as W;
}


//Practice

const identity = function<T>(value:T):T{
    return value
}

const identityA = <T>(value:T):T=>{
    return value
}

//
interface ApiResponsePrac<T>{
    status:number,
    data:T
}

interface UserPrac{
    username:string
}
interface ProductPrac{
    productid:number
}

const userPrac:ApiResponsePrac<UserPrac> ={
    status:200,
    data:{username:"Akash"}
}

const productPrac:ApiResponsePrac<ProductPrac> ={
    status:200,
    data:{productid:232}
}


//
function getIdPrac<T extends {id:number}>(value:T):number{
    return value.id;
}