// class Tester {
//     work() {
//         console.log("Testing the application");
//     }
// }

// class Developer {
//     work() {
//         console.log("Writing application code");
//     }
// }

// class Manager {
//     work() {
//         console.log("Managing the team");
//     }
// }



// const employees = [
//     new Tester(),
//     new Developer(),
//     new Manager()
// ];

// for (const employee of employees) {
//     employee.work();
// }

// Polymorphism through inheritance and overriding


class Employee {
    work() {
        console.log("General employee work");
    }
}

class Tester extends Employee {
    work() {
        console.log("Testing application");
    }
}

class Developer extends Employee {
    work() {
        console.log("Writing code");
    }
}


const employees = [
    new Tester(),
    new Developer(),
    new Employee()
];

employees.forEach(emp => emp.work());



//Another Example

class HTMLReport {
    generate() {
        console.log("Generating HTML report");
    }
}

class PDFReport {
    generate() {
        console.log("Generating PDF report");
    }
}

class ExcelReport {
    generate() {
        console.log("Generating Excel report");
    }
}

function generateReport(report) {
    report.generate();
}

generateReport(new HTMLReport());
generateReport(new PDFReport());
generateReport(new ExcelReport());
