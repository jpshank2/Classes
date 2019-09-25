class Vehicle {
    constructor(manufac, numWheels) {
        this.manufac = manufac;
        this.numWheels  = numWheels;
    }
    
    aboutVehicle() {
        console.log(`${this.manufac} made a vehicle that has ${this.numWheels} wheels.`);
    }
}

class Truck extends Vehicle {
    constructor(manufac, numWheels, numDoors) {
        super(manufac, numWheels);
        this.numDoors = numDoors;
        this.bed = true;
    }

    aboutVehicle() {
        console.log(`${this.manufac} makes a truck that has ${this.numWheels} wheels, ${this.numDoors} doors, and a truck bed.`);    
    }
}

class Sedan extends Vehicle {
    constructor(manufac, numWheels, numDoors, size, mpg) {
        super(manufac, numWheels);
        this.numDoors = numDoors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle() {
        console.log(`${this.manufac} makes a sedan that has ${this.numWheels} wheels, ${this.numDoors} doors, is a ${this.size} size, and gets ${this.mpg} miles per gallon.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(manufac, numWheels) {
        super(manufac, numWheels);
        this.numDoors = 0;
        this.handlebar = true;
        this.steeringWheel = false;
    }

    aboutVehicle() {
        console.log(`${this.manufac} makes a motorcycle that has ${this.numWheels} wheels, ${this.numDoors} doors, and a handlebar instead of a steering wheel.`);
    }
}

var testVehicle = new Vehicle("Car", 4);
testVehicle.aboutVehicle();

var testTruck = new Truck("Ford", 4, 2);
testTruck.aboutVehicle();

var testSedan = new Sedan("Toyota", 4, 4, "small", 32);
testSedan.aboutVehicle();

var testMotor = new Motorcycle("Suzuki", 2);
testMotor.aboutVehicle();
