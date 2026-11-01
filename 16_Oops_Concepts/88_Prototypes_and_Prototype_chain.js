//Every JS function has an internal link to another object called its prototype
//Ex

function Car(brand, color) {
    this.brand = brand;
    this.color = color;
    this.speed = 0;
}

Car.prototype.accelerate = function() {     // here Car function have .prototype... and we are creating a method in that prototype.. 
    this.speed += 10;                       //so when multiple objects are created from function - ideally new accelerate
    console.log(this.speed);
};


const car1 = new Car("Hyundai", "Red");
const car2 = new Car("Honda","Black");

car1.accelerate(); //10 to car1
car1.accelerate(); //20 to car1

car2.accelerate(); //10 to car2

//Just notice one thing... here... every time a new object is created... a new function is also created for accelerate... like again and again declarations are happening with each new object created
// there should be a way to share this function declaration somehow -- next chapter --prototypes

console.log(car1.accelerate === car2.accelerate); //true --- now comes true as both are same function being shared



///this is exact this which works for below

const name1 = "Akash";

console.log(name1.toUpperCase()); // these toUpperCase and all methods comes from String.prototype
console.log(name1.includes("ka"));


//With Modern classes (which we will learn in detail) -- the classes automatically handles this

class CarClass{
    constructor(brand, color){
        this.brand = brand
        this.color = color
        this.speed = 0
    }

    accelerate(){
        this.speed += 10
        console.log(this.brand,this.color,this.speed)
    }
}

carObj1 = new CarClass("Hyundai","Red");
carObj2 = new CarClass("Honda","Black");

carObj1.accelerate();
carObj1.accelerate();

carObj2.accelerate();

console.log(carObj1.accelerate === carObj2.accelerate) //true -- as they are same function .. .behind the scenes.. modern classes automatically takes care and save in Car.prototype
