class Employee {
    constructor(name, employeeId){
        this.name= name;
        this.employeeId = employeeId;

    }

    showDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`EmployeeId: ${this.employeeId}`);
    }

    work(){
                console.log("Employee is working");
    }
}


//Child class Tester derived from Employee

class Tester extends Employee{
    performTesting(){
        console.log(`${this.name} is testing the application`);
    }
}

const tester1 = new Tester("Akash","123456");

tester1.showDetails();
tester1.work();
tester1.performTesting();



//Another class Developer
class Developer extends Employee{

    constructor(name,employeeId,language){
        super(name,employeeId);
        this.language=language;
    }


    writeCode(){
        console.log(`${this.name} writes code in language: ${this.language}`)
    }
}

const dev1 = new Developer("Akash1",131331,"JS/TS");

dev1.showDetails();
dev1.work();
dev1.writeCode();

// Private fields/methods of parent class cannot be accessed by even child classes