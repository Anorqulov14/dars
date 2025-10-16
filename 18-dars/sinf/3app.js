let arr= [2, 5, 10, 7, 4, 6, 1, 0, 10, 8];

let a = [...new Set(arr)].sort((a,b) => b-a)

console.log(a);