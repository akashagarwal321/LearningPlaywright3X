const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];


//always remember - start is included... but end is excluded
slice_result = fruits.slice(1,4); //start index - 1, end index -4 (but exclusive of this end index ) - so will take till index 3
console.log(slice_result);  //prints ["Banana", "Mango", "Orange"]
//Slice doesn't change original array 
//pop,push,unshift,shift and splice - all change array - that's means mutuate the array
console.log(fruits) // nothing changed in original - prints original array

//slice with one argument

console.log(fruits.slice(3)); // prints whatever is there from this index until end

//slice with negative index -- can be used to print let's say last 2 elements of array

console.log(fruits.slice(-2)); //prints from reverse 2nd index till again end. same result as above

console.log(fruits.slice(0))
console.log(fruits.slice(-3,-5)); //prints nothing as it starts 3rd from reverse 3 but then try to go right... but -5 again goes back.. doen't work









