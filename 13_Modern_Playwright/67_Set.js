//Set
//A Set is a collection that stores unique values.

const browsers = new Set([
    "Chrome",
    "Firefox",
    "Chrome",
    "Edge"
]);

console.log(browsers); //duplicate chrome was automatically removed

//please note - set is not an array
//so - we cannot do 
console.log(browsers[0]); // will give undefined as browsers is not array

browsers.add("Chrome"); //nothing will happen as Chrome was already there
browsers.add("Safari");
console.log(browsers);

//checking value exists
console.log(browsers.has("Chrome"));
console.log(browsers.has("Opera"));

//size 

console.log(browsers.size);

//converting set back to arrays
const uniqueBrowsers = [...browsers];
console.log(uniqueBrowsers);

uniqueBrowsers.sort()
console.log(uniqueBrowsers);

///

const results = [
    { name: "Login", browser: "Chrome" },
    { name: "Search", browser: "Firefox" },
    { name: "Checkout", browser: "Chrome" },
    { name: "Logout", browser: "Edge" }
];

const brow = results.map((x)=>x.browser);
console.log(brow);
const uniqueBrow = [...new Set(brow)];
console.log(uniqueBrow);


//SDET Example
const testResults = [
    { name: "Login", browser: "Chrome" },
    { name: "Search", browser: "Firefox" },
    { name: "Checkout", browser: "Chrome" },
    { name: "Logout", browser: "Edge" },
    { name: "Profile", browser: "Firefox" }
];


console.log([...new Set(testResults.map((x)=>x.browser))]);