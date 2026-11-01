
//simple copy doesn't work
const original = {name:"Akash", age:34}
const copy = original;

copy.age = 35;
console.log(copy); //updated in copy
console.log(original); //updated in original

//to copy - we can use spread

const another_copy = {...original};

console.log(original);
console.log(another_copy);

another_copy.age = 36;
console.log(original); // still 35
console.log(another_copy); //updated to 36


//but Object spread is a shallow copy -- in nested - behaves different like arrays

const user = {
    name:"Akash",
    address:{
        city: "Pune"
    }
};

const copy_user = {...user};

copy_user.name = "Sunakshi";
console.log(copy_user.name); //new name
console.log(user.name); //not changed

//but -- nested objects are still shared
copy_user.address.city = "Mumbai";

console.log(copy_user.address.city);
console.log(user.address.city); //changed even in original


//deep Copying

const deep_copy = structuredClone(user);

console.log(deep_copy);
deep_copy.address.city = "Jaipur";

console.log(deep_copy.address.city);
console.log(user.address.city);   // Still Mumbai


//Adding new properties while copying with spread

const new_user = {...user, description:"This is new Description"};

console.log(new_user);
