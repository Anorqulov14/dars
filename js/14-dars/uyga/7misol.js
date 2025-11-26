let num = 234;
let a = 1
while(num){
    let s = num%10;
    a*=s
    num = Math.floor(num/10)
}

console.log(a);