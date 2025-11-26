function qabulQil(n) {
    return function(x) {
        return x * n;
    };
}

let times3 = qabulQil(3);

console.log(times3(5));
