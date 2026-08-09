
// truthy if js treats as true in a boolean context
// falsy if js treats as false in a boolean context


//Examples of Truthy and Falsy
let sep = (value=null)=> value ? console.log(`******* ${value} ********`) : console.log("******* Sep ********");
let check = condition => console.log(Boolean(condition));

sep();
check(true); //truthy
check(false); //falsy

sep();
check("akash"); //truthy
check(""); //falsy

sep();
check(123); //truthy
check(0); //falsy
check(-0); //falsy

sep();
check(-10); // truthy -- negative but not falsy

sep();
check([]); //t
check({});  //t

sep();
sep();

check(0n); //f - 0 bigint
check(null); //false
check(undefined); //falsy
check(NaN);


sep("truthy and falsy combined with !");

check(!"akash"); // becomes falsy
check(!""); // becomes truthy

sep("truthy and falsy combined with &&");

check("" || "guest");
console.log("" || "guest"); //guest

console.log("Akash" || "Guest"); //Akash

console.log(0 || 100); // as 0 is falsy
console.log(0 ?? 100); //0 - as this cares for null and 0 is not null
