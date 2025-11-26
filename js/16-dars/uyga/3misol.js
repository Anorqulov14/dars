const car = {
    brand: "Chevrolet",
    model: "Cobalt",
    year: 2022,
    getAge(currentYear){
        if(currentYear > car.year){
            return `${currentYear - car.year} yoshda`
        }else if(currentYear == car.year){
            return `shu yili ishlab chiqarilgan`
        }
        else{
            return `Bu yildan  ${car.year - currentYear} yil keyin mashina ishlab chiqarilgan`
        }
    }
}

console.log(car.getAge(2025));

