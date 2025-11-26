const reverseNumber = (n) =>{
    let a = 0
    while (n) {
        let s = n%10
        a = a * 10 + s
        n = Math.floor(n/10)
    }

    return a
}

console.log(reverseNumber(123));