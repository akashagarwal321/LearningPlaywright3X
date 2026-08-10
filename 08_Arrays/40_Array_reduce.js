// The simplest mental model:

// reduce() takes many array elements and reduces them into one final result.
//reduce ((accumulator,element) => return { },initial value)

const numbers = [10, 20, 30];

const total = numbers.reduce((sum, number) => sum + number, 0); //Sum=0 initially and then getting added

console.log(total);

// 

//multiplication

const numbers1 = [10,20,30];

const multiplication = numbers1.reduce((product,num)=>product*num,1);
console.log(multiplication);

const words = ['Hello', 'World'];

const result = words.reduce((text,word)=>text+=" "+word,"");
console.log(result)

//Useful example

const testResults = [
    { name: "Login", duration: 2 },
    { name: "Search", duration: 3 },
    { name: "Checkout", duration: 5 }
];

const totalDuration = testResults.reduce((total,result)=>total+=result.duration,0);
console.log(totalDuration);



//Extra knowledge

//without inital value also it can work... it takes first value as initial value
const numbers2 = [10, 20, 30];
const result2 = numbers2.reduce((sum, number) => sum + number);
console.log(result2);

//count passed and failed
const results = [
    "passed",
    "failed",
    "passed",
    "passed",
    "failed"
];

const report = results.reduce((count,res)=>{
    res === "passed" ? count.passed++ : count.failed++;
    return count;
},{"passed":0,"failed":0})
console.log(report);