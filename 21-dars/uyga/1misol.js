function juft(arr){
    let arr2 = arr.filter(a => a%2==0)
    return arr2
}

let arr = [3, 6, 9, 12, 15, 18]

console.log(juft(arr));
