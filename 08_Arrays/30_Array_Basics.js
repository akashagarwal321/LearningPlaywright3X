//An array is a collection of values stored in a single variable.

const browsers = ["chromium", "firefox", "webkit"];

console.log(browsers.length);
console.log(browsers[0]);
console.log(browsers[-1]); //undefined -- we have to use at
console.log(browsers.at(-1));
console.log(browsers.at(0)); // .at works for any index

console.log(browsers[3]); // doesn't throw index out of bound error in js --- undefined



let sampleArray = [1,2,3,"AKash", "Abhishek", true, NaN, 0n, undefined, null, function test(){}, {}, []] //can collect any data types and together as well

for(i = 0;i < sampleArray.length; i++){
    console.log(sampleArray[i]);
}


//arrays can be edited

browsers[2] = "safari"; // notice that even when browsers was created with const.. it still cab be edited -- as reference to array
                        //is fixed but array itself can be edited but broweres will always point to this array only.
console.log(browsers);

