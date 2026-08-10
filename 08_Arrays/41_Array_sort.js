const fruits = ["Mango", "Apple", "Banana"];

fruits.sort();
console.log(fruits);

fruits.sort().reverse();
console.log(fruits); 

const numbers = [1,2,3,10,11, 13,20, 22,31,4,5]
numbers.sort();
console.log(numbers); //sorts strings lexicographically.

//thus,
numbers.sort((a,b)=>a-b);
console.log(numbers); // sort

//thus,
numbers.sort((a,b)=>b-a);
console.log(numbers); //reverse sorting for numbers

numbers.reverse();
console.log(numbers); 