function birthday(y, m, d) {
    let now = new Date().getTime();
    let date2 = new Date(y, m, d).getTime();
    let year = Math.floor((now - date2) / (1000 * 60 * 60 * 24 * 365.25));
    return year;
}

console.log(birthday(2000, 0, 1)); 

