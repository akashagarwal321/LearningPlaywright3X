//High order funct are ones which are atleast 1 of below:
//1. either receives function as argument (callback function is the function which is passed as argument - we already covered)
//2. return a function

function executeOperation(a,b,operation){ /// executeOperations is High Order Function (HOF)
    return operation(a,b);  
}

function add(x,y){ // created an add function - callback function
    return x+y;
}

function multiply(x,y){ // created a multiply function - callback function
    return x*y;
}

sum = executeOperation(5,10,add);
console.log(sum);

product = executeOperation(20,30,multiply);
console.log(product);


console.log("Another Example ******");


function processTest(testName, action) {
    console.log("Running:", testName);

    const result = action();

    console.log("Result:", result);
}

processTest("Test1",()=>"Pass");
processTest("Test2",()=>"FAIL");
