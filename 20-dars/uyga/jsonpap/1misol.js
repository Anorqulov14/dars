
const kitoblarJSON = `[
    {
        "id": 1,
        "nomi": "JavaScript asoslari",
        "muallif": "Jahogir Xasanov",
        "janr": "Dasturlash",
        "narx": 80000,
        "sotuvda": true
    },
    {
        "id": 2,
        "nomi": "HTML va CSS sirlari",
        "muallif": "Jahongir Xasanov",
        "janr": "Web-dizayn",
        "narx": 65000,
        "sotuvda": false
    }
]`;

const kitoblar = JSON.parse(kitoblarJSON);

function barchaKitoblar() {
    kitoblar.forEach(kitob => {
        console.log(kitob.nomi);
    });
}

function muallifKitoblari(muallifNomi) {
    return kitoblar.filter(kitob => kitob.muallif === muallifNomi);
}

function sotuvdagikitoblar() {
    return kitoblar.filter(kitob => kitob.sotuvda === true);
}

function engQimmatKitob() {
    if (kitoblar.length === 0) return null;
    
    return kitoblar.reduce((engQimmat, hozirgiKitob) => {
        return hozirgiKitob.narx > engQimmat.narx ? hozirgiKitob : engQimmat;
    });
}

console.log("=== Barcha kitoblar ===");
barchaKitoblar();

console.log("\n=== Jahongir Xasanovning kitoblari ===");
console.log(muallifKitoblari("Jahongir Xasanov"));

console.log("\n=== Sotuvdagi kitoblar ===");
console.log(sotuvdagikitoblar());

console.log("\n=== Eng qimmat kitob ===");
console.log(engQimmatKitob());