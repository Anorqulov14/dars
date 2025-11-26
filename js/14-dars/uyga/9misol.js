let n = 56983;
let s = n %10
while(n > 0){
    let a = n %10
    if(s<a){
        s = a
    }
    n = Math.floor(n /10)
}

console.log(s);
