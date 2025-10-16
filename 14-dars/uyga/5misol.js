let num = 71;
if (num == 2){
    console.log("tub");

}else if(num == 1){
    console.log("tub emas");
}else if(num %2 == 0){
    console.log("tub emas");
}else{
    for (let i = 2; i < num; i++){
        if(num %i === 0){
            console.log("tub emas");
            break;
        }
        else{
            console.log("tub");
            break;
        }
    }
}


