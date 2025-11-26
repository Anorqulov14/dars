function unique_nums(){
    let set = new Set()

    set.add(1)
       .add(2) 
       .add(3) 
       .add(4) 
       .add(5) 

    set.has(4)
    set.delete(5)
    set.size
    set.clear()

    return set
}

console.log(unique_nums());
