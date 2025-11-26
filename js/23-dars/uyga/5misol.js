class Technology {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }

    getInfo() {
        return `Brand: ${this.brand}, Narx: ${this.price}$`;
    }
}

class Computer extends Technology {
    constructor(brand, price, processor) {
        super(brand, price); 
        this.processor = processor;
    }

    getInfo() {
        return `Brand: ${this.brand}, Narx: ${this.price}$, Processor: ${this.processor}`;
    }
}

class Laptop extends Computer {
    constructor(brand, price, processor, batteryLife) {
        super(brand, price, processor);
        this.batteryLife = batteryLife;
    }

    getInfo() {
        return `Brand: ${this.brand}, Narx: ${this.price}$, Processor: ${this.processor}, Batareya muddati: ${this.batteryLife} soat`;
    }
}

let tech = new Technology("Samsung", 500);
let comp = new Computer("HP", 800, "Intel i5");
let lap = new Laptop("Apple", 2000, "M3 Pro", 15);

console.log(tech.getInfo());
console.log(comp.getInfo());
console.log(lap.getInfo());
