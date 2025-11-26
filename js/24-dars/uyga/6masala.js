class Parking {
    constructor(capacity) {
        this.capacity = capacity;  
        this.cars = []; 
    }

    addCar(plateNumber) {
        if (this.cars.length >= this.capacity) {
            throw new Error("Parking full");
        }
        this.cars.push(plateNumber);
        return `${plateNumber} parked successfully`;
    }

    removeCar(plateNumber) {
        const index = this.cars.indexOf(plateNumber);
        if (index === -1) {
            throw new Error("Car not found");
        }
        this.cars.splice(index, 1);
        return `${plateNumber} left the parking`;
    }
}

try {
    const p = new Parking(2);
    console.log(p.addCar("123"));
    console.log(p.addCar("456"));

    console.log(p.removeCar("456"));
} catch (error) {
    console.log(error.message);
}
