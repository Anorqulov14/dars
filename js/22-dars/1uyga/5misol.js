function kvadratlar(sonlar) {
    
    const result = sonlar.map(x => x * x);
    return result
}

const sonlar = [2, 3, 5, 8];
console.log(kvadratlar(sonlar));
