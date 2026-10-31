import {a,convert_to_capital} from "./80_Export.js"
console.log(a);
console.log(convert_to_capital("akash"));

import { BASE_URL } from "./80_Export.js";
console.log(BASE_URL);

import {x as A, y as B, z as C} from './80_Export.js' // importing with Alias
//import { notToExport } from "./80_Export.js"; //will not work as no export was done


console.log(A,B,C);


import { test_class} from "./80_Export.js";

let obj = new test_class();
obj.test_inclass("sample")
