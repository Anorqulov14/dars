function myConcat(...arrays) {
    return arrays.reduce((acc, arr) => acc.concat(arr), []);
}

console.log(myConcat([1,2,3],[4,5],[6,7]));
console.log(myConcat([1],[2],[3],[4],[5],[6],[7]));
console.log(myConcat([1,2],[3,4]));
console.log(myConcat([4,4,4,4,4]));
