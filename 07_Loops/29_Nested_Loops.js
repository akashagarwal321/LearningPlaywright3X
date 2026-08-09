for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 2; j++) {
        console.log(`i=${i}, j=${j}`);
    }

}

console.log("Multiplication tables from 1 to 3")

for(let i = 1; i <=3 ; i++){
    
    for(let j=1;j<=10;j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }


}

console.log("Simple star pattern")


for(let i = 1; i <=5 ; i++){
    
    for(let j=1;j<=i;j++){
        process.stdout.write("*");
    }

    process.stdout.write("\n");

}