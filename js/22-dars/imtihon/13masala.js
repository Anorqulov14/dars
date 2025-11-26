function summedUp(arr) {
    return arr.reduce((y,v) => y+v);
}

let nums = [1, 2, 3, 4, 5];
console.log(summedUp(nums));
