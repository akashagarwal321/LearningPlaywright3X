//1. Inheritance

// class Employee {
//     constructor(public name: string) {}

//     work(): void {
//         console.log("Employee is working");
//     }
// }

// class Tester extends Employee {

//     constructor(name: string, public tool: string) {
//         super(name);
//     }

//     test(): void {
//         console.log(`${this.name} is testing using ${this.tool}`);
//     }
// }

// const tester = new Tester("Akash", "Playwright");

// tester.work();
// tester.test();

//ouput
// Employee is working
// Akash is testing using Playwright


//2. Method Overriding
// class Employee {
//     work(): void {
//         console.log("Employee is working");
//     }
// }

// class Tester extends Employee {
//     override work(): void {
//         console.log("Tester is executing automation scripts");
//     }
// }

// //usage
// const tester = new Tester();

// tester.work();

//Output:
// Tester is executing automation scripts

//For this protection, enable the noImplicitOverride compiler option.


//Polymorphism

// class Browser {
//     launch(): void {
//         console.log("Launching browser");
//     }
// }

// class Chromium extends Browser {
//     override launch(): void {
//         console.log("Launching Chromium");
//     }
// }

// class Firefox extends Browser {
//     override launch(): void {
//         console.log("Launching Firefox");
//     }
// }


//usage:
// function startBrowser(browser: Browser): void {
//     browser.launch();
// }

// startBrowser(new Chromium());
// startBrowser(new Firefox());

// //ouput
// Launching Chromium
// Launching Firefox


//4. Composition - has a relationship

//example below - header is independent.. and login no need to extend from it..
//but can use it 


// class Header {
//     search(): void {
//         console.log("Searching from header");
//     }
// }

// class LoginPage {
//     constructor(private header: Header) {}

//     searchFromHeader(): void {
//         this.header.search();
//     }
// }

// const header = new Header();

// const loginPage = new LoginPage(header);

// loginPage.searchFromHeader();


//5. Interface-based polymorphism

// interface PageValidator {
//     validatePage(): Promise<boolean>;
// }

// class LoginPage implements PageValidator {

//     async validatePage(): Promise<boolean> {
//         return true;
//     }
// }

// class HomePage implements PageValidator {

//     async validatePage(): Promise<boolean> {
//         return false;
//     }
// }

//usage

// async function validate(page: PageValidator): Promise<void> {
//     const result = await page.validatePage();

//     console.log(result);
// }

// await validate(new LoginPage());
// await validate(new HomePage());



// 7. A practical architecture example
// Here's an illustrative structure:
// pages/
//     BasePage.ts
//     LoginPage.ts
//     HomePage.ts

// components/
//     Header.ts
//     Navigation.ts

// interfaces/
//     PageValidator.ts


// The design:
// - BasePage provides common page functionality.
// - LoginPage and HomePage extend BasePage where appropriate.
// - Header and Navigation are composed into pages.
// - PageValidator defines a shared contract.
// This is the type of architecture we'll implement later.




//Practice

interface PageValidatorPrac{
    validatePage():Promise<boolean>;
}

abstract class BasePagePrac implements PageValidatorPrac{
    constructor(protected pageName:string){}

    abstract validatePage(): Promise<boolean>;
}

class LoginPagePrac extends BasePagePrac{
    async validatePage(): Promise<boolean> {
        return true;
    }
}

class Header{
    search():void{
        console.log("search from header")
    }
}

class HomePage{
    constructor(private header:Header){
        
    }

    search_header():void{
        this.header.search();
    }
}