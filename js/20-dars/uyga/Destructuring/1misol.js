function family(){
    const oila = {
        ota: { ism: 'Akmal', yosh: 45, kasb: 'muhandis', maosh: 8000000 },
        ona: { ism: 'Gulnora', yosh: 42, kasb: 'o\'qituvchi', maosh: 5000000 },
        bola1: { ism: 'Sardor', yosh: 18, kasb: 'student' },
        bola2: { ism: 'Madina', yosh: 15, kasb: 'o\'quvchi' }
    };

    let { ota:   { ism: i1, yosh: y1, kasb: k1, maosh: m1 },
        ona:   { ism: i2, yosh: y2, kasb: k2, maosh: m2 },
        bola1: { ism: i3, yosh: y3, kasb: k3 },
        bola2: { ism: i4, yosh: y4, kasb: k4 }
    } = oila;

    console.log(`Ota: ${i1} yoshi: ${y1} kasbi: ${k1}  maosh: ${m1}`); 
    console.log(`Ona: ${i2} yoshi: ${y2} kasbi: ${k2} maosh: ${m2}`); 
    console.log(`Bola1: ${i3} yoshi: ${y3} kasbi: ${k3}`);     
    console.log(`Bola2: ${i4} yoshi: ${y4} kasbi: ${k4}`); 
}

family();