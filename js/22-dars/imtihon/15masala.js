function revers(num) {
    num = String(num)
    num = num.split('').reverse().join('');
    return Number(num)
}

console.log(revers(12345));
