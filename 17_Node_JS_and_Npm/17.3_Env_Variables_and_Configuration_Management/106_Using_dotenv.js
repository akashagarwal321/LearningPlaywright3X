import dotenv from "dotenv";

// dotenv.config();

// console.log(process.env.TEST_ENV);
// console.log(process.env.BASE_URL);
// console.log(process.env.USERNAME);
// console.log(process.env.PASSWORD);


//we can specific config file as well
//read any variable like environment from CLI - using process.env.TEST_ENV - to decide - example staging

const environment = "staging";

dotenv.config({path: `.env.${environment}`});


console.log(process.env.TEST_ENV);
console.log(process.env.BASE_URL);
console.log(process.env.USERNAME);
console.log(process.env.PASSWORD);





