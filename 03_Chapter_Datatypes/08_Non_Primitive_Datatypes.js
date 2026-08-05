

let a = {name: "Akash",
        age: 25
        };                      //key value pairs in js or simply called objects -- ofcourse type of this is objects


let b = [12,123.42,"afafa","test",true]; // arrays - type of them is also objects

let c = function(name){                                             // functions - type of is function but conceptually this is also object only
    console.log(`Hello, How are you ?? ${name}`)
};


console.log(a);
console.log(b);
console.log(c);
c("Abhishek")

console.log("******".repeat(6))

console.log(typeof a); 
console.log(typeof b);
console.log(typeof c); // type of functions is function but conceptually it is an object