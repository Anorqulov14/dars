const digitProduct = function(n) {
    let a = 1 
    while(n){
        let s = n%10;
        a *= s
        n = Math.floor(n/10)
    }

    return a
}

console.log(digitProduct(333));