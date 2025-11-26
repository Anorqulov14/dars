let str = prompt("So'z kiriting");
str = String(str);
let a = 0

for(let i in str){
    if(str[i] == ' '){
        a += 1
    }
    
}
alert(`${str.length - a} ta harf bor`)
