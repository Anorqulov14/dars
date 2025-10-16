let num = 475
let saqla = 0
while(num){
    let oxirgi = num %10
    saqla +=oxirgi
    num = Math.floor(num/10)
}

console.log(saqla);
