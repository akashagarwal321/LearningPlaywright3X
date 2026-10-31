// let a = "test";

// let BASE_URL = "https://google.com"

// function convert_to_capital(sname){

//     return sname.toUpperCase();
// }


//suppose we want the above functions and variables in another js file.. then we will do an export.. like below

export let a = "test";

export let BASE_URL = "https://google.com";

export function convert_to_capital(sname){

    return sname.toUpperCase();
};


export class test_class{
   
   constructor(){
        let xx = "42";
        const tt = "aada";
}
    test_inclass(text) {     
        console.log("print the text", text)
    }
    
    
}



let x = 1;
let y = 2;
let z = 3;


export {x,y,z}; // we can also do like this  Mulitple exports



let notToExport = "this variable is local"

//we are not exporting the notToExport variable
