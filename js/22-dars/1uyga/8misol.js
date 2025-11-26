function kunlarOrasi(birth1, birth2) {
    let d1 = new Date(birth1);
    let d2 = new Date(birth2);

    if (d1 > d2) [d1, d2] = [d2, d1];

    let kunFarqi = Math.floor((d2 - d1) / (1000 * 60 * 60 * 24));
    let oyFarqi = (d2.getMonth() - d1.getMonth()) + (d2.getFullYear() - d1.getFullYear()) * 12;

    return { kun: kunFarqi, oy: oyFarqi };
}

console.log(kunlarOrasi("2000-05-10", "2000-08-20"));
