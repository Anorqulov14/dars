function massiv(arr1,arr2) {
    arr1 = arr1.concat(arr2)
    let set = new Set(arr1)

    return Array(set)
}

console.log(massiv([1, 2, 3],[3, 4, 5]));
