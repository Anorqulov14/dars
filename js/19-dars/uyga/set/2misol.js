function unique_names(){
    let set = new Set()

    set.add("Eldor")
       .add("Elyor") 
       .add("Elbek") 
       .add("Muhammad")  

    set.has("Elbek")
    // set.forEach(value => console.log(value))
    set.size

    return set
}

console.log(unique_names());