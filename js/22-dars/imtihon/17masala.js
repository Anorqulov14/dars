function longStr(str) {
    let s = str.split(' ')
    let a = s[0].length
    for(let i = 1; i <= s.length;i++){
        if (a < s.length) {
            a = s[i]
        }
    }
    return a
}


let str = "I love JavaScript programming"

console.log(longStr(str));
