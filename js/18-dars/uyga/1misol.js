let arr1 = [1, 4, 7, 10, 3, 8]
let arr2 = []

for(let i of arr1){
    if(i %2 == 0){
        arr2.push(i)
    }
}

console.log(arr2);
