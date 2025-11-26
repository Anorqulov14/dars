class Cars{
    constructor(brand,model,year){
        this.brand = brand
        this.model = model
        this.year = year
    }

    getCarAge(){
        return 2025 - this.year
    }

    isOldCar(getCarAge){
        let age = this.getCarAge()
        return age > 10 ? "mashina eski" : "mashina yangi"
    }

}

let car = new Cars("chevrolet","Malibu",2016)

console.log(car.getCarAge());

console.log(car.isOldCar());

