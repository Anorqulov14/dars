let raqamlar = [1, 5, 2, 7, 5, 9, 2, 1, 3, 10, 3]

let set = new Set(raqamlar)
set = [...set].sort((a,b) => a-b)

console.log(set);
