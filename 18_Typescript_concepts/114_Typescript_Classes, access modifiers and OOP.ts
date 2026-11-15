//JS Class

// class Employee{
//     constructor(name,salary){
//         this.name=name;
//         this.salary=salary;
//     }

//     display(){
//         console.log(this.name, this.salary)
//     }
// }   

//equivalent TS Class

class Employee{

    name:string;
    salary:number;

    constructor(name:string,salary:number){
        this.name=name;
        this.salary=salary;
    }

    display():void{
        console.log(this.name,this.salary)
    }
}

const emp = new Employee("Akash",100000);
emp.display();

//Shortcut to handle class properties via constructor
//called as Parameter Properties

class Employee1{

    constructor(public name:string,public salary:number //this automatically creates public properties
    ){

    }

}


//Access Modifiers

//Public - accessible inside class, child classes and outside class
//Protected - accessible inside class and child classes not outside
//Private - accessible only inside the class (not even child classes)

//Examples

// //Public
// class Employee {
//     public name: string;

//     constructor(name: string) {
//         this.name = name;
//     }
// }

// const emp = new Employee("Akash");

// console.log(emp.name); // Allowed


// //Private

// class Employee {
//     private salary: number;

//     constructor(salary: number) {
//         this.salary = salary;
//     }

//     getSalary(): number {
//         return this.salary;
//     }
// }

// const emp = new Employee(100000);

// console.log(emp.getSalary()); // Allowed

// console.log(emp.salary); // Error


//Protected

// class BasePage {
//     protected pageName: string;

//     constructor(pageName: string) {
//         this.pageName = pageName;
//     }
// }

// class LoginPage extends BasePage {
//     displayPage(): void {
//         console.log(this.pageName);
//     }
// }

// const login = new LoginPage("Login");

// login.displayPage(); // Allowed

// //console.log(login.pageName); // Error




//Readonly Properties in Classes

class EmployeeR{
    readonly empID:number;

    constructor(id:number){
        this.empID=id;
    }
}

const empr = new EmployeeR(201);
console.log(empr.empID);

//empr.empID=2121; Error - readonly


//Implements - Class following an interface

interface Page {
    navigate():Promise<void>;
    getTitle():Promise<string>;
}

class LoginPageIM implements Page{
    
    async navigate():Promise<void> {
        console.log("Navigating to login page");
    }
    async getTitle(): Promise<string> {
        return "";
    }
}



//Abstract Class

abstract class BasePage{
    constructor(protected pageName:string){}

    displayPageName():void{                 // method is implemented
        console.log(this.pageName)
    }
    abstract validatePage():Promise<boolean>; //this method is not implemented
}

//Child Class

class LoginPageAbs extends BasePage{
    async validatePage(): Promise<boolean> { //mandatory to implement
        return true;
    }
}


//const page = new BasePage("Base") // Cannot create object of Abstract classes

const loginPage = new LoginPageAbs("Salesforce - Login");


//Playwright Example:


//define abstract class

// import {type Page} from "@playwright/test";

// abstract class BasePage{
//     constructor(protected page:Page){}

//     async navigate(url:string):Promise<void>{
//         await this.page.goto(url);
//     }

//     abstract validatePage():Promise<boolean>;
// }

// //creating login page
// import {type Page, type Locator} from "@playwright/test";

// class LoginPage extends BasePage{
//     private username:Locator;
//     private password:Locator;
//     private loginButton:Locator;

//     constructor(page:Page){
//         super(page);

//         this.username=page.locator("#username");
//         this.password=page.locator("#password");
//         this.loginButton=page.locator('#login')
        
//     }

//     async login(username:string, password:string):Promise<void>{
//         await this.username.fill(username);
//         await this.password.fill(password);
//         await this.loginButton.click();
//     }


//     async validatePage(): Promise<boolean> {
//         return await this.loginButton.isVisible();
//     }
// }


//Practice Exercise

abstract class BasePagePrac {
    protected pageName:string
    constructor(pageName:string){
        this.pageName=pageName;
    }

    abstract validatePage():Promise<boolean>
}

class LoginPagePrac extends BasePagePrac{
    async validatePage():Promise<boolean>{
        return true;
    }

    async login(username:string,password:string):Promise<void>{
    
    }
}

class HomePagePrac extends BasePagePrac{
    validatePage(): Promise<boolean> {
        return new Promise((resolve,reject)=>{resolve(true)});
    }
}