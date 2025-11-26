const cars = {
    marka : "Chevrolet",
    model : "Gm",
    yil : 2025,
    texnik_holati : {
        dvigatel_hajmi : 1.6,
        ot_kuchi : 130,
        rang : "oq"
    }
}

let car = {...cars} // structuredClone

car.texnik_holati.rang = "qora"

console.log(cars);
