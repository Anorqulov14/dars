let n = 567;
let a = 0
while (n) {
    let s = n%10;
    a += s
    n = Math.floor(n/10)
}

console.log(a);