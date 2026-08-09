//syntax

value = 10;
switch(value){
    case 10:
        //code
        break;
    case 20:
        //code
        break;
    default:
        //code
        //break not needed
}


const role = "Manager";

switch(role){
    case "Admin":
        console.log("full access");
        break;
    case "Manager":
        console.log("Limited Access");
        break;
    case "Tester":
        console.log("Test Access");
        break;
    default:
        console.log("Unknown Role");
}




const day = "Saturday";

switch (day) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("Weekday");
        break;

    default:
        console.log("Invalid Day");
}

//switcg with conditions

let testScore = 85;
switch (true) {
    case (testScore >= 95):
        console.log("Outstanding — Top performer");
        break;
    case (testScore >= 85):
        console.log("Excellent — Above expectations");
        break;
    case (testScore >= 70):
        console.log("Good — Meets expectations");
        break;
    case (testScore >= 50):
        console.log("Needs Improvement");
        break;
    default:
        console.log("Unsatisfactory — Requires training");
}

/// switch is strict macthed
let status = 0;
console.log(typeof status)
switch (status) {
    case false:
        console.log("false matched");
        break;
    case 0:
        console.log("0 matched");
        break;
}