for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue; // skips the rest of steps and move to next iteration
    }

    console.log(i);
}

console.log("Example of even numbers")

for(let i = 1;i <=20;i++){
    
    if(i%2 !== 0){
        continue;
    }
    
    console.log(i);

}

console.log("Skipping invalid tests");
const testCases = 5;

for (let i = 1; i <= testCases; i++) {

    const isValid = i !== 3;

    if (!isValid) {
        console.log(`Skipping Test ${i}`);
        continue;
    }

    console.log(`Executing Test ${i}`);
}