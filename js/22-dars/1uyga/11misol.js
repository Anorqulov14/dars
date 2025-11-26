function maxCocaCola(N, K) {
    let ichilgan = 0;
    let bosh = 0;

    while (N > 0) {
        ichilgan += N;
        bosh += N;
        N = Math.floor(bosh / K);
        bosh = bosh % K;
    }
    return ichilgan;
}

console.log(maxCocaCola(10, 3));
