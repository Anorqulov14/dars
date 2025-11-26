function sumNumbersDivision(n){
    let y = 0
    let d = n
    while(n){
        let s = n%10
        y += s
        n = Math.floor(n/10)
    }
    if(d%y==0){
        return true
    }else{
        return false
    }
}

console.log(sumNumbersDivision(30));
