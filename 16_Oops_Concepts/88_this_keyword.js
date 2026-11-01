// this keyword id determined by how the function is called - not where it is defined


//1. Case 1 - this inside normal objects - this refers to the current object

const car = {
    brand: "Hyundai",

    accelerate() {
        console.log(this.brand);
    },

    // or we can write in below format.. same way... 

    accelerate_Other : function(){
        console.log(this.brand);
    }
};

car.accelerate(); // Hyundai   /// since car is calling accelerate - this refers to car object
car.accelerate_Other(); //Hyundai


//2. Case 2 - this with constructor functions

function carF(brand){
    this.brand = brand

    this.accelerate = function() {
        console.log(this.brand);
    }
}

car1= new carF("Honda");
car2= new carF("Maruti");

car1.accelerate() // here this will refer to car1 object
car2.accelerate() //here this will refer to car2 object


//3. Case 3 - this with prototype methods

function CarP(brand){
    this.brand = brand;
}

CarP.prototype.accelerate = function (){
    console.log(this.brand)
}

carp1 = new CarP("Tata");
carp2 = new CarP("Mahindra");

carp1.accelerate(); // here also.. this will refer to the object which is calling the function
carp2.accelerate();

//4. Case 4- Important - Arrow function don't have their own this... they inherit from surrounding

const carA = {
    brand: "Hyundai",

    showBrand: () => {
        console.log(this.brand);
    }
    
};

carA.showBrand(); // Undefined as it cannot use the this from car

function test(){
    this.brand = "AkashCar"
    
    showBrand = () => {
        console.log(this.brand);
    }

    showBrand()
}

test()