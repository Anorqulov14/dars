function repeat(arr){
    let arr2 = []
    for(let i = 0; i <= arr.length;i++){
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] == arr[j]){
                arr2.push(arr[j])
            }
        }
    }
    return arr2
}

let arrr = [1, 2, 3, 2, 4, 5, 1 ,3]

console.log(repeat(arrr));
