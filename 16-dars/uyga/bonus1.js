function palindrom(str){
    str = String(str);
    let p = ""

    for(let i =str.length-1;i>=0;i--){
        p += str[i]
    }

    if(p === str){
        return "Palindrom"
    }else{
        return "Palindrom emas"
    }
}

console.log(palindrom("aka"));
console.log(palindrom("salom"));