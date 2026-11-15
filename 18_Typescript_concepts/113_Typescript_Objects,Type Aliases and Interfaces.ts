const usera = {
    username:"akash",
    password:"pass123",
    age:34
}

console.log(usera.username);
//console.log(user.email) //type error - as email is not present (in JS it returns undefined)



//Now, to create multiple users with same definition
//we can create type

type user = {
    username:string;
    password:string;
    age:number;
}

const user1:user = {
    username:"akash",
    password:"pass123",
    age:34
}

const user2:user = {
    username:"abbu",
    password:"test123",
    age:30
}
// //if we miss a property:
// const user3:user = {             //Error as property missing
//     username:"abbu",
//     password:"test123"
// // }

// const user4:user={               //Error as extra property
//     username:"abbu",
//     password:"test123",
//     age:30,
//     email:"test@gmail.com"
// }



//Interfaces
interface TestUser {
    username: string;
    password: string;
    age: number;
}

const testuser: TestUser = {
    username: "akash",
    password: "test123",
    age: 34
};


//Optional properties

interface TestUser1 {
    username:string;
    password: string;
    age:number;
    email?:string
}

const useri1:TestUser1 ={
    username:"akash",
    password:"test123",
    age:34
}

const useri2:TestUser1 ={
    username:"abhi",
    password:"testing",
    age:25,
    email:"abhi"
}


//Another example

interface RegistrationData{
    username:string;
    password: string;
    mobile?:string;
    address?:string;
}


//Readonly Properties
interface TestUseri1{
    readonly id:number;
    username:string;
    password:string;
}

const userr1:TestUseri1 = {
    id:101,                         //assigned
    username:'test',
    password:'pass'
}

userr1.username="newTest"; //allowed
//userr1.id =1221; //not allowed as it is readonly


//Nested Objects and interfaces

let sampleJson = {
    "status": "success",
    "user": {
        "id": 101,
        "name": "Akash",
        "address": {
            "city": "Pune",
            "country": "India"
        }
    }
}

//we can convert above as interfaces

interface Address{
    city:string;
    country:string
}

interface User{
    id:number;
    name:string;
    address:Address;
}

interface JSONResponse{
    status:string;
    user:User

}

//Now,
const actualReponse:JSONResponse = {
    status:"success",
    user:{
        id:123,
        name:"Akash",
        address:{
            city:"Pune",
            country:"India"
        }
    }
}

console.log(actualReponse.user.name);
console.log(actualReponse.user.address.city)


//Extending Interfaces

interface BaseUser{
    username:string;
    password:string
}

interface AdminUser extends BaseUser{
    role:string
    permissions:Array<string>
}

const admin:AdminUser = {
    username:"test",
    password:"newpass",
    role:"newrole",
    permissions:["read","write","delete"]
}


//Type intersection combining types

//& - intersection --- requires all 
//| - union - we alread saw -- can be any of them

type UserT = {
    username: string;
    password: string;
};

type AdminT = {
    role: string;
    permissions: string[];
};

type AdminUserT = UserT & AdminT;

const adminT: AdminUser = {
    username: "admin",
    password: "admin123",
    role: "administrator",
    permissions: ["read", "write"]
};


type UserU = {
    username: string;
    password: string;
};

type AdminU = {
    role: string;
    permissions: string[];
};

type AdminUserU = UserU | AdminU;

const adminU1: AdminUserU = {
    username: "admin",
    password: "admin123",
    role: "administrator",
};

const adminU2: AdminUserU = {
    username: "admin",
    password: "admin123",
        role: "administrator"
};

const adminU3: AdminUserU = {
    username: "admin",
    password: "admin123",
    permissions: ["read", "write"]
};

const adminU4: AdminUserU = {
       password: "admin123",

    role: "administrator",
    permissions: ["read", "write"]
};



//Practical Example

interface TestUserM {
    readonly id:number;
    username:string;
    password:string;
    role:"admin"|"tester"|"viewer";
    email?:string;
}

const users: TestUserM[] = [
{
        id: 1,
        username: "admin",
        password: "admin123",
        role: "admin",
        email: "admin@test.com"
    },
    {
        id: 2,
        username: "tester",
        password: "test123",
        role: "tester"
    }

]

users.forEach(user => {
    console.log(user.username, user.role);
});


//Practical Exercise:

interface TestUserPractice{
   readonly id:number;
   username:string;
   password:string;
   role:"admin"|"tester"|"viewer"
   email?:string
}

const testUsersPractice:Array<TestUserPractice> = [
    {
        id:123,
        username:"teata",
        password:"arrar",
        role:"admin"
    },
    {
        id:1234,
        username:"teata",
        password:"arrar",
        role:"admin",
        email:"test@gmail.com"
    },
     {
        id:2424,
        username:"teata",
        password:"arrar",
        role:"admin",
        email:"test@gmail.com"
    }
]


interface ApiResponsePr{
    status:"success"|"error";
    message:"string";
    user:TestUserPractice
}

interface AdminUserPr extends ApiResponsePr{
    permissions:string[]
}