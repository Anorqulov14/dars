const checkPhone = function(num){
    if(num.length < 4){
        return "Raqam yetarli emas"
    }else if(num[0] != "+"){
        return "+ ishorasini yodingizdan chiqardingiz"
    }else if(num[0] === "+" && num[1] === "9" && num[2] === "9" && num[3] === "8"){
        return "O'zbekiston nomeri"
    }else{
        return "Notog'ri raqam"
    }
}

console.log(checkPhone("9993"));


