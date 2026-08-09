let sep = (value=null)=> value ? console.log(`******* ${value} ********`) : console.log("******* Sep ********");

sep();
sep("Simple Ifs");

let name = "akash";

if (name == "akash"){
    console.log("Hello Sir");
}

sep("IF Else");

let a = 10;

if (a=10){
    console.log(true)
}
else{
    console.log(false);
}


sep("Nested IFs")
const age = 25;
const hasLicense = true;

if (age >= 18) {

    if (hasLicense) {
        console.log("You can drive");
    }

}

sep("Else If")

let score = 78;

if (score >= 90) {
    console.log("Grade: A — Excellent");
}
else if (score >= 80 && score < 90) {
    console.log("Grade: B — Good");
}
else if (score >= 70 && score < 80) {
    console.log("Grade: C — Can do better");
}
else if (score >= 60 && score < 70) {
    console.log("Grade: D — Needs Improvement");
}
else if (score >= 50 && score < 60) {
    console.log("Grade: E : Bring Paranets");
} else {
    console.log("You can sell momos, pizza!")
}



const marks = 68;

if (marks >= 90) {
    console.log("A");
} else if (marks >= 75) {
    console.log("B");
} else if (marks >= 60) {
    console.log("C");
} else {
    console.log("Fail");
}

// const age = 12;

// if (age < 13) {
//     console.log("Child");
// } else if (age < 20) {
//     console.log("Teen");
// } else {
//     console.log("Adult");
// }

const number = 15;

if (number > 20) {
    console.log("A");
} else if (number > 10) {
    console.log("B");
} else if (number > 5) {
    console.log("C");
} else {
    console.log("D");
}


// const a = 25;
// const b = 40;
// const c = 30;

// if (a >= b && a >= c) {
//     console.log(`${a} is the largest`);
// } else if (b >= a && b >= c) {
//     console.log(`${b} is the largest`);
// } else {
//     console.log(`${c} is the largest`);
// }
