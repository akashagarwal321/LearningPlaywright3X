
arr = [1,2,3,4,5,6];
//using splice to remove elements
arr_removed = arr.splice(1,3);  // returns the elements being removed as array
console.log(arr_removed); //prints [2,3,4] --- start, index with no of elements to remove
console.log(arr); //prints remaining elements --- [1,5,6]

arr = [1,2,3,4,5,6];
//using splice - add elements
arr_added = arr.splice(1,0,6,7,8,9); // should not remove anything.. but add 6,7,8,9 after 1 index
console.log(arr_added); // [] as no elements were removed
console.log(arr) // [1,6,7,8,9,2,3,4,5,6]


arr = [1,2,3,4,5,6];
//using splice - remove and add as well

arr_add_rem = arr.splice(1,4,6,7,8,9);
console.log(arr_add_rem); // [2,3,4,5]
console.log(arr); //[1,6,7,8,9,6]
