//indexOf
//includes


let browsers = ["chrome","edge","firefox","webkit","edge","opera"];

edge_index = browsers.indexOf("edge"); //returns first index of match or -1 if nothing matches
console.log(browsers.indexOf("safari")); // rerturn -1

console.log(edge_index);
console.log(browsers); // no mutation for original array

console.log(browsers.includes("firefox")); //returns true or false