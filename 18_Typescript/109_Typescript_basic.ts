let browser:string|number = "chromium";
browser = "test"
browser = 124;

console.log(browser);

{
let browser1:string = "chromium";
let retries:number = 2;
let isHeadless:boolean = true;

function launchBrowser(name:string, headless:boolean):string{
    return `Launching ${name}, headless: ${headless}`;
}

console.log(launchBrowser(browser1,isHeadless));
}