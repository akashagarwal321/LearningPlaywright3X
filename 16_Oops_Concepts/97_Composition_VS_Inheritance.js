// . First, remember inheritance
// Suppose we have a Vehicle class.
class Vehicle {
    start() {
        console.log("Vehicle started");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Car is driving");
    }
}

class Bike extends Vehicle {
    ride() {
        console.log("Bike is riding");
    }
}


// Here:
// - Car inherits from Vehicle.
// - Bike inherits from Vehicle.
// - Both get the start() method.
// This relationship makes sense because a car is a vehicle, and a bike is a vehicle.

// This is called an IS-A relationship.

// Now, what is composition?
// Imagine we have a car.

// A car has:
// - An engine.
// - A music system.
// - A navigation system.
// - A braking system.
// Would you say a car is an engine?

// No.

// A car has an engine.

// This is a HAS-A relationship, and it's a good way to think about composition.

// Composition means building a larger object by combining smaller objects that have their own responsibilities.

// Let's implement it.
class Engine {
    start() {
        console.log("Engine started");
    }
}

class MusicSystem {
    playMusic() {
        console.log("Playing music");
    }
}

class Navigation {
    navigate() {
        console.log("Navigation started");
    }
}


// Now let's compose these into a Car.
class Car {
    constructor() {
        this.engine = new Engine();
        this.musicSystem = new MusicSystem();
        this.navigation = new Navigation();
    }

    startCar() {
        this.engine.start();
    }
}


// Usage:
const car = new Car();

car.startCar();

car.musicSystem.playMusic();

car.navigation.navigate();



// 4. A more practical example: Automation framework
// Let's imagine we're building a Playwright framework.

// We have:
// - Browser management
// - Authentication
// - Logging
// - Test data management
// One approach is to put everything into one giant BasePage class and make every page inherit from it.

// But that's not necessarily a good design.

// Instead, we can create independent components.
class Logger {
    log(message) {
        console.log(`[LOG] ${message}`);
    }
}

class AuthService {
    login(username, password) {
        console.log(`Logging in: ${username}`);
    }
}

class TestData {
    getUser() {
        return {
            username: "testuser",
            password: "password123"
        };
    }
}


// Now create a test workflow using composition:
class LoginWorkflow {

    constructor() {
        this.logger = new Logger();
        this.auth = new AuthService();
        this.testData = new TestData();
    }

    execute() {
        const user = this.testData.getUser();

        this.logger.log("Starting login");

        this.auth.login(
            user.username,
            user.password
        );
    }
}

const workflow = new LoginWorkflow();

workflow.execute();


// Output:
// [LOG] Starting login
// Logging in: testuser


// The workflow combines three independent components.

// Each component can be maintained or replaced without having to change the entire class hierarchy.

// This is a simplified illustration of composition in framework architecture.