try {
   class Cars{
    constructor(model, year, speed){
        this.model = model
        this.year = year
        this.speed = speed
    }

    accelerate(){
        this.speed += 10
    }

    brake(){
        this.speed -= 5 
    }

    getSpeed(){
        if (this.speed < 0) {
            throw new Error("Speed cannot be negative");
        }else{
            return this.speed
        }
    }
} 

let car = new Cars("Toyota",2020,10)

car.accelerate()
console.log(car.getSpeed());

car.brake()
console.log(car.getSpeed());



} catch (err) {
    console.log(`Xatolik bor ${err.message}`);
}


