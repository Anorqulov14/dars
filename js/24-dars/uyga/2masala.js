class Transport {
    constructor(fuel) {
        if (fuel < 0) {
            throw new Error("Yonilgi manfiy bolishi mumkin emas!");
        }
        this.fuel = fuel;
    }

    move() {
        console.log("Transport harakatlanmoqda");
    }
}

class Bicycle extends Transport {
    constructor() {
        super(0);
    }

    move() {
        console.log("Velosiped pedallar yordamida harakatlanmoqda");
    }
}

class Car extends Transport {
    constructor(fuel) {
        super(fuel);
    }

    move() {
        console.log("Mashina harakatlanmoqda");
    }
}

try {
    const bike = new Bicycle();
    bike.move();

    const car = new Car(20);
    car.move();

    const badCar = new Car(-5);
} 
catch (error) {
    console.log("Xato:", error.message);
}

