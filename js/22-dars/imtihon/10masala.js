function palindrome(str) {
    let a = ""
    let b = str.toLowerCase();
    str = str.toLowerCase().split('').reverse().join('');
    for(let i of str){
        a += i
    }    
    if(a == b){
        return "palindrome"
    }else{
        return "palindrome emas"
    }
}

console.log(palindrome("Aka"));


