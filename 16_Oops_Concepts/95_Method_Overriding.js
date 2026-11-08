// class Employee {
//     work() {
//         console.log("Employee is working");
//     }
// }

// class Tester extends Employee {
//     work() {
//         console.log("Tester is testing the application");
//     }
// }

// class Developer extends Employee {
//     work() {
//         super.work();               /////To call the parent class method
//         console.log("Developer is writing code");
//     }
// }

// const emp = new Employee();
// const tester = new Tester();
// const dev = new Developer();

// emp.work();
// tester.work();
// dev.work();


//
class Employee {

    constructor(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }

    showDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.employeeId}`);
    }

    work() {
        console.log("Performing general employee work");
    }
}

class Tester extends Employee {

    constructor(name, employeeId, tool) {
        super(name, employeeId);
        this.tool = tool;
    }

    work() {
        super.work();

        console.log(`Testing using ${this.tool}`);
    }
}

const tester = new Tester("Akash", 101, "Playwright");

tester.showDetails();
tester.work();