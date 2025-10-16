function repeat(arr){
    for(let i = 0; i <= arr.length;i++){
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] == arr[j]){
                return arr[i],arr[j]
            }
        }
    }
}

let a = [2, 5, 1, 3, 5, 1,2]

console.log(repeat(a));