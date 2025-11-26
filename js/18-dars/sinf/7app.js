function shaxmat(x,y){
    if(isNaN(x) == false){
        return "harf kiriting"
    }
    if(x === "a" && x === y%2 == 0){
        return "white"
    }else if(x === "c" && x === y%2 == 0){
        return "white"
    }else if(x === "e" && x === y%2 == 0){
        return "white"
    }else if(x === "g" && x === y%2 == 0){
        return "white"
    }else if(x === "b" && x === y%2 != 0){
        return "white"
    }else if(x === "d" && x === y%2 != 0){
        return "white"
    }else if(x === "f" && x === y%2 != 0){
        return "white"
    }else if(x === "h" && x === y%2 != 0){
        return "white"
    }else{
        return "black"
    }
}

console.log(shaxmat(2,2));


