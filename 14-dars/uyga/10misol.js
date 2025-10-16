let n = 86941;
let b = false

while (n) {
    let a = n % 10
    if(a ==5){
        b = true
        break;
    }
    n = Math.floor(n/10)
}

if(b == true){
    console.log("bor");
}else{
    console.log("yoq");
}