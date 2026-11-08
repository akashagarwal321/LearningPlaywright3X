class Employee{

    static employeeCount = 0;
    #salary;

    constructor(name,id,salary){
        this.name=name
        this.id=id
        this.salary=salary;
        Employee.employeeCount+=1;
    }

    get salary(){
        return this.#salary;
    }

    set salary(amount){

        if (amount > 0){
            this.#salary = amount;
        }
        else{
            throw new Error("Salary must be greater than zero");
        }
    }

    work(){
        console.log("Employee is working")
    }
}

class Tester extends Employee{

    constructor(name,id,salary,tool){
        super(name,id,salary)
        this.tool=tool
    }

    work(){
        console.log(`Testing using ${this.tool}`)
    }

}


class Developer extends Employee{

    constructor(name,id,salary,language){
        super(name,id,salary)
        this.language=language
    }

    work(){
        console.log(`Writing ${this.language} code`)
    }

}


class Department{
    employees=[];
    constructor(deptName){
        this.deptName=deptName;
    }

    addEmployee(employee) {
    if (typeof employee.work !== "function") {
        throw new Error("Invalid employee: work() method is required");
    }

    this.employees.push(employee);
    } 

    showWork(){
        this.employees.forEach(emp => {
            emp.work()
        });
    }
}



// const emp1 = new Employee("Akash", 101, 100000);

// console.log(emp1.salary); // 100000


// const emp2 = new Employee("Rahul", 102, -50000);

// console.log(emp2.salary); 
// // Salary must be greater than zero
// // undefined

// const tester = new Tester(
//     "Akash", 101, 100000, "Playwright"
// );

// const developer = new Developer(
//     "Rahul", 102, 120000, "JavaScript"
// );

// // tester.work();
// // developer.work();

// const employees = [tester, developer];

// employees.forEach(employee => {
//     employee.work();
// });

// console.log(Employee.employeeCount);


const tester = new Tester(
    "Akash", 101, 100000, "Playwright"
);

const developer = new Developer(
    "Rahul", 102, 120000, "JavaScript"
);

const department = new Department("Quality Engineering");

department.addEmployee(tester);
department.addEmployee(developer);

department.showWork();

console.log(Employee.employeeCount);

