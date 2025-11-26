let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 
let arr2 = []
for(let i of arr){
    if(i%2 == 0){
        arr2.push(i*i)
    }
}

console.log(arr2);


