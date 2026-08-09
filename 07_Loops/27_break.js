for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break; //instantly break out of loop
    }

    console.log(i);
}

//find the target
const target = 7;

for (let i = 1; i <= 10; i++) {

    if (i === target) {
        console.log("Found");
        break;
    }
}


//find first even number
for (let i = 1; i <= 20; i++) {

    if (i % 2 === 0) {
        console.log(`First even number: ${i}`);
        break;
    }
}



let attempt = 1;

while (attempt <= 5) {

    console.log(`Attempt ${attempt} - Failed`);

    const success = attempt === 3;

    if (success) {
        console.log("Test Passed");
        break;
    }

    attempt++;
}