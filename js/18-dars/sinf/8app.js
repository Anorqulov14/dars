function maxCola(N, K) {
    return N + Math.floor((N - 1) / (K - 1));
}

console.log(maxCola(11, 3));
console.log(maxCola(1605, 1998)); 
console.log(maxCola(7, 4)); 
