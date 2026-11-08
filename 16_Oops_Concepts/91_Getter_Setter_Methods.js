class Employee {

    #salaryAmount                               //making salary private
    constructor(name, salaryAmount) {
        this.name = name;
        this.#salaryAmount = salaryAmount;
    }

    get salary() {                           //a getter method
        return this.#salaryAmount;
    }

    set salary(value) {
        if (value > 0) {
            this.#salaryAmount = value;
        } else {
            console.log("Salary must be positive");
        }
    }
}

const emp = new Employee("Akash", 100000);

console.log(emp.salary); // 100000           //Notice.. we don't need to write Salary() - as we have used get keyword above -- so salary can be used directly - it calls getter method

emp.salary = 2000000;           // directly we can assign new value using salary - as this is a set method also --- in background it tuns set method

console.log(emp.salary); //2000000



emp.salary = -50000; // Salary must be positive

console.log(emp.salary); // 2000000