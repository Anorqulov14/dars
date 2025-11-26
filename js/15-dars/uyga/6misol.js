const timeConvert = function(hour) {
    let minute = hour * 60;
    let secound = hour * 3600;
    return `${hour} da  Minut - ${minute}  Secound - ${secound}`
}

console.log(timeConvert(2));
