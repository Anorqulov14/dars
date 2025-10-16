function grades(arr){
    let arr2 = []
    for(let i of arr){
        if(80<= i.grade){
            arr2.push(i.name)
        }
    }
    return arr2
}


let students = [
    { name: "Ali", grade: 90 },
    { name: "Vali", grade: 87 },
    { name: "Hasan", grade: 60 }
];

console.log(grades(students));

