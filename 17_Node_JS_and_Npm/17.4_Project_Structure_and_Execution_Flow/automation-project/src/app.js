import { config } from "./config/environment.js";
import { readUsers } from "./utils/filehelper.js";

console.log("Application started");

console.log("Environment:", config.environment);

const users = readUsers();

users.forEach(user => {
    console.log(user.username, user.role);
});


//npm start
//TEST_ENV=staging npm start