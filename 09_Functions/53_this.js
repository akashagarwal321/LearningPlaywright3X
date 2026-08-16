
const user = {
    name: "Akash",

    sayHello: function (){                  // we can even create functions inside objects
        
        //console.log(name);  // name is not defined error - because we didn;t define it... and it cannot read the above name as it is
                            //a different value before , not a decalaration

        console.log(this.name); // this this refers to user (the current object)... so... this.name
        console.log(user.name); // this also works.. but we tightly coupled with variable "user"
    }
}


user.sayHello();

console.log("*********** Separator ****************");

const test1 = {
    testName: "Login Test",

    run: function () {
        console.log(this.testName);
    }
};

const test2 = {
    testName: "Checkout Test",
    run: test1.run
};

test1.run();
test2.run(); // this internally calls the test1.run function... but the 'this' inside that will not call Login test... but Checkout test only
// this is not using context from there it is created... but from where it is called

console.log("*********** Separator ****************");
console.log("*********** Separator ****************");

console.log("*********** Arrow func don't have their own this ****************");

const user1 = {
    name: "Akash",

    normalFunction: function () {
        console.log(this.name);
    },

    arrowFunction: () => {
        console.log(this.name);
    }
};

user1.normalFunction();
user1.arrowFunction(); // this will give undefined - because arrow func don't get it's own this.. but uses this from surrounding scope

//Example of this being used in arrow
console.log('Example of arrow with this - using this from surrounding');

const test = {
    name: "Login Test",

    run: function () {

        const callback = () => {
            console.log(this.name);
        };

        callback();
    }
};

test.run(); // here this from run function is will be used by arrow function as it doesn't create it's own this


const test_new = {
    name: "Login Test",

    run: function () {
        function callback() {
            console.log(this.name); // will give undefined as callback this time is normal function.. and normal function has it's own this
                                    // and here... we don't have name variable within the call scope of this normal func
        }

        callback();
    }
};

test_new.run() ; // undefined

//
// const person = {
//     name: "Akash",

//     greet: function () {
//         console.log(this.name);
//     }
// };

// person.greet(); // prints Akash

// const person = {
//     name: "Akash",

//     greet: () => {
//         console.log(this.name);
//     }
// };

// person.greet(); //Prints undefined

const person = {
    name: "Akash",

    greet: function () {
        const sayName = () => {
            console.log(this.name);
        };

        sayName();
    }
};

person.greet(); //prints "Akash"