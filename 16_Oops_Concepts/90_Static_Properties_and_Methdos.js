// class Employee {
//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         console.log(`Hello, I am ${this.name}`);
//     }
// }

// const emp1 = new Employee("Akash");

// emp1.introduce();


// But what if we have a method that doesn't belong to any particular employee?

// For example:
// - Count how many employees have been created.
// - Calculate company-wide information.
// - Validate a value using a common utility.
// - Return application-wide configuration.
// We don't necessarily need to create an employee object to perform these operations.

// That's where static properties and methods come in.


//Static Method --  that belongs to class itself - not to objects


// class Employee {

//     constructor(name) {
//         this.name = name;
//     }

//     introduce() {
//         console.log(`Hello, I am ${this.name}`);
//     }

//     static companyName() {              //this is not accessible by objects 
//         console.log("OpenAI");
//     }
// }


// emp = new Employee("Akash")

// emp.introduce()         //works

// //emp.companyName()   //doesn't work

// Employee.companyName(); //works


// //Static Properties

// class Employee_New {

//     static company = "OpenAI";

//     constructor(name) {
//         this.name = name;
//     }
// }

// const empnew = new Employee_New("Akash");
// console.log(empnew.name) // Akash

// console.log(Employee_New.company); // OpenAI

// console.log(empnew.company); // undefined



//////////////////////////// More examples

class Employee {

    static employeeCount = 0;

    constructor(name) {
        this.name = name;

        Employee.employeeCount++;
    }

    static getEmployeeCount() {
        return Employee.employeeCount;
    }
}

const emp1 = new Employee("Akash");
const emp2 = new Employee("Rahul");
const emp3 = new Employee("Priya");

console.log(Employee.getEmployeeCount()); // 3


//using statics for Utility -- no need of creating objects
class MathUtility {

    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log(MathUtility.add(10, 20));      // 30
console.log(MathUtility.multiply(5, 4));   // 20



// Another example -- for automation

class TestConfig{

    static baseUrl = "https://www.google.com";
    static getTimeout(){
        return 3000;
    }

}

console.log(TestConfig.baseUrl);
console.log(TestConfig.getTimeout());