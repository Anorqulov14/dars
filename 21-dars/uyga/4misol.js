function siz(arr){
    let a = []
    for(let i of arr){
        a.push(i.length)
    }
    return a
}


let words = ["apple", "banana", "kiwi", "strawberry"];
console.log(siz(words));

