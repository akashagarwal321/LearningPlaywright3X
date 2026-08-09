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