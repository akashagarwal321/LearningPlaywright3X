//No need of importing Process

//Current working directory
console.log(process.cwd());

//Environment Variables
//process.env.NODE_ENV = "Test";

console.log(process.env.NODE_ENV);

//runnning NODE_ENV=development node file.js


//Automation Example

const environment = process.env.TEST_ENV || "qa";

console.log(`Running tests in ${environment}`);

//run as : TEST_ENV=staging node app.js


//Command Line Arguments

console.log(process.argv[2]);
//if we run node 17_Node_JS_Modules/102_process_Module.js staging
//Output will be staging