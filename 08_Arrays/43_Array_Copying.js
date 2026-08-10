const original = [10, 20, 30];

const copy = original; //this is not copying.. this is just reference change

copy.pop()
console.log(copy);
console.log(original); // original is also updated - thus not copy
original.push(40);
console.log(copy)
//Copying now

//Shallow Copies - for simple array it is fine- independent copies
copy1 = [...original];
console.log(copy1);
copy1.pop();
console.log(copy1);
console.log(original); //original is not changed -- also called shallow copy

//another ways to copy

copy2 = original.slice(); //another way
console.log(copy2);

//another way

copy3 = Array.from(original);
console.log(copy3);

//another way
copy4 = original.concat();
console.log(copy4);

//but for nester array - even shallow copy habe issues --- we need deep copy

arr = [[1,2],[3,4],5,6];
copy_arr = [...arr]; // we can use any shallow copy way

console.log(copy_arr);
console.log(copy_arr[3]); // prints 6 -- let's change it

copy_arr[3] = 7; // now the value is upted to 7 from 6
console.log(copy_arr); // will show updated with 7
console.log(arr);    //will still show with 6 --- till here all fine

//but

console.log(copy_arr[0][0]); // right now 1
copy_arr[0][0] = 10 ; //updating to 1

console.log(copy_arr); //updated 10 in copied array
console.log(arr); // updated 10 in original array as well -- that's why.. not an independent copy.. still shallow

//solution

arr1 = arr = [[1,2],[3,4],5,6];
ind_copy = structuredClone(arr1);
console.log(ind_copy);

ind_copy[0][0] = 10;
console.log(ind_copy); // shows updated inside nested
console.log(arr1); // shows original value - not updated even in nested --- this is true independent



//
console.log("***********");
const orig = [[1, 2], [3, 4]];

const shallow = [...orig];
const deep = structuredClone(orig);

shallow[0][0] = 99;
deep[1][0] = 88;

console.log(orig);
console.log(shallow);
console.log(deep);