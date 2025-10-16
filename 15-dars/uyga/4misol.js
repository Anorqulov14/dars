const checkPassword = function(pw) {
    pw = String(pw)
    if(pw.length >= 8 ){
        return "Yaxshi"
    }else{
        return "Zaif"
    }
}

console.log(checkPassword(13334444));
