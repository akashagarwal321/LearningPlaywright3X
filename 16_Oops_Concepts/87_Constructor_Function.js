//Imagine we need to create multiple Car objects

// const car1 = {
//     brand: "Hyundai",
//     color: "White",
//     speed: 0
// } 

// const car2 = {
//     brand: "Honda",
//     color: "Black",
//     speed: 0
// } 

//if we need to create 100 cars - the above is not right way... so comes constuctor function

// function Car(brand,color){
//     this.brand = brand;
//     this.color = color;
//     this.speed = 0; 
// }                                   // notice this is normal function - but have this keyword to tell that properties are being assigned to the object of the function

// const car1 = new Car("Hyundai", "Red");     // we will use "new" keyword to create an object and assign values to that

// const car2 = new Car("Honda","Black");

// console.log(car1);
// console.log(car2);

// //Output of above:
// Car { brand: 'Hyundai', color: 'Red', speed: 0 }
// Car { brand: 'Honda', color: 'Black', speed: 0 }


//More extended example below

function Car(brand,color){
    this.brand = brand;
    this.color = color;
    this.speed = 0; 

    this.accelerate = function(){
        this.speed +=10;
        console.log(this.brand, this.color, this.speed);
    };
}


const car1 = new Car("Hyundai", "Red");
const car2 = new Car("Honda","Black");

car1.accelerate(); //10 to car1
car1.accelerate(); //20 to car1

car2.accelerate(); //10 to car2

//Just notice one thing... here... every time a new object is created... a new function is also created for accelerate... like again and again declarations are happening with each new object created
// there should be a way to share this function declaration somehow -- next chapter --prototypes

console.log(car1.accelerate === car2.accelerate); //false - -as both are different functions