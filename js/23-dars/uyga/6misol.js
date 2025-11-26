class Vehicle {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    move() {
        return `${this.name} transport harakatlanmoqda.`;
    }
}

class Car extends Vehicle {
    move() {
        return `${this.name} mashina yolda ${this.speed} km/soat tezlikda harakatlanmoqda.`;
    }
}

class Boat extends Vehicle {
    move() {
        return `${this.name} kema suvda ${this.speed} km/soat tezlikda harakatlanmoqda.`;
    }
}

class Airplane extends Vehicle {
    move() {
        return `${this.name} samolyot havoda ${this.speed} km/soat tezlikda uchmoqda.`;
    }
}

let car = new Car("BMW", 120);
let boat = new Boat("Titanic", 60);
let airplane = new Airplane("Airbus A320", 900);

console.log(car.move());
console.log(boat.move());
console.log(airplane.move());
