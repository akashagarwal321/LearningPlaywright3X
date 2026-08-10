let arr = [1, 2, 3, 4, 5, 6];

console.log(Array.isArray(arr));


//Every() and Some()

const marks = [70, 80, 90, 100];    
console.log(marks.every((x) => x > 70)); //only returns true if all conditions pass

console.log(marks.some((x)=>x > 70)); // returns true if any element match



const testResults = [
    "passed",
    "passed",
    "failed",
    "passed"
];

//Verify if all test passed
console.log(testResults.every((result)=>result === "passed"));


//Verify if any test failed
console.log(testResults.some((result)=> result === "failed"));


//Important Edge Case
console.log([].some(x => x > 10)); //returns: false -- didn't find any element where condition is passed

console.log([].every(x => x > 10)); //returns: true -- strange but reason is... there was not element found to verify that condition failed

