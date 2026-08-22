// same syntax like Spread - "..." but use is different

//Spread

const original = [1,2,3,4,5];
const copy = [...original];

//Rest Parameters

function add(...numbers){ //here ...numbers is rest parameters ---> Rest converts mulitple things in to one variable
    // let sum = 0;
    // for (num of numbers){ //here numbers will beccome array
    //     sum+=num;
    // }
    // return sum;

    return numbers.reduce((sum,num)=>sum+=num,0) //using reduce
}

console.log(add(2,3,5));//will work
console.log(add(10,20,20,590,12,535,6421,14)); //will work

//combining REST with normal parameters

function test(browser,...browserdetails){ /// but ...param should be the last param

}

test("Chrome","Hello","test","data");

//above.. chrome will go to browser variable... and other params to browserdetails array


///
function allPassed(...statuses) {
    return statuses.every(status => status === "PASS");
}

result = allPassed("PASS", "PASS", "PASS");
console.log(result);

result = allPassed("PASS","FAIL","PASS","PASS","PASS");
console.log(result);


//old javascript has
function test1(){
    console.log(arguments);
    console.log([...arguments]);
}

test1("A","B",1,2,3,4,);


function add(...numbers) {
    return numbers.length;
}

console.log(add(10, 20, 30, 40));


function getFailedTests(...statuses) {
    console.log(statuses.filter((status)=>status === "FAIL"));
}

getFailedTests(
    "PASS",
    "FAIL",
    "PASS",
    "FAIL"
);