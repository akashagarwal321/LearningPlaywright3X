interface User {
    id:number;
    name:string;
    email:string;
    role:string;
}


//if we need optional properties or only want to update few properties

//Partial<T> - making all properties optional

function updateUser(userId:number, updates:Partial<User>){
    console.log(userId,updates);
}

updateUser(101,{name:"Rahul"})
updateUser(101, {email:"rahul@gmail.com"})

updateUser(112, {name:"Rahul", email:"rahul@gmail"})


//Required<T>

interface User1{
    id?:number;
    name?:string;
    email?:string;
}

type CompleteUser = Required<User1> //will need all properties even if they were declared as optional



//Pick<T,K> - select specific properties

interface UserComplete {
    id: number;
    name: string;
    email: string;
    role: string;
    password: string;

}

type UserSummary = Pick<UserComplete, "name" |"email">; // Pick<T,K>

//the above creates a type equivalent to

// type UserSummarytype = {
//     name:string;
//     email:string;
// }


const user13: UserSummary = {
    name: "Rahul",
    email: "rahul@gmail.com"
};


//Omit<T,K> - Exclude Specific properties

type PublicUser = Omit<UserComplete,"password" | "role">

//give type as {
// id:number;
//name:string;
//email:string;
//role:string;
//}

const userpublic:PublicUser = {
    id:12,
    name:"testakash",
    email:"test@gmail.com"
                  // role and password is not present
}


//Readonly<T> -- prevent property reassignment

interface TestConfig{
    browser:string;
    baseURL:string;
}

type ReadonlyConfig = Readonly<TestConfig>;

const config:ReadonlyConfig = {
    browser:"Chromium",
    baseURL:"https://google.com"
}

//config.browser="Edge"; --- Not allowed


//Record<K,T> -- create objects with defined keys and value types
type Environment = "qa"|"staging"|"production";

const environmentUrls:Record<Environment,string> ={
    qa:"afa",
    staging:"faf",
    production:"faafa"
} // this will only allow properties qa, staging and production.. and value type string



// //Quick reference
// Utility	Purpose
// Partial<T>	Make all properties optional
// Required<T>	Make all properties mandatory
// Pick<T, K>	Select properties
// Omit<T, K>	Exclude properties
// Readonly<T>	Prevent property reassignment
// Record<K, T>	Define an object with specific keys and value type



//Practice

interface TestUserPrac{
    id:number;
    name:string;
    email:string;
    password:string;
    role:string
}

//1 - all optional
const NewTestUser:Partial<TestUserPrac> ={
    id:1212 //even this is optional
}

//2 - excludes password
const SafeTestUser:Omit<TestUserPrac,"password"> ={
    id:12,
    name:"",
    email:"",
   // password:"", -- password is omitted
    role:"assa"
}

//3 - only contains email and password
const LoginUser:Pick<TestUserPrac,"email"|"password"> ={
    email:"",
    password:""
}

type browserType = "chrome"|"firefox"|"edge"

const browserConfigs:Record<browserType,string>={
    "chrome":"",
    "edge":"",
    "firefox":""
}