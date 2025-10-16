const sumOddEven = (n) => {
    let couple = 0
    let odd = 0
    for(let i =1;i<=n;i++){
        if(i%2==0){
            couple += i;
        }else{
            odd += i
        }
    }

    return (`Juft - ${couple}  Toq - ${odd}`)
}

console.log(sumOddEven(6));
