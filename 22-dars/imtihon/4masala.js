function averageValue(obj){
    let a = 0
    for(let i of obj.grades){
        a += i
    }
    return a/obj.grades.length
}


let student = { name: "Ali", grades: [85, 90, 78, 92, 88] };

console.log(averageValue(student));
