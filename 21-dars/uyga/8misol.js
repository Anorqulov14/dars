function ortachaBaxo(arr){
    let a = arr.reduce((sum, b) => sum + b, 0)
    return a/arr.length
}

console.log(ortachaBaxo([80, 90, 100]));
