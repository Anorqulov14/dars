function student(){
    let map = new Map()

    map.set("Elyor",5)
       .set("Eldor", 4)
       .set("Elbek",5)
       
    map.get("Elyor")
    map.size
    map.delete("Elyor")
    map.clear()
    
    return map
}

console.log(student());
