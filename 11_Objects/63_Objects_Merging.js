const user = {
    name: "Akash",
    city: "Pune"
};

const details = {
    age: 34,
    profession: "SDET"
};

const result ={
    ...user, ...details
};

console.log(result);

//in case of duplicate properties

const defaults = {
    browser: "Chrome",
    timeout: 30000
}

const testConfig = {
    browser: "Firefox"
}

config0 = {...defaults,...testConfig}
console.log(config0); // in case of duplicate properties - later one will override


//Order matters
const config1 = {
    ...defaults,
    ...testConfig
};

const config2 = {
    ...testConfig,
    ...defaults
};

console.log(config1); //here Firefox is later value
console.log(config2); // here chrome is later value

//
console.log("*".repeat(50))
//SDET Example

const defaultConfig = {
    browser: "Chrome",
    timeout: 30000,
    environment: "QA"
};

const loginConfig = {
    timeout: 60000
};

//Instead of modifying the defaults - we can merge
const config = {
    ...defaultConfig,
    ...loginConfig
};

