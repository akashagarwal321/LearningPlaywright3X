let arr = [1,2,3];

console.log(arr);

//push() --- add at end
new_array_push = arr.push(4); // push element at end and also return the lenght of the new array
console.log(new_array_push); /// will print the lenght of new array (always additions will show length)
console.log(arr);

arr.push(5,6,7,8); // can add multiple
console.log(arr); // [1,2,3,4,5,6,7,8]



arr = [1,2,3,4]
//pop() ---- remove from end
new_array_pop =arr.pop();
console.log(new_array_pop); /// will print the value being removed***


//unshift() ---- add at start
new_array_unshift = arr.unshift(0);
console.log(new_array_unshift); // will print the length of new array (after addition)
console.log(arr);


//shift() --- remove at start
new_array_shift = arr.shift();
console.log(new_array_shift); // will print the value being removed
console.log(arr);



// | Method      | Action | Location  | Returns         |
// | ----------- | ------ | --------- | --------------- |
// | `push()`    | Add    | End       | New length      |
// | `pop()`     | Remove | End       | Removed element |
// | `unshift()` | Add    | Beginning | New length      |
// | `shift()`   | Remove | Beginning | Removed element |


