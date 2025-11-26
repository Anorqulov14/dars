class Cars {
    static mator = true;

    constructor(name, marka, speed) {
        this.name = name;
        this.marka = marka;
        this.speed = speed;
    }

    tezligi() {
        if (this.speed == 0) {
            return `${this.name} toxtab turibdi`;
        } else {
            return `${this.name} tezligi ${this.speed}`;
        }
    }

    get harakatiBormi() {
        if (this.speed === 0) {
            return `mashina toxtagan`;
        } else {
            return `${this.name} tezligi ${this.speed}`;
        }
    }

    stopped() {
        this.speed = 0
        return `mashina toxtagan`;
    }
}

let avto = new Cars("Matiz", "Chevrolet", 0);

console.log(avto.tezligi());    
console.log(avto.stopped());      
console.log(avto.harakatiBormi); 
console.log(Cars.mator);          




