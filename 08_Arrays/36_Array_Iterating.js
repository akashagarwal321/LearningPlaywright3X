//traditional for loop way

const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

for(let i = 0; i < fruits.length;i++){
    console.log(fruits[i]);
}


console.log("******************separator*********************")
//for of way

for (let fruit of fruits){ //// for..of -- give values
    console.log(fruit);
}

console.log("******************separator*********************")

for (let fruit_index in fruits){  ///// for..in gives indexes instead of values
    console.log(fruit_index);
    console.log(fruits[fruit_index]); // to print value
}

console.log("******************separator*********************")

for(let entry of fruits.entries()){ /// for [index,value] of array.items()
    console.log(entry);
}

console.log("******************separator*********************")


for(let [a,b] of fruits.entries()){ /// for [index,value] of array.items()
    console.log(a,b);
}

console.log("******************separator*********************")
//for ... each -- returns (element,index,array) which can be used with arrow function

fruits.forEach((fruit)=> {console.log(fruit);}); // only element
fruits.forEach((fruit,index)=> {console.log(index,fruit);}); // element, index
fruits.forEach((fruit,index,fruits)=> {console.log(index,fruit,fruits);}); // element, index, array


// forEach() and return

// You'll sometimes see:

const browsers = ["chromium", "firefox", "webkit"];

browsers.forEach((browser) => {
    if (browser === "firefox") {
        return;         // Here return skips the current callback execution. // It does not stop the entire forEach.
    }

    console.log(browser);
});



